import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SectionLabel, Counter } from "@/components/site/Reveal";
import { SubNav } from "@/components/site/SubNav";

export const Route = createFileRoute("/capability/ho-so-nang-luc")({
  head: () => ({
    meta: [
      { title: "Hồ sơ năng lực – C83 Group" },
      { name: "description", content: "Tải hồ sơ năng lực C83 Group dạng PDF: thông tin pháp lý, lĩnh vực hoạt động, năng lực tài chính, hơn 500 dự án và 15+ năm kinh nghiệm của tập đoàn đa ngành." },
      { name: "keywords", content: "hồ sơ năng lực C83 Group, company profile, hồ sơ năng lực PDF, năng lực tài chính, hồ sơ pháp lý, tải hồ sơ năng lực" },
      { property: "og:title", content: "Hồ sơ năng lực – C83 Group" },
      { property: "og:description", content: "Bộ hồ sơ năng lực toàn diện của C83 Group: pháp lý, tài chính, lĩnh vực hoạt động và dự án tiêu biểu, sẵn sàng tải về dạng PDF." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://c83group.vn/capability/ho-so-nang-luc" },
    ],
    links: [{ rel: "canonical", href: "https://c83group.vn/capability/ho-so-nang-luc" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Năng lực & vị thế", item: "https://c83group.vn/capability" },
            { "@type": "ListItem", position: 3, name: "Hồ sơ năng lực", item: "https://c83group.vn/capability/ho-so-nang-luc" },
          ],
        }),
      },
    ],
  }),
  component: ProfilePage,
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

const CONTENTS = [
  "Thông tin pháp lý & lịch sử hình thành tập đoàn",
  "Sơ đồ tổ chức & hệ sinh thái 11 công ty thành viên",
  "Sáu lĩnh vực hoạt động trọng yếu và năng lực cốt lõi",
  "Năng lực tài chính minh bạch & báo cáo kiểm toán",
  "Danh mục dự án tiêu biểu đã triển khai toàn quốc",
  "Hệ thống chứng chỉ, giải thưởng và mạng lưới đối tác",
];

function ProfilePage() {
  return (
    <PageShell
      title="Hồ sơ năng lực"
      subtitle="Bộ hồ sơ năng lực toàn diện của C83 Group — pháp lý, tài chính, lĩnh vực hoạt động và dự án tiêu biểu."
      breadcrumbs={[
        { label: "Trang chủ", to: "/" },
        { label: "Năng lực & vị thế", to: "/capability" },
        { label: "Hồ sơ năng lực" },
      ]}
    >
      <SubNav items={SUBNAV} />
      <div className="space-y-16 lg:space-y-24">
        {/* Profile gradient block */}
        <section className="scroll-mt-28">
          <Reveal>
            <div className="rounded-3xl bg-gradient-primary text-primary-foreground p-8 lg:p-12 grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-12 items-center overflow-hidden relative shadow-elegant">
              <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: "radial-gradient(circle at 20% 80%, white 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }} />
              <div className="relative">
                <SectionLabel light>Hồ sơ năng lực</SectionLabel>
                <h2 className="mt-3 text-3xl lg:text-4xl font-black leading-tight">
                  Bộ hồ sơ năng lực <span className="text-gradient-gold">toàn diện</span> của C83 Group
                </h2>
                <p className="mt-5 text-white/85 leading-relaxed">
                  Hơn 15 năm kiến tạo, C83 Group đã hoàn thiện hồ sơ năng lực với hàng trăm công trình quy mô lớn,
                  hệ thống chứng chỉ quốc tế và mạng lưới đối tác chiến lược trải khắp cả nước.
                  Tải về để khám phá chi tiết hồ sơ pháp lý, lĩnh vực hoạt động và các dự án tiêu biểu của tập đoàn.
                </p>
                <Button asChild size="lg" className="mt-7 bg-gradient-gold text-gold-foreground font-bold shadow-gold hover:opacity-95">
                  <a href="#"><Download className="mr-2 h-4 w-4" /> Tải hồ sơ năng lực (PDF)</a>
                </Button>
              </div>

              <div className="relative grid grid-cols-2 gap-4">
                {STATS.map((s) => (
                  <div key={s.l} className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur p-6">
                    <div className="text-3xl lg:text-4xl font-black text-accent">
                      <Counter end={s.n} suffix={s.s} />
                    </div>
                    <div className="mt-1 text-sm text-white/80">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Contents checklist */}
        <section className="scroll-mt-28">
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Nội dung hồ sơ gồm</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground">
              Những gì bạn sẽ <span className="text-primary">tìm thấy</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Hồ sơ năng lực được biên soạn đầy đủ, minh bạch để đối tác đánh giá toàn diện về C83 Group.
            </p>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            {CONTENTS.map((c, i) => (
              <Reveal key={c} delay={i * 70}>
                <div className="h-full rounded-2xl bg-card border border-border p-6 flex items-start gap-4 hover-lift">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground leading-relaxed">{c}</span>
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
