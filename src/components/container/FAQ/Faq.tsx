import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface IListAccordion {
  value: string;
  content: string;
  trigger: string;
}

const listAccordion: IListAccordion[] = [
  {
    value: "tech",
    content:
      "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
    trigger: "What technologies do you work with?",
  },
  {
    value: "working-arangement",
    content:
      "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
    trigger: "Do you work on freelance or remote projects?",
  },
  {
    value: "figma",
    content:
      "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
    trigger: "Can you convert Figma or Sketch designs into code?",
  },
  {
    value: "team",
    content:
      "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
    trigger: "Do you collaborate with backend developers or teams?",
  },
  {
    value: "time",
    content:
      "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
    trigger: "Are you available for full-time roles?",
  },
];

export default function Faq() {
  return (
    <main className="bg-neutral-100 px-4 mt-12 md:px-20">
      <div className="py-6 border-none">
        <Card className="border-none shadow-none bg-neutral-100">
          <div className="flex flex-col items-center main-spacing">
            <div className="text-center">
              <h1 className="font-extrabold text-[28px] md:text-[40px] text-center">
                Let’s Clear Things Up
              </h1>
              <p className="text-sm md:text-base">
                I’ve answered a few questions that usually come up when working
                with a frontend developer like me.
              </p>
            </div>
          </div>
          {listAccordion.map((val, index) => {
            return (
              <CardContent key={val.value} className="px-0">
                <Accordion type="single" collapsible>
                  <AccordionItem value={val.value}>
                    <AccordionTrigger
                      className="font-bold md:text-2xl"
                      index={index}
                    >
                      {val.trigger}
                    </AccordionTrigger>
                    <AccordionContent className="md:text-xl">
                      {val.content}
                    </AccordionContent>
                    <div className="w-full h-px bg-neutral-200 mb-4" />
                  </AccordionItem>
                </Accordion>
              </CardContent>
            );
          })}
        </Card>
      </div>
    </main>
  );
}
