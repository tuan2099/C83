import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Về tập đoàn – C83 Group" },
      { name: "description", content: "Tổng quan về C83 Group: tầm nhìn, sứ mệnh, giá trị cốt lõi, ban điều hành và lịch sử hình thành." },
      { property: "og:title", content: "Về tập đoàn – C83 Group" },
      { property: "og:description", content: "Tổng quan tập đoàn C83 Group và hệ sinh thái 11 công ty thành viên." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <PageShell
      title="Về tập đoàn C83 Group"
      subtitle="Tầm nhìn – Sứ mệnh – Giá trị cốt lõi của tập đoàn đa ngành hàng đầu Việt Nam."
      breadcrumbs={[{ label: "Trang chủ", to: "/" }, { label: "Về tập đoàn" }]}
    />
  ),
});
