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
  {tip:"Stateless = Network ACLs",detail:"NACLs don't remember state; you need explicit rules for return traffic."},
  {tip:"Stateful = Security Groups",detail:"Security Groups automatically allow return traffic for allowed requests."},
  {tip:"Relational / SQL = RDS / Aurora",detail:"Standard database engines like MySQL/PostgreSQL use RDS or Aurora."},
  {tip:"Key-value / NoSQL = DynamoDB",detail:"For non-relational, single-digit millisecond performance at any scale."},
  {tip:"Data Warehouse / Analytics = Redshift",detail:"Petabyte-scale analytical queries (OLAP)."},
  {tip:"Decoupling / Queueing = Amazon SQS",detail:"Message queuing to separate frontend from backend processing."},
  {tip:"Pub-Sub / Email Alerts = Amazon SNS",detail:"Fully managed messaging for fanning out notifications."},
  {tip:"Who did what? / API Audit = CloudTrail",detail:"Governance and auditing of every action taken in the account."},
  {tip:"System Performance / Alarms = CloudWatch",detail:"Monitoring CPU, network, and disk performance with real-time logs."},
  {tip:"Compliance reports = AWS Artifact",detail:"Central portal for SOC, ISO, and PCI compliance documents."},
  {tip:"Shared responsibility demarcation",detail:"AWS handles security OF the cloud (physical); You handle security IN the cloud (data/IAM)."},
  {tip:"TAM = Enterprise Support only",detail:"Technical Account Managers are only available at the Enterprise level."},
  {tip:"S3 over EC2 for static websites",detail:"Never use EC2 for static content — use S3 static website hosting instead."},
  {tip:"EC2 Spot = 2-min warning",detail:"Spot Instances can be reclaimed by AWS with a 2-minute warning."},
  {tip:"Instance Store = ephemeral",detail:"Instance Store is temporary — data is LOST if the instance stops or terminates."}
];
