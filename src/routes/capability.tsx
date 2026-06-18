import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/capability")({
  head: () => ({
    meta: [
      { title: "Năng lực & vị thế – C83 Group" },
      { name: "description", content: "Hồ sơ năng lực, dự án tiêu biểu, chứng chỉ và đối tác chiến lược của C83 Group." },
      { property: "og:title", content: "Năng lực & vị thế – C83 Group" },
      { property: "og:url", content: "/capability" },
    ],
    links: [{ rel: "canonical", href: "/capability" }],
  }),
  component: () => (
    <PageShell
      title="Năng lực & vị thế"
      subtitle="Hồ sơ năng lực, dự án tiêu biểu, chứng chỉ – giải thưởng và đối tác chiến lược của tập đoàn."
      breadcrumbs={[{ label: "Trang chủ", to: "/" }, { label: "Năng lực" }]}
    />
  ),
});
