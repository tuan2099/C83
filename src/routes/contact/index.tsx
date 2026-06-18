import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { SubNav } from "@/components/site/SubNav";

export const Route = createFileRoute("/contact/")({
  head: () => ({
    meta: [
      { title: "Liên hệ với C83 Group – Yêu cầu báo giá & tư vấn dự án 24/7" },
      { name: "description", content: "Liên hệ C83 Group để yêu cầu báo giá và tư vấn giải pháp trọn gói cho công trình. Gửi yêu cầu trực tuyến, đội ngũ chuyên gia phản hồi trong vòng 24 giờ làm việc." },
      { name: "keywords", content: "liên hệ C83 Group, yêu cầu báo giá, tư vấn dự án, hotline C83 Group, báo giá công trình, giải pháp trọn gói, gửi yêu cầu báo giá" },
      { property: "og:title", content: "Liên hệ với C83 Group – Yêu cầu báo giá & tư vấn dự án" },
      { property: "og:description", content: "Để lại thông tin, đội ngũ chuyên gia C83 Group sẽ liên hệ tư vấn giải pháp trọn gói cho dự án của bạn trong vòng 24 giờ." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Liên hệ", item: "https://c83group.vn/contact" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "C83 Group",
          url: "https://c83group.vn",
          telephone: "1900-0000",
          email: "info@c83group.vn",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Số 83, Đường Lê Văn Lương",
            addressLocality: "Quận Thanh Xuân, Hà Nội",
            addressCountry: "VN",
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

const SUBNAV = [
  { label: "Yêu cầu báo giá", to: "/contact" },
  { label: "Văn phòng & chi nhánh", to: "/contact/van-phong" },
];

const CONTACT_INFO = [
  { icon: MapPin, t: "Trụ sở chính", d: "Số 83, Đường Lê Văn Lương, Thanh Xuân, Hà Nội" },
  { icon: Phone, t: "Hotline 24/7", d: "1900 0000" },
  { icon: Mail, t: "Email", d: "info@c83group.vn" },
  { icon: Clock, t: "Giờ làm việc", d: "T2–T7, 8:00–17:30" },
];

const SECTORS = [
  "Vật liệu hoàn thiện",
  "Âm thanh – trình chiếu",
  "Phụ kiện cửa & kính",
  "Nước sạch & nước nóng",
  "Xây dựng & thi công",
  "Công nghệ & AI",
];

const BUDGETS = [
  "Dưới 500 triệu",
  "500 triệu – 2 tỷ",
  "2 – 10 tỷ",
  "Trên 10 tỷ",
];

function ContactPage() {
  return (
    <PageShell
      title="Liên hệ với C83 Group"
      subtitle="Để lại thông tin, đội ngũ chuyên gia của chúng tôi sẽ liên hệ tư vấn trong vòng 24 giờ."
      breadcrumbs={[{ label: "Trang chủ", to: "/" }, { label: "Liên hệ" }]}
    >
      <SubNav items={SUBNAV} />

      <div className="space-y-16 lg:space-y-24">
        {/* Quote request */}
        <section id="quote" className="scroll-mt-28">
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Yêu cầu báo giá</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground">
              Bắt đầu dự án cùng <span className="text-primary">C83 Group</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Gửi yêu cầu của bạn — chúng tôi sẽ phản hồi và tư vấn giải pháp trọn gói trong vòng 24 giờ làm việc.
            </p>
          </Reveal>

          <div className="mt-12 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* LEFT: contact info cards */}
            <Reveal>
              <div className="space-y-4">
                {CONTACT_INFO.map((c) => (
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
              </div>

              <div className="mt-6 rounded-2xl bg-secondary text-secondary-foreground p-6 lg:p-7 relative overflow-hidden">
                <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />
                <div className="relative">
                  <h3 className="text-lg font-black">Cam kết phản hồi nhanh</h3>
                  <p className="mt-2 text-sm text-secondary-foreground/80 leading-relaxed">
                    Mọi yêu cầu báo giá đều được đội ngũ chuyên gia C83 Group tiếp nhận và phản hồi
                    trong vòng 24 giờ làm việc, đảm bảo tư vấn chính xác và minh bạch.
                  </p>
                </div>
              </div>

              <Reveal delay={80}>
                <Link
                  to="/contact/van-phong"
                  className="mt-6 group flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface-alt p-5 hover-lift"
                >
                  <span className="flex items-start gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-gold-foreground shrink-0 shadow-gold">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-base font-black text-foreground">Văn phòng & chi nhánh</span>
                      <span className="mt-0.5 block text-sm text-muted-foreground">
                        Xem hệ thống trụ sở của C83 Group trên toàn quốc.
                      </span>
                    </span>
                  </span>
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </Reveal>

            {/* RIGHT: quote form */}
            <Reveal delay={150}>
              <form
                onSubmit={(e) => { e.preventDefault(); alert("Cảm ơn bạn! C83 Group sẽ liên hệ trong vòng 24 giờ."); }}
                className="rounded-3xl bg-card border border-border shadow-elegant p-7 lg:p-9"
              >
                <h3 className="text-xl lg:text-2xl font-black text-foreground">Gửi yêu cầu báo giá</h3>
                <p className="mt-1 text-sm text-muted-foreground">Vui lòng điền đầy đủ thông tin bên dưới.</p>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <Field label="Họ và tên *" name="name" placeholder="Nguyễn Văn A" required />
                  <Field label="Công ty" name="company" placeholder="Tên công ty" />
                  <Field label="Điện thoại *" name="phone" placeholder="09xx xxx xxx" type="tel" required />
                  <Field label="Email *" name="email" placeholder="email@company.com" type="email" required />
                </div>

                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Lĩnh vực quan tâm
                    </label>
                    <select
                      name="sector"
                      defaultValue=""
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                    >
                      <option value="" disabled>Chọn lĩnh vực</option>
                      {SECTORS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Ngân sách dự kiến
                    </label>
                    <select
                      name="budget"
                      defaultValue=""
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                    >
                      <option value="" disabled>Chọn ngân sách</option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Nội dung yêu cầu *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Mô tả nhu cầu hoặc dự án của bạn..."
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                  />
                </div>

                <Button type="submit" size="lg" className="mt-6 w-full bg-gradient-gold text-gold-foreground font-black text-base shadow-gold hover:opacity-95">
                  Gửi yêu cầu báo giá <Send className="ml-2 h-4 w-4" />
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

/* ---------------- Sub primitives ---------------- */
function Field({
  label,
  name,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
      />
    </div>
  );
}
