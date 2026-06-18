// GraphQL query strings + raw response shapes for WPGraphQL.
//
// IMPORTANT: the field names below assume a specific WordPress setup. Adjust
// them to match your actual registration — see README.md in this folder:
//   - `projects` / `members` require Custom Post Types registered with
//     `show_in_graphql: true` and the given `graphql_plural_name`.
//   - `projectFields` / `memberFields` are ACF field groups exposed via the
//     "WPGraphQL for ACF" plugin (the group name becomes the GraphQL field).
//
// These strings are plain data (no secrets) and are safe to import anywhere.

/* ----------------------------- News (native posts) ----------------------------- */

export const NEWS_LIST_QUERY = /* GraphQL */ `
  query NewsList($first: Int!) {
    posts(first: $first, where: { status: PUBLISH, orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        slug
        title
        date
        excerpt
        categories(first: 1) {
          nodes { name }
        }
        featuredImage {
          node { sourceUrl altText }
        }
      }
    }
  }
`;

export type RawPost = {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  categories: { nodes: Array<{ name: string }> };
  featuredImage: { node: { sourceUrl: string; altText: string } } | null;
};

export type NewsListResponse = { posts: { nodes: RawPost[] } };

/* ------------------------------- Projects (CPT) -------------------------------- */

export const PROJECTS_LIST_QUERY = /* GraphQL */ `
  query ProjectsList($first: Int!) {
    projects(first: $first, where: { status: PUBLISH }) {
      nodes {
        id
        slug
        title
        featuredImage {
          node { sourceUrl altText }
        }
        projectFields {
          category
          location
        }
      }
    }
  }
`;

export type RawProject = {
  id: string;
  slug: string;
  title: string;
  featuredImage: { node: { sourceUrl: string; altText: string } } | null;
  projectFields: { category: string | null; location: string | null } | null;
};

export type ProjectsListResponse = { projects: { nodes: RawProject[] } };

/* ------------------------------- Members (CPT) --------------------------------- */

export const MEMBERS_LIST_QUERY = /* GraphQL */ `
  query MembersList($first: Int!) {
    members(first: $first, where: { status: PUBLISH }) {
      nodes {
        id
        slug
        title
        featuredImage {
          node { sourceUrl altText }
        }
        memberFields {
          code
          description
        }
      }
    }
  }
`;

export type RawMember = {
  id: string;
  slug: string;
  title: string;
  featuredImage: { node: { sourceUrl: string; altText: string } } | null;
  memberFields: { code: string | null; description: string | null } | null;
};

export type MembersListResponse = { members: { nodes: RawMember[] } };
