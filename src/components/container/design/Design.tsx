import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Configurationimg from "@/assets/img/configuration.png";
import Designimg from "@/assets/img/design.png";
import Responsiveimg from "@/assets/img/responsive.png";

interface IListAccordion {
  value: string;
  content: string;
  mainContent: string;
  icon: StaticImageData;
}

const listAccordion: IListAccordion[] = [
  {
    value: "Configuration",
    icon: Configurationimg,
    content:
      "Reusable, scalable code built with modern frameworks like React or Vue.",
    mainContent: "COMPONENT-BASED DEVELOPMENT",
  },
  {
    value: "Design",
    icon: Designimg,
    content:
      "Translating design into high-fidelity user interfaces with attention to detail.",
    mainContent: "PIXEL-PERFECT UI IMPLEMENTATION",
  },
  {
    value: "Responsive",
    icon: Responsiveimg,
    content:
      "Optimized layouts that work seamlessly across all screen sizes and devices.",
    mainContent: "RESPONSIVE & ACCESSIBLE DESIGN",
  },
];

export default function Design() {
  return (
    <main className="bg-background px-4 py-12 md:px-40 flex items-center flex-col">
      <div className="flex justify-center max-w-4xl">
        <h2 className="text-[28px] md:text-[36px] text-center font-medium tracking-tight mb-20">
          As frontend developers , we bring designs to life with{" "}
          <span className="text-primary">clean</span>,{" "}
          <span className="text-primary">responsive code</span> that blends
          creativity 🎨 with usability 🌟.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-20">
        {listAccordion.map((val) => {
          return (
            <div key={val.value} className="space-y-4 mt-4">
              <div className="border w-fit p-2.5 rounded-full md:scale-120">
                <Image src={val.icon} alt={val.value} />
              </div>
              <p className="text-[18px] md:text-2xl font-bold mt-2">
                {val.mainContent}
              </p>
              <p>{val.content}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
