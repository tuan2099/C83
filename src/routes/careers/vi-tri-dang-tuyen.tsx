import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Clock, Briefcase, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { SubNav } from "@/components/site/SubNav";

const SUBNAV = [
  { label: "Tổng quan", to: "/careers" },
  { label: "Vị trí đang tuyển", to: "/careers/vi-tri-dang-tuyen" },
  { label: "Ứng tuyển", to: "/careers/ung-tuyen" },
];

const JOBS = [
  { title: "Trưởng phòng Kinh doanh dự án", dept: "Kinh doanh", loc: "Hà Nội", note: "Dẫn dắt đội ngũ phát triển khách hàng dự án quy mô lớn trên toàn quốc." },
  { title: "Kỹ sư Cơ điện M&E", dept: "Kỹ thuật", loc: "TP. HCM", note: "Thiết kế và giám sát hệ thống M&E cho các công trình trọng điểm." },
  { title: "Chỉ huy trưởng công trình", dept: "Thi công", loc: "Đà Nẵng", note: "Điều hành toàn bộ tiến độ, chất lượng và an toàn tại công trường." },
  { title: "AI/ML Engineer", dept: "Công nghệ", loc: "Hà Nội", note: "Xây dựng giải pháp AI hỗ trợ bán hàng và vận hành cho hệ sinh thái." },
  { title: "Chuyên viên Thiết kế nội thất", dept: "Kỹ thuật", loc: "Hà Nội", note: "Lên ý tưởng, triển khai bản vẽ và concept nội thất cao cấp." },
  { title: "Chuyên viên Nhân sự", dept: "Hành chính", loc: "Hà Nội", note: "Phụ trách tuyển dụng, đào tạo và phát triển nguồn nhân lực." },
] as const;

const JOB_LOCATIONS: Record<string, string> = {
  "Hà Nội": "Hanoi",
  "TP. HCM": "Ho Chi Minh City",
  "Đà Nẵng": "Da Nang",
};

const DEPARTMENTS = ["Tất cả", "Kinh doanh", "Kỹ thuật", "Thi công", "Công nghệ", "Hành chính"];

export const Route = createFileRoute("/careers/vi-tri-dang-tuyen")({
  head: () => ({
    meta: [
      { title: "Vị trí đang tuyển – Cơ hội việc làm tại C83 Group" },
      { name: "description", content: "Danh sách vị trí đang tuyển tại C83 Group theo từng phòng ban: kinh doanh, kỹ thuật, thi công, công nghệ và hành chính. Lọc nhanh và ứng tuyển vào vị trí phù hợp nhất." },
      { name: "keywords", content: "vị trí đang tuyển C83 Group, việc làm C83, tuyển kỹ sư M&E, tuyển AI engineer, chỉ huy trưởng công trình, tuyển dụng kinh doanh dự án" },
      { property: "og:title", content: "Vị trí đang tuyển tại C83 Group – Tìm việc theo phòng ban" },
      { property: "og:description", content: "Khám phá các vị trí đang mở theo phòng ban tại C83 Group và ứng tuyển vào công việc phù hợp với năng lực của bạn." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://c83group.vn/careers/vi-tri-dang-tuyen" },
    ],
    links: [{ rel: "canonical", href: "https://c83group.vn/careers/vi-tri-dang-tuyen" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Tuyển dụng", item: "https://c83group.vn/careers" },
            { "@type": "ListItem", position: 3, name: "Vị trí đang tuyển", item: "https://c83group.vn/careers/vi-tri-dang-tuyen" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: JOBS.map((j, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "JobPosting",
              title: j.title,
              employmentType: "FULL_TIME",
              hiringOrganization: { "@type": "Organization", name: "C83 Group", sameAs: "https://c83group.vn" },
              jobLocation: {
                "@type": "Place",
                address: { "@type": "PostalAddress", addressLocality: JOB_LOCATIONS[j.loc] ?? j.loc, addressCountry: "VN" },
              },
            },
          })),
        }),
      },
    ],
  }),
  component: JobsPage,
});

function JobsPage() {
  const [dept, setDept] = useState("Tất cả");
  const list = dept === "Tất cả" ? JOBS : JOBS.filter((j) => j.dept === dept);

  return (
    <PageShell
      title="Vị trí đang tuyển"
      subtitle="Lựa chọn phòng ban để khám phá các vị trí phù hợp với năng lực và định hướng nghề nghiệp của bạn."
      breadcrumbs={[
        { label: "Trang chủ", to: "/" },
        { label: "Tuyển dụng", to: "/careers" },
        { label: "Vị trí đang tuyển" },
      ]}
    >
      <SubNav items={SUBNAV} />

      <div className="space-y-16 lg:space-y-24">
        {/* Open positions */}
        <section>
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Cơ hội nghề nghiệp</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground">
              Vị trí <span className="text-primary">đang tuyển</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Lựa chọn phòng ban để lọc nhanh các vị trí phù hợp với năng lực và định hướng của bạn.
            </p>
          </Reveal>

          {/* Department filter */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {DEPARTMENTS.map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDept(d)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition ${
                  dept === d
                    ? "bg-primary text-primary-foreground shadow-elegant"
                    : "bg-muted text-muted-foreground hover:bg-muted/70"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="mt-10 space-y-4">
            {list.map((j, i) => (
              <Reveal key={j.title} delay={i * 60}>
                <div className="group rounded-2xl border border-border bg-card p-6 lg:p-7 shadow-card hover-lift flex flex-col lg:flex-row lg:items-center gap-5">
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shrink-0">
                    <Briefcase className="h-7 w-7" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-lg lg:text-xl font-black text-foreground group-hover:text-primary transition">{j.title}</h3>
                      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold tracking-wider uppercase bg-accent/15 text-primary border border-accent/30">
                        {j.dept}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-muted-foreground">{j.note}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-primary" /> {j.loc}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-primary" /> Toàn thời gian
                      </span>
                    </div>
                  </div>
                  <Button asChild className="shrink-0 bg-primary hover:bg-primary/90 font-bold">
                    <Link to="/careers/ung-tuyen">Ứng tuyển <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <Reveal className="text-center">
          <p className="text-muted-foreground">Đã tìm thấy vị trí phù hợp? Gửi hồ sơ ngay để bắt đầu hành trình cùng chúng tôi</p>
          <Button asChild size="lg" className="mt-4 bg-gradient-gold text-gold-foreground font-black shadow-gold hover:opacity-95">
            <Link to="/careers/ung-tuyen">Ứng tuyển ngay <Send className="ml-2 h-4 w-4" /></Link>
          </Button>
        </Reveal>
      </div>
    </PageShell>
  );
}
