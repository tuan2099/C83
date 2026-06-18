import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/sectors")({
  head: () => ({
    meta: [
      { title: "Lĩnh vực hoạt động – C83 Group" },
      { name: "description", content: "6 lĩnh vực hoạt động trọng yếu của C83 Group: vật liệu, AV, phụ kiện, nước sạch, xây dựng và AI." },
      { property: "og:title", content: "Lĩnh vực hoạt động – C83 Group" },
      { property: "og:url", content: "/sectors" },
    ],
    links: [{ rel: "canonical", href: "/sectors" }],
  }),
  component: () => (
    <PageShell
      title="Lĩnh vực hoạt động"
      subtitle="6 lĩnh vực trọng yếu — Giải pháp trọn gói từ vật liệu, công nghệ đến thi công công trình."
      breadcrumbs={[{ label: "Trang chủ", to: "/" }, { label: "Lĩnh vực hoạt động" }]}
    />
  ),
});
