import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/esg")({
  head: () => ({
    meta: [
      { title: "ESG & Phát triển bền vững – C83 Group" },
      { name: "description", content: "Chiến lược ESG, văn hóa doanh nghiệp và báo cáo phát triển bền vững của C83 Group." },
      { property: "og:title", content: "ESG & Phát triển bền vững – C83 Group" },
      { property: "og:url", content: "/esg" },
    ],
    links: [{ rel: "canonical", href: "/esg" }],
  }),
  component: () => (
    <PageShell
      title="ESG & Phát triển bền vững"
      subtitle="Cam kết của C83 Group vì môi trường, cộng đồng và quản trị minh bạch theo chuẩn quốc tế."
      breadcrumbs={[{ label: "Trang chủ", to: "/" }, { label: "ESG" }]}
    />
  ),
});
