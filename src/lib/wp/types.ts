// Clean, client-safe domain types. These are what the rest of the app consumes
// — decoupled from the raw WPGraphQL response shape (mapping lives in
// wp.functions.ts). No secrets here, so this file is safe to import anywhere.

export type WpImage = {
  url: string;
  alt: string;
};

/** Maps to native WordPress posts (used by the "Tin tức" section). */
export type NewsItem = {
  id: string;
  slug: string;
  title: string;
  /** ISO date string from WP. */
  date: string;
  /** Plain-ish excerpt (WP returns HTML; strip/sanitize before rendering). */
  excerpt: string;
  category: string;
  image: WpImage | null;
};

/** Maps to a `project` custom post type + ACF (the "Dự án" section). */
export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  image: WpImage | null;
};

/** Maps to a `member` custom post type + ACF (the 11 "Đơn vị thành viên"). */
export type Member = {
  id: string;
  slug: string;
  /** e.g. "C83-01" */
  code: string;
  name: string;
  description: string;
  logo: WpImage | null;
};
