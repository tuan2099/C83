import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Tuyển dụng – C83 Group" },
      { name: "description", content: "Cơ hội nghề nghiệp tại C83 Group — gia nhập hệ sinh thái 11 công ty thành viên." },
      { property: "og:title", content: "Tuyển dụng – C83 Group" },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: () => (
    <PageShell
      title="Tuyển dụng"
      subtitle="Gia nhập C83 Group — Cùng kiến tạo tương lai với hệ sinh thái 11 công ty thành viên."
      breadcrumbs={[{ label: "Trang chủ", to: "/" }, { label: "Tuyển dụng" }]}
    />
  ),
});
