"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { allModules, domainContent } from "@/data";
import { motion, AnimatePresence } from "framer-motion";
import { CaretLeft, CaretRight, List } from "@phosphor-icons/react";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function StudyContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Use index-based navigation for the flat module list
  const initialIndex = parseInt(searchParams.get("index") || "0");
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    const index = parseInt(searchParams.get("index") || "0");
    setCurrentIndex(index);
  }, [searchParams]);

  const activeModule = allModules[currentIndex];
  // Some data like detailedNotes and diagrams are still on the domain object
  const activeDomain = domainContent[activeModule.domainId!];

  const handleModuleChange = (idx: number) => {
    router.push(`/study?index=${idx}`, { scroll: true });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100dvh-64px)]">
      {/* Sidebar - Flat Linear List */}
      <aside className="w-full md:w-80 border-r border-zinc-200 bg-white overflow-y-auto max-h-[400px] md:max-h-[calc(100dvh-64px)] sticky top-16 z-20">
        <div className="p-8 border-b border-zinc-100 flex items-center justify-between bg-white/50 backdrop-blur-sm sticky top-0 z-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2">
            <List weight="bold" />
            Curriculum
          </h2>
          <span className="text-[10px] font-bold text-zinc-300 tabular-nums">
            {currentIndex + 1} / {allModules.length}
          </span>
        </div>
        <nav className="p-4 space-y-1">
          {allModules.map((module, idx) => (
            <button
              key={idx}
              onClick={() => handleModuleChange(idx)}
              className={cn(
                "w-full text-left px-4 py-3 rounded-xl text-xs font-semibold transition-all flex items-center gap-4 group",
                currentIndex === idx
                  ? "bg-zinc-950 text-white shadow-xl shadow-zinc-200"
                  : "text-zinc-500 hover:bg-zinc-50"
              )}
            >
              <span className={cn(
                "text-[10px] font-black tabular-nums transition-colors",
                currentIndex === idx ? "text-emerald-400" : "text-zinc-200 group-hover:text-zinc-300"
              )}>
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className="line-clamp-1">
                {module.title.split(':').slice(1).join(':').trim() || module.title}
              </span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Content Area */}
      <main className="flex-1 bg-zinc-50/50 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="max-w-4xl mx-auto p-8 md:p-16 lg:p-24"
          >
            <header className="mb-16 border-b border-zinc-200 pb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-emerald-500"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-700">
                  {activeModule.domainName}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 mb-6 leading-tight">
                {activeModule.title}
              </h1>
              <p className="text-xl text-zinc-500 leading-relaxed max-w-2xl">
                {activeModule.description}
              </p>
              <div className="mt-8 flex gap-4">
                 <Link 
                   href={`/quiz?domain=${activeModule.domainId}`}
                   className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700 hover:gap-3 transition-all group"
                 >
                   Practice Domain {activeModule.domainId}
                   <CaretRight weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
                 </Link>
              </div>
            </header>

            <div className="space-y-20">
              {activeModule.sections?.map((section, sIdx) => (
                <section key={sIdx} className="space-y-10">
                  <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 border-l-2 border-zinc-200 pl-4">
                    {section.title}
                  </h2>
                  <div className="grid grid-cols-1 gap-6">
                    {section.items.map((item, iIdx) => (
                      <div key={iIdx} className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-start p-8 rounded-3xl bg-white border border-zinc-100 transition-all hover:shadow-2xl hover:shadow-zinc-200/50">
                        <div className="md:col-span-4">
                          <h3 className="text-lg font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors">
                            {item.term}
                          </h3>
                        </div>
                        <div className="md:col-span-8 space-y-4">
                          <p className="text-zinc-600 text-sm leading-relaxed">
                            {item.focus || item.def}
                          </p>
                          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1">Example</span>
                            <p className="text-xs text-zinc-500 italic">
                              {item.example}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}

              {activeModule.customHtml && (
                <div 
                  className="prose prose-zinc max-w-none editorial-custom-html"
                  dangerouslySetInnerHTML={{ __html: activeModule.customHtml }}
                />
              )}

              {/* Only show domain notes/diagrams on the "Intro" module for that domain or specific designated modules */}
              {currentIndex === allModules.findIndex(m => m.domainId === activeModule.domainId) && activeDomain.diagram && (
                 <section className="space-y-10 pt-12 border-t border-zinc-200">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400">
                      {activeDomain.diagramTitle || "Architecture Diagram"}
                    </h2>
                    <div className="p-8 rounded-[2rem] bg-white border border-zinc-100 shadow-sm overflow-hidden" 
                         dangerouslySetInnerHTML={{ __html: activeDomain.diagram }} 
                    />
                 </section>
              )}
            </div>

            {/* Navigation Footer */}
            <footer className="mt-32 pt-12 border-t border-zinc-200 flex flex-col sm:flex-row justify-between gap-8">
              <button
                disabled={currentIndex === 0}
                onClick={() => handleModuleChange(currentIndex - 1)}
                className="group flex items-center gap-4 text-left disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-full border border-zinc-200 group-hover:bg-zinc-100 transition-colors">
                  <CaretLeft weight="bold" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400">Previous</span>
                  <span className="font-bold text-zinc-900 group-hover:text-emerald-700">Module {currentIndex}</span>
                </div>
              </button>

              <button
                onClick={() => {
                  if (currentIndex < allModules.length - 1) {
                    handleModuleChange(currentIndex + 1);
                  } else {
                    router.push("/quiz");
                  }
                }}
                className="group flex items-center text-right gap-4 flex-row-reverse"
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-zinc-950 text-white group-hover:bg-zinc-800 transition-colors">
                  <CaretRight weight="bold" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400">Next</span>
                  <span className="font-bold text-zinc-900 group-hover:text-emerald-700">
                    {currentIndex < allModules.length - 1 
                      ? `Module ${currentIndex + 2}` 
                      : "Launch Final Quiz"}
                  </span>
                </div>
              </button>
            </footer>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default function StudyPage() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div className="flex items-center justify-center h-screen bg-zinc-50"><div className="h-8 w-8 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div></div>}>
        <StudyContent />
      </Suspense>
    </>
  );
}
