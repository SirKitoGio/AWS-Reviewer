import { SharedResponsibilityDiagram, IAMDiagram } from '../diagrams.js';

export const domain2 = {
  id: 2,
  name: "Security & Compliance",
  weight: "30%",
  color: "#58A6FF",
  icon: "",
  diagramTitle: "Shared Responsibility Model",
  diagram: SharedResponsibilityDiagram,
  diagram2Title: "IAM Entity Relationships",
  diagram2: IAMDiagram,
  sections: [
    {
      title: "Shared Responsibility Model",
      items: [
        { term: "AWS (OF the Cloud)", focus: "Physical security, global infrastructure, managed services patching.", example: "Protecting a data center in us-west-2 from unauthorized access." },
        { term: "Customer (IN the Cloud)", focus: "Data encryption, IAM policies, OS patching for EC2, Firewall config.", example: "Installing security updates on a Windows EC2 instance." },
        { term: "Shared (Configuration)", focus: "Network controls and IAM settings.", example: "Creating a security group that allows HTTP but blocks SSH." },
      ]
    },
    {
      title: "IAM (Identity & Access Management)",
      items: [
        { term: "IAM User", focus: "Unique identity for a single person or app.", example: "Developer 'Alice' needs an account to access S3." },
        { term: "IAM Group", focus: "Collection of users sharing common permissions.", example: "Creating a 'Finance-Team' group with billing access only." },
        { term: "IAM Role", focus: "Temporary identity with permissions assigned to services.", example: "An EC2 instance needs a Role to write logs to CloudWatch." },
        { term: "IAM Policy", focus: "JSON document defining allowed or denied actions.", example: "A policy that allows 's3:ListBucket' but denies 's3:DeleteObject'." },
        { term: "Root User", focus: "Full administrative access—never use for daily tasks!", example: "Use Root only to enable consolidated billing, then log out." },
        { term: "Least Privilege", focus: "Granting ONLY the minimum permissions needed.", example: "Giving a backup script read-only access instead of FullAccess." },
      ]
    },
    {
      title: "Security & Compliance Services",
      items: [
        { term: "AWS Shield", focus: "Standard DDoS protection (free) vs Advanced (paid).", example: "Standard automatically protects S3 from common layer 3/4 attacks." },
        { term: "AWS WAF", focus: "Filter web traffic and block common exploits.", example: "Blocking requests from a specific IP address attacking your web app." },
        { term: "Amazon Inspector", focus: "Scans EC2 and containers for vulnerabilities.", example: "Running a scan to find unpatched software on your production servers." },
        { term: "Amazon GuardDuty", focus: "Intelligent threat detection using ML.", example: "Getting an alert when an EC2 instance starts crypto-mining." },
        { term: "AWS KMS", focus: "Managed service to create and control encryption keys.", example: "Using a KMS key to encrypt sensitive files in an S3 bucket." },
        { term: "AWS Artifact", focus: "Self-service access to AWS compliance reports.", example: "Downloading a SOC2 or PCI-DSS report for an auditor." },
      ]
    }
  ],
  concepts: [
    {
      company: "Capital One",
      industry: "Financial Services",
      challenge: "Securing highly sensitive banking data in a strictly regulated environment.",
      solution: "Used AWS KMS for pervasive data encryption and IAM Service Control Policies (SCPs) to implement organization-wide security guardrails."
    },
    {
      company: "Dow Jones",
      industry: "Media / Finance",
      challenge: "Detecting sophisticated cyber threats across a global digital footprint.",
      solution: "Implemented Amazon GuardDuty for ML-powered threat detection and AWS CloudTrail to maintain an immutable log of every API call for auditing."
    },
    {
      company: "Slack",
      industry: "Technology / SaaS",
      challenge: "Protecting their platform from large-scale DDoS attacks that could disrupt global communication.",
      solution: "Deployed AWS Shield Advanced and AWS WAF to automatically detect and block malicious traffic at the application layer."
    }
  ]
};
