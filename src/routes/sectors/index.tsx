import { createFileRoute, Link } from "@tanstack/react-router";
import { Layers, Volume2, DoorOpen, Droplets, HardHat, Cpu, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SectionLabel, Counter } from "@/components/site/Reveal";
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

export const Route = createFileRoute("/sectors/")({
  head: () => ({
    meta: [
      { title: "Lĩnh vực hoạt động – C83 Group" },
      { name: "description", content: "C83 Group hoạt động trên 6 lĩnh vực trọng yếu: vật liệu hoàn thiện, âm thanh – trình chiếu, phụ kiện cửa & kính, nước sạch & nước nóng, xây dựng – thi công và công nghệ AI bán hàng." },
      { name: "keywords", content: "lĩnh vực hoạt động, C83 Group, vật liệu hoàn thiện, âm thanh trình chiếu, phụ kiện cửa kính, nước sạch nước nóng, xây dựng thi công, công nghệ AI bán hàng" },
      { property: "og:title", content: "Lĩnh vực hoạt động – C83 Group" },
      { property: "og:description", content: "6 lĩnh vực trọng yếu — giải pháp khép kín từ vật liệu, công nghệ đến thi công công trình của tập đoàn đa ngành C83 Group." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://c83group.vn/sectors" },
    ],
    links: [{ rel: "canonical", href: "https://c83group.vn/sectors" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Lĩnh vực hoạt động", item: "https://c83group.vn/sectors" },
          ],
        }),
      },
    ],
  }),
  component: SectorsIndexPage,
});

type SectorCard = {
  icon: typeof Layers;
  title: string;
  desc: string;
  to: string;
  grad: string;
};

const SECTORS: SectorCard[] = [
  {
    icon: Layers,
    title: "Vật liệu hoàn thiện",
    desc: "Đá ốp lát, gạch, sàn gỗ và vật liệu trang trí cao cấp nhập khẩu cho mọi không gian công trình.",
    to: "/sectors/vat-lieu-hoan-thien",
    grad: "from-primary to-navy",
  },
  {
    icon: Volume2,
    title: "Âm thanh – Trình chiếu",
    desc: "Hệ thống AV chuyên nghiệp cho hội trường, sự kiện và hội nghị theo tiêu chuẩn quốc tế.",
    to: "/sectors/am-thanh-trinh-chieu",
    grad: "from-navy to-primary",
  },
  {
    icon: DoorOpen,
    title: "Phụ kiện cửa & kính",
    desc: "Bản lề, tay nắm, khóa và phụ kiện cửa kính nhập khẩu chính hãng từ các thương hiệu quốc tế.",
    to: "/sectors/phu-kien-cua-kinh",
    grad: "from-primary to-navy",
  },
  {
    icon: Droplets,
    title: "Nước sạch & nước nóng",
    desc: "Hệ thống lọc nước và nước nóng cho dân dụng & công nghiệp, an toàn và tiết kiệm năng lượng.",
    to: "/sectors/nuoc-sach-nuoc-nong",
    grad: "from-navy to-primary",
  },
  {
    icon: HardHat,
    title: "Xây dựng & thi công",
    desc: "Tổng thầu công trình dân dụng và công nghiệp với năng lực quản lý dự án chuyên nghiệp.",
    to: "/sectors/xay-dung-thi-cong",
    grad: "from-primary to-navy",
  },
  {
    icon: Cpu,
    title: "Công nghệ & AI hỗ trợ bán hàng",
    desc: "Giải pháp AI và phần mềm cho bán hàng, vận hành thông minh, tối ưu doanh thu và quy trình.",
    to: "/sectors/cong-nghe-ai",
    grad: "from-navy to-primary",
  },
];

function SectorsIndexPage() {
  return (
    <PageShell
      title="Lĩnh vực hoạt động"
      subtitle="6 lĩnh vực trọng yếu — Giải pháp trọn gói từ vật liệu, công nghệ đến thi công công trình."
      breadcrumbs={[{ label: "Trang chủ", to: "/" }, { label: "Lĩnh vực hoạt động" }]}
    >
      <SubNav items={SUBNAV} />

      <div className="space-y-16 lg:space-y-24">
        {/* Intro */}
        <section className="scroll-mt-28">
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Tổng quan lĩnh vực</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground leading-tight">
              Bao phủ toàn bộ <span className="text-primary">chuỗi giá trị</span> công trình
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-base lg:text-lg">
              Từ cung ứng vật liệu, hệ thống kỹ thuật, công nghệ đến thi công và vận hành,
              C83 Group hoạt động trên 6 lĩnh vực trọng yếu — mang đến cho khách hàng hệ sinh thái
              khép kín, một điểm chạm cho trọn vẹn giải pháp.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: 6, s: "", l: "Lĩnh vực trọng yếu", grad: true },
              { n: 11, s: "", l: "Công ty thành viên" },
              { n: 500, s: "+", l: "Dự án đã triển khai" },
              { n: 1000, s: "+", l: "Đối tác chiến lược" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div
                  className={`h-full rounded-2xl p-6 lg:p-7 shadow-card hover-lift ${
                    s.grad ? "bg-gradient-primary text-primary-foreground" : "bg-card border border-border"
                  }`}
                >
                  <div className="text-3xl lg:text-4xl font-black">
                    <Counter end={s.n} suffix={s.s} />
                  </div>
                  <div className={`mt-1 text-sm ${s.grad ? "text-white/85" : "text-muted-foreground"}`}>{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Six sector cards */}
        <section className="scroll-mt-28">
          <Reveal className="max-w-3xl">
            <SectionLabel>Chọn lĩnh vực</SectionLabel>
            <h2 className="mt-3 text-2xl lg:text-3xl font-black text-foreground leading-tight">
              Khám phá chi tiết <span className="text-primary">từng lĩnh vực</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Mỗi lĩnh vực là một mảnh ghép trong hệ sinh thái khép kín của C83 Group. Nhấn vào từng
              lĩnh vực để tìm hiểu sản phẩm, dịch vụ và giải pháp tiêu biểu.
            </p>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SECTORS.map((s, i) => (
              <Reveal key={s.to} delay={i * 80}>
                <Link
                  to={s.to as never}
                  className="group relative block h-full rounded-2xl border border-border bg-card p-7 lg:p-8 hover-lift shadow-card overflow-hidden"
                >
                  <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${s.grad} opacity-10 group-hover:opacity-20 transition`} />
                  <div className="relative">
                    <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-gold text-gold-foreground shadow-gold">
                      <s.icon className="h-7 w-7" />
                    </div>
                    <div className="mt-5 text-xs font-bold tracking-widest text-primary">
                      0{i + 1} / 06
                    </div>
                    <h3 className="mt-1 text-xl font-black text-foreground group-hover:text-primary transition">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                      Tìm hiểu <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
