"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { PageContainer } from "@/components/PageContainer";
import { allQuestions, Question } from "@/data";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight, ArrowLeft, Trophy, ArrowsClockwise, House } from "@phosphor-icons/react";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function QuizContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const domainId = searchParams.get("domain");
  const limit = searchParams.get("limit") ? parseInt(searchParams.get("limit")!) : null;

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const pool = domainId 
      ? allQuestions.filter(q => q.domain === parseInt(domainId))
      : allQuestions;
    
    let shuffled = [...pool].sort(() => Math.random() - 0.5);
    if (limit) shuffled = shuffled.slice(0, limit);
    
    setQuestions(shuffled);
  }, [domainId, limit]);

  if (questions.length === 0) return null;

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  const handleOptionClick = (idx: number) => {
    if (isAnswered) return;

    if (currentQuestion.multi) {
      if (selectedOptions.includes(idx)) {
        setSelectedOptions(selectedOptions.filter(i => i !== idx));
      } else if (selectedOptions.length < 2) {
        setSelectedOptions([...selectedOptions, idx]);
      }
    } else {
      setSelectedOptions([idx]);
    }
  };

  const checkAnswer = () => {
    if (currentQuestion.multi) {
      const correct = currentQuestion.correct as number[];
      return (
        selectedOptions.length === correct.length &&
        selectedOptions.every(val => correct.includes(val))
      );
    }
    return selectedOptions[0] === currentQuestion.correct;
  };

  const handleSubmit = () => {
    if (isAnswered) {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
        setSelectedOptions([]);
        setIsAnswered(false);
      } else {
        setShowResults(true);
      }
    } else {
      setIsAnswered(true);
      if (checkAnswer()) {
        setScore(score + 1);
      }
    }
  };

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 70;

    return (
      <PageContainer size="narrow" className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-zinc-100 text-zinc-900">
              <Trophy size={48} weight="duotone" />
            </div>
            <h1 className="text-5xl font-black tracking-tighter">
              {passed ? "CONGRATULATIONS" : "KEEP PUSHING"}
            </h1>
            <p className="text-zinc-500 text-lg">
              You&apos;ve completed the {domainId ? `Domain ${domainId} Quiz` : "Full Practice Exam"}.
            </p>
          </div>

          <div className="p-12 rounded-[3rem] bg-white border border-zinc-200 shadow-2xl shadow-zinc-200/50">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-4">Final Score</div>
            <div className={cn(
              "text-8xl font-black tracking-tighter mb-4 tabular-nums",
              passed ? "text-emerald-600" : "text-zinc-900"
            )}>
              {percentage}%
            </div>
            <p className="text-zinc-500 font-medium">
              {score} out of {questions.length} correct
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
             <button 
               onClick={() => window.location.reload()}
               className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-10 py-5 text-sm font-bold text-white transition-all hover:bg-zinc-800 active:scale-95"
             >
               <ArrowsClockwise weight="bold" />
               Try Again
             </button>
             <Link
               href="/"
               className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-10 py-5 text-sm font-bold text-zinc-900 transition-all hover:bg-zinc-50 active:scale-95"
             >
               <House weight="bold" />
               Back Home
             </Link>
          </div>
        </motion.div>
      </PageContainer>
    );
  }

  return (
    <>
      <div className="h-1 bg-zinc-100 sticky top-16 z-30">
        <motion.div 
          className="h-full bg-emerald-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <PageContainer size="narrow">
        <div className="mb-12 flex items-center justify-between">
           <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">
             Question {currentIndex + 1} / {questions.length}
           </span>
           <div className="flex gap-2">
             <span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
               Domain {currentQuestion.domain}
             </span>
             {currentQuestion.multi && (
               <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 uppercase tracking-widest ring-1 ring-inset ring-emerald-600/20">
                 Choose Two
               </span>
             )}
           </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="space-y-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 leading-tight">
              {currentQuestion.question}
            </h2>

            <div className="space-y-3">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedOptions.includes(idx);
                const isCorrect = Array.isArray(currentQuestion.correct) 
                  ? currentQuestion.correct.includes(idx)
                  : currentQuestion.correct === idx;
                
                let state: "default" | "selected" | "correct" | "wrong" = "default";
                if (isAnswered) {
                  if (isCorrect) state = "correct";
                  else if (isSelected) state = "wrong";
                } else if (isSelected) {
                  state = "selected";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(idx)}
                    disabled={isAnswered}
                    className={cn(
                      "w-full text-left p-6 rounded-2xl border-2 transition-all flex items-start gap-4 group relative overflow-hidden",
                      state === "default" && "border-zinc-100 bg-white hover:border-zinc-300",
                      state === "selected" && "border-zinc-900 bg-zinc-900 text-white shadow-xl shadow-zinc-200",
                      state === "correct" && "border-emerald-500 bg-emerald-50 text-emerald-900",
                      state === "wrong" && "border-red-200 bg-red-50 text-red-900 opacity-70"
                    )}
                  >
                    <span className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold transition-colors",
                      state === "default" && "border-zinc-200 text-zinc-400 group-hover:border-zinc-400 group-hover:text-zinc-600",
                      state === "selected" && "border-zinc-700 bg-zinc-800 text-white",
                      state === "correct" && "border-emerald-600 bg-emerald-600 text-white",
                      state === "wrong" && "border-red-400 bg-red-400 text-white"
                    )}>
                      {state === "correct" ? <Check weight="bold" /> : state === "wrong" ? <X weight="bold" /> : String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-base font-semibold leading-snug">{option}</span>
                    
                    {!isAnswered && state === "default" && (
                       <motion.div 
                         className="absolute inset-0 bg-zinc-50 -z-10"
                         initial={{ x: "-100%" }}
                         whileHover={{ x: 0 }}
                         transition={{ duration: 0.3 }}
                       />
                    )}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 rounded-3xl bg-zinc-950 text-white space-y-4 shadow-2xl shadow-zinc-300"
              >
                <div className="flex items-center gap-2">
                  <div className={cn(
                    "h-2 w-2 rounded-full",
                    checkAnswer() ? "bg-emerald-500" : "bg-red-500"
                  )} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">
                    {checkAnswer() ? "Correct Insight" : "Learning Opportunity"}
                  </span>
                </div>
                <p className="text-lg text-zinc-300 leading-relaxed font-medium">
                  {currentQuestion.explanation}
                </p>
              </motion.div>
            )}

            <div className="flex justify-between items-center pt-8 border-t border-zinc-100">
              <button
                onClick={() => router.push("/")}
                className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors flex items-center gap-2"
              >
                <ArrowLeft weight="bold" />
                Quit Session
              </button>
              <button
                onClick={handleSubmit}
                disabled={selectedOptions.length === 0 && !isAnswered}
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-10 py-5 text-sm font-bold text-white transition-all active:scale-95 disabled:opacity-20",
                  isAnswered ? "bg-emerald-600 hover:bg-emerald-700" : "hover:bg-zinc-800"
                )}
              >
                {isAnswered 
                  ? (currentIndex + 1 === questions.length ? "Finish Exam" : "Next Question") 
                  : "Submit Answer"}
                <ArrowRight weight="bold" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </PageContainer>
    </>
  );
}

export default function QuizPage() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div className="flex items-center justify-center h-screen bg-zinc-50"><div className="h-8 w-8 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div></div>}>
        <QuizContent />
      </Suspense>
    </>
  );
}
