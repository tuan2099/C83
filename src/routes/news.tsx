import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "Tin tức & sự kiện – C83 Group" },
      { name: "description", content: "Cập nhật tin tức, sự kiện, giải thưởng và bản tin nội bộ của C83 Group." },
      { property: "og:title", content: "Tin tức & sự kiện – C83 Group" },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: () => (
    <PageShell
      title="Tin tức & sự kiện"
      subtitle="Tin tức, giải thưởng, sự kiện và những hoạt động mới nhất từ tập đoàn C83 Group."
      breadcrumbs={[{ label: "Trang chủ", to: "/" }, { label: "Tin tức" }]}
    />
  ),
});
