import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Leaf, Heart, Target, Users, HandHeart, FileText,
  Compass, CheckCircle2, ArrowRight, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SectionLabel, Counter } from "@/components/site/Reveal";
import { SubNav } from "@/components/site/SubNav";

export const Route = createFileRoute("/esg/")({
  head: () => ({
    meta: [
      { title: "Phát triển bền vững (ESG) – C83 Group" },
      { name: "description", content: "Tổng quan chiến lược ESG của C83 Group: ba trụ cột môi trường, xã hội và quản trị minh bạch, văn hóa doanh nghiệp, hoạt động cộng đồng và báo cáo bền vững." },
      { name: "keywords", content: "ESG, phát triển bền vững, C83 Group, môi trường, trách nhiệm xã hội, quản trị minh bạch, CSR, văn hóa doanh nghiệp, báo cáo bền vững" },
      { property: "og:title", content: "Phát triển bền vững (ESG) – C83 Group" },
      { property: "og:description", content: "Cam kết vì tương lai bền vững: môi trường, xã hội và quản trị minh bạch theo chuẩn quốc tế của tập đoàn C83 Group." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/esg" },
    ],
    links: [{ rel: "canonical", href: "/esg" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Phát triển bền vững", item: "https://c83group.vn/esg" },
          ],
        }),
      },
    ],
  }),
  component: EsgOverviewPage,
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
    d: "Ưu tiên vật liệu xanh, tối ưu tiêu thụ năng lượng và giảm thiểu phát thải trong toàn bộ chuỗi giá trị.",
  },
  {
    icon: Heart,
    t: "Xã hội",
    en: "Social",
    d: "Đặt con người làm trung tâm: chăm lo phúc lợi nhân sự, bảo đảm an toàn lao động và đóng góp cho cộng đồng.",
  },
  {
    icon: Target,
    t: "Quản trị",
    en: "Governance",
    d: "Vận hành minh bạch, tuân thủ pháp luật và đề cao đạo đức kinh doanh trong mọi quyết định chiến lược.",
  },
];

const STATS = [
  { n: 30, s: "%", l: "Tiết kiệm năng lượng" },
  { n: 50, s: "+", l: "Dự án CSR" },
  { n: 100, s: "%", l: "Minh bạch ESG" },
  { n: 15, s: "+", l: "Năm bền vững" },
];

const SECTIONS = [
  {
    icon: Target,
    to: "/esg/chien-luoc",
    t: "Chiến lược ESG",
    d: "Ba trụ cột Môi trường – Xã hội – Quản trị định hình mọi quyết định phát triển dài hạn của tập đoàn.",
  },
  {
    icon: Users,
    to: "/esg/van-hoa-doanh-nghiep",
    t: "Văn hóa doanh nghiệp",
    d: "Những giá trị cốt lõi nuôi dưỡng con người C83 và tạo nên sức mạnh nội tại của hệ sinh thái.",
  },
  {
    icon: HandHeart,
    to: "/esg/hoat-dong-cong-dong",
    t: "Hoạt động cộng đồng",
    d: "Hơn 50 chương trình CSR lan tỏa giá trị, sẻ chia trách nhiệm và đồng hành cùng cộng đồng.",
  },
  {
    icon: FileText,
    to: "/esg/bao-cao-ben-vung",
    t: "Báo cáo bền vững",
    d: "Minh bạch qua từng báo cáo ESG và phát triển bền vững thường niên có thể tải về.",
  },
];

function EsgOverviewPage() {
  return (
    <PageShell
      title="Phát triển bền vững (ESG)"
      subtitle="Cam kết vì tương lai bền vững — môi trường, xã hội và quản trị minh bạch theo chuẩn quốc tế."
      breadcrumbs={[{ label: "Trang chủ", to: "/" }, { label: "Phát triển bền vững" }]}
    >
      <SubNav items={SUBNAV} />

      <div className="space-y-16 lg:space-y-24">
        {/* Overview intro + 3-pillar summary */}
        <section>
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Tổng quan</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground">
              Ba trụ cột định hình <span className="text-primary">phát triển bền vững</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              C83 Group xây dựng chiến lược phát triển dựa trên ba trụ cột ESG quốc tế — Môi trường, Xã hội
              và Quản trị. Đây là kim chỉ nam cho mọi quyết định, hướng tới giá trị lâu dài cho khách hàng,
              cộng đồng và thế hệ tương lai.
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
                </div>
              </Reveal>
            ))}
          </div>

          {/* Stats row */}
          <Reveal delay={150}>
            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {STATS.map((s, i) => (
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

        {/* Grid of 4 cards linking to children */}
        <section>
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Khám phá ESG</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground">
              Bốn trụ nội dung <span className="text-primary">phát triển bền vững</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tìm hiểu chi tiết từng khía cạnh trong hành trình ESG của C83 Group.
            </p>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {SECTIONS.map((c, i) => (
              <Reveal key={c.to} delay={i * 80}>
                <Link
                  to={c.to as never}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 lg:p-8 hover-lift relative overflow-hidden"
                >
                  <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition" />
                  <div className="relative grid h-14 w-14 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-card">
                    <c.icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="relative mt-5 text-xl font-black text-foreground group-hover:text-primary transition">{c.t}</h3>
                  <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                  <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                    Tìm hiểu thêm <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <Reveal>
          <div className="rounded-3xl bg-gradient-primary text-primary-foreground p-8 lg:p-12 grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center overflow-hidden relative">
            <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative">
              <Compass className="h-11 w-11 text-accent" strokeWidth={1.5} />
              <h2 className="mt-5 text-2xl lg:text-3xl font-black">
                Đồng hành cùng C83 Group <span className="text-gradient-gold">vì một tương lai bền vững</span>
              </h2>
              <p className="mt-4 text-white/80 leading-relaxed">
                Hãy kết nối với chúng tôi để cùng hợp tác trong các sáng kiến phát triển bền vững,
                trách nhiệm xã hội và quản trị minh bạch.
              </p>
            </div>
            <div className="relative lg:justify-self-end">
              <Button asChild size="lg" className="bg-gradient-gold text-gold-foreground font-bold shadow-gold">
                <Link to="/contact">Liên hệ hợp tác <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="mt-3 sm:mt-0 sm:ml-3 border-2 border-white/60 bg-transparent text-white hover:bg-white hover:text-primary font-bold">
                <Link to="/esg/chien-luoc">Chiến lược ESG <ChevronRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </PageShell>
  );
}
