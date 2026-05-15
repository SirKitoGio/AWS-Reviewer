import { Navigation } from "@/components/Navigation";
import { PageContainer } from "@/components/PageContainer";
import { examTips } from "@/data";
import { Lightning, Lightbulb, BookOpen } from "@phosphor-icons/react/dist/ssr";

export default function TipsPage() {
  return (
    <>
      <Navigation />
      <PageContainer>
        <header className="mb-24 text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 mb-6">
            <Lightbulb size={24} weight="duotone" />
          </div>
          <h1 className="mb-6">Exam Strategy <span className="text-zinc-400">&</span> Tips</h1>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            Shortcuts, patterns, and crucial differentiators observed from common AWS Certified Cloud Practitioner exam questions.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {examTips.map((tip, idx) => (
            <div key={idx} className="group relative p-10 rounded-[2.5rem] bg-white border border-zinc-100 transition-all hover:shadow-2xl hover:shadow-zinc-200/50 hover:-translate-y-1">
              <div className="flex gap-6 items-start">
                 <span className="text-4xl font-black text-zinc-100 tabular-nums group-hover:text-emerald-50 transition-colors shrink-0">
                   {String(idx + 1).padStart(2, '0')}
                 </span>
                 <div className="space-y-4">
                    <h3 className="text-lg font-bold text-zinc-900 leading-tight">
                      {tip.tip}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed border-l-2 border-emerald-100 pl-4">
                      {tip.detail}
                    </p>
                 </div>
              </div>
              
              <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity">
                 <Lightning size={20} weight="fill" className="text-emerald-400" />
              </div>
            </div>
          ))}
        </div>

        <section className="mt-32 p-12 md:p-20 rounded-[3rem] bg-zinc-50 border border-zinc-100 text-center">
           <h2 className="mb-6">Study Tip: &quot;Active Recall&quot;</h2>
           <p className="text-zinc-500 max-w-xl mx-auto mb-10">
             Don&apos;t just read the modules. After each section, try to explain the concepts out loud or take a domain-specific quiz to cement the knowledge.
           </p>
           <div className="flex justify-center">
              <BookOpen size={64} weight="thin" className="text-zinc-200" />
           </div>
        </section>
      </PageContainer>
    </>
  );
}
