import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users, Lightbulb, HandHeart, Sprout, Compass, ArrowRight, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { SubNav } from "@/components/site/SubNav";

export const Route = createFileRoute("/esg/van-hoa-doanh-nghiep")({
  head: () => ({
    meta: [
      { title: "Văn hóa doanh nghiệp – Giá trị con người C83 Group" },
      { name: "description", content: "Văn hóa doanh nghiệp C83 Group đặt con người làm trung tâm, đề cao đổi mới sáng tạo, tinh thần đồng đội và phát triển bền vững — nền tảng sức mạnh nội tại của tập đoàn." },
      { name: "keywords", content: "văn hóa doanh nghiệp, giá trị cốt lõi, con người là trung tâm, đổi mới sáng tạo, tinh thần đồng đội, phát triển bền vững, C83 Group" },
      { property: "og:title", content: "Văn hóa doanh nghiệp – Giá trị con người C83 Group" },
      { property: "og:description", content: "Những giá trị định hình con người C83: con người là trung tâm, đổi mới, đồng đội và bền vững." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/esg/van-hoa-doanh-nghiep" },
    ],
    links: [{ rel: "canonical", href: "/esg/van-hoa-doanh-nghiep" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Phát triển bền vững", item: "https://c83group.vn/esg" },
            { "@type": "ListItem", position: 3, name: "Văn hóa doanh nghiệp", item: "https://c83group.vn/esg/van-hoa-doanh-nghiep" },
          ],
        }),
      },
    ],
  }),
  component: VanHoaPage,
});

const SUBNAV = [
  { label: "Tổng quan", to: "/esg" },
  { label: "Chiến lược ESG", to: "/esg/chien-luoc" },
  { label: "Văn hóa doanh nghiệp", to: "/esg/van-hoa-doanh-nghiep" },
  { label: "Hoạt động cộng đồng", to: "/esg/hoat-dong-cong-dong" },
  { label: "Báo cáo bền vững", to: "/esg/bao-cao-ben-vung" },
];

const CULTURE = [
  {
    icon: Users,
    t: "Con người là trung tâm",
    d: "Mỗi cá nhân là tài sản quý giá nhất, được trân trọng, lắng nghe và tạo điều kiện phát triển toàn diện về năng lực lẫn sự nghiệp.",
  },
  {
    icon: Lightbulb,
    t: "Đổi mới sáng tạo",
    d: "Không ngừng ứng dụng công nghệ và tư duy mới để dẫn đầu xu hướng ngành, biến thách thức thành cơ hội tăng trưởng.",
  },
  {
    icon: HandHeart,
    t: "Tinh thần đồng đội",
    d: "Sức mạnh hệ sinh thái đến từ sự gắn kết và hợp tác giữa các thành viên, cùng chia sẻ mục tiêu và giá trị chung.",
  },
  {
    icon: Sprout,
    t: "Phát triển bền vững",
    d: "Mọi tăng trưởng đều gắn liền với trách nhiệm với xã hội và môi trường, hướng tới giá trị lâu dài cho thế hệ tương lai.",
  },
];

function VanHoaPage() {
  return (
    <PageShell
      title="Văn hóa doanh nghiệp"
      subtitle="Những giá trị cốt lõi nuôi dưỡng con người C83 và tạo nên sức mạnh nội tại của hệ sinh thái."
      breadcrumbs={[
        { label: "Trang chủ", to: "/" },
        { label: "Phát triển bền vững", to: "/esg" },
        { label: "Văn hóa doanh nghiệp" },
      ]}
    >
      <SubNav items={SUBNAV} />

      <div className="space-y-16 lg:space-y-24">
        {/* Culture values */}
        <section>
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Văn hóa doanh nghiệp</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground">
              Những giá trị <span className="text-primary">định hình con người</span> C83
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Văn hóa doanh nghiệp là nền tảng tạo nên sức mạnh nội tại và sự phát triển bền vững của tập đoàn.
              Bốn giá trị cốt lõi dưới đây là sợi chỉ đỏ kết nối hơn 2.500 con người trên toàn hệ sinh thái
              11 công ty thành viên, định hướng cách chúng tôi làm việc, hợp tác và cống hiến mỗi ngày.
            </p>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CULTURE.map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 hover-lift relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition" />
                  <c.icon className="h-10 w-10 text-primary relative" strokeWidth={1.5} />
                  <h3 className="mt-5 text-lg font-black text-foreground relative">{c.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed relative">{c.d}</p>
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
                Gia nhập đội ngũ <span className="text-gradient-gold">C83 Group</span>
              </h2>
              <p className="mt-4 text-white/80 leading-relaxed">
                Cùng chia sẻ những giá trị của chúng tôi và kiến tạo tương lai bền vững. Hãy kết nối để bắt đầu hành trình.
              </p>
            </div>
            <div className="relative lg:justify-self-end">
              <Button asChild size="lg" className="bg-gradient-gold text-gold-foreground font-bold shadow-gold">
                <Link to="/contact">Liên hệ với chúng tôi <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="mt-3 sm:mt-0 sm:ml-3 border-2 border-white/60 bg-transparent text-white hover:bg-white hover:text-primary font-bold">
                <Link to="/esg/hoat-dong-cong-dong">Hoạt động cộng đồng <ChevronRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </PageShell>
  );
}
