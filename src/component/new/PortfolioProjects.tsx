/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { generateClient } from "aws-amplify/data";
import useAmplifyConfig from "@/hooks/useAmplify";
import Loader from "../common/Loader/Loader";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { ProjectData } from "@/app/type/projectType";

const client = generateClient();

const PortfolioProjects = () => {
  useAmplifyConfig();
  const [data, setData] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState<string>("");
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

  useEffect(() => {
    const savedTab = sessionStorage.getItem("portfolioTab");
    const savedScroll = sessionStorage.getItem("portfolioScroll");
    const isBackFromDetail =
      sessionStorage.getItem("fromPortfolioDetail") === "true";
    if (savedTab && categories.includes(savedTab)) {
      setSelectedTab(savedTab);
    } else {
      setSelectedTab(categories[0] || "");
    }
    if (isBackFromDetail && savedScroll) {
      window.scrollTo(0, parseInt(savedScroll));
    }
  }, [categories]);

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    sessionStorage.removeItem("fromPortfolioDetail");
    sessionStorage.setItem("portfolioTab", tab);
  };

  if (loading) return <Loader />;

  return (
    <section className="w-full relative overflow-hidden mt-10 mb-14 sm:mb-20">
      <div className="container remove-bg">
        <div className="w-full">
          <Tabs
            value={selectedTab}
            onValueChange={handleTabChange}
            className="w-full"
          >
            <TabsList className="gap-5 grid lg:flex lg:justify-center lg:items-center w-full grid-cols-2 lg:grid-cols-5 h-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="justify-center "
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="w-full grid grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-10">
                  {data

                    .filter(
                      (project) =>
                        (project.category || "Uncategorized") === category
                    )

                    .map((project, index) => {
                      const isEven = index % 2 === 1;

                      const Content = (
                        <div className="w-full lg:w-[45%] flex flex-col justify-between items-start gap-5 sm:gap-5 lg:gap-[126px] order-2 lg:order-none">
                          <div>
                            <div className="text-black group-hover:text-[#EA580C] border-b-2 sm:border-b-[4px] border-transparent text-2xl sm:text-3xl lg:text-4xl font-bold">
                              {project.projectName}
                            </div>

                            <p className="line-clamp-4 sm:line-clamp-5 text-sm lg:text-lg text-black mt-1 sm:mt-2 lg:mt-3.5">
                              {project.description}
                            </p>
                          </div>

                          <Link
                            href={`/portfolio/${project.slug}`}
                            className="cursor-pointer"
                            onClick={() => {
                              sessionStorage.setItem(
                                "portfolioScroll",
                                window.scrollY.toString()
                              );
                              sessionStorage.setItem("portfolioTab", category);
                              sessionStorage.setItem(
                                "fromPortfolioDetail",
                                "true"
                              );
                            }}
                          >
                            <button className="btn-primary text-white font-normal group bg-orange-600 hover:bg-orange-500 transition-all">
                              View Case Study
                              <ChevronRight className="group-hover:left-2 left-0 relative duration-500" />
                            </button>
                          </Link>
                        </div>
                      );

                      const ImageSection = (
                        <div className="w-full lg:w-[55%] relative order-1 lg:order-none">
                          <div className="relative w-full h-[265px] sm:h-[370px] lg:h-[500px]">
                            <Image
                              fill
                              src={project.backgroundImage || ""}
                              alt="image"
                              priority
                            />

                            {project.mobileImage && (
                              <div className="w-full lg:w-[465px] h-[170px] sm:h-[320px] lg:h-[419px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <Image
                                  fill
                                  className="w-full h-full object-contain"
                                  src={project.mobileImage}
                                  alt="mobile image"
                                  priority
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      );

                      return (
                        <div
                          key={project.id}
                          className="w-full flex flex-wrap lg:flex-nowrap group justify-between items-center gap-4 sm:gap-5 lg:gap-10 p-4 lg:p-10 bg-white z-10 rounded-2xl overflow-hidden"
                        >
                          {isEven ? (
                            <>
                              {Content}

                              {ImageSection}
                            </>
                          ) : (
                            <>
                              {ImageSection}

                              {Content}
                            </>
                          )}
                        </div>
                      );
                    })}
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
