/* eslint-disable @typescript-eslint/no-explicit-any */
import { Amplify } from "aws-amplify";
import outputs from "../../../../amplify_outputs.json";
// Switch to the data client for static generation:
import { generateClient } from "aws-amplify/data";
import ClientCaseStudy from "@/component/clientCaseStudy/ClientCaseStudy";
export const dynamic = "force-dynamic";

// Configure Amplify normally:
Amplify.configure(outputs);

async function fetchFeaturedProjects(id?: string) {
  const client = generateClient();
  try {
    const filter = id ? { filter: { id: { eq: id } } } : {};
    const res = await (client.models as any).Projects.list(filter);
    if (id) {
      return res.data && res.data.length > 0 ? res.data[0] : null;
    }
    return res.data || [];
  } catch (error) {
    console.error("Error fetching featured projects:", error);
    throw error;
  }
}

// Pre-generate all project paths at build time.
export async function generateStaticParams() {
  const projects = await fetchFeaturedProjects();
  return projects.map((project: any) => ({ id: project.id.toString() }));
}

// Generate SEO metadata for each project.
export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = await fetchFeaturedProjects(params.id);
  return {
    title: project?.title || "Zygobit Featured Projects",
    description: project?.description || "Zygobit Featured Projects",
    openGraph: {
      title: project?.title || "Zygobit Featured Projects",
      description: project?.description || "Zygobit Featured Projects",
      images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.png"],
      url: `https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/case-study/${params.id}`,
    },
    twitter: {
      title: project?.title || "Zygobit Featured Projects",
      description: project?.description || "Zygobit Featured Projects",
      images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.png"],
      card: "summary_large_image",
      creator: "Teqexpert",
    },
  };
}

const CaseStudyPage = async ({ params }: { params: { id: string } }) => {
  const project = await fetchFeaturedProjects(params.id);
  return <ClientCaseStudy projectData={project} />;
};

export default CaseStudyPage;
