/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect, ReactNode } from "react";
import { generateClient } from "aws-amplify/data";
import useAmplifyConfig from "@/hooks/useAmplify";

export interface BlogPost {
  projectInfo: ReactNode;
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  publishedDate: string;
  tags: string[];
}

type Filter = Record<string, unknown>;

export const useBlog = (initialFilter: Filter = {}) => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const client = generateClient();
  useAmplifyConfig();

  const fetchBlogs = async (filter: Filter = {}) => {
    setLoading(true);
    try {
      const res = await (client.models as any).Blog.list(
        Object.keys(filter).length ? { filter } : {}
      );
      setBlogs(res.data as BlogPost[]);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(initialFilter);
  }, [JSON.stringify(initialFilter)]);

  return { blogs, loading, fetchBlogs, error };
};
