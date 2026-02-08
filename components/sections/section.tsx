import * as React from "react";
import { cn } from "@/lib/utils";

export const Section = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => <section className={cn("section-padding", className)}>{children}</section>;

export const Container = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => <div className={cn("mx-auto max-w-6xl", className)}>{children}</div>;
