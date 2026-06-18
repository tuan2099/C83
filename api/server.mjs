// Vercel serverless adapter for the TanStack Start SSR build.
//
// `npm run build` emits a Web-standard fetch handler at dist/server/server.js
// ({ fetch(request, env, ctx) }). Vercel's Node runtime can invoke a function
// either with the Web (Request) signature or the Node (req, res) signature,
// so we support both and forward everything to the SSR handler. Static client
// assets are served by Vercel's CDN from dist/client (see vercel.json), so this
// function only ever runs for SSR routes and server functions.

import { Readable } from "node:stream";

import serverEntry from "../dist/server/server.js";

function toWebRequest(req) {
  const protocol = req.headers["x-forwarded-proto"] ?? "https";
  const host = req.headers["x-forwarded-host"] ?? req.headers.host ?? "localhost";
  const url = new URL(req.url ?? "/", `${protocol}://${host}`);

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (Array.isArray(value)) {
      for (const item of value) headers.append(key, item);
    } else if (value != null) {
      headers.set(key, value);
    }
  }

  const init = { method: req.method, headers };
  if (req.method !== "GET" && req.method !== "HEAD") {
    init.body = Readable.toWeb(req);
    init.duplex = "half";
  }

  return new Request(url, init);
}

async function sendWebResponse(res, response) {
  const setCookie =
    typeof response.headers.getSetCookie === "function"
      ? response.headers.getSetCookie()
      : undefined;

  response.headers.forEach((value, key) => {
    if (key.toLowerCase() !== "set-cookie") {
      res.setHeader(key, value);
    }
  });

  if (setCookie?.length) {
    res.setHeader("set-cookie", setCookie);
  }

  res.writeHead(response.status, response.statusText);

  if (!response.body) {
    res.end();
    return;
  }

  Readable.fromWeb(response.body).pipe(res);
}

export default async function handler(reqOrRequest, res) {
  // Web signature: Vercel passed a Fetch API Request and expects a Response back.
  if (reqOrRequest instanceof Request) {
    return serverEntry.fetch(reqOrRequest, {}, {});
  }

  // Node signature: adapt (req, res) <-> Request/Response.
  try {
    const request = toWebRequest(reqOrRequest);
    const response = await serverEntry.fetch(request, {}, {});
    await sendWebResponse(res, response);
  } catch (error) {
    console.error(error);
    if (!res.headersSent) {
      res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    }
    res.end("Internal Server Error");
  }
}
