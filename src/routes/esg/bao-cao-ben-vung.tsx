import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FileText, Download, Compass, ArrowRight, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { SubNav } from "@/components/site/SubNav";

export const Route = createFileRoute("/esg/bao-cao-ben-vung")({
  head: () => ({
    meta: [
      { title: "Báo cáo bền vững – Tải báo cáo ESG thường niên | C83 Group" },
      { name: "description", content: "Tải về các báo cáo ESG và phát triển bền vững thường niên của C83 Group: Báo cáo ESG 2025, Phát triển bền vững 2024 và Trách nhiệm xã hội 2023 định dạng PDF." },
      { name: "keywords", content: "báo cáo bền vững, báo cáo ESG, tải PDF, phát triển bền vững, trách nhiệm xã hội, minh bạch, báo cáo thường niên, C83 Group" },
      { property: "og:title", content: "Báo cáo bền vững – Tải báo cáo ESG thường niên | C83 Group" },
      { property: "og:description", content: "Minh bạch qua từng báo cáo: tải về các báo cáo ESG và phát triển bền vững của C83 Group." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/esg/bao-cao-ben-vung" },
    ],
    links: [{ rel: "canonical", href: "/esg/bao-cao-ben-vung" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Phát triển bền vững", item: "https://c83group.vn/esg" },
            { "@type": "ListItem", position: 3, name: "Báo cáo bền vững", item: "https://c83group.vn/esg/bao-cao-ben-vung" },
          ],
        }),
      },
    ],
  }),
  component: BaoCaoPage,
});

const SUBNAV = [
  { label: "Tổng quan", to: "/esg" },
  { label: "Chiến lược ESG", to: "/esg/chien-luoc" },
  { label: "Văn hóa doanh nghiệp", to: "/esg/van-hoa-doanh-nghiep" },
  { label: "Hoạt động cộng đồng", to: "/esg/hoat-dong-cong-dong" },
  { label: "Báo cáo bền vững", to: "/esg/bao-cao-ben-vung" },
];

const REPORTS = [
  { t: "Báo cáo ESG 2025", year: "2025", d: "Tổng kết các chỉ số môi trường, xã hội và quản trị cùng lộ trình phát triển bền vững giai đoạn tới." },
  { t: "Báo cáo Phát triển bền vững 2024", year: "2024", d: "Thành tựu tiết kiệm năng lượng, sáng kiến xanh và đóng góp cộng đồng trong năm tài chính 2024." },
  { t: "Báo cáo Trách nhiệm xã hội 2023", year: "2023", d: "Kết quả các chương trình CSR, hoạt động thiện nguyện và cam kết với người lao động năm 2023." },
];

function BaoCaoPage() {
  return (
    <PageShell
      title="Báo cáo bền vững"
      subtitle="Minh bạch qua từng báo cáo ESG và phát triển bền vững thường niên của C83 Group."
      breadcrumbs={[
        { label: "Trang chủ", to: "/" },
        { label: "Phát triển bền vững", to: "/esg" },
        { label: "Báo cáo bền vững" },
      ]}
    >
      <SubNav items={SUBNAV} />

      <div className="space-y-16 lg:space-y-24">
        {/* Downloadable reports */}
        <section>
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Báo cáo bền vững</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground">
              Minh bạch qua từng <span className="text-primary">báo cáo</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Minh bạch là cam kết hàng đầu trong quản trị của C83 Group. Mỗi năm, chúng tôi công bố báo cáo
              ESG và phát triển bền vững, ghi nhận đầy đủ các chỉ số, sáng kiến và kết quả thực hiện. Tải về
              các tài liệu dưới đây để cùng theo dõi hành trình bền vững của tập đoàn.
            </p>
          </Reveal>

          <div className="mt-12 max-w-3xl mx-auto space-y-4">
            {REPORTS.map((r, i) => (
              <Reveal key={r.t} delay={i * 80}>
                <div className="group flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-border bg-card p-5 lg:p-6 shadow-card hover-lift">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                    <FileText className="h-7 w-7" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base lg:text-lg font-black text-foreground">{r.t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{r.d}</p>
                    <p className="mt-1 text-xs text-muted-foreground">Phát hành năm {r.year} · Định dạng PDF</p>
                  </div>
                  <Button asChild variant="outline" className="border-2 border-primary text-primary font-bold w-full sm:w-auto shrink-0">
                    <a href="#"><Download className="mr-2 h-4 w-4" /> Tải PDF</a>
                  </Button>
                </div>
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
                Cần thêm thông tin <span className="text-gradient-gold">về ESG?</span>
              </h2>
              <p className="mt-4 text-white/80 leading-relaxed">
                Liên hệ với C83 Group để nhận tư vấn chi tiết về các báo cáo và cam kết phát triển bền vững.
              </p>
            </div>
            <div className="relative lg:justify-self-end">
              <Button asChild size="lg" className="bg-gradient-gold text-gold-foreground font-bold shadow-gold">
                <Link to="/contact">Liên hệ với chúng tôi <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="mt-3 sm:mt-0 sm:ml-3 border-2 border-white/60 bg-transparent text-white hover:bg-white hover:text-primary font-bold">
                <Link to="/esg">Tổng quan ESG <ChevronRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </PageShell>
  );
}
