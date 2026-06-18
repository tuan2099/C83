import { createFileRoute, Link } from "@tanstack/react-router";
import { Cpu, CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";
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
    title: "AI tư vấn & chốt đơn",
    desc: "Trợ lý AI tư vấn sản phẩm, báo giá tự động và hỗ trợ chốt đơn 24/7 trên website và kênh nhắn tin.",
  },
  {
    title: "CRM & tự động hóa quy trình",
    desc: "Triển khai CRM, quản lý phễu bán hàng và tự động hóa các tác vụ lặp lại để đội ngũ tập trung vào khách hàng.",
  },
  {
    title: "Phân tích dữ liệu kinh doanh",
    desc: "Dashboard và báo cáo trực quan, dự báo nhu cầu và đo lường hiệu quả từng kênh bán hàng theo thời gian thực.",
  },
  {
    title: "Chatbot & chăm sóc khách hàng",
    desc: "Chatbot đa kênh và kịch bản chăm sóc tự động, rút ngắn thời gian phản hồi và nâng cao trải nghiệm khách hàng.",
  },
];

const APPLICATIONS = [
  {
    title: "Showroom vật liệu & nội thất",
    desc: "AI tư vấn gợi ý sản phẩm theo nhu cầu và ngân sách, kết nối CRM để đội sale theo dõi và chăm sóc khách hàng tiềm năng.",
  },
  {
    title: "Chuỗi bán lẻ & phân phối",
    desc: "Tự động hóa quy trình báo giá – đặt hàng và dashboard phân tích doanh số đa chi nhánh theo thời gian thực.",
  },
  {
    title: "Doanh nghiệp dịch vụ & B2B",
    desc: "Chatbot tiếp nhận yêu cầu, phân loại lead và bàn giao cho đội ngũ kinh doanh, tăng tỷ lệ chuyển đổi.",
  },
];

function AiPage() {
  return (
    <PageShell
      title="Công nghệ & AI hỗ trợ bán hàng"
      subtitle="Giải pháp AI và phần mềm cho bán hàng, vận hành thông minh — tăng trưởng doanh thu và tối ưu hóa quy trình."
      breadcrumbs={[
        { label: "Trang chủ", to: "/" },
        { label: "Lĩnh vực hoạt động", to: "/sectors" },
        { label: "Công nghệ & AI hỗ trợ bán hàng" },
      ]}
    >
      <SubNav items={SUBNAV} />

      <div className="space-y-16 lg:space-y-24">
        {/* Hero intro */}
        <section className="scroll-mt-28">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal className="lg:order-2">
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-gold text-gold-foreground shadow-gold">
                <Cpu className="h-7 w-7" />
              </div>
              <SectionLabel>Lĩnh vực 06 / 06</SectionLabel>
              <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground leading-tight">
                Tăng trưởng doanh thu bằng <span className="text-primary">AI & dữ liệu</span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed text-base lg:text-lg">
                Công nghệ giúp đội ngũ bán hàng làm việc thông minh hơn. C83 Group xây dựng giải pháp AI và
                phần mềm cho bán hàng – vận hành: từ trợ lý AI tư vấn, CRM, tự động hóa quy trình đến phân tích
                dữ liệu, giúp doanh nghiệp tăng doanh thu và giảm chi phí vận hành.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Các giải pháp được tùy biến theo quy trình thực tế và tích hợp với hệ thống sẵn có, đảm bảo dễ
                triển khai và đo lường được hiệu quả.
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
                  <Cpu className="h-28 w-28 text-white/90" strokeWidth={1.2} />
                </div>
                <div className="absolute top-6 left-6 text-7xl font-black text-white/15 tracking-tight">06</div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section className="scroll-mt-28">
          <Reveal className="max-w-3xl">
            <SectionLabel>Sản phẩm & dịch vụ</SectionLabel>
            <h2 className="mt-3 text-2xl lg:text-3xl font-black text-foreground leading-tight">
              Giải pháp <span className="text-primary">công nghệ & AI</span>
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
                Ứng dụng <span className="text-gradient-gold">AI</span> vào quy trình bán hàng
              </h2>
              <p className="mt-4 text-white/80 leading-relaxed">
                Gửi yêu cầu để được tư vấn lộ trình triển khai AI – CRM và demo giải pháp phù hợp với doanh nghiệp.
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

export const Route = createFileRoute("/sectors/cong-nghe-ai")({
  head: () => ({
    meta: [
      { title: "Công nghệ & AI hỗ trợ bán hàng – C83 Group" },
      { name: "description", content: "C83 Group cung cấp giải pháp công nghệ & AI hỗ trợ bán hàng: AI tư vấn chốt đơn, CRM, tự động hóa quy trình, phân tích dữ liệu kinh doanh và chatbot chăm sóc khách hàng." },
      { name: "keywords", content: "công nghệ AI bán hàng, AI tư vấn chốt đơn, CRM tự động hóa, phân tích dữ liệu kinh doanh, chatbot chăm sóc khách hàng, chuyển đổi số, C83 Group" },
      { property: "og:title", content: "Công nghệ & AI hỗ trợ bán hàng – C83 Group" },
      { property: "og:description", content: "Giải pháp AI và phần mềm cho bán hàng, vận hành thông minh, giúp doanh nghiệp tăng trưởng doanh thu và tối ưu quy trình." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://c83group.vn/sectors/cong-nghe-ai" },
    ],
    links: [{ rel: "canonical", href: "https://c83group.vn/sectors/cong-nghe-ai" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Lĩnh vực hoạt động", item: "https://c83group.vn/sectors" },
            { "@type": "ListItem", position: 3, name: "Công nghệ & AI hỗ trợ bán hàng", item: "https://c83group.vn/sectors/cong-nghe-ai" },
          ],
        }),
      },
    ],
  }),
  component: AiPage,
});
