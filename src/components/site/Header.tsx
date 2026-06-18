import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import logoWhite from "@/assets/logo-white.png";

type NavChild = { label: string; to: string };
type NavItem = { label: string; to: string; children?: NavChild[] };

const NAV: NavItem[] = [
  { label: "Trang chủ", to: "/" },
  {
    label: "Về tập đoàn",
    to: "/about",
    children: [
      { label: "Tổng quan tập đoàn", to: "/about" },
      { label: "Tầm nhìn – Sứ mệnh", to: "/about" },
      { label: "HĐQT & Ban điều hành", to: "/about" },
      { label: "Lịch sử hình thành", to: "/about" },
      { label: "Trách nhiệm xã hội", to: "/about" },
    ],
  },
  {
    label: "Đơn vị thành viên",
    to: "/members",
    children: [
      { label: "Danh sách công ty thành viên", to: "/members" },
      { label: "Sơ đồ hệ sinh thái", to: "/members" },
    ],
  },
  {
    label: "Lĩnh vực hoạt động",
    to: "/sectors",
    children: [
      { label: "Vật liệu hoàn thiện", to: "/sectors" },
      { label: "Âm thanh – trình chiếu", to: "/sectors" },
      { label: "Phụ kiện cửa & kính", to: "/sectors" },
      { label: "Nước sạch & nước nóng", to: "/sectors" },
      { label: "Xây dựng & thi công", to: "/sectors" },
      { label: "Công nghệ & AI bán hàng", to: "/sectors" },
    ],
  },
  { label: "Năng lực", to: "/capability" },
  { label: "ESG", to: "/esg" },
  { label: "Tin tức", to: "/news" },
  { label: "Tuyển dụng", to: "/careers" },
  { label: "Liên hệ", to: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-transparent"
      }`}
    >
      {/* top utility bar */}
      <div
        className={`hidden lg:block border-b border-white/10 transition-all ${
          scrolled ? "h-0 overflow-hidden opacity-0" : "h-9 opacity-100"
        }`}
      >
        <div className="container-c83 flex h-9 items-center justify-between text-xs text-white/90">
          <span>Connect – Construct – Capitalize</span>
          <div className="flex items-center gap-5">
            <a href="tel:1900000000" className="flex items-center gap-1.5 hover:text-accent transition">
              <Phone className="h-3 w-3" /> 1900 0000
            </a>
            <a href="mailto:info@c83group.vn" className="hover:text-accent transition">
              info@c83group.vn
            </a>
            <button className="flex items-center gap-1 hover:text-accent transition">
              <Globe className="h-3 w-3" /> VN | EN
            </button>
          </div>
        </div>
      </div>

      <div className="container-c83">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="relative block h-10 w-[132px] shrink-0 lg:h-12 lg:w-[158px]">
            <img
              src={logoWhite}
              alt="C83 Group"
              className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-200 ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              src={logo}
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-200 ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center justify-center gap-1">
            {NAV.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  to={item.to as never}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold tracking-wide transition-colors ${
                    scrolled
                      ? "text-foreground hover:text-primary"
                      : "text-white hover:text-accent"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-70" />}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="min-w-[260px] rounded-lg border border-border bg-popover shadow-elegant overflow-hidden">
                      <div className="h-1 bg-gradient-gold" />
                      <ul className="py-2">
                        {item.children.map((c) => (
                          <li key={c.label}>
                            <Link
                              to={c.to as never}
                              className="block px-4 py-2.5 text-sm text-popover-foreground hover:bg-muted hover:text-primary transition"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right cta */}
          <div className="flex items-center gap-2 justify-end">
            <Button
              asChild
              size="sm"
              className="hidden md:inline-flex bg-gradient-gold text-gold-foreground hover:opacity-90 font-bold shadow-gold"
            >
              <Link to="/contact">Tư vấn ngay</Link>
            </Button>
            <button
              aria-label="Menu"
              onClick={() => setOpen((s) => !s)}
              className={`xl:hidden grid h-10 w-10 place-items-center rounded-md transition ${
                scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
              }`}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="xl:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container-c83 py-4 max-h-[80vh] overflow-y-auto">
            {NAV.map((item) => (
              <div key={item.label} className="border-b border-border/60 last:border-0">
                <Link
                  to={item.to as never}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-semibold text-foreground hover:text-primary"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="pb-3 pl-4 space-y-1.5">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <Link
                          to={c.to as never}
                          onClick={() => setOpen(false)}
                          className="block text-sm text-muted-foreground hover:text-primary"
                        >
                          – {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <Button asChild className="mt-4 w-full bg-gradient-gold text-gold-foreground font-bold">
              <Link to="/contact">Tư vấn ngay</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
