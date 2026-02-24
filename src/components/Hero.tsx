"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import heroImage from "@/assets/img/hero-image.png";
import bgHero from "@/assets/img/bg-hero.png";
import Reactimg from "@/assets/svg/React_icon.svg";
import HTMLimg from "@/assets/svg/HTML_icon.svg";
import CSSimg from "@/assets/svg/Css_icon.svg";
import JSimg from "@/assets/svg/JavaScript_icon.svg";
import { FaMicrophone } from "react-icons/fa";
import accesoriesHero from "@/assets/img/accesories_hero.png";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  const ListTech = [
    {
      name: "JavaScript",
      icon: JSimg,
    },
    {
      name: "Css",
      icon: CSSimg,
    },
    {
      name: "HTML",
      icon: HTMLimg,
    },
    {
      name: "React",
      icon: Reactimg,
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[105vh] overflow-hidden w-full bg-primary pt-16">
      {/* Background Image */}
      <Image src={bgHero} alt="" fill className="object-cover" priority />
      {/* Full-bleed background video with parallax */}
      <div
        className="absolute inset-0 h-[105vh] flex flex-col justify-end items-center  px-4"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div
          className="flex absolute bottom-110 left-1/2 bg-primary-400 border rounded-full px-4 py-1 border-primary-300 -translate-x-1/2 justify-between items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-700"
          style={{
            animationDelay: "2000ms",
            animationFillMode: "both",
          }}
        >
          <div className="w-2 h-2 bg-primary-300 rounded-full animate-blink-dot"></div>
          <p className="text-white font-bold md:text-xl max-w-xl leading-relaxed">
            Available for Hire
          </p>
        </div>
        <h1
          className="absolute bottom-42 md:bottom-100 z-1 font-anton text-[102px] md:text-[187px] text-secondary leading-[0.88] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000"
          style={{ animationDelay: "500ms", animationFillMode: "both" }}
        >
          FRONTEND <br />
          <span className="text-[92.8px] md:text-[172px]">DEVELOPER</span>
        </h1>

        <div className="absolute z-10 left-1/2 -translate-x-1/2 ml-4 bottom-0 w-[375px] md:w-[610px]">
          <Image
            src={heroImage}
            alt="Hero Image"
            height={735}
            width={610}
            className="w-full object-cover animate-hero-image"
          />
        </div>
        <div className="absolute left-0 md:left-1/4 -translate-x-1/2 ml-4 bottom-55 md:bottom-109  w-[100px] h-[100px] md:w-[200px] md:h-[200px]">
          <Image
            src={accesoriesHero}
            alt="Hero Image"
            height={735}
            width={610}
            className="w-full object-cover animate-accesories"
          />
        </div>
        <div className="absolute left-5/6 md:left-4/6 -translate-x-1/2 ml-4 bottom-25 md:bottom-25 w-[100px] h-[100px] md:w-[200px] md:h-[200px]">
          <Image
            src={accesoriesHero}
            alt="Hero Image"
            height={735}
            width={610}
            className="w-full object-cover animate-accesories"
          />
        </div>
        <h1
          className="absolute bottom-42 md:bottom-100 z-20 font-anton text-[102px] text-transparent  md:text-[187px] leading-[0.88] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000"
          style={{
            animationDelay: "500ms",
            animationFillMode: "both",
            WebkitTextStroke: "1px #f3b64c",
          }}
        >
          <br />
          <span className="text-[92px] md:text-[172px]">DEVELOPER</span>
        </h1>

        <h1
          className="absolute bottom-84 md:bottom-186 left-1/2 -translate-x-1/2 pr-60 md:pr-140 -rotate-12 z-20 text-white font-bonheur-royale text-[64px] md:text-7xl lg:text-8xl xl:text-[9rem] leading-[0.88] md:tracking-tight tracking-[-0.028em] animate-in fade-in slide-in-from-bottom-8 duration-1000"
          style={{
            animationDelay: "600ms",
            animationFillMode: "both",
          }}
        >
          Junior
        </h1>
      </div>

      {/* Animated accent line */}
      <div
        className="absolute left-12 top-0 w-px bg-[#c9a962]/40 hidden lg:block animate-in slide-in-from-top duration-1000"
        style={{
          height: "40%",
          animationDelay: "1200ms",
          animationFillMode: "both",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 lg:pb-32">
        <div className="max-w-[1800px] mx-auto h-full px-4 md:px-12 w-full">
          <div className="flex flex-col md:grid lg:grid-cols-12 h-full md:gap-8 items-end">
            {/* Main headline area */}
            <div className="lg:col-span-8 flex flex-col md:justify-around md:h-full">
              <div className="hidden md:flex flex-col gap-4 border border-primary-300 w-fit px-5 py-8 rounded-full">
                {/* Season tag */}
                {ListTech.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex justify-center items-center border border-primary-300 h-18 w-18 rounded-full gap-4 animate-in fade-in slide-in-from-left-8 duration-700"
                    style={{
                      animationDelay: "300ms",
                      animationFillMode: "both",
                    }}
                  >
                    <Image src={tech.icon} alt={tech.name} />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 md:max-w-[478px]">
                <a
                  className="flex w-12 h-12 border border-white/43 justify-center rounded-full items-center gap-4 animate-in fade-in slide-in-from-left-8 duration-700"
                  style={{ animationDelay: "200ms", animationFillMode: "both" }}
                >
                  <FaMicrophone className="text-white" />
                </a>
                {/* Season tag */}

                <h2
                  className="text-white font-bold md:text-xl max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: "800ms", animationFillMode: "both" }}
                >
                  Hello, I'm Merdi
                </h2>

                {/* Main title */}

                {/* Subtitle */}
                <p
                  className="text-white text-sm md:text-xl max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: "800ms", animationFillMode: "both" }}
                >
                  a frontend developer passionate about creating seamless
                  digital experiences that are fast, responsive, and
                  user-friendly.
                </p>
              </div>
            </div>

            {/* Right side - floating card */}
            <div
              className="lg:col-span-4 w-full flex flex-col md:items-end md:justify-center md:h-full gap-8 animate-in fade-in slide-in-from-right-8 duration-700"
              style={{ animationDelay: "1100ms", animationFillMode: "both" }}
            >
              {/* Stats card */}
              <div className=" md:p-8 md:max-w-[280px] w-full md:h-full">
                <div className="space-y-6 grid grid-cols-2 md:grid-cols-1 gap-y-4 md:pt-30 md:h-full">
                  <div className="flex flex-col mb-0">
                    <p className="text-[32px] md:text-5xl font-bold text-white">
                      2+
                    </p>
                    <p className="text-xs md:text-base text-white mt-1">
                      Year of Experience
                    </p>
                  </div>
                  <div className="flex flex-col mb-0 pl-10 md:pl-0 border-l md:border-none border-white/30">
                    <p className="text-[32px] md:text-5xl font-bold text-white ">
                      99%
                    </p>
                    <p className="text-xs md:text-base text-white mt-1">
                      Client Satisfaction
                    </p>
                  </div>
                  <div className="flex flex-col mb-0">
                    <p className="text-[32px] md:text-5xl font-bold text-white">
                      3
                    </p>
                    <p className="text-xs md:text-base text-white mt-1">
                      Project Delivered
                    </p>
                  </div>
                  <div className="flex flex-col mb-0 pl-10 md:pl-0 border-l md:border-none border-white/30">
                    <p className="text-[32px] md:text-5xl font-bold text-white">
                      50
                    </p>
                    <p className="text-xs md:text-base text-white mt-1">
                      Clients Worldwide
                    </p>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <a
                      type="button"
                      href="#contact"
                      className="inline-flex w-full items-center justify-between md:gap-14 bg-secondary rounded-full text-[#1a1a1a] px-2 pl-4 py-2 text-base md:h-14 hover:bg-[#c9a962] hover:text-[#1a1a1a] transition-all duration-500"
                    >
                      <p className="text-sm font-bold md:text-base">
                        Contact Me
                      </p>
                      <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform duration-300" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a962]/30 to-transparent" />
    </section>
  );
}
