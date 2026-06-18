import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Building2, Award, Handshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SectionLabel, Counter } from "@/components/site/Reveal";
import { SubNav } from "@/components/site/SubNav";

export const Route = createFileRoute("/capability/")({
  head: () => ({
    meta: [
      { title: "Năng lực & vị thế – C83 Group" },
      { name: "description", content: "Tổng quan năng lực & vị thế C83 Group: hồ sơ năng lực, hơn 500 dự án tiêu biểu, chứng chỉ ISO – giải thưởng và mạng lưới hơn 1000 đối tác chiến lược." },
      { name: "keywords", content: "C83 Group năng lực, vị thế C83 Group, hồ sơ năng lực, dự án tiêu biểu, chứng chỉ ISO, giải thưởng, đối tác chiến lược" },
      { property: "og:title", content: "Năng lực & vị thế – C83 Group" },
      { property: "og:description", content: "Hồ sơ năng lực, dự án tiêu biểu, chứng chỉ – giải thưởng và mạng lưới đối tác chiến lược của tập đoàn đa ngành C83 Group." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://c83group.vn/capability" },
    ],
    links: [{ rel: "canonical", href: "https://c83group.vn/capability" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Năng lực & vị thế", item: "https://c83group.vn/capability" },
          ],
        }),
      },
    ],
  }),
  component: CapabilityOverviewPage,
});

const SUBNAV = [
  { label: "Tổng quan", to: "/capability" },
  { label: "Hồ sơ năng lực", to: "/capability/ho-so-nang-luc" },
  { label: "Dự án tiêu biểu", to: "/capability/du-an" },
  { label: "Chứng chỉ & giải thưởng", to: "/capability/chung-chi" },
  { label: "Đối tác chiến lược", to: "/capability/doi-tac" },
];

const STATS = [
  { n: 500, s: "+", l: "Dự án hoàn thành" },
  { n: 15, s: "+", l: "Năm kinh nghiệm" },
  { n: 1000, s: "+", l: "Đối tác chiến lược" },
  { n: 50, s: "+", l: "Giải thưởng" },
];

const PILLARS = [
  {
    icon: FileText,
    t: "Hồ sơ năng lực",
    d: "Bộ hồ sơ pháp lý, lĩnh vực hoạt động và năng lực tài chính toàn diện — sẵn sàng tải về dạng PDF.",
    to: "/capability/ho-so-nang-luc",
  },
  {
    icon: Building2,
    t: "Dự án tiêu biểu",
    d: "Hàng trăm công trình trọng điểm khắp ba miền, từ vật liệu, âm thanh đến tổng thầu thi công.",
    to: "/capability/du-an",
  },
  {
    icon: Award,
    t: "Chứng chỉ & giải thưởng",
    d: "Hệ thống chứng chỉ quốc tế ISO cùng các giải thưởng uy tín khẳng định chất lượng và năng lực.",
    to: "/capability/chung-chi",
  },
  {
    icon: Handshake,
    t: "Đối tác chiến lược",
    d: "Mạng lưới hơn 1000 đối tác trong và ngoài nước, đồng hành kiến tạo giải pháp tốt nhất.",
    to: "/capability/doi-tac",
  },
];

function CapabilityOverviewPage() {
  return (
    <PageShell
      title="Năng lực & vị thế"
      subtitle="Niềm tin được kiến tạo từ giá trị thực — hồ sơ năng lực, dự án tiêu biểu, chứng chỉ và đối tác chiến lược."
      breadcrumbs={[{ label: "Trang chủ", to: "/" }, { label: "Năng lực & vị thế" }]}
    >
      <SubNav items={SUBNAV} />
      <div className="space-y-16 lg:space-y-24">
        {/* Overview + stats */}
        <section className="scroll-mt-28">
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Tổng quan năng lực</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground">
              Vị thế được <span className="text-primary">kiến tạo</span> từ giá trị thực
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Hơn 15 năm kiến tạo, C83 Group đã xây dựng một hồ sơ năng lực toàn diện với hàng trăm
              công trình quy mô lớn, hệ thống chứng chỉ quốc tế và mạng lưới đối tác chiến lược trải
              khắp cả nước. Khám phá chi tiết qua bốn trụ cột bên dưới.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((s, i) => (
              <Reveal key={s.l} delay={i * 70}>
                <div className="h-full rounded-2xl bg-card border border-border p-6 lg:p-8 text-center shadow-card hover-lift">
                  <div className="text-3xl lg:text-4xl font-black text-primary">
                    <Counter end={s.n} suffix={s.s} />
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Pillar cards → children */}
        <section className="scroll-mt-28">
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Khám phá chi tiết</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground">
              Bốn trụ cột <span className="text-primary">năng lực</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Mỗi trụ cột là một câu chuyện về cam kết chất lượng và vị thế dẫn đầu của C83 Group.
            </p>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {PILLARS.map((p, i) => (
              <Reveal key={p.t} delay={i * 80}>
                <Link
                  to={p.to as never}
                  className="group relative block h-full rounded-2xl bg-card border border-border p-7 lg:p-8 overflow-hidden hover-lift"
                >
                  <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition" />
                  <div className="relative">
                    <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                      <p.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-5 text-xl font-black text-foreground group-hover:text-primary transition">
                      {p.t}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                      Xem chi tiết <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <Reveal className="text-center">
          <p className="text-muted-foreground">Cần giải pháp trọn gói cho công trình của bạn?</p>
          <Button asChild size="lg" className="mt-4 bg-gradient-gold text-gold-foreground font-bold shadow-gold hover:opacity-95">
            <Link to="/contact">Yêu cầu báo giá <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </Reveal>
      </div>
    </PageShell>
  );
}
