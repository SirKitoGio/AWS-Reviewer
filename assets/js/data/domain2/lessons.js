import { SharedResponsibilityDiagram } from '../diagrams.js';

export const domain2 = {
  id: 2,
  name: "Security and Compliance",
  weight: "30%",
  color: "var(--primary)",
  icon: "",
  diagramTitle: "Shared Responsibility Model",
  diagram: SharedResponsibilityDiagram,
  detailedNotes: `
    <div class="detailed-notes-content">
      <p>This domain focuses on the AWS Shared Responsibility Model, Identity and Access Management (IAM), and the various tools available for auditing and compliance.</p>
    </div>
  `,
  modules: [
    {
      id: 9,
      title: "Module 9: Security & The Shared Responsibility Model",
      description: "Security and Compliance is a shared responsibility between AWS and the customer.",
      customHtml: `
        <div style="background: var(--bg-card); padding: 24px; border-radius: 12px; margin-bottom: 30px; border: 1px solid var(--border); box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
            <h4 style="color: var(--primary); margin-bottom: 16px; font-size: 16px;">The Line of Demarcation</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div style="border: 1px solid var(--border); padding: 18px; border-radius: 10px; background: var(--accent-light);">
                    <div style="font-weight: 700; color: var(--accent); margin-bottom: 12px; font-size: 13px;">Customer: Security IN the Cloud</div>
                    <ul style="font-size: 12px; padding-left: 20px; color: var(--text); line-height: 1.6;">
                        <li>Customer Data</li>
                        <li>Identity & Access Management (IAM)</li>
                        <li>OS, Applications & Patching</li>
                        <li>Network & Firewall Configuration</li>
                    </ul>
                </div>
                <div style="border: 1px solid var(--border); padding: 18px; border-radius: 10px; background: var(--primary-light);">
                    <div style="font-weight: 700; color: var(--primary); margin-bottom: 12px; font-size: 13px;">AWS: Security OF the Cloud</div>
                    <ul style="font-size: 12px; padding-left: 20px; color: var(--text); line-height: 1.6;">
                        <li>Compute, Storage, DB Services</li>
                        <li>Global Network Infrastructure</li>
                        <li>Physical Hardware & Hypervisor</li>
                        <li>Physical Data Centers & Regions</li>
                    </ul>
                </div>
            </div>
            <p style="margin-top: 20px; font-size: 13px; font-style: italic; color: var(--muted); border-top: 1px solid var(--border); padding-top: 15px;">
                <b>Scenario Example:</b> If a customer makes an S3 bucket public and data leaks, it is the <b style="color: var(--accent);">customer's</b> fault. If an AWS data center loses power, it is <b style="color: var(--primary);">AWS's</b> fault.
            </p>
        </div>
      `,
      sections: [
        {
          title: "Identity & Access Management (IAM)",
          items: [
            { term: "Least Privilege", focus: "Granting only the permissions required to perform a task.", example: "Allowing a developer to read from S3 but not delete buckets." },
            { term: "MFA", focus: "Multi-Factor Authentication for extra security.", example: "Requiring a hardware token for Root user login." },
            { term: "IAM Roles", focus: "Temporary permissions for services or users.", example: "Giving an EC2 instance permission to access an S3 bucket without using access keys." }
          ]
        }
      ]
    },
    {
      id: 10,
      title: "Module 10 (Part A): Compliance & Auditing",
      description: "AWS provides specialized services for governance, auditing, and compliance.",
      sections: [
        {
          title: "Governance & Compliance Tools",
          items: [
            { term: "AWS Artifact", focus: "Self-service portal for compliance reports.", example: "Downloading a SOC 1 or ISO 27001 report for an auditor." },
            { term: "AWS CloudTrail", focus: "API Auditing - Who did what, when, and from where?", example: "Investigating which user deleted an EC2 instance yesterday." },
            { term: "AWS Config", focus: "Configuration Management and history.", example: "Checking if any S3 buckets were made public in the last 24 hours." }
          ]
        }
      ]
    }
  ],
  concepts: [
    {
      company: "Capital One",
      industry: "Financial Services",
      challenge: "Moving highly sensitive financial data to the cloud while meeting strict regulatory compliance.",
      solution: "Utilized AWS Artifact for compliance reports and CloudTrail for rigorous API auditing of all administrative actions."
    }
  ]
};
