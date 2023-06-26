import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const Experience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex h-screen overflow-hidden flex-col text-center md:text-left md:flex-row max-w-full mx-auto px-10 justify-center  items-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="flex w-full md:w-[450px] mt-20 space-x-5 overflow-x-scroll p-10 snap snap-x snap-mandatory">
        <ExperienceCard
          url="/highradiusLogo.png"
          role={"Intern"}
          company="Highradius"
          work={[
            "Wrote and tested code using Javascript to troubleshoot website performance issues.",
            "Writing clean, maintainable, and scalable code.",
            "Testing and debugging web applications.",
            "Created responsive design layouts using JavaScript, aiding smooth customer experiences.",
          ]}
          start="1st August 2021"
          end="31st March 2022"
        />
        <ExperienceCard
          url="/wizLogo.png"
          role={"Software Developer 1"}
          company="Wiz Freight"
          work={[
            "Collaborating with designers and back-end developers to implement features.",
            "Contributing to documentation and knowledge sharing.",
            "Staying up-to-date with new technologies and best practices in frontend development",
            "Working in an Agile development environment.",
          ]}
          start="4th April 2022"
        />
      </div>
    </motion.div>
  );
};

export default Experience;
