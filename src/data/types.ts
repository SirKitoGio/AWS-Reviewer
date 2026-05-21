export interface ModuleItem {
  term: string;
  focus: string;
  example: string;
  def?: string;
  whyItMatters?: string;
  howItWorks?: string;
  keyWords?: string[];
}

export interface ModuleSection {
  title: string;
  items: ModuleItem[];
}

export interface ModuleBlueprint {
  whyItMatters: string;
  howToStudy: string;
  examRelevance: string;
}

export interface ModuleStrategist {
  keyComparison?: {
    title: string;
    headers: string[];
    rows: { label: string; values: string[] }[];
  };
  examTricks: string[];
}

export interface Module {
  id: number;
  title: string;
  description: string;
  sections?: ModuleSection[];
  customHtml?: string;
  domainId?: number;
  domainName?: string;
  domainColor?: string;
  order?: number;
  blueprint?: ModuleBlueprint;
  strategist?: ModuleStrategist;
}

export interface Concept {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
}

export interface Domain {
  id: number;
  name: string;
  weight: string;
  color: string;
  icon: string;
  diagramTitle?: string;
  diagram?: string;
  diagram2Title?: string;
  diagram2?: string;
  detailedNotes?: string;
  modules: Module[];
  concepts?: Concept[];
}

export interface ExamTip {
  tip: string;
  detail: string;
}

export interface Question {
  id?: string | number;
  domain: number;
  question: string;
  options: string[];
  correct: number | number[];
  explanation: string;
  multi?: boolean;
}
