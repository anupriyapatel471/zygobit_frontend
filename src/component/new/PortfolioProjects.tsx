/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect, ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { generateClient } from "aws-amplify/data";
import useAmplifyConfig from "@/hooks/useAmplify";
import Loader from "../common/Loader/Loader";
import Link from "next/link";

const client = generateClient();

interface Project {
  slug: any;
  technologyImages: ReactNode;
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
  category?: string | null;
}

const PortfolioProjects = () => {
  useAmplifyConfig();
  const [data, setData] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await (client.models as any).Projects.list();
        setData(response.data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);
  const categories = Array.from(
    new Set<string>(data.map((project) => project.category || "Uncategorized"))
  );

  return loading ? (
    <Loader />
  ) : (
    <section className="w-full relative overflow-hidden mt-10 mb-14 sm:mb-20">
      <div className="container remove-bg">
        <div className="w-full">
          <Tabs defaultValue={categories[0]} className="w-full">
            <TabsList className="grid w-full grid-cols-1 lg:grid-cols-5 h-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  className="justify-normal sm:justify-center"
                  value={category}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
                  {data
                    .filter(
                      (project) =>
                        (project.category || "Uncategorized") === category
                    )
                    .map((project) => (
                      <Link
                        key={project.id}
                        href={`/portfolio/${project.slug}`}
                        className="cursor-pointer"
                      >
                        <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                          <div className="flex justify-between flex-col">
                            <div className="text-black font-bold">
                              {project.projectName}
                              {/* <img src="/images/her_calendar_logo.svg" alt="" />
                            </div>
                            <div className="inline-block sm:hidden w-full">
                              <img
                                className="object-contain"
                                src="/images/her_calendar.png"
                                alt=""
                              /> */}
                            </div>
                            <p className="line-clamp-4 sm:line-clamp-5 text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px] ">
                              {project.description}
                            </p>
                            <div className=" flex font-bold text-sm text-black gap-2 items-center">
                              {(project.technologyImages as string[]).map(
                                (imageUrl, index) => (
                                  <img
                                    key={index}
                                    src={imageUrl}
                                    alt="technology image"
                                    className="w- h-6 rounded-full"
                                  />
                                )
                              )}
                            </div>
                          </div>
                          <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                            {project.mobileImage && (
                              <img
                                className="object-contain"
                                src={project.mobileImage}
                                alt=""
                              />
                            )}
                          </div>
                          <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                        </div>
                      </Link>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default PortfolioProjects;
