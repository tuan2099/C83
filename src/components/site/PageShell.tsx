import { Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { ChevronRight } from "lucide-react";

export function PageShell({
  title,
  subtitle,
  breadcrumbs,
  children,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; to?: string }[];
  children?: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Page hero */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "radial-gradient(circle at 80% 30%, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }} />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="container-c83 relative">
            <nav className="flex items-center gap-1.5 text-xs text-white/75">
              {breadcrumbs.map((b, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="h-3 w-3" />}
                  {b.to ? (
                    <Link to={b.to as never} className="hover:text-accent transition">{b.label}</Link>
                  ) : (
                    <span className="text-accent">{b.label}</span>
                  )}
                </span>
              ))}
            </nav>
            <h1 className="mt-5 text-4xl lg:text-6xl font-black animate-fade-in-up">{title}</h1>
            {subtitle && (
              <p className="mt-4 max-w-3xl text-lg text-white/85 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                {subtitle}
              </p>
            )}
          </div>
        </section>

        <div className="container-c83 py-16 lg:py-20">
          {children ?? <PlaceholderContent />}
        </div>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

function PlaceholderContent() {
  return (
    <div className="max-w-3xl mx-auto text-center py-12">
      <div className="inline-block px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-bold tracking-widest uppercase">
        Trang đang phát triển
      </div>
      <h2 className="mt-5 text-2xl lg:text-3xl font-black text-foreground">
        Nội dung chi tiết sẽ sớm được cập nhật
      </h2>
      <p className="mt-3 text-muted-foreground">
        Wireframe & UI mockup cho trang này đã được thiết kế theo Phase 2–5. Vui lòng liên hệ để biết thêm thông tin.
      </p>
      <Link
        to="/"
        className="mt-7 inline-flex items-center gap-2 rounded-md bg-gradient-primary text-primary-foreground font-bold px-6 py-3 shadow-elegant hover:opacity-95 transition"
      >
        Quay về trang chủ
      </Link>
    </div>
  );
}
