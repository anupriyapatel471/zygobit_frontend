/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import useAmplifyConfig from "@/hooks/useAmplify";
import { Schema } from "../../../../zygobit_website_backend/amplify/data/resource";

export interface BlogPost {
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

  const client = generateClient<Schema>();
  useAmplifyConfig();

  const fetchBlogs = async (filter: Filter = {}) => {
    setLoading(true);
    try {
      const res = await client.models.Blog.list(
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
