"use client";
import { motion } from "framer-motion";
import React, {
  useState,
} from "react";
import {
  Swiper,
  SwiperSlide,
  useSwiper,
} from "swiper/react";
import "swiper/css";
import { projects } from "@/static/details";
import Link from "next/link";
import { Swiper as SwiperClass } from "swiper/types";
import Image from "next/image";
import SwiperBtns from "@/components/SwiperBtns";

const Project =
  () => {
    const swiperButton =
      useSwiper();
    const [
      project,
      setProject,
    ] =
      useState(
        projects[0]
      );
    const handleSlideChange =
      (
        swiper: SwiperClass
      ) => {
        const currentIndex =
          swiper.activeIndex;
        setProject(
          projects[
            currentIndex
          ]
        );
      };
    return (
      <motion.section
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
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[20px]">
                <div className="text-8xl leading-none ">
                  {
                    project.num
                  }
                </div>
                <h2 className="text-[24px] font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">
                  {
                    project.category
                  }
                </h2>
                <p>
                  {
                    project.description
                  }
                </p>
                <p className="text-xl text-accent">
                  {project.stack.join(
                    ", "
                  )}
                </p>
                <div className="border "></div>
                <Link
                  target="_"
                  href={
                    project.link
                  }
                >
                  <p className="w-max border p-2 px-6 rounded-xl bg-accent hover:scale-125 text-white">
                    {project.isPDF
                      ? "View Document"
                      : "Live Preview"}
                  </p>
                </Link>
              </div>
            </div>
            <div className="w-full xl:w-[50%] ">
              <Swiper
                slidesPerView={
                  1
                }
                spaceBetween={
                  30
                }
                className="xl:h-[520px] mb-12"
                onSlideChange={
                  handleSlideChange
                }
              >
                {projects.map(
                  (
                    item,
                    index
                  ) => {
                    return (
                      <SwiperSlide
                        key={
                          index
                        }
                      >
                        <div className="h-[360px] xl:h-[460px] relative group flex justify-center items-center bg-transparent">
                          <div className="w-full relative h-full">
                            <Image
                              src={
                                project.image
                              }
                              fill
                              className="object-scale-down"
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  }
                )}
                <SwiperBtns />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    );
  };

export default Project;
