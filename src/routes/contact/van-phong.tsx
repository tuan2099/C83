import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { SubNav } from "@/components/site/SubNav";

export const Route = createFileRoute("/contact/van-phong")({
  head: () => ({
    meta: [
      { title: "Văn phòng & chi nhánh C83 Group – Hà Nội, TP. HCM, Đà Nẵng" },
      { name: "description", content: "Hệ thống văn phòng C83 Group: trụ sở chính tại Hà Nội cùng chi nhánh TP. Hồ Chí Minh và Đà Nẵng. Xem địa chỉ, hotline và email từng văn phòng để liên hệ trực tiếp." },
      { name: "keywords", content: "văn phòng C83 Group, chi nhánh C83 Group, địa chỉ C83 Group, trụ sở Hà Nội, chi nhánh TP HCM, chi nhánh Đà Nẵng, bản đồ C83 Group" },
      { property: "og:title", content: "Văn phòng & chi nhánh C83 Group trên toàn quốc" },
      { property: "og:description", content: "C83 Group hiện diện tại ba trung tâm kinh tế lớn: Hà Nội, TP. Hồ Chí Minh và Đà Nẵng, sẵn sàng đồng hành cùng dự án của bạn." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact/van-phong" },
    ],
    links: [{ rel: "canonical", href: "/contact/van-phong" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://c83group.vn/" },
            { "@type": "ListItem", position: 2, name: "Liên hệ", item: "https://c83group.vn/contact" },
            { "@type": "ListItem", position: 3, name: "Văn phòng & chi nhánh", item: "https://c83group.vn/contact/van-phong" },
          ],
        }),
      },
    ],
  }),
  component: OfficesPage,
});

const SUBNAV = [
  { label: "Yêu cầu báo giá", to: "/contact" },
  { label: "Văn phòng & chi nhánh", to: "/contact/van-phong" },
];

const OFFICES = [
  {
    name: "Trụ sở Hà Nội",
    address: "Số 83, Lê Văn Lương, Thanh Xuân, Hà Nội",
    phone: "1900 0000",
    email: "hanoi@c83group.vn",
  },
  {
    name: "Chi nhánh TP. HCM",
    address: "Quận 1, TP. Hồ Chí Minh",
    phone: "1900 0000",
    email: "hcm@c83group.vn",
  },
  {
    name: "Chi nhánh Đà Nẵng",
    address: "Quận Hải Châu, Đà Nẵng",
    phone: "1900 0000",
    email: "danang@c83group.vn",
  },
];

function OfficesPage() {
  return (
    <PageShell
      title="Văn phòng & chi nhánh"
      subtitle="Hệ thống văn phòng C83 Group hiện diện tại ba trung tâm kinh tế lớn trên toàn quốc."
      breadcrumbs={[
        { label: "Trang chủ", to: "/" },
        { label: "Liên hệ", to: "/contact" },
        { label: "Văn phòng & chi nhánh" },
      ]}
    >
      <SubNav items={SUBNAV} />

      <div className="space-y-16 lg:space-y-24">
        {/* Offices & branches */}
        <section id="offices" className="scroll-mt-28">
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Văn phòng & chi nhánh</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-foreground">
              Hệ thống <span className="text-primary">văn phòng</span> toàn quốc
            </h2>
            <p className="mt-4 text-muted-foreground">
              C83 Group hiện diện tại ba trung tâm kinh tế lớn, sẵn sàng đồng hành cùng dự án của bạn.
              Liên hệ trực tiếp văn phòng gần nhất để được hỗ trợ nhanh chóng.
            </p>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {OFFICES.map((o, i) => (
              <Reveal key={o.name} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 hover-lift relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition" />
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground relative">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-black text-foreground relative">{o.name}</h3>
                  <ul className="mt-4 space-y-3 relative">
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{o.address}</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{o.phone}</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{o.email}</span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Map placeholder */}
          <Reveal delay={120}>
            <div className="mt-8 relative rounded-3xl border border-border bg-gradient-to-br from-surface-alt via-card to-surface overflow-hidden shadow-card">
              <div className="absolute inset-0 opacity-[0.07]" style={{
                backgroundImage: "linear-gradient(0deg, transparent 49.5%, currentColor 49.5%, currentColor 50.5%, transparent 50.5%), linear-gradient(90deg, transparent 49.5%, currentColor 49.5%, currentColor 50.5%, transparent 50.5%)",
                backgroundSize: "48px 48px",
                color: "var(--primary, #1e3a8a)",
              }} />
              <div className="relative grid place-items-center text-center px-6 py-20 lg:py-28">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-gold text-gold-foreground shadow-gold">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="mt-5 text-xl lg:text-2xl font-black text-foreground">Bản đồ trụ sở C83 Group</h3>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">
                  Số 83, Đường Lê Văn Lương, Quận Thanh Xuân, Hà Nội — trung tâm điều hành của hệ sinh thái C83 Group.
                </p>
                <Button asChild variant="outline" className="mt-6 border-2 border-primary text-primary font-bold">
                  <a href="tel:19000000">
                    Gọi hotline 1900 0000 <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </PageShell>
  );
}
