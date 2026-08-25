"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechSphere from "@/components/TechSphere";
import SkillsGrid from "@/components/SkillsGrid";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import EducationAndBuilding from "@/components/EducationAndBuilding";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import SmoothScroll from "@/components/SmoothScroll";

export default function Page() {
  const [loaded, setLoaded] = useState(false);
  return (
    <SmoothScroll>
      <LoadingScreen onDone={() => setLoaded(true)} />
      <CustomCursor />
      <Navbar />
      <main className="bg-[#050508] text-white">
        <Hero />
        <About />
        <TechSphere />
        <SkillsGrid />
        <Projects />
        <Experience />
        <EducationAndBuilding />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
