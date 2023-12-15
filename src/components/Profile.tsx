import React from "react";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Circles from "./Circles";
import Link from "next/link";
type Props = {};

const Profile = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hi, I am Saumay "],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col h-screen items-center space-y-8 text-center justify-center overflow-hidden">
      <Circles />
      <Image
        src="/profilepic.png"
        alt=""
        width="1000"
        height="1000"
        className="relative w-32 h-32 rounded-full object-cover"
      />
      <div className="z-20">
        <h2 className="uppercase text-gray-500 text-sm tracking-[15px]">
          Software Deeloper
        </h2>
        <h1 className="text-4xl my-5 lg:text-5xl font-semibold scroll-px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="buttonSection">About</button>
          </Link>
          <Link href="#experience">
            <button className="buttonSection">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="buttonSection">Skills</button>
          </Link>

          <Link href="#project">
            <button className="buttonSection">Project</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
