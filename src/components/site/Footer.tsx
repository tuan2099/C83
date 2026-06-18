import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Linkedin, Youtube } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const COLS = [
  {
    title: "Về C83 Group",
    links: ["Tổng quan tập đoàn", "Tầm nhìn – Sứ mệnh", "HĐQT & Ban điều hành", "Lịch sử hình thành", "Trách nhiệm xã hội"],
  },
  {
    title: "Hệ sinh thái",
    links: ["Công ty thành viên", "Sơ đồ hệ sinh thái", "Lĩnh vực hoạt động", "Dự án tiêu biểu", "Đối tác chiến lược"],
  },
  {
    title: "Phát triển",
    links: ["Chiến lược ESG", "Văn hóa doanh nghiệp", "Hoạt động cộng đồng", "Báo cáo bền vững", "Tuyển dụng"],
  },
];

export function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.06_268)] text-white/85">
      {/* CTA strip */}
      <div className="bg-gradient-primary">
        <div className="container-c83 py-10 grid gap-6 lg:grid-cols-[1fr_auto] items-center">
          <div>
            <h3 className="text-2xl lg:text-3xl font-black text-white">
              Sẵn sàng hợp tác cùng C83 Group?
            </h3>
            <p className="mt-2 text-white/85">
              Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng tư vấn giải pháp trọn gói cho dự án của bạn.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-gradient-gold text-gold-foreground font-bold px-6 py-3 shadow-gold hover:opacity-90 transition"
            >
              Gửi yêu cầu tư vấn
            </Link>
            <a
              href="tel:1900000000"
              className="inline-flex items-center justify-center rounded-md border-2 border-white/40 text-white font-bold px-6 py-3 hover:bg-white/10 transition"
            >
              <Phone className="mr-2 h-4 w-4" /> 1900 0000
            </a>
          </div>
        </div>
      </div>

      <div className="container-c83 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img src={logoWhite} alt="C83 Group" className="h-14 w-auto object-contain" />
          </Link>
          <p className="mt-5 text-sm text-white/70 leading-relaxed">
            Hệ sinh thái 11 công ty thành viên kiến tạo giá trị toàn diện — từ vật liệu, công nghệ đến thi công công trình quy mô lớn.
          </p>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              Trụ sở: Số 83, Đường Lê Văn Lương, Quận Thanh Xuân, Hà Nội
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-accent shrink-0" /> Hotline: 1900 0000
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-accent shrink-0" /> info@c83group.vn
            </li>
          </ul>
          <div className="mt-5 flex gap-2.5">
            {[Facebook, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-md bg-white/10 hover:bg-accent hover:text-gold-foreground transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {COLS.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-black tracking-widest uppercase text-white mb-4">
              <span className="border-b-2 border-accent pb-1">{col.title}</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-white/70 hover:text-accent transition">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-c83 py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-white/55">
          <span>© {new Date().getFullYear()} C83 Group. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-accent">Chính sách bảo mật</a>
            <a href="#" className="hover:text-accent">Điều khoản sử dụng</a>
            <a href="#" className="hover:text-accent">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
