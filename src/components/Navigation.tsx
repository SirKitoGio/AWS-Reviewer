"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Cloud, BookOpen, GraduationCap, Lightbulb, Lightning } from "@phosphor-icons/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { label: "Home", href: "/", icon: Cloud },
  { label: "Study Plan", href: "/plan", icon: Lightning },
  { label: "Study", href: "/study", icon: BookOpen },
  { label: "Tips", href: "/tips", icon: Lightbulb },
  { label: "Full Exam", href: "/quiz", icon: GraduationCap },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm border border-zinc-100 transition-transform group-hover:scale-105 group-active:scale-95">
            <Image src="/LOGO.png" alt="Logo" width={40} height={40} className="object-contain" />
          </div>
          <span className="text-sm font-bold tracking-tight text-zinc-900 uppercase hidden md:block">
            AWS CCP <span className="text-zinc-400 font-medium">Reviewer</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-2 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors hover:text-zinc-900",
                  isActive ? "text-zinc-900" : "text-zinc-500"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-md bg-zinc-100"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <item.icon size={16} weight={isActive ? "bold" : "regular"} />
                  <span className="hidden lg:inline">{item.label}</span>
                </span>
              </Link>
            );
          })}
          
          <div className="h-4 w-px bg-zinc-200 mx-2 hidden sm:block"></div>
          
          <Link
            href="/quiz?limit=10"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest transition-all hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 active:scale-95 ml-2"
          >
            <Lightning weight="fill" size={14} />
            Quick 10
          </Link>
        </nav>
      </div>
    </header>
  );
}
