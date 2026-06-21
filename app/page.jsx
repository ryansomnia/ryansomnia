"use client";

import Navbar from './components/Navbar';
import Header from './components/Header';
import BioData from './components/Biodata';
import Stack from './components/Stack';
import ProjectSection from './components/Project';
import ContactFooter from './components/ContactFooter';
import ScrollReveal from "./components/ScrollReveal";
import CreativeWork from "./components/CreativeWork";
import TemplateSection from "./components/TemplateSection";
import SamuderaVision from "./components/SamuderaSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />

      <ScrollReveal>
        <BioData />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <Stack />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <ProjectSection />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <SamuderaVision />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <TemplateSection />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <CreativeWork />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <ContactFooter />
      </ScrollReveal>
    </>
  );
}