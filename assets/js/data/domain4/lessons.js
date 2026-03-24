import { PricingModelsDiagram, SupportPlansDiagram } from '../diagrams.js';

export const domain4 = {
  id: 4,
  name: "Billing, Pricing & Support",
  weight: "12%",
  color: "#BC8CFF",
  icon: "",
  diagramTitle: "EC2 Pricing Models Comparison",
  diagram: PricingModelsDiagram,
  diagram2Title: "AWS Support Plans Table",
  diagram2: SupportPlansDiagram,
  sections: [
    {
      title: "Pricing Models",
      items: [
        { term: "On-Demand", focus: "No upfront cost; pay by the second.", example: "Spinning up a server for a 2-hour software demo." },
        { term: "Reserved (RI)", focus: "Commit to 1 or 3 years for big discount.", example: "Your main production database running 24/7." },
        { term: "Savings Plan", focus: "Flexible hourly commit across Compute.", example: "Committing $10/hr across EC2, Lambda, and Fargate." },
        { term: "Spot Instances", focus: "Bid for spare capacity (90% off).", example: "Big data batch jobs that can restart if interrupted." },
        { term: "Dedicated Host", focus: "Physical server just for you (BYOL).", example: "Running Windows software with strict licensing." },
      ]
    },
    {
      title: "Cost Management Tools",
      items: [
        { term: "Pricing Calculator", focus: "Estimate costs BEFORE you start.", example: "CFO asking how much a new project will cost per month." },
        { term: "AWS Budgets", focus: "Get alerts BEFORE you overspend.", example: "Emailing the manager when the monthly bill hits 80% of budget." },
        { term: "Cost Explorer", focus: "Visualize past spend by service/tag.", example: "Finding which department used the most S3 storage last month." },
        { term: "Trusted Advisor", focus: "Provides cost-saving recommendations.", example: "Identifying underutilized EC2 instances that can be stopped." },
      ]
    },
    {
      title: "Billing & Organizations",
      items: [
        { term: "Consolidated Billing", focus: "One bill for multiple accounts.", example: "A parent company paying for its 10 child startup accounts." },
        { term: "AWS Organizations", focus: "Manage multiple accounts with SCPs.", example: "Setting a policy to block any account from using us-west-1." },
        { term: "Cost Allocation Tags", focus: "Label resources to track spend.", example: "Tagging servers with 'Project-Alpha' to track its budget." },
      ]
    },
    {
      title: "AWS Support Plans",
      items: [
        { term: "Basic (Free)", focus: "Docs & 7 core Trusted Advisor checks.", example: "Self-study and personal projects." },
        { term: "Developer ($29+)", focus: "Business hours support (12-24h).", example: "Testing and production-lite environments." },
        { term: "Business ($100+)", focus: "24/7 technical support (<1h response).", example: "Production workloads needing fast tech support." },
        { term: "Enterprise ($15k+)", focus: "TAM and <15m critical response.", example: "Large companies needing a dedicated tech manager (TAM)." },
      ]
    }
  ],
  concepts: [
    {
      company: "BP",
      industry: "Energy / Oil & Gas",
      challenge: "Managing thousands of AWS accounts and ensuring budget compliance across multiple global teams.",
      solution: "Implemented AWS Organizations and Consolidated Billing, using Cost Allocation Tags to accurately track and report spend by project."
    },
    {
      company: "Samsung",
      industry: "Technology / Manufacturing",
      challenge: "Optimizing cloud costs for their massive global compute fleet supporting 1.1 billion users.",
      solution: "Used AWS Savings Plans and Spot Instances to achieve significant discounts on steady-state and fault-tolerant workloads, reducing costs by millions."
    },
    {
      company: "Lyft",
      industry: "Transportation / Tech",
      challenge: "Forecasting future cloud spend to align with aggressive growth targets.",
      solution: "Leveraged AWS Cost Explorer and AWS Budgets to build predictive models and set proactive alerts, preventing surprise billing during rapid scale-up."
    }
  ]
};
