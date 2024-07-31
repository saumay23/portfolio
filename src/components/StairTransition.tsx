"use client";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition =
  () => {
    const pathName =
      usePathname();
    return (
      <AnimatePresence mode="wait">
        <div
          key={
            pathName
          }
        >
          <div className="w-screen h-screen z-40 fixed top-0 right-0 left-0 pointer-events-none flex">
            <Stairs />
          </div>
          <motion.div
            className="h-screen w-screen top-0 bg-white fixed pointer-events-none"
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
              transition:
                {
                  delay: 1,
                  duration: 0.2,
                  ease: "easeInOut",
                },
            }}
          />
        </div>
      </AnimatePresence>
    );
  };

export default StairTransition;
