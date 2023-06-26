import Image from "next/image";
import { Playfair_Display, Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";

const PlayFair = Playfair_Display({ subsets: ["latin"] });
const OpenSans = Open_Sans({ subsets: ["latin"] });
export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap snap-y snap-mandatory scroll-smooth overflow-scroll scrollbar-hide z-0">
      <head>
        <title>My Portfolio</title>
      </head>
      <Header />
      <section id="Profile" className="snap-start">
        <Profile />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      <section id="project" className="snap-center">
        <Projects />
      </section>
      <section id="contact" className="snap-center">
        <ContactForm />
      </section>
    </div>
  );
}
