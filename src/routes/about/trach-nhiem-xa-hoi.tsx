import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Heart, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { SubNav } from "@/components/site/SubNav";

const SUBNAV = [
  { label: "Tổng quan", to: "/about" },
  { label: "Tầm nhìn – Sứ mệnh", to: "/about/tam-nhin-su-menh" },
  { label: "Ban điều hành", to: "/about/ban-dieu-hanh" },
  { label: "Lịch sử", to: "/about/lich-su" },
  { label: "Trách nhiệm xã hội", to: "/about/trach-nhiem-xa-hoi" },
];

const PILLARS = [
  {
    icon: Leaf,
    tag: "Environment",
    t: "Môi trường",
    d: "Ưu tiên vật liệu xanh, tiết kiệm năng lượng và giảm thiểu tác động tới môi trường trong mọi công trình.",
  },
  {
    icon: Heart,
    tag: "Social",
    t: "Xã hội",
    d: "Chăm lo phúc lợi nhân sự, đầu tư cho cộng đồng và lan tỏa giá trị tích cực tới xã hội.",
  },
  {
    icon: Target,
    tag: "Governance",
    t: "Quản trị",
    d: "Vận hành minh bạch, tuân thủ chuẩn mực quốc tế và đề cao đạo đức kinh doanh.",
  },
];

export const Route = createFileRoute("/about/trach-nhiem-xa-hoi")({
  head: () => ({
    meta: [
      { title: "Trách nhiệm xã hội & ESG – C83 Group" },
      { name: "description", content: "Trách nhiệm xã hội của C83 Group: cam kết phát triển bền vững theo chuẩn ESG với ba trụ cột môi trường, xã hội và quản trị minh bạch — kim chỉ nam cho mọi hoạt động của tập đoàn." },
      { name: "keywords", content: "trách nhiệm xã hội C83 Group, ESG, phát triển bền vững, môi trường xã hội quản trị, CSR, trách nhiệm cộng đồng, kinh doanh bền vững" },
      { property: "og:title", content: "Trách nhiệm xã hội & ESG – C83 Group" },
      { property: "og:description", content: "Cam kết phát triển bền vững theo chuẩn ESG: môi trường, xã hội và quản trị minh bạch trong mọi hoạt động của C83 Group." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://c83group.vn/about/trach-nhiem-xa-hoi" },
    ],
    links: [{ rel: "canonical", href: "https://c83group.vn/about/trach-nhiem-xa-hoi" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Về tập đoàn", item: "https://c83group.vn/about" },
            { "@type": "ListItem", position: 3, name: "Trách nhiệm xã hội", item: "https://c83group.vn/about/trach-nhiem-xa-hoi" },
          ],
        }),
      },
    ],
  }),
  component: CSRPage,
});

function CSRPage() {
  return (
    <PageShell
      title="Trách nhiệm xã hội"
      subtitle="Phát triển gắn liền với trách nhiệm cộng đồng theo chuẩn ESG — kim chỉ nam cho mọi hoạt động của C83 Group."
      breadcrumbs={[
        { label: "Trang chủ", to: "/" },
        { label: "Về tập đoàn", to: "/about" },
        { label: "Trách nhiệm xã hội" },
      ]}
    >
      <SubNav items={SUBNAV} />

      <div className="space-y-16 lg:space-y-24">
        {/* Intro */}
        <section>
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Trách nhiệm xã hội</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground">
              Phát triển gắn liền với <span className="text-primary">trách nhiệm cộng đồng</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              C83 Group cam kết phát triển bền vững theo chuẩn ESG: bảo vệ môi trường, chăm lo xã hội
              và quản trị minh bạch. Chúng tôi tin rằng kinh doanh bền vững là kinh doanh có trách nhiệm —
              hướng tới giá trị lâu dài cho khách hàng, cộng đồng và thế hệ tương lai.
            </p>
          </Reveal>
        </section>

        {/* ESG pillars */}
        <section>
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Ba trụ cột ESG</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground">
              Khung phát triển <span className="text-primary">bền vững</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {PILLARS.map((p, i) => (
              <Reveal key={p.tag} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 hover-lift relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition" />
                  <p.icon className="h-10 w-10 text-primary relative" strokeWidth={1.5} />
                  <div className="mt-4 text-xs font-black tracking-[0.25em] uppercase text-primary relative">{p.tag}</div>
                  <h3 className="mt-1 text-lg font-black text-foreground relative">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed relative">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA banner */}
        <section>
          <Reveal>
            <div className="rounded-3xl bg-secondary text-secondary-foreground p-8 lg:p-12 grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center overflow-hidden relative">
              <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
              <div className="relative">
                <SectionLabel light>Chiến lược ESG</SectionLabel>
                <h2 className="mt-3 text-2xl lg:text-3xl font-black">
                  Tìm hiểu sâu hơn về <span className="text-gradient-gold">cam kết bền vững</span>
                </h2>
                <p className="mt-4 text-white/80 leading-relaxed">
                  Khám phá chi tiết chiến lược ESG của C83 Group: các mục tiêu, sáng kiến và kết quả
                  cụ thể trên cả ba trụ cột môi trường, xã hội và quản trị.
                </p>
                <Button asChild size="lg" className="mt-6 bg-gradient-gold text-gold-foreground font-bold shadow-gold">
                  <Link to="/esg">Tìm hiểu chiến lược ESG <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
              <div className="relative grid grid-cols-3 gap-3">
                {[{ icon: Leaf, l: "Environment" }, { icon: Heart, l: "Social" }, { icon: Target, l: "Governance" }].map((e) => (
                  <div key={e.l} className="rounded-xl bg-white/10 border border-white/15 p-4 text-center">
                    <e.icon className="h-7 w-7 text-accent mx-auto" />
                    <div className="mt-2 text-xs font-bold uppercase tracking-wider text-white/85">{e.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </PageShell>
  );
}
