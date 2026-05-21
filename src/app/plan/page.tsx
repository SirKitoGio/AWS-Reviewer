"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { PageContainer } from "@/components/PageContainer";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Lightning, 
  BookOpen, 
  GraduationCap, 
  CheckCircle, 
  Calendar, 
  ArrowRight, 
  Clock, 
  Target, 
  Sparkle, 
  ArrowClockwise,
  ListChecks,
  Check
} from "@phosphor-icons/react";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 12-Day Study Plan Configuration
export interface StudyTask {
  id: string;
  label: string;
  route: string;
  type: "study" | "quiz" | "tips";
}

export interface StudyDay {
  day: number;
  title: string;
  domainName: string;
  domainId: number;
  focus: string;
  tasks: StudyTask[];
}

const STUDY_DAYS: StudyDay[] = [
  {
    day: 1,
    title: "Security & Shared Controls",
    domainName: "Security and Compliance",
    domainId: 2,
    focus: "Master the division of labor between AWS and Customer, and learn how physical compliance fits the model.",
    tasks: [
      { id: "d1-t1", label: "Study Module 9: Shared Responsibility Model", route: "/study?index=8", type: "study" },
      { id: "d1-t2", label: "Drill 25 Domain 2 Practice Questions", route: "/quiz?domain=2&limit=25", type: "quiz" }
    ]
  },
  {
    day: 2,
    title: "Access Control & Auditing",
    domainName: "Security and Compliance",
    domainId: 2,
    focus: "Understand IAM components (Users, Groups, Roles, Policies) and basic compliance/auditing tools.",
    tasks: [
      { id: "d2-t1", label: "Study Module 10: Access Control & IAM", route: "/study?index=9", type: "study" },
      { id: "d2-t2", label: "Study Module 11: Security & Compliance Tools", route: "/study?index=10", type: "study" },
      { id: "d2-t3", label: "Drill 25 Domain 2 Practice Questions", route: "/quiz?domain=2&limit=25", type: "quiz" }
    ]
  },
  {
    day: 3,
    title: "Data Protection & Network Security",
    domainName: "Security and Compliance",
    domainId: 2,
    focus: "Differentiate network firewalls (WAF vs. Shield vs. Security Groups) and basic data encryption.",
    tasks: [
      { id: "d3-t1", label: "Study Module 12: Network Security & Firewalls", route: "/study?index=11", type: "study" },
      { id: "d3-t2", label: "Review Domain 2 Exam Tips", route: "/tips", type: "tips" },
      { id: "d3-t3", label: "Take 50-Question Domain 2 Practice Test", route: "/quiz?domain=2&limit=50", type: "quiz" }
    ]
  },
  {
    day: 4,
    title: "AWS Compute Solutions",
    domainName: "Cloud Technology and Services",
    domainId: 3,
    focus: "Understand core compute choices: virtual servers (EC2), serverless (Lambda), containers (ECS/EKS/Fargate), and deployment tools.",
    tasks: [
      { id: "d4-t1", label: "Study Module 2: Elastic Compute Cloud (EC2)", route: "/study?index=1", type: "study" },
      { id: "d4-t2", label: "Study Module 3: Serverless & Containers (Lambda, Fargate)", route: "/study?index=2", type: "study" },
      { id: "d4-t3", label: "Drill 25 Domain 3 Practice Questions", route: "/quiz?domain=3&limit=25", type: "quiz" }
    ]
  },
  {
    day: 5,
    title: "Storage & File Systems",
    domainName: "Cloud Technology and Services",
    domainId: 3,
    focus: "Differentiate S3 classes, Block Storage (EBS vs. Instance Store), and shared file systems (EFS).",
    tasks: [
      { id: "d5-t1", label: "Study Module 5: Storage Services (S3, EBS, EFS)", route: "/study?index=4", type: "study" },
      { id: "d5-t2", label: "Drill 25 Domain 3 Practice Questions", route: "/quiz?domain=3&limit=25", type: "quiz" }
    ]
  },
  {
    day: 6,
    title: "AWS Database Offerings",
    domainName: "Cloud Technology and Services",
    domainId: 3,
    focus: "Compare Relational (RDS, Aurora), NoSQL (DynamoDB), In-Memory (ElastiCache), and Columnar/OLAP (Redshift).",
    tasks: [
      { id: "d6-t1", label: "Study Module 6: Database Services", route: "/study?index=5", type: "study" },
      { id: "d6-t2", label: "Drill 25 Domain 3 Practice Questions", route: "/quiz?domain=3&limit=25", type: "quiz" }
    ]
  },
  {
    day: 7,
    title: "Networking & CDNs",
    domainName: "Cloud Technology and Services",
    domainId: 3,
    focus: "Master VPC, Subnets, Gateways, Route 53, and Global Content Delivery (CloudFront).",
    tasks: [
      { id: "d7-t1", label: "Study Module 4: Networking & VPC", route: "/study?index=3", type: "study" },
      { id: "d7-t2", label: "Study Module 7: Integration & CDNs", route: "/study?index=6", type: "study" },
      { id: "d7-t3", label: "Take 50-Question Domain 3 Practice Test", route: "/quiz?domain=3&limit=50", type: "quiz" }
    ]
  },
  {
    day: 8,
    title: "Cloud Value & Frameworks",
    domainName: "Cloud Concepts",
    domainId: 1,
    focus: "Define high availability, elasticity, agility, economies of scale, and the 6 Well-Architected Pillars.",
    tasks: [
      { id: "d8-t1", label: "Study Module 1: Introduction to the Cloud & Economics", route: "/study?index=0", type: "study" },
      { id: "d8-t2", label: "Study Module 14: Well-Architected Solutions", route: "/study?index=13", type: "study" },
      { id: "d8-t3", label: "Drill 25 Domain 1 Practice Questions", route: "/quiz?domain=1&limit=25", type: "quiz" }
    ]
  },
  {
    day: 9,
    title: "Migration & Service Scopes",
    domainName: "Cloud Concepts",
    domainId: 1,
    focus: "Master the 7 R's of migration, AWS CAF Perspectives, design principles, and Global vs. Regional service scopes.",
    tasks: [
      { id: "d9-t1", label: "Study Module 13: Migrating to the AWS Cloud (CAF)", route: "/study?index=12", type: "study" },
      { id: "d9-t2", label: "Study Module 15: Core Infrastructure & Design Principles", route: "/study?index=14", type: "study" },
      { id: "d9-t3", label: "Take 50-Question Domain 1 Practice Test", route: "/quiz?domain=1&limit=50", type: "quiz" }
    ]
  },
  {
    day: 10,
    title: "Pricing, consolidated Billing & Support",
    domainName: "Billing, Pricing, and Support",
    domainId: 4,
    focus: "Understand purchasing options (On-Demand, Savings Plans, RIs, Spot), cost analysis, and support tiers.",
    tasks: [
      { id: "d10-t1", label: "Study Module 11: Pricing Models & Budgets", route: "/study?index=10", type: "study" },
      { id: "d10-t2", label: "Study Module 12: Cost Tools & Consolidated Billing", route: "/study?index=11", type: "study" },
      { id: "d10-t3", label: "Study Module 15: Crucial Service Comparisons & Support", route: "/study?index=14", type: "study" },
      { id: "d10-t4", label: "Take 30-Question Domain 4 Practice Test", route: "/quiz?domain=4&limit=30", type: "quiz" }
    ]
  },
  {
    day: 11,
    title: "Active Practice Integration",
    domainName: "All Domains",
    domainId: 0,
    focus: "Identify performance gaps through mixed domain testing and study failed targets.",
    tasks: [
      { id: "d11-t1", label: "Complete 1st Full Mock Exam (65 Random Questions)", route: "/quiz", type: "quiz" },
      { id: "d11-t2", label: "Deep review of incorrect questions using the diagnostic report", route: "/quiz", type: "study" }
    ]
  },
  {
    day: 12,
    title: "Exam Readiness Polish",
    domainName: "All Domains",
    domainId: 0,
    focus: "Conduct final high-velocity tip reviews and lock in maximum scores.",
    tasks: [
      { id: "d12-t1", label: "Complete 2nd Full Mock Exam (65 Random Questions)", route: "/quiz", type: "quiz" },
      { id: "d12-t2", label: "Review All Key Tip Glossaries", route: "/tips", type: "tips" }
    ]
  }
];

export default function StudyPlan() {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);
  const [isMounted, setIsMounted] = useState(false);

  // 1. Initial State Loading & Hydration Safe Guard
  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("aws-ccp-completed-tasks");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setCompletedTasks(parsed);
          
          // Auto-calculate current recommended active day index
          const activeIndex = STUDY_DAYS.findIndex(day => 
            day.tasks.some(task => !parsed.includes(task.id))
          );
          setSelectedDayIndex(activeIndex === -1 ? STUDY_DAYS.length - 1 : activeIndex);
        }
      } catch (e) {
        console.error("Error reading study progress", e);
      }
    }
  }, []);

  // 2. Task Toggle Logic
  const toggleTask = (taskId: string) => {
    const next = completedTasks.includes(taskId)
      ? completedTasks.filter(id => id !== taskId)
      : [...completedTasks, taskId];
    
    setCompletedTasks(next);
    localStorage.setItem("aws-ccp-completed-tasks", JSON.stringify(next));
  };

  // 3. Reset Handler
  const resetProgress = () => {
    if (window.confirm("Are you sure you want to reset all study progress? This action is permanent.")) {
      setCompletedTasks([]);
      localStorage.removeItem("aws-ccp-completed-tasks");
      setSelectedDayIndex(0);
    }
  };

  // 4. Global Metrics Computation
  const allTasks = STUDY_DAYS.flatMap(d => d.tasks);
  const totalTasksCount = allTasks.length;
  const completedTasksCount = allTasks.filter(t => completedTasks.includes(t.id)).length;
  const overallProgressPercentage = totalTasksCount > 0 
    ? Math.round((completedTasksCount / totalTasksCount) * 100) 
    : 0;

  // Active Recommended Index
  const currentRecommendedIndex = STUDY_DAYS.findIndex(day => 
    day.tasks.some(task => !completedTasks.includes(task.id))
  ) === -1 ? STUDY_DAYS.length - 1 : STUDY_DAYS.findIndex(day => 
    day.tasks.some(task => !completedTasks.includes(task.id))
  );

  const selectedDay = STUDY_DAYS[selectedDayIndex];

  // Helper to determine day completion status
  const isDayCompleted = (dayObj: StudyDay) => {
    return dayObj.tasks.every(task => completedTasks.includes(task.id));
  };

  // Check task type for appropriate styling/icon
  const getTaskIcon = (type: "study" | "quiz" | "tips") => {
    switch (type) {
      case "study": return BookOpen;
      case "quiz": return GraduationCap;
      case "tips": return Sparkle;
      default: return BookOpen;
    }
  };

  // Hydration state check - renders a sophisticated skeleton loading deck
  if (!isMounted) {
    return (
      <>
        <Navigation />
        <PageContainer>
          <div className="space-y-8 animate-pulse mt-12 max-w-7xl mx-auto">
            <div className="h-10 bg-zinc-100 rounded-2xl w-1/3"></div>
            <div className="h-4 bg-zinc-100 rounded-xl w-1/2"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 h-80 bg-zinc-100 rounded-[2.5rem]"></div>
              <div className="lg:col-span-4 h-80 bg-zinc-100 rounded-[2.5rem]"></div>
            </div>
          </div>
        </PageContainer>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <PageContainer>
        <div className="max-w-7xl mx-auto py-8">
          
          {/* Section 1: Asymmetric Header & Global Progress Bento Deck */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 ring-1 ring-inset ring-emerald-600/20 uppercase tracking-widest">
                  Active Recall Strategy
                </span>
                <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold text-zinc-600 ring-1 ring-inset ring-zinc-500/10 uppercase tracking-widest">
                  12-Day Sprint
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter leading-none text-zinc-900 mb-4">
                12-Day Study Planner
              </h1>
              <p className="text-sm md:text-base text-zinc-500 max-w-[55ch] leading-relaxed font-medium">
                This study plan prioritizes high-weight domains (Technology & Security) first to maximize prep velocity, followed by a targeted diagnostic review loop.
              </p>
            </div>

            {/* Overall Progress Gauge Widget (Bento Style) */}
            <div className="lg:col-span-5 w-full bg-white border border-zinc-200/70 p-6 rounded-[2.5rem] shadow-sm shadow-zinc-100/50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <ListChecks size={18} weight="bold" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Roadmap Progress</h4>
                    <p className="text-[11px] font-black text-zinc-900">{completedTasksCount} of {totalTasksCount} Targets Met</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-emerald-600 tabular-nums">
                    {overallProgressPercentage}%
                  </span>
                </div>
              </div>

              {/* Progress Slider Track */}
              <div className="h-3 w-full bg-zinc-100 rounded-full overflow-hidden mb-4 border border-zinc-200/20">
                <motion.div 
                  className="h-full bg-emerald-600"
                  initial={{ width: 0 }}
                  animate={{ width: `${overallProgressPercentage}%` }}
                  transition={{ type: "spring", stiffness: 80, damping: 20 }}
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                  Recommended: Day {currentRecommendedIndex + 1}
                </span>
                <button
                  onClick={resetProgress}
                  className="inline-flex items-center gap-1 text-[10px] text-zinc-400 font-bold uppercase tracking-widest hover:text-red-600 active:scale-95 transition-all"
                >
                  <ArrowClockwise size={12} weight="bold" />
                  Reset Plan
                </button>
              </div>
            </div>
          </div>

          {/* Section 2: Active Day Focus & Checklist Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            
            {/* Left Box: Staggered Checklist Grid (Asymmetric Bento) */}
            <div className="lg:col-span-8 bg-zinc-950 p-8 md:p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[420px]">
              
              {/* Refractive Inner Top Ambient Light */}
              <div className="absolute top-0 left-0 right-0 h-px bg-white/10"></div>
              
              <div>
                {/* Active Indicator Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px] font-black uppercase tracking-widest">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      Focus Day {selectedDay.day}
                    </span>
                    {selectedDayIndex === currentRecommendedIndex && (
                      <span className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[9px] font-bold text-zinc-300 uppercase tracking-widest">
                        Recommended
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                    <Clock size={12} />
                    {selectedDay.domainName}
                  </span>
                </div>

                {/* Day Header */}
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-3">
                  {selectedDay.title}
                </h2>
                <p className="text-zinc-400 text-xs md:text-sm font-medium leading-relaxed max-w-[65ch] mb-8">
                  {selectedDay.focus}
                </p>

                {/* Staggered Tasks Checklist */}
                <div className="space-y-3.5 mb-8">
                  {selectedDay.tasks.map((task) => {
                    const isTaskDone = completedTasks.includes(task.id);
                    const TaskIcon = getTaskIcon(task.type);
                    
                    return (
                      <div 
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        className="group flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 cursor-pointer transition-all active:scale-[0.99]"
                      >
                        <div className="flex items-center justify-center mt-0.5">
                          <button
                            className={cn(
                              "h-5.5 w-5.5 flex items-center justify-center rounded-lg border transition-all pointer-events-none",
                              isTaskDone 
                                ? "bg-emerald-500 border-emerald-500 text-zinc-950 scale-105" 
                                : "border-white/20 bg-transparent text-transparent group-hover:border-white/40"
                            )}
                          >
                            <Check weight="bold" size={12} />
                          </button>
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className={cn(
                            "text-xs font-bold leading-normal transition-all duration-300",
                            isTaskDone ? "text-zinc-500 line-through" : "text-zinc-200"
                          )}>
                            {task.label}
                          </p>
                        </div>

                        <div className="shrink-0 flex items-center justify-center h-6 w-6 rounded-lg bg-white/5 text-zinc-500 group-hover:text-emerald-400 transition-colors">
                          <TaskIcon size={14} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Day CTA Actions */}
              <div className="flex flex-wrap gap-4 border-t border-white/5 pt-6 mt-4">
                {selectedDay.tasks.slice(0, 2).map((task, idx) => {
                  const TaskIcon = getTaskIcon(task.type);
                  return (
                    <Link
                      key={task.id + idx}
                      href={task.route}
                      className={cn(
                        "inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all hover:gap-3 active:scale-95",
                        idx === 0 
                          ? "bg-white text-zinc-950 hover:bg-zinc-100" 
                          : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                      )}
                    >
                      <span>Launch: {task.type === "study" ? "Study Module" : "Practice Quiz"}</span>
                      <ArrowRight weight="bold" size={10} />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right Box: Quick Focus Rules & Metric (Bento Card Archetype 2) */}
            <div className="lg:col-span-4 bg-white border border-zinc-200/70 p-8 rounded-[3rem] shadow-sm flex flex-col justify-between">
              <div>
                <div className="mb-6 h-10 w-10 flex items-center justify-center rounded-2xl bg-zinc-50 text-zinc-400">
                  <Target size={20} weight="bold" />
                </div>
                <h3 className="text-lg font-black tracking-tight text-zinc-900 mb-3">Target Rules</h3>
                <p className="text-zinc-500 text-xs font-semibold leading-relaxed mb-6">
                  Maintain these standards to secure your certification on a tight timeline:
                </p>
                <ul className="space-y-4 text-xs font-medium text-zinc-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"></span>
                    <span><strong>Active Recall Only:</strong> Never passively read. If you read a module, toggle the task and drill the practice questions immediately.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"></span>
                    <span><strong>Mistake Synthesis:</strong> Spend double the time studying questions you missed compared to questions you got right.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"></span>
                    <span><strong>Weight Efficiency:</strong> Do not guess. If your diagnostic score is below 80% on a domain, repeat its module blocks.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center gap-4">
                <div className="h-10 w-10 shrink-0 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Sparkle size={18} weight="bold" />
                </div>
                <div>
                  <h4 className="text-[9px] font-black uppercase tracking-wider text-zinc-400">Daily Tip</h4>
                  <p className="text-[11px] font-bold text-zinc-700 leading-tight">Focus on Domain 2 (Security) & Domain 3 (Tech) to secure 64% of exam weight first!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Interactive 12-Day Grid Timeline */}
          <div>
            <div className="flex items-baseline justify-between mb-8 border-b border-zinc-100 pb-4">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Sprint Timeline</h3>
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Click a day to view target details</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {STUDY_DAYS.map((dayObj, idx) => {
                const isActive = selectedDayIndex === idx;
                const isCompleted = isDayCompleted(dayObj);
                const isRecommended = currentRecommendedIndex === idx;

                return (
                  <motion.div
                    key={dayObj.day}
                    onClick={() => setSelectedDayIndex(idx)}
                    whileHover={{ y: -4, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className={cn(
                      "group p-6 rounded-[2.5rem] border cursor-pointer transition-all relative flex flex-col justify-between h-48",
                      isActive 
                        ? "bg-zinc-950 border-zinc-950 text-white shadow-xl shadow-zinc-900/10" 
                        : isCompleted
                          ? "bg-[#768A76]/10 border-slate-200/50 hover:bg-[#768A76]/15 hover:shadow-md"
                          : "bg-white border-zinc-200/70 hover:shadow-md hover:border-zinc-300"
                    )}
                  >
                    {/* Top line indices */}
                    <div className="flex items-center justify-between">
                      <span className={cn(
                        "text-3xl font-black tabular-nums transition-colors",
                        isActive ? "text-zinc-800" : isCompleted ? "text-[#768A76]/45" : "text-zinc-100 group-hover:text-zinc-200"
                      )}>
                        {String(dayObj.day).padStart(2, '0')}
                      </span>

                      {/* Micro Badge state indicators */}
                      {isCompleted ? (
                        <div className="h-6 w-6 flex items-center justify-center rounded-full bg-[#768A76]/20 text-[#768A76]">
                          <CheckCircle size={14} weight="fill" />
                        </div>
                      ) : isRecommended ? (
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                      ) : null}
                    </div>

                    {/* Middle details */}
                    <div>
                      <div className={cn(
                        "text-[9px] font-black uppercase tracking-widest mb-1",
                        isActive ? "text-emerald-400" : "text-zinc-400"
                      )}>
                        Domain {dayObj.domainId > 0 ? dayObj.domainId : "Mixed"}
                      </div>
                      <h4 className={cn(
                        "text-xs font-black tracking-tight leading-snug line-clamp-2",
                        isActive ? "text-white" : "text-zinc-900"
                      )}>
                        {dayObj.title}
                      </h4>
                    </div>

                    {/* Footer completion checklist numbers */}
                    <div className="flex items-center justify-between border-t border-zinc-100/10 pt-3">
                      <span className={cn(
                        "text-[9px] font-bold uppercase tracking-wider",
                        isActive ? "text-zinc-500" : "text-zinc-400"
                      )}>
                        {dayObj.tasks.filter(t => completedTasks.includes(t.id)).length} of {dayObj.tasks.length} Completed
                      </span>
                      <ArrowRight 
                        size={10} 
                        weight="bold" 
                        className={cn(
                          "transition-transform group-hover:translate-x-1",
                          isActive ? "text-white" : "text-zinc-300 group-hover:text-zinc-900"
                        )} 
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
