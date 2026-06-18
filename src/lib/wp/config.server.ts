import process from "node:process";

// Server-only WordPress config. The .server.ts suffix keeps this file (and the
// auth token) out of the client bundle. Read env INSIDE the function so it
// resolves per-request (matters on edge runtimes where env binds at request
// time). See ../config.server.ts for the same pattern.

export type WpConfig = {
  /** Full WPGraphQL endpoint, e.g. https://cms.c83group.vn/graphql */
  endpoint: string;
  /** Optional Bearer token for private/preview queries (JWT, app password…). */
  authToken?: string;
};

export function getWpConfig(): WpConfig {
  const endpoint = process.env.WORDPRESS_GRAPHQL_ENDPOINT;
  if (!endpoint) {
    throw new Error(
      "WORDPRESS_GRAPHQL_ENDPOINT is not set. Copy .env.example to .env and fill it in.",
    );
  }

  return {
    endpoint,
    authToken: process.env.WORDPRESS_AUTH_TOKEN || undefined,
  };
}
