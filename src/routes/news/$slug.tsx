import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { NEWS, NEWS_BY_SLUG } from "@/lib/data/news";

export const Route = createFileRoute("/news/$slug")({
  head: ({ params }) => {
    const a = NEWS_BY_SLUG[params.slug];
    const url = `/news/${params.slug}`;
    if (!a) {
      return {
        meta: [
          { title: "Tin tức – C83 Group" },
          { name: "description", content: "Bài viết không tồn tại hoặc đã được di chuyển. Khám phá thêm tin tức và sự kiện mới nhất từ C83 Group." },
          { property: "og:type", content: "article" },
          { property: "og:url", content: url },
        ],
        links: [{ rel: "canonical", href: url }],
      };
    }

    const fullTitle = `${a.title} – C83 Group`;
    const title = fullTitle.length > 65 ? `${a.title.slice(0, 55).trimEnd()}… – C83 Group` : fullTitle;

    return {
      meta: [
        { title },
        { name: "description", content: a.excerpt },
        { name: "keywords", content: `C83 Group, ${a.category}, tin tức, ${a.title}` },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
              { "@type": "ListItem", position: 2, name: "Tin tức", item: "https://c83group.vn/news" },
              { "@type": "ListItem", position: 3, name: a.title, item: `https://c83group.vn${url}` },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: a.title,
            description: a.excerpt,
            articleSection: a.category,
            datePublished: toIsoDate(a.date),
            author: { "@type": "Organization", name: "C83 Group" },
            publisher: { "@type": "Organization", name: "C83 Group" },
            mainEntityOfPage: `https://c83group.vn${url}`,
          }),
        },
      ],
    };
  },
  component: NewsArticlePage,
});

/* "DD.MM.2026" -> "2026-MM-DD" for schema.org datePublished */
function toIsoDate(date: string): string {
  const [dd, mm, yyyy] = date.split(".");
  return `${yyyy}-${mm}-${dd}`;
}

function NewsArticlePage() {
  const { slug } = Route.useParams();
  const article = NEWS_BY_SLUG[slug];

  if (!article) {
    return (
      <PageShell
        title="Không tìm thấy bài viết"
        subtitle="Bài viết bạn tìm có thể đã được di chuyển hoặc không còn tồn tại."
        breadcrumbs={[{ label: "Trang chủ", to: "/" }, { label: "Tin tức", to: "/news" }, { label: "Bài viết" }]}
      >
        <div className="space-y-16 lg:space-y-20">
          <Reveal className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-bold tracking-widest uppercase">
              404 — Không tìm thấy
            </div>
            <h2 className="mt-5 text-2xl lg:text-3xl font-black text-foreground">
              Rất tiếc, bài viết này không khả dụng
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Vui lòng quay lại trang tin tức để khám phá những cập nhật mới nhất từ hệ sinh thái C83 Group.
            </p>
            <Button asChild size="lg" className="mt-7 bg-gradient-primary text-primary-foreground font-bold shadow-elegant hover:opacity-95">
              <Link to="/news">
                <ArrowLeft className="mr-2 h-4 w-4" /> Quay lại tin tức
              </Link>
            </Button>
          </Reveal>
        </div>
      </PageShell>
    );
  }

  const related = NEWS.filter((n) => n.slug !== article.slug).slice(0, 3);

  return (
    <PageShell
      title={article.title}
      subtitle={article.excerpt}
      breadcrumbs={[
        { label: "Trang chủ", to: "/" },
        { label: "Tin tức", to: "/news" },
        { label: article.title },
      ]}
    >
      <div className="space-y-16 lg:space-y-20">
        {/* Article body */}
        <section>
          <Reveal className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-4">
              <span className="px-3 py-1 rounded-md bg-accent text-gold-foreground text-xs font-black uppercase tracking-wider">
                {article.category}
              </span>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" /> {article.date}
              </span>
            </div>

            {/* Gradient hero placeholder */}
            <div className="mt-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/85 to-navy aspect-[16/9] shadow-card">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: "radial-gradient(circle at 30% 70%, white 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
            </div>

            <article className="mt-8 space-y-5">
              {article.content.map((paragraph, i) => (
                <p key={i} className="text-base lg:text-lg text-foreground/90 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </article>

            <div className="mt-10">
              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
              >
                <ArrowLeft className="h-4 w-4" /> Quay lại tin tức
              </Link>
            </div>
          </Reveal>
        </section>

        {/* Related news */}
        <section>
          <Reveal className="max-w-2xl">
            <SectionLabel>Tin liên quan</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground">
              Đọc thêm <span className="text-primary">tin tức khác</span>
            </h2>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((item, i) => (
              <Reveal key={item.slug} delay={i * 80}>
                <article className="h-full">
                  <Link
                    to={`/news/${item.slug}` as never}
                    className="group flex h-full flex-col rounded-2xl bg-card border border-border overflow-hidden hover-lift"
                  >
                    <div className="relative overflow-hidden bg-gradient-to-br from-primary/85 to-navy aspect-[16/10]">
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage: "radial-gradient(circle at 30% 70%, white 1px, transparent 1px)",
                          backgroundSize: "24px 24px",
                        }}
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-accent text-gold-foreground text-xs font-black uppercase tracking-wider">
                        {item.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" /> {item.date}
                      </div>
                      <h3 className="mt-3 text-lg font-black text-foreground leading-snug group-hover:text-primary transition line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {item.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                        Đọc thêm <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
