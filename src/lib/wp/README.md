# WordPress headless layer (`src/lib/wp`)

Data layer for using **WordPress as a headless CMS** over **WPGraphQL**. The FE
(this TanStack Start app) fetches content through server functions so the
WordPress endpoint and auth token never reach the browser.

## Files

| File | Runs on | Purpose |
| --- | --- | --- |
| `config.server.ts` | server | Reads `WORDPRESS_*` env. **Server-only.** |
| `client.server.ts` | server | `wpQuery()` GraphQL fetch + error handling. **Server-only.** |
| `queries.ts` | both | GraphQL query strings + raw response types. |
| `types.ts` | both | Clean domain types (`NewsItem`, `Project`, `Member`). |
| `wp.functions.ts` | server | `createServerFn` wrappers: `getNews`, `getProjects`, `getMembers`. |
| `index.ts` | — | Public entry (re-exports the server fns + types). |

> `*.server.ts` files are stripped from the client bundle by Vite — only import
> them from inside `createServerFn` handlers.

## 1. WordPress setup

Install + activate these plugins on the WordPress site:

- **WPGraphQL** — exposes `/graphql`.
- **Advanced Custom Fields** (ACF) — or Secure Custom Fields (SCF).
- **WPGraphQL for ACF** — surfaces ACF field groups in GraphQL.
- (optional) **Custom Post Type UI** — register CPTs without code.

Register the custom post types so they appear in GraphQL. When registering,
set `show_in_graphql: true` and the GraphQL names the queries expect:

| CPT | `graphql_single_name` | `graphql_plural_name` |
| --- | --- | --- |
| Project | `project` | `projects` |
| Member  | `member`  | `members`  |

ACF field groups (the **group name** becomes the GraphQL field — must match
`queries.ts`):

- `projectFields` on Project → text fields `category`, `location`
- `memberFields` on Member → text fields `code`, `description`

> "Tin tức" maps to **native posts**, so no CPT is needed for news.

If your real field/CPT names differ, edit `queries.ts` (the GraphQL strings and
the `Raw*` types) and the mappers in `wp.functions.ts` to match — that is the
only place names are hard-coded.

## 2. Env

```bash
cp .env.example .env
# then set WORDPRESS_GRAPHQL_ENDPOINT (and WORDPRESS_AUTH_TOKEN if needed)
```

## 3. Use it in a route

Server function + TanStack Query (data already configured in `src/router.tsx`):

```tsx
import { useQuery } from "@tanstack/react-query";
import { getNews } from "@/lib/wp";

function NewsSection() {
  const { data: news = [] } = useQuery({
    queryKey: ["news", { first: 3 }],
    queryFn: () => getNews({ data: { first: 3 } }),
  });
  // render news…
}
```

Or fetch in a route loader for SSR (recommended for SEO):

```tsx
export const Route = createFileRoute("/news")({
  loader: () => getNews({ data: { first: 12 } }),
  component: () => {
    const news = Route.useLoaderData();
    // render news…
  },
});
```

## Notes

- WP `title`/`excerpt`/content come back as **HTML** — sanitize before
  `dangerouslySetInnerHTML`, or strip tags for plain text.
- Errors throw `WpGraphQLError`; the root error boundary
  (`src/routes/__root.tsx`) will catch them during SSR.
- Not wired into any page yet — this is the foundation only. Migrate the
  hard-coded `NEWS` / `PROJECTS` / `MEMBERS` arrays in `src/routes/index.tsx`
  when ready.
- Contact form (currently an `alert()` in `index.tsx`) is **not** covered here.
  Add a `createServerFn({ method: "POST" })` that posts to a WP form plugin
  (Contact Form 7 / WPForms REST) or a WPGraphQL mutation.
