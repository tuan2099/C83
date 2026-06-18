import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Leaf, Award, Trophy, Star, HardHat, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { SubNav } from "@/components/site/SubNav";

export const Route = createFileRoute("/capability/chung-chi")({
  head: () => ({
    meta: [
      { title: "Chứng chỉ & giải thưởng – C83 Group" },
      { name: "description", content: "Chứng chỉ & giải thưởng C83 Group: chứng nhận ISO 9001, ISO 14001, Top 100 doanh nghiệp, Thương hiệu Vàng và Sao Vàng Đất Việt khẳng định vị thế dẫn đầu." },
      { name: "keywords", content: "chứng chỉ C83 Group, giải thưởng C83 Group, ISO 9001, ISO 14001, Top 100 doanh nghiệp, Thương hiệu Vàng, Sao Vàng Đất Việt" },
      { property: "og:title", content: "Chứng chỉ & giải thưởng – C83 Group" },
      { property: "og:description", content: "Hệ thống chứng chỉ quốc tế và các giải thưởng uy tín khẳng định chất lượng và năng lực của C83 Group." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://c83group.vn/capability/chung-chi" },
    ],
    links: [{ rel: "canonical", href: "https://c83group.vn/capability/chung-chi" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Năng lực & vị thế", item: "https://c83group.vn/capability" },
            { "@type": "ListItem", position: 3, name: "Chứng chỉ & giải thưởng", item: "https://c83group.vn/capability/chung-chi" },
          ],
        }),
      },
    ],
  }),
  component: CertsPage,
});

const SUBNAV = [
  { label: "Tổng quan", to: "/capability" },
  { label: "Hồ sơ năng lực", to: "/capability/ho-so-nang-luc" },
  { label: "Dự án tiêu biểu", to: "/capability/du-an" },
  { label: "Chứng chỉ & giải thưởng", to: "/capability/chung-chi" },
  { label: "Đối tác chiến lược", to: "/capability/doi-tac" },
];

const CERTS = [
  { icon: ShieldCheck, t: "ISO 9001:2015", s: "Hệ thống quản lý chất lượng" },
  { icon: Leaf, t: "ISO 14001:2015", s: "Hệ thống quản lý môi trường" },
  { icon: Trophy, t: "Top 100 Doanh nghiệp", s: "Tiêu biểu Việt Nam 2026" },
  { icon: Award, t: "Thương hiệu Vàng", s: "5 năm liên tiếp 2021–2025" },
  { icon: Star, t: "Sao Vàng Đất Việt", s: "Giải thưởng thương hiệu uy tín" },
  { icon: HardHat, t: "Chứng nhận An toàn lao động", s: "Tuân thủ tiêu chuẩn thi công" },
];

function CertsPage() {
  return (
    <PageShell
      title="Chứng chỉ & giải thưởng"
      subtitle="Hệ thống chứng chỉ quốc tế và các giải thưởng uy tín khẳng định chất lượng và năng lực của C83 Group."
      breadcrumbs={[
        { label: "Trang chủ", to: "/" },
        { label: "Năng lực & vị thế", to: "/capability" },
        { label: "Chứng chỉ & giải thưởng" },
      ]}
    >
      <SubNav items={SUBNAV} />
      <div className="space-y-16 lg:space-y-24">
        {/* Certifications & awards grid */}
        <section className="scroll-mt-28">
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Chứng chỉ & giải thưởng</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground">
              Vị thế được <span className="text-primary">công nhận</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Mỗi chứng chỉ và giải thưởng là một minh chứng cho cam kết chất lượng không ngừng của
              C83 Group. Từ các tiêu chuẩn ISO quốc tế đến những vinh danh thương hiệu uy tín hàng đầu,
              chúng tôi liên tục khẳng định vị thế trên thị trường.
            </p>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTS.map((c, i) => (
              <Reveal key={c.t} delay={i * 70}>
                <div className="h-full rounded-2xl bg-card border border-border p-6 flex items-center gap-4 hover-lift">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                    <c.icon className="h-7 w-7" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-black text-foreground">{c.t}</div>
                    <div className="mt-0.5 text-sm text-muted-foreground">{c.s}</div>
                  </div>
                </div>
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
