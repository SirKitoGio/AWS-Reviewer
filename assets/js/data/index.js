import { domain1 } from './domain1/lessons.js';
import { domain2 } from './domain2/lessons.js';
import { domain3 } from './domain3/lessons.js';
import { domain4 } from './domain4/lessons.js';
import * as Diagrams from './diagrams.js';

export { Diagrams };
export const domains = [domain1, domain2, domain3, domain4];

export const domainContent = {
  1: domain1,
  2: domain2,
  3: domain3,
  4: domain4
};

export const examTips = [
  {tip:"S3 over EC2 for static websites",detail:"Never use EC2 for static content — use S3 static website hosting instead."},
  {tip:"Decoupling = Amazon SQS",detail:"If you see 'decoupling components', the answer is almost always Amazon SQS."},
  {tip:"Root User — MFA + No daily use",detail:"Never use the Root user for daily tasks. Secure it with MFA and delete its access keys."},
  {tip:"EC2 Spot = 2-min warning",detail:"Spot Instances can be reclaimed by AWS with a 2-minute warning. Never for critical workloads."},
  {tip:"Compliance reports = AWS Artifact",detail:"If the question asks for PCI, SOC, or ISO reports, the answer is AWS Artifact."},
  {tip:"CloudTrail vs CloudWatch vs Config",detail:"CloudTrail = who did what (API logs). CloudWatch = performance metrics. Config = resource compliance history."},
  {tip:"Serverless trio",detail:"Lambda, Fargate, and S3 are serverless — you don't manage the underlying OS."},
  {tip:"TAM = Enterprise Support only",detail:"Technical Account Manager is ONLY available on Enterprise support plan."},
  {tip:"Instance Store = ephemeral",detail:"Instance Store is temporary — data is LOST if the instance stops or terminates."},
  {tip:"Security Groups = Stateful, NACLs = Stateless",detail:"Security Groups automatically allow return traffic. NACLs require explicit rules for both directions."},
  {tip:"Reserved Instances max savings",detail:"3-year + All Upfront + Standard RI = maximum discount (up to 72% off On-Demand)."},
  {tip:"Direct Connect vs VPN",detail:"Direct Connect = dedicated private physical fiber (consistent, not over internet). VPN = encrypted tunnel over public internet."},
  {tip:"Shared responsibility for EC2 vs RDS",detail:"EC2: YOU patch the OS. RDS: AWS patches the OS. Lambda: AWS handles everything."},
  {tip:"GuardDuty = ML threat detection",detail:"GuardDuty uses machine learning for intelligent threat detection — not rules-based like WAF."},
  {tip:"Athena = serverless SQL on S3",detail:"Athena lets you query S3 data with standard SQL — no database setup, no ETL, pay per query."},
  {tip:"DynamoDB = NoSQL, millisecond latency",detail:"DynamoDB provides single-digit millisecond performance at any scale for key-value workloads."},
];
