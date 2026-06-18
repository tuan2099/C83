import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GraduationCap, Home, TreePine, LifeBuoy, Compass, ArrowRight, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { SubNav } from "@/components/site/SubNav";

export const Route = createFileRoute("/esg/hoat-dong-cong-dong")({
  head: () => ({
    meta: [
      { title: "Hoạt động cộng đồng – Trách nhiệm xã hội (CSR) | C83 Group" },
      { name: "description", content: "Hơn 50 chương trình CSR của C83 Group: học bổng Ươm mầm tài năng, xây nhà tình nghĩa, trồng cây phủ xanh đô thị và hỗ trợ đồng bào vùng lũ trên cả nước." },
      { name: "keywords", content: "hoạt động cộng đồng, CSR, trách nhiệm xã hội, học bổng, nhà tình nghĩa, trồng cây xanh, cứu trợ vùng lũ, C83 Group, thiện nguyện" },
      { property: "og:title", content: "Hoạt động cộng đồng – Trách nhiệm xã hội (CSR) | C83 Group" },
      { property: "og:description", content: "Lan tỏa giá trị, sẻ chia trách nhiệm: hơn 50 chương trình CSR đồng hành cùng cộng đồng." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/esg/hoat-dong-cong-dong" },
    ],
    links: [{ rel: "canonical", href: "/esg/hoat-dong-cong-dong" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Phát triển bền vững", item: "https://c83group.vn/esg" },
            { "@type": "ListItem", position: 3, name: "Hoạt động cộng đồng", item: "https://c83group.vn/esg/hoat-dong-cong-dong" },
          ],
        }),
      },
    ],
  }),
  component: CongDongPage,
});

const SUBNAV = [
  { label: "Tổng quan", to: "/esg" },
  { label: "Chiến lược ESG", to: "/esg/chien-luoc" },
  { label: "Văn hóa doanh nghiệp", to: "/esg/van-hoa-doanh-nghiep" },
  { label: "Hoạt động cộng đồng", to: "/esg/hoat-dong-cong-dong" },
  { label: "Báo cáo bền vững", to: "/esg/bao-cao-ben-vung" },
];

const COMMUNITY = [
  {
    icon: GraduationCap,
    t: 'Quỹ học bổng "Ươm mầm tài năng"',
    d: "Trao học bổng cho học sinh, sinh viên vượt khó học giỏi trên cả nước, tiếp sức cho thế hệ tương lai vững bước đến trường.",
  },
  {
    icon: Home,
    t: "Xây nhà tình nghĩa",
    d: "Chung tay xây dựng mái ấm cho các gia đình có hoàn cảnh khó khăn, mang đến nơi an cư ổn định và bền vững.",
  },
  {
    icon: TreePine,
    t: "Trồng cây xanh – phủ xanh đô thị",
    d: "Hưởng ứng các chương trình trồng cây, phủ xanh và bảo vệ môi trường sống, góp phần giảm phát thải và cải thiện cảnh quan.",
  },
  {
    icon: LifeBuoy,
    t: "Hỗ trợ đồng bào vùng lũ",
    d: "Kịp thời cứu trợ, đồng hành cùng đồng bào tại các vùng thiên tai, bão lũ với nhu yếu phẩm và nguồn lực tái thiết.",
  },
];

function CongDongPage() {
  return (
    <PageShell
      title="Hoạt động cộng đồng"
      subtitle="Hơn 50 chương trình CSR lan tỏa giá trị, sẻ chia trách nhiệm và đồng hành cùng cộng đồng."
      breadcrumbs={[
        { label: "Trang chủ", to: "/" },
        { label: "Phát triển bền vững", to: "/esg" },
        { label: "Hoạt động cộng đồng" },
      ]}
    >
      <SubNav items={SUBNAV} />

      <div className="space-y-16 lg:space-y-24">
        {/* Community / CSR programs */}
        <section>
          <Reveal>
            <div className="rounded-3xl bg-secondary text-secondary-foreground p-8 lg:p-12 overflow-hidden relative">
              <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
              <div className="relative max-w-3xl">
                <SectionLabel light>Hoạt động cộng đồng</SectionLabel>
                <h2 className="mt-3 text-2xl lg:text-3xl font-black">
                  Lan tỏa giá trị, <span className="text-gradient-gold">sẻ chia trách nhiệm</span>
                </h2>
                <p className="mt-4 text-white/80 leading-relaxed">
                  Với hơn 50 chương trình CSR đã triển khai, C83 Group cam kết đồng hành cùng cộng đồng,
                  góp phần xây dựng một xã hội tốt đẹp và bền vững hơn. Mỗi sáng kiến đều xuất phát từ trách
                  nhiệm và sự sẻ chia, hướng tới những tác động tích cực và lâu dài cho xã hội.
                </p>
              </div>

              <div className="relative mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {COMMUNITY.map((c, i) => (
                  <Reveal key={c.t} delay={i * 80}>
                    <div className="h-full rounded-2xl bg-white/10 border border-white/15 p-6 hover:bg-white/[0.14] transition">
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-gold-foreground shadow-gold">
                        <c.icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-4 text-base font-black leading-snug">{c.t}</h3>
                      <p className="mt-2 text-sm text-white/75 leading-relaxed">{c.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <Reveal>
          <div className="rounded-3xl bg-gradient-primary text-primary-foreground p-8 lg:p-12 grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center overflow-hidden relative">
            <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative">
              <Compass className="h-11 w-11 text-accent" strokeWidth={1.5} />
              <h2 className="mt-5 text-2xl lg:text-3xl font-black">
                Cùng chung tay <span className="text-gradient-gold">vì cộng đồng</span>
              </h2>
              <p className="mt-4 text-white/80 leading-relaxed">
                Hãy kết nối với C83 Group để đồng hành trong các chương trình thiện nguyện và trách nhiệm xã hội.
              </p>
            </div>
            <div className="relative lg:justify-self-end">
              <Button asChild size="lg" className="bg-gradient-gold text-gold-foreground font-bold shadow-gold">
                <Link to="/contact">Liên hệ hợp tác <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="mt-3 sm:mt-0 sm:ml-3 border-2 border-white/60 bg-transparent text-white hover:bg-white hover:text-primary font-bold">
                <Link to="/esg/bao-cao-ben-vung">Báo cáo bền vững <ChevronRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </PageShell>
  );
}
