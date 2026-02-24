"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Accordion as AccordionPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  index,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  index?: number;
}) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-1.5 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        {...props}
      >
        <span className="flex items-start gap-2 md:gap-50 font-semibold text-[18px] md:text-[24px]">
          {index !== undefined && (
            <span className=" ">{String(index + 1).padStart(2, "0")}</span>
          )}
          {children}
        </span>
        <div className="relative border flex items-center shrink-0 justify-center w-8 md:w-12 h-8 md:h-12 rounded-full bg-primary-300 text-white group-data-[state=open]:bg-white group-data-[state=open]:text-neutral-950 transition-colors duration-200">
          <FaPlus className="pointer-events-none size-3 shrink-0 transition-transform duration-200 group-data-[state=open]:hidden" />
          <FaMinus className="pointer-events-none size-3 shrink-0 transition-transform duration-200 hidden group-data-[state=open]:block" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4 px-4 md:pl-55", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
