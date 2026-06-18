import { Phone, MessageCircle, FileDown } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 lg:right-6 z-40 flex flex-col gap-3">
      <a
        href="#"
        aria-label="Tải hồ sơ năng lực"
        className="group grid h-12 w-12 place-items-center rounded-full bg-secondary text-secondary-foreground shadow-elegant hover:scale-110 transition"
      >
        <FileDown className="h-5 w-5" />
      </a>
      <a
        href="https://zalo.me"
        aria-label="Chat Zalo"
        className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-elegant hover:scale-110 transition"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href="tel:1900000000"
        aria-label="Hotline"
        className="grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-gold-foreground shadow-gold hover:scale-110 transition animate-pulse"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
