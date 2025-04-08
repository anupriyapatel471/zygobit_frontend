/* eslint-disable @typescript-eslint/no-explicit-any */
import { Amplify } from "aws-amplify";
import outputs from "../../../../../amplify_outputs.json";
import { generateClient } from "aws-amplify/data";
import ClientCaseStudy from "@/component/clientCaseStudy/ClientCaseStudy";
export const dynamic = "force-dynamic";
export const revalidate = 60;

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

export async function generateStaticParams() {
  const projects = await fetchFeaturedProjects();
  return projects.map((project: any) => ({ id: project.id.toString() }));
}

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const project = await fetchFeaturedProjects(params.id);

  const title = project?.title ?? "Zygobit Featured Projects";
  const description = project?.description ?? "Zygobit Featured Projects";
  const image =
    project?.image ??
    "https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.png";
  const url = `https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/case-study/${params.id}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "Zygobit",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "Teqexpert",
    },
  };
}

const CaseStudyPage = async ({ params }: { params: { id: string } }) => {
  const project = await fetchFeaturedProjects(params.id);
  return <ClientCaseStudy projectData={project} />;
};

export default CaseStudyPage;
