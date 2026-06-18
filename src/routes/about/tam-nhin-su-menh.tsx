import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Eye, Target, ShieldCheck, Gem, Handshake, Compass, ArrowRight,
} from "lucide-react";
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

const VALUES = [
  { icon: ShieldCheck, t: "Chính trực", d: "Minh bạch và trung thực trong mọi giao dịch, cam kết với khách hàng và đối tác." },
  { icon: Gem, t: "Chất lượng", d: "Theo đuổi tiêu chuẩn quốc tế trong từng sản phẩm, dịch vụ và công trình." },
  { icon: Handshake, t: "Hợp tác", d: "Sức mạnh hệ sinh thái đến từ sự gắn kết giữa 11 công ty thành viên." },
  { icon: Compass, t: "Đổi mới", d: "Ứng dụng công nghệ và AI để dẫn đầu xu hướng ngành xây dựng." },
];

export const Route = createFileRoute("/about/tam-nhin-su-menh")({
  head: () => ({
    meta: [
      { title: "Tầm nhìn – Sứ mệnh – Giá trị cốt lõi | C83 Group" },
      { name: "description", content: "Tầm nhìn, sứ mệnh và 4 giá trị cốt lõi của C83 Group: chính trực, chất lượng, hợp tác và đổi mới — kim chỉ nam định hình văn hóa và mọi quyết định chiến lược của tập đoàn." },
      { name: "keywords", content: "tầm nhìn C83 Group, sứ mệnh C83 Group, giá trị cốt lõi, chính trực, chất lượng, hợp tác, đổi mới, văn hóa doanh nghiệp" },
      { property: "og:title", content: "Tầm nhìn – Sứ mệnh – Giá trị cốt lõi | C83 Group" },
      { property: "og:description", content: "Tầm nhìn, sứ mệnh và 4 giá trị cốt lõi định hình văn hóa và mọi quyết định chiến lược của C83 Group." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://c83group.vn/about/tam-nhin-su-menh" },
    ],
    links: [{ rel: "canonical", href: "https://c83group.vn/about/tam-nhin-su-menh" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Về tập đoàn", item: "https://c83group.vn/about" },
            { "@type": "ListItem", position: 3, name: "Tầm nhìn – Sứ mệnh", item: "https://c83group.vn/about/tam-nhin-su-menh" },
          ],
        }),
      },
    ],
  }),
  component: VisionMissionPage,
});

function VisionMissionPage() {
  return (
    <PageShell
      title="Tầm nhìn – Sứ mệnh – Giá trị cốt lõi"
      subtitle="Kim chỉ nam cho mọi quyết định chiến lược và nền tảng văn hóa của C83 Group."
      breadcrumbs={[
        { label: "Trang chủ", to: "/" },
        { label: "Về tập đoàn", to: "/about" },
        { label: "Tầm nhìn – Sứ mệnh" },
      ]}
    >
      <SubNav items={SUBNAV} />

      <div className="space-y-16 lg:space-y-24">
        {/* Vision / Mission */}
        <section>
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Tầm nhìn – Sứ mệnh</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground">
              Kim chỉ nam cho mọi <span className="text-primary">quyết định chiến lược</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Tầm nhìn và sứ mệnh là điểm tựa định hướng dài hạn, giúp C83 Group giữ vững bản sắc
              và sự nhất quán trong suốt hành trình phát triển hệ sinh thái 11 công ty thành viên.
            </p>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="h-full rounded-2xl bg-gradient-primary text-primary-foreground p-8 lg:p-10 shadow-elegant">
                <Eye className="h-10 w-10 text-accent" />
                <h3 className="mt-5 text-2xl font-black">Tầm nhìn</h3>
                <p className="mt-3 text-white/85 leading-relaxed">
                  Trở thành tập đoàn đa ngành hàng đầu Việt Nam về giải pháp trọn gói cho công trình,
                  được tin cậy bởi chất lượng quốc tế và đổi mới công nghệ.
                </p>
                <p className="mt-4 text-white/80 leading-relaxed">
                  Chúng tôi hướng tới vị thế dẫn dắt thị trường, nơi mỗi công ty thành viên đều là
                  chuyên gia trong lĩnh vực của mình, cùng tạo nên sức mạnh hệ sinh thái khác biệt.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="h-full rounded-2xl bg-card border border-border p-8 lg:p-10 shadow-card">
                <Target className="h-10 w-10 text-primary" />
                <h3 className="mt-5 text-2xl font-black text-foreground">Sứ mệnh</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Kết nối nguồn lực – Kiến tạo công trình – Gia tăng giá trị, mang đến cho khách hàng
                  hệ sinh thái khép kín từ vật liệu, công nghệ đến thi công.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Mỗi giải pháp của C83 Group đều đặt lợi ích bền vững của khách hàng, cộng đồng và
                  đối tác làm trọng tâm, góp phần nâng tầm chất lượng công trình Việt Nam.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Core values */}
        <section>
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Giá trị cốt lõi</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground">
              Bốn giá trị <span className="text-primary">nền tảng</span>
            </h2>
            <p className="mt-3 text-muted-foreground">Định hình văn hóa và cách C83 Group vận hành mỗi ngày.</p>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 hover-lift relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition" />
                  <v.icon className="h-10 w-10 text-primary relative" strokeWidth={1.5} />
                  <h3 className="mt-5 text-lg font-black text-foreground relative">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed relative">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <Reveal className="text-center">
          <p className="text-muted-foreground">Tìm hiểu đội ngũ hiện thực hóa tầm nhìn và sứ mệnh này</p>
          <Button asChild size="lg" className="mt-4 bg-primary hover:bg-primary/90 font-bold">
            <Link to="/about/ban-dieu-hanh">Gặp gỡ ban điều hành <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </Reveal>
      </div>
    </PageShell>
  );
}
