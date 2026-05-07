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
      "I built my foundation in HTML, CSS, and JavaScript, and I’ve spent the last few months focusing heavily on React and Next.js. I use Tailwind CSS for styling and TypeScript to write cleaner code. I'm also familiar with fetching data from APIs and managing basic application states.",
    trigger: "What technologies do you work with?",
  },
  {
    value: "working-arangement",
    content:
      "I am very open to remote work. During my bootcamp, I learned how to collaborate digitally using Git and GitHub for version control. I’m disciplined with my schedule and comfortable using tools like Slack to stay connected and report my daily progress to the team.",
    trigger: "Do you work on freelance or remote projects?",
  },
  {
    value: "figma",
    content:
      "Absolutely. I take great pride in my ability to deliver pixel-perfect implementations. I have a very keen eye for detail, ensuring that every margin, font size, and color transition in the Figma file is translated accurately into the final code. I make sure the result is not only visually identical but also fully responsive across all devices.",
    trigger: "Can you convert Figma or Sketch designs into code?",
  },
  {
    value: "team",
    content:
      "Yes, I am comfortable working with teams and familiar with integrating REST APIs. I use TanStack Query to handle data fetching, caching, and synchronization efficiently. I understand the importance of clear communication with backend developers to ensure the data is handled correctly on the front end.",
    trigger: "Do you collaborate with backend developers or teams?",
  },
  {
    value: "time",
    content:
      "Yes, I am looking for a full-time, remote position. As a junior developer, I am looking for a team where I can contribute my skills, continue to learn best practices, and grow professionally within a remote-first environment.",
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
