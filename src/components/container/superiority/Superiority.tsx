import { Button } from "@/components/ui/button";
import CardSuperiority from "@/components/ui/card-superiority";
import developer from "@/assets/img/avatar.png";
import defaultAvatar from "@/assets/img/default_avatar.png";
import checkIcon from "@/assets/svg/Check_Icon.svg";
import closeIcon from "@/assets/svg/Close_Icon.svg";

const listMyPower = [
  "React Expert",
  "Precise Website Implementation",
  "TypeScript Proficiency",
  "Clean, Maintainable Code",
  "Responsive Website Development",
  "Performance Optimization",
  "UI Design Proficiency (Figma)",
];

const listAnotherPower = [
  "Basic React Knowledge",
  "Inconsistent Design Translation",
  "Little to No TypeScript Knowledge",
  "Unstructured Code",
  "Inconsistent Responsiveness",
  "Slow and Heavy Websites",
  "No Design Skills",
];

export default function Superiority() {
  return (
    <main className="mt-12 px-3 md:px-40">
      <div className="flex flex-col items-center mb-8">
        <div className="px-6">
          <h2 className="font-bold text-[28px] md:text-[40px] text-center">
            More Than Just Code
          </h2>
          <p className="text-center font-medium text-sm mt-2 md:text-base">
            We care about design, performance, and user experience all in one.
          </p>
        </div>
      </div>

      <div className="md:flex gap-4">
        <CardSuperiority
          avatar={developer}
          list={listMyPower}
          image={checkIcon}
          header="With Me"
        />
        <CardSuperiority
          avatar={defaultAvatar}
          bg="bg-white"
          list={listAnotherPower}
          image={closeIcon}
          header="Another Talent"
        />
      </div>

      <div className="md:flex md:justify-center">
        <Button className="h-12 mt-8 w-full bg-primary-200 rounded-full md:w-80">
          <p className="text-lg">Hire Me</p>
        </Button>
      </div>
    </main>
  );
}
