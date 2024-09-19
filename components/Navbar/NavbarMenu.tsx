"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NavMenuTriggers } from "@/lib/constants";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Fragment } from "react";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export function NavbarMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="outline-none">
          <HamburgerMenuIcon />
        </button>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="bg-secondary dark:bg-black overflow-y-auto"
      >
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
        </SheetHeader>

        <Accordion type="single" collapsible className="w-full">
          {NavMenuTriggers.map((item) => {
            return (
              <AccordionItem value={item.title} key={item.title}>
                <AccordionTrigger key={item.title}>
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>
                  {item.children.map(({ title, url }) => {
                    return (
                      <Fragment key={title}>
                        <Link
                          className="mt-5 block w-full hover:text-primary/80 hover:underline"
                          href={`/${item.url}/${url}`}
                        >
                          {title}
                        </Link>
                        <Separator className="bg-primary/10" />
                      </Fragment>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
