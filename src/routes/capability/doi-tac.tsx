import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Handshake, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { SubNav } from "@/components/site/SubNav";

export const Route = createFileRoute("/capability/doi-tac")({
  head: () => ({
    meta: [
      { title: "Đối tác chiến lược – C83 Group" },
      { name: "description", content: "Đối tác chiến lược C83 Group: mạng lưới hơn 1000 đối tác trong và ngoài nước cùng hệ sinh thái 11 công ty thành viên, mang đến giải pháp cho mọi công trình." },
      { name: "keywords", content: "đối tác chiến lược C83 Group, mạng lưới đối tác, đối tác quốc tế, hợp tác chiến lược, thương hiệu đối tác, hệ sinh thái C83" },
      { property: "og:title", content: "Đối tác chiến lược – C83 Group" },
      { property: "og:description", content: "Hợp tác cùng các thương hiệu hàng đầu trong và ngoài nước để mang đến giải pháp tốt nhất cho mọi công trình." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://c83group.vn/capability/doi-tac" },
    ],
    links: [{ rel: "canonical", href: "https://c83group.vn/capability/doi-tac" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Năng lực & vị thế", item: "https://c83group.vn/capability" },
            { "@type": "ListItem", position: 3, name: "Đối tác chiến lược", item: "https://c83group.vn/capability/doi-tac" },
          ],
        }),
      },
    ],
  }),
  component: PartnersPage,
});

const SUBNAV = [
  { label: "Tổng quan", to: "/capability" },
  { label: "Hồ sơ năng lực", to: "/capability/ho-so-nang-luc" },
  { label: "Dự án tiêu biểu", to: "/capability/du-an" },
  { label: "Chứng chỉ & giải thưởng", to: "/capability/chung-chi" },
  { label: "Đối tác chiến lược", to: "/capability/doi-tac" },
];

const TRUST = [
  { icon: Building2, t: "11 công ty thành viên", d: "Hệ sinh thái khép kín" },
  { icon: Handshake, t: "1000+ đối tác", d: "Trong nước & quốc tế" },
  { icon: Calendar, t: "15+ năm đồng hành", d: "Cùng đối tác phát triển" },
];

function PartnersPage() {
  return (
    <PageShell
      title="Đối tác chiến lược"
      subtitle="Hợp tác cùng các thương hiệu hàng đầu trong và ngoài nước để mang đến giải pháp tốt nhất cho mọi công trình."
      breadcrumbs={[
        { label: "Trang chủ", to: "/" },
        { label: "Năng lực & vị thế", to: "/capability" },
        { label: "Đối tác chiến lược" },
      ]}
    >
      <SubNav items={SUBNAV} />
      <div className="space-y-16 lg:space-y-24">
        {/* Partner logo wall */}
        <section className="scroll-mt-28">
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Đối tác chiến lược</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground">
              Mạng lưới <span className="text-primary">đối tác toàn cầu</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Sức mạnh của C83 Group đến từ những mối quan hệ hợp tác bền vững. Chúng tôi đồng hành cùng
              các thương hiệu hàng đầu trong và ngoài nước, kiến tạo chuỗi giá trị toàn diện và mang đến
              giải pháp tối ưu cho mọi công trình.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <Reveal key={i} delay={i * 40}>
                <div className="aspect-[3/2] rounded-xl border border-border bg-card grid place-items-center text-muted-foreground/50 font-black tracking-wider hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition">
                  PARTNER {i + 1}
                </div>
              </Reveal>
            ))}
          </div>

          {/* trust strip */}
          <Reveal className="mt-12">
            <div className="rounded-2xl bg-surface-alt border border-border p-6 lg:p-8 grid sm:grid-cols-3 gap-6 text-center">
              {TRUST.map((x) => (
                <div key={x.t} className="flex flex-col items-center">
                  <x.icon className="h-9 w-9 text-primary" strokeWidth={1.5} />
                  <div className="mt-3 font-black text-foreground">{x.t}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{x.d}</div>
                </div>
              ))}
            </div>
          </Reveal>
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
