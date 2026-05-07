import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import CompanyLogo from "@/assets/svg/Company_logo.svg";
import CompanyLogo2 from "@/assets/svg/Company_logo-1.svg";
import CompanyLogo3 from "@/assets/svg/Company_logo-2.svg";

interface IListAccordion {
  value: string;
  since: string;
  content: string;
  mainContent: string;
  icon: StaticImageData;
}

const listAccordion: IListAccordion[] = [
  {
    value: "Engineering",
    since: "2025",
    icon: CompanyLogo,
    mainContent: "MODERN FRONTEND ARCHITECTURE",
    content:
      "Developing production-ready applications using React and Next.js. Focused on building robust web systems with TypeScript for type-safety and TanStack Query for efficient server-state management, ensuring high-performance data fetching and caching.",
  },
  {
    value: "Design",
    since: "2025",
    icon: CompanyLogo2,
    mainContent: "PIXEL-PERFECT IMPLEMENTATION",
    content:
      "Specializing in high-fidelity Figma-to-code transformations. Utilizing Tailwind CSS to deliver precise, responsive interfaces that mirror design specifications exactly, while maintaining clean, reusable component structures for long-term scalability.",
  },
  {
    value: "Operations",
    since: "2023",
    icon: CompanyLogo3,
    mainContent: "REMOTE COLLABORATION & WORKFLOW",
    content:
      "Proven professional experience since 2023 in managing digital workflows. Expert in remote collaboration tools like Slack, Git/GitHub, and Whatsapp, with a disciplined approach to task management, clear communication, and consistent delivery in distributed environments.",
  },
];

export default function Experience() {
  return (
    <main className="px-4 py-8 md:px-40 bg-neutral-950 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h2 className="text-[28px] md:text-[40px] font-bold md:w-[365px]">
          Experiences That <span className="text-secondary">Shaped Me</span>!
        </h2>
        <p className="text-sm md:text-[18px] font-semibold md:w-[366px]">
          From startups to side projects, every step has been a chance to learn,
          build, and level up.{" "}
        </p>
      </div>
      {listAccordion.map((val) => {
        return (
          <div
            key={val.value}
            className="space-y-4 mt-4 border-t py-6 border-neutral-800 flex flex-col items-center md:flex-row justify-between"
          >
            <div className="md:w-[200px]">
              <p className="text-neutral-400 md:text-sm">{val.since} - Present</p>
              <h3 className="font-bold md:text-xl">Frontend Developer</h3>
            </div>
            <div className="border w-fit md:scale-125 h-fit p-1 rounded-[12px] border-neutral-800">
              <div className="border w-fit p-2.5 rounded-[10px] border-neutral-800">
                <Image
                  src={val.icon}
                  alt={val.value}
                  className="w-30 h-14 object-fill"
                />
              </div>
            </div>
            <div className="md:w-[513px]">
              <p className="text-neutral-400 text-sm md:text-base leading-7">
                {val.content}
              </p>
            </div>
          </div>
        );
      })}
    </main>
  );
}
