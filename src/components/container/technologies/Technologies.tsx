"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import Reactimg from "@/assets/svg/React_icon.svg";
import HTMLimg from "@/assets/svg/HTML_icon.svg";
import CSSimg from "@/assets/svg/Css_icon.svg";
import JSimg from "@/assets/svg/JavaScript_icon.svg";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi2";

const ListTech = [
  {
    name: "HTML",
    icon: HTMLimg,
    Description: "Building semantic and accessible structures to ensure a solid foundation for SEO and screen-reader compatibility.",
  },
  {
    name: "CSS/Tailwind",
    icon: CSSimg,
    Description:
      "Crafting pixel-perfect, responsive layouts with a focus on design fidelity and maintainable styling using Tailwind CSS.",
  },
  {
    name: "JavaScript",
    icon: JSimg,
    Description:
      "Developing clean and efficient application logic using modern ES6+ features and asynchronous programming.",
  },
  {
    name: "React",
    icon: Reactimg,
    Description:
      "Architecting modular, component-based UIs with a focus on reusable code and efficient state management hooks.",
  },{
    name: "Next.js",
    icon: Reactimg,
    Description:
      "Optimizing web performance through Server-Side Rendering (SSR) and Static Site Generation (SSG) for faster, SEO-friendly applications.",
  },{
    name: "Tanstack Query",
    icon: Reactimg,
    Description:
      "Streamlining server-state management by implementing efficient data fetching, caching, and synchronization to enhance user experience.",
  },
];

export default function Technologies() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(true);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <main className="w-full py-10 px-2 bg-[linear-gradient(180deg,rgba(158,56,94,0)0%,rgba(158,56,94,0.1)99.95%)]">
      <h2 className="text-[28px] md:text-[40px] font-bold text-center tracking-tight">
        Code, Design, and Everything in Between
      </h2>
      <p className="text-center font-medium mb-5">
        These are the technologies that power my workflow and bring ideas to
        life.
      </p>
      <Carousel className="w-full flex justify-center" setApi={setApi}>
        <CarouselContent className="-ml-1 md:max-w-[920px] lg:max-w-[1200px]">
          {ListTech.map((tech, index) => (
            <CarouselItem key={index} className="basis-1/2 pl-1 md:basis-1/4">
              <div className="p-1 lg:mx-2">
                <Card
                  className={`rounded-full ${index % 2 !== 0 ? "bg-white" : "bg-secondary"}`}
                >
                  <CardContent className="flex flex-col items-center justify-start px-4 py-10 text-center gap-3 h-70 md:h-75 lg:h-80">
                    <div
                      className={`h-15 w-15 p-3 justify-center items-center flex rounded-full ${index % 2 !== 0 ? "bg-[#F5F5F5]" : "bg-white"}`}
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        className="h-full w-full"
                      />
                    </div>
                    <h3 className="font-semibold">{tech.name}</h3>
                    <p className="text-sm md:text-base">{tech.Description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center gap-3">
        <button
          className={`border border-neutral-300 h-12 w-12 p-3 rounded-full transition-colors duration-300 ${canScrollPrev ? "cursor-pointer hover:bg-white hover:text-primary" : "text-neutral-400"}`}
          onClick={() => api?.scrollPrev()}
        >
          <HiOutlineArrowLeft className="h-full w-full" />
        </button>
        <button
          className={`border border-neutral-300 h-12 w-12 p-3 rounded-full transition-colors duration-300 ${canScrollNext ? "cursor-pointer hover:bg-white hover:text-primary" : "text-neutral-400"}`}
          onClick={() => api?.scrollNext()}
        >
          <HiOutlineArrowRight className="h-full w-full" />
        </button>
      </div>
    </main>
  );
}
