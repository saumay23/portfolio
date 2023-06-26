import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Circles = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute mt-72 border border-[#333333] rounded-full w-[200px] h-[200px] animate-ping" />
      <div className="absolute mt-72 border border-[#333333] rounded-full w-[300px] h-[300px]" />
      <div className="absolute mt-72 border border-[#333333] rounded-full w-[500px] h-[500px] " />
      <div className="absolute mt-72 border border-[#F7AB0A] opacity-20 rounded-full w-[650px] h-[650px] animate-pulse " />
      <div className="absolute mt-72 border border-[#333333] rounded-full w-[800px] h-[800px] " />
    </motion.div>
  );
};

export default Circles;
