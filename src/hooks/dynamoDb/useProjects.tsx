/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import useAmplifyConfig from "@/hooks/useAmplify";

const client = generateClient();

interface Project {
  technologyImages: any;
  id?: string | null;
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

export const useProjects = (id?: string) => {
  useAmplifyConfig();
  const [data, setData] = useState<Project | Project[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await (client.models as any).Projects.get({ id });
          if (response?.data) {
            setData(response.data);
          }
        } else {
          const response = await (client.models as any).Projects.list();
          setData(response.data);
        }
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { data, loading, error };
};
