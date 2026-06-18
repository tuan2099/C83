import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, ArrowRight, Mail, Newspaper, CalendarDays, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SectionLabel, Counter } from "@/components/site/Reveal";
import { NEWS, type NewsItem } from "@/lib/data/news";

export const Route = createFileRoute("/news/")({
  head: () => ({
    meta: [
      { title: "Tin tức & sự kiện – C83 Group" },
      { name: "description", content: "Cập nhật tin tức mới nhất từ C83 Group: sự kiện hợp tác, khởi công dự án, giải thưởng doanh nghiệp tiêu biểu, tin báo chí và bản tin nội bộ của tập đoàn đa ngành." },
      { name: "keywords", content: "C83 Group, tin tức, sự kiện, dự án, giải thưởng, báo chí, bản tin nội bộ, doanh nghiệp tiêu biểu, tập đoàn đa ngành" },
      { property: "og:title", content: "Tin tức & sự kiện – C83 Group" },
      { property: "og:description", content: "Sự kiện, dự án, giải thưởng, báo chí và bản tin nội bộ mới nhất từ hệ sinh thái 11 công ty thành viên của C83 Group." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Tin tức", item: "https://c83group.vn/news" },
          ],
        }),
      },
    ],
  }),
  component: NewsPage,
});

const CATEGORIES = ["Tất cả", "Sự kiện", "Dự án", "Giải thưởng", "Báo chí", "Bản tin nội bộ"] as const;

const STATS = [
  { icon: Newspaper, n: 9, s: "", l: "Tin bài mới nhất" },
  { icon: CalendarDays, n: 24, s: "+", l: "Sự kiện trong năm" },
  { icon: Trophy, n: 50, s: "+", l: "Giải thưởng & chứng nhận" },
];

function NewsCard({ item, featured = false, delay = 0 }: { item: NewsItem; featured?: boolean; delay?: number }) {
  return (
    <Reveal delay={delay} className={featured ? "sm:col-span-2 lg:col-span-3" : ""}>
      <article className="h-full">
        <Link
          to={`/news/${item.slug}` as never}
          className={`group flex h-full flex-col rounded-2xl bg-card border border-border overflow-hidden hover-lift ${
            featured ? "md:grid md:grid-cols-2" : ""
          }`}
        >
          {/* Gradient header placeholder */}
          <div
            className={`relative overflow-hidden bg-gradient-to-br from-primary/85 to-navy ${
              featured ? "aspect-[16/10] md:aspect-auto md:h-full md:min-h-[280px]" : "aspect-[16/10]"
            }`}
          >
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

          {/* Body */}
          <div className={`p-6 ${featured ? "lg:p-8 flex flex-col justify-center" : "flex flex-col"}`}>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" /> {item.date}
            </div>
            <h3
              className={`mt-3 font-black text-foreground leading-snug group-hover:text-primary transition ${
                featured ? "text-xl lg:text-2xl line-clamp-3" : "text-lg line-clamp-2"
              }`}
            >
              {item.title}
            </h3>
            <p className={`mt-3 text-sm text-muted-foreground leading-relaxed ${featured ? "line-clamp-3" : "line-clamp-2"}`}>
              {item.excerpt}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-3 transition-all">
              Đọc thêm <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </Link>
      </article>
    </Reveal>
  );
}

function NewsPage() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("Tất cả");
  const isAll = filter === "Tất cả";
  const list = isAll ? NEWS : NEWS.filter((n) => n.category === filter);
  const [featured, ...rest] = list;

  return (
    <PageShell
      title="Tin tức & sự kiện"
      subtitle="Cập nhật mới nhất từ C83 Group — sự kiện, dự án, giải thưởng, báo chí và bản tin nội bộ."
      breadcrumbs={[{ label: "Trang chủ", to: "/" }, { label: "Tin tức" }]}
    >
      <div className="space-y-16 lg:space-y-20">
        {/* Intro + stats */}
        <section>
          <Reveal className="max-w-3xl">
            <SectionLabel>Trung tâm tin tức</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground leading-tight">
              Dòng chảy thông tin <span className="text-primary">từ C83 Group</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Theo dõi những cột mốc, dự án và hoạt động nổi bật trên toàn hệ sinh thái 11 công ty thành viên —
              từ các sự kiện hợp tác chiến lược đến giải thưởng uy tín và tin tức báo chí.
            </p>
          </Reveal>

          <Reveal delay={150} className="mt-10 grid sm:grid-cols-3 gap-5">
            {STATS.map((s) => (
              <div key={s.l} className="rounded-2xl bg-card border border-border p-6 shadow-card hover-lift">
                <s.icon className="h-9 w-9 text-primary" strokeWidth={1.5} />
                <div className="mt-4 text-3xl lg:text-4xl font-black text-foreground">
                  <Counter end={s.n} suffix={s.s} />
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </Reveal>
        </section>

        {/* Filter + news grid */}
        <section>
          <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <SectionLabel>Tất cả bài viết</SectionLabel>
              <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground">
                Tin tức & <span className="text-primary">bản tin</span>
              </h2>
            </div>
          </Reveal>

          {/* Category filter pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition ${
                  filter === c
                    ? "bg-primary text-primary-foreground shadow-elegant"
                    : "bg-muted text-muted-foreground hover:bg-muted/70"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid: featured + rest when "Tất cả"; plain filtered grid otherwise */}
          {isAll ? (
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured && <NewsCard item={featured} featured />}
              {rest.map((n, i) => (
                <NewsCard key={n.slug} item={n} delay={(i + 1) * 60} />
              ))}
            </div>
          ) : (
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {list.map((n, i) => (
                <NewsCard key={n.slug} item={n} delay={i * 60} />
              ))}
            </div>
          )}
        </section>

        {/* Newsletter signup */}
        <Reveal>
          <div className="rounded-3xl bg-secondary text-secondary-foreground p-8 lg:p-12 grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center overflow-hidden relative">
            <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative">
              <SectionLabel light>Bản tin C83 Group</SectionLabel>
              <h2 className="mt-3 text-2xl lg:text-3xl font-black">
                Đăng ký nhận <span className="text-gradient-gold">bản tin</span> hàng tháng
              </h2>
              <p className="mt-4 text-white/80 leading-relaxed">
                Nhận tin tức, sự kiện và những cập nhật mới nhất từ hệ sinh thái C83 Group
                gửi trực tiếp đến hộp thư của bạn.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Cảm ơn bạn đã đăng ký nhận bản tin!");
              }}
              className="relative flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  required
                  placeholder="Nhập email của bạn"
                  aria-label="Email nhận bản tin"
                  className="w-full rounded-lg border border-input bg-background text-foreground pl-10 pr-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                />
              </div>
              <Button type="submit" size="lg" className="bg-gradient-gold text-gold-foreground font-bold shadow-gold hover:opacity-95 shrink-0">
                Đăng ký <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </Reveal>
      </div>
    </PageShell>
  );
}
