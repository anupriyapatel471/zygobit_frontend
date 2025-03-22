"use client";
import Loader from "@/component/common/Loader/Loader";
import { useProjects } from "@/hooks/dynamoDb/useProjects";
import { useParams } from "next/navigation";

const CaseStudy = () => {
  const { id } = useParams();
  const projectId = Array.isArray(id) ? id[0] : id;

  const { data: projectData, loading, error } = useProjects(projectId);

  const project = Array.isArray(projectData) ? projectData[0] : projectData;

  console.log("error", error);
  return loading ? (
    <Loader />
  ) : (
    <div className="min-h-screen bg-gray-100 p-6 mt-20">
      {project && (
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
      )}
    </div>
  );
};

export default CaseStudy;
