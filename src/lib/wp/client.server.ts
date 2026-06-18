import { getWpConfig } from "./config.server";

// Server-only GraphQL client for WordPress (WPGraphQL). Never import this from
// a component — the .server.ts suffix makes Vite throw if it reaches the
// client bundle. Call it only from createServerFn handlers (see wp.functions.ts).

export type GraphQLError = {
  message: string;
  path?: Array<string | number>;
  extensions?: Record<string, unknown>;
};

export class WpGraphQLError extends Error {
  readonly errors?: GraphQLError[];
  constructor(message: string, errors?: GraphQLError[]) {
    super(message);
    this.name = "WpGraphQLError";
    this.errors = errors;
  }
}

export async function wpQuery<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  const { endpoint, authToken } = getWpConfig();

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...(authToken ? { authorization: `Bearer ${authToken}` } : {}),
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new WpGraphQLError(
      `WordPress responded ${response.status} ${response.statusText}`,
    );
  }

  const json = (await response.json()) as { data?: T; errors?: GraphQLError[] };

  if (json.errors?.length) {
    throw new WpGraphQLError(
      json.errors.map((e) => e.message).join("; "),
      json.errors,
    );
  }

  if (!json.data) {
    throw new WpGraphQLError("WordPress returned an empty data payload");
  }

  return json.data;
}
