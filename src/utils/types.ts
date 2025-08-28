import type React from "react";

export type ComponentPropsType = {
  name: string;
  age: number;
  status: "Active" | "Inactive" | "Pending";
  avatarUrl?: string;
};

export type TooltipPropsType = {
  content: string;
  children: React.ReactNode;
};
