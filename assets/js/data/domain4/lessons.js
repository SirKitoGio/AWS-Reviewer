import { PricingModelsDiagram } from '../diagrams.js';

export const domain4 = {
  id: 4,
  name: "Billing, Pricing, and Support",
  weight: "12%",
  color: "var(--primary)",
  icon: "",
  diagramTitle: "EC2 Pricing Models",
  diagram: PricingModelsDiagram,
  detailedNotes: `
    <div class="detailed-notes-content">
      <p>This domain covers how AWS charges for its services, the various support plans available, and tools for cost management.</p>
    </div>
  `,
  modules: [
    {
      id: 11,
      title: "Module 11: Pricing and Support",
      description: "AWS offers multiple purchasing options and support tiers to match different business needs.",
      customHtml: `
        <div style="background: var(--bg-card); padding: 24px; border-radius: 12px; margin-bottom: 30px; border: 1px solid var(--border); box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
            <h4 style="color: var(--primary); margin-bottom: 16px; font-size: 16px; display: flex; align-items: center; gap: 8px;">
                <span style="background: var(--primary); width: 4px; height: 16px; border-radius: 2px;"></span>
                Support Plan Comparison
            </h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
                <!-- Basic -->
                <div style="border: 1px solid var(--border); padding: 16px; border-radius: 8px; background: var(--bg-main);">
                    <div style="font-weight: 700; font-size: 14px; margin-bottom: 8px; color: var(--text);">Basic</div>
                    <div style="font-size: 11px; color: var(--primary); font-weight: 700; margin-bottom: 8px; text-transform: uppercase;">Free (Included)</div>
                    <ul style="font-size: 11px; color: var(--muted); padding-left: 16px; line-height: 1.5;">
                        <li>7 core Trusted Advisor checks</li>
                        <li>24/7 Customer Service (Billing/Account)</li>
                        <li>Documentation & Whitepapers</li>
                        <li>AWS Support Forums</li>
                    </ul>
                </div>
                <!-- Developer -->
                <div style="border: 1px solid var(--border); padding: 16px; border-radius: 8px; background: var(--bg-main);">
                    <div style="font-weight: 700; font-size: 14px; margin-bottom: 8px; color: var(--text);">Developer</div>
                    <div style="font-size: 11px; color: var(--primary); font-weight: 700; margin-bottom: 8px; text-transform: uppercase;">Starts at $29/mo</div>
                    <ul style="font-size: 11px; color: var(--muted); padding-left: 16px; line-height: 1.5;">
                        <li><b>Testing/Early Dev:</b> Business hours email</li>
                        <li>Cloud Support Associates access</li>
                        <li>SLA: &lt; 24h general, &lt; 12h system</li>
                    </ul>
                </div>
                <!-- Business -->
                <div style="border: 1px solid var(--primary); padding: 16px; border-radius: 8px; background: var(--primary-light);">
                    <div style="font-weight: 700; font-size: 14px; margin-bottom: 8px; color: var(--text);">Business</div>
                    <div style="font-size: 11px; color: var(--primary); font-weight: 700; margin-bottom: 8px; text-transform: uppercase;">Starts at $100/mo</div>
                    <ul style="font-size: 11px; color: var(--text); padding-left: 16px; line-height: 1.5;">
                        <li><b>Production:</b> 24/7 Phone, Email, Chat</li>
                        <li>All Trusted Advisor checks</li>
                        <li>Cloud Support Engineers access</li>
                        <li><b>SLA: &lt; 1 hour</b> response</li>
                    </ul>
                </div>
                <!-- Enterprise -->
                <div style="border: 1px solid var(--accent); padding: 16px; border-radius: 8px; background: var(--accent-light);">
                    <div style="font-weight: 700; font-size: 14px; margin-bottom: 8px; color: var(--text);">Enterprise</div>
                    <div style="font-size: 11px; color: var(--accent); font-weight: 700; margin-bottom: 8px; text-transform: uppercase;">Starts at $15k/mo</div>
                    <ul style="font-size: 11px; color: var(--text); padding-left: 16px; line-height: 1.5;">
                        <li><b>Business-Critical:</b> 24/7 Access</li>
                        <li><b>Technical Account Manager (TAM)</b></li>
                        <li>Concierge Support Team</li>
                        <li><b>SLA: &lt; 15 minutes</b> critical</li>
                    </ul>
                </div>
            </div>
        </div>
      `,
      sections: [
        {
          title: "Compute Purchasing Options",
          items: [
            { term: "On-Demand", focus: "No commitment. Pay by the second.", example: "Short-term, unpredictable workloads." },
            { term: "Reserved Instances", focus: "1 or 3 year commitment. Up to 72% discount.", example: "Steady-state, predictable usage." },
            { term: "Savings Plans", focus: "Commit to a consistent amount of usage ($/hr).", example: "Flexible compute usage across EC2, Lambda, Fargate." },
            { term: "Spot Instances", focus: "Use spare AWS capacity. Up to 90% discount.", example: "Fault-tolerant, flexible background tasks." }
          ]
        },
        {
          title: "Cost Management Tools",
          items: [
            { term: "Pricing Calculator", focus: "Estimate costs BEFORE deployment.", example: "Modeling a new 3-tier app architecture cost." },
            { term: "AWS Budgets", focus: "Set custom spend thresholds and alerts.", example: "Receiving an email when spend reaches 80% of budget." },
            { term: "Cost Explorer", focus: "Visualize historical spend and forecast.", example: "Identifying which service caused a spike last month." }
          ]
        }
      ]
    },
    {
      id: 14,
      title: "Part 4: Crucial Service Comparisons",
      description: "Commonly confused services and their key differentiators.",
      sections: [
        {
          title: "Auditing & Monitoring",
          items: [
            { term: "CloudTrail vs CloudWatch", focus: "CloudTrail = WHO (API Audit) | CloudWatch = WHAT (Performance).", example: "CloudTrail shows who deleted a disk; CloudWatch shows if a disk is full." },
            { term: "Trusted Advisor vs Inspector", focus: "Trusted Advisor = Entire Account | Inspector = Specific EC2/Containers.", example: "Trusted Advisor finds idle DBs; Inspector finds security holes in your Linux OS." }
          ]
        }
      ]
    }
  ],
  concepts: [
    {
      company: "Slack",
      industry: "Communication",
      challenge: "Managing costs across thousands of AWS accounts while maintaining explosive growth.",
      solution: "Implemented AWS Consolidated Billing to gain volume discounts and used Cost Explorer to right-size their infrastructure."
    }
  ]
};
