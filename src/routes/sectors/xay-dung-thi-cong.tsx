import { createFileRoute, Link } from "@tanstack/react-router";
import { HardHat, CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";
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
    title: "Tổng thầu thiết kế – thi công (D&B)",
    desc: "Mô hình Design & Build trọn gói, một đầu mối chịu trách nhiệm từ thiết kế đến bàn giao công trình.",
  },
  {
    title: "Thi công phần thô & hoàn thiện",
    desc: "Thi công kết cấu, xây tô, hệ M&E và hoàn thiện theo bản vẽ, kiểm soát chất lượng từng giai đoạn.",
  },
  {
    title: "Quản lý dự án chuyên nghiệp",
    desc: "Điều phối tiến độ, chi phí và an toàn lao động bằng quy trình chuẩn và báo cáo minh bạch.",
  },
  {
    title: "Cải tạo & nâng cấp công trình",
    desc: "Cải tạo, gia cố và nâng cấp công năng cho công trình hiện hữu, hạn chế gián đoạn vận hành.",
  },
];

const APPLICATIONS = [
  {
    title: "Tổ hợp thương mại & văn phòng",
    desc: "Tổng thầu D&B cho tòa nhà cao tầng, quản lý đồng bộ kết cấu, M&E và hoàn thiện theo tiến độ cam kết.",
  },
  {
    title: "Nhà máy & nhà xưởng công nghiệp",
    desc: "Thi công nhà xưởng tiền chế và hạ tầng kỹ thuật, đáp ứng yêu cầu vận hành và an toàn của chủ đầu tư.",
  },
  {
    title: "Cải tạo khách sạn & văn phòng đang vận hành",
    desc: "Lập kế hoạch thi công theo phân kỳ, đảm bảo công trình tiếp tục hoạt động trong quá trình nâng cấp.",
  },
];

function ConstructionPage() {
  return (
    <PageShell
      title="Xây dựng & thi công"
      subtitle="Tổng thầu công trình dân dụng và công nghiệp — năng lực quản lý dự án chuyên nghiệp, cam kết chất lượng và tiến độ."
      breadcrumbs={[
        { label: "Trang chủ", to: "/" },
        { label: "Lĩnh vực hoạt động", to: "/sectors" },
        { label: "Xây dựng & thi công" },
      ]}
    >
      <SubNav items={SUBNAV} />

      <div className="space-y-16 lg:space-y-24">
        {/* Hero intro */}
        <section className="scroll-mt-28">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal>
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-gold text-gold-foreground shadow-gold">
                <HardHat className="h-7 w-7" />
              </div>
              <SectionLabel>Lĩnh vực 05 / 06</SectionLabel>
              <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground leading-tight">
                Biến bản vẽ thành <span className="text-primary">công trình thực</span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed text-base lg:text-lg">
                Năng lực thi công là nơi mọi giải pháp hội tụ. C83 Group đóng vai trò tổng thầu cho công trình
                dân dụng và công nghiệp, từ thiết kế – thi công trọn gói đến phần thô, hoàn thiện và cải tạo,
                với quy trình quản lý dự án chuyên nghiệp.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Chúng tôi kiểm soát tiến độ, chi phí và an toàn bằng hệ thống báo cáo minh bạch, đồng thời tận dụng
                hệ sinh thái nội bộ để rút ngắn thời gian cung ứng và thi công.
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
                  <HardHat className="h-28 w-28 text-white/90" strokeWidth={1.2} />
                </div>
                <div className="absolute top-6 left-6 text-7xl font-black text-white/15 tracking-tight">05</div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section className="scroll-mt-28">
          <Reveal className="max-w-3xl">
            <SectionLabel>Sản phẩm & dịch vụ</SectionLabel>
            <h2 className="mt-3 text-2xl lg:text-3xl font-black text-foreground leading-tight">
              Năng lực <span className="text-primary">xây dựng & thi công</span>
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
                Giao công trình cho <span className="text-gradient-gold">tổng thầu C83</span>
              </h2>
              <p className="mt-4 text-white/80 leading-relaxed">
                Gửi yêu cầu để được tư vấn phương án thi công, dự toán và tiến độ cho dự án của bạn.
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

export const Route = createFileRoute("/sectors/xay-dung-thi-cong")({
  head: () => ({
    meta: [
      { title: "Xây dựng & thi công – Tổng thầu công trình – C83 Group" },
      { name: "description", content: "C83 Group là tổng thầu xây dựng & thi công công trình dân dụng và công nghiệp: thiết kế – thi công D&B, phần thô, hoàn thiện, quản lý dự án và cải tạo nâng cấp công trình." },
      { name: "keywords", content: "xây dựng thi công, tổng thầu xây dựng, thiết kế thi công D&B, thi công phần thô hoàn thiện, quản lý dự án, cải tạo công trình, C83 Group" },
      { property: "og:title", content: "Xây dựng & thi công – Tổng thầu công trình – C83 Group" },
      { property: "og:description", content: "Tổng thầu công trình dân dụng và công nghiệp với năng lực quản lý dự án chuyên nghiệp, cam kết chất lượng và tiến độ." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://c83group.vn/sectors/xay-dung-thi-cong" },
    ],
    links: [{ rel: "canonical", href: "https://c83group.vn/sectors/xay-dung-thi-cong" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Lĩnh vực hoạt động", item: "https://c83group.vn/sectors" },
            { "@type": "ListItem", position: 3, name: "Xây dựng & thi công", item: "https://c83group.vn/sectors/xay-dung-thi-cong" },
          ],
        }),
      },
    ],
  }),
  component: ConstructionPage,
});
