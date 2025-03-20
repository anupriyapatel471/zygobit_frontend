"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../../../../zygobit_website_backend/amplify/data/resource";
import useAmplifyConfig from "@/hooks/useAmplify";

const client = generateClient<Schema>();

interface Project {
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

const CaseStudy = () => {
  useAmplifyConfig();

  const { id } = useParams();
  const projectId = Array.isArray(id) ? id[0] : id;

  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (projectId) {
      fetchProjectData(projectId);
    }
  }, [projectId]);

  const fetchProjectData = async (id: string) => {
    try {
      const response = await client.models.Projects.get({ id });
      if (response && response.data) {
        setProject(response.data);
      } else {
        console.warn("No project data found for id:", id);
      }
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {project ? (
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900">
              {project.title}
            </h1>
            <h2 className="text-xl text-gray-700 mt-2">
              {project.projectName}
            </h2>
            <p className="mt-4 text-gray-600">{project.description}</p>
            {project.subDescription && (
              <p className="mt-2 text-gray-500">{project.subDescription}</p>
            )}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="text-gray-800">
                <p>
                  <strong>Android Downloads:</strong> {project.androidDownloads}
                </p>
                <p>
                  <strong>iOS Downloads:</strong> {project.iosDownloads}
                </p>
              </div>
              <div className="text-gray-800">
                <p>
                  <strong>Client Location:</strong> {project.clientLocation}
                </p>
                <p>
                  <strong>Development Time:</strong> {project.developmentTime}
                </p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">
                Target Users
              </h3>
              <p className="text-gray-700">{project.targetUsers}</p>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">
                Technology
              </h3>
              <p className="text-gray-700">{project.technologyDescription}</p>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">
                Development
              </h3>
              <p className="text-gray-700">{project.developmentDescription}</p>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">
                Evaluation
              </h3>
              <p className="text-gray-700">{project.evaluationDescription}</p>
            </div>
            <div className="mt-6 flex justify-between text-sm text-gray-500">
              <p>
                <strong>Created:</strong> {project.createdAt}
              </p>
              <p>
                <strong>Updated:</strong> {project.updatedAt}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p className="text-gray-700">Loading project data...</p>
        </div>
      )}
    </div>
  );
};

export default CaseStudy;
