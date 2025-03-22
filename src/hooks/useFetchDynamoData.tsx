"use client";
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import useAmplifyConfig from "@/hooks/useAmplify";
import { Schema } from "../../../zygobit_website_backend/amplify/data/resource";

export interface Blog {
  id: string;
  title: string;
  description: string;
  image: string;
  publishedDate: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string | null;
  description: string | null;
  projectName: string | null;
  mobileImage: string | null;
  androidDownloads: number | null;
  iosDownloads: number | null;
  createdAt: string | null;
  updatedAt: string | null;
  clientLocation: string | null;
  developmentTime: string | null;
  targetUsers: string | null;
  subDescription: string | null;
  subTitle: string | null;
  technologyDescription: string | null;
  developmentDescription: string | null;
  evaluationDescription: string | null;
  evaluationImage: string | null;
}

const client = generateClient<Schema>();

export const useFetchDynamoData = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useAmplifyConfig();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blogRes, projectRes] = await Promise.all([
          client.models.Blog.list(),
          client.models.Projects.list(),
        ]);
        setBlogs(blogRes.data as Blog[]);
        setProjects(projectRes.data as Project[]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { blogs, projects, loading };
};
