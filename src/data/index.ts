export * from './types';
export * from './diagrams';
export * from './domains';
export * from './questions';

export const examTips = [
  {
    "tip": "Stateless = Network ACLs",
    "detail": "NACLs don't remember state; you need explicit rules for return traffic."
  },
  {
    "tip": "Stateful = Security Groups",
    "detail": "Security Groups automatically allow return traffic for allowed requests."
  },
  {
    "tip": "Relational / SQL = RDS / Aurora",
    "detail": "Standard database engines like MySQL/PostgreSQL use RDS or Aurora."
  },
  {
    "tip": "Key-value / NoSQL = DynamoDB",
    "detail": "For non-relational, single-digit millisecond performance at any scale."
  },
  {
    "tip": "Data Warehouse / Analytics = Redshift",
    "detail": "Petabyte-scale analytical queries (OLAP)."
  },
  {
    "tip": "Decoupling / Queueing = Amazon SQS",
    "detail": "Message queuing to separate frontend from backend processing."
  },
  {
    "tip": "Pub-Sub / Email Alerts = Amazon SNS",
    "detail": "Fully managed messaging for fanning out notifications."
  },
  {
    "tip": "Who did what? / API Audit = CloudTrail",
    "detail": "Governance and auditing of every action taken in the account."
  },
  {
    "tip": "System Performance / Alarms = CloudWatch",
    "detail": "Monitoring CPU, network, and disk performance with real-time logs."
  },
  {
    "tip": "Compliance reports = AWS Artifact",
    "detail": "Central portal for SOC, ISO, and PCI compliance documents."
  },
  {
    "tip": "Shared responsibility demarcation",
    "detail": "AWS handles security OF the cloud (physical); You handle security IN the cloud (data/IAM)."
  },
  {
    "tip": "TAM = Enterprise Support only",
    "detail": "Technical Account Managers are only available at the Enterprise level."
  },
  {
    "tip": "S3 over EC2 for static websites",
    "detail": "Never use EC2 for static content — use S3 static website hosting instead."
  },
  {
    "tip": "EC2 Spot = 2-min warning",
    "detail": "Spot Instances can be reclaimed by AWS with a 2-minute warning."
  },
  {
    "tip": "Instance Store = ephemeral",
    "detail": "Instance Store is temporary — data is LOST if the instance stops or terminates."
  },
  {
    "tip": "Configuration focus",
    "detail": "You do not need to know how to configure AWS services to pass this exam. The focus is on what the services do, not how to set them up."
  },
  {
    "tip": "Passing score",
    "detail": "A score of 700/1000 roughly corresponds to answering about 70% of scored questions correctly."
  },
  {
    "tip": "Cost savings keyword",
    "detail": "When the exam asks about cost savings from moving to the cloud, look for the phrase 'trade capital expense for variable expense'."
  },
  {
    "tip": "Six advantages",
    "detail": "These six advantages are worth memorising. Exam questions may describe a scenario and ask which advantage it represents."
  },
  {
    "tip": "Well-Architected Pillars",
    "detail": "Exam questions may present a scenario and ask which pillar it relates to. Common pillars include Security, Reliability, Performance Efficiency, Cost Optimization, Operational Excellence, and Sustainability."
  },
  {
    "tip": "AWS CAF Perspectives",
    "detail": "If the exam asks about the benefits of the AWS Cloud Adoption Framework (CAF), look for these six perspectives: Business, People, Governance, Platform, Security, and Operations."
  },
  {
    "tip": "Migration Strategies (6 Rs)",
    "detail": "For the exam, focus on the difference between: Rehost (move as-is), Replatform (small optimisation), and Refactor (redesign). A company wanting to move an app without changes is 'Rehosting'."
  },
  {
    "tip": "Patching Managed Services",
    "detail": "Questions about managed services often ask: who is responsible for patching the guest OS? If it's EC2, you are. If it's RDS, AWS is."
  },
  {
    "tip": "Downloading Compliance Reports",
    "detail": "The exam often asks: 'Where can a customer download AWS compliance reports?' The answer is always AWS Artifact."
  },
  {
    "tip": "Root User Tasks",
    "detail": "Exam questions often ask: 'Which task requires root user credentials?' Common answers include changing the AWS support plan, closing the account, and changing account settings."
  },
  {
    "tip": "Shield vs WAF",
    "detail": "AWS Shield protects against DDoS attacks at the network layer (Layers 3/4). AWS WAF protects against application-layer attacks (Layer 7) such as SQL injection and cross-site scripting (XSS)."
  },
  {
    "tip": "Finding Third-Party Tools",
    "detail": "If an exam question asks where to find third-party security tools that integrate with AWS, the answer is the AWS Marketplace."
  },
  {
    "tip": "Availability Zone Resilience",
    "detail": "Availability Zones do not share single points of failure. They have independent power, cooling, and network connectivity."
  },
  {
    "tip": "Instance Family Naming",
    "detail": "For the exam, know the family names and their primary purpose. If a scenario needs high memory, look for R instances. For compute, look for C instances."
  },
  {
    "tip": "Amazon Aurora Compatibility",
    "detail": "Aurora is AWS-proprietary — it’s not an open-source database. However, it is compatible with MySQL and PostgreSQL."
  },
  {
    "tip": "Scenario-Based Service Selection",
    "detail": "A common exam format is a scenario describing a business need, and you must select the most cost-effective service that meets the requirements."
  },
  {
    "tip": "Data Transfer Costs",
    "detail": "Remember: incoming data to AWS is free. Outgoing data to the internet is charged."
  },
  {
    "tip": "TAM and Concierge Support",
    "detail": "Memorise these key differences: TAM (Technical Account Manager) and the Personal Concierge service are only available at the Enterprise Support level."
  }
];
