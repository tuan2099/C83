import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Download, Building2, Layers, Volume2, DoorOpen, Droplets, HardHat, Cpu,
  ShieldCheck, Award, Handshake, Users, Sparkles, Leaf, Target, Compass, Heart,
  ChevronRight, CheckCircle2, MapPin, Mail, Phone, Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import heroImg from "@/assets/hero-construction.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "C83 Group – Hệ sinh thái kiến tạo giá trị toàn diện" },
      { name: "description", content: "C83 Group – Tập đoàn đa ngành với hệ sinh thái 11 công ty thành viên: vật liệu hoàn thiện, âm thanh, phụ kiện cửa & kính, nước sạch, xây dựng và công nghệ AI." },
      { property: "og:title", content: "C83 Group – Connect · Construct · Capitalize" },
      { property: "og:description", content: "Hệ sinh thái 11 công ty thành viên kiến tạo giá trị toàn diện cho công trình quy mô lớn." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "C83 Group",
          url: "https://c83group.vn",
          slogan: "Connect – Construct – Capitalize",
          description: "Tập đoàn đa ngành với hệ sinh thái 11 công ty thành viên",
          address: {
            "@type": "PostalAddress",
            addressCountry: "VN",
            addressLocality: "Hà Nội",
          },
          contactPoint: { "@type": "ContactPoint", telephone: "1900-0000", contactType: "customer service" },
        }),
      },
    ],
  }),
  component: HomePage,
});

/* ---------------- Reveal on scroll ---------------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setVisible(true), io.disconnect()),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`${visible ? "animate-fade-in-up" : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------------- Counter ---------------- */
function Counter({ end, suffix = "", duration = 1800 }: { end: number; suffix?: string; duration?: number }) {
  const { ref, visible } = useReveal<HTMLSpanElement>();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.floor(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, end, duration]);
  return <span ref={ref}>{n.toLocaleString("vi-VN")}{suffix}</span>;
}

/* ---------------- Data ---------------- */
const MEMBERS = [
  { code: "C83-01", name: "C83 Materials", desc: "Vật liệu hoàn thiện cao cấp", color: "from-primary to-navy" },
  { code: "C83-02", name: "C83 AudioVision", desc: "Hệ thống âm thanh – trình chiếu", color: "from-navy to-primary" },
  { code: "C83-03", name: "C83 Hardware", desc: "Phụ kiện cửa & kính nhập khẩu", color: "from-primary to-navy" },
  { code: "C83-04", name: "C83 AquaTech", desc: "Hệ thống nước sạch & nước nóng", color: "from-navy to-primary" },
  { code: "C83-05", name: "C83 Construction", desc: "Tổng thầu xây dựng & thi công", color: "from-primary to-navy" },
  { code: "C83-06", name: "C83 AI Sales", desc: "Công nghệ & AI hỗ trợ bán hàng", color: "from-navy to-primary" },
  { code: "C83-07", name: "C83 Interior", desc: "Thiết kế & thi công nội thất", color: "from-primary to-navy" },
  { code: "C83-08", name: "C83 Logistics", desc: "Vận chuyển & kho vận chuyên nghiệp", color: "from-navy to-primary" },
  { code: "C83-09", name: "C83 Smart Home", desc: "Giải pháp nhà thông minh", color: "from-primary to-navy" },
  { code: "C83-10", name: "C83 Trading", desc: "Thương mại & phân phối quốc tế", color: "from-navy to-primary" },
  { code: "C83-11", name: "C83 Investment", desc: "Đầu tư & phát triển dự án", color: "from-primary to-navy" },
];

const SECTORS = [
  { icon: Layers, title: "Vật liệu hoàn thiện", desc: "Đá ốp lát, gạch, sàn gỗ, vật liệu trang trí cao cấp." },
  { icon: Volume2, title: "Âm thanh – Trình chiếu", desc: "Hệ thống AV chuyên nghiệp cho hội trường, sự kiện." },
  { icon: DoorOpen, title: "Phụ kiện cửa & kính", desc: "Phụ kiện cửa kính, bản lề, tay nắm nhập khẩu." },
  { icon: Droplets, title: "Nước sạch & nước nóng", desc: "Hệ thống lọc nước, bình nóng lạnh công nghiệp." },
  { icon: HardHat, title: "Xây dựng & thi công", desc: "Tổng thầu công trình dân dụng và công nghiệp." },
  { icon: Cpu, title: "Công nghệ & AI", desc: "Giải pháp AI hỗ trợ bán hàng và vận hành thông minh." },
];

const USPS = [
  { icon: Building2, title: "Hệ sinh thái khép kín", desc: "11 công ty thành viên cung cấp giải pháp trọn gói." },
  { icon: ShieldCheck, title: "Năng lực kiểm chứng", desc: "Hàng trăm dự án đã triển khai trên toàn quốc." },
  { icon: Handshake, title: "Đối tác toàn cầu", desc: "Hợp tác với các thương hiệu hàng đầu thế giới." },
  { icon: Sparkles, title: "Đổi mới liên tục", desc: "Ứng dụng công nghệ và AI trong vận hành." },
];

const PROJECTS = [
  { img: project1, title: "Khu căn hộ cao cấp The Crown", cat: "Vật liệu hoàn thiện", loc: "Hà Nội" },
  { img: project2, title: "Trung tâm hội nghị quốc gia", cat: "Âm thanh – AV", loc: "Hà Nội" },
  { img: project3, title: "Tổ hợp văn phòng Diamond Tower", cat: "Phụ kiện cửa & kính", loc: "TP. HCM" },
  { img: project1, title: "Resort 5 sao Sunset Bay", cat: "Xây dựng & thi công", loc: "Đà Nẵng" },
];

const NEWS = [
  { date: "12.06.2026", cat: "Sự kiện", title: "C83 Group ký kết hợp tác chiến lược với tập đoàn quốc tế ABC" },
  { date: "05.06.2026", cat: "Dự án", title: "Khởi công dự án tổ hợp thương mại 50 tầng tại trung tâm Hà Nội" },
  { date: "28.05.2026", cat: "Giải thưởng", title: "C83 Group nhận giải Top 100 doanh nghiệp tiêu biểu Việt Nam 2026" },
];

/* ============================================================ */
function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <MembersSection />
        <SectorsSection />
        <USPSection />
        <ProjectsSection />
        <CapabilitySection />
        <ESGSection />
        <NewsSection />
        <CareerSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

/* ============ 1. HERO ============ */
function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="C83 Group corporate project"
          width={1920}
          height={1080}
          className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1439] via-transparent to-transparent" />
      </div>

      <div className="container-c83 relative z-10 pt-24 pb-16 lg:pt-28">
        <div className="max-w-4xl text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur px-4 py-1.5 text-xs font-bold tracking-widest text-accent animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            CONNECT · CONSTRUCT · CAPITALIZE
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl xl:text-[5rem] font-black leading-[1.05] animate-fade-in-up">
            C83 GROUP
            <span className="block mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-white/95">
              Hệ sinh thái kiến tạo
              <span className="text-gradient-gold"> giá trị toàn diện</span>
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base lg:text-lg text-white/85 leading-relaxed animate-fade-in-up" style={{ animationDelay: "150ms" }}>
            Kết nối nguồn lực – Kiến tạo công trình – Gia tăng giá trị.
            Tập đoàn đa ngành với <strong className="text-accent">11 công ty thành viên</strong> cung cấp giải pháp trọn gói từ vật liệu đến thi công.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <Button asChild size="lg" className="bg-gradient-gold text-gold-foreground font-bold shadow-gold hover:opacity-95 px-7">
              <a href="#members">
                Khám phá hệ sinh thái <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white/60 bg-white/5 text-white hover:bg-white hover:text-primary backdrop-blur font-bold px-7">
              <a href="#"> <Download className="mr-2 h-4 w-4" /> Tải hồ sơ năng lực</a>
            </Button>
          </div>

          {/* hero stats strip */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl animate-fade-in-up" style={{ animationDelay: "450ms" }}>
            {[
              { v: 11, s: "", l: "Công ty thành viên" },
              { v: 15, s: "+", l: "Năm kinh nghiệm" },
              { v: 500, s: "+", l: "Dự án hoàn thành" },
              { v: 1000, s: "+", l: "Đối tác chiến lược" },
            ].map((s, i) => (
              <div key={i} className="border-l-2 border-accent/70 pl-4">
                <div className="text-2xl lg:text-3xl font-black text-white">
                  <Counter end={s.v} suffix={s.s} />
                </div>
                <div className="mt-1 text-xs lg:text-sm text-white/70 uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/70 text-xs flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "800ms" }}>
        <span className="tracking-widest uppercase">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}

/* ============ 2. INTRO ============ */
function IntroSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface relative overflow-hidden">
      <div className="container-c83 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal>
          <SectionLabel>Giới thiệu tập đoàn</SectionLabel>
          <h2 className="mt-3 text-3xl lg:text-5xl font-black text-foreground leading-tight">
            Tập đoàn đa ngành <span className="text-primary">tiên phong</span> kiến tạo giá trị bền vững
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-base lg:text-lg">
            C83 Group là tập đoàn kinh tế đa ngành với hệ sinh thái 11 công ty thành viên,
            hoạt động trên 6 lĩnh vực trọng yếu. Chúng tôi cam kết mang đến giải pháp trọn gói,
            chất lượng quốc tế cho các công trình quy mô lớn tại Việt Nam.
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
          <div className="mt-8 flex gap-3">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 font-bold">
              <Link to="/about">Tìm hiểu thêm <ChevronRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </Reveal>

        {/* Right: counter grid */}
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
                className={`rounded-2xl p-6 lg:p-8 shadow-card hover-lift ${
                  s.grad ? "bg-gradient-primary text-primary-foreground" : "bg-card border border-border"
                }`}
              >
                <s.icon className={`h-9 w-9 ${s.grad ? "text-accent" : "text-primary"}`} />
                <div className="mt-4 text-3xl lg:text-4xl font-black">
                  <Counter end={s.n} suffix={s.s} />
                </div>
                <div className={`mt-1 text-sm ${s.grad ? "text-white/85" : "text-muted-foreground"}`}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ 3. MEMBERS ============ */
function MembersSection() {
  return (
    <section id="members" className="py-20 lg:py-28 bg-background">
      <div className="container-c83">
        <Reveal className="text-center max-w-3xl mx-auto">
          <SectionLabel center>Hệ sinh thái thành viên</SectionLabel>
          <h2 className="mt-3 text-3xl lg:text-5xl font-black text-foreground">
            11 công ty thành viên — <span className="text-primary">1 hệ sinh thái</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Mỗi đơn vị là một chuyên gia trong lĩnh vực, cùng tạo nên sức mạnh tập đoàn đa ngành.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {MEMBERS.map((m, i) => (
            <Reveal key={m.code} delay={i * 60}>
              <Link
                to="/members"
                className="group relative block h-full rounded-2xl border border-border bg-card overflow-hidden hover-lift"
              >
                <div className={`h-32 bg-gradient-to-br ${m.color} relative overflow-hidden`}>
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
                  <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{m.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition">
                    Xem chi tiết <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ 4. SECTORS (Hexagon-ish premium cards) ============ */
function SectorsSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: "linear-gradient(30deg, transparent 49.5%, white 49.5%, white 50.5%, transparent 50.5%), linear-gradient(150deg, transparent 49.5%, white 49.5%, white 50.5%, transparent 50.5%)",
        backgroundSize: "60px 100px",
      }} />
      <div className="container-c83 relative">
        <Reveal className="text-center max-w-3xl mx-auto">
          <SectionLabel center light>Lĩnh vực hoạt động</SectionLabel>
          <h2 className="mt-3 text-3xl lg:text-5xl font-black">
            6 lĩnh vực — Giải pháp <span className="text-gradient-gold">trọn gói</span>
          </h2>
          <p className="mt-4 text-white/75 text-lg">
            Từ cung ứng vật liệu, công nghệ đến thi công công trình, C83 Group bao phủ toàn bộ chuỗi giá trị.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SECTORS.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group relative rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-7 lg:p-8 hover:bg-white/10 hover:border-accent/50 transition-all duration-300 h-full">
                <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-gold opacity-10 rounded-bl-[80px] rounded-tr-2xl group-hover:opacity-100 transition" />
                <div className="relative">
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-gold text-gold-foreground shadow-gold">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <div className="mt-5 text-xs font-bold tracking-widest text-accent">
                    0{i + 1} / 06
                  </div>
                  <h3 className="mt-1 text-xl lg:text-2xl font-black">{s.title}</h3>
                  <p className="mt-3 text-sm text-white/75 leading-relaxed">{s.desc}</p>
                  <Link to="/sectors" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:gap-3 transition-all">
                    Khám phá <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ 5. USP ============ */
function USPSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="container-c83">
        <Reveal className="text-center max-w-3xl mx-auto">
          <SectionLabel center>Giá trị khác biệt</SectionLabel>
          <h2 className="mt-3 text-3xl lg:text-5xl font-black text-foreground">
            Vì sao đối tác chọn <span className="text-primary">C83 Group</span>?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Hệ sinh thái khép kín — Một điểm chạm, trọn vẹn giải pháp cho mọi công trình.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {USPS.map((u, i) => (
            <Reveal key={u.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 hover-lift relative overflow-hidden">
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition" />
                <u.icon className="h-10 w-10 text-primary relative" strokeWidth={1.5} />
                <h3 className="mt-5 text-lg font-black text-foreground relative">{u.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed relative">{u.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ 6. PROJECTS ============ */
function ProjectsSection() {
  const [filter, setFilter] = useState("Tất cả");
  const cats = ["Tất cả", "Vật liệu hoàn thiện", "Âm thanh – AV", "Phụ kiện cửa & kính", "Xây dựng & thi công"];
  const list = filter === "Tất cả" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container-c83">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <SectionLabel>Dự án tiêu biểu</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-5xl font-black text-foreground">
              Những công trình <span className="text-primary">đã kiến tạo</span>
            </h2>
          </div>
          <Button asChild variant="outline" className="border-2 border-primary text-primary font-bold w-fit">
            <Link to="/capability">Xem tất cả dự án <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {cats.map((c) => (
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

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-12 gap-5">
          {list.map((p, i) => (
            <Reveal
              key={p.title + i}
              delay={i * 80}
              className={i === 0 ? "lg:col-span-8 lg:row-span-2" : "lg:col-span-4"}
            >
              <a
                href="#"
                className="group block h-full rounded-2xl overflow-hidden relative shadow-card hover:shadow-elegant transition"
              >
                <div className={`relative ${i === 0 ? "aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[480px]" : "aspect-[4/3]"}`}>
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6 text-white">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-accent text-gold-foreground">
                    {p.cat}
                  </span>
                  <h3 className={`mt-3 font-black ${i === 0 ? "text-2xl lg:text-3xl" : "text-base lg:text-lg"}`}>
                    {p.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-1.5 text-xs lg:text-sm text-white/80">
                    <MapPin className="h-3.5 w-3.5" /> {p.loc}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ 7. CAPABILITY (Logo wall + certs) ============ */
function CapabilitySection() {
  return (
    <section className="py-20 lg:py-28 bg-surface-alt">
      <div className="container-c83">
        <Reveal className="text-center max-w-3xl mx-auto">
          <SectionLabel center>Năng lực & vị thế</SectionLabel>
          <h2 className="mt-3 text-3xl lg:text-5xl font-black text-foreground">
            Niềm tin được <span className="text-primary">kiến tạo</span> từ giá trị thực
          </h2>
        </Reveal>

        {/* certs row */}
        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          {[
            { icon: ShieldCheck, t: "ISO 9001:2015", s: "Hệ thống quản lý chất lượng" },
            { icon: Award, t: "Top 100 DN", s: "Doanh nghiệp tiêu biểu Việt Nam 2026" },
            { icon: Sparkles, t: "Thương hiệu Vàng", s: "5 năm liên tiếp 2021–2025" },
          ].map((c) => (
            <Reveal key={c.t}>
              <div className="rounded-2xl bg-card border border-border p-6 flex items-center gap-4 hover-lift">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <c.icon className="h-7 w-7" />
                </div>
                <div className="min-w-0">
                  <div className="font-black text-foreground">{c.t}</div>
                  <div className="text-sm text-muted-foreground">{c.s}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* partner logo wall */}
        <div className="mt-12">
          <p className="text-center text-xs font-bold tracking-widest text-muted-foreground uppercase">
            Đối tác chiến lược
          </p>
          <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[3/2] rounded-xl border border-border bg-card grid place-items-center text-muted-foreground/50 font-black tracking-wider hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition"
              >
                PARTNER {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ 8. ESG ============ */
function ESGSection() {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="container-c83 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <SectionLabel>Phát triển bền vững</SectionLabel>
          <h2 className="mt-3 text-3xl lg:text-5xl font-black text-foreground leading-tight">
            ESG – Cam kết vì <span className="text-primary">tương lai</span> bền vững
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            C83 Group định hướng phát triển theo chuẩn ESG quốc tế: bảo vệ môi trường,
            chăm lo xã hội và quản trị minh bạch. Đây là kim chỉ nam cho mọi quyết định chiến lược.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { icon: Leaf, t: "Environment", d: "Vật liệu xanh & tiết kiệm năng lượng" },
              { icon: Heart, t: "Social", d: "Cộng đồng & phúc lợi nhân sự" },
              { icon: Target, t: "Governance", d: "Minh bạch & tuân thủ chuẩn quốc tế" },
            ].map((e) => (
              <div key={e.t} className="rounded-xl border border-border p-5 bg-card hover-lift">
                <e.icon className="h-7 w-7 text-primary" />
                <div className="mt-3 text-sm font-black tracking-wide uppercase text-primary">{e.t}</div>
                <div className="mt-1.5 text-sm text-muted-foreground">{e.d}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary via-navy to-secondary p-10 lg:p-12 text-white relative overflow-hidden shadow-elegant">
              <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
              <Compass className="h-12 w-12 text-accent" strokeWidth={1.5} />
              <h3 className="mt-6 text-3xl lg:text-4xl font-black leading-tight">
                "Kinh doanh bền vững là kinh doanh có trách nhiệm"
              </h3>
              <p className="mt-4 text-white/80">
                Triết lý phát triển bền vững của C83 Group hướng tới giá trị lâu dài cho khách hàng,
                cộng đồng và thế hệ tương lai.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                {[{ n: 30, s: "%", l: "Tiết kiệm năng lượng" }, { n: 50, s: "+", l: "Dự án CSR" }, { n: 100, s: "%", l: "Minh bạch ESG" }].map((s, i) => (
                  <div key={i}>
                    <div className="text-2xl lg:text-3xl font-black text-accent">
                      <Counter end={s.n} suffix={s.s} />
                    </div>
                    <div className="mt-1 text-xs text-white/70">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ 9. NEWS ============ */
function NewsSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="container-c83">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <SectionLabel>Tin tức & sự kiện</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-5xl font-black text-foreground">
              Cập nhật mới nhất <span className="text-primary">từ C83 Group</span>
            </h2>
          </div>
          <Button asChild variant="outline" className="border-2 border-primary text-primary font-bold w-fit">
            <Link to="/news">Xem tất cả tin tức <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {NEWS.map((n, i) => (
            <Reveal key={n.title} delay={i * 100}>
              <article className="group h-full rounded-2xl bg-card border border-border overflow-hidden hover-lift">
                <div className="aspect-[16/10] bg-gradient-to-br from-primary/80 to-navy relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: "radial-gradient(circle at 30% 70%, white 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }} />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-accent text-gold-foreground text-xs font-black uppercase tracking-wider">
                    {n.cat}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" /> {n.date}
                  </div>
                  <h3 className="mt-3 text-lg font-black text-foreground leading-snug group-hover:text-primary transition line-clamp-3">
                    {n.title}
                  </h3>
                  <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                    Đọc thêm <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ 10. CAREER ============ */
function CareerSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }} />
      <div className="container-c83 relative grid lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-bold tracking-widest uppercase">
            Tuyển dụng
          </div>
          <h2 className="mt-4 text-3xl lg:text-5xl font-black leading-tight">
            Gia nhập <span className="text-gradient-gold">C83 Group</span> —
            Cùng kiến tạo tương lai
          </h2>
          <p className="mt-5 text-lg text-white/85 max-w-2xl">
            Chúng tôi tìm kiếm những con người tài năng, đam mê và sẵn sàng phát triển cùng tập đoàn.
            Hơn 50 vị trí đang mở trên toàn hệ sinh thái 11 công ty thành viên.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-gold text-gold-foreground font-bold shadow-gold">
              <Link to="/careers">Xem vị trí tuyển dụng <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white/60 bg-transparent text-white hover:bg-white hover:text-primary font-bold">
              <a href="#">Văn hóa doanh nghiệp</a>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: 50, s: "+", l: "Vị trí mở" },
              { n: 2500, s: "+", l: "Nhân sự" },
              { n: 11, s: "", l: "Công ty TV" },
              { n: 95, s: "%", l: "Hài lòng" },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur p-6">
                <div className="text-3xl lg:text-4xl font-black text-accent">
                  <Counter end={s.n} suffix={s.s} />
                </div>
                <div className="mt-1 text-sm text-white/80">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ 11. CONTACT ============ */
function ContactSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container-c83 grid lg:grid-cols-2 gap-10 lg:gap-16">
        <Reveal>
          <SectionLabel>Liên hệ với chúng tôi</SectionLabel>
          <h2 className="mt-3 text-3xl lg:text-5xl font-black text-foreground leading-tight">
            Hãy bắt đầu hợp tác cùng <span className="text-primary">C83 Group</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Để lại thông tin, đội ngũ chuyên gia của chúng tôi sẽ liên hệ tư vấn trong vòng 24 giờ.
          </p>

          <div className="mt-8 space-y-4">
            {[
              { icon: MapPin, t: "Trụ sở chính", d: "Số 83, Đường Lê Văn Lương, Thanh Xuân, Hà Nội" },
              { icon: Phone, t: "Hotline 24/7", d: "1900 0000" },
              { icon: Mail, t: "Email", d: "info@c83group.vn" },
            ].map((c) => (
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
        </Reveal>

        <Reveal delay={150}>
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất."); }}
            className="rounded-3xl bg-card border border-border shadow-elegant p-7 lg:p-9"
          >
            <h3 className="text-xl lg:text-2xl font-black text-foreground">Gửi yêu cầu tư vấn</h3>
            <p className="mt-1 text-sm text-muted-foreground">Vui lòng điền đầy đủ thông tin bên dưới.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Họ và tên *" name="name" placeholder="Nguyễn Văn A" />
              <Field label="Công ty" name="company" placeholder="Tên công ty" />
              <Field label="Điện thoại *" name="phone" placeholder="09xx xxx xxx" type="tel" />
              <Field label="Email *" name="email" placeholder="email@company.com" type="email" />
            </div>
            <div className="mt-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                Nội dung yêu cầu *
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Mô tả nhu cầu hoặc dự án của bạn..."
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
              />
            </div>

            <Button type="submit" size="lg" className="mt-6 w-full bg-gradient-gold text-gold-foreground font-black text-base shadow-gold hover:opacity-95">
              Gửi yêu cầu tư vấn <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="mt-3 text-xs text-muted-foreground text-center">
              Bằng việc gửi form, bạn đồng ý với chính sách bảo mật của C83 Group.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Sub primitives ---------------- */
function SectionLabel({ children, center, light }: { children: React.ReactNode; center?: boolean; light?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <span className={`h-px w-8 ${light ? "bg-accent" : "bg-primary"}`} />
      <span className={`text-xs font-black tracking-[0.25em] uppercase ${light ? "text-accent" : "text-primary"}`}>
        {children}
      </span>
      <span className={`h-px w-8 ${light ? "bg-accent" : "bg-primary"}`} />
    </div>
  );
}

function Field({ label, name, placeholder, type = "text" }: { label: string; name: string; placeholder?: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
      />
    </div>
  );
}
