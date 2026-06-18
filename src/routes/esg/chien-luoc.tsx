import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Leaf, Heart, Target, Compass, CheckCircle2, ArrowRight, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SectionLabel, Counter } from "@/components/site/Reveal";
import { SubNav } from "@/components/site/SubNav";

export const Route = createFileRoute("/esg/chien-luoc")({
  head: () => ({
    meta: [
      { title: "Chiến lược ESG – Ba trụ cột phát triển bền vững | C83 Group" },
      { name: "description", content: "Chiến lược ESG của C83 Group dựa trên ba trụ cột: Môi trường với vật liệu xanh, Xã hội đặt con người làm trung tâm và Quản trị minh bạch theo chuẩn quốc tế." },
      { name: "keywords", content: "chiến lược ESG, ba trụ cột ESG, môi trường, xã hội, quản trị, vật liệu xanh, tiết kiệm năng lượng, C83 Group, phát triển bền vững" },
      { property: "og:title", content: "Chiến lược ESG – Ba trụ cột phát triển bền vững | C83 Group" },
      { property: "og:description", content: "Môi trường, Xã hội và Quản trị — ba trụ cột định hình mọi quyết định chiến lược của C83 Group." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/esg/chien-luoc" },
    ],
    links: [{ rel: "canonical", href: "/esg/chien-luoc" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Phát triển bền vững", item: "https://c83group.vn/esg" },
            { "@type": "ListItem", position: 3, name: "Chiến lược ESG", item: "https://c83group.vn/esg/chien-luoc" },
          ],
        }),
      },
    ],
  }),
  component: ChienLuocPage,
});

const SUBNAV = [
  { label: "Tổng quan", to: "/esg" },
  { label: "Chiến lược ESG", to: "/esg/chien-luoc" },
  { label: "Văn hóa doanh nghiệp", to: "/esg/van-hoa-doanh-nghiep" },
  { label: "Hoạt động cộng đồng", to: "/esg/hoat-dong-cong-dong" },
  { label: "Báo cáo bền vững", to: "/esg/bao-cao-ben-vung" },
];

const PILLARS = [
  {
    icon: Leaf,
    t: "Môi trường",
    en: "Environment",
    d: "Ưu tiên vật liệu xanh, tối ưu tiêu thụ năng lượng và giảm thiểu phát thải trong toàn bộ chuỗi giá trị, từ khâu cung ứng đến thi công và vận hành công trình.",
    points: [
      "Vật liệu xanh, thân thiện môi trường",
      "Tiết kiệm năng lượng & tài nguyên",
      "Giảm phát thải carbon trong vận hành",
      "Quản lý chất thải & tái chế hiệu quả",
    ],
  },
  {
    icon: Heart,
    t: "Xã hội",
    en: "Social",
    d: "Đặt con người làm trung tâm: chăm lo phúc lợi nhân sự, bảo đảm an toàn lao động và đóng góp tích cực cho cộng đồng nơi tập đoàn hoạt động.",
    points: [
      "Phúc lợi & phát triển nhân sự",
      "An toàn lao động theo chuẩn quốc tế",
      "Đóng góp tích cực cho cộng đồng",
      "Đa dạng, hòa nhập & cơ hội bình đẳng",
    ],
  },
  {
    icon: Target,
    t: "Quản trị",
    en: "Governance",
    d: "Vận hành minh bạch, tuân thủ pháp luật và đề cao đạo đức kinh doanh trong mọi quyết định chiến lược, bảo vệ lợi ích dài hạn của các bên liên quan.",
    points: [
      "Minh bạch trong quản trị & tài chính",
      "Tuân thủ pháp luật & chuẩn mực",
      "Đạo đức kinh doanh bền vững",
      "Quản trị rủi ro chủ động",
    ],
  },
];

const PILLAR_STATS = [
  { n: 30, s: "%", l: "Tiết kiệm năng lượng" },
  { n: 50, s: "+", l: "Dự án CSR" },
  { n: 100, s: "%", l: "Minh bạch ESG" },
  { n: 15, s: "+", l: "Năm bền vững" },
];

function ChienLuocPage() {
  return (
    <PageShell
      title="Chiến lược ESG"
      subtitle="Ba trụ cột Môi trường — Xã hội — Quản trị định hình mọi quyết định phát triển dài hạn của C83 Group."
      breadcrumbs={[
        { label: "Trang chủ", to: "/" },
        { label: "Phát triển bền vững", to: "/esg" },
        { label: "Chiến lược ESG" },
      ]}
    >
      <SubNav items={SUBNAV} />

      <div className="space-y-16 lg:space-y-24">
        {/* 3 pillars in full detail */}
        <section>
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Chiến lược ESG</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground">
              Ba trụ cột định hình <span className="text-primary">phát triển bền vững</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              C83 Group xây dựng chiến lược phát triển dựa trên ba trụ cột ESG quốc tế. Đây là kim chỉ nam
              cho mọi quyết định, hướng tới giá trị lâu dài cho khách hàng, cộng đồng và thế hệ tương lai.
            </p>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {PILLARS.map((p, i) => (
              <Reveal key={p.t} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 lg:p-8 hover-lift relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition" />
                  <div className="relative grid h-14 w-14 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-card">
                    <p.icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
                  </div>
                  <div className="relative mt-5 text-xs font-bold tracking-[0.25em] uppercase text-primary">{p.en}</div>
                  <h3 className="relative mt-1 text-xl lg:text-2xl font-black text-foreground">{p.t}</h3>
                  <p className="relative mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                  <ul className="relative mt-5 space-y-2.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-foreground">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Stats row */}
          <Reveal delay={150}>
            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {PILLAR_STATS.map((s, i) => (
                <div
                  key={s.l}
                  className={`rounded-2xl p-6 lg:p-7 shadow-card hover-lift ${
                    i === 0 ? "bg-gradient-primary text-primary-foreground" : "bg-card border border-border"
                  }`}
                >
                  <div className="text-3xl lg:text-4xl font-black">
                    <Counter end={s.n} suffix={s.s} />
                  </div>
                  <div className={`mt-1 text-sm ${i === 0 ? "text-white/85" : "text-muted-foreground"}`}>{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <Reveal>
          <div className="rounded-3xl bg-gradient-primary text-primary-foreground p-8 lg:p-12 grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center overflow-hidden relative">
            <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative">
              <Compass className="h-11 w-11 text-accent" strokeWidth={1.5} />
              <h2 className="mt-5 text-2xl lg:text-3xl font-black">
                Cùng hiện thực hóa <span className="text-gradient-gold">chiến lược bền vững</span>
              </h2>
              <p className="mt-4 text-white/80 leading-relaxed">
                Liên hệ với C83 Group để hợp tác trong các sáng kiến môi trường, xã hội và quản trị minh bạch.
              </p>
            </div>
            <div className="relative lg:justify-self-end">
              <Button asChild size="lg" className="bg-gradient-gold text-gold-foreground font-bold shadow-gold">
                <Link to="/contact">Liên hệ hợp tác <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="mt-3 sm:mt-0 sm:ml-3 border-2 border-white/60 bg-transparent text-white hover:bg-white hover:text-primary font-bold">
                <Link to="/esg/van-hoa-doanh-nghiep">Văn hóa doanh nghiệp <ChevronRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </PageShell>
  );
}
