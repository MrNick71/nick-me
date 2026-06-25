import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Principles } from "@/components/Principles";
import { Businesses } from "@/components/Businesses";
import { Experience } from "@/components/Experience";
import { Leadership } from "@/components/Leadership";
import { Education } from "@/components/Education";
import { SkillsAndMore } from "@/components/SkillsAndMore";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Principles />
      <Businesses />
      <Experience />
      <Leadership />
      <Education />
      <SkillsAndMore />
      <Contact />
    </>
  );
}
