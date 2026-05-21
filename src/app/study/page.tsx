"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { allModules, domainContent } from "@/data";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CaretLeft, 
  CaretRight, 
  List, 
  Target, 
  BookOpen, 
  GraduationCap, 
  Cpu, 
  Lightbulb, 
  X, 
  Lightning, 
  ShieldCheck 
} from "@phosphor-icons/react";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Fallback presets to ensure 100% content coverage across all 16 study modules
const DEFAULT_BLUEPRINTS: Record<number, { whyItMatters: string; howToStudy: string; examRelevance: string }> = {
  1: {
    whyItMatters: "On-premises data centers require complex capacity planning and heavy capital investment. AWS cloud economics and core design principles shift fixed capital expense (CapEx) to flexible, variable operating expense (OpEx) that automatically scales with demand.",
    howToStudy: "Focus on definitions of agility, elasticity, high availability, fault tolerance, and the trade-offs of migrations (the 7 R's) and CAF perspectives.",
    examRelevance: "Expect about 15% of the exam questions on Cloud Concepts (Domain 1)."
  },
  2: {
    whyItMatters: "Security is 'job zero' at AWS. The Shared Responsibility Model defines what you control versus what AWS secures, ensuring a reliable boundary of accountability for identity, auditing, and compliance.",
    howToStudy: "Memorize the strict demarcation: AWS secures hardware, physical facilities, and host OS. The Customer secures user data, guest OS, network configuration (Security Groups), and IAM permissions.",
    examRelevance: "Expect about 25% of the exam questions on Security and Compliance (Domain 2)."
  },
  3: {
    whyItMatters: "AWS supplies specialized building blocks (virtual instances, serverless runtimes, network channels, databases, storage) so that you can decouple layers and choose the right engine for cost and compute speeds.",
    howToStudy: "Compare similar services: EC2 vs Lambda vs Fargate; S3 vs EBS vs EFS; RDS vs DynamoDB vs Redshift; and understand global Route 53 and CloudFront routing.",
    examRelevance: "Expect about 35% of the exam questions on Cloud Technology and Services (Domain 3)."
  },
  4: {
    whyItMatters: "AWS utilizes utility-style pricing models where scale reduces price. Clear spending budgets, billing consolidations, and support tiers ensure enterprise transparency and architectural optimization.",
    howToStudy: "Differentiate compute purchasing options (On-Demand, Spot, Savings Plans, RIs) and cost-allocation tags. Differentiate billing support plans (Developer vs. Business vs. Enterprise).",
    examRelevance: "Expect about 12% of the exam questions on Billing, Pricing, and Support (Domain 4)."
  }
};

const DEFAULT_STRATEGISTS: Record<number, { keyComparison?: { title: string; headers: string[]; rows: { label: string; values: string[] }[] }; examTricks: string[] }> = {
  1: {
    keyComparison: {
      title: "Value Shift: CapEx vs. OpEx",
      headers: ["Metric", "Capital Expenditures (CapEx)", "Operating Expenditures (OpEx)"],
      rows: [
        { label: "Payment Model", values: ["Upfront, physical investments", "Pay-as-you-go variable bills"] },
        { label: "AWS Advantage", values: ["Eliminated in the cloud", "Pay only for what is consumed"] },
        { label: "Risk Scale", values: ["High (over-provisioning idle disks)", "Low (scale down to zero costs)"] }
      ]
    },
    examTricks: [
      "Agility focuses on the speed of provisioning resources (seconds). Elasticity focuses on matching capacity dynamically with real-time load.",
      "Highly Available systems run in multiple AZs. Fault Tolerant systems can experience hardware death with zero downtime."
    ]
  },
  2: {
    keyComparison: {
      title: "Shared Control: AWS vs. Customer",
      headers: ["Scope", "AWS Demarcation (OF the Cloud)", "Customer Demarcation (IN the Cloud)"],
      rows: [
        { label: "Hardware & Facilities", values: ["Physical security, power, cooling", "Not accessible at all"] },
        { label: "Virtualization / Host OS", values: ["AWS patches hypervisors", "N/A"] },
        { label: "Guest OS / Application", values: ["N/A", "Customer configures, updates, patches"] },
        { label: "Data Encryption & IAM", values: ["N/A", "Customer manages policies, MFA, keys"] }
      ]
    },
    examTricks: [
      "WAF operates at Layer 7 (application) to block SQL injection and cross-site scripting. Shield operates at Layer 3/4 to mitigate massive DDoS network floods.",
      "Inspector scans EC2 instances for software vulnerabilities. GuardDuty performs active intelligent threat detection on network log streams."
    ]
  },
  3: {
    keyComparison: {
      title: "Storage Scope: S3 vs. EBS vs. EFS",
      headers: ["Attribute", "Amazon S3 (Object Storage)", "Amazon EBS (Block Storage)", "Amazon EFS (File Storage)"],
      rows: [
        { label: "Access Level", values: ["Global (Via Web URL APIs)", "Single server mount", "Multiple server mount (Linux)"] },
        { label: "AZ Boundaries", values: ["Regional durability (>3 AZs)", "Locked to 1 AZ", "Regional mount targets"] },
        { label: "Primary Use Case", values: ["Images, backups, static websites", "Database drives, boot drives", "Shared folders, app code drives"] }
      ]
    },
    examTricks: [
      "EC2 Spot instances save up to 90% but can be reclaimed by AWS with a 2-minute notice. Use only for fault-tolerant batch workloads.",
      "Amazon Aurora is fully relational (SQL) but is AWS-proprietary. It is up to 5x faster than standard MySQL."
    ]
  },
  4: {
    keyComparison: {
      title: "Compute Purchases: Spot vs. Reserved vs. On-Demand",
      headers: ["Option", "Spot Instances", "Reserved / Savings Plans", "On-Demand Instances"],
      rows: [
        { label: "Cost Saving", values: ["Up to 90% savings", "Up to 72% savings", "Zero savings"] },
        { label: "Commitment", values: ["None (can be interrupted)", "1-3 Year contract term", "None (hourly billing)"] },
        { label: "Best Suited For", values: ["Batch jobs, temporary worker queues", "Steady-state background DB workloads", "Short, unpredictable traffic tests"] }
      ]
    },
    examTricks: [
      "Technical Account Managers (TAM) and Concierge Support are exclusive benefits of the Enterprise Support plan.",
      "AWS Budgets generates active alerts *before* cost limits are reached. Cost Explorer analyzes cost historical data *after* spending occurs."
    ]
  }
};

function StudyContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Use index-based navigation for the flat module list
  const initialIndex = parseInt(searchParams.get("index") || "0");
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("study-sidebar-collapsed");
    if (saved !== null) {
      setIsSidebarCollapsed(saved === "true");
    }
  }, []);

  const toggleSidebar = () => {
    const nextState = !isSidebarCollapsed;
    setIsSidebarCollapsed(nextState);
    localStorage.setItem("study-sidebar-collapsed", String(nextState));
  };

  useEffect(() => {
    const index = parseInt(searchParams.get("index") || "0");
    setCurrentIndex(index);
    // Close drawer when module changes
    setIsDrawerOpen(false);
  }, [searchParams]);

  const activeModule = allModules[currentIndex];
  // Some data like detailedNotes and diagrams are still on the domain object
  const activeDomain = domainContent[activeModule.domainId!];

  const handleModuleChange = (idx: number) => {
    router.push(`/study?index=${idx}`, { scroll: true });
  };

  // Content selection: custom from DB or fallback preset
  const blueprint = activeModule.blueprint || DEFAULT_BLUEPRINTS[activeModule.domainId!];
  const strategist = activeModule.strategist || DEFAULT_STRATEGISTS[activeModule.domainId!];

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100dvh-64px)] relative">
      {/* Sidebar - Flat Linear List */}
      <aside className={cn(
        "transition-all duration-300 ease-in-out border-zinc-200 bg-white z-20 shrink-0 sticky top-16 overflow-y-auto",
        isSidebarCollapsed 
          ? "w-0 md:w-0 max-h-0 md:max-h-[calc(100dvh-64px)] overflow-hidden opacity-0 border-r-0" 
          : "w-full md:w-80 max-h-[400px] md:max-h-[calc(100dvh-64px)] opacity-100 border-r"
      )}>
        <div className="p-8 border-b border-zinc-100 flex items-center justify-between bg-white/50 backdrop-blur-sm sticky top-0 z-10">
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2">
            <List weight="bold" />
            Curriculum
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-zinc-300 tabular-nums">
              {currentIndex + 1} / {allModules.length}
            </span>
            <button
              onClick={toggleSidebar}
              className="md:hidden p-1 rounded-lg hover:bg-zinc-100 text-zinc-400 hover:text-zinc-900 transition-colors"
              title="Collapse Curriculum"
            >
              <X weight="bold" size={18} />
            </button>
          </div>
        </div>
        <nav className="p-4 space-y-1">
          {allModules.map((module, idx) => (
            <button
              key={idx}
              onClick={() => handleModuleChange(idx)}
              className={cn(
                "w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-4 group",
                currentIndex === idx
                  ? "bg-zinc-950 text-white shadow-xl shadow-zinc-200"
                  : "text-zinc-500 hover:bg-zinc-50"
              )}
            >
              <span className={cn(
                "text-xs font-black tabular-nums transition-colors",
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
        {/* Floating Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          className={cn(
            "fixed z-30 h-10 w-10 flex items-center justify-center rounded-xl bg-white/80 backdrop-blur-md border border-zinc-200/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_12px_rgba(9,9,11,0.05)] text-zinc-500 hover:text-zinc-950 transition-all duration-300 hover:scale-[1.03] active:scale-[0.95] active:translate-y-[1px] cursor-pointer group",
            isSidebarCollapsed 
              ? "left-4 md:left-6 top-20 md:top-[84px] opacity-100" 
              : "hidden md:flex left-[344px] top-[84px]"
          )}
          title={isSidebarCollapsed ? "Show Sidebar" : "Hide Sidebar"}
        >
          {isSidebarCollapsed ? (
            <List weight="bold" size={18} className="text-zinc-700 group-hover:scale-105 transition-transform" />
          ) : (
            <CaretLeft weight="bold" size={18} className="text-zinc-500 group-hover:text-zinc-800 group-hover:-translate-x-0.5 transition-all" />
          )}
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={cn(
              "mx-auto p-8 md:p-16 lg:p-24 transition-all duration-500 ease-in-out",
              isSidebarCollapsed ? "max-w-5xl" : "max-w-4xl"
            )}
          >
            <header className="mb-12 border-b border-zinc-200 pb-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-emerald-500"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-700">
                  {activeModule.domainName}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900 mb-8 leading-[0.9]">
                {activeModule.title}
              </h1>
              <p className={cn(
                "text-zinc-500 leading-relaxed transition-all duration-300",
                isSidebarCollapsed ? "text-xl md:text-2xl max-w-2xl" : "text-xl max-w-xl"
              )}>
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

            {/* Horizontal Bento Blueprint Header */}
            {blueprint && (
              <section className={cn(
                "mb-20 bg-zinc-50 border border-zinc-200/50 rounded-[2.5rem] grid grid-cols-1 md:grid-cols-3 gap-8 shadow-sm transition-all duration-300",
                isSidebarCollapsed ? "p-10 md:gap-10" : "p-8 md:gap-8"
              )}>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-zinc-800">
                    <Target size={18} weight="bold" className="text-zinc-500" />
                    <h4 className="text-xs font-black uppercase tracking-widest">Why it Matters</h4>
                  </div>
                  <p className={cn(
                    "text-zinc-500 leading-relaxed font-semibold transition-all duration-300",
                    isSidebarCollapsed ? "text-xs md:text-sm" : "text-xs"
                  )}>
                    {blueprint.whyItMatters}
                  </p>
                </div>
                
                <div className={cn(
                  "space-y-3 md:border-x md:border-zinc-200/60 transition-all duration-300",
                  isSidebarCollapsed ? "md:px-10" : "md:px-8"
                )}>
                  <div className="flex items-center gap-2 text-zinc-800">
                    <BookOpen size={18} weight="bold" className="text-zinc-500" />
                    <h4 className="text-xs font-black uppercase tracking-widest">How to Study</h4>
                  </div>
                  <p className={cn(
                    "text-zinc-500 leading-relaxed font-semibold transition-all duration-300",
                    isSidebarCollapsed ? "text-xs md:text-sm" : "text-xs"
                  )}>
                    {blueprint.howToStudy}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-zinc-800">
                    <GraduationCap size={18} weight="bold" className="text-zinc-500" />
                    <h4 className="text-xs font-black uppercase tracking-widest">Exam Focus</h4>
                  </div>
                  <p className={cn(
                    "text-zinc-500 leading-relaxed font-semibold transition-all duration-300",
                    isSidebarCollapsed ? "text-xs md:text-sm" : "text-xs"
                  )}>
                    {blueprint.examRelevance}
                  </p>
                </div>
              </section>
            )}

            <div className="space-y-32">
              {activeModule.sections?.map((section, sIdx) => (
                <section key={sIdx} className="space-y-12">
                  <h2 className="text-sm font-black uppercase tracking-[0.3em] text-zinc-400 border-l-2 border-zinc-200 pl-4">
                    {section.title}
                  </h2>
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 }
                      }
                    }}
                    initial="hidden"
                    animate="show"
                    className="divide-y divide-zinc-100"
                  >
                    {section.items.map((item, iIdx) => (
                      <motion.div 
                        key={iIdx}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          show: { opacity: 1, y: 0 }
                        }}
                        className="group grid grid-cols-1 md:grid-cols-12 gap-8 py-12 first:pt-0 last:pb-0 transition-colors"
                      >
                        <div className="md:col-span-4 flex flex-col items-start gap-2">
                          <span className={cn(
                            "inline-flex items-center px-4 py-2 rounded-xl bg-zinc-50 border border-zinc-200/50 font-mono font-bold tracking-tight text-zinc-600 transition-all group-hover:bg-emerald-50 group-hover:border-emerald-200 group-hover:text-emerald-700 shadow-sm",
                            isSidebarCollapsed ? "text-sm md:text-base" : "text-sm"
                          )}>
                            {item.term}
                          </span>
                          {item.keyWords && item.keyWords.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mt-1 max-w-[240px]">
                              {item.keyWords.map((kw, kwIdx) => (
                                <span key={kwIdx} className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-zinc-100/80 text-zinc-500 border border-zinc-200/30 font-mono">
                                  {kw}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="md:col-span-8 space-y-6">
                          <p className={cn(
                            "text-zinc-700 leading-relaxed transition-all duration-300",
                            isSidebarCollapsed ? "text-xl md:text-[22px] md:leading-relaxed text-zinc-800 max-w-[65ch]" : "text-xl max-w-[55ch]"
                          )}>
                            {item.focus || item.def}
                          </p>

                          {/* Dynamic How & Why Grid */}
                          {(item.howItWorks || item.whyItMatters) && (
                            <div className={cn(
                              "grid grid-cols-1 sm:grid-cols-2 gap-6 bg-zinc-50/50 border border-zinc-100 p-6 rounded-2xl transition-all duration-300",
                              isSidebarCollapsed ? "p-8 gap-8" : "p-6 gap-6"
                            )}>
                              {item.howItWorks && (
                                <div className="space-y-2">
                                  <div className="flex items-center gap-1.5 text-zinc-400 font-bold uppercase tracking-widest text-[9px]">
                                    <Cpu size={12} />
                                    <span>Under The Hood</span>
                                  </div>
                                  <p className={cn(
                                    "text-zinc-600 leading-relaxed font-semibold transition-all duration-300",
                                    isSidebarCollapsed ? "text-xs md:text-sm" : "text-xs"
                                  )}>
                                    {item.howItWorks}
                                  </p>
                                </div>
                              )}
                              {item.whyItMatters && (
                                <div className="space-y-2">
                                  <div className="flex items-center gap-1.5 text-zinc-400 font-bold uppercase tracking-widest text-[9px]">
                                    <Lightbulb size={12} />
                                    <span>Why AWS Built It</span>
                                  </div>
                                  <p className={cn(
                                    "text-zinc-600 leading-relaxed font-semibold transition-all duration-300",
                                    isSidebarCollapsed ? "text-xs md:text-sm" : "text-xs"
                                  )}>
                                    {item.whyItMatters}
                                  </p>
                                </div>
                              )}
                            </div>
                          )}

                          <div className={cn(
                            "border-l-2 border-emerald-100 pl-6 py-3 bg-emerald-50/20 rounded-r-2xl transition-all duration-300",
                            isSidebarCollapsed ? "pl-8 py-4" : "pl-6 py-3"
                          )}>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 block mb-2">Practical Case</span>
                            <p className={cn(
                              "text-zinc-600 italic leading-relaxed transition-all duration-300",
                              isSidebarCollapsed ? "text-base md:text-lg" : "text-base"
                            )}>
                              {item.example}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </section>
              ))}

              {activeModule.customHtml && (
                <div 
                  className="prose prose-zinc max-w-none editorial-custom-html pt-12 border-t border-zinc-100"
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

        {/* Floating Capsule Button to Toggle Strategist Drawer */}
        {strategist && (
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="fixed bottom-8 right-8 z-40 bg-zinc-950 text-white rounded-full px-6 py-4 flex items-center gap-2 hover:bg-zinc-800 border border-white/10 shadow-2xl active:scale-95 transition-all scale-105 pointer-events-auto cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <Lightning weight="fill" className="text-emerald-400" size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest">Exam Strategist</span>
          </button>
        )}

        {/* Sliding Strategist Drawer */}
        <AnimatePresence>
          {isDrawerOpen && strategist && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsDrawerOpen(false)}
                className="fixed inset-0 z-45 bg-black/60 backdrop-blur-xs cursor-pointer"
              />

              {/* Drawer Container */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 220, damping: 26 }}
                className="w-full sm:w-[500px] h-screen fixed top-0 right-0 z-50 bg-zinc-950 text-white shadow-2xl border-l border-white/10 overflow-y-auto p-8 md:p-10 flex flex-col justify-between"
              >
                <div>
                  {/* Drawer Header */}
                  <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-white/5 text-emerald-400 border border-white/10">
                        <ShieldCheck size={18} weight="bold" />
                      </div>
                      <div>
                        <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Study Strategy</h4>
                        <p className="text-xs font-black text-white">Strategist Console</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsDrawerOpen(false)}
                      className="h-8 w-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 active:scale-90 transition-all text-zinc-400 hover:text-white"
                    >
                      <X size={14} weight="bold" />
                    </button>
                  </div>

                  {/* Confusable Comparison Table */}
                  {strategist.keyComparison && (
                    <div className="space-y-4 mb-10">
                      <h5 className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
                        {strategist.keyComparison.title}
                      </h5>
                      <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]">
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs">
                            <thead>
                              <tr className="bg-white/[0.03] border-b border-white/10">
                                {strategist.keyComparison.headers.map((header, hIdx) => (
                                  <th key={hIdx} className="px-4 py-3 font-black text-[9px] uppercase tracking-wider text-zinc-400 first:pl-5 last:pr-5">
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                              {strategist.keyComparison.rows.map((row, rIdx) => (
                                <tr key={rIdx} className="hover:bg-white/[0.01] transition-colors">
                                  <td className="px-4 py-3 font-bold text-white pl-5 bg-white/[0.01]">
                                    {row.label}
                                  </td>
                                  {row.values.map((val, vIdx) => (
                                    <td key={vIdx} className="px-4 py-3 text-zinc-400 leading-normal last:pr-5">
                                      {val}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Exam Tricks and Gotchas */}
                  <div className="space-y-4">
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
                      Candidate Gotchas & Exam Traps
                    </h5>
                    <div className="space-y-3">
                      {strategist.examTricks.map((trick, tIdx) => (
                        <div 
                          key={tIdx}
                          className="p-4 rounded-xl bg-white/5 border border-white/5 text-zinc-300 text-xs leading-relaxed flex items-start gap-3 hover:border-white/10 transition-colors"
                        >
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"></span>
                          <span>{trick}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Drawer Footer info */}
                <div className="pt-6 border-t border-white/10 mt-12 flex items-center justify-between text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                  <span>Domain {activeModule.domainId} Strategist Console</span>
                  <button 
                    onClick={() => setIsDrawerOpen(false)}
                    className="hover:text-white transition-colors"
                  >
                    Dismiss
                  </button>
                </div>
              </motion.div>
            </>
          )}
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
