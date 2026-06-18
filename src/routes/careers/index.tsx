import { createFileRoute, Link } from "@tanstack/react-router";
import {
  TrendingUp, Wallet, Lightbulb, GraduationCap, Briefcase, Send, ArrowRight, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SectionLabel, Counter } from "@/components/site/Reveal";
import { SubNav } from "@/components/site/SubNav";

const SUBNAV = [
  { label: "Tổng quan", to: "/careers" },
  { label: "Vị trí đang tuyển", to: "/careers/vi-tri-dang-tuyen" },
  { label: "Ứng tuyển", to: "/careers/ung-tuyen" },
];

const BENEFITS = [
  { icon: TrendingUp, t: "Lộ trình thăng tiến rõ ràng", d: "Khung năng lực minh bạch và cơ hội thăng tiến trên 11 công ty thành viên." },
  { icon: Wallet, t: "Đãi ngộ cạnh tranh", d: "Lương thưởng theo hiệu quả, phúc lợi đầy đủ và chính sách hấp dẫn." },
  { icon: Lightbulb, t: "Môi trường đổi mới & sáng tạo", d: "Văn hóa cởi mở, ứng dụng công nghệ và AI vào công việc hằng ngày." },
  { icon: GraduationCap, t: "Đào tạo & phát triển liên tục", d: "Chương trình đào tạo nội bộ, mentoring và hỗ trợ phát triển kỹ năng." },
];

const STATS = [
  { n: 50, s: "+", l: "Vị trí đang mở" },
  { n: 2500, s: "+", l: "Nhân sự" },
  { n: 11, s: "", l: "Công ty thành viên" },
  { n: 95, s: "%", l: "Hài lòng" },
];

const CHILDREN = [
  {
    icon: Briefcase,
    title: "Vị trí đang tuyển",
    desc: "Khám phá hơn 50 vị trí đang mở theo từng phòng ban — kinh doanh, kỹ thuật, thi công, công nghệ và hành chính.",
    to: "/careers/vi-tri-dang-tuyen",
  },
  {
    icon: Send,
    title: "Ứng tuyển",
    desc: "Gửi hồ sơ trực tuyến chỉ trong vài phút, bộ phận Nhân sự của C83 Group sẽ liên hệ với bạn sớm nhất.",
    to: "/careers/ung-tuyen",
  },
];

export const Route = createFileRoute("/careers/")({
  head: () => ({
    meta: [
      { title: "Tuyển dụng – Cơ hội nghề nghiệp tại C83 Group" },
      { name: "description", content: "Tuyển dụng tại C83 Group: hơn 50 vị trí đang mở trên hệ sinh thái 11 công ty thành viên. Lộ trình thăng tiến rõ ràng, đãi ngộ cạnh tranh và môi trường đổi mới sáng tạo." },
      { name: "keywords", content: "tuyển dụng C83 Group, việc làm C83, cơ hội nghề nghiệp, tuyển dụng xây dựng, kỹ sư M&E, AI engineer, ứng tuyển C83 Group" },
      { property: "og:title", content: "Tuyển dụng tại C83 Group – Cùng kiến tạo tương lai" },
      { property: "og:description", content: "Hơn 50 vị trí đang mở trên hệ sinh thái 11 công ty thành viên. Gia nhập C83 Group để phát triển sự nghiệp cùng tập đoàn đa ngành hàng đầu." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://c83group.vn/careers" },
    ],
    links: [{ rel: "canonical", href: "https://c83group.vn/careers" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Tuyển dụng", item: "https://c83group.vn/careers" },
          ],
        }),
      },
    ],
  }),
  component: CareersOverviewPage,
});

function CareersOverviewPage() {
  return (
    <PageShell
      title="Tuyển dụng"
      subtitle="Gia nhập C83 Group — cùng kiến tạo tương lai. Hơn 50 vị trí đang mở trên hệ sinh thái 11 công ty thành viên."
      breadcrumbs={[{ label: "Trang chủ", to: "/" }, { label: "Tuyển dụng" }]}
    >
      <SubNav items={SUBNAV} />

      <div className="space-y-16 lg:space-y-24">
        {/* Why C83 */}
        <section>
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Vì sao chọn C83 Group</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground">
              Nơi sự nghiệp của bạn <span className="text-primary">phát triển bền vững</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Chúng tôi tìm kiếm những con người tài năng, đam mê và sẵn sàng phát triển cùng tập đoàn đa ngành hàng đầu.
            </p>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.t} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 hover-lift relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition" />
                  <b.icon className="h-10 w-10 text-primary relative" strokeWidth={1.5} />
                  <h3 className="mt-5 text-lg font-black text-foreground relative">{b.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed relative">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Stats row */}
          <Reveal delay={120}>
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {STATS.map((s, i) => (
                <div
                  key={s.l}
                  className={`rounded-2xl p-6 lg:p-7 shadow-card hover-lift ${
                    i === 0 ? "bg-gradient-primary text-primary-foreground" : "bg-card border border-border"
                  }`}
                >
                  <div className="text-3xl lg:text-4xl font-black">
                    <Counter end={s.n} suffix={s.s} />
                  </div>
                  <div className={`mt-1 text-sm ${i === 0 ? "text-white/85" : "text-muted-foreground"}`}>{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Explore sub-pages */}
        <section>
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Bắt đầu hành trình</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground">
              Tìm vị trí phù hợp & <span className="text-primary">ứng tuyển ngay</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Khám phá các vị trí đang mở theo phòng ban hoặc gửi hồ sơ trực tuyến để gia nhập C83 Group.
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

        {/* CTA */}
        <Reveal className="text-center">
          <p className="text-muted-foreground">Tìm hiểu thêm về tập đoàn và hệ sinh thái 11 công ty thành viên</p>
          <Button asChild size="lg" variant="outline" className="mt-4 border-2 border-primary text-primary font-bold">
            <Link to="/about">Về tập đoàn C83 Group <ChevronRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </Reveal>
      </div>
    </PageShell>
  );
}
