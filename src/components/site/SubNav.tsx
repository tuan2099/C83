import { Link, useRouterState } from "@tanstack/react-router";

export type SubNavItem = { label: string; to: string };

const norm = (p: string) => (p !== "/" && p.endsWith("/") ? p.slice(0, -1) : p);

/* Horizontal sub-navigation between sibling pages of a section (e.g. all
   pages under /about). Renders as pill links; the current page is highlighted.
   Place it at the very top of a page's content, inside PageShell. */
export function SubNav({ items }: { items: SubNavItem[] }) {
  const pathname = useRouterState({ select: (s) => norm(s.location.pathname) });

  return (
    <nav aria-label="Điều hướng mục" className="-mt-2 mb-12 lg:mb-16">
      <div className="flex flex-wrap gap-2 border-b border-border pb-4">
        {items.map((it) => {
          const active = norm(it.to) === pathname;
          return (
            <Link
              key={it.to}
              to={it.to as never}
              aria-current={active ? "page" : undefined}
              className={`px-4 py-2 rounded-full text-sm font-bold transition ${
                active
                  ? "bg-primary text-primary-foreground shadow-elegant"
                  : "bg-muted text-muted-foreground hover:bg-muted/70"
              }`}
            >
              {it.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
