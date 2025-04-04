/* eslint-disable @typescript-eslint/no-explicit-any */
import dynamic from "next/dynamic";
const ClientCaseStudy = dynamic(
  () => import("@/component/clientCaseStudy/ClientCaseStudy")
);
import { Amplify } from "aws-amplify";
import outputs from "../../../../amplify_outputs.json";
import { generateClient } from "aws-amplify/api";
Amplify.configure(outputs);

async function fetchFeaturedProjects(id: string) {
  const client = generateClient();
  try {
    const res = await (client.models as any).Projects.list({
      filter: { id: { eq: id } },
    });
    const projects = res.data && res.data.length > 0 ? res.data[0] : null;
    return projects;
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw error;
  }
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const projects = await fetchFeaturedProjects(params.id);

  return {
    title: projects?.title || "Zygobit Featured Projects",
    description: projects?.description || "Zygobit Featured Projects",
    openGraph: {
      title: projects?.title || "Zygobit Featured Projects",
      description: projects?.description || "Zygobit Featured Projects",
      images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.png"],
      url: `https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/case-study/${params.id}`,
    },
    twitter: {
      title: projects?.title || "Zygobit Featured Projects",
      description: projects?.description || "Zygobit Featured Projects",
      images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.png"],
      card: "summary_large_image",
      creator: "Teqexpert",
    },
  };
}

const CaseStudy = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const projectId = Array.isArray(id) ? id[0] : id;
  return <ClientCaseStudy projectId={projectId} />;
};

export default CaseStudy;
