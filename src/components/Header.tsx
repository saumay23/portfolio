import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
type Props = {};

export default function Header({}: Props) {
  const router = useRouter();
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto p-5 z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1.0 }}
        className="flex flex-row items-center space-x-5 "
        transition={{ duration: 1.5 }}
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/saumay-killa-474212191/"
          fgColor="white"
          style={{ height: 30, width: 30 }}
        />
        <SocialIcon
          url="https://github.com/saumay23"
          fgColor="white"
          style={{ height: 30, width: 30 }}
        />
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        onClick={() => {
          router.push("#contact");
        }}
        className="flex flex-row items-center cursor-pointer text-gray-400 hover:text-white"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          bgColor="transparent"
          fgColor="gray"
        />
        <p className="uppercase hidden md:inline-flex text-sm ">Get in Touch</p>
      </motion.div>
    </header>
  );
}
