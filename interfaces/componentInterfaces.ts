import { ReactNode } from "react";

export interface INavLink {
  name: string;
  url: string;
  icon?: ReactNode;
}

export interface IMenuTriggerChildren {
  title: string;
  url: string;
  description: string;
}

export interface IMenuTriggers {
  title: string;
  url: string;
  children: IMenuTriggerChildren[];
}

export type ISortData = { data: number }[];
