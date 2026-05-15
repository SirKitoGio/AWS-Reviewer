import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}

export function PageContainer({ children, className, size = "default" }: PageContainerProps) {
  return (
    <main
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20",
        size === "default" && "max-w-5xl",
        size === "wide" && "max-w-7xl",
        size === "narrow" && "max-w-3xl",
        className
      )}
    >
      {children}
    </main>
  );
}
