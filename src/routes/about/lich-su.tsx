import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
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

const HISTORY = [
  { year: "2011", t: "Khởi nguồn", d: "Thành lập đơn vị đầu tiên trong lĩnh vực vật liệu hoàn thiện." },
  { year: "2015", t: "Mở rộng ngành", d: "Phát triển sang âm thanh – trình chiếu và phụ kiện cửa & kính." },
  { year: "2019", t: "Hình thành tập đoàn", d: "Tái cấu trúc thành mô hình tập đoàn với 6 công ty thành viên." },
  { year: "2023", t: "Chuyển đổi số", d: "Ứng dụng AI vào bán hàng và vận hành toàn hệ thống." },
  { year: "2026", t: "Hệ sinh thái 11 đơn vị", d: "Hoàn thiện hệ sinh thái 11 công ty thành viên trên 6 lĩnh vực." },
];

export const Route = createFileRoute("/about/lich-su")({
  head: () => ({
    meta: [
      { title: "Lịch sử hình thành – C83 Group" },
      { name: "description", content: "Lịch sử hình thành C83 Group: hành trình hơn 15 năm từ một đơn vị vật liệu hoàn thiện năm 2011 đến hệ sinh thái 11 công ty thành viên trên 6 lĩnh vực vào năm 2026." },
      { name: "keywords", content: "lịch sử C83 Group, lịch sử hình thành, hành trình phát triển, cột mốc C83 Group, quá trình phát triển tập đoàn, 15 năm kinh nghiệm" },
      { property: "og:title", content: "Lịch sử hình thành – C83 Group" },
      { property: "og:description", content: "Hành trình hơn 15 năm từ một đơn vị vật liệu hoàn thiện đến hệ sinh thái 11 công ty thành viên trên 6 lĩnh vực." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://c83group.vn/about/lich-su" },
    ],
    links: [{ rel: "canonical", href: "https://c83group.vn/about/lich-su" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Về tập đoàn", item: "https://c83group.vn/about" },
            { "@type": "ListItem", position: 3, name: "Lịch sử", item: "https://c83group.vn/about/lich-su" },
          ],
        }),
      },
    ],
  }),
  component: HistoryPage,
});

function HistoryPage() {
  return (
    <PageShell
      title="Lịch sử hình thành"
      subtitle="Hành trình kiến tạo hơn 15 năm của C83 Group qua từng cột mốc phát triển."
      breadcrumbs={[
        { label: "Trang chủ", to: "/" },
        { label: "Về tập đoàn", to: "/about" },
        { label: "Lịch sử" },
      ]}
    >
      <SubNav items={SUBNAV} />

      <div className="space-y-16 lg:space-y-24">
        {/* Intro */}
        <section>
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Lịch sử hình thành</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground">
              Hành trình <span className="text-primary">kiến tạo</span> hơn 15 năm
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Từ một đơn vị vật liệu hoàn thiện năm 2011, C83 Group đã không ngừng mở rộng và hoàn thiện
              để trở thành hệ sinh thái 11 công ty thành viên trên 6 lĩnh vực. Mỗi cột mốc là một bước
              tiến được xây dựng trên nền tảng chất lượng, đổi mới và sự tin cậy của khách hàng.
            </p>
          </Reveal>
        </section>

        {/* Timeline */}
        <section>
          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-1/2" />
            <div className="space-y-8">
              {HISTORY.map((h, i) => (
                <Reveal key={h.year} delay={i * 60}>
                  <div className={`relative flex items-start gap-6 lg:gap-0 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    <div className="absolute left-4 lg:left-1/2 h-3 w-3 rounded-full bg-accent ring-4 ring-background -translate-x-1/2 mt-2" />
                    <div className={`pl-12 lg:pl-0 lg:w-1/2 ${i % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                      <div className="rounded-2xl border border-border bg-card p-6 shadow-card hover-lift">
                        <span className="text-2xl font-black text-gradient-gold">{h.year}</span>
                        <h3 className="mt-1 text-lg font-black text-foreground">{h.t}</h3>
                        <p className="mt-1.5 text-sm text-muted-foreground">{h.d}</p>
                      </div>
                    </div>
                    <div className="hidden lg:block lg:w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <Reveal className="text-center">
          <p className="text-muted-foreground">Khám phá hệ sinh thái 11 công ty thành viên hôm nay</p>
          <Button asChild size="lg" className="mt-4 bg-primary hover:bg-primary/90 font-bold">
            <Link to="/members">Xem đơn vị thành viên <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </Reveal>
      </div>
    </PageShell>
  );
}
