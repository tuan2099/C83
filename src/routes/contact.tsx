import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Liên hệ – C83 Group" },
      { name: "description", content: "Liên hệ với C83 Group để được tư vấn giải pháp trọn gói cho dự án của bạn." },
      { property: "og:title", content: "Liên hệ – C83 Group" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <PageShell
      title="Liên hệ với C83 Group"
      subtitle="Đội ngũ chuyên gia luôn sẵn sàng tư vấn giải pháp trọn gói cho dự án của bạn trong vòng 24 giờ."
      breadcrumbs={[{ label: "Trang chủ", to: "/" }, { label: "Liên hệ" }]}
    />
  ),
});
