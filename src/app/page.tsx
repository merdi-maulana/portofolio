"use client";

import Image from "next/image";
import { Hero } from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/scroll-reveal";
import Design from "@/components/container/design/Design";
import Technologies from "@/components/container/technologies/Technologies";
import Superiority from "@/components/container/superiority/Superiority";
import Portofolio from "@/components/container/portofolio/Portofolio";
import Experience from "@/components/container/experience/Experience";
import Testimonial from "@/components/container/testimonial/Testimonial";
import Faq from "@/components/container/FAQ/Faq";
import Contact from "@/components/container/contact/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <div className="flex flex-col w-full">
        <section id="home">
          <Hero />
        </section>
        <ScrollReveal>
          <section id="design">
            <Design />
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section id="skill">
            <Technologies />
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section id="superiority">
            <Superiority />
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section id="projects">
            <Portofolio />
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section id="experience">
            <Experience />
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section id="testimonial">
            <Testimonial />
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section id="faq">
            <Faq />
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section id="contact">
            <Contact />
          </section>
        </ScrollReveal>
      </div>
      <ScrollReveal className="w-full">
        <Footer />
      </ScrollReveal>
    </main>
  );
}
