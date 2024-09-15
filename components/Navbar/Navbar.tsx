"use client";

import { NavMenuTriggers } from "@/lib/constants";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ModeToggle } from "../ModeToggle";
import { NavbarMenu } from "./NavbarMenu";

export default function Navbar() {
  return (
    <nav className="h-14 w-full flex justify-between items-center px-5 md:px-10">
      <p>Logo</p>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          {NavMenuTriggers.map(({ title, url, children }) => {
            return (
              <NavigationMenuItem key={title}>
                <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {children.slice(0, 6).map(({ title, description, url }) => {
                      return (
                        <ListItem href={`/${url}`} key={title} title={title}>
                          {description}
                        </ListItem>
                      );
                    })}
                    <Link
                      href={`/${url}`}
                      className="col-span-2  text-center self-center"
                    >
                      View all
                    </Link>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-3">
        <ModeToggle />
        <div className="block md:hidden">
          <NavbarMenu />
        </div>
      </div>
    </nav>
  );
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
