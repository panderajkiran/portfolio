import { createFileRoute } from "@tanstack/react-router";
import { PortfolioSite } from "@/components/portfolio-site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pande Raj Kiran — Full Stack Developer" },
      { name: "description", content: "Portfolio of Pande Raj Kiran, a developer focused on full-stack development, UI/UX, and modern digital experiences." },
      { property: "og:title", content: "Pande Raj Kiran — Full Stack Developer" },
      { property: "og:description", content: "Full-stack development, UI/UX, and thoughtfully built digital experiences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <PortfolioSite />;
}
