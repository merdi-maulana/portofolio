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
import testimoniicon from "@/assets/svg/Testimoni_icon1.svg";
import { FaStar, FaRegStar } from "react-icons/fa6";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi2";

const ListTech = [
  {
    name: "Sarah Tan",
    icon: testimoniicon,
    Quote:
      "“Working with Edwin Anderson was a smooth experience from start to finish. He translated our design into clean, responsive code and even suggested improvements we hadn’t thought of. Highly recommended!”",
    Position: "Product Manager",
    Company: "Finovate",
    Rating: 5,
  },
  {
    name: "Sarah Tan",
    icon: testimoniicon,
    Quote:
      "“Working with Edwin Anderson was a smooth experience from start to finish. He translated our design into clean, responsive code and even suggested improvements we hadn’t thought of. Highly recommended!”",
    Position: "Product Manager",
    Company: "Finovate",
    Rating: 4,
  },
  {
    name: "Sarah Tan",
    icon: testimoniicon,
    Quote:
      "“Working with Edwin Anderson was a smooth experience from start to finish. He translated our design into clean, responsive code and even suggested improvements we hadn’t thought of. Highly recommended!”",
    Position: "Product Manager",
    Company: "Finovate",
    Rating: 5,
  },
];

export default function Testimonial() {
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
    <main className="w-full py-10 px-2 md:px-20">
      <h2 className="text-[28px] md:text-[40px] font-bold text-center tracking-tight">
        What They Say About Working With Me
      </h2>
      <p className="text-center font-medium mb-5 md:mb-10">
        Real words from clients, teammates, and mentors I’ve collaborated with
        on various projects.
      </p>
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent className="-ml-1">
          {ListTech.map((tech, index) => (
            <CarouselItem key={index} className="pl-1">
              <div className="p-1">
                <Card
                  className={`relative z-10 border-none rounded-2xl bg-primary-300`}
                >
                  <CardContent className="flex flex-col  text-white items-center justify-start px-4 md:px-10 text-center gap-3 md:gap-5 md:mt-4">
                    <div className="flex gap-1 md:scale-110">
                      {Array.from({ length: tech.Rating }).map((_, index) => (
                        <FaStar
                          key={index}
                          className="h-5 w-5 text-yellow-500 "
                        />
                      ))}
                      {Array.from({ length: 5 - tech.Rating }).map(
                        (_, index) => (
                          <FaRegStar
                            key={index}
                            className="h-5 w-5 text-yellow-500 "
                          />
                        ),
                      )}
                    </div>
                    <h3 className="font-semibold text-[18px] md:text-2xl md:leading-10 leading-8 tracking-tight px-3">
                      {tech.Quote}
                    </h3>
                    <div
                      className={`h-17 w-17 mt-5 justify-center items-center flex rounded-full ${index % 2 !== 0 ? "bg-[#F5F5F5]" : "bg-white"}`}
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        className="h-full w-full"
                      />
                    </div>
                    <h3 className="font-semibold text-[18px]">{tech.name}</h3>
                    <p className="font-medium">
                      {tech.Position} at {tech.Company}
                    </p>
                  </CardContent>
                </Card>
                <div className="relative z-0 h-5 bg-primary-300/70 border-none -mt-2 rounded-b-2xl scale-95 " />
                <div className="relative z-0 h-3 bg-primary-300/10 border-none -mt-0.5 rounded-b-2xl scale-85 " />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center gap-3 mt-5">
        <button
          className={`border border-neutral-300 h-12 w-12 p-3 rounded-full ${canScrollPrev ? "" : "text-neutral-400"}`}
          onClick={() => api?.scrollPrev()}
        >
          <HiOutlineArrowLeft className="h-full w-full" />
        </button>
        <button
          className={`border border-neutral-300 h-12 w-12 p-3 rounded-full ${canScrollNext ? "" : "text-neutral-400"}`}
          onClick={() => api?.scrollNext()}
        >
          <HiOutlineArrowRight className="h-full w-full" />
        </button>
      </div>
    </main>
  );
}
