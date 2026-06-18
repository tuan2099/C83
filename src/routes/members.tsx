import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/members")({
  head: () => ({
    meta: [
      { title: "Đơn vị thành viên – C83 Group" },
      { name: "description", content: "Hệ sinh thái 11 công ty thành viên của C83 Group hoạt động trên 6 lĩnh vực." },
      { property: "og:title", content: "Đơn vị thành viên – C83 Group" },
      { property: "og:url", content: "/members" },
    ],
    links: [{ rel: "canonical", href: "/members" }],
  }),
  component: () => (
    <PageShell
      title="Đơn vị thành viên"
      subtitle="Hệ sinh thái 11 công ty thành viên cùng tạo nên sức mạnh tập đoàn đa ngành C83 Group."
      breadcrumbs={[{ label: "Trang chủ", to: "/" }, { label: "Đơn vị thành viên" }]}
    />
  ),
});
