import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import Portofolio2 from "@/assets/img/portofolio2.webp";
import Portofolio1 from "@/assets/img/portofolio1.webp";
import Portofolio3 from "@/assets/img/portofolio3.webp";
import { HiOutlineArrowRight } from "react-icons/hi2";

const listPortfolio: {
  id: number;
  title: string;
  subtitle: string;
  link: string;
  image: StaticImageData;
}[] = [
  {
    id: 1,
    title: "Real Project (ongoing)",
    subtitle: "Real Estate",
    link: "https://bumi-passanggrahan.suksesaselabar.id/",
    image: Portofolio3,
  },
  {
    id: 2,
    title: "Portofolio2",
    subtitle: "Social Media",
    link: "https://social-media-project2.vercel.app/feed",
    image: Portofolio2,
  },
  {
    id: 3,
    title: "Portofolio1",
    subtitle: "Book Library",
    link: "https://library-book-project1.vercel.app/",
    image: Portofolio1,
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
          <Button className="cursor-pointer group flex justify-center bg-white w-full md:w-fit md:min-w-[160px] md:hover:min-w-[280px] h-14 rounded-full p-0 transition-all duration-300 hover:bg-primary-300 hover:text-white active:bg-white active:text-black">
            <div className="flex items-center justify-between w-full border border-neutral-300 p-3 pl-4 h-14 rounded-full hover:bg-primary-300 hover:text-white active:bg-white active:text-black">
              <p className="cursor-pointer text-lg text-black group-hover:text-white group-active:text-black transition-colors duration-300 whitespace-nowrap">
                See All{" "}
                <span className="inline-block max-w-0 overflow-hidden opacity-0 group-hover:max-w-[180px] group-hover:opacity-100 transition-all duration-300 align-bottom">
                  {" "}
                  Portofolio
                </span>
              </p>
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
            <div
              onClick={() => window.open(portfolio.link, "_blank")}
              key={portfolio.id}
              className="cursor-pointer hover:scale-105 md:w-1/3 active:scale-100 transition-all duration-300"
            >
              <div className="p-4 bg-neutral-100 rounded-2xl">
                <div className="absolute mt-3 -ml-6 ">
                  <p className="bg-secondary z-20 rounded-r-2xl font-semibold w-25 tracking-tight p-1 text-xs">
                    Best Portofolio
                  </p>
                  <div className="w-0 h-0 -mt-0.5 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-[#855400] rotate-45"></div>
                </div>
                <div className="w-full md:h-96">
                  <Image
                    className="w-full h-full object-cover"
                    alt={portfolio.title}
                    src={portfolio.image}
                  />
                </div>
              </div>
              <div className="bg-neutral-100 px-2 py-4 rounded-2xl">
                <p className="font-bold text-lg">{portfolio.title}</p>
                <div className="flex items-center">
                  <div className="h-0.5 w-full bg-neutral-300" />
                  <Button className="flex items-center rounded-full h-9 w-9">
                    <HiOutlineArrowRight />
                  </Button>
                </div>
                <p className="text-sm md:text-base">{portfolio.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
