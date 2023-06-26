import React from "react";
import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1.0 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl mx-auto px-10 justify-evenly items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src="/about.jpeg"
        className="md:mt-20 mt-32 md:mb-0  mb-5 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]  object-cover object-bottom"
      />
      <div className="space-y-10 px-0 md:px-10 ">
        <h4 className="text-2xl font-semibold">Here is a little about me</h4>
        <div className="font-sm overflow-scroll h-52">
          <p>
            I'm a passionate frontend developer with a keen eye for detail and a
            love for crafting engaging user experiences. With expertise in HTML,
            CSS, and JavaScript, I specialize in creating visually appealing,
            responsive websites. My portfolio showcases a range of projects that
            highlight my dedication to clean code and innovative solutions. I'm
            constantly expanding my skills and staying up to date with the
            latest trends in frontend development. I'm excited to work on
            impactful projects and contribute my expertise to deliver
            exceptional results. Let's connect and discuss how I can bring value
            to your team.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
