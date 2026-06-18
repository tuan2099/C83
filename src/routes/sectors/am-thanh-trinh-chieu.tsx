import { createFileRoute, Link } from "@tanstack/react-router";
import { Volume2, CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { SubNav } from "@/components/site/SubNav";

const SUBNAV = [
  { label: "Tổng quan", to: "/sectors" },
  { label: "Vật liệu hoàn thiện", to: "/sectors/vat-lieu-hoan-thien" },
  { label: "Âm thanh – Trình chiếu", to: "/sectors/am-thanh-trinh-chieu" },
  { label: "Phụ kiện cửa & kính", to: "/sectors/phu-kien-cua-kinh" },
  { label: "Nước sạch & nước nóng", to: "/sectors/nuoc-sach-nuoc-nong" },
  { label: "Xây dựng & thi công", to: "/sectors/xay-dung-thi-cong" },
  { label: "Công nghệ & AI", to: "/sectors/cong-nghe-ai" },
];

const SERVICES = [
  {
    title: "Loa & amply hội trường",
    desc: "Hệ thống line-array, loa cột và amply công suất lớn, phủ âm đồng đều cho hội trường và không gian lớn.",
  },
  {
    title: "Màn hình LED – máy chiếu",
    desc: "Màn hình LED trong nhà & ngoài trời, máy chiếu laser độ sáng cao và màn chiếu chuyên dụng.",
  },
  {
    title: "Hệ thống hội nghị thông minh",
    desc: "Micro hội nghị, bộ điều khiển trung tâm và giải pháp họp trực tuyến tích hợp đa nền tảng.",
  },
  {
    title: "Thi công, lắp đặt & bảo trì",
    desc: "Thiết kế hệ thống, lắp đặt theo tiêu chuẩn, cân chỉnh âm thanh và bảo trì định kỳ trọn vòng đời.",
  },
];

const APPLICATIONS = [
  {
    title: "Trung tâm hội nghị & nhà hát",
    desc: "Hệ line-array kết hợp xử lý acoustic và bàn điều khiển kỹ thuật số cho khán phòng hàng nghìn chỗ.",
  },
  {
    title: "Phòng họp & hội trường doanh nghiệp",
    desc: "Giải pháp hội nghị thông minh, màn hình LED và điều khiển một chạm cho phòng họp đa năng.",
  },
  {
    title: "Sự kiện & sân khấu ngoài trời",
    desc: "Hệ thống âm thanh – ánh sáng – trình chiếu di động, lắp dựng nhanh cho show diễn và sự kiện lớn.",
  },
];

function AvPage() {
  return (
    <PageShell
      title="Âm thanh – Trình chiếu"
      subtitle="Hệ thống AV chuyên nghiệp cho hội trường, sự kiện và hội nghị — trải nghiệm nghe nhìn đỉnh cao theo tiêu chuẩn quốc tế."
      breadcrumbs={[
        { label: "Trang chủ", to: "/" },
        { label: "Lĩnh vực hoạt động", to: "/sectors" },
        { label: "Âm thanh – Trình chiếu" },
      ]}
    >
      <SubNav items={SUBNAV} />

      <div className="space-y-16 lg:space-y-24">
        {/* Hero intro */}
        <section className="scroll-mt-28">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal className="lg:order-2">
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-gold text-gold-foreground shadow-gold">
                <Volume2 className="h-7 w-7" />
              </div>
              <SectionLabel>Lĩnh vực 02 / 06</SectionLabel>
              <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground leading-tight">
                Trải nghiệm <span className="text-primary">nghe nhìn</span> chuẩn quốc tế
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed text-base lg:text-lg">
                Một hệ thống AV tốt là tổng hòa của thiết bị, thiết kế âm học và thi công chính xác.
                C83 Group cung cấp giải pháp âm thanh – trình chiếu trọn gói cho hội trường, hội nghị
                và sự kiện, đảm bảo độ rõ lời nói và sức truyền cảm của hình ảnh.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Từ khảo sát hiện trạng đến cân chỉnh nghiệm thu, đội ngũ kỹ sư AV đồng hành để hệ thống
                vận hành ổn định và dễ sử dụng cho người vận hành.
              </p>
            </Reveal>

            <Reveal delay={100} className="lg:order-1">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elegant bg-gradient-to-br from-navy to-primary">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)",
                  backgroundSize: "26px 26px",
                }} />
                <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
                <div className="absolute inset-0 grid place-items-center">
                  <Volume2 className="h-28 w-28 text-white/90" strokeWidth={1.2} />
                </div>
                <div className="absolute top-6 left-6 text-7xl font-black text-white/15 tracking-tight">02</div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section className="scroll-mt-28">
          <Reveal className="max-w-3xl">
            <SectionLabel>Sản phẩm & dịch vụ</SectionLabel>
            <h2 className="mt-3 text-2xl lg:text-3xl font-black text-foreground leading-tight">
              Giải pháp <span className="text-primary">âm thanh – trình chiếu</span>
            </h2>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 hover-lift shadow-card">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                    <div>
                      <h3 className="text-lg font-black text-foreground group-hover:text-primary transition">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Applications */}
        <section className="scroll-mt-28">
          <Reveal className="max-w-3xl">
            <SectionLabel>Giải pháp tiêu biểu</SectionLabel>
            <h2 className="mt-3 text-2xl lg:text-3xl font-black text-foreground leading-tight">
              Ứng dụng trong <span className="text-primary">thực tế</span>
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-3 gap-5">
            {APPLICATIONS.map((a, i) => (
              <Reveal key={a.title} delay={i * 80}>
                <div className="h-full rounded-2xl bg-surface-alt border border-border p-7 hover-lift">
                  <div className="text-xs font-bold tracking-widest text-primary">0{i + 1}</div>
                  <h3 className="mt-2 text-lg font-black text-foreground">{a.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <Reveal>
          <div className="rounded-3xl bg-secondary text-secondary-foreground p-8 lg:p-12 text-center overflow-hidden relative">
            <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative max-w-2xl mx-auto">
              <SectionLabel center light>Bắt đầu hợp tác</SectionLabel>
              <h2 className="mt-3 text-2xl lg:text-3xl font-black">
                Thiết kế hệ thống <span className="text-gradient-gold">AV</span> cho không gian của bạn
              </h2>
              <p className="mt-4 text-white/80 leading-relaxed">
                Gửi yêu cầu để được khảo sát, tư vấn cấu hình và báo giá hệ thống âm thanh – trình chiếu phù hợp.
              </p>
              <div className="mt-7 flex flex-wrap gap-3 justify-center">
                <Button asChild size="lg" className="bg-gradient-gold text-gold-foreground font-bold shadow-gold">
                  <Link to="/capability">Xem dự án tiêu biểu <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white/60 bg-transparent text-white hover:bg-white hover:text-primary font-bold">
                  <Link to="/contact">Yêu cầu tư vấn <ChevronRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </PageShell>
  );
}

export const Route = createFileRoute("/sectors/am-thanh-trinh-chieu")({
  head: () => ({
    meta: [
      { title: "Âm thanh – Trình chiếu chuyên nghiệp – C83 Group" },
      { name: "description", content: "C83 Group cung cấp hệ thống âm thanh – trình chiếu chuyên nghiệp: loa amply hội trường, màn hình LED, máy chiếu, hệ thống hội nghị thông minh, thi công và bảo trì AV." },
      { name: "keywords", content: "âm thanh trình chiếu, hệ thống AV, loa hội trường, màn hình LED, máy chiếu, hệ thống hội nghị, thi công âm thanh, C83 Group" },
      { property: "og:title", content: "Âm thanh – Trình chiếu chuyên nghiệp – C83 Group" },
      { property: "og:description", content: "Hệ thống AV chuyên nghiệp cho hội trường, sự kiện và hội nghị, trải nghiệm nghe nhìn đỉnh cao theo chuẩn quốc tế." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://c83group.vn/sectors/am-thanh-trinh-chieu" },
    ],
    links: [{ rel: "canonical", href: "https://c83group.vn/sectors/am-thanh-trinh-chieu" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Lĩnh vực hoạt động", item: "https://c83group.vn/sectors" },
            { "@type": "ListItem", position: 3, name: "Âm thanh – Trình chiếu", item: "https://c83group.vn/sectors/am-thanh-trinh-chieu" },
          ],
        }),
      },
    ],
  }),
  component: AvPage,
});
