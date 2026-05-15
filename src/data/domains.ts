import { 
  CAFDiagram, 
  WellArchitecturedDiagram, 
  SharedResponsibilityDiagram, 
  GlobalInfrastructureDiagram, 
  S3StorageClassesDiagram, 
  PricingModelsDiagram 
} from './diagrams';
import { Domain, Module } from './types';

export const domain1: Domain = {
  id: 1,
  name: "Cloud Concepts",
  weight: "24%",
  color: "#768A76",
  icon: "",
  diagramTitle: "Cloud Adoption Framework (CAF)",
  diagram: CAFDiagram,
  diagram2Title: "Well-Architected Framework Pillars",
  diagram2: WellArchitecturedDiagram,
  detailedNotes: ``,
  modules: [
    {
      id: 1,
      title: "Module 1: Introduction to the Cloud & Economics",
      description: "Understanding the core value proposition of AWS and basic cloud economics.",
      customHtml: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-center md:text-left">
            <div class="bg-zinc-950 p-8 rounded-3xl shadow-xl">
                <h4 class="text-emerald-400 mb-4 font-bold text-sm uppercase tracking-widest">Agility vs Elasticity</h4>
                <div class="space-y-4 text-sm text-zinc-400">
                    <p><strong class="text-white">Agility:</strong> The speed of acquiring resources. (e.g., launching a server in 2 minutes instead of 2 weeks).</p>
                    <p><strong class="text-white">Elasticity:</strong> Automatically scaling resources up AND down based on real-time demand.</p>
                    <p><strong class="text-white">Scalability:</strong> The ability to grow to handle more load (but not necessarily shrink automatically).</p>
                </div>
            </div>
            <div class="bg-white p-8 rounded-3xl border border-zinc-100 shadow-xl shadow-zinc-200/50">
                <h4 class="text-zinc-900 mb-4 font-bold text-sm uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
                    <span class="h-2 w-2 bg-emerald-500 rounded-full"></span>
                    Economies of Scale
                </h4>
                <p class="text-sm text-zinc-500 leading-relaxed">
                    Because AWS serves millions of customers, it achieves higher economies of scale than any single organization. This translates directly to lower pay-as-you-go prices. 
                    <br/><br/>
                    Cloud computing converts <strong>CapEx</strong> (fixed upfront costs like servers) into <strong>OpEx</strong> (variable ongoing costs that scale with usage).
                </p>
            </div>
        </div>
      `,
      sections: [
        {
          title: "The Six Advantages of Cloud Computing",
          items: [
            { term: "Trade CapEx for Variable Expense", focus: "Pay only for what you consume instead of heavy upfront data center investments.", example: "Paying $0.05/hour for an EC2 instance." },
            { term: "Massive Economies of Scale", focus: "Benefit from lower costs due to AWS's aggregate usage.", example: "Frequent price reductions passed to customers." },
            { term: "Stop Guessing Capacity", focus: "Eliminate over-provisioning and idle resources.", example: "Using Auto Scaling to meet exact traffic demands." },
            { term: "Increase Speed & Agility", focus: "Resources are a click away, reducing deployment from weeks to minutes.", example: "Spinning up a GPU cluster for ML training instantly." },
            { term: "Stop Maintaining Data Centers", focus: "Focus on business differentiators, not infrastructure.", example: "Letting AWS handle power, cooling, and hardware." },
            { term: "Go Global in Minutes", focus: "Deploy applications in multiple regions worldwide with low latency.", example: "Launching an app in Tokyo and London simultaneously." }
          ]
        },
        {
            title: "Cloud Service Models",
            items: [
                { term: "IaaS", focus: "Infrastructure as a Service. You manage OS, Middleware, Apps. AWS manages Hardware/Virtualization.", example: "Amazon EC2 (Virtual Machines)." },
                { term: "PaaS", focus: "Platform as a Service. You manage only the application and data. AWS manages OS and Runtimes.", example: "AWS Elastic Beanstalk, Amazon RDS." },
                { term: "SaaS", focus: "Software as a Service. AWS manages everything. You just use the software.", example: "Amazon WorkSpaces, AWS Chime." }
            ]
        }
      ]
    },
    {
      id: 13,
      title: "Module 13: Migrating to the AWS Cloud",
      description: "The Cloud Adoption Framework (CAF) and the 7 R's of Migration.",
      customHtml: `
        <div class="bg-white p-8 rounded-3xl mb-12 border border-zinc-100 shadow-sm">
            <h4 class="text-zinc-900 mb-6 font-bold text-lg text-center">AWS Cloud Adoption Framework (CAF)</h4>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs mb-8">
                <div class="p-4 rounded-xl bg-zinc-50 border border-zinc-100"><span class="font-bold text-zinc-900 block mb-1">Business</span>Strategy, ROI & Value</div>
                <div class="p-4 rounded-xl bg-zinc-50 border border-zinc-100"><span class="font-bold text-zinc-900 block mb-1">People</span>Workforce Skills, Culture & Change Management</div>
                <div class="p-4 rounded-xl bg-zinc-50 border border-zinc-100"><span class="font-bold text-zinc-900 block mb-1">Governance</span>Program Management, Risk & Compliance</div>
                <div class="p-4 rounded-xl bg-zinc-50 border border-zinc-100"><span class="font-bold text-zinc-900 block mb-1">Platform</span>Architecture Standards</div>
                <div class="p-4 rounded-xl bg-zinc-50 border border-zinc-100"><span class="font-bold text-zinc-900 block mb-1">Security</span>Data Protection</div>
                <div class="p-4 rounded-xl bg-zinc-50 border border-zinc-100"><span class="font-bold text-zinc-900 block mb-1">Operations</span>Monitoring & Continuity</div>
            </div>
            <div class="bg-emerald-600 p-6 rounded-2xl text-white">
                <h5 class="font-bold text-[10px] uppercase tracking-[0.2em] mb-4 opacity-70">Four Key CAF Outcomes</h5>
                <div class="grid grid-cols-2 gap-4 text-[11px] font-medium">
                    <div class="flex items-center gap-2">● Reduced Business Risk</div>
                    <div class="flex items-center gap-2">● Improved ESG Performance</div>
                    <div class="flex items-center gap-2">● Increased Revenue</div>
                    <div class="flex items-center gap-2">● Increased Efficiency</div>
                </div>
            </div>
        </div>
      `,
      sections: [
        {
          title: "The 7 R's of Migration",
          items: [
            { term: "Retire", focus: "Turn off applications no longer needed.", example: "Decommissioning a legacy reporting tool." },
            { term: "Retain", focus: "Keep apps on-premises for now (compliance/readiness).", example: "Keeping a mainframe system as-is." },
            { term: "Rehost", focus: "Lift and Shift - move as-is with no changes.", example: "Moving a VM to EC2." },
            { term: "Relocate", focus: "Hypervisor Lift - move without conversion.", example: "VMware Cloud on AWS." },
            { term: "Repurchase", focus: "Drop and Shop - switch to a cloud-native SaaS.", example: "Moving from on-prem CRM to Salesforce." },
            { term: "Replatform", focus: "Lift, Tinker, and Shift - small optimizations.", example: "Moving a DB to Amazon RDS." },
            { term: "Refactor", focus: "Re-architect - fundamentally redesign as cloud-native.", example: "Monolith to microservices with Lambda." }
          ]
        },
        {
          title: "Migration Resources",
          items: [
            { term: "AWS Migration Hub", focus: "Central dashboard to track the progress of migrations.", example: "Monitoring 5 simultaneous app migrations." },
            { term: "AWS Application Discovery Service", focus: "Collects info about on-prem servers to help plan.", example: "Inventorying on-prem assets for assessment." },
            { term: "AWS Database Migration Service (DMS)", focus: "Migrates databases to AWS quickly and securely.", example: "Keeping source DB operational during migration." },
            { term: "AWS Snow Family", focus: "Physical devices to transfer large data volumes.", example: "Using Snowball for a 100TB data migration when network is slow." }
          ]
        }
      ]
    },
    {
      id: 14,
      title: "Module 14: Well-Architected Solutions",
      description: "The six pillars of the AWS Well-Architected Framework for building secure and efficient infrastructure.",
      sections: [
        {
          title: "Detailed Pillar Principles",
          items: [
            { term: "Operational Excellence", focus: "Perform operations as code. Make small, reversible changes. Learn from failures.", example: "Using CloudFormation for automated rollbacks." },
            { term: "Security", focus: "Strong identity foundation. Traceability at all layers. Data protection at rest/transit.", example: "Using KMS for S3 encryption." },
            { term: "Reliability", focus: "Automatically recover from failure. Scale horizontally. Stop guessing capacity.", example: "Multi-AZ and Auto Scaling." },
            { term: "Performance Efficiency", focus: "Democratize advanced technologies. Go global in minutes. Serverless.", example: "Using SageMaker instead of building ML from scratch." },
            { term: "Cost Optimization", focus: "Cloud financial management. Consumption model. Analyze expenditure.", example: "Tagging resources for Cost Explorer breakdown." },
            { term: "Sustainability", focus: "Minimize environmental impact. Maximize utilization. Adopt managed services.", example: "Using Graviton processors for energy efficiency." }
          ]
        }
      ]
    }
  ],
  concepts: []
};

export const domain2: Domain = {
  id: 2,
  name: "Security and Compliance",
  weight: "30%",
  color: "#768A76",
  icon: "",
  diagramTitle: "Shared Responsibility Model",
  diagram: SharedResponsibilityDiagram,
  detailedNotes: ``,
  modules: [
    {
      id: 9,
      title: "Module 9: Security & The Shared Responsibility Model",
      description: "Security and Compliance is a shared responsibility between AWS and the customer.",
      customHtml: `
        <div class="bg-white p-8 rounded-3xl mb-12 border border-zinc-100 shadow-xl shadow-zinc-200/50">
            <h4 class="text-zinc-900 mb-6 font-bold text-lg flex items-center gap-2 text-center justify-center md:justify-start">
               <span class="h-6 w-1 bg-emerald-500 rounded-full"></span>
               Division of Labor
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div class="p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
                    <div class="font-bold text-zinc-900 text-xs mb-3 uppercase tracking-widest">AWS: Security OF the Cloud</div>
                    <ul class="text-[11px] text-zinc-500 space-y-2 list-disc pl-4">
                        <li>Physical Security (Data Centers)</li>
                        <li>Global Infrastructure (Regions, AZs)</li>
                        <li>Hardware & Networking</li>
                        <li>Virtualization Layer (Hypervisor)</li>
                        <li>Managed Service Software (RDS, DynamoDB)</li>
                    </ul>
                </div>
                <div class="p-6 rounded-2xl bg-emerald-50/30 border border-emerald-100">
                    <div class="font-bold text-emerald-900 text-xs mb-3 uppercase tracking-widest">Customer: Security IN the Cloud</div>
                    <ul class="text-[11px] text-emerald-800/70 space-y-2 list-disc pl-4">
                        <li>Customer Data (Encryption & Access)</li>
                        <li>IAM (Users, Roles, Policies)</li>
                        <li>EC2 OS Patching & Apps</li>
                        <li>Network Config (Security Groups, ACLs)</li>
                        <li>Encryption at rest & in transit</li>
                    </ul>
                </div>
            </div>
            <div class="bg-zinc-950 p-6 rounded-2xl">
                <h5 class="text-emerald-400 font-bold text-[10px] uppercase tracking-widest mb-4">Root User Rules</h5>
                <p class="text-xs text-zinc-400 leading-relaxed mb-4">Root has unrestricted power. NEVER use for daily tasks.</p>
                <div class="grid grid-cols-2 gap-4 text-[10px] text-zinc-300 font-medium italic">
                    <div>● Change Account Name/Email</div>
                    <div>● Close Account</div>
                    <div>● Change Support Plan</div>
                    <div>● Enable MFA Delete on S3</div>
                </div>
            </div>
        </div>
      `,
      sections: [
        {
          title: "Identity & Access Management (IAM)",
          items: [
            { term: "Least Privilege", focus: "Grant minimum required permissions to limit blast radius.", example: "s3:GetObject instead of FullAccess." },
            { term: "Users, Groups & Roles", focus: "Users (People), Groups (Collection), Roles (Trusted Entities).", example: "EC2 assuming a Role to access S3." },
            { term: "MFA", focus: "Multi-Factor Authentication for extra account security.", example: "Requiring a hardware token for admin access." },
            { term: "IAM Policies", focus: "JSON documents defining Allow/Deny logic.", example: "Customer Managed Policies for custom needs." }
          ]
        },
        {
            title: "Encryption & Certificates",
            items: [
                { term: "AWS KMS", focus: "Managed service for encryption keys (Data at Rest).", example: "Encrypting EBS volumes and RDS storage." },
                { term: "AWS Certificate Manager (ACM)", focus: "Provisions and manages SSL/TLS (Data in Transit).", example: "Automating HTTPS renewal for CloudFront." },
                { term: "Secrets Manager", focus: "Stores and automatically rotates database credentials.", example: "Rotating RDS password every 30 days." }
            ]
        }
      ]
    },
    {
      id: 10,
      title: "Module 10: Compliance, Auditing & Governance",
      description: "AWS provides specialized services for governance, auditing, and compliance.",
      customHtml: `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div class="p-6 rounded-2xl bg-white border border-zinc-100 shadow-lg text-center">
                <div class="font-black text-emerald-600 text-xl mb-2 uppercase tracking-tighter">CloudTrail</div>
                <div class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Audit (WHO)</div>
                <p class="text-xs text-zinc-500">Audit trail of API calls. governance and compliance.</p>
            </div>
            <div class="p-6 rounded-2xl bg-white border border-zinc-100 shadow-lg text-center">
                <div class="font-black text-emerald-600 text-xl mb-2 uppercase tracking-tighter">CloudWatch</div>
                <div class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Monitoring (WHAT)</div>
                <p class="text-xs text-zinc-500">Performance metrics, logs, and alarms for operational health.</p>
            </div>
            <div class="p-6 rounded-2xl bg-white border border-zinc-100 shadow-lg text-center">
                <div class="font-black text-emerald-600 text-xl mb-2 uppercase tracking-tighter">AWS Config</div>
                <div class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Compliance (HOW)</div>
                <p class="text-xs text-zinc-500">Evaluates resource configs against desired rules.</p>
            </div>
        </div>
      `,
      sections: [
        {
          title: "Auditing & Reporting",
          items: [
            { term: "AWS Artifact", focus: "Self-service portal for AWS compliance reports.", example: "Downloading SOC or PCI DSS reports." },
            { term: "AWS Audit Manager", focus: "Automates evidence collection for continuous auditing.", example: "HIPAA evidence gathering." },
            { term: "AWS Trusted Advisor", focus: "Real-time best practice checks across 5 categories.", example: "Finding security groups with open SSH ports (0.0.0.0/0)." }
          ]
        },
        {
            title: "Network Security & Shield",
            items: [
                { term: "AWS Shield", focus: "DDoS protection. Standard is free; Advanced is paid.", example: "Protecting against Layer 3/4 flood attacks." },
                { term: "AWS WAF", focus: "Web App Firewall for Layer 7 attacks.", example: "Blocking SQL injection and XSS exploits." },
                { term: "Amazon GuardDuty", focus: "Intelligent threat detection using ML on logs.", example: "Detecting crypto-mining in your account." },
                { term: "Amazon Inspector", focus: "Automated vulnerability scanning for EC2/Containers.", example: "Scanning for unpatched software (CVEs)." }
            ]
        }
      ]
    }
  ],
  concepts: []
};

export const domain3: Domain = {
  id: 3,
  name: "Cloud Technology and Services",
  weight: "34%",
  color: "#768A76",
  icon: "",
  diagramTitle: "Global Infrastructure Architecture",
  diagram: GlobalInfrastructureDiagram,
  diagram2Title: "S3 Storage Classes Architecture",
  diagram2: S3StorageClassesDiagram,
  detailedNotes: ``,
  modules: [
    {
      id: 2,
      title: "Module 2: Compute - EC2 Foundations",
      description: "Virtual servers in the cloud and instance family optimization.",
      customHtml: `
        <div class="bg-white p-8 rounded-3xl mb-12 border border-zinc-100 shadow-xl shadow-zinc-200/50 text-center md:text-left">
            <h4 class="text-zinc-900 mb-6 font-bold text-lg">EC2 Instance Families</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div class="p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                    <span class="font-bold text-zinc-900 block mb-1">Compute Optimized (C)</span>
                    <p class="text-xs text-zinc-500">High CPU performance. Use for: Batch processing, video encoding, gaming servers.</p>
                </div>
                <div class="p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                    <span class="font-bold text-zinc-900 block mb-1">Memory Optimized (R, X, Z)</span>
                    <p class="text-xs text-zinc-500">Large RAM footprint. Use for: In-memory DBs (Redis), SAP HANA.</p>
                </div>
                <div class="p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                    <span class="font-bold text-zinc-900 block mb-1">Storage Optimized (I, D, H)</span>
                    <p class="text-xs text-zinc-500">High sequential read/write. Use for: NoSQL DBs, Hadoop.</p>
                </div>
                <div class="p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                    <span class="font-bold text-zinc-900 block mb-1">Accelerated (P, G)</span>
                    <p class="text-xs text-zinc-500">Hardware accelerators (GPUs). Use for: ML training, 3D rendering.</p>
                </div>
            </div>
        </div>
      `,
      sections: [
        {
          title: "Interacting with AWS",
          items: [
            { term: "Management Console", focus: "GUI browser interface. Great for one-time tasks.", example: "Manually checking a resource's status." },
            { term: "AWS CLI", focus: "Command-line tool for scripting and automation.", example: "aws s3 ls to list buckets." },
            { term: "AWS SDKs", focus: "Programmatic access for code (Python, Java, Node).", example: "Boto3 library for app integration." },
            { term: "AWS CloudShell", focus: "Browser-based pre-authenticated CLI shell.", example: "Running AWS commands without installing CLI locally." }
          ]
        },
        {
            title: "Infrastructure as Code (IaC)",
            items: [
                { term: "AWS CloudFormation", focus: "Native IaC using JSON/YAML templates.", example: "Defining a whole VPC and 10 EC2s in one file." },
                { term: "AWS CDK", focus: "Define IaC using familiar programming languages.", example: "Using TypeScript to generate CloudFormation." }
            ]
        }
      ]
    },
    {
      id: 3,
      title: "Module 3: Modern Compute - Elasticity & Serverless",
      description: "Automating resource scaling and adopting serverless architectures.",
      customHtml: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div class="p-8 rounded-3xl bg-zinc-950 text-white shadow-2xl">
                <h4 class="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-6">Serverless vs Containers</h4>
                <div class="space-y-6 text-center md:text-left">
                    <div>
                        <div class="font-bold text-lg mb-2">AWS Lambda</div>
                        <p class="text-xs text-zinc-400 leading-relaxed">FaaS. Run code in response to events. No server management. Pay only for compute time used.</p>
                    </div>
                    <div>
                        <div class="font-bold text-lg mb-2">AWS Fargate</div>
                        <p class="text-xs text-zinc-400 leading-relaxed">Serverless compute for containers (ECS/EKS). Eliminates EC2 management.</p>
                    </div>
                </div>
            </div>
            <div class="p-8 rounded-3xl bg-white border border-zinc-100 shadow-xl shadow-zinc-200/50">
                <h4 class="text-zinc-900 font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2 text-center justify-center md:justify-start">
                    <span class="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    Managed Compute PaaS
                </h4>
                <div class="space-y-4 text-xs text-zinc-500">
                    <p><strong class="text-zinc-900">AWS Elastic Beanstalk:</strong> PaaS — upload code and Beanstalk handles capacity, LB, scaling.</p>
                    <p><strong class="text-zinc-900">Amazon Lightsail:</strong> Simple, low-cost VPS for beginners (bundles compute, storage, static IP).</p>
                    <p><strong class="text-zinc-900">AWS Outposts:</strong> Run AWS services on-premises in your own data center.</p>
                </div>
            </div>
        </div>
      `,
      sections: [
        {
          title: "Scaling & Availability",
          items: [
            { term: "Auto Scaling", focus: "Automatically adjusts capacity to maintain steady performance.", example: "Predictive scaling based on ML traffic forecast." },
            { term: "ELB (Elastic Load Balancer)", focus: "Distributes incoming traffic across multiple AZs.", example: "Routing HTTP traffic to healthy EC2 instances." },
            { term: "ALB vs NLB", focus: "ALB (Layer 7 - HTTP/Path). NLB (Layer 4 - TCP/Extreme Performance).", example: "ALB for web apps; NLB for gaming/real-time." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Module 4: Going Global - Infrastructure",
      description: "AWS's massive global footprint enables high availability and low latency.",
      sections: [
        {
          title: "Infrastructure Components",
          items: [
            { term: "Regions", focus: "Geographically distinct areas with isolated AZs.", example: "Choosing based on Latency, Data Sovereignty, and Price." },
            { term: "Availability Zones (AZs)", focus: "One or more discrete data centers with redundant power.", example: "AZs do not share single points of failure like flood plains." },
            { term: "Edge Locations", focus: "Small endpoints in major cities used for caching content.", example: "Caching images via CloudFront." },
            { term: "Local Zones", focus: "Extensions of Regions to metro areas for ultra-low latency.", example: "Live video streaming in specific cities." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Module 5: Networking (VPC)",
      description: "Logically isolated sections of the AWS Cloud and DNS routing.",
      sections: [
        {
          title: "VPC Networking",
          items: [
            { term: "Subnets", focus: "Public (has IGW route) vs Private (no direct internet route).", example: "Databases go in Private subnets." },
            { term: "Internet Gateway (IGW)", focus: "Allows communication between VPC and the internet.", example: "Gateway for public web servers." },
            { term: "NAT Gateway", focus: "Allows private subnets outbound internet access (for patches).", example: "Allowing a DB to download security updates." },
            { term: "Route Tables", focus: "Defines where network traffic is directed.", example: "Routing all outbound traffic to an IGW." }
          ]
        },
        {
            title: "DNS & Delivery",
            items: [
                { term: "Amazon Route 53", focus: "Scalable DNS and domain registration service.", example: "Failover routing to a standby site." },
                { term: "Amazon CloudFront", focus: "CDN — caches static content at edge locations.", example: "Serving videos closer to global users." },
                { term: "Global Accelerator", focus: "Routes traffic over private AWS network for dynamic traffic.", example: "Improving latency for real-time multiplayer gaming." }
            ]
        }
      ]
    },
    {
      id: 6,
      title: "Module 6: Storage Solutions",
      description: "Choosing the right storage based on access patterns, persistence, and durability.",
      customHtml: `
        <div class="bg-zinc-950 p-10 rounded-[3rem] mb-12 shadow-2xl">
            <h4 class="text-white mb-8 font-bold text-xl text-center">S3 Storage Class Hierarchy</h4>
            <div class="space-y-4">
                <div class="flex justify-between items-center p-4 border-b border-white/10">
                    <span class="text-emerald-400 font-bold text-sm">S3 Standard</span>
                    <span class="text-[10px] text-zinc-400 uppercase tracking-widest font-black font-mono">$$$ Frequent Access</span>
                </div>
                <div class="flex justify-between items-center p-4 border-b border-white/10">
                    <span class="text-emerald-400 font-bold text-sm">S3 Intelligent-Tiering</span>
                    <span class="text-[10px] text-zinc-400 uppercase tracking-widest font-black font-mono">$$ Auto-Savings</span>
                </div>
                <div class="flex justify-between items-center p-4 border-b border-white/10">
                    <span class="text-emerald-400 font-bold text-sm">S3 Standard-IA</span>
                    <span class="text-[10px] text-zinc-400 uppercase tracking-widest font-black font-mono">$ Infrequent Retrieval</span>
                </div>
                <div class="flex justify-between items-center p-4">
                    <span class="text-emerald-400 font-bold text-sm">S3 Glacier Deep Archive</span>
                    <span class="text-[10px] text-zinc-400 uppercase tracking-widest font-black font-mono">0.01$ Archival (Hours)</span>
                </div>
            </div>
        </div>
      `,
      sections: [
        {
          title: "Storage Types & Comparisons",
          items: [
            { term: "Amazon S3", focus: "Scalable Object Storage via Web API. Designed for 99.999999999% durability.", example: "Ideal for data lakes, off-site backups, and static website hosting." },
            { term: "Amazon EBS", focus: "High-performance Block Storage for EC2. Persistent network drive volumes.", example: "Hosting the OS boot volume or a high-speed database." },
            { term: "EBS vs S3", focus: "EBS is a local hard drive (Block) for one server; S3 is a global URL-accessible drive (Object).", example: "EBS for the 'C: drive'; S3 for shared user uploads." },
            { term: "Instance Store", focus: "Ephemeral Block Storage physically attached to host server. Highest I/O performance, but data is lost on stop.", example: "Temporary buffers and high-speed scratch space." },
            { term: "Amazon EFS", focus: "Managed shared File Storage (NFS) for multiple Linux instances. Scales automatically.", example: "Shared web content across a fleet of servers." }
          ]
        },
        {
            title: "Storage Differentiators",
            items: [
                { term: "S3 vs EFS vs EBS", focus: "Object (API) vs. File (Network Share) vs. Block (Attached volume).", example: "S3 for web scale; EFS for shared configuration; EBS for single-instance apps." },
                { term: "Storage Gateway", focus: "Hybrid storage service connecting on-premises environments to AWS cloud storage.", example: "Replacing on-prem tape backups with cloud-integrated S3 storage." },
                { term: "Amazon FSx", focus: "Managed file systems for specific stacks like Windows (SMB) or Parallel/HPC (Lustre).", example: "Migrating enterprise Windows file shares." }
            ]
        }
      ]
    },
    {
      id: 7,
      title: "Module 7: Databases",
      description: "Relational, NoSQL, and specialized managed database services.",
      sections: [
        {
          title: "Relational (SQL)",
          items: [
            { term: "Amazon RDS", focus: "Managed SQL DB (MySQL, Postgres, SQL Server, Oracle).", example: "Standard business apps requiring ACID compliance." },
            { term: "Amazon Aurora", focus: "Cloud-native SQL DB. 5x faster than MySQL. High performance.", example: "Scalable mission-critical enterprise databases." },
            { term: "Aurora Multi-AZ", focus: "Replicated across 3 AZs automatically. High availability.", example: "Self-healing database architecture." }
          ]
        },
        {
            title: "NoSQL & Specialized",
            items: [
                { term: "Amazon DynamoDB", focus: "Serverless key-value DB. Single-digit ms latency at any scale.", example: "Shopping carts and real-time user sessions." },
                { term: "Amazon Neptune", focus: "Managed graph database service.", example: "Social networks and fraud detection graphs." },
                { term: "Amazon MemoryDB", focus: "Durable, Redis-compatible in-memory database.", example: "Real-time leaderboards requiring microsecond reads." }
            ]
        }
      ]
    },
    {
      id: 8,
      title: "Module 8: Application Integration & Modern Services",
      description: "Decoupling services and leveraging AI/ML capabilities.",
      customHtml: `
        <div class="bg-white p-8 rounded-3xl mb-12 border border-zinc-100 shadow-sm text-center md:text-left">
            <h4 class="text-zinc-900 mb-6 font-bold text-lg">AI/ML Service Dictionary</h4>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-[10px]">
                <div class="p-3 border border-zinc-100 rounded-lg text-left"><span class="font-bold block uppercase mb-1">SageMaker</span>Build/Train ML Models</div>
                <div class="p-3 border border-zinc-100 rounded-lg text-left"><span class="font-bold block uppercase mb-1">Rekognition</span>Image & Video Analysis</div>
                <div class="p-3 border border-zinc-100 rounded-lg text-left"><span class="font-bold block uppercase mb-1">Polly</span>Text-to-Speech</div>
                <div class="p-3 border border-zinc-100 rounded-lg text-left"><span class="font-bold block uppercase mb-1">Translate</span>Language Translation</div>
                <div class="p-3 border border-zinc-100 rounded-lg text-left"><span class="font-bold block uppercase mb-1">Lex</span>Conversational Chatbots</div>
                <div class="p-3 border border-zinc-100 rounded-lg text-left"><span class="font-bold block uppercase mb-1">Transcribe</span>Audio-to-Text</div>
                <div class="p-3 border border-zinc-100 rounded-lg text-left"><span class="font-bold block uppercase mb-1">Textract</span>Scan Docs/Tables</div>
                <div class="p-3 border border-zinc-100 rounded-lg text-left"><span class="font-bold block uppercase mb-1">Comprehend</span>NLP Sentiment Analysis</div>
            </div>
        </div>
      `,
      sections: [
        {
          title: "Messaging & Integration",
          items: [
            { term: "Amazon SQS", focus: "Message queuing (Pull model). Decouples producer from consumer.", example: "Decoupling order placement from shipping systems." },
            { term: "Amazon SNS", focus: "Pub/Sub messaging (Push model). Instant fan-out to many.", example: "Sending email/SMS alerts to subscribers." },
            { term: "SNS vs SQS", focus: "SNS is Push (One-to-Many). SQS is Pull (One-to-One).", example: "SNS to notify; SQS to process tasks in the background." },
            { term: "Amazon EventBridge", focus: "Serverless event bus. Routes events from SaaS and AWS apps.", example: "Triggering a Lambda on a Zendesk ticket change." },
            { term: "AWS Step Functions", focus: "Visual workflow orchestration for distributed apps.", example: "Coordinating multi-step Lambda workflows." }
          ]
        },
        {
            title: "Analytics",
            items: [
                { term: "Amazon Athena", focus: "Serverless SQL queries directly on data in S3. Pay per query.", example: "Analyzing VPC Flow Logs without moving them." },
                { term: "Amazon Redshift", focus: "Managed data warehouse for complex analytics at petabyte scale.", example: "Historical sales trend analysis." },
                { term: "Amazon QuickSight", focus: "BI and dashboard visualization service.", example: "Creating charts for executive reporting." },
                { term: "Amazon Kinesis", focus: "Real-time data streaming (logs, IoT, clickstream).", example: "Real-time website traffic monitoring." },
                { term: "AWS Glue", focus: "Serverless ETL (Extract, Transform, Load) service.", example: "Preparing data for Redshift analysis." }
            ]
        }
      ]
    },
    {
      id: 11,
      title: "Module 11: Monitoring, Health & Guidance",
      description: "Keeping systems healthy and optimized with real-time feedback.",
      sections: [
        {
          title: "Operational Visibility",
          items: [
            { term: "Amazon CloudWatch", focus: "Metrics, Logs, and Alarms (WHAT is happening). Performance focus.", example: "Alarms for high CPU or error counts." },
            { term: "AWS CloudTrail", focus: "Audit trail of every API call (WHO did WHAT). Governance focus.", example: "Investigating which user deleted an EC2 instance." },
            { term: "CloudWatch vs CloudTrail", focus: "CloudWatch = Performance/Resource state. CloudTrail = API call logs/History.", example: "CloudWatch alerts on disk space; CloudTrail shows who formatted the disk." },
            { term: "AWS Config", focus: "Continuous config compliance auditing.", example: "Checking if S3 buckets are public." },
            { term: "AWS Health Dashboard", focus: "Proactive notifications about maintenance and outages.", example: "Alerts for scheduled EC2 maintenance." }
          ]
        }
      ]
    }
  ],
  concepts: []
};

export const domain4: Domain = {
  id: 4,
  name: "Billing, Pricing, and Support",
  weight: "12%",
  color: "#768A76",
  icon: "",
  diagramTitle: "EC2 Pricing Models",
  diagram: PricingModelsDiagram,
  detailedNotes: ``,
  modules: [
    {
      id: 12,
      title: "Module 12: Pricing and Support Plans",
      description: "AWS offers multiple purchasing options and support tiers to match different business needs.",
      customHtml: `
        <div class="bg-white p-8 rounded-3xl mb-12 border border-zinc-100 shadow-sm">
            <h4 class="text-zinc-900 mb-8 font-bold text-lg flex items-center gap-2 text-center md:text-left justify-center md:justify-start">
                <span class="h-6 w-1 bg-emerald-500 rounded-full"></span>
                Support Plan Comparison
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div class="p-4 rounded-xl bg-zinc-50 border border-zinc-100 text-center">
                    <div class="font-bold text-sm mb-1 text-zinc-900 text-center">Basic</div>
                    <div class="text-[10px] text-emerald-700 font-bold mb-4 uppercase text-center">Free</div>
                    <ul class="text-[10px] text-zinc-500 space-y-2 text-left px-4">
                        <li>7 Trusted Advisor checks</li>
                        <li>24/7 Cust. Service</li>
                    </ul>
                </div>
                <div class="p-4 rounded-xl bg-zinc-50 border border-zinc-100 text-center">
                    <div class="font-bold text-sm mb-1 text-zinc-900 text-center">Developer</div>
                    <div class="text-[10px] text-emerald-700 font-bold mb-4 uppercase text-center">$29+/mo</div>
                    <ul class="text-[10px] text-zinc-500 space-y-2 text-left px-4">
                        <li>1 Contact / Email</li>
                        <li>SLA: &lt; 12-24h</li>
                    </ul>
                </div>
                <div class="p-4 rounded-xl border border-emerald-200 bg-emerald-50/20 text-center">
                    <div class="font-bold text-sm mb-1 text-zinc-900 text-center">Business</div>
                    <div class="text-[10px] text-emerald-700 font-bold mb-4 uppercase text-center">$100+/mo</div>
                    <ul class="text-[10px] text-zinc-700 space-y-2 font-medium text-left px-4">
                        <li>24/7 Phone/Chat</li>
                        <li>SLA: &lt; 1h Prod.</li>
                        <li>Full Trusted Advisor</li>
                    </ul>
                </div>
                <div class="p-4 rounded-xl border border-amber-200 bg-amber-50/20 text-center">
                    <div class="font-bold text-sm mb-1 text-zinc-900 text-center">Enterprise</div>
                    <div class="text-[10px] text-amber-700 font-bold mb-4 uppercase text-center">$15k+/mo</div>
                    <ul class="text-[10px] text-zinc-700 space-y-2 font-medium text-left px-4">
                        <li>Dedicated TAM</li>
                        <li>SLA: &lt; 15m Crit.</li>
                        <li>Concierge Support</li>
                    </ul>
                </div>
            </div>
        </div>
      `,
      sections: [
        {
          title: "Purchasing Options",
          items: [
            { term: "On-Demand", focus: "No commitment. Pay by the hour/second. Highest unit cost.", example: "Short-term or unpredictable workloads." },
            { term: "Reserved Instances (RIs)", focus: "1 or 3 year commitment. Up to 72% discount.", example: "Predictable, steady-state production servers." },
            { term: "Savings Plans", focus: "Commit to spend rate ($/hr). Flexible across EC2/Lambda/Fargate.", example: "Modern compute cost reduction." },
            { term: "Spot Instances", focus: "Use spare capacity for up to 90% discount. Interrupted with 2m notice.", example: "Video rendering and batch jobs." },
            { term: "Dedicated Hosts", focus: "Physical server for your use. Support for BYOL licensing.", example: "Compliance requiring physical isolation." }
          ]
        },
        {
            title: "Cost Management Tools",
            items: [
                { term: "AWS Organizations", focus: "Consolidated billing and volume discounts across accounts.", example: "Sharing RI/SP discounts with sub-accounts." },
                { term: "AWS Cost Explorer", focus: "Visualize, forecast, and identify trends in AWS spend.", example: "Identifying which service caused a spike last month." },
                { term: "AWS Budgets", focus: "Set custom spend alerts and automated actions.", example: "Receiving an email when bill reaches 80% of budget." },
                { term: "Pricing Calculator", focus: "Estimate costs BEFORE deployment.", example: "Modeling the cost of a new 3-tier architecture." }
            ]
        }
      ]
    },
    {
      id: 15,
      title: "Module 15: Crucial Service Comparisons & Special Services",
      description: "Differentiating commonly confused AWS services for the exam.",
      customHtml: `
        <div class="bg-zinc-950 p-10 rounded-[3rem] mb-12 shadow-2xl">
            <h4 class="text-white mb-8 font-bold text-xl flex items-center gap-3 text-center justify-center md:justify-start">
               <span class="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></span>
               Cloud Survival Battlecard
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="border border-white/10 p-6 rounded-2xl bg-white/5">
                    <div class="font-bold text-emerald-400 mb-2 uppercase tracking-widest text-[10px]">CloudTrail vs CloudWatch</div>
                    <p class="text-xs text-zinc-400 leading-relaxed"><strong>CloudTrail:</strong> AUDIT (Who did What API call).<br/><strong>CloudWatch:</strong> PERFORMANCE (Metrics/Logs/Alarms).</p>
                </div>
                <div class="border border-white/10 p-6 rounded-2xl bg-white/5">
                    <div class="font-bold text-emerald-400 mb-2 uppercase tracking-widest text-[10px]">Inspector vs GuardDuty</div>
                    <p class="text-xs text-zinc-400 leading-relaxed"><strong>Inspector:</strong> SCAN (EC2 vulnerability findings).<br/><strong>GuardDuty:</strong> DETECT (ML-based threat hunting in logs).</p>
                </div>
                <div class="border border-white/10 p-6 rounded-2xl bg-white/5">
                    <div class="font-bold text-emerald-400 mb-2 uppercase tracking-widest text-[10px]">WAF vs Shield</div>
                    <p class="text-xs text-zinc-400 leading-relaxed"><strong>WAF:</strong> Layer 7 Firewall (SQLi/XSS).<br/><strong>Shield:</strong> DDoS Protection (Layers 3/4).</p>
                </div>
                <div class="border border-white/10 p-6 rounded-2xl bg-white/5">
                    <div class="font-bold text-emerald-400 mb-2 uppercase tracking-widest text-[10px]">ACM vs KMS</div>
                    <p class="text-xs text-zinc-400 leading-relaxed"><strong>ACM:</strong> SSL/TLS Certs (Data in Transit).<br/><strong>KMS:</strong> Encryption Keys (Data at Rest).</p>
                </div>
            </div>
        </div>
      `,
      sections: [
        {
          title: "Developer & Specialized Tools",
          items: [
            { term: "AWS Amplify", focus: "Full-stack web/mobile app build and hosting framework.", example: "Quickly building a serverless React app." },
            { term: "Amazon WorkSpaces", focus: "Managed Desktop-as-a-Service (DaaS) (Cloud Desktops).", example: "Providing remote employees with secure Windows desktops." },
            { term: "AWS IoT Core", focus: "Securely connect and process messages from millions of IoT devices.", example: "Collecting temperature data from smart sensors." },
            { term: "AWS CodePipeline", focus: "Fully managed CI/CD pipeline orchestration.", example: "Automating build, test, and deploy stages." },
            { term: "AWS AppStream 2.0", focus: "Stream desktop applications to any browser.", example: "Streaming 3D CAD apps to student laptops." }
          ]
        },
        {
            title: "Support Resources",
            items: [
                { term: "AWS Documentation", focus: "Comprehensive technical guides for every service.", example: "Referencing API details for S3." },
                { term: "AWS re:Post", focus: "Community Q&A platform for technical help.", example: "Asking experts about a specific VPC config issue." },
                { term: "AWS IQ", focus: "Marketplace to hire AWS-certified freelancers for projects.", example: "Hiring an expert for a one-week migration audit." },
                { term: "AWS Trust & Safety", focus: "Report abuse of AWS resources (spam, phishing, malware).", example: "Reporting a site hosted on AWS that is phishing." }
            ]
        }
      ]
    }
  ]
};

export const domains = [domain1, domain2, domain3, domain4];

export const domainContent: Record<number, Domain> = {
  1: domain1,
  2: domain2,
  3: domain3,
  4: domain4
};

/**
 * Sequential, flattened list of all 15 modules.
 */
export const allModules: Module[] = [
  { ...domain1.modules[0], domainId: 1, domainName: domain1.name, domainColor: domain1.color, order: 1 },
  { ...domain3.modules[0], domainId: 3, domainName: domain3.name, domainColor: domain3.color, order: 2 },
  { ...domain3.modules[1], domainId: 3, domainName: domain3.name, domainColor: domain3.color, order: 3 },
  { ...domain3.modules[2], domainId: 3, domainName: domain3.name, domainColor: domain3.color, order: 4 },
  { ...domain3.modules[3], domainId: 3, domainName: domain3.name, domainColor: domain3.color, order: 5 },
  { ...domain3.modules[4], domainId: 3, domainName: domain3.name, domainColor: domain3.color, order: 6 },
  { ...domain3.modules[5], domainId: 3, domainName: domain3.name, domainColor: domain3.color, order: 7 },
  { ...domain3.modules[6], domainId: 3, domainName: domain3.name, domainColor: domain3.color, order: 8 },
  { ...domain2.modules[0], domainId: 2, domainName: domain2.name, domainColor: domain2.color, order: 9 },
  { ...domain2.modules[1], domainId: 2, domainName: domain2.name, domainColor: domain2.color, order: 10 },
  { ...domain3.modules[7], domainId: 3, domainName: domain3.name, domainColor: domain3.color, order: 11 },
  { ...domain4.modules[0], domainId: 4, domainName: domain4.name, domainColor: domain4.color, order: 12 },
  { ...domain1.modules[1], domainId: 1, domainName: domain1.name, domainColor: domain1.color, order: 13 },
  { ...domain1.modules[2], domainId: 1, domainName: domain1.name, domainColor: domain1.color, order: 14 },
  { ...domain4.modules[1], domainId: 4, domainName: domain4.name, domainColor: domain4.color, order: 15 },
];
