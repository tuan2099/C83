import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
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

type Leader = { name: string; role: string; initials: string };

const BOARD: Leader[] = [
  { name: "Ông Nguyễn Văn C", role: "Chủ tịch HĐQT", initials: "NC" },
  { name: "Bà Lê Thị 3", role: "Phó Chủ tịch HĐQT", initials: "L3" },
  { name: "Ông Đỗ Văn 8", role: "Thành viên HĐQT", initials: "Đ8" },
];

const EXECUTIVES: Leader[] = [
  { name: "Ông Trần Văn 8", role: "Tổng Giám đốc", initials: "T8" },
  { name: "Bà Lê Thị 3", role: "Phó Tổng Giám đốc", initials: "L3" },
  { name: "Ông Phạm Văn A", role: "Giám đốc Tài chính", initials: "PA" },
  { name: "Ông Hoàng Văn M", role: "Giám đốc Vận hành", initials: "HM" },
];

export const Route = createFileRoute("/about/ban-dieu-hanh")({
  head: () => ({
    meta: [
      { title: "HĐQT & Ban điều hành C83 Group – Đội ngũ lãnh đạo" },
      { name: "description", content: "Hội đồng quản trị và ban điều hành C83 Group: đội ngũ lãnh đạo giàu kinh nghiệm, dẫn dắt tập đoàn đa ngành với tầm nhìn dài hạn và năng lực quản trị chuyên nghiệp theo chuẩn quốc tế." },
      { name: "keywords", content: "ban điều hành C83 Group, hội đồng quản trị, HĐQT, lãnh đạo C83 Group, tổng giám đốc, đội ngũ lãnh đạo, quản trị doanh nghiệp" },
      { property: "og:title", content: "HĐQT & Ban điều hành C83 Group – Đội ngũ lãnh đạo" },
      { property: "og:description", content: "Đội ngũ lãnh đạo giàu kinh nghiệm dẫn dắt C83 Group với tầm nhìn dài hạn và năng lực quản trị chuyên nghiệp." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://c83group.vn/about/ban-dieu-hanh" },
    ],
    links: [{ rel: "canonical", href: "https://c83group.vn/about/ban-dieu-hanh" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Về tập đoàn", item: "https://c83group.vn/about" },
            { "@type": "ListItem", position: 3, name: "Ban điều hành", item: "https://c83group.vn/about/ban-dieu-hanh" },
          ],
        }),
      },
    ],
  }),
  component: LeadershipPage,
});

function LeaderGrid({ people }: { people: Leader[] }) {
  return (
    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {people.map((p, i) => (
        <Reveal key={p.name + i} delay={i * 80}>
          <div className="group rounded-2xl border border-border bg-card overflow-hidden hover-lift text-center">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary to-navy grid place-items-center">
              <span className="text-4xl font-black text-white/95">{p.initials}</span>
            </div>
            <div className="p-5">
              <h3 className="font-black text-foreground">{p.name}</h3>
              <p className="mt-1 text-sm text-primary font-semibold">{p.role}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function LeadershipPage() {
  return (
    <PageShell
      title="HĐQT & Ban điều hành"
      subtitle="Đội ngũ lãnh đạo giàu kinh nghiệm dẫn dắt C83 Group với tầm nhìn dài hạn và quản trị chuyên nghiệp."
      breadcrumbs={[
        { label: "Trang chủ", to: "/" },
        { label: "Về tập đoàn", to: "/about" },
        { label: "Ban điều hành" },
      ]}
    >
      <SubNav items={SUBNAV} />

      <div className="space-y-16 lg:space-y-24">
        {/* Intro */}
        <section>
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel center>HĐQT & Ban điều hành</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground">
              Đội ngũ <span className="text-primary">lãnh đạo</span> giàu kinh nghiệm
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Những con người dẫn dắt C83 Group với tầm nhìn dài hạn và năng lực quản trị chuyên nghiệp.
              Hội đồng quản trị hoạch định chiến lược và giám sát, trong khi ban điều hành trực tiếp
              vận hành hệ sinh thái 11 công ty thành viên trên 6 lĩnh vực.
            </p>
          </Reveal>
        </section>

        {/* Board of Directors */}
        <section>
          <Reveal className="max-w-3xl">
            <SectionLabel>Hội đồng quản trị</SectionLabel>
            <h3 className="mt-3 text-2xl lg:text-3xl font-black text-foreground">
              Định hướng <span className="text-primary">chiến lược</span> & giám sát
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              HĐQT chịu trách nhiệm hoạch định tầm nhìn, phê duyệt chiến lược và bảo đảm quản trị
              minh bạch vì lợi ích dài hạn của tập đoàn và các bên liên quan.
            </p>
          </Reveal>
          <LeaderGrid people={BOARD} />
        </section>

        {/* Executive Board */}
        <section>
          <Reveal className="max-w-3xl">
            <SectionLabel>Ban điều hành</SectionLabel>
            <h3 className="mt-3 text-2xl lg:text-3xl font-black text-foreground">
              Trực tiếp <span className="text-primary">vận hành</span> & thực thi
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Ban điều hành hiện thực hóa chiến lược thành kết quả kinh doanh cụ thể, điều phối nguồn lực
              và bảo đảm chất lượng dịch vụ nhất quán trên toàn hệ sinh thái.
            </p>
          </Reveal>
          <LeaderGrid people={EXECUTIVES} />
        </section>

        {/* CTA */}
        <Reveal className="text-center">
          <p className="text-muted-foreground">Tìm hiểu cơ hội phát triển sự nghiệp cùng đội ngũ C83 Group</p>
          <Button asChild size="lg" className="mt-4 bg-primary hover:bg-primary/90 font-bold">
            <Link to="/careers">Xem cơ hội nghề nghiệp <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </Reveal>
      </div>
    </PageShell>
  );
}
