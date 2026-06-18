import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft, ArrowRight, CheckCircle2, Layers, Network, Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { SubNav } from "@/components/site/SubNav";
import { MEMBERS_BY_SLUG } from "@/lib/data/members";

export const Route = createFileRoute("/members/$slug")({
  head: ({ params }) => {
    const m = MEMBERS_BY_SLUG[params.slug];
    const name = m?.name ?? "Đơn vị thành viên";
    const title = `${name} – Đơn vị thành viên C83 Group`;
    const description =
      m?.description ??
      "Đơn vị thành viên thuộc hệ sinh thái 11 công ty của C83 Group, tập đoàn đa ngành hoạt động trên 6 lĩnh vực trọng yếu.";
    const url = `/members/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: `${name}, C83 Group, đơn vị thành viên, ${m?.sector ?? "hệ sinh thái"}, công ty thành viên, tập đoàn đa ngành` },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
              { "@type": "ListItem", position: 2, name: "Đơn vị thành viên", item: "https://c83group.vn/members" },
              { "@type": "ListItem", position: 3, name, item: `https://c83group.vn${url}` },
            ],
          }),
        },
      ],
    };
  },
  component: MemberDetailPage,
});

const SUBNAV = [
  { label: "Danh sách đơn vị", to: "/members" },
  { label: "Sơ đồ hệ sinh thái", to: "/members/so-do-he-sinh-thai" },
];

function MemberDetailPage() {
  const { slug } = Route.useParams();
  const member = MEMBERS_BY_SLUG[slug];

  return (
    <PageShell
      title={member?.name ?? "Đơn vị thành viên"}
      subtitle={member?.tagline}
      breadcrumbs={[
        { label: "Trang chủ", to: "/" },
        { label: "Đơn vị thành viên", to: "/members" },
        { label: member?.name ?? "Đơn vị" },
      ]}
    >
      <SubNav items={SUBNAV} />
      <div className="space-y-16 lg:space-y-24">
        {!member ? (
          <section id="not-found" className="scroll-mt-28">
            <Reveal className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-10 lg:p-14 text-center shadow-card">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground">
                <Network className="h-8 w-8" />
              </div>
              <h2 className="mt-6 text-2xl lg:text-3xl font-black text-foreground">
                Không tìm thấy đơn vị
              </h2>
              <p className="mt-3 text-muted-foreground">
                Đơn vị thành viên bạn tìm kiếm không tồn tại hoặc đã được cập nhật. Vui lòng quay lại
                danh sách để xem toàn bộ 11 công ty thành viên của C83 Group.
              </p>
              <div className="mt-7 flex justify-center">
                <Button asChild size="lg" className="bg-gradient-gold text-gold-foreground font-bold shadow-gold hover:opacity-95">
                  <Link to="/members">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Về danh sách đơn vị
                  </Link>
                </Button>
              </div>
            </Reveal>
          </section>
        ) : (
          <>
            {/* Gradient hero card */}
            <section id="tong-quan" className="scroll-mt-28">
              <Reveal>
                <div className="relative overflow-hidden rounded-3xl bg-gradient-primary text-primary-foreground p-8 lg:p-12 shadow-elegant">
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "radial-gradient(circle at 80% 30%, white 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }} />
                  <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
                  <div className="relative">
                    <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-black tracking-widest text-accent">
                      {member.code}
                    </span>
                    <h2 className="mt-5 text-3xl lg:text-5xl font-black tracking-tight">{member.name}</h2>
                    <p className="mt-3 max-w-2xl text-lg text-white/85">{member.tagline}</p>
                    <span className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-4 py-2 text-sm font-bold text-white">
                      <Layers className="h-4 w-4 text-accent" /> {member.sector}
                    </span>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* Description + lĩnh vực badge */}
            <section id="gioi-thieu" className="scroll-mt-28">
              <div className="grid lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-12 items-start">
                <Reveal>
                  <SectionLabel>Giới thiệu đơn vị</SectionLabel>
                  <h2 className="mt-3 text-2xl lg:text-3xl font-black text-foreground">
                    Về <span className="text-primary">{member.name}</span>
                  </h2>
                  <p className="mt-5 text-muted-foreground leading-relaxed text-base lg:text-lg">
                    {member.description}
                  </p>
                </Reveal>

                <Reveal delay={150}>
                  <div className="rounded-2xl border border-border bg-card p-6 lg:p-7 shadow-card hover-lift">
                    <div className="flex items-center gap-3">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                        <Building2 className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Mã đơn vị</div>
                        <div className="text-lg font-black text-foreground">{member.code}</div>
                      </div>
                    </div>
                    <div className="mt-5 border-t border-border pt-5">
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Lĩnh vực</div>
                      <span className="mt-2 inline-flex items-center rounded-full bg-gradient-gold px-4 py-1.5 text-sm font-black text-gold-foreground shadow-gold">
                        {member.sector}
                      </span>
                    </div>
                    <div className="mt-5 border-t border-border pt-5">
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Hệ sinh thái</div>
                      <div className="mt-1.5 text-sm text-foreground">
                        Thành viên của tập đoàn đa ngành <span className="font-black text-primary">C83 Group</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* Services checklist */}
            <section id="dich-vu" className="scroll-mt-28">
              <Reveal className="text-center max-w-3xl mx-auto">
                <SectionLabel center>Năng lực cốt lõi</SectionLabel>
                <h2 className="mt-3 text-2xl lg:text-3xl font-black text-foreground">
                  Dịch vụ <span className="text-primary">tiêu biểu</span>
                </h2>
                <p className="mt-4 text-muted-foreground text-lg">
                  Những giải pháp chủ lực mà {member.name} mang đến cho khách hàng và đối tác.
                </p>
              </Reveal>

              <div className="mt-12 grid sm:grid-cols-2 gap-5">
                {member.services.map((s, i) => (
                  <Reveal key={s} delay={i * 70}>
                    <div className="group h-full rounded-2xl border border-border bg-card p-6 hover-lift relative overflow-hidden">
                      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition" />
                      <div className="relative flex items-start gap-4">
                        <CheckCircle2 className="h-7 w-7 text-primary shrink-0" strokeWidth={1.75} />
                        <div>
                          <div className="text-xs font-bold tracking-widest text-primary">0{i + 1}</div>
                          <h3 className="mt-1 text-lg font-black text-foreground leading-snug">{s}</h3>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* Closing CTA */}
            <Reveal className="text-center">
              <SectionLabel center>Kết nối hợp tác</SectionLabel>
              <h2 className="mt-3 text-2xl lg:text-3xl font-black text-foreground">
                Hợp tác cùng <span className="text-primary">{member.name}</span>
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Liên hệ với chúng tôi để được tư vấn giải pháp phù hợp, hoặc quay lại khám phá các đơn vị
                thành viên khác trong hệ sinh thái C83 Group.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg" className="bg-gradient-gold text-gold-foreground font-bold shadow-gold hover:opacity-95">
                  <Link to="/contact">Liên hệ hợp tác <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary font-bold">
                  <Link to="/members"><ArrowLeft className="mr-2 h-4 w-4" /> Về danh sách đơn vị</Link>
                </Button>
              </div>
            </Reveal>
          </>
        )}
      </div>
    </PageShell>
  );
}
