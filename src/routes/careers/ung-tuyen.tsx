import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Phone, Sparkles, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { SubNav } from "@/components/site/SubNav";

const SUBNAV = [
  { label: "Tổng quan", to: "/careers" },
  { label: "Vị trí đang tuyển", to: "/careers/vi-tri-dang-tuyen" },
  { label: "Ứng tuyển", to: "/careers/ung-tuyen" },
];

const POSITIONS = [
  "Trưởng phòng Kinh doanh dự án",
  "Kỹ sư Cơ điện M&E",
  "Chỉ huy trưởng công trình",
  "AI/ML Engineer",
  "Chuyên viên Thiết kế nội thất",
  "Chuyên viên Nhân sự",
] as const;

const CONTACTS = [
  { icon: Mail, t: "Email tuyển dụng", d: "tuyendung@c83group.vn" },
  { icon: Phone, t: "Hotline nhân sự", d: "1900 0000" },
];

export const Route = createFileRoute("/careers/ung-tuyen")({
  head: () => ({
    meta: [
      { title: "Ứng tuyển – Gửi hồ sơ trực tuyến tại C83 Group" },
      { name: "description", content: "Ứng tuyển trực tuyến vào C83 Group: điền họ tên, email, điện thoại, chọn vị trí và gửi CV. Bộ phận Nhân sự sẽ liên hệ với bạn trong thời gian sớm nhất để trao đổi cơ hội." },
      { name: "keywords", content: "ứng tuyển C83 Group, gửi hồ sơ C83, form ứng tuyển, nộp CV online, tuyển dụng C83 Group, cơ hội việc làm C83" },
      { property: "og:title", content: "Ứng tuyển vào C83 Group – Bắt đầu hành trình sự nghiệp" },
      { property: "og:description", content: "Điền thông tin và gửi hồ sơ ứng tuyển trực tuyến, bộ phận Nhân sự của C83 Group sẽ liên hệ với bạn trong thời gian sớm nhất." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://c83group.vn/careers/ung-tuyen" },
    ],
    links: [{ rel: "canonical", href: "https://c83group.vn/careers/ung-tuyen" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Tuyển dụng", item: "https://c83group.vn/careers" },
            { "@type": "ListItem", position: 3, name: "Ứng tuyển", item: "https://c83group.vn/careers/ung-tuyen" },
          ],
        }),
      },
    ],
  }),
  component: ApplyPage,
});

function ApplyPage() {
  return (
    <PageShell
      title="Ứng tuyển"
      subtitle="Điền thông tin bên dưới, bộ phận Nhân sự của C83 Group sẽ liên hệ với bạn trong thời gian sớm nhất."
      breadcrumbs={[
        { label: "Trang chủ", to: "/" },
        { label: "Tuyển dụng", to: "/careers" },
        { label: "Ứng tuyển" },
      ]}
    >
      <SubNav items={SUBNAV} />

      <div className="space-y-16 lg:space-y-24">
        {/* Application form */}
        <section>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <Reveal>
              <SectionLabel>Form ứng tuyển</SectionLabel>
              <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground leading-tight">
                Gửi hồ sơ — <span className="text-primary">bắt đầu hành trình</span> cùng chúng tôi
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Chỉ vài phút để hoàn tất hồ sơ. Bộ phận Nhân sự của C83 Group sẽ xem xét và phản hồi
                ứng viên phù hợp trong thời gian sớm nhất.
              </p>

              <div className="mt-8 space-y-4">
                {CONTACTS.map((c) => (
                  <div key={c.t} className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card hover-lift">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shrink-0">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{c.t}</div>
                      <div className="mt-0.5 text-base font-black text-foreground">{c.d}</div>
                    </div>
                  </div>
                ))}
                <div className="flex items-start gap-3 rounded-xl bg-surface-alt border border-border p-4">
                  <Sparkles className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Chưa tìm thấy vị trí phù hợp? Gửi hồ sơ ứng tuyển tự do, chúng tôi sẽ liên hệ khi có cơ hội phù hợp.
                  </p>
                </div>
                <div className="pt-1">
                  <Link
                    to="/careers/vi-tri-dang-tuyen"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:gap-3 transition-all"
                  >
                    Xem các vị trí đang tuyển <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <form
                onSubmit={(e) => { e.preventDefault(); alert("Cảm ơn bạn đã ứng tuyển! C83 Group sẽ liên hệ sớm."); }}
                className="rounded-3xl bg-card border border-border shadow-elegant p-7 lg:p-9"
              >
                <h3 className="text-xl lg:text-2xl font-black text-foreground">Thông tin ứng tuyển</h3>
                <p className="mt-1 text-sm text-muted-foreground">Các trường có dấu * là bắt buộc.</p>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <Field label="Họ và tên *" name="name" placeholder="Nguyễn Văn A" required />
                  <Field label="Email *" name="email" type="email" placeholder="email@example.com" required />
                  <Field label="Điện thoại *" name="phone" type="tel" placeholder="09xx xxx xxx" required />
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Vị trí ứng tuyển
                    </label>
                    <select
                      name="position"
                      defaultValue=""
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                    >
                      <option value="" disabled>Chọn vị trí</option>
                      {POSITIONS.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <Field label="Link CV / Portfolio" name="cv" type="url" placeholder="https://..." />
                </div>

                <div className="mt-4">
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Thư giới thiệu
                  </label>
                  <textarea
                    name="cover"
                    rows={4}
                    placeholder="Giới thiệu ngắn gọn về kinh nghiệm và lý do bạn muốn gia nhập C83 Group..."
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                  />
                </div>

                <Button type="submit" size="lg" className="mt-6 w-full bg-gradient-gold text-gold-foreground font-black text-base shadow-gold hover:opacity-95">
                  Gửi hồ sơ ứng tuyển <Send className="ml-2 h-4 w-4" />
                </Button>
                <p className="mt-3 text-xs text-muted-foreground text-center">
                  Bằng việc gửi form, bạn đồng ý với chính sách bảo mật của C83 Group.
                </p>
              </form>
            </Reveal>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

function Field({
  label, name, placeholder, type = "text", required,
}: { label: string; name: string; placeholder?: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
      />
    </div>
  );
}
