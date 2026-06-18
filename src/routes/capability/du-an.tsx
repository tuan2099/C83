import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { SubNav } from "@/components/site/SubNav";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/capability/du-an")({
  head: () => ({
    meta: [
      { title: "Dự án tiêu biểu – C83 Group" },
      { name: "description", content: "Dự án tiêu biểu C83 Group: hơn 500 công trình trọng điểm khắp ba miền — từ vật liệu hoàn thiện, âm thanh AV, phụ kiện cửa & kính đến tổng thầu thi công." },
      { name: "keywords", content: "dự án tiêu biểu C83 Group, công trình C83 Group, dự án xây dựng, vật liệu hoàn thiện, âm thanh AV, thi công công trình" },
      { property: "og:title", content: "Dự án tiêu biểu – C83 Group" },
      { property: "og:description", content: "Dấu ấn C83 Group trên các công trình trọng điểm khắp ba miền — từ vật liệu, âm thanh đến thi công tổng thầu." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://c83group.vn/capability/du-an" },
    ],
    links: [{ rel: "canonical", href: "https://c83group.vn/capability/du-an" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Năng lực & vị thế", item: "https://c83group.vn/capability" },
            { "@type": "ListItem", position: 3, name: "Dự án tiêu biểu", item: "https://c83group.vn/capability/du-an" },
          ],
        }),
      },
    ],
  }),
  component: ProjectsPage,
});

const SUBNAV = [
  { label: "Tổng quan", to: "/capability" },
  { label: "Hồ sơ năng lực", to: "/capability/ho-so-nang-luc" },
  { label: "Dự án tiêu biểu", to: "/capability/du-an" },
  { label: "Chứng chỉ & giải thưởng", to: "/capability/chung-chi" },
  { label: "Đối tác chiến lược", to: "/capability/doi-tac" },
];

const CATEGORIES = ["Tất cả", "Vật liệu hoàn thiện", "Âm thanh – AV", "Phụ kiện cửa & kính", "Xây dựng & thi công"];

const PROJECTS = [
  { title: "Khu căn hộ The Crown", cat: "Vật liệu hoàn thiện", loc: "Hà Nội", img: project1 },
  { title: "Trung tâm hội nghị quốc gia", cat: "Âm thanh – AV", loc: "Hà Nội", img: project2 },
  { title: "Diamond Tower", cat: "Phụ kiện cửa & kính", loc: "TP. HCM", img: project3 },
  { title: "Resort Sunset Bay", cat: "Xây dựng & thi công", loc: "Đà Nẵng", img: project1 },
  { title: "Vinhomes Sky Park", cat: "Vật liệu hoàn thiện", loc: "Hà Nội", img: project2 },
  { title: "Nhà hát Hòa Bình", cat: "Âm thanh – AV", loc: "TP. HCM", img: project3 },
];

function ProjectsPage() {
  const [filter, setFilter] = useState("Tất cả");
  const list = filter === "Tất cả" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  return (
    <PageShell
      title="Dự án tiêu biểu"
      subtitle="Dấu ấn C83 Group trên các công trình trọng điểm khắp ba miền — từ vật liệu, âm thanh đến thi công."
      breadcrumbs={[
        { label: "Trang chủ", to: "/" },
        { label: "Năng lực & vị thế", to: "/capability" },
        { label: "Dự án tiêu biểu" },
      ]}
    >
      <SubNav items={SUBNAV} />
      <div className="space-y-16 lg:space-y-24">
        {/* Filterable projects grid */}
        <section className="scroll-mt-28">
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Dự án tiêu biểu</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground">
              Những công trình <span className="text-primary">đã kiến tạo</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Lọc theo lĩnh vực để khám phá các công trình C83 Group đã thực hiện trên khắp cả nước.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition ${
                  filter === c
                    ? "bg-primary text-primary-foreground shadow-elegant"
                    : "bg-muted text-muted-foreground hover:bg-muted/70"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {list.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <a
                  href="#"
                  className="group block h-full rounded-2xl overflow-hidden relative shadow-card hover:shadow-elegant transition"
                >
                  <div className="relative aspect-[4/3]">
                    <img
                      src={p.img}
                      alt={`Dự án ${p.title} tại ${p.loc} do C83 Group thực hiện`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6 text-white">
                    <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-accent text-gold-foreground">
                      {p.cat}
                    </span>
                    <h3 className="mt-3 text-base lg:text-lg font-black">{p.title}</h3>
                    <div className="mt-2 flex items-center gap-1.5 text-xs lg:text-sm text-white/80">
                      <MapPin className="h-3.5 w-3.5" /> {p.loc}
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <Reveal className="text-center">
          <p className="text-muted-foreground">Cần giải pháp trọn gói cho công trình của bạn?</p>
          <Button asChild size="lg" className="mt-4 bg-gradient-gold text-gold-foreground font-bold shadow-gold hover:opacity-95">
            <Link to="/contact">Yêu cầu báo giá <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </Reveal>
      </div>
    </PageShell>
  );
}
