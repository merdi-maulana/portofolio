import { Card, CardContent, CardHeader } from "./card";
import Image, { StaticImageData } from "next/image";
import sun from "@/assets/svg/sun.svg";

export default function CardSuperiority({
  bg = "bg-secondary",
  list,
  avatar,
  image,
  header,
}: {
  header?: string;
  bg?: string;
  list: string[];
  avatar: StaticImageData;
  image: string;
}) {
  return (
    <Card className={`${bg} mt-4 pt-6 pb-0 md:flex-1`}>
      <CardHeader className="flex flex-col justify-center items-center">
        <h1
          className={`${header === "With Me" ? "font-bold" : "font-semibold"} text-xl mb-1`}
        >
          {header}
        </h1>
        <Image alt="developer" src={avatar} className="w-20 h-20" />
      </CardHeader>
      <CardContent className="mb-3">
        {list.map((skill, idx) => {
          return (
            <div
              key={skill}
              className={` flex gap-3 items-center hover:bg-primary-300/20 rounded-full justify-center mb-6 py-1`}
            >
              <Image alt="check" src={image} />
              <p className="font-semibold md:text-[18px]"> {skill} </p>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
