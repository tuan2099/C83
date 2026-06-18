import { createServerFn } from "@tanstack/react-start";

import { wpQuery } from "./client.server";
import {
  MEMBERS_LIST_QUERY,
  NEWS_LIST_QUERY,
  PROJECTS_LIST_QUERY,
  type MembersListResponse,
  type NewsListResponse,
  type ProjectsListResponse,
  type RawMember,
  type RawPost,
  type RawProject,
} from "./queries";
import type { Member, NewsItem, Project } from "./types";

// Server functions: the .handler body runs server-only, so wpQuery (and the
// WordPress token it reads) never reach the browser. Call these from a route
// loader or a useQuery, e.g.:
//   const news = await getNews({ data: { first: 3 } })

/* --------------------------------- helpers ---------------------------------- */

// Lightweight input validation (zod is not installed in this project). Coerces
// `first` to a sane integer in [1, 100], defaulting to `fallback`.
function parseFirst(data: unknown, fallback: number): { first: number } {
  const raw = (data as { first?: unknown } | undefined)?.first;
  const n = typeof raw === "number" ? raw : Number(raw);
  const first = Number.isFinite(n) ? Math.min(100, Math.max(1, Math.trunc(n))) : fallback;
  return { first };
}

function img(node: { sourceUrl: string; altText: string } | undefined | null) {
  return node ? { url: node.sourceUrl, alt: node.altText ?? "" } : null;
}

function mapNews(p: RawPost): NewsItem {
  return {
    id: p.id,
    slug: p.slug,
    title: p.title,
    date: p.date,
    excerpt: p.excerpt,
    category: p.categories?.nodes?.[0]?.name ?? "",
    image: img(p.featuredImage?.node),
  };
}

function mapProject(p: RawProject): Project {
  return {
    id: p.id,
    slug: p.slug,
    title: p.title,
    category: p.projectFields?.category ?? "",
    location: p.projectFields?.location ?? "",
    image: img(p.featuredImage?.node),
  };
}

function mapMember(m: RawMember): Member {
  return {
    id: m.id,
    slug: m.slug,
    name: m.title,
    code: m.memberFields?.code ?? "",
    description: m.memberFields?.description ?? "",
    logo: img(m.featuredImage?.node),
  };
}

/* ------------------------------ server functions ----------------------------- */

export const getNews = createServerFn({ method: "GET" })
  .inputValidator((data: unknown) => parseFirst(data, 3))
  .handler(async ({ data }): Promise<NewsItem[]> => {
    const res = await wpQuery<NewsListResponse>(NEWS_LIST_QUERY, { first: data.first });
    return res.posts.nodes.map(mapNews);
  });

export const getProjects = createServerFn({ method: "GET" })
  .inputValidator((data: unknown) => parseFirst(data, 12))
  .handler(async ({ data }): Promise<Project[]> => {
    const res = await wpQuery<ProjectsListResponse>(PROJECTS_LIST_QUERY, { first: data.first });
    return res.projects.nodes.map(mapProject);
  });

export const getMembers = createServerFn({ method: "GET" })
  .inputValidator((data: unknown) => parseFirst(data, 11))
  .handler(async ({ data }): Promise<Member[]> => {
    const res = await wpQuery<MembersListResponse>(MEMBERS_LIST_QUERY, { first: data.first });
    return res.members.nodes.map(mapMember);
  });
