/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { generateClient } from "aws-amplify/data";
import useAmplifyConfig from "@/hooks/useAmplify";
import Loader from "../common/Loader/Loader";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { ProjectData } from "@/app/type/projectType";
import Link from "next/link";
import PortfolioPagination from "../common/PortfolioPagination";
import { Pagination } from "../common/Pagination/Pagination";

const client = generateClient();

const PortfolioProjects = () => {
  useAmplifyConfig();
  const [data, setData] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const hasRestored = useRef(false);
  const perPage = 5;

  // Fetch projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await (client.models as any).Projects.list();
        const sorted = response.data.sort((a: ProjectData, b: ProjectData) => {
          const dateA = a.updatedAt ? new Date(a.updatedAt).getTime() : 0;
          const dateB = b.updatedAt ? new Date(b.updatedAt).getTime() : 0;
          return dateB - dateA;
        });
        setData(sorted);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const categories = useMemo(
    () =>
      Array.from(
        new Set<string>(
          data.map((project) => project.category || "Uncategorized")
        )
      ),
    [data]
  );
  useEffect(() => {
    if (!categories.length || hasRestored.current) return;

    const state = history.state ?? {};
    const validTab = categories.includes(state.tab) ? state.tab : categories[0];

    setActiveTab(validTab);
    setCurrentPage(state.page ?? 1);

    setTimeout(() => {
      const y = state.fromDetail ? state.scrollY : 0;
      window.scrollTo({ top: y, behavior: "auto" });
    }, 50);
    history.replaceState({}, "");
    hasRestored.current = true;
  }, [categories]);

  useEffect(() => {
    if (!activeTab) return;
    history.replaceState(
      {
        fromDetail: true,
        scrollY: window.scrollY,
        tab: activeTab,
        page: currentPage,
      },
      ""
    );
  }, [activeTab, currentPage]);

  useEffect(() => {
    const onPopState = () => {
      const state = history.state ?? {};
      if (!state.fromDetail || !categories.length) return;

      const validTab = categories.includes(state.tab)
        ? state.tab
        : categories[0];
      setActiveTab(validTab);
      setCurrentPage(state.page ?? 1);

      setTimeout(() => {
        window.scrollTo({ top: state.scrollY ?? 0, behavior: "auto" });
      }, 50);
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [categories]);

  // Handle tab change
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const handleProjectClick = (tab: string) => {
    history.replaceState(
      { fromDetail: true, scrollY: window.scrollY, tab, page: currentPage },
      ""
    );
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const filteredProjects = useMemo(
    () =>
      activeTab
        ? data.filter(
            (project) => (project.category || "Uncategorized") === activeTab
          )
        : [],
    [data, activeTab]
  );

  const totalPages = useMemo(
    () => Math.ceil(filteredProjects.length / perPage),
    [filteredProjects]
  );

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * perPage;
    return filteredProjects.slice(start, start + perPage);
  }, [filteredProjects, currentPage]);

  if (loading) return <Loader />;

  return (
    <>
      <section className="w-full h-[210px] sm:h-auto relative pt-16 sm:pt-20">
        <div className="container remove-bg">
          <div className=" w-full mt-4 sm:mt-0 sm:text-center relative py-10 sm:py-16  lg:py-16">
            <div className="w-full flex justify-between items-center">
              <div className="w-full text-left">
                <h1 className="font-bold relative z-10 text-3xl sm:text-3xl lg:text-[38px] text-shadow-2xl  text-gradiant-custom">
                  Our Portfolio
                </h1>
              </div>
              {/* <PortfolioPagination
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                filteredProjects={filteredProjects}
              /> */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative overflow-hidden mt-10 mb-14 sm:mb-20">
        <div className="container remove-bg">
          <div className="w-full">
            <Tabs
              value={activeTab || categories[0]}
              onValueChange={handleTabChange}
              className="w-full"
            >
              <TabsList className="gap-5 grid lg:flex lg:justify-center lg:items-center w-full grid-cols-2 lg:grid-cols-5 h-auto">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    className="justify-center"
                    value={category}
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent key={activeTab} value={activeTab}>
                <div className="w-full grid grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-10">
                  {paginatedProjects.map((project, index) => {
                    const isEven = index % 2 === 1;
                    return (
                      <div
                        key={project.id}
                        className="w-full flex flex-wrap lg:flex-nowrap group justify-between items-center gap-4 sm:gap-5 lg:gap-10 p-4 lg:p-10 relative bg-white z-10 rounded-2xl overflow-hidden"
                      >
                        {isEven ? (
                          <>
                            {/* 45% FIRST */}
                            {/* 45% SECOND */}
                            <div className="order-2 lg:order-none w-full lg:w-[45%] flex justify-between items-start flex-col gap-5 sm:gap-5 lg:gap-[126px]">
                              <div>
                                <div className="w-fit text-black group-hover:text-[#EA580C] group-hover:border-[#EA580C] border-b-2 sm:border-b-[4px] border-transparent text-2xl sm:text-3xl lg:text-4xl font-bold">
                                  {project.projectName}
                                </div>
                                <p className="line-clamp-4 sm:line-clamp-5 text-sm  lg:text-lg text-black mt-1 sm:mt-2 lg:mt-3.5">
                                  {project.description}
                                </p>
                                {/* <div className="mt-6 flex gap-5 items-center">
                                    <div className="w-fit flex flex-col">
                                      <b className="text-2xl sm:text-3xl text-black">
                                        {project.androidDownloads &&
                                          formatDownloads(
                                            project?.androidDownloads
                                          )}
                                      </b>
                                      <span className="font-light text-base sm:text-lg text-black">
                                        App downloads
                                      </span>
                                    </div>
                                    <div className="w-[1px] h-20 bg-black"></div>
                                    <div className="w-fit flex gap-2.5 flex-col">
                                      <Link
                                        href={project.googlePlayAppLink}
                                        target="_blank"
                                      >
                                        <Image
                                          width={100}
                                          height={29}
                                          src="/images/playstore.svg"
                                          alt="image"
                                        />
                                      </Link>
                                      <Link
                                        href={project?.appStoreAppLink}
                                        target="_blank"
                                      >
                                        <Image
                                          width={100}
                                          height={29}
                                          src="/images/applestore.svg"
                                          alt="image"
                                        />
                                      </Link>
                                    </div>
                                  </div> */}
                              </div>

                              <Link
                                href={`/portfolio/${project.slug}`}
                                onClick={() => handleProjectClick(category)}
                                className="w-fit btn-primary text-white font-normal group bg-orange-600 hover:bg-orange-500 duration-500 transition-all"
                              >
                                View Case Study
                                <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                              </Link>
                            </div>
                            {/* 55% SECOND */}
                            <div className="order-1 lg:order-none w-full lg:w-[55%] relative">
                              <div className="relative w-full h-[265px] sm:h-[370px] lg:h-[500px] rounded-xl overflow-hidden">
                                <Image
                                  fill
                                  src={project.backgroundImage || ""}
                                  alt="image"
                                  priority
                                  className="object-cover"
                                />
                                <div className="w-full lg:w-[465px] h-[170px] sm:h-[320px] lg:h-[419px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                  {project.mobileImage && (
                                    <Image
                                      fill
                                      className="w-full h-full object-contain"
                                      src={project.mobileImage}
                                      alt="mobile image"
                                      priority
                                    />
                                  )}
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            {/* 55% FIRST */}
                            <div className="order-1 lg:order-none w-full lg:w-[55%] relative">
                              <div className="relative w-full h-[265px] sm:h-[370px] lg:h-[500px] rounded-xl overflow-hidden">
                                <Image
                                  fill
                                  src={project.backgroundImage || ""}
                                  alt="image"
                                  priority
                                  className="object-cover"
                                />
                                <div className="w-full lg:w-[465px] h-[170px] sm:h-[320px] lg:h-[419px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                  {project.mobileImage && (
                                    <Image
                                      fill
                                      className="w-full h-full object-contain"
                                      src={project.mobileImage}
                                      alt="mobile image"
                                      priority
                                    />
                                  )}
                                </div>
                              </div>
                            </div>
                            {/* 45% SECOND */}
                            <div className="order-2 lg:order-none w-full lg:w-[45%] flex justify-between items-start flex-col gap-5 sm:gap-5 lg:gap-[126px]">
                              <div>
                                <div className="w-fit text-black group-hover:text-[#EA580C] group-hover:border-[#EA580C] border-b-2 sm:border-b-[4px] border-transparent text-2xl sm:text-3xl lg:text-4xl font-bold">
                                  {project.projectName}
                                </div>
                                <p className="line-clamp-4 sm:line-clamp-5 text-sm  lg:text-lg text-black mt-1 sm:mt-2 lg:mt-3.5">
                                  {project.description}
                                </p>
                                {/* <div className="mt-6 flex gap-5 items-center">
                                    <div className="w-fit flex flex-col">
                                      <b className="text-2xl sm:text-3xl text-black">
                                        {project.androidDownloads &&
                                          formatDownloads(
                                            project?.androidDownloads
                                          )}
                                      </b>
                                      <span className="font-light text-base sm:text-lg text-black">
                                        App downloads
                                      </span>
                                    </div>
                                    <div className="w-[1px] h-20 bg-black"></div>
                                    <div className="w-fit flex gap-2.5 flex-col">
                                      <Link
                                        href={project.googlePlayAppLink}
                                        target="_blank"
                                      >
                                        <Image
                                          width={100}
                                          height={29}
                                          src="/images/playstore.svg"
                                          alt="image"
                                        />
                                      </Link>
                                      <Link
                                        href={project?.appStoreAppLink}
                                        target="_blank"
                                      >
                                        <Image
                                          width={100}
                                          height={29}
                                          src="/images/applestore.svg"
                                          alt="image"
                                        />
                                      </Link>
                                    </div>
                                  </div> */}
                              </div>
                              <Link
                                href={`/portfolio/${project.slug}`}
                                onClick={() => handleProjectClick(category)}
                                className="w-fit btn-primary text-white font-normal group bg-orange-600 hover:bg-orange-500 duration-500 transition-all"
                              >
                                View Case Study
                                <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                              </Link>
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Pagination Controls */}
                <PortfolioPagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  filteredProjects={filteredProjects}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioProjects;
