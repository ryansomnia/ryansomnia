"use client";  // Menambahkan 'use client' di sini

import Image from "next/image";
import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import BioData from './components/Biodata';
import Stack from './components/Stack';
import ProjectSection from './components/Project';
import ContactFooter from './components/ContactFooter';
import ScrollReveal from "./components/ScrollReveal";
import CreativeWork from "./components/CreativeWork";

export default function Home() {
  const bioDataRef = useRef(null);
  const projectDataRef = useRef(null);
  const contactDataRef = useRef(null);

  const scrollToBioData = () => {
    if (bioDataRef.current) {
      bioDataRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProject = () => {
    if (projectDataRef.current) {
      projectDataRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    if (contactDataRef.current) {
      contactDataRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    <>
    <Navbar onAboutClick={scrollToBioData} onProjectsClick={scrollToProject} onContactClick={scrollToContact} />
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
  <CreativeWork />
</ScrollReveal>
      <ScrollReveal delay={100}>
        <ContactFooter />
      </ScrollReveal>
    </>

    
    
  );
}
