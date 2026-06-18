import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2, Users, Award, Handshake, CheckCircle2, ChevronRight, ArrowRight,
  Eye, Compass, History, Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SectionLabel, Counter } from "@/components/site/Reveal";
import { SubNav } from "@/components/site/SubNav";

const SUBNAV = [
  { label: "Tổng quan", to: "/about" },
  { label: "Tầm nhìn – Sứ mệnh", to: "/about/tam-nhin-su-menh" },
  { label: "Ban điều hành", to: "/about/ban-dieu-hanh" },
  { label: "Lịch sử", to: "/about/lich-su" },
  { label: "Trách nhiệm xã hội", to: "/about/trach-nhiem-xa-hoi" },
];

const CHILDREN = [
  {
    icon: Eye,
    title: "Tầm nhìn – Sứ mệnh",
    desc: "Kim chỉ nam chiến lược và 4 giá trị cốt lõi định hình văn hóa vận hành của tập đoàn.",
    to: "/about/tam-nhin-su-menh",
  },
  {
    icon: Users,
    title: "Ban điều hành",
    desc: "Hội đồng quản trị và ban điều hành giàu kinh nghiệm dẫn dắt C83 Group phát triển bền vững.",
    to: "/about/ban-dieu-hanh",
  },
  {
    icon: History,
    title: "Lịch sử hình thành",
    desc: "Hành trình hơn 15 năm từ một đơn vị vật liệu đến hệ sinh thái 11 công ty thành viên.",
    to: "/about/lich-su",
  },
  {
    icon: Leaf,
    title: "Trách nhiệm xã hội",
    desc: "Cam kết phát triển bền vững theo chuẩn ESG: môi trường, xã hội và quản trị minh bạch.",
    to: "/about/trach-nhiem-xa-hoi",
  },
];

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title: "Về tập đoàn C83 Group – Tổng quan hệ sinh thái đa ngành" },
      { name: "description", content: "Tổng quan về C83 Group: tập đoàn kinh tế đa ngành với hệ sinh thái 11 công ty thành viên trên 6 lĩnh vực, hơn 15 năm kinh nghiệm kiến tạo giá trị bền vững tại Việt Nam." },
      { name: "keywords", content: "C83 Group, về tập đoàn, tổng quan tập đoàn, tập đoàn đa ngành, hệ sinh thái doanh nghiệp, 11 công ty thành viên, giới thiệu C83 Group" },
      { property: "og:title", content: "Về tập đoàn C83 Group – Tổng quan hệ sinh thái đa ngành" },
      { property: "og:description", content: "Tập đoàn kinh tế đa ngành với hệ sinh thái 11 công ty thành viên trên 6 lĩnh vực, hơn 15 năm kiến tạo giá trị bền vững." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://c83group.vn/about" },
    ],
    links: [{ rel: "canonical", href: "https://c83group.vn/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Về tập đoàn", item: "https://c83group.vn/about" },
          ],
        }),
      },
    ],
  }),
  component: AboutOverviewPage,
});

function AboutOverviewPage() {
  return (
    <PageShell
      title="Về tập đoàn C83 Group"
      subtitle="Tập đoàn đa ngành với hệ sinh thái 11 công ty thành viên, kiến tạo giá trị bền vững trên 6 lĩnh vực trọng yếu."
      breadcrumbs={[{ label: "Trang chủ", to: "/" }, { label: "Về tập đoàn" }]}
    >
      <SubNav items={SUBNAV} />

      <div className="space-y-16 lg:space-y-24">
        {/* Overview */}
        <section className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <SectionLabel>Tổng quan tập đoàn</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground leading-tight">
              Tập đoàn đa ngành <span className="text-primary">tiên phong</span> kiến tạo giá trị bền vững
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              C83 Group là tập đoàn kinh tế đa ngành với hệ sinh thái 11 công ty thành viên,
              hoạt động trên 6 lĩnh vực trọng yếu: vật liệu hoàn thiện, âm thanh – trình chiếu,
              phụ kiện cửa & kính, nước sạch & nước nóng, xây dựng – thi công và công nghệ AI.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Với hơn 15 năm kinh nghiệm, chúng tôi cam kết mang đến giải pháp trọn gói,
              chất lượng quốc tế cho các công trình quy mô lớn tại Việt Nam — từ khâu cung ứng
              vật liệu, ứng dụng công nghệ đến thi công và bàn giao hoàn thiện.
            </p>
            <ul className="mt-7 space-y-3.5">
              {[
                "Mô hình quản trị chuyên nghiệp theo chuẩn quốc tế",
                "Đội ngũ chuyên gia giàu kinh nghiệm trong ngành",
                "Năng lực tài chính vững mạnh, minh bạch",
                "Văn hóa doanh nghiệp đề cao đổi mới và bền vững",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Building2, n: 11, s: "", l: "Công ty thành viên", grad: true },
                { icon: Users, n: 2500, s: "+", l: "Nhân sự toàn hệ thống" },
                { icon: Award, n: 50, s: "+", l: "Giải thưởng & chứng nhận" },
                { icon: Handshake, n: 1000, s: "+", l: "Đối tác chiến lược" },
              ].map((s, i) => (
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

        {/* Explore sub-pages */}
        <section>
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Khám phá về chúng tôi</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground">
              Tìm hiểu sâu hơn về <span className="text-primary">C83 Group</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Bốn câu chuyện làm nên bản sắc của tập đoàn — từ tầm nhìn chiến lược đến cam kết với cộng đồng.
            </p>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {CHILDREN.map((c, i) => (
              <Reveal key={c.to} delay={i * 80}>
                <Link
                  to={c.to as never}
                  className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 lg:p-8 hover-lift overflow-hidden"
                >
                  <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition" />
                  <div className="relative grid h-14 w-14 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-elegant">
                    <c.icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 text-xl font-black text-foreground relative group-hover:text-primary transition">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed relative">{c.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary relative group-hover:gap-3 transition-all">
                    Xem chi tiết <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA to members */}
        <Reveal className="text-center">
          <p className="text-muted-foreground">Khám phá hệ sinh thái 11 công ty thành viên của chúng tôi</p>
          <Button asChild size="lg" variant="outline" className="mt-4 border-2 border-primary text-primary font-bold">
            <Link to="/members">Xem đơn vị thành viên <ChevronRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </Reveal>
      </div>
    </PageShell>
  );
}
