// Public entry for the WordPress data layer.
//
// Safe to import from anywhere:
export type { Member, NewsItem, Project, WpImage } from "./types";

// Server functions — import these in route loaders / useQuery. Their handlers
// run server-only; the WordPress endpoint and token stay out of the client.
export { getMembers, getNews, getProjects } from "./wp.functions";

// NOTE: do NOT re-export client.server.ts / config.server.ts here — they are
// server-only and must never be pulled into a client import graph.
