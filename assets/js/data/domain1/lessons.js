import { CAFDiagram, WellArchitecturedDiagram } from '../diagrams.js';

export const domain1 = {
  id: 1,
  name: "Cloud Concepts",
  weight: "24%",
  color: "#FF9900",
  icon: "",
  diagramTitle: "Cloud Adoption Framework (CAF)",
  diagram: CAFDiagram,
  diagram2Title: "Well-Architected Framework Pillars",
  diagram2: WellArchitecturedDiagram,
  sections: [
    {
      title: "Benefits of AWS Cloud",
      items: [
        { term: "Economies of Scale", focus: "Lower pay-as-you-go prices due to AWS's massive scale.", example: "Small startups getting enterprise-grade infrastructure at cents per hour." },
        { term: "High Availability", focus: "Systems stay up even if components fail.", example: "Hosting a website across multiple Availability Zones so it stays online if one DC fails." },
        { term: "Elasticity", focus: "Scale resources up/down automatically based on demand.", example: "An e-commerce site adding servers during Black Friday and removing them after." },
        { term: "Agility", focus: "Reduced time to provision resources (minutes vs weeks).", example: "A developer spinning up a test environment in us-east-1 in under 2 minutes." },
        { term: "Variable vs Fixed Cost", focus: "Trade CapEx (hardware) for OpEx (usage-based).", example: "Paying monthly for what you use instead of buying $10k worth of servers upfront." },
        { term: "Go Global in Minutes", focus: "Deploy to multiple Regions worldwide instantly.", example: "A UK-based company launching their app in Tokyo with a few clicks." },
      ]
    },
    {
      title: "Well-Architected Framework",
      items: [
        { term: "Operational Excellence", focus: "Run and monitor systems; continually improve processes.", example: "Using CloudFormation to automate infrastructure updates." },
        { term: "Security", focus: "Protect data, systems, and assets.", example: "Implementing IAM roles with Least Privilege for all developers." },
        { term: "Reliability", focus: "Workloads perform correctly and recover from failures.", example: "Setting up Multi-AZ deployments for critical databases." },
        { term: "Performance Efficiency", focus: "Use resources efficiently as demand changes.", example: "Using Lambda to scale instantly without managing servers." },
        { term: "Cost Optimization", focus: "Avoid unnecessary costs; pay only for what you need.", example: "Downsizing an underutilized EC2 instance from large to medium." },
        { term: "Sustainability", focus: "Minimize environmental impact of cloud workloads.", example: "Choosing an AWS Region powered by 100% renewable energy." },
      ]
    },
    {
      title: "Cloud Adoption Framework (CAF)",
      items: [
        { term: "Business Perspective", focus: "Align cloud with business goals and ROI.", example: "CFO evaluating how moving to AWS reduces TCO (Total Cost of Ownership)." },
        { term: "People Perspective", focus: "Bridge the gap between technology and people.", example: "HR creating new training programs for cloud certifications." },
        { term: "Governance Perspective", focus: "Manage and measure cloud value/risks.", example: "Using AWS Budgets to prevent departments from overspending." },
        { term: "Platform Perspective", focus: "Design, build, and optimize cloud infrastructure.", example: "Architects choosing between Containers (ECS) and Serverless (Lambda)." },
        { term: "Security Perspective", focus: "Ensure confidentiality, integrity, and availability.", example: "Security teams implementing guardrails with Service Control Policies." },
        { term: "Operations Perspective", focus: "Health and monitoring of cloud services.", example: "DevOps teams using CloudWatch to monitor system uptime." },
      ]
    },
    {
      title: "Migration Strategies (6 Rs)",
      items: [
        { term: "Rehost", focus: "Lift-and-shift migration without changes.", example: "Moving an on-prem VM exactly as-is to an EC2 instance." },
        { term: "Replatform", focus: "Minor optimizations during migration.", example: "Moving an on-prem database to Amazon RDS (managed)." },
        { term: "Refactor", focus: "Redesigning the app to be cloud-native.", example: "Breaking a monolithic app into microservices using Lambda." },
        { term: "Repurchase", focus: "Moving to a different product (usually SaaS).", example: "Moving from an on-prem CRM to Salesforce." },
        { term: "Retire", focus: "Getting rid of non-useful applications.", example: "Turning off an old legacy reporting tool that nobody uses." },
        { term: "Retain", focus: "Keeping some applications on-premises.", example: "Leaving a highly sensitive database on-prem for compliance." },
      ]
    }
  ],
  concepts: [
    {
      company: "Netflix",
      industry: "Streaming / Entertainment",
      challenge: "Scaling to millions of users worldwide while maintaining high availability.",
      solution: "Migrated entire infrastructure to AWS, using multiple Regions and AZs to ensure zero downtime even if an entire AWS Region fails."
    },
    {
      company: "Airbnb",
      industry: "Hospitality / Tech",
      challenge: "Handling unpredictable traffic spikes during holiday booking seasons.",
      solution: "Leveraged AWS Elasticity to automatically scale EC2 instances and databases, paying only for the extra capacity during peak demand."
    },
    {
      company: "General Electric (GE)",
      industry: "Industrial / Manufacturing",
      challenge: "High cost and low agility of managing thousands of on-premises servers.",
      solution: "Executed a massive Cloud Migration (Refactoring), moving 9,000+ workloads to AWS, reducing TCO by 52% and increasing speed-to-market."
    }
  ]
};
