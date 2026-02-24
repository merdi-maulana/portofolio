import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import portfolio2 from "@/assets/img/Portfolio2.png";
import portfolio1 from "@/assets/img/Portfolio1.png";
import portfolio3 from "@/assets/img/Portfolio3.png";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi2";

const listPortfolio: { title: string; image: StaticImageData }[] = [
  {
    title: "Portfolio 1",
    image: portfolio1,
  },
  {
    title: "Portfolio 2",
    image: portfolio2,
  },
  {
    title: "Portfolio 3",
    image: portfolio3,
  },
];

export default function Portfolio() {
  return (
    <main className="my-12 px-3 flex flex-col items-center space-y-8 md:px-40">
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between mb-4 w-full">
        <div className="flex flex-col items-center md:w-[686px]">
          <h2 className="font-bold text-[28px] md:text-[40px] text-center md:text-left w-full">
            Design to <span className="text-primary-300">Code Accuracy</span>
          </h2>

          <p className="text-sm font-medium pt-2 md:text-base">
            We translated design mockups into pixel-perfect, responsive
            components, ensuring a smooth user experience across all
            devices.{" "}
          </p>
        </div>

        <div className="flex w-full md:w-fit h-14 justify-center md:justify-end">
          <Button className="flex justify-center bg-white w-full md:w-[200px] h-14 rounded-full">
            <div className="flex items-center justify-between w-full border border-neutral-300 p-3 pl-4 h-14 rounded-full">
              <p className="text-lg text-black">See All</p>
              <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center">
                <HiOutlineArrowRight className="font-bold" />
              </div>
            </div>
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        {listPortfolio.map((portfolio) => {
          return (
            <div className="">
              <div
                key={portfolio.title}
                className="p-4 bg-neutral-100 rounded-2xl"
              >
                <div className="absolute mt-3 -ml-6 ">
                  <p className="bg-secondary z-20 rounded-r-2xl font-semibold w-25 tracking-tight p-1 text-xs">
                    Best Portofolio
                  </p>
                  <div
                    className="w-0 h-0 -mt-0.5 
                      border-l-[8px] border-l-transparent
                      border-r-[8px] border-r-transparent
                      border-b-[8px] border-b-[#855400] rotate-45"
                  ></div>
                </div>
                <Image alt={portfolio.title} src={portfolio.image} />
              </div>
              <div className="bg-neutral-100 px-2 py-4 rounded-2xl">
                <p className="font-bold text-lg">{portfolio.title}</p>
                <div className="flex items-center">
                  <div className="h-0.5 w-full bg-neutral-300" />
                  <Button className="flex items-center rounded-full h-9 w-9">
                    <HiOutlineArrowRight />
                  </Button>
                </div>
                <p className="text-sm md:text-base">Web Development</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
