/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import useAmplifyConfig from "@/hooks/useAmplify";
import { ProjectData } from "@/app/type/projectType";

const client = generateClient();

export const useProjects = (id?: string) => {
  useAmplifyConfig();
  const [data, setData] = useState<ProjectData | ProjectData[] | null>(null);
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
