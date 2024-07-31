"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { data } from "@/static/details";
import { Poppins } from "next/font/google";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
const poppins =
  Poppins(
    {
      subsets:
        [
          "latin",
        ],
      display:
        "swap",
      variable:
        "--font-poppins",
      weight:
        [
          "100",
          "200",
          "300",
          "400",
          "500",
          "600",
          "700",
          "800",
          "900",
        ],
    }
  );

const Resume =
  () => {
    return (
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition:
            {
              delay: 2,
              duration: 0.4,
              ease: "easeIn",
            },
        }}
        className={`${poppins.className} flex items-center justify-center py-12 xl:py-0 min-h-[80vh]`}
      >
        <div className="container mx-auto">
          <Tabs
            className="flex flex-col xl:flex-row gap-[60px]"
            defaultValue="experience"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6  h-max rounded-xl">
              <TabsTrigger value="experience">
                Experience
              </TabsTrigger>
              <TabsTrigger value="education">
                Education
              </TabsTrigger>
              <TabsTrigger value="skills">
                Skills
              </TabsTrigger>
              <TabsTrigger value="about">
                About
              </TabsTrigger>
            </TabsList>
            <div className="min-h-[70vh] w-full ">
              <TabsContent
                value="experience"
                className="w-full"
              >
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                    transition:
                      {
                        duration: 0.5,
                        ease: "easeIn",
                      },
                  }}
                  className="flex flex-col gap-[30px]  text-left"
                >
                  <h3 className="text-4xl font-bold">
                    {
                      data
                        .experience
                        .title
                    }
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {data.experience.items.map(
                      (
                        item,
                        index
                      ) => {
                        return (
                          <div
                            key={
                              index
                            }
                            className={`bg-[#232329]   text-white py-6  shadow-2xl shadow-blue-500/30 px-10 rounded-xl flex flex-col  
                               gap-1`}
                          >
                            <p className="text-yellow-200 text-lg  tracking-widest py-4 text-left font-medium">
                              {
                                item.company
                              }
                            </p>
                            <p className="text-md pb-2  text-left font-normal">
                              {
                                item.position
                              }
                            </p>
                            <span className="text-[10px] italic text-left pb-4 font-light">
                              {
                                item.duration
                              }
                            </span>
                            <span className="text-sm text-blue-200 font-light">
                              Description
                              :{" "}
                            </span>
                            <ul className="list-disc marker:text-yellow-200 marker:text-[16px]  flex mt-4 flex-col tracking-wide leading-6 items-left justify-start text-xs gap-4 font-extralight">
                              {item.description.map(
                                (
                                  list,
                                  index
                                ) => {
                                  return (
                                    <li
                                      key={
                                        index
                                      }
                                    >
                                      <p className="text-left">
                                        {
                                          list
                                        }
                                      </p>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          </div>
                        );
                      }
                    )}
                  </div>
                </motion.div>
              </TabsContent>
              <TabsContent
                value="education"
                className="w-full"
              >
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                    transition:
                      {
                        duration: 0.5,
                        ease: "easeIn",
                      },
                  }}
                  className="flex flex-col gap-[30px]  text-left"
                >
                  <h3 className="text-4xl font-bold">
                    {
                      data
                        .education
                        .fieldName
                    }
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {data.education.items.map(
                      (
                        item,
                        index
                      ) => {
                        return (
                          <div
                            key={
                              index
                            }
                            className={`bg-[#232329]   text-white py-6  shadow-2xl shadow-blue-500/30 px-10 rounded-xl flex flex-col  
                               gap-1`}
                          >
                            <p className="text-yellow-200 text-lg  tracking-widest py-4 text-left font-medium">
                              {
                                item.university
                              }
                            </p>
                            <p className="text-md pb-2  text-left font-normal">
                              {
                                item.degree
                              }
                            </p>
                            <span className="text-[10px] italic text-left pb-4 font-light">
                              {
                                item.duration
                              }
                            </span>
                            <span className="text-sm text-blue-200 font-light">
                              Relevant
                              Courses
                              :{" "}
                            </span>
                            <ul className="list-disc marker:text-yellow-200 marker:text-[16px]  flex mt-4 flex-col tracking-wide leading-6 items-left justify-start text-xs gap-4 font-extralight">
                              {item.description.map(
                                (
                                  list,
                                  index
                                ) => {
                                  return (
                                    <li
                                      key={
                                        index
                                      }
                                    >
                                      <p className="text-left">
                                        {
                                          list
                                        }
                                      </p>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          </div>
                        );
                      }
                    )}
                  </div>
                </motion.div>
              </TabsContent>
              <TabsContent
                value="skills"
                className="w-full"
              >
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                    transition:
                      {
                        duration: 0.5,
                        ease: "easeIn",
                      },
                  }}
                  className="flex flex-col gap-[30px] text-center xl:text-left"
                >
                  <h3 className="text-4xl font-bold">
                    {
                      data
                        .skills
                        .fieldName
                    }
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4  gap-[30px]">
                    {data.skills.skillList.map(
                      (
                        item,
                        index
                      ) => {
                        return (
                          <>
                            <TooltipProvider
                              key={
                                index
                              }
                              delayDuration={
                                100
                              }
                            >
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[120px] text-white rounded-xl shadow-2xl shadow-gray-500/50 bg-[#232329] flex items-center justify-center group">
                                  <div className="text-6xl transition-all duration-300 group-hover:text-blue-200 group-hover:scale-125 ">
                                    {
                                      item.icon
                                    }
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent className="capitalize bg-accent text-black text-base bottom-0">
                                  <div>
                                    {
                                      item.name
                                    }
                                  </div>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </>
                        );
                      }
                    )}
                  </div>
                </motion.div>
              </TabsContent>
              <TabsContent
                value="about"
                className="w-full"
              >
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                    transition:
                      {
                        duration: 0.5,
                        ease: "easeIn",
                      },
                  }}
                  className="flex flex-col gap-[30px] text-center xl:text-left"
                >
                  <h3 className="text-4xl font-bold">
                    {
                      data
                        .about
                        .title
                    }
                  </h3>
                  <p className="text-sm text-left px-2 leading-6">
                    {
                      data
                        .about
                        .description
                    }
                  </p>
                  <div className="grid grid-cols-1 gap-6">
                    {data.about.info.map(
                      (
                        item,
                        index
                      ) => {
                        return (
                          <div
                            key={
                              index
                            }
                            className={`w-full px-2 flex flex-wrap items-center  gap-1`}
                          >
                            <p className="text-sm   text-left">
                              {" "}
                              <span className="text-lg  tracking-widest  text-left font-medium">
                                {
                                  item.fieldName
                                }

                                :
                              </span>
                            </p>

                            {
                              item.fieldValue
                            }
                          </div>
                        );
                      }
                    )}
                  </div>
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    );
  };

export default Resume;
