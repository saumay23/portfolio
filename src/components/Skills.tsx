import { motion } from "framer-motion";
import React from "react";
import {
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoCss3,
  BiLogoPostgresql,
  BiLogoMongodb,
  BiLogoHtml5,
} from "react-icons/bi";
type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="relative flex h-screen overflow-hidden flex-col text-left md:flex-row max-w-full mx-auto px-10 justify-evenly  items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="grid  grid-cols-3 gap-5 "
      >
        <BiLogoHtml5 className="w-20 h-20 text-[#FF9002] hover:scale-150 transition-all duration-200" />
        <BiLogoCss3 className="w-20 h-20 text-[#264DE4] hover:scale-150 transition-all duration-200" />
        <BiLogoTailwindCss className="w-20 h-20 text-[#00B8D5] hover:scale-150 transition-all duration-200" />
        <BiLogoJavascript className="w-20 h-20 text-yellow-300 hover:scale-150 transition-all duration-200" />
        <BiLogoTypescript className="w-20 h-20 text-[#3077C6] hover:scale-150 transition-all duration-200" />
        <BiLogoReact className="w-20 h-20 text-[#60DBFB] hover:scale-150 transition-all duration-200" />
        <BiLogoNodejs className="w-20 h-20 text-[#83CD29] hover:scale-150 transition-all duration-200" />
        <BiLogoMongodb className="w-20 h-20 text-[#4FAA41] hover:scale-150 transition-all duration-200" />
        <BiLogoPostgresql className="w-20 h-20 text-[#2F6188] hover:scale-150 transition-all duration-200" />
      </motion.div>
    </div>
  );
};

export default Skills;
