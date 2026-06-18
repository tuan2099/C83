import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Layers, Volume2, DoorOpen, Droplets, HardHat, Cpu,
  Network, ArrowRight, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { SubNav } from "@/components/site/SubNav";

export const Route = createFileRoute("/members/so-do-he-sinh-thai")({
  head: () => ({
    meta: [
      { title: "Sơ đồ hệ sinh thái – Đơn vị thành viên C83 Group" },
      { name: "description", content: "Sơ đồ hệ sinh thái C83 Group: tập đoàn là trung tâm điều phối, kết nối 11 đơn vị thành viên theo 6 lĩnh vực trọng yếu thành một chuỗi giá trị khép kín." },
      { name: "keywords", content: "sơ đồ hệ sinh thái, C83 Group, hệ sinh thái khép kín, 6 lĩnh vực, 11 đơn vị thành viên, chuỗi giá trị, tập đoàn đa ngành" },
      { property: "og:title", content: "Sơ đồ hệ sinh thái – Đơn vị thành viên C83 Group" },
      { property: "og:description", content: "C83 Group là trung tâm điều phối, kết nối 11 đơn vị thành viên theo 6 lĩnh vực trọng yếu thành một hệ sinh thái khép kín." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/members/so-do-he-sinh-thai" },
    ],
    links: [{ rel: "canonical", href: "/members/so-do-he-sinh-thai" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Đơn vị thành viên", item: "https://c83group.vn/members" },
            { "@type": "ListItem", position: 3, name: "Sơ đồ hệ sinh thái", item: "https://c83group.vn/members/so-do-he-sinh-thai" },
          ],
        }),
      },
    ],
  }),
  component: EcosystemPage,
});

const SUBNAV = [
  { label: "Danh sách đơn vị", to: "/members" },
  { label: "Sơ đồ hệ sinh thái", to: "/members/so-do-he-sinh-thai" },
];

const ECOSYSTEM = [
  { icon: Layers, sector: "Vật liệu hoàn thiện", codes: ["C83-01", "C83-07"] },
  { icon: Volume2, sector: "Âm thanh – Trình chiếu", codes: ["C83-02"] },
  { icon: DoorOpen, sector: "Phụ kiện cửa & kính", codes: ["C83-03"] },
  { icon: Droplets, sector: "Nước sạch & nước nóng", codes: ["C83-04", "C83-09"] },
  { icon: HardHat, sector: "Xây dựng & thi công", codes: ["C83-05", "C83-08", "C83-11"] },
  { icon: Cpu, sector: "Công nghệ & AI", codes: ["C83-06", "C83-10"] },
];

function EcosystemPage() {
  return (
    <PageShell
      title="Sơ đồ hệ sinh thái"
      subtitle="C83 Group là trung tâm điều phối, kết nối 11 đơn vị thành viên theo 6 lĩnh vực trọng yếu thành một chuỗi giá trị khép kín."
      breadcrumbs={[
        { label: "Trang chủ", to: "/" },
        { label: "Đơn vị thành viên", to: "/members" },
        { label: "Sơ đồ hệ sinh thái" },
      ]}
    >
      <SubNav items={SUBNAV} />
      <div className="space-y-16 lg:space-y-24">
        {/* Intro */}
        <section id="gioi-thieu" className="scroll-mt-28">
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Sơ đồ hệ sinh thái</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground">
              6 lĩnh vực — <span className="text-primary">1 hệ sinh thái</span> khép kín
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Mỗi đơn vị thành viên đảm nhiệm một mắt xích chuyên biệt, cùng vận hành dưới sự điều phối
              của tập đoàn để tạo nên giải pháp trọn gói từ vật liệu, công nghệ đến thi công công trình.
            </p>
          </Reveal>
        </section>

        {/* Ecosystem map */}
        <section id="so-do" className="scroll-mt-28">
          {/* Central hub */}
          <Reveal>
            <div className="relative mx-auto max-w-2xl rounded-3xl bg-gradient-primary text-primary-foreground p-8 lg:p-10 text-center shadow-elegant overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: "radial-gradient(circle at 80% 30%, white 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }} />
              <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
              <div className="relative">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-gold text-gold-foreground shadow-gold">
                  <Network className="h-8 w-8" />
                </div>
                <div className="mt-5 text-3xl lg:text-4xl font-black tracking-tight">C83 GROUP</div>
                <p className="mt-2 text-white/80">Trung tâm điều phối hệ sinh thái 11 đơn vị thành viên</p>
              </div>
            </div>

            {/* Connector */}
            <div className="mx-auto h-12 w-px bg-gradient-to-b from-primary to-border" />
          </Reveal>

          {/* Sector groups */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ECOSYSTEM.map((e, i) => (
              <Reveal key={e.sector} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 lg:p-7 hover-lift relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition" />
                  <div className="relative flex items-center gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                      <e.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold tracking-widest text-primary">0{i + 1} / 06</div>
                      <h3 className="text-lg font-black text-foreground leading-tight">{e.sector}</h3>
                    </div>
                  </div>
                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {e.codes.map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-black text-foreground"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <Reveal className="text-center">
          <SectionLabel center>Tìm hiểu thêm</SectionLabel>
          <h2 className="mt-3 text-2xl lg:text-3xl font-black text-foreground">
            Xem chi tiết <span className="text-primary">từng đơn vị thành viên</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Khám phá danh sách 11 công ty thành viên hoặc kết nối với chúng tôi để mở ra cơ hội hợp tác.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-gradient-gold text-gold-foreground font-bold shadow-gold hover:opacity-95">
              <Link to="/members">Xem danh sách đơn vị <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
