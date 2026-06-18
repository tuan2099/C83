import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2, Layers, Users, Award, ArrowRight, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SectionLabel, Counter } from "@/components/site/Reveal";
import { SubNav } from "@/components/site/SubNav";
import { MEMBERS } from "@/lib/data/members";

export const Route = createFileRoute("/members/")({
  head: () => ({
    meta: [
      { title: "Đơn vị thành viên C83 Group – Hệ sinh thái 11 công ty thành viên" },
      { name: "description", content: "Khám phá danh sách 11 công ty thành viên của C83 Group trên 6 lĩnh vực: vật liệu hoàn thiện, âm thanh – trình chiếu, phụ kiện cửa & kính, nước sạch, xây dựng và công nghệ AI." },
      { name: "keywords", content: "C83 Group, đơn vị thành viên, công ty thành viên, danh sách thành viên, hệ sinh thái, C83 Materials, C83 Construction, tập đoàn đa ngành" },
      { property: "og:title", content: "Đơn vị thành viên C83 Group – Hệ sinh thái 11 công ty thành viên" },
      { property: "og:description", content: "Danh sách 11 công ty thành viên trên 6 lĩnh vực cùng tạo nên sức mạnh tập đoàn đa ngành C83 Group." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/members" },
    ],
    links: [{ rel: "canonical", href: "/members" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Đơn vị thành viên", item: "https://c83group.vn/members" },
          ],
        }),
      },
    ],
  }),
  component: MembersPage,
});

const SUBNAV = [
  { label: "Danh sách đơn vị", to: "/members" },
  { label: "Sơ đồ hệ sinh thái", to: "/members/so-do-he-sinh-thai" },
];

const STATS = [
  { icon: Building2, n: 11, s: "", l: "Đơn vị thành viên", grad: true },
  { icon: Layers, n: 6, s: "", l: "Lĩnh vực hoạt động" },
  { icon: Users, n: 2500, s: "+", l: "Nhân sự toàn hệ thống" },
  { icon: Award, n: 15, s: "+", l: "Năm kinh nghiệm" },
];

function MembersPage() {
  return (
    <PageShell
      title="Đơn vị thành viên"
      subtitle="Hệ sinh thái 11 công ty thành viên cùng tạo nên sức mạnh tập đoàn đa ngành C83 Group."
      breadcrumbs={[{ label: "Trang chủ", to: "/" }, { label: "Đơn vị thành viên" }]}
    >
      <SubNav items={SUBNAV} />
      <div className="space-y-16 lg:space-y-24">
        {/* Stats strip */}
        <section id="stats" className="scroll-mt-28">
          <Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-6 lg:p-7 shadow-card hover-lift ${
                    s.grad ? "bg-gradient-primary text-primary-foreground" : "bg-card border border-border"
                  }`}
                >
                  <s.icon className={`h-9 w-9 ${s.grad ? "text-accent" : "text-primary"}`} />
                  <div className="mt-4 text-3xl lg:text-4xl font-black">
                    <Counter end={s.n} suffix={s.s} />
                  </div>
                  <div className={`mt-1 text-sm ${s.grad ? "text-white/85" : "text-muted-foreground"}`}>{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Members list */}
        <section id="list" className="scroll-mt-28">
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Hệ sinh thái thành viên</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground">
              Danh sách <span className="text-primary">công ty thành viên</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Mỗi đơn vị là một chuyên gia trong lĩnh vực, cùng tạo nên sức mạnh tập đoàn đa ngành.
            </p>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {MEMBERS.map((m, i) => (
              <Reveal key={m.code} delay={i * 60}>
                <Link
                  to="/members/$slug"
                  params={{ slug: m.slug }}
                  className="group relative block h-full rounded-2xl border border-border bg-card overflow-hidden hover-lift"
                >
                  <div className="h-32 bg-gradient-primary relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }} />
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="text-4xl font-black text-white/95 tracking-tight">{m.code}</span>
                    </div>
                    <div className="absolute top-3 right-3 h-6 w-6 rounded-full bg-accent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-black text-foreground group-hover:text-primary transition">
                      {m.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{m.tagline}</p>
                    <div className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition">
                      Xem chi tiết <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <Reveal className="text-center">
          <SectionLabel center>Tìm hiểu thêm</SectionLabel>
          <h2 className="mt-3 text-2xl lg:text-3xl font-black text-foreground">
            Khám phá toàn bộ <span className="text-primary">năng lực tập đoàn</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Cùng tìm hiểu 6 lĩnh vực hoạt động hoặc kết nối với chúng tôi để mở ra cơ hội hợp tác.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-gradient-gold text-gold-foreground font-bold shadow-gold hover:opacity-95">
              <Link to="/sectors">Xem lĩnh vực hoạt động <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary font-bold">
              <Link to="/contact">Liên hệ hợp tác <ChevronRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </PageShell>
  );
}
