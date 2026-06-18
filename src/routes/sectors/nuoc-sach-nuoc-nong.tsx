import { createFileRoute, Link } from "@tanstack/react-router";
import { Droplets, CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";
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
    title: "Lọc nước đầu nguồn",
    desc: "Hệ thống lọc tổng đầu nguồn xử lý cặn, sắt, mangan và clo, bảo vệ thiết bị và đường ống toàn công trình.",
  },
  {
    title: "Lọc nước uống trực tiếp",
    desc: "Hệ RO và lọc tinh cho nước uống tại vòi đạt chuẩn, phù hợp văn phòng, trường học và khu dân cư.",
  },
  {
    title: "Bình nóng lạnh công nghiệp",
    desc: "Hệ thống nước nóng trung tâm dùng bơm nhiệt và năng lượng mặt trời, cấp nước nóng ổn định quy mô lớn.",
  },
  {
    title: "Bảo trì & thay lõi định kỳ",
    desc: "Dịch vụ kiểm tra chất lượng nước, thay lõi và bảo trì theo lịch, duy trì hiệu suất hệ thống lâu dài.",
  },
];

const APPLICATIONS = [
  {
    title: "Khách sạn & resort",
    desc: "Hệ nước nóng trung tâm bằng bơm nhiệt kết hợp lọc đầu nguồn, cấp nước nóng liên tục cho hàng trăm phòng.",
  },
  {
    title: "Nhà máy & khu công nghiệp",
    desc: "Hệ thống xử lý nước cấp và nước sinh hoạt công suất lớn, đáp ứng tiêu chuẩn vận hành và an toàn lao động.",
  },
  {
    title: "Tòa nhà văn phòng & trường học",
    desc: "Hệ lọc nước uống trực tiếp tại vòi và trạm cấp nước uống, đảm bảo nguồn nước an toàn cho người dùng.",
  },
];

function WaterPage() {
  return (
    <PageShell
      title="Nước sạch & nước nóng"
      subtitle="Hệ thống lọc nước và nước nóng cho dân dụng & công nghiệp — nguồn nước an toàn, tiết kiệm năng lượng cho mọi công trình."
      breadcrumbs={[
        { label: "Trang chủ", to: "/" },
        { label: "Lĩnh vực hoạt động", to: "/sectors" },
        { label: "Nước sạch & nước nóng" },
      ]}
    >
      <SubNav items={SUBNAV} />

      <div className="space-y-16 lg:space-y-24">
        {/* Hero intro */}
        <section className="scroll-mt-28">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal className="lg:order-2">
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-gold text-gold-foreground shadow-gold">
                <Droplets className="h-7 w-7" />
              </div>
              <SectionLabel>Lĩnh vực 04 / 06</SectionLabel>
              <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground leading-tight">
                Nguồn nước <span className="text-primary">an toàn</span>, vận hành bền vững
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed text-base lg:text-lg">
                Nước là hệ thống kỹ thuật âm thầm nhưng thiết yếu của mọi công trình. C83 Group thiết kế
                và lắp đặt giải pháp nước sạch – nước nóng cho cả dân dụng và công nghiệp, từ lọc đầu nguồn,
                nước uống trực tiếp đến nước nóng trung tâm tiết kiệm năng lượng.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Chúng tôi tính toán công suất theo nhu cầu thực tế và cung cấp dịch vụ bảo trì, thay lõi định kỳ
                để hệ thống luôn đạt chất lượng nước đầu ra.
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
                  <Droplets className="h-28 w-28 text-white/90" strokeWidth={1.2} />
                </div>
                <div className="absolute top-6 left-6 text-7xl font-black text-white/15 tracking-tight">04</div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section className="scroll-mt-28">
          <Reveal className="max-w-3xl">
            <SectionLabel>Sản phẩm & dịch vụ</SectionLabel>
            <h2 className="mt-3 text-2xl lg:text-3xl font-black text-foreground leading-tight">
              Giải pháp <span className="text-primary">nước sạch & nước nóng</span>
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
                Thiết kế hệ thống <span className="text-gradient-gold">nước</span> cho công trình
              </h2>
              <p className="mt-4 text-white/80 leading-relaxed">
                Gửi yêu cầu để được khảo sát nguồn nước, tư vấn công suất và báo giá hệ thống nước sạch – nước nóng.
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

export const Route = createFileRoute("/sectors/nuoc-sach-nuoc-nong")({
  head: () => ({
    meta: [
      { title: "Nước sạch & nước nóng – C83 Group" },
      { name: "description", content: "C83 Group cung cấp hệ thống nước sạch & nước nóng cho dân dụng và công nghiệp: lọc đầu nguồn, lọc nước uống trực tiếp, bình nóng lạnh công nghiệp, bảo trì và thay lõi định kỳ." },
      { name: "keywords", content: "nước sạch nước nóng, hệ thống lọc nước, lọc nước đầu nguồn, lọc nước RO, bình nóng lạnh công nghiệp, xử lý nước, C83 Group" },
      { property: "og:title", content: "Nước sạch & nước nóng – C83 Group" },
      { property: "og:description", content: "Hệ thống lọc nước và nước nóng cho dân dụng & công nghiệp, nguồn nước an toàn và tiết kiệm năng lượng." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://c83group.vn/sectors/nuoc-sach-nuoc-nong" },
    ],
    links: [{ rel: "canonical", href: "https://c83group.vn/sectors/nuoc-sach-nuoc-nong" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Lĩnh vực hoạt động", item: "https://c83group.vn/sectors" },
            { "@type": "ListItem", position: 3, name: "Nước sạch & nước nóng", item: "https://c83group.vn/sectors/nuoc-sach-nuoc-nong" },
          ],
        }),
      },
    ],
  }),
  component: WaterPage,
});
