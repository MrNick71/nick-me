import { Hero } from "@/components/Hero";
import { About, Services } from "@/components/About";
import { Principles } from "@/components/Principles";
import { Businesses } from "@/components/Businesses";
import { Articles } from "@/components/Articles";
import { Background } from "@/components/Background";
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
      <Services />
      <Principles />
      <Businesses />
      <Articles />
      <Background />
      <Experience />
      <Leadership />
      <Education />
      <SkillsAndMore />
      <Contact />
    </>
  );
}
