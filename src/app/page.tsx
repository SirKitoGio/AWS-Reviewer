import { Navigation } from "@/components/Navigation";
import { PageContainer } from "@/components/PageContainer";
import { allModules, examTips, allQuestions } from "@/data";
import { ArrowRight, Lightning, BookmarkSimple, CloudCheck } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navigation />
      <PageContainer>
        {/* Asymmetric Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-32">
          <div className="md:col-span-7">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 ring-1 ring-inset ring-emerald-600/20 uppercase tracking-widest">
                CLF-C02 Ready
              </span>
              <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold text-zinc-600 ring-1 ring-inset ring-zinc-500/10 uppercase tracking-widest">
                {allQuestions.length} Questions
              </span>
            </div>
            <h1 className="mb-6">
              AWS Certified <br />
              <span className="text-zinc-500">Cloud Practitioner</span>
            </h1>
            <p className="text-xl text-zinc-500 mb-10 max-w-[50ch] leading-relaxed">
              Developed by Keith Speirs using gemini-cli with Skill Taste for the sole purpose of reviewing. Mastery achieved through 15 focused modules and comprehensive practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quiz"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-zinc-800 hover:gap-3 active:scale-95 shadow-xl shadow-zinc-200"
              >
                Full Practice Exam
                <ArrowRight weight="bold" />
              </Link>
              <Link
                href="/study"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-8 py-4 text-sm font-bold text-zinc-900 transition-all hover:bg-zinc-50 active:scale-95"
              >
                Start Curriculum
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 relative hidden md:block">
            <div className="relative aspect-square w-full scale-110">
               <Image 
                 src="/Hima-on-cloud.png" 
                 alt="AWS Study illustration" 
                 fill 
                 className="object-contain drop-shadow-2xl animate-float" 
                 priority
               />
            </div>
          </div>
        </section>

        {/* Modules Timeline */}
        <section className="mb-32">
          <div className="flex items-baseline justify-between mb-12 border-b border-zinc-100 pb-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Curriculum Timeline</h2>
            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">15 Discrete Modules</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allModules.map((module, idx) => (
              <Link 
                key={module.id + idx} 
                href={`/study?index=${idx}`}
                className="group block p-6 rounded-[2rem] bg-white border border-zinc-100 transition-all hover:shadow-xl hover:shadow-zinc-200/40 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-6">
                  <span className="text-3xl font-black text-zinc-100 group-hover:text-emerald-50 transition-colors tabular-nums w-12">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 mb-0.5 flex items-center gap-1.5">
                      <BookmarkSimple weight="fill" size={10} />
                      Domain {module.domainId}
                    </div>
                    <h3 className="text-base font-bold text-zinc-900 leading-tight group-hover:text-emerald-800 transition-colors">
                      {module.title.split(':').slice(1).join(':').trim() || module.title}
                    </h3>
                  </div>
                  <div className="h-8 w-8 shrink-0 flex items-center justify-center rounded-full bg-zinc-50 text-zinc-300 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <ArrowRight weight="bold" size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Tips */}
        <section className="mb-32">
          <div className="flex items-baseline justify-between mb-12 border-b border-zinc-100 pb-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Exam Insights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {examTips.slice(0, 6).map((tip, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-zinc-50 border border-zinc-100 transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
                <div className="mb-6 h-10 w-10 flex items-center justify-center rounded-xl bg-white shadow-sm transition-transform group-hover:scale-110">
                  <Lightning weight="duotone" className="text-emerald-600" size={20} />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 mb-3">{tip.tip}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {tip.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-zinc-950 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-20 pointer-events-none w-1/3 aspect-square">
             <Image src="/Hima-Rocket.png" alt="Rocket" fill className="object-contain rotate-12" />
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-white/10 text-white mb-8">
               <CloudCheck size={32} weight="duotone" />
            </div>
            <h2 className="text-white mb-6 max-w-2xl mx-auto text-4xl md:text-5xl tracking-tighter">Ready to certify?</h2>
            <p className="text-zinc-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              Challenge yourself with our randomized practice exam that covers all questions in the bank.
            </p>
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-5 text-sm font-bold text-zinc-950 transition-all hover:gap-4 active:scale-95 shadow-2xl shadow-emerald-500/10"
            >
              Launch Full Practice Exam (All Questions)
              <ArrowRight weight="bold" />
            </Link>
          </div>
        </section>
      </PageContainer>
    </>
  );
}
