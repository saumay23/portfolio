import React from "react";
import ProjectCard from "./ProjectCard";
import { BiNotepad, BiCloud } from "react-icons/bi";
type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="relative flex h-screen overflow-hidden flex-col text-left md:flex-row max-w-full mx-auto px-10 justify-evenly  items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="flex w-full md:w-[450px] mt-20 space-x-5 overflow-x-scroll p-10 snap snap-x snap-mandatory">
        <ProjectCard
          ImageURL={BiCloud}
          name={"Weather App"}
          about={
            "Stay ahead of the weather with our intuitive app! Search for any city and instantly access up-to-date weather information. Powered by the OpenWeatherMap API, our app delivers accurate forecasts. With a seamless searchable dropdown from Headless UI and RapidAPI's city search, finding weather updates has never been easier!"
          }
          link={"https://weather-app-saumay.vercel.app/"}
        />
        <ProjectCard
          ImageURL={BiNotepad}
          name={"Todo App"}
          about={
            "Boost your productivity with our sleek Todo List app! Built with React, Tailwind CSS, and Jotai, it lets you effortlessly create, complete, and delete tasks. Thanks to cookie storage, your todos stay intact even after a page refresh. Stay organized and stay on top of your to-dos!"
          }
          link={"https://to-do-list-saumay.vercel.app/"}
        />
      </div>
    </div>
  );
};

export default Projects;
