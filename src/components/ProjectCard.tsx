import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons/lib";

type Props = {
  ImageURL: IconType;
  name: string;
  about: string;
  link: string;
};

const ProjectCard = (props: Props) => {
  const { ImageURL, name, about, link } = props;
  return (
    <article className="flex h-[400px] mt-20 md:mt-0 md:my-auto md:mx-auto overflow-y-scroll flex-col items-center space-y-8 flex-shrink-0 w-[350px]  snap-center bg-[#292929] p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="w-16 h-16  flex justify-center rounded-full  object-cover object-center"
      >
        <ImageURL className="w-16 h-16" />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-lg font-light ">{name}</h4>
        <Link href={link} target="_blank">
          <p className="text-center mt-2 py-2 border border-white rounded-full uppercase text-xs tracking-widest text-white transition-all hover:border-[#F7ABBA]/40 hover:text-[#F7ABBA]/40">
            Demo
          </p>
        </Link>
      </div>
      <p className="space-y-2 ml-5 text-center text-sm px-4">{about}</p>
    </article>
  );
};

export default ProjectCard;
