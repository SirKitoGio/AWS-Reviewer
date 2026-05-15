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
    "tip": "You do not need to know how to configure AWS servi",
    "detail": "You do not need to know how to configure AWS services to pass this exam. The"
  },
  {
    "tip": "A score of 700/1000 roughly corresponds to answeri",
    "detail": "A score of 700/1000 roughly corresponds to answering about 70% of scored"
  },
  {
    "tip": "When the exam asks about cost savings from moving ",
    "detail": "When the exam asks about cost savings from moving to the cloud, look for"
  },
  {
    "tip": "These six advantages are worth memorising",
    "detail": "These six advantages are worth memorising. Exam questions may describe a"
  },
  {
    "tip": "Examquestionsmaypresentascenarioandaskwhich pillar",
    "detail": "Examquestionsmaypresentascenarioandaskwhich pillar itrelatesto. Common"
  },
  {
    "tip": "If the exam asks about the benefits of the AWS CAF",
    "detail": "If the exam asks about the benefits of the AWS CAF, look for these four"
  },
  {
    "tip": "For the Cloud Practitioner exam, focus on the diff",
    "detail": "For the Cloud Practitioner exam, focus on the difference between: • Rehost (move as-is) vs Replatform (small optimisation) vs Refactor (redesign). • The exam will likely describe a scenario: “A company wants to move its"
  },
  {
    "tip": "Questions about managed services often ask",
    "detail": "Questions about managed services often ask: who is responsible for patching"
  },
  {
    "tip": "The exam often asks",
    "detail": "The exam often asks: “Where can a customer download AWS compliance"
  },
  {
    "tip": "Exam questions often ask",
    "detail": "Exam questions often ask: “Which task requires root user credentials?” Common"
  },
  {
    "tip": "• AWS Shieldprotects against DDoS attacks at the n",
    "detail": "• AWS Shieldprotects against DDoS attacks at the network layer(Layers 3/4). • AWS WAF protects against application-layer attacks (Layer 7\\) such as"
  },
  {
    "tip": "If an exam question asks where to find third-party",
    "detail": "If an exam question asks where to find third-party security tools that integrate"
  },
  {
    "tip": "“Availability Zones do not share single points of ",
    "detail": "“Availability Zones do not share single points of failure” is an explicit exam"
  },
  {
    "tip": "For the exam, know the family names and their prim",
    "detail": "For the exam, know the family names and their primary purpose. If a"
  },
  {
    "tip": "Aurora is AWS-proprietary — it’s not an open-sourc",
    "detail": "Aurora is AWS-proprietary — it’s not an open-source database. However, it"
  },
  {
    "tip": "A common exam format is a scenario describing a bu",
    "detail": "A common exam format is a scenario describing a business need, and you must"
  },
  {
    "tip": "Remember",
    "detail": "Remember: incoming data to AWS is free. Outgoing data to the internet"
  },
  {
    "tip": "Memorise these key differences",
    "detail": "Memorise these key differences: • TAM (Technical Account Manager): Enterprise Support only (and"
  }
];
