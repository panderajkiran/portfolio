import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProjectDetail } from "@/components/portfolio-site";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    let project = projects.find((item) => item.slug === params.slug);
    if (!project && (params.slug === "weather" || params.slug === "jos-collection")) {
      project = projects.find((item) => item.slug === "jyos-collection");
    }
    if (!project && params.slug === "jaaju-restaurent") {
      project = projects.find((item) => item.slug === "jaaju-restaurant");
    }
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} — Pande Raj Kiran` : "Project not found — Pande Raj Kiran" },
      { name: "description", content: loaderData?.description ?? "Project case study by Pande Raj Kiran." },
      { property: "og:title", content: loaderData ? `${loaderData.title} — Case Study` : "Project case study" },
      { property: "og:description", content: loaderData?.description ?? "Project case study by Pande Raj Kiran." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  const { slug } = Route.useParams();
  let canonicalSlug = slug;
  if (slug === "weather" || slug === "jos-collection") canonicalSlug = "jyos-collection";
  if (slug === "jaaju-restaurent") canonicalSlug = "jaaju-restaurant";
  return <ProjectDetail slug={canonicalSlug} />;
}