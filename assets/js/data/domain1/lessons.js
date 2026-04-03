import { CAFDiagram, WellArchitecturedDiagram } from '../diagrams.js';

export const domain1 = {
  id: 1,
  name: "Cloud Concepts",
  weight: "24%",
  color: "var(--primary)",
  icon: "",
  diagramTitle: "Cloud Adoption Framework (CAF)",
  diagram: CAFDiagram,
  diagram2Title: "Well-Architected Framework Pillars",
  diagram2: WellArchitecturedDiagram,
  detailedNotes: `
    <div class="detailed-notes-content">
      <p>This domain covers the foundational value proposition of the AWS Cloud, including its economic benefits and the core design principles of the Well-Architected Framework.</p>
    </div>
  `,
  modules: [
    {
      id: 1,
      title: "Module 1: Introduction to the Cloud",
      description: "Understanding the core value proposition of AWS and basic cloud economics.",
      sections: [
        {
          title: "Value Proposition",
          items: [
            { term: "High Availability", focus: "Systems remain operational with minimal downtime.", example: "Spreading an app across multiple data centers." },
            { term: "Elasticity", focus: "Automatically scale resources out/in or up/down.", example: "Adding 5 servers on Black Friday and removing them Saturday." },
            { term: "Agility", focus: "Speed of provisioning resources.", example: "Launching an EC2 instance in minutes instead of weeks for hardware." },
            { term: "Global Reach", focus: "Deploy applications globally in minutes.", example: "Placing data close to end-users to reduce latency." }
          ]
        },
        {
          title: "Cloud Economics (CapEx vs OpEx)",
          items: [
            { term: "CapEx", focus: "Fixed, upfront investment in physical infrastructure.", example: "Buying server racks and signing a 5-year lease." },
            { term: "OpEx", focus: "Variable, pay-as-you-go expense based on consumption.", example: "Paying $0.05/hour for an EC2 instance and turning it off when done." },
            { term: "Economies of Scale", focus: "AWS lowers prices by aggregating usage from millions of customers.", example: "Frequent price reductions passed back to customers." }
          ]
        }
      ]
    },
    {
      id: 12,
      title: "Module 12: Migrating to the AWS Cloud",
      description: "The 6 R's of Migration Strategies help organizations decide how to move applications to the cloud.",
      sections: [
        {
          title: "The 6 R's",
          items: [
            { term: "Rehost", focus: "Lift and Shift - no changes to the app.", example: "Moving a legacy VM as-is to EC2." },
            { term: "Replatform", focus: "Lift, Tinker, and Shift - minor optimizations.", example: "Moving a database to Amazon RDS." },
            { term: "Refactor", focus: "Re-architect/Cloud Native - full redesign.", example: "Breaking a monolith into microservices with Lambda." },
            { term: "Repurchase", focus: "Drop and Shop - switching to SaaS.", example: "Moving from an on-prem CRM to Salesforce." },
            { term: "Retire", focus: "Decommissioning non-useful apps.", example: "Turning off an old legacy reporting tool." },
            { term: "Retain", focus: "Do Nothing - keeping apps on-prem.", example: "Leaving sensitive data on-prem for compliance." }
          ]
        }
      ]
    },
    {
      id: 13,
      title: "Module 13: Well-Architected Solutions",
      description: "The six pillars of the AWS Well-Architected Framework for building secure, high-performing, resilient, and efficient infrastructure.",
      sections: [
        {
          title: "The Six Pillars",
          items: [
            { term: "Operational Excellence", focus: "Run and monitor systems to deliver business value.", example: "Automating deployments using CloudFormation." },
            { term: "Security", focus: "Protecting information, systems, and assets.", example: "Encrypting EBS volumes and using IAM roles." },
            { term: "Reliability", focus: "Consistency and quick recovery from failure.", example: "Deploying across multiple Availability Zones." },
            { term: "Performance Efficiency", focus: "Using resources efficiently as demand changes.", example: "Adopting serverless (Lambda) to remove server management." },
            { term: "Cost Optimization", focus: "Avoiding unnecessary costs.", example: "Using Cost Explorer to identify and rightsize idle instances." },
            { term: "Sustainability", focus: "Minimizing environmental impacts.", example: "Choosing energy-efficient hardware and scaling in off-peak." }
          ]
        }
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
    }
  ]
};
