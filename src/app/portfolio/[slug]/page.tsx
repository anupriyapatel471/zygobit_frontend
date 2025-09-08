/* eslint-disable @typescript-eslint/no-explicit-any */
import { Amplify } from "aws-amplify";
import outputs from "../../../../amplify_outputs.json";
import { generateClient } from "aws-amplify/data";
import ClientCaseStudy from "@/component/clientCaseStudy/ClientCaseStudy";
export const dynamic = "force-static";
export const revalidate = 60;

Amplify.configure(outputs);

async function fetchFeaturedProjects(slug?: string) {
  const client = generateClient();
  try {
    const filter = slug ? { filter: { slug: { eq: slug } } } : {};
    const res = await (client.models as any).Projects.list(filter);
    if (slug) {
      return res.data && res.data.length > 0 ? res.data[0] : null;
    }
    return res.data || [];
  } catch (error) {
    console.error("Error fetching featured projects:", error);
    throw error;
  }
}
export async function generateStaticParams() {
  const projects = await fetchFeaturedProjects();
  return projects.map((project: any) => ({ slug: project.slug.toString() }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = await fetchFeaturedProjects(params.slug);

  const title = project?.metaData?.title || "Zygobit Featured Projects";
  const description =
    project?.metaData?.description || "Zygobit Featured Projects";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: "https://www.zygobit.com/images/Logo.png",
      url: `https://www.zygobit.com/portfolio/${params.slug}`,
    },
    twitter: {
      title,
      description,
      images: "https://www.zygobit.com/images/Logo.png",
      card: "summary_large_image",
      creator: "Zygobit",
    },
    alternates: {
      canonical: `https://www.zygobit.com/portfolio/${params.slug}`,
    },
  };
}

const CaseStudyPage = async ({ params }: { params: { slug: string } }) => {
  const project = await fetchFeaturedProjects(params.slug);

  const portfolioJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project?.title,
    description: project?.description,
    url: `https://www.zygobit.com/portfolio/${params.slug}`,
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ClientCaseStudy projectData={project} />;
    </>
  );
};

export default CaseStudyPage;
