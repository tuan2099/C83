import { createFileRoute, Link } from "@tanstack/react-router";
import { DoorOpen, CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";
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
    title: "Bản lề sàn & kẹp kính",
    desc: "Bản lề sàn thủy lực, kẹp kính và phụ kiện chịu lực cho cửa kính cường lực và vách kính khổ lớn.",
  },
  {
    title: "Tay nắm – khóa cửa",
    desc: "Tay nắm, khóa cơ và khóa điện tử chính hãng, hoàn thiện đa dạng phù hợp từng phong cách thiết kế.",
  },
  {
    title: "Phụ kiện cửa lùa – cửa tự động",
    desc: "Ray treo, bộ truyền động và cảm biến cho cửa lùa, cửa tự động vận hành êm và bền bỉ.",
  },
  {
    title: "Thương hiệu quốc tế",
    desc: "Phân phối chính hãng từ các thương hiệu phụ kiện hàng đầu, đầy đủ chứng nhận và bảo hành.",
  },
];

const APPLICATIONS = [
  {
    title: "Mặt dựng kính tòa nhà văn phòng",
    desc: "Hệ kẹp kính và bản lề sàn cho vách kính sảnh thông tầng, đảm bảo độ kín khít và vận hành ổn định.",
  },
  {
    title: "Showroom & trung tâm thương mại",
    desc: "Cửa kính tự động, cửa lùa cảm ứng và tay nắm cao cấp tạo lối vào sang trọng, đón khách thuận tiện.",
  },
  {
    title: "Khách sạn & căn hộ cao cấp",
    desc: "Đồng bộ khóa điện tử, tay nắm và phụ kiện cửa theo bộ tiêu chuẩn cho toàn bộ phòng và khu vực chung.",
  },
];

function HardwarePage() {
  return (
    <PageShell
      title="Phụ kiện cửa & kính"
      subtitle="Bản lề, tay nắm, khóa và phụ kiện cửa kính nhập khẩu chính hãng — bền bỉ và tinh tế trong từng chi tiết."
      breadcrumbs={[
        { label: "Trang chủ", to: "/" },
        { label: "Lĩnh vực hoạt động", to: "/sectors" },
        { label: "Phụ kiện cửa & kính" },
      ]}
    >
      <SubNav items={SUBNAV} />

      <div className="space-y-16 lg:space-y-24">
        {/* Hero intro */}
        <section className="scroll-mt-28">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal>
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-gold text-gold-foreground shadow-gold">
                <DoorOpen className="h-7 w-7" />
              </div>
              <SectionLabel>Lĩnh vực 03 / 06</SectionLabel>
              <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground leading-tight">
                Chi tiết nhỏ tạo nên <span className="text-primary">đẳng cấp lớn</span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed text-base lg:text-lg">
                Phụ kiện cửa và kính là nơi người dùng chạm vào công trình mỗi ngày. C83 Group phân phối
                chính hãng bản lề, tay nắm, khóa và phụ kiện cửa kính từ các thương hiệu quốc tế, kết hợp
                độ bền cơ khí với thẩm mỹ tinh tế.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Chúng tôi tư vấn lựa chọn phụ kiện theo tải trọng, tần suất sử dụng và phong cách thiết kế,
                đảm bảo đồng bộ và sẵn sàng linh kiện thay thế.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elegant bg-gradient-to-br from-primary to-navy">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)",
                  backgroundSize: "26px 26px",
                }} />
                <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
                <div className="absolute inset-0 grid place-items-center">
                  <DoorOpen className="h-28 w-28 text-white/90" strokeWidth={1.2} />
                </div>
                <div className="absolute top-6 left-6 text-7xl font-black text-white/15 tracking-tight">03</div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section className="scroll-mt-28">
          <Reveal className="max-w-3xl">
            <SectionLabel>Sản phẩm & dịch vụ</SectionLabel>
            <h2 className="mt-3 text-2xl lg:text-3xl font-black text-foreground leading-tight">
              Danh mục <span className="text-primary">phụ kiện cửa & kính</span>
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
              Ứng dụng trong <span className="text-primary">công trình thực tế</span>
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
                Chọn <span className="text-gradient-gold">phụ kiện cửa & kính</span> chính hãng
              </h2>
              <p className="mt-4 text-white/80 leading-relaxed">
                Gửi yêu cầu để nhận tư vấn lựa chọn phụ kiện, catalogue và báo giá theo từng hạng mục công trình.
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

export const Route = createFileRoute("/sectors/phu-kien-cua-kinh")({
  head: () => ({
    meta: [
      { title: "Phụ kiện cửa & kính nhập khẩu – C83 Group" },
      { name: "description", content: "C83 Group phân phối phụ kiện cửa & kính nhập khẩu chính hãng: bản lề sàn, kẹp kính, tay nắm, khóa cửa, phụ kiện cửa lùa và cửa tự động cho công trình cao cấp." },
      { name: "keywords", content: "phụ kiện cửa kính, bản lề sàn, kẹp kính, tay nắm khóa cửa, cửa lùa cửa tự động, phụ kiện nhập khẩu, C83 Group" },
      { property: "og:title", content: "Phụ kiện cửa & kính nhập khẩu – C83 Group" },
      { property: "og:description", content: "Bản lề, tay nắm, khóa và phụ kiện cửa kính nhập khẩu chính hãng, bền bỉ và tinh tế trong từng chi tiết." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://c83group.vn/sectors/phu-kien-cua-kinh" },
    ],
    links: [{ rel: "canonical", href: "https://c83group.vn/sectors/phu-kien-cua-kinh" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Lĩnh vực hoạt động", item: "https://c83group.vn/sectors" },
            { "@type": "ListItem", position: 3, name: "Phụ kiện cửa & kính", item: "https://c83group.vn/sectors/phu-kien-cua-kinh" },
          ],
        }),
      },
    ],
  }),
  component: HardwarePage,
});
