import { createFileRoute, Link } from "@tanstack/react-router";
import { Layers, CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";
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
    title: "Đá tự nhiên & nhân tạo",
    desc: "Đá marble, granite, đá thạch anh và đá nung kết khổ lớn cho mặt bàn bếp, sảnh và mặt dựng.",
  },
  {
    title: "Gạch ốp lát cao cấp",
    desc: "Gạch porcelain, ceramic và gạch vân đá nhập khẩu, đa dạng kích thước và bề mặt hoàn thiện.",
  },
  {
    title: "Sàn gỗ công nghiệp & tự nhiên",
    desc: "Sàn gỗ engineered, laminate và sàn gỗ tự nhiên đạt chuẩn chống ẩm, chống xước cho công trình.",
  },
  {
    title: "Vật liệu trang trí nội thất",
    desc: "Tấm ốp tường, đá trang trí, vật liệu acoustic và bề mặt hoàn thiện theo concept thiết kế.",
  },
];

const APPLICATIONS = [
  {
    title: "Sảnh khách sạn & resort 5 sao",
    desc: "Cung ứng đá marble khổ lớn cho sàn sảnh, quầy lễ tân và mặt dựng thang máy, tạo điểm nhấn sang trọng đồng bộ.",
  },
  {
    title: "Căn hộ cao cấp & penthouse",
    desc: "Đồng bộ gạch porcelain vân đá, sàn gỗ engineered và đá bếp thạch anh cho hàng trăm căn theo bộ mẫu chủ đầu tư.",
  },
  {
    title: "Tòa nhà văn phòng hạng A",
    desc: "Hệ tấm ốp mặt tiền và sảnh thông tầng, kết hợp vật liệu tiêu âm cho khu vực sảnh và phòng họp.",
  },
];

function MaterialsPage() {
  return (
    <PageShell
      title="Vật liệu hoàn thiện"
      subtitle="Đá ốp lát, gạch, sàn gỗ và vật liệu trang trí cao cấp nhập khẩu — nền tảng hoàn thiện đẳng cấp cho mọi công trình."
      breadcrumbs={[
        { label: "Trang chủ", to: "/" },
        { label: "Lĩnh vực hoạt động", to: "/sectors" },
        { label: "Vật liệu hoàn thiện" },
      ]}
    >
      <SubNav items={SUBNAV} />

      <div className="space-y-16 lg:space-y-24">
        {/* Hero intro */}
        <section className="scroll-mt-28">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal>
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-gold text-gold-foreground shadow-gold">
                <Layers className="h-7 w-7" />
              </div>
              <SectionLabel>Lĩnh vực 01 / 06</SectionLabel>
              <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground leading-tight">
                Hoàn thiện đẳng cấp từ <span className="text-primary">vật liệu gốc</span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed text-base lg:text-lg">
                Vật liệu hoàn thiện quyết định cảm nhận đầu tiên về một không gian. C83 Group cung ứng
                trực tiếp đá tự nhiên, gạch ốp lát, sàn gỗ và vật liệu trang trí cao cấp nhập khẩu, kiểm
                soát chất lượng và nguồn gốc cho từng lô hàng đưa vào công trình.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Đội ngũ kỹ thuật tư vấn lựa chọn vật liệu phù hợp công năng, ngân sách và concept thiết kế,
                đảm bảo tính đồng bộ trên toàn dự án quy mô lớn.
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
                  <Layers className="h-28 w-28 text-white/90" strokeWidth={1.2} />
                </div>
                <div className="absolute top-6 left-6 text-7xl font-black text-white/15 tracking-tight">01</div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section className="scroll-mt-28">
          <Reveal className="max-w-3xl">
            <SectionLabel>Sản phẩm & dịch vụ</SectionLabel>
            <h2 className="mt-3 text-2xl lg:text-3xl font-black text-foreground leading-tight">
              Danh mục <span className="text-primary">vật liệu hoàn thiện</span>
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
                Chọn <span className="text-gradient-gold">vật liệu hoàn thiện</span> cho công trình của bạn
              </h2>
              <p className="mt-4 text-white/80 leading-relaxed">
                Gửi yêu cầu để nhận tư vấn vật liệu, báo giá và mẫu thực tế từ đội ngũ chuyên gia C83 Group.
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

export const Route = createFileRoute("/sectors/vat-lieu-hoan-thien")({
  head: () => ({
    meta: [
      { title: "Vật liệu hoàn thiện cao cấp – C83 Group" },
      { name: "description", content: "C83 Group cung ứng vật liệu hoàn thiện cao cấp: đá tự nhiên & nhân tạo, gạch ốp lát, sàn gỗ và vật liệu trang trí nội thất nhập khẩu cho công trình quy mô lớn." },
      { name: "keywords", content: "vật liệu hoàn thiện, đá ốp lát, đá marble granite, gạch porcelain, sàn gỗ công nghiệp, vật liệu trang trí nội thất, C83 Group" },
      { property: "og:title", content: "Vật liệu hoàn thiện cao cấp – C83 Group" },
      { property: "og:description", content: "Đá ốp lát, gạch, sàn gỗ và vật liệu trang trí cao cấp nhập khẩu, kiểm soát chất lượng cho công trình đẳng cấp." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://c83group.vn/sectors/vat-lieu-hoan-thien" },
    ],
    links: [{ rel: "canonical", href: "https://c83group.vn/sectors/vat-lieu-hoan-thien" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Lĩnh vực hoạt động", item: "https://c83group.vn/sectors" },
            { "@type": "ListItem", position: 3, name: "Vật liệu hoàn thiện", item: "https://c83group.vn/sectors/vat-lieu-hoan-thien" },
          ],
        }),
      },
    ],
  }),
  component: MaterialsPage,
});
