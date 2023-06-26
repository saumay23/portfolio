import React from "react";
import { motion } from "framer-motion";
type Props = {
  url: string;
  role: string;
  company: string;
  work: string[];
  start: string;
  end?: string;
};

function ExperienceCard({ url, role, company, work, start, end }: Props) {
  return (
    <article className="flex h-[400px] mt-20 md:mt-0 md:my-auto md:mx-auto overflow-y-scroll flex-col items-center space-y-2 flex-shrink-0 w-[350px]  snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        src={url}
        width="50px"
        height="50px"
        alt=""
        className="w-12 h-12 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-lg font-light ">{role}</h4>
        <p className="font-bold text-base mt-1">{company}</p>
        <div className="flex space-x-2 my-2">{/* technologies */}</div>
        <p className="uppercase py-4 text-xs text-gray-300">
          {`${start} - ${end ? end : "present"}`}
        </p>
        <ul className="list-disc space-y-2 ml-5 text-sm">
          {work?.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
