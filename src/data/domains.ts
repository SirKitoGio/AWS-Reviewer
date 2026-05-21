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
      blueprint: {
        whyItMatters: "Traditional on-premises IT requires heavy upfront financial commitments and guesses on server capacity. AWS built cloud computing to convert fixed infrastructure costs into variable on-demand expenses, allowing companies to scale rapidly.",
        howToStudy: "Focus heavily on the difference between CapEx and OpEx, and memorize the 'Six Advantages of Cloud Computing' — they are tested through scenarios.",
        examRelevance: "Expect 3-4 direct questions on cloud economics and global infrastructure benefits."
      },
      strategist: {
        keyComparison: {
          title: "Financial Shift: CapEx vs. OpEx",
          headers: ["Attribute", "Capital Expense (CapEx)", "Operating Expense (OpEx)"],
          rows: [
            { label: "Financial Nature", values: ["Fixed, upfront investment", "Variable, usage-based expense"] },
            { label: "Analogy", values: ["Buying a house/physical data center", "Renting a hotel room/paying water bills"] },
            { label: "AWS Advantage", values: ["Eliminated entirely in the cloud", "Pay-as-you-go based on actual consumption"] },
            { label: "Key Benefit", values: ["Higher financial risk and guessing capacity", "Zero upfront cost and instant scaling"] }
          ]
        },
        examTricks: [
          "If a question asks about cost savings from moving to the cloud, look for the phrase 'trading capital expense for variable expense'.",
          "Agility refers to speed of resource acquisition (spin up a server in minutes); Elasticity refers to scaling resources automatically to meet load."
        ]
      },
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
          title: "High-Level AWS Services Overview",
          items: [
            { term: "Compute Services", focus: "The 'Muscle & Brains' - process data and host apps.", example: "EC2, Lambda, Fargate", whyItMatters: "Running physical CPU servers requires expensive space, power, cooling, and maintenance.", howItWorks: "AWS runs massive hypervisors globally, slicing physical servers into virtual instances that you can launch or terminate on demand.", keyWords: ["Compute-Virtualization", "Hypervisor", "Host-Hardware"] },
            { term: "Storage Services", focus: "The 'Filing Cabinets' - store files and raw data safely.", example: "S3, EFS, EBS", whyItMatters: "Traditional hard drives fail, leading to data loss unless you build complex backup architectures.", howItWorks: "AWS runs highly durable storage networks that automatically replicate files across physical locations.", keyWords: ["Data-Durability", "Storage-Replication", "Object-Block-File"] },
            { term: "Database Services", focus: "The 'Organized Data Engines' - queryable structured data.", example: "RDS, DynamoDB, Redshift", whyItMatters: "Installing and scaling relational databases requires professional DBAs and expensive hardware configuration.", howItWorks: "AWS offers managed database endpoints where software patching, replication, and scaling are automated.", keyWords: ["Managed-Endpoints", "Auto-Patching", "ACID-Compliance"] },
            { term: "Networking Services", focus: "The 'Roads & Traffic Cops' - secure data travel and routing.", example: "VPC, Route 53, CloudFront", whyItMatters: "Building secure physical network routes and global CDNs requires expensive switches, routers, and fiber lines.", howItWorks: "AWS creates software-defined networks that route data securely and cache assets at edge locations globally.", keyWords: ["Software-Defined-Network", "Global-Cache", "Router-Switches"] }
          ]
        },
        {
          title: "The Six Advantages of Cloud Computing",
          items: [
            {
              term: "Trade CapEx for Variable Expense",
              focus: "Pay only for what you consume instead of heavy upfront data center investments.",
              example: "Paying $0.05/hour for an EC2 instance.",
              whyItMatters: "Eliminates high-risk hardware purchasing based on rough estimates, substituting it with a utility bill.",
              howItWorks: "Converts capital expense budgets into operating expenses, billing you only for real-time compute minutes.",
              keyWords: ["OpEx", "Variable-Billing", "Pay-As-You-Go"]
            },
            {
              term: "Massive Economies of Scale",
              focus: "Benefit from lower costs due to AWS's aggregate usage.",
              example: "Frequent price reductions passed to customers.",
              whyItMatters: "Individual companies can never negotiate hardware discounts as deeply as a global cloud hyperscaler.",
              howItWorks: "AWS purchases hardware in massive bulk, passing cost savings back to users through lower unit prices.",
              keyWords: ["Volume-Discount", "Cost-Savings", "Hyperscale"]
            },
            {
              term: "Stop Guessing Capacity",
              focus: "Eliminate over-provisioning and idle resources.",
              example: "Using Auto Scaling to meet exact traffic demands.",
              whyItMatters: "Over-provisioning leaves expensive servers idle; under-provisioning crashes your website during high traffic.",
              howItWorks: "Allows capacity to adjust automatically in real-time, matching traffic patterns exactly without manual effort.",
              keyWords: ["Capacity-Planning", "Elasticity", "Dynamic-Scaling"]
            },
            {
              term: "Increase Speed & Agility",
              focus: "Resources are a click away, reducing deployment from weeks to minutes.",
              example: "Spinning up a GPU cluster for ML training instantly.",
              whyItMatters: "Waiting weeks for IT to rack physical servers delays product launches and market validation.",
              howItWorks: "Exposes API endpoints that spin up complete compute systems in under two minutes with a single API call.",
              keyWords: ["Agility", "Rapid-Deployment", "API-Access"]
            },
            {
              term: "Stop Maintaining Data Centers",
              focus: "Focus on business differentiators, not infrastructure.",
              example: "Letting AWS handle power, cooling, and hardware.",
              whyItMatters: "Power bills, air cooling, security guards, and server racks are operational drains that do not improve your business product.",
              howItWorks: "Outsources the physical heavy lifting of infrastructure operations entirely to AWS, freeing teams to focus on software.",
              keyWords: ["Heavy-Lifting", "Operational-Focus", "Facility-Management"]
            },
            {
              term: "Go Global in Minutes",
              focus: "Deploy applications in multiple regions worldwide with low latency.",
              example: "Launching an app in Tokyo and London simultaneously.",
              whyItMatters: "Building data centers worldwide is financially impossible for most businesses, yet latency hurts user adoption.",
              howItWorks: "Deploys your application across AWS's global network of regions and edge locations instantly with uniform templates.",
              keyWords: ["Global-Reach", "Low-Latency", "Multi-Region"]
            }
          ]
        },
        {
            title: "Cloud Service Models",
            items: [
                {
                  term: "IaaS",
                  focus: "Infrastructure as a Service. You manage OS, Middleware, Apps. AWS manages Hardware/Virtualization.",
                  example: "Amazon EC2 (Virtual Machines).",
                  whyItMatters: "Offers the highest level of flexibility and architectural control, behaving exactly like an on-premises server.",
                  howItWorks: "AWS manages the physical hardware and hypervisor, while you manage the guest operating system, applications, and networking rules.",
                  keyWords: ["Infrastructure", "OS-Control", "EC2"]
                },
                {
                  term: "PaaS",
                  focus: "Platform as a Service. You manage only the application and data. AWS manages OS and Runtimes.",
                  example: "AWS Elastic Beanstalk, Amazon RDS.",
                  whyItMatters: "Allows developers to focus purely on code and database logic without spending hours configuring servers, networks, or OS patches.",
                  howItWorks: "AWS automates the operating system, runtime environment, and scaling, letting you upload app bundles directly.",
                  keyWords: ["Platform", "Elastic-Beanstalk", "Developer-Speed"]
                },
                {
                  term: "SaaS",
                  focus: "Software as a Service. AWS manages everything. You just use the software.",
                  example: "Amazon WorkSpaces, AWS Chime.",
                  whyItMatters: "Provides ready-made software solutions with zero administrative overhead, immediately usable by end-users.",
                  howItWorks: "AWS hosts, patches, maintains, and secures the entire application stack, exposing a finished web portal or interface.",
                  keyWords: ["Software-As-Service", "Zero-Management", "WorkSpaces"]
                }
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
            {
              term: "Retire",
              focus: "Turn off applications no longer needed.",
              example: "Decommissioning a legacy reporting tool.",
              whyItMatters: "Keeping legacy software active consumes budget and increases the security threat surface unnecessarily.",
              howItWorks: "Identify unused systems via AWS Application Discovery Service and permanently power them down.",
              keyWords: ["Migration", "Cost-Control", "Cleanup"]
            },
            {
              term: "Retain",
              focus: "Keep apps on-premises for now (compliance/readiness).",
              example: "Keeping a mainframe system as-is.",
              whyItMatters: "Some systems cannot migrate due to strict low-latency requirements, data residency laws, or recent capital investments.",
              howItWorks: "Keep workloads on-premises and review compliance boundaries periodically for future migration readiness.",
              keyWords: ["Compliance", "On-Premises", "Strategic"]
            },
            {
              term: "Rehost",
              focus: "Lift and Shift - move as-is with no changes.",
              example: "Moving a VM to EC2.",
              whyItMatters: "Provides the fastest migration path to the cloud ('lift and shift') with minimal code modifications.",
              howItWorks: "Use AWS Application Migration Service (MGN) to replicate physical or virtual servers directly into EC2.",
              keyWords: ["Lift-And-Shift", "Speed", "Replication"]
            },
            {
              term: "Relocate",
              focus: "Hypervisor Lift - move without conversion.",
              example: "VMware Cloud on AWS.",
              whyItMatters: "Allows shifting entire containerized or virtualized host environments to the cloud without hypervisor conversions.",
              howItWorks: "Instantly move vSphere virtual machines to VMware Cloud on AWS over a dedicated direct network link.",
              keyWords: ["VMware", "Zero-Conversion", "Hypervisor"]
            },
            {
              term: "Repurchase",
              focus: "Drop and Shop - switch to a cloud-native SaaS.",
              example: "Moving from on-prem CRM to Salesforce.",
              whyItMatters: "Moving to a SaaS solution offloads custom operational overhead and software maintenance completely.",
              howItWorks: "Decommission custom apps and purchase commercial licenses on the AWS Marketplace.",
              keyWords: ["SaaS", "Marketplace", "Outsource"]
            },
            {
              term: "Replatform",
              focus: "Lift, Tinker, and Shift - small optimizations.",
              example: "Moving a DB to Amazon RDS.",
              whyItMatters: "Allows reaping cloud benefits like managed backups and autoscaling without major code rewrites ('lift, tinker, and shift').",
              howItWorks: "Migrate databases directly to fully managed Amazon RDS instances instead of running DB engines on custom EC2.",
              keyWords: ["Managed-Services", "RDS", "Tinker"]
            },
            {
              term: "Refactor",
              focus: "Re-architect - fundamentally redesign as cloud-native.",
              example: "Monolith to microservices with Lambda.",
              whyItMatters: "Maximizes scalability, agility, and cost savings by re-architecting systems to be natively serverless.",
              howItWorks: "Rewrite monolithic application code to utilize serverless microservices like AWS Lambda and Amazon DynamoDB.",
              keyWords: ["Serverless", "Cloud-Native", "Microservices"]
            }
          ]
        },
        {
          title: "Migration Resources",
          items: [
            {
              term: "AWS Migration Hub",
              focus: "Central dashboard to track the progress of migrations.",
              example: "Monitoring 5 simultaneous app migrations.",
              whyItMatters: "Provides a centralized dashboard to track and coordinate multiple migration tools and statuses.",
              howItWorks: "Consolidates progress logs from AWS Application Discovery Service, MGN, and database migrations into one dashboard.",
              keyWords: ["Dashboard", "Tracking", "Coordination"]
            },
            {
              term: "AWS Application Discovery Service",
              focus: "Collects info about on-prem servers to help plan.",
              example: "Inventorying on-prem assets for assessment.",
              whyItMatters: "You cannot migrate what you do not know. Companies need automated software to map local server configurations.",
              howItWorks: "Deploys local agents or runs agentless collector VMs to gather system specs, resource usage, and network dependencies.",
              keyWords: ["Discovery", "Inventory", "Mapping"]
            },
            {
              term: "AWS Database Migration Service (DMS)",
              focus: "Migrates databases to AWS quickly and securely.",
              example: "Keeping source DB operational during migration.",
              whyItMatters: "Migrating massive production databases normally causes hours of high-risk downtime.",
              howItWorks: "Sets up a replication server that mirrors local database changes to AWS in real-time, keeping the source operational.",
              keyWords: ["Replication", "Database", "Zero-Downtime"]
            },
            {
              term: "AWS Snow Family",
              focus: "Physical devices to transfer large data volumes.",
              example: "Using Snowball for a 100TB data migration when network is slow.",
              whyItMatters: "Uploading hundreds of terabytes over normal internet lines takes months and saturates business bandwidth.",
              howItWorks: "AWS ships physical, ruggedized hardware appliances (Snowball, Snowcone) to load data locally and ship back to AWS.",
              keyWords: ["Offline-Transfer", "Snowball", "Petabyte-Scale"]
            }
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
            {
              term: "Operational Excellence",
              focus: "Perform operations as code. Make small, reversible changes. Learn from failures.",
              example: "Using CloudFormation for automated rollbacks.",
              whyItMatters: "Manual operations are prone to human error, slow to recover, and difficult to audit.",
              howItWorks: "Perform operations as code (IaC), document small frequent steps, and practice disaster recovery scenarios.",
              keyWords: ["Operations", "Automation", "Continuous-Improvement"]
            },
            {
              term: "Security",
              focus: "Strong identity foundation. Traceability at all layers. Data protection at rest/transit.",
              example: "Using KMS for S3 encryption.",
              whyItMatters: "A single security breach can destroy customer trust and lead to heavy financial or legal penalties.",
              howItWorks: "Enforce strong identity foundations, enable multi-layered encryption, and automate threat detection alerts.",
              keyWords: ["Identity", "Encryption", "Protection"]
            },
            {
              term: "Reliability",
              focus: "Automatically recover from failure. Scale horizontally. Stop guessing capacity.",
              example: "Multi-AZ and Auto Scaling.",
              whyItMatters: "Hardware fails. Systems must automatically absorb shocks, scale horizontally, and heal without human intervention.",
              howItWorks: "Distribute workloads across multiple Availability Zones, set up Auto Scaling, and use managed multi-master DBs.",
              keyWords: ["Resiliency", "High-Availability", "Healing"]
            },
            {
              term: "Performance Efficiency",
              focus: "Democratize advanced technologies. Go global in minutes. Serverless.",
              example: "Using SageMaker instead of building ML from scratch.",
              whyItMatters: "Using oversized instances or improper resource types wastes money and degrades user experiences.",
              howItWorks: "Select optimal compute, database, and storage architectures based on workload demands, and utilize serverless options.",
              keyWords: ["Efficiency", "Serverless", "Optimization"]
            },
            {
              term: "Cost Optimization",
              focus: "Cloud financial management. Consumption model. Analyze expenditure.",
              example: "Tagging resources for Cost Explorer breakdown.",
              whyItMatters: "Unmonitored cloud resources cause runaway bills and hurt business margins.",
              howItWorks: "Leverage the pay-as-you-go model, apply cost-allocation tags, and schedule idle instances to turn off when not in use.",
              keyWords: ["Financial-Management", "Savings", "Tagging"]
            },
            {
              term: "Sustainability",
              focus: "Minimize environmental impact. Maximize utilization. Adopt managed services.",
              example: "Using Graviton processors for energy efficiency.",
              whyItMatters: "Data centers consume massive amounts of global energy, creating an environmental footprint.",
              howItWorks: "Optimize server utilization, choose energy-efficient AWS hardware like Graviton processors, and minimize idle resources.",
              keyWords: ["Green-Cloud", "Efficiency", "Graviton"]
            }
          ]
        }
      ]
    },
    {
      id: 15,
      title: "Module 15: Core Infrastructure & Design Principles",
      description: "Key focus points on AWS Global Infrastructure scope, service boundaries, database use cases, and cloud best practices.",
      customHtml: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-center md:text-left">
            <div class="bg-zinc-950 p-8 rounded-3xl shadow-xl">
                <h4 class="text-emerald-400 mb-4 font-bold text-sm uppercase tracking-widest text-center md:text-left">Design Principles & Best Practices</h4>
                <div class="space-y-4 text-sm text-zinc-400">
                    <p><strong class="text-white">Services, Not Servers:</strong> Leverage managed & serverless resources (like Aurora, DynamoDB) to focus on products instead of racking, stacking, and maintaining physical servers.</p>
                    <p><strong class="text-white">Think Parallel:</strong> Parallelize request threads (e.g. S3 Multipart Upload API) to maximize data transfer performance and overall throughput.</p>
                    <p><strong class="text-white">Decouple Components:</strong> Use loose coupling (e.g., SQS messaging queues) to isolate layers so they interact asynchronously without direct dependencies, reinforcing SOA principles.</p>
                </div>
            </div>
            <div class="bg-white p-8 rounded-3xl border border-zinc-100 shadow-xl shadow-zinc-200/50">
                <h4 class="text-zinc-900 mb-4 font-bold text-sm uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
                    <span class="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    Service Scopes at a Glance
                </h4>
                <div class="space-y-4 text-xs text-zinc-500">
                    <p><strong class="text-zinc-900">Global Services:</strong> Spans all regions (e.g., IAM, Route 53, CloudFront, STS, Billing Conductor).</p>
                    <p><strong class="text-zinc-900">Regional Services:</strong> Bound to a single Region (e.g., RDS, DynamoDB, Amazon EFS, AWS Batch).</p>
                    <p><strong class="text-zinc-900">Zonal Services:</strong> Tied to a single Availability Zone (e.g., EC2 instances, EBS volumes). Note: EBS snapshots are regional.</p>
                </div>
            </div>
        </div>
      `,
      sections: [
        {
          title: "Global Infrastructure Scope & Boundaries",
          items: [
            {
              term: "Infrastructure Order",
              focus: "Descending size: Regions -> Availability Zones -> Edge Locations.",
              example: "Regions cover geographical areas; AZs consist of isolated data centers within a region; Edge Locations cache CloudFront content.",
              whyItMatters: "Understanding global infrastructure nesting enables you to design resilient architectures that survive regional disasters.",
              howItWorks: "Nested hierarchy: Regions contain multiple physically isolated Availability Zones, which run on local Edge cache nodes.",
              keyWords: ["Regions", "AZs", "Edge-Locations"]
            },
            {
              term: "VPC Subnet Bounds",
              focus: "Each subnet must reside entirely within exactly one Availability Zone (AZ).",
              example: "Subnets cannot span multiple AZs, protecting resources from single-point-of-failure events.",
              whyItMatters: "Subnets are the fundamental routing boundaries of a VPC; isolating them prevents broad network failure propagation.",
              howItWorks: "Each subnet is mapped to exactly one AZ. You run multiple subnets in different AZs to achieve high availability.",
              keyWords: ["Subnets", "Routing", "AZ-Bound"]
            },
            {
              term: "Region Selection",
              focus: "Choose regions based on Latency (proximity to users) and Data Sovereignty (legal compliance).",
              example: "Selecting a region in Europe to comply with GDPR requirements.",
              whyItMatters: "Deploying workloads to the wrong region increases user latency and can violate legal residency regulations.",
              howItWorks: "Select regions by balancing data laws (sovereignty), distance to end-users (latency), and cost variations.",
              keyWords: ["Data-Sovereignty", "Low-Latency", "Region-Cost"]
            },
            {
              term: "Storage Lifespan & Decommissioning",
              focus: "AWS decommissions end-of-life media securely using NIST 800-88 compliance standards.",
              example: "Ensuring customer data is safely destroyed before any device leaves AWS control.",
              whyItMatters: "Prevent residual customer data from leaking or being accessed when virtual disks are retired or replaced.",
              howItWorks: "AWS physically demagnetizes, shreds, or cryptographically erases decommissioned media using NIST 800-88 standards.",
              keyWords: ["Data-Sanitization", "NIST-Compliance", "Decommissioning"]
            }
          ]
        },
        {
          title: "Database Models & Use Cases",
          items: [
            {
              term: "Amazon Aurora",
              focus: "Highly scalable MySQL- and PostgreSQL-compatible relational (OLTP) database.",
              example: "E-commerce transactional database that auto-heals and replicates across 3 AZs.",
              whyItMatters: "Scaling relational databases traditionally requires complex replication setups and expensive database licensing.",
              howItWorks: "A cloud-native relational engine that automatically replicates data 6 ways across 3 AZs with instant failover.",
              keyWords: ["SQL", "Relational", "Cloud-Native"]
            },
            {
              term: "Amazon DynamoDB",
              focus: "Fully managed NoSQL database providing fast, predictable single-digit millisecond latency.",
              example: "Storing flexible, rapid-growth JSON document records for mobile applications.",
              whyItMatters: "Relational databases bottleneck and slow down when handling millions of concurrent microsecond requests.",
              howItWorks: "A serverless, key-value database that partitions data across solid-state drives, maintaining sub-10ms response times.",
              keyWords: ["NoSQL", "Serverless", "Key-Value"]
            },
            {
              term: "Amazon Redshift",
              focus: "Columnar database built for Online Analytical Processing (OLAP) and business intelligence.",
              example: "Running complex queries against petabytes of historical clickstream data.",
              whyItMatters: "Standard transactional databases crash when forced to run heavy queries on petabytes of historical data.",
              howItWorks: "Uses a columnar storage format and massively parallel processing (MPP) to aggregate billions of analytical data rows.",
              keyWords: ["Data-Warehouse", "Analytics", "Columnar"]
            }
          ]
        },
        {
          title: "Cloud Adoption & Security Responsibilities",
          items: [
            {
              term: "AWS CAF Business Perspective",
              focus: "Tailored to align strategic goals with cloud investments to expedite digital transformation and business outcomes.",
              example: "Strategy management, portfolio planning, and ROI tracking.",
              whyItMatters: "Ensures that cloud technology investments align directly with business goals, accelerating strategic outcomes.",
              howItWorks: "Guides business stakeholders on financial models, portfolio management, and digital transformation value.",
              keyWords: ["Business-Alignment", "ROI", "CAF"]
            },
            {
              term: "AWS CAF Security Perspective",
              focus: "Includes foundational compliance, identity access controls, and data protection capabilities.",
              example: "Establishing threat detection, incident response, and encryption standards.",
              whyItMatters: "Organizations transitioning to the cloud need structure to establish reliable security baselines and standards.",
              howItWorks: "Examines identity access, infrastructure security, threat protection, and data privacy compliance controls.",
              keyWords: ["Security-Posture", "Identity", "Compliance"]
            },
            {
              term: "Shared Controls & Infrastructure Patches",
              focus: "AWS patches host hypervisors & physical infrastructure, while customers patch guest OS and applications.",
              example: "AWS updates EC2 hypervisors; DBA patches EC2 SQL Server guest OS.",
              whyItMatters: "Clear boundaries prevent security lapses from assuming the other party patched a software vulnerability.",
              howItWorks: "AWS patches host hypervisors and firmware; the customer is responsible for guest OS (e.g. Windows/Linux) and apps.",
              keyWords: ["Patching", "Responsibility", "Hypervisor"]
            },
            {
              term: "Amazon Chime & Connect",
              focus: "Productivity applications for meetings/chat (Chime) and omnichannel customer service (Connect).",
              example: "Setting up a cloud contact center with Lex integrations for customer query routing.",
              whyItMatters: "Setting up physical contact centers and meeting systems requires massive hardware infrastructure and complex PBX routing.",
              howItWorks: "Cloud-delivered unified chat/voice systems (Chime) and serverless omnichannel customer service channels (Connect).",
              keyWords: ["Contact-Center", "Meeting", "SaaS"]
            }
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
                    <div>● Change Support Plan</div>
                    <div>● Enable MFA Delete on S3</div>
                </div>
            </div>
        </div>
      `,
      sections: [
        {
          title: "Security, Identity, & Compliance Overview (High-Level)",
          items: [
            {
              term: "AWS IAM",
              focus: "Controls who can access specific AWS services.",
              example: "Creating a developer user with limited S3 access.",
              whyItMatters: "Securing who and what can access your systems is the first and most critical security layer.",
              howItWorks: "Allows defining permissions in policy documents to restrict API access for specific users and server roles.",
              keyWords: ["IAM", "Authorization", "Access-Control"]
            },
            {
              term: "Amazon Cognito",
              focus: "Handles user sign-up/sign-in for apps.",
              example: "Adding 'Sign in with Google' to your mobile application.",
              whyItMatters: "Building secure web/mobile user login, OAuth flows, and social sign-on is complex and highly vulnerable if done wrong.",
              howItWorks: "Provides an identity directory that handles federation, verification tokens, and user registration flows out of the box.",
              keyWords: ["Identity-Federation", "OAuth", "User-Authentication"]
            },
            {
              term: "AWS Shield",
              focus: "Managed DDoS protection.",
              example: "Defending your app against massive Layer 3/4 flood attacks.",
              whyItMatters: "Distributed Denial of Service (DDoS) attacks can flood network channels, taking your application offline instantly.",
              howItWorks: "Uses edge network packet inspections to automatically absorb and redirect large Layer 3/4 traffic spikes.",
              keyWords: ["DDoS-Protection", "Network-Security", "Shield-Standard"]
            },
            {
              term: "AWS Artifact",
              focus: "Portal for compliance and audit reports.",
              example: "Downloading ISO certification reports for your auditors.",
              whyItMatters: "Auditors require official documentation proving your cloud provider complies with global compliance laws (SOC, PCI).",
              howItWorks: "Provides a secure self-service portal to instantly download AWS compliance audit reports and agreements.",
              keyWords: ["Compliance-Reports", "Auditing", "Governance"]
            },
            {
              term: "AWS KMS",
              focus: "Creates and controls cryptographic keys.",
              example: "Encrypting your S3 data with keys you control.",
              whyItMatters: "Protecting sensitive customer data requires robust encryption at rest with automated key rotation cycles.",
              howItWorks: "Uses Hardware Security Modules (HSMs) to generate and protect envelope keys that integrate across AWS storage services.",
              keyWords: ["Encryption-At-Rest", "Key-Management", "Envelope-Keys"]
            }
          ]
        },
        {
          title: "Identity & Access Management (IAM)",
          items: [
            {
              term: "Least Privilege",
              focus: "Grant minimum required permissions to limit blast radius.",
              example: "s3:GetObject instead of FullAccess.",
              whyItMatters: "Over-provisioning permissions expands the blast radius, allowing single compromised credentials to delete full environments.",
              howItWorks: "Configure IAM policies that only allow the exact API actions needed for a specific job function.",
              keyWords: ["Security-Baseline", "IAM-Policies", "Blast-Radius"]
            },
            {
              term: "Users, Groups & Roles",
              focus: "Users (People), Groups (Collection), Roles (Trusted Entities).",
              example: "EC2 assuming a Role to access S3.",
              whyItMatters: "Hardcoding API keys inside code or EC2 servers leads to leaks and security breaches.",
              howItWorks: "Users get long-term keys; Roles provide temporary security tokens assumed by trusted entities (like EC2).",
              keyWords: ["Temporary-Credentials", "IAM-Roles", "Groups"]
            },
            {
              term: "MFA",
              focus: "Multi-Factor Authentication for extra account security.",
              example: "Requiring a hardware token for admin access.",
              whyItMatters: "Passwords are frequently stolen; adding a second verification factor stops the majority of credential-based attacks.",
              howItWorks: "Requires users to enter an authorized one-time code generated from a physical device or virtual authenticator.",
              keyWords: ["Multi-Factor", "Identity-Verification", "Account-Lock"]
            },
            {
              term: "IAM Policies",
              focus: "JSON documents defining Allow/Deny logic.",
              example: "Customer Managed Policies for custom needs.",
              whyItMatters: "Granular JSON policies govern all resource interaction, ensuring fine-grained boundary control.",
              howItWorks: "Evaluates standard IAM JSON structures containing Effect (Allow/Deny), Action, Resource, and Condition parameters.",
              keyWords: ["JSON-Policies", "Permissions", "Identity-Boundaries"]
            }
          ]
        },
        {
          title: "Encryption & Certificates",
          items: [
            {
              term: "AWS KMS",
              focus: "Managed service for encryption keys (Data at Rest).",
              example: "Encrypting EBS volumes and RDS storage.",
              whyItMatters: "Protecting sensitive customer data requires robust encryption at rest with automated key rotation cycles.",
              howItWorks: "Uses Hardware Security Modules (HSMs) to generate and protect envelope keys that integrate across AWS storage services.",
              keyWords: ["Encryption-At-Rest", "Key-Management", "KMS"]
            },
            {
              term: "AWS Certificate Manager (ACM)",
              focus: "Provisions and manages SSL/TLS (Data in Transit).",
              example: "Automating HTTPS renewal for CloudFront.",
              whyItMatters: "Data in transit must be encrypted via SSL/TLS. Manually purchasing and renewing certificates is tedious and error-prone.",
              howItWorks: "Automates the generation, distribution, and renewal of SSL/TLS certificates for CloudFront, ALBs, and APIs.",
              keyWords: ["SSL-TLS", "Data-In-Transit", "Certificate-Renewal"]
            },
            {
              term: "Secrets Manager",
              focus: "Stores and automatically rotates database credentials.",
              example: "Rotating RDS password every 30 days.",
              whyItMatters: "Leaving database passwords hardcoded in plain-text code files is a major security risk.",
              howItWorks: "Enables secure API calls to retrieve passwords at runtime, with automated Lambda-based credential rotation.",
              keyWords: ["Secrets-Rotation", "Credentials", "Environment-Variables"]
            }
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
            {
              term: "AWS Artifact",
              focus: "Self-service portal for AWS compliance reports.",
              example: "Downloading SOC or PCI DSS reports.",
              whyItMatters: "Enterprises operating in regulated industries must prove to auditors that their underlying cloud infrastructure meets strict global security standards. AWS Artifact provides direct, on-demand access to AWS's own compliance documentation, drastically accelerating the audit lifecycle.",
              howItWorks: "Operates as a self-service console where users can search for, accept agreements, and immediately download official AWS audit reports, such as Service Organization Control (SOC) and Payment Card Industry (PCI) reports.",
              keyWords: ["Compliance-Reports", "Self-Service", "SOC-PCI", "Audit-Documentation"]
            },
            {
              term: "AWS Audit Manager",
              focus: "Automates evidence collection for continuous auditing.",
              example: "HIPAA evidence gathering.",
              whyItMatters: "Manually collecting operational evidence to prove compliance with regulations like HIPAA, GDPR, or PCI DSS requires weeks of manual screenshots and log gathering. AWS Audit Manager automates this evidence collection process, ensuring your compliance posture is continuously verified and audit-ready.",
              howItWorks: "Continuously maps your AWS resource configurations to compliance frameworks. It automatically collects snapshot evidence from config history, CloudTrail, and security hub findings, compiling them into organized reports.",
              keyWords: ["Continuous-Auditing", "Evidence-Collection", "Compliance-Mapping", "Framework-Automation"]
            },
            {
              term: "AWS Trusted Advisor",
              focus: "Real-time best practice checks across 5 categories.",
              example: "Finding security groups with open SSH ports (0.0.0.0/0).",
              whyItMatters: "Without automated scanning, misconfigured security groups, idle resource waste, and performance bottlenecks can go unnoticed, costing thousands and introducing severe vulnerabilities. Trusted Advisor acts as a continuous automated consultant advising on best practices.",
              howItWorks: "Inspects your entire AWS environment against best practice checks in five categories: Cost Optimization, Security, Fault Tolerance, Performance, and Service Limits, providing clear color-coded recommendations for remediation.",
              keyWords: ["Best-Practice-Checks", "Cost-Optimization", "Security-Inspection", "Remediation-Guidance"]
            }
          ]
        },
        {
            title: "Network Security & Shield",
            items: [
                {
                  term: "AWS Shield",
                  focus: "DDoS protection. Standard is free; Advanced is paid.",
                  example: "Protecting against Layer 3/4 flood attacks.",
                  whyItMatters: "Distributed Denial of Service (DDoS) attacks can easily overwhelm web applications, causing downtime and brand damage. AWS Shield provides managed DDoS protection, ensuring your internet-facing applications remain highly available under malicious traffic spikes.",
                  howItWorks: "AWS Shield Standard is automatically enabled for all AWS customers, shielding against common Layer 3 and 4 network attacks. Shield Advanced provides specialized mitigation, 24/7 access to the DDoS Response Team, and financial protection.",
                  keyWords: ["DDoS-Protection", "Infrastructure-Defense", "Layer-3-4-Mitigation", "Shield-Advanced"]
                },
                {
                  term: "AWS WAF",
                  focus: "Web App Firewall for Layer 7 attacks.",
                  example: "Blocking SQL injection and XSS exploits.",
                  whyItMatters: "DDoS protection at the network layer cannot stop application-level exploits like SQL injection or cross-site scripting (XSS) that bypass standard firewalls. AWS WAF blocks malicious HTTP/HTTPS requests at the application boundary before they reach your servers.",
                  howItWorks: "Deploys directly on CloudFront, Application Load Balancers (ALBs), or API Gateways. It evaluates incoming traffic against customizable rules, filtering IP addresses, HTTP headers, or request body payloads based on known attack signatures.",
                  keyWords: ["Layer-7-Firewall", "SQL-Injection-Defense", "Web-App-Firewall", "Traffic-Filtering"]
                },
                {
                  term: "Amazon GuardDuty",
                  focus: "Intelligent threat detection using ML on logs.",
                  example: "Detecting crypto-mining in your account.",
                  whyItMatters: "Identifying stealthy security threats like compromised credentials, DNS exfiltration, or active malware infections manually requires parsing millions of raw log files. Amazon GuardDuty acts as an intelligent, continuous threat hunter that monitors your account for malicious activity.",
                  howItWorks: "Uses machine learning, anomaly detection, and integrated threat intelligence to analyze metadata from VPC Flow Logs, CloudTrail Management events, and DNS query logs, generating detailed security findings without affecting resource performance.",
                  keyWords: ["Intelligent-Threat-Detection", "Machine-Learning-Security", "Anomaly-Detection", "Log-Analysis"]
                },
                {
                  term: "Amazon Inspector",
                  focus: "Automated vulnerability scanning for EC2/Containers.",
                  example: "Scanning for unpatched software (CVEs).",
                  whyItMatters: "Deploying software containing known software vulnerabilities (CVEs) or accidental configuration drift exposes virtual servers and container images to exploitation. Amazon Inspector automates vulnerability management by continuously scanning running workloads for security weaknesses.",
                  howItWorks: "Uses a lightweight agent or agentless scanning to automatically discover EC2 instances and ECR container repositories. It checks them against an updated database of vulnerabilities and network reachability flaws, producing categorized risk scores.",
                  keyWords: ["Vulnerability-Scanning", "EC2-Inspection", "Container-Security", "CVE-Assessment"]
                }
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
          title: "Compute Services Overview (High-Level)",
          items: [
            {
              term: "Amazon EC2",
              focus: "Virtual servers in the cloud (you manage the OS).",
              example: "Hosting a custom website on a Linux instance.",
              whyItMatters: "Physical hardware acquisition takes weeks, requires significant capital expenditures, and locks you into rigid setups. EC2 provides virtual servers instantly, allowing developers to scale capacity up or down to match real-time requirements without managing physical machines.",
              howItWorks: "AWS runs massive fleets of physical bare-metal host servers managed by secure hypervisors. When you launch an EC2 instance, the hypervisor allocates a slice of physical CPU, memory, and local storage, providing you with a virtual machine running your chosen operating system.",
              keyWords: ["Virtual-Machines", "Elastic-Compute", "Hypervisor", "On-Demand-OS"]
            },
            {
              term: "AWS Lambda",
              focus: "Serverless compute (run code without managing servers).",
              example: "Automatically resizing images uploaded to S3.",
              whyItMatters: "Even virtual servers like EC2 require OS patching, security hardening, and idle resource payment. Lambda eliminates server management entirely by executing code only when triggered by specific events, ensuring you pay only for active execution time.",
              howItWorks: "Lambda runs code inside highly secure micro-virtual machines that are spun up dynamically upon receiving an event trigger. The runtime environment is completely isolated, scaling automatically from zero to thousands of concurrent executions before destroying the micro-VMs.",
              keyWords: ["Serverless-Compute", "Event-Driven", "Micro-VMs", "Pay-Per-Execution"]
            },
            {
              term: "AWS Elastic Beanstalk",
              focus: "PaaS deployment tool (automatic provisioning).",
              example: "Quickly deploying a Java app without setting up EC2/VPC.",
              whyItMatters: "Configuring load balancers, auto-scaling groups, and databases manually is tedious for developers who just want to deploy code.",
              howItWorks: "You upload your application code bundle (e.g., Java, Python, Node.js), and Beanstalk automatically provisions the EC2 instances, load balancers, and scaling groups needed to run the app.",
              keyWords: ["Platform-As-Service", "Automated-Provisioning", "Developer-Efficiency"]
            },
            {
              term: "Amazon EC2 Auto Scaling",
              focus: "Adds/removes EC2 instances based on demand.",
              example: "Scaling out during Black Friday traffic spikes.",
              whyItMatters: "Web traffic is highly unpredictable, leading to crashed servers during traffic spikes or wasted money during quiet periods. Auto Scaling solves this by dynamically resizing your EC2 fleet, maintaining application availability and cost efficiency.",
              howItWorks: "Monitors application metrics such as CPU utilization through CloudWatch alarms. Based on pre-defined scaling policies, it automatically launches new instances to handle increased load or terminates idle instances when traffic drops.",
              keyWords: ["Dynamic-Scaling", "High-Availability", "CloudWatch-Alarms", "Elasticity"]
            },
            {
              term: "Amazon ECS",
              focus: "Runs Docker containers.",
              example: "Managing a microservices architecture with Docker.",
              whyItMatters: "Managing Docker containers across multiple physical or virtual servers requires complex configuration, orchestration, and state synchronization. ECS provides a highly scalable container management service to run microservices without setting up custom orchestration software.",
              howItWorks: "A centralized orchestration brain coordinates container placements and health checks across a cluster of EC2 instances or serverless Fargate tasks, automatically distributing workloads and exposing endpoints.",
              keyWords: ["Container-Orchestration", "Docker-Support", "Microservices", "Cluster-Management"]
            },
            {
              term: "Amazon EKS",
              focus: "Runs Kubernetes containers.",
              example: "Orchestrating complex containerized apps with K8s.",
              whyItMatters: "Kubernetes has become the industry standard for container orchestration, but hosting it on-premises requires managing complex master node control planes. EKS offers a fully managed Kubernetes-compatible service, removing the administration overhead.",
              howItWorks: "AWS automatically runs and scales the Kubernetes control plane (master nodes) across multiple Availability Zones, ensuring high availability, while you focus on running work tasks.",
              keyWords: ["Kubernetes", "Container-Management", "Open-Source-Standard", "Multi-AZ-Control"]
            },
            {
              term: "Amazon ECR",
              focus: "Secure storage for container images.",
              example: "Storing your Docker images for deployment.",
              whyItMatters: "Containers need a secure, highly available registry to store, share, and pull container images quickly during deployment.",
              howItWorks: "ECR hosts container image files in a highly secure, private registry integrated with IAM, allowing ECS and EKS to pull images directly over the internal network.",
              keyWords: ["Container-Registry", "Image-Storage", "IAM-Integration"]
            },
            {
              term: "AWS Fargate",
              focus: "Serverless compute for containers (ECS/EKS).",
              example: "Running containers without managing EC2 servers.",
              whyItMatters: "Even with ECS or EKS, managing the underlying EC2 instances, patching their operating systems, and scaling host clusters adds operational burden. Fargate removes the host management layer entirely, turning containers into serverless compute engines.",
              howItWorks: "Instead of running containers on EC2 servers you provision, Fargate provisions the compute capacity on demand on a per-container basis, isolating each task inside its own dedicated kernel-level virtual machine.",
              keyWords: ["Serverless-Containers", "No-EC2-Management", "Task-Isolation", "On-Demand-Compute"]
            }
          ]
        },
        {
          title: "Interacting with AWS",
          items: [
            {
              term: "Management Console",
              focus: "GUI browser interface. Great for one-time tasks.",
              example: "Manually checking a resource's status.",
              whyItMatters: "Provides an easy-to-use, visual entry point for beginners and administrators to manage resources without writing code.",
              howItWorks: "A secure web-based browser interface that executes REST API calls to AWS endpoints behind the scenes as you click buttons.",
              keyWords: ["Graphical-Interface", "Visual-Administration", "Browser-Access"]
            },
            {
              term: "AWS CLI",
              focus: "Command-line tool for scripting and automation.",
              example: "aws s3 ls to list buckets.",
              whyItMatters: "Manual actions in the GUI are slow and error-prone, requiring a terminal tool to script and automate resources.",
              howItWorks: "A unified open-source command-line tool that enables control of AWS services via shell commands and bash scripts.",
              keyWords: ["Command-Line", "Scripted-Automation", "Open-Source-Tool"]
            },
            {
              term: "AWS SDKs",
              focus: "Programmatic access for code (Python, Java, Node).",
              example: "Boto3 library for app integration.",
              whyItMatters: "Applications need programmatic access to AWS services (e.g., uploading files to S3) using native programming languages.",
              howItWorks: "Provides language-specific libraries (like Python Boto3) that wrap the underlying HTTP REST APIs into standard code methods.",
              keyWords: ["Programmatic-Access", "Software-Libraries", "Boto3-Integration"]
            },
            {
              term: "AWS CloudShell",
              focus: "Browser-based pre-authenticated CLI shell.",
              example: "Running AWS commands without installing CLI locally.",
              whyItMatters: "Setting up the CLI, security credentials, and shell tools on local laptops is time-consuming and difficult.",
              howItWorks: "Launches a pre-authenticated, browser-based bash terminal in the AWS Console, pre-installed with the CLI and common tools.",
              keyWords: ["Browser-Terminal", "Pre-Authenticated", "Zero-Setup-CLI"]
            }
          ]
        },
        {
          title: "Infrastructure as Code (IaC)",
          items: [
            {
              term: "AWS CloudFormation",
              focus: "Native IaC using JSON/YAML templates.",
              example: "Defining a whole VPC and 10 EC2s in one file.",
              whyItMatters: "Manually provisioning complex multi-tier architectures across multiple accounts leads to configuration drift and human errors. CloudFormation automates and standardizes infrastructure setups, treating your network and servers as code.",
              howItWorks: "Parses declarative JSON or YAML template files, resolves dependencies between resources, and automatically calls the appropriate AWS APIs to build, update, or delete the entire stack.",
              keyWords: ["Infrastructure-As-Code", "Declarative-Templates", "Stack-Management", "Automation"]
            },
            {
              term: "AWS CDK",
              focus: "Define IaC using familiar programming languages.",
              example: "Using TypeScript to generate CloudFormation.",
              whyItMatters: "Writing thousands of lines of raw JSON/YAML templates can become hard to maintain and lacks logic loops or abstractions.",
              howItWorks: "Allows developers to define cloud infrastructure using familiar languages like TypeScript or Python, which compiles down into standard CloudFormation templates.",
              keyWords: ["Cloud-Development-Kit", "Software-Abstractions", "JSON-YAML-Compiler"]
            }
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
            {
              term: "Auto Scaling",
              focus: "Automatically adjusts capacity to maintain steady performance.",
              example: "Predictive scaling based on ML traffic forecast.",
              whyItMatters: "Maintaining static server fleets wastes significant budget during low traffic and causes application outages during spikes. Auto Scaling resolves this by automatically matching your instance count to active user demand.",
              howItWorks: "Triggers horizontal scaling policies based on CloudWatch performance metrics like CPU utilization or custom load counts, automatically launching or terminating instances.",
              keyWords: ["Dynamic-Scaling", "Horizontal-Scaling", "Elasticity", "Cost-Control"]
            },
            {
              term: "ELB (Elastic Load Balancer)",
              focus: "Distributes incoming traffic across multiple AZs.",
              example: "Routing HTTP traffic to healthy EC2 instances.",
              whyItMatters: "If a single virtual server is overloaded, it will crash. Even with multiple servers, you need a single entry point that intelligently distributes incoming user traffic to prevent any single server from failing.",
              howItWorks: "Acts as a highly available reverse proxy, accepting incoming traffic and routing it across a fleet of backend EC2 instances or containers, bypassing unhealthy instances automatically.",
              keyWords: ["Load-Balancing", "High-Availability", "Health-Checks", "Traffic-Distribution"]
            },
            {
              term: "ALB vs NLB",
              focus: "ALB (Layer 7 - HTTP/Path). NLB (Layer 4 - TCP/Extreme Performance).",
              example: "ALB for web apps; NLB for gaming/real-time.",
              whyItMatters: "Different applications require different routing intelligence and speed. Web applications need path-based HTTP routing, while gaming or trading apps require microsecond latency at the transport layer.",
              howItWorks: "Application Load Balancer (ALB) operates at Layer 7 (HTTP/HTTPS) and routes traffic based on URL paths or headers. Network Load Balancer (NLB) operates at Layer 4 (TCP/UDP) and handles millions of requests per second with ultra-low latency.",
              keyWords: ["Layer-7-Routing", "Layer-4-Performance", "HTTP-VS-TCP", "Ultra-Low-Latency"]
            }
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
            {
              term: "Regions",
              focus: "Geographically distinct areas with isolated AZs.",
              example: "Choosing based on Latency, Data Sovereignty, and Price.",
              whyItMatters: "Deploying apps to a single location increases latency for distant users and leaves you vulnerable to major natural disasters. Regions allow you to host your data closer to customers while meeting legal data compliance laws.",
              howItWorks: "A region is a fully independent geographical area containing multiple, physically isolated and redundant Availability Zones connected over low-latency fiber networks.",
              keyWords: ["Geographical-Redundancy", "Data-Sovereignty", "Low-Latency-Access", "Global-Footprint"]
            },
            {
              term: "Availability Zones (AZs)",
              focus: "One or more discrete data centers with redundant power.",
              example: "AZs do not share single points of failure like flood plains.",
              whyItMatters: "Single data center buildings are vulnerable to power outages, fires, or localized flooding. AZs enable high-availability architectures where applications survive hardware failures with zero downtime.",
              howItWorks: "Each AZ consists of one or more physical data centers with independent power, cooling, and network infrastructure, separated by miles but connected with low-latency links.",
              keyWords: ["Data-Center-Isolation", "High-Availability", "Fault-Tolerance", "Zonal-Redundancy"]
            },
            {
              term: "Edge Locations",
              focus: "Small endpoints in major cities used for caching content.",
              example: "Caching images via CloudFront.",
              whyItMatters: "Routing every single request from Tokyo back to a server in Virginia causes severe latency, harming user experience. Edge Locations solve this by caching static assets extremely close to the user's physical device.",
              howItWorks: "Small, highly distributed cache endpoints situated in major metropolitan areas globally. They intercept incoming user requests and serve cached content directly via Amazon CloudFront.",
              keyWords: ["Content-Caching", "CloudFront-Endpoints", "Low-Latency", "Distributed-Nodes"]
            },
            {
              term: "Local Zones",
              focus: "Extensions of Regions to metro areas for ultra-low latency.",
              example: "Live video streaming in specific cities.",
              whyItMatters: "Some latency-sensitive workloads like financial trading or cloud gaming require single-digit millisecond latency near metropolitan centers where no AWS Region exists.",
              howItWorks: "Places compute, storage, and database services extremely close to specific metropolitan populations, acting as an extension of a parent AWS Region.",
              keyWords: ["Metro-Compute", "Single-Digit-Latency", "Regional-Extension"]
            }
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
          title: "Networking & Content Delivery Overview (High-Level)",
          items: [
            {
              term: "Amazon VPC",
              focus: "Your secure, private network boundary inside AWS.",
              example: "Creating a subnet for your private database servers.",
              whyItMatters: "Public clouds share hardware globally, which would expose your raw server networking without boundary isolation. VPC solves this by letting you carve out a logically isolated, private network space in AWS, giving you complete control over your network topology, IP addressing, and security.",
              howItWorks: "Creates a virtual private network overlay on the AWS physical network using software-defined networking, where you define custom IPv4/IPv6 address blocks, route tables, and subnets to control resource connectivity.",
              keyWords: ["Logical-Isolation", "Software-Defined-Network", "CIDR-Blocks", "Private-Cloud-Space"]
            },
            {
              term: "Amazon Route 53",
              focus: "Highly available Domain Name System (DNS).",
              example: "Routing your domain 'example.com' to an AWS resource.",
              whyItMatters: "Computers communicate using complex IP addresses that are impossible for humans to remember. Route 53 acts as a highly reliable and scalable Domain Name System (DNS) to translate human-readable names (like example.com) into numeric IP addresses, while routing user traffic globally.",
              howItWorks: "Maintains a globally distributed network of DNS servers that process queries with low latency. It supports advanced routing policies like latency-based routing, geo-location routing, and health check-based failovers.",
              keyWords: ["DNS-Routing", "Domain-Registration", "Failover-Policies", "Global-Anycast-Network"]
            },
            {
              term: "Amazon CloudFront",
              focus: "Content Delivery Network (CDN) for fast downloads.",
              example: "Caching videos at edge locations for users in Australia.",
              whyItMatters: "Serving web assets from a single central Region to global users introduces massive round-trip latency, slowing down page loads. CloudFront resolves this by caching static and dynamic content at edge locations worldwide, dramatically reducing page load times.",
              howItWorks: "Acts as a globally distributed Content Delivery Network (CDN) that intercepts user requests at nearest Edge Locations. It retrieves content from origin servers (like S3 or ALB) upon first request and caches it locally for subsequent users.",
              keyWords: ["Global-CDN", "Content-Caching", "Edge-Locations", "Latency-Reduction"]
            },
            {
              term: "Elastic Load Balancing (ELB)",
              focus: "Distributes incoming traffic across multiple targets.",
              example: "Sharing load between 3 EC2 instances in different AZs.",
              whyItMatters: "A single compute node will eventually reach its throughput capacity or experience hardware failure. ELB prevents single-point-of-failure issues by automatically distributing incoming web traffic across multiple targets in different Availability Zones.",
              howItWorks: "Monitors backend target health and routes client traffic only to healthy instances, scaling automatically to handle sudden spikes in user requests.",
              keyWords: ["Traffic-Distribution", "High-Availability", "Health-Monitoring", "Auto-Scaling-Integration"]
            }
          ]
        },
        {
          title: "VPC Networking",
          items: [
            {
              term: "Subnets",
              focus: "Public (has IGW route) vs Private (no direct internet route).",
              example: "Databases go in Private subnets.",
              whyItMatters: "Putting database servers directly on the public internet exposes them to cyberattacks, while public web servers must be reachable by users. Subnets allow you to split your VPC IP range into isolated sections, securing private databases away from public exposure.",
              howItWorks: "Divides your VPC IP CIDR block into smaller ranges bound to single AZs. Public subnets route outbound traffic to an Internet Gateway (IGW); private subnets do not have direct routes to the internet.",
              keyWords: ["Zonal-Isolation", "Public-VS-Private", "Network-Segmentation", "IP-Allocation"]
            },
            {
              term: "Internet Gateway (IGW)",
              focus: "Allows communication between VPC and the internet.",
              example: "Gateway for public web servers.",
              whyItMatters: "VPC networks are completely private by default. An Internet Gateway is the crucial bridge that allows resources inside public subnets to connect to the public internet and vice-versa, making web hosting possible.",
              howItWorks: "Acts as a redundant, horizontally scaled software gateway that performs Network Address Translation (NAT) for public IP addresses, bridging VPC private traffic to the external internet.",
              keyWords: ["Internet-Bridge", "Two-Way-NAT", "Public-Subnet-Route", "Gateway-Attachment"]
            },
            {
              term: "NAT Gateway",
              focus: "Allows private subnets outbound internet access (for patches).",
              example: "Allowing a DB to download security updates.",
              whyItMatters: "Private servers (like databases) need outbound internet access to download security patches, but allowing inbound connections would expose them to external threats. A NAT Gateway allows outbound connections while blocking malicious inbound traffic.",
              howItWorks: "A managed network address translation service placed in a public subnet. It forwards outbound packets from private subnets to the internet, replacing private source IPs with its public IP, and blocks unsolicited incoming packets.",
              keyWords: ["One-Way-Outbound", "Managed-NAT", "Security-Isolation", "Patch-Updates"]
            },
            {
              term: "Route Tables",
              focus: "Defines where network traffic is directed.",
              example: "Routing all outbound traffic to an IGW.",
              whyItMatters: "Without network directions, data packets would not know how to travel between subnets, databases, and the internet. Route Tables act as the network's traffic directories, deciding exactly where every data packet should be sent.",
              howItWorks: "A set of routing rules (routes) containing a destination CIDR block and a target gateway or interface, evaluated by the VPC router to determine packet destination.",
              keyWords: ["Traffic-Routing", "VPC-Router", "Route-Rules", "Packet-Forwarding"]
            }
          ]
        },
        {
          title: "DNS & Delivery",
          items: [
            {
              term: "Amazon Route 53",
              focus: "Scalable DNS and domain registration service.",
              example: "Failover routing to a standby site.",
              whyItMatters: "Provides domain registration and global name translation to ensure users can reach your applications using custom domain names.",
              howItWorks: "Translates web domain queries into AWS server IPs, using redundant Anycast servers to deliver high-availability DNS responses.",
              keyWords: ["DNS-Resolution", "Domain-Registry", "Health-Checks"]
            },
            {
              term: "Amazon CloudFront",
              focus: "CDN — caches static content at edge locations.",
              example: "Serving videos closer to global users.",
              whyItMatters: "Caches media and dynamic files at global edge locations to slash latency and protect backend servers from high traffic volumes.",
              howItWorks: "Distributes web requests across edge nodes, delivering static files locally and routing dynamic queries over the fast AWS backbone.",
              keyWords: ["Edge-Caching", "CDN-Origin", "DDoS-Mitigation"]
            },
            {
              term: "Global Accelerator",
              focus: "Routes traffic over private AWS network for dynamic traffic.",
              example: "Improving latency for real-time multiplayer gaming.",
              whyItMatters: "Routing user traffic over the public internet involves multiple hops across slow ISP networks, causing high jitter and packet loss. Global Accelerator routes your traffic through the private, high-performance AWS global fiber network, significantly improving speed.",
              howItWorks: "Provides static, globally unique IP addresses that act as front-end entry points. Incoming traffic is immediately ingested into the nearest edge location and routed entirely over the AWS internal network to your resources.",
              keyWords: ["Anycast-IPs", "AWS-Backbone-Network", "Latency-Optimization", "Jitter-Reduction"]
            }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Module 6: Storage Solutions",
      description: "Choosing the right storage based on access patterns, persistence, and durability.",
      blueprint: {
        whyItMatters: "Data is the lifeblood of any application. Different applications need different speeds, sharing capabilities, and costs. AWS built separate storage services (Object, Block, and File) to let you optimize for latency, sharing, and dollar value rather than buying expensive single-tier disks.",
        howToStudy: "Focus on accessibility bounds. Ask yourself: Does this storage need to connect to a single virtual server (EBS), be accessible by millions of users globally via web URLs (S3), or be mounted by hundreds of servers simultaneously (EFS)?",
        examRelevance: "Expect 5-6 questions on storage selection. Pay special attention to S3 storage classes (Standard, IA, Glacier) and their respective retrieval charges."
      },
      strategist: {
        keyComparison: {
          title: "Storage Types: Object vs. Block vs. File",
          headers: ["Attribute", "Amazon S3 (Object)", "Amazon EBS (Block)", "Amazon EFS (File)"],
          rows: [
            { label: "Analogy", values: ["Filing Cabinet (Key-Value)", "Raw Hard Drive (Sector/Block)", "Shared Folder (Network Drive)"] },
            { label: "Access Bounds", values: ["Global (Via Web URL API)", "Single AZ (Bound to 1 EC2)", "Regional (Mounted by many EC2s)"] },
            { label: "Best Used For", values: ["Images, Videos, Static Web, Backups", "Database files, Boot OS volumes", "Shared applications, user directories"] },
            { label: "Scalability", values: ["Infinite (No limit on volume)", "Up to 16 TiB per disk", "Grows and shrinks automatically"] }
          ]
        },
        examTricks: [
          "S3 is NOT a drive. You cannot install an operating system on it, nor can you run a database directly inside it. If a question mentions bootable volumes, select EBS.",
          "Glacier Deep Archive has the cheapest storage cost ($0.00099/GB) but has a 12-hour retrieval time. Standard S3 has the highest storage cost but zero retrieval time.",
          "EBS volumes are AZ-locked. You cannot attach an EBS volume in AZ 'us-east-1a' to an EC2 instance in 'us-east-1b'. Use snapshots to copy them."
        ]
      },
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
          title: "Storage Services Overview (High-Level)",
          items: [
            {
              term: "Amazon S3",
              focus: "Object storage for unstructured files.",
              example: "Storing millions of profile pictures or document backups.",
              whyItMatters: "Buying and maintaining hard drives for user-uploaded assets is expensive and complex. S3 offloads all hardware administration and scales from one byte to petabytes automatically.",
              howItWorks: "Under the hood, S3 is a key-value object store. Files are stored in Buckets with a unique flat namespace. AWS automatically replicates your data across a minimum of 3 physical AZs within a region.",
              keyWords: ["Object-Storage", "Bucket-Namespace", "Replicated-Data"]
            },
            {
              term: "Amazon S3 Glacier",
              focus: "Ultra-cheap, 'cold' storage for archiving.",
              example: "Keeping financial records for 7 years for compliance.",
              whyItMatters: "Compliance rules require long-term storage of raw data that is rarely accessed, making standard hard disks extremely expensive.",
              howItWorks: "Highly secure, durable, and extremely low-cost cloud storage class for data archiving and long-term backup, with retrieval times ranging from minutes to hours.",
              keyWords: ["Cold-Archival", "Compliance-Storage", "Retrieval-Latency"]
            },
            {
              term: "Amazon EFS",
              focus: "Shared network file system for Linux EC2.",
              example: "A group of EC2 instances sharing a data repository.",
              whyItMatters: "Traditional databases and web servers often need a single unified directory that multiple servers can read/write to at the same time.",
              howItWorks: "EFS mounts a network filesystem via NFS v4 protocols, automatically growing and shrinking from megabytes to petabytes as files are added or deleted.",
              keyWords: ["Shared-File-System", "NFS-Protocol", "Elastic-Storage"]
            },
            {
              term: "Amazon EBS",
              focus: "Virtual hard drives attached to single EC2 instances.",
              example: "Providing block storage for an EC2 database server.",
              whyItMatters: "Virtual servers need high-speed local disk space to run operating systems and local database systems with low latency.",
              howItWorks: "EBS mounts raw virtual block volumes to a single EC2 instance within the same Availability Zone over a dedicated storage network connection.",
              keyWords: ["Block-Storage", "Virtual-Drive", "AZ-Locked"]
            }
          ]
        },
        {
          title: "Storage Types & Comparisons",
          items: [
            {
              term: "Amazon S3",
              focus: "Scalable Object Storage via Web API. Designed for 99.999999999% durability.",
              example: "Ideal for data lakes, off-site backups, and static website hosting.",
              whyItMatters: "Storing media files on web servers bogs down CPU performance and limits site scaling.",
              howItWorks: "Files are stored as immutable objects containing data, metadata, and a globally unique key string.",
              keyWords: ["Durability-Eleven-Nines", "Static-Website-Hosting", "Immutable-Objects"]
            },
            {
              term: "Amazon EBS",
              focus: "High-performance Block Storage for EC2. Persistent network drive volumes.",
              example: "Hosting the OS boot volume or a high-speed database.",
              whyItMatters: "High-yield database operations require sub-millisecond latencies that network-API object storage cannot provide.",
              howItWorks: "EBS volumes behave like a traditional physical hard drive SSD or HDD, mounted directly as a block device.",
              keyWords: ["Persistent-Drive", "High-Performance-Block", "Boot-Volume"]
            },
            {
              term: "EBS vs S3",
              focus: "EBS is a local hard drive (Block) for one server; S3 is a global URL-accessible drive (Object).",
              example: "EBS for the 'C: drive'; S3 for shared user uploads.",
              whyItMatters: "Choosing the wrong storage results in slow performance or massive cost overruns.",
              howItWorks: "EBS uses physical blocks over a high-performance network bound to one server. S3 uses REST APIs over HTTPS from any web endpoint globally.",
              keyWords: ["Block-VS-Object", "Virtual-Disk-VS-REST-API", "Access-Patterns"]
            },
            {
              term: "Instance Store",
              focus: "Ephemeral Block Storage physically attached to host server. Highest I/O performance, but data is lost on stop.",
              example: "Temporary buffers and high-speed scratch space.",
              whyItMatters: "Some temporary applications (like cache, log queues, or temp tables) need raw physical speeds without the network latency of EBS.",
              howItWorks: "Disks are physically built into the host metal server where the EC2 VM is running. The data is lost if the instance stops, reboot preserves it.",
              keyWords: ["Ephemeral-Disk", "Host-Attached-Storage", "High-IOPS-Speed"]
            },
            {
              term: "Amazon EFS",
              focus: "Managed shared File Storage (NFS) for multiple Linux instances. Scales automatically.",
              example: "Shared web content across a fleet of servers.",
              whyItMatters: "Synchronizing configuration files or code files manually across a fleet of 50 EC2 instances is a deployment nightmare.",
              howItWorks: "Provides a standard POSIX filesystem interface accessible simultaneously by thousands of EC2 instances via standard mount targets.",
              keyWords: ["Shared-POSIX-File", "Multi-EC2-Mount", "Auto-Scaling-Disk"]
            }
          ]
        },
        {
          title: "Storage Differentiators",
          items: [
            {
              term: "S3 vs EFS vs EBS",
              focus: "Object (API) vs. File (Network Share) vs. Block (Attached volume).",
              example: "S3 for web scale; EFS for shared configuration; EBS for single-instance apps.",
              whyItMatters: "Using the wrong storage type breaks high availability or leads to data locks.",
              howItWorks: "S3 is accessed via Web URLs; EFS is mounted by multiple OS instances; EBS is locked to a single OS instance.",
              keyWords: ["Object-File-Block", "Access-Control-Scope", "Storage-Decisions"]
            },
            {
              term: "Storage Gateway",
              focus: "Hybrid storage service connecting on-premises environments to AWS cloud storage.",
              example: "Replacing on-prem tape backups with cloud-integrated S3 storage.",
              whyItMatters: "Companies want to move to the cloud but have legacy local systems that only read/write to local storage drives.",
              howItWorks: "Acts as a local software appliance that exposes standard storage interfaces (NFS, SMB, iSCSI) to local apps and syncs the files to S3.",
              keyWords: ["Hybrid-Cloud-Storage", "Local-Appliance-Cache", "On-Premises-Integration"]
            },
            {
              term: "Amazon FSx",
              focus: "Managed file systems for specific stacks like Windows (SMB) or Parallel/HPC (Lustre).",
              example: "Migrating enterprise Windows file shares.",
              whyItMatters: "Enterprise applications built on native Windows servers or high-performance computing clusters need deep native system compatibility.",
              howItWorks: "Launches fully managed, high-performance Lustre, Windows File Server, NetApp ONTAP, or OpenZFS filesystems directly inside a VPC.",
              keyWords: ["Lustre-Windows-Server", "Enterprise-File-Shares", "High-Performance-Computing"]
            }
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
          title: "Database Services Overview (High-Level)",
          items: [
            {
              term: "Amazon RDS",
              focus: "Managed relational (SQL) databases.",
              example: "Running a MySQL or PostgreSQL database for an e-commerce site.",
              whyItMatters: "Setting up physical relational database servers requires massive efforts in hardware provisioning, OS installation, software licensing, and ongoing patching. RDS automates these administrative tasks, letting you run enterprise relational databases with high availability.",
              howItWorks: "AWS provisions virtual database instances on top of EC2 instances and EBS volumes. They take care of installing the chosen database engine (e.g., MySQL, Postgres), automates patch updates, and performs regular snapshot backups.",
              keyWords: ["Relational-Database", "SQL-ACID", "Automated-Patching", "Managed-Engine"]
            },
            {
              term: "Amazon DynamoDB",
              focus: "Fast, fully managed NoSQL database.",
              example: "Storing user session data with sub-millisecond latency.",
              whyItMatters: "Relational databases fail to scale horizontally when dealing with millions of concurrent read/write requests, bottlenecking application performance. DynamoDB offers single-digit millisecond latency at any scale, making it ideal for highly interactive applications.",
              howItWorks: "DynamoDB is a serverless NoSQL key-value database that automatically partitions data across multiple solid-state drives (SSDs). It replicates records across three Availability Zones to guarantee data reliability and high throughput.",
              keyWords: ["NoSQL-Key-Value", "Serverless-Database", "Predictive-Latency", "Auto-Partitioning"]
            },
            {
              term: "Amazon Redshift",
              focus: "Massive data warehouse for analytics.",
              example: "Analyzing petabytes of historical sales data.",
              whyItMatters: "Running complex queries on terabytes or petabytes of data crashes transactional (OLTP) databases because they are optimized for row-by-row operations. Redshift provides a fast columnar data warehouse to aggregate and analyze massive datasets.",
              howItWorks: "Utilizes a Massively Parallel Processing (MPP) architecture that distributes queries across multiple nodes, storing data in columns instead of rows to optimize complex analytical queries.",
              keyWords: ["Data-Warehouse", "OLAP-Analytics", "Columnar-Storage", "MPP-Architecture"]
            },
            {
              term: "Amazon Aurora",
              focus: "Enterprise-grade relational database.",
              example: "High-performance MySQL-compatible DB with 5x speed.",
              whyItMatters: "Traditional relational databases require complex sharding or multi-master replication to scale write operations, causing severe latency and reliability issues. Aurora offers high performance and self-healing storage at a fraction of traditional enterprise costs.",
              howItWorks: "Features a cloud-native database engine that decouples compute and storage. It automatically replicates data 6 ways across 3 Availability Zones, ensuring high availability with self-healing storage.",
              keyWords: ["Cloud-Native-SQL", "Relational-Replication", "Self-Healing-Disk", "High-Performance"]
            }
          ]
        },
        {
          title: "Relational (SQL)",
          items: [
            {
              term: "Amazon RDS",
              focus: "Managed SQL DB (MySQL, Postgres, SQL Server, Oracle).",
              example: "Standard business apps requiring ACID compliance.",
              whyItMatters: "Setting up physical relational database servers requires massive efforts in hardware provisioning, OS installation, software licensing, and ongoing patching. RDS automates these administrative tasks, letting you run enterprise relational databases with high availability.",
              howItWorks: "AWS provisions virtual database instances on top of EC2 instances and EBS volumes. They take care of installing the chosen database engine (e.g., MySQL, Postgres), automates patch updates, and performs regular snapshot backups.",
              keyWords: ["Relational-Database", "SQL-ACID", "Automated-Patching", "Managed-Engine"]
            },
            {
              term: "Amazon Aurora",
              focus: "Cloud-native SQL DB. 5x faster than MySQL. High performance.",
              example: "Scalable mission-critical enterprise databases.",
              whyItMatters: "Traditional relational databases require complex sharding or multi-master replication to scale write operations, causing severe latency and reliability issues. Aurora offers high performance and self-healing storage at a fraction of traditional enterprise costs.",
              howItWorks: "Features a cloud-native database engine that decouples compute and storage. It automatically replicates data 6 ways across 3 Availability Zones, ensuring high availability with self-healing storage.",
              keyWords: ["Cloud-Native-SQL", "Relational-Replication", "Self-Healing-Disk", "High-Performance"]
            },
            {
              term: "Aurora Multi-AZ",
              focus: "Replicated across 3 AZs automatically. High availability.",
              example: "Self-healing database architecture.",
              whyItMatters: "Hardware or data center failures shouldn't take down critical transaction engines. Aurora Multi-AZ guarantees that even if a full data center goes dark, your database will automatically recover with zero data loss.",
              howItWorks: "Keeps standby replicas inside multiple Availability Zones. If the primary instance fails, Aurora automatically promotes a reader replica to primary within seconds with zero manual intervention.",
              keyWords: ["Automatic-Failover", "Zonal-Redundancy", "Continuous-Availability"]
            }
          ]
        },
        {
          title: "NoSQL & Specialized",
          items: [
            {
              term: "Amazon DynamoDB",
              focus: "Serverless key-value DB. Single-digit ms latency at any scale.",
              example: "Shopping carts and real-time user sessions.",
              whyItMatters: "Relational databases fail to scale horizontally when dealing with millions of concurrent read/write requests, bottlenecking application performance. DynamoDB offers single-digit millisecond latency at any scale, making it ideal for highly interactive applications.",
              howItWorks: "DynamoDB is a serverless NoSQL key-value database that automatically partitions data across multiple solid-state drives (SSDs). It replicates records across three Availability Zones to guarantee data reliability and high throughput.",
              keyWords: ["NoSQL-Key-Value", "Serverless-Database", "Predictive-Latency", "Auto-Partitioning"]
            },
            {
              term: "Amazon Neptune",
              focus: "Managed graph database service.",
              example: "Social networks and fraud detection graphs.",
              whyItMatters: "Querying highly connected relationship data (like social networks or recommendation systems) in standard relational databases requires slow, multi-join queries.",
              howItWorks: "Neptune is a managed graph database engine optimized for storing billions of relationships and querying graph networks with millisecond latency.",
              keyWords: ["Graph-Database", "Relationship-Query", "Social-Networks"]
            },
            {
              term: "Amazon MemoryDB",
              focus: "Durable, Redis-compatible in-memory database.",
              example: "Real-time leaderboards requiring microsecond reads.",
              whyItMatters: "Standard database disk reads introduce latency that is too slow for real-time leaderboards, bidding, or caching platforms.",
              howItWorks: "Provides an in-memory, Redis-compatible database that stores all data directly in RAM while maintaining high durability across AZs.",
              keyWords: ["In-Memory-Database", "Microsecond-Latency", "Redis-Compatible"]
            }
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
            {
              term: "Amazon SQS",
              focus: "Message queuing (Pull model). Decouples producer from consumer.",
              example: "Decoupling order placement from shipping systems.",
              whyItMatters: "In a tightly coupled architecture, if the payment system goes down, the entire order intake system fails and transactions are lost. Amazon SQS acts as a resilient buffer, allowing front-end systems to accept messages immediately and store them safely even if downstream consumers are temporarily unavailable or overloaded.",
              howItWorks: "Operates as a serverless queue where producers send messages, and consumers pull (poll) those messages to process them asynchronously. Features standard queues with unlimited throughput and best-effort ordering, or FIFO (First-In-First-Out) queues for strict order execution and deduplication.",
              keyWords: ["Message-Queuing", "Asynchronous-Decoupling", "Pull-Model", "FIFO-vs-Standard"]
            },
            {
              term: "Amazon SNS",
              focus: "Pub/Sub messaging (Push model). Instant fan-out to many.",
              example: "Sending email/SMS alerts to subscribers.",
              whyItMatters: "When a significant system event occurs, notifying multiple downstream systems individually using point-to-point connections creates an unmanageable web of dependencies. Amazon SNS resolves this by providing a high-throughput, serverless fan-out mechanism to broadcast message events to multiple subscribers simultaneously.",
              howItWorks: "Works on a publish-subscribe (Pub/Sub) pattern. Publishers send messages to a specific SNS topic, and the service instantly pushes those events to all subscribed endpoints, which can include SQS queues, Lambda functions, HTTP endpoints, SMS, and email.",
              keyWords: ["Publish-Subscribe", "Push-Model", "Instant-Fanout", "Topic-Subscription"]
            },
            {
              term: "SNS vs SQS",
              focus: "SNS is Push (One-to-Many). SQS is Pull (One-to-One).",
              example: "SNS to notify; SQS to process tasks in the background.",
              whyItMatters: "Understanding when to push notifications versus when to queue workloads is critical for building cost-effective, scalable serverless systems. Comparing SNS and SQS helps architects design appropriate decoupled patterns, blending real-time messaging with robust work processing.",
              howItWorks: "SNS is a push-based service that sends messages to multiple subscribers instantly without persistence. SQS is a pull-based service where messages are queued, stored persistently for up to 14 days, and processed individually by single consumers pulling from the queue.",
              keyWords: ["Push-vs-Pull", "One-to-Many-vs-One-to-One", "Message-Persistence", "Decoupling-Patterns"]
            },
            {
              term: "Amazon EventBridge",
              focus: "Serverless event bus. Routes events from SaaS and AWS apps.",
              example: "Triggering a Lambda on a Zendesk ticket change.",
              whyItMatters: "Traditional architectures rely on custom polling scripts or tight integration points to handle events from third-party SaaS applications and internal microservices. Amazon EventBridge removes this complexity by serving as a serverless, highly scalable event bus that connects application components using event data.",
              howItWorks: "Ingests event streams from AWS services, internal custom applications, or integrated SaaS applications (like Zendesk or Shopify). It applies user-defined rules to evaluate the event structure and routes them directly to targets like Lambda or SQS.",
              keyWords: ["Event-Bus", "SaaS-Integration", "Schema-Registry", "Serverless-Routing"]
            },
            {
              term: "AWS Step Functions",
              focus: "Visual workflow orchestration for distributed apps.",
              example: "Coordinating multi-step Lambda workflows.",
              whyItMatters: "Hardcoding the coordination logic, retry parameters, and error-handling routines inside complex, multi-step Lambda functions leads to fragile, difficult-to-maintain application code. Step Functions solves this by defining workflows as state machines, isolating coordination logic from business logic.",
              howItWorks: "Uses declarative Amazon States Language (ASL) to define complex visual workflows. The service automatically maintains the state of each execution step, handles built-in retries, catches runtime errors, and integrates natively with various AWS services.",
              keyWords: ["State-Machine", "Workflow-Orchestration", "Visual-Workflows", "Error-Handling"]
            }
          ]
        },
        {
            title: "Analytics",
            items: [
                {
                  term: "Amazon Athena",
                  focus: "Serverless SQL queries directly on data in S3. Pay per query.",
                  example: "Analyzing VPC Flow Logs without moving them.",
                  whyItMatters: "Extracting business value from raw log files or structured data stored in S3 historically required setting up complex, expensive ETL pipelines and relational databases. Amazon Athena enables immediate, interactive SQL analysis on this raw S3 data with zero server setup or operational overhead.",
                  howItWorks: "An interactive, serverless query service powered by Presto that queries data stored directly in Amazon S3. Users write standard SQL statements, and Athena scans the relevant objects on-demand, charging only for the amount of data scanned.",
                  keyWords: ["Serverless-SQL", "Ad-Hoc-Queries", "S3-Direct-Access", "Pay-Per-Query"]
                },
                {
                  term: "Amazon Redshift",
                  focus: "Managed data warehouse for complex analytics at petabyte scale.",
                  example: "Historical sales trend analysis.",
                  whyItMatters: "Running analytical aggregates and complex multi-table joins on standard relational (OLTP) databases slows down operational performance and causes resource starvation. Redshift provides a high-performance column-oriented data warehouse tailored specifically for processing petabytes of analytical data.",
                  howItWorks: "Utilizes a Massively Parallel Processing (MPP) architecture that distributes queries across multiple nodes, storing data in columns instead of rows to optimize complex analytical queries.",
                  keyWords: ["Data-Warehouse", "OLAP-Analytics", "Columnar-Storage", "MPP-Architecture"]
                },
                {
                  term: "Amazon QuickSight",
                  focus: "BI and dashboard visualization service.",
                  example: "Creating charts for executive reporting.",
                  whyItMatters: "Making data-driven decisions requires presenting raw database queries in a visual, easily consumable format for non-technical stakeholders. Amazon QuickSight delivers a serverless, fast business intelligence platform that allows anyone to generate interactive charts and machine-learning-backed insights.",
                  howItWorks: "Connects seamlessly to data sources like RDS, Redshift, S3, or Athena. It uses SPICE (Super-fast, Parallel, In-memory Calculation Engine) to perform fast calculations, generating rich interactive visuals and dashboards readable across web and mobile.",
                  keyWords: ["Business-Intelligence", "Data-Visualization", "SPICE-Engine", "Interactive-Dashboards"]
                },
                {
                  term: "Amazon Kinesis",
                  focus: "Real-time data streaming (logs, IoT, clickstream).",
                  example: "Real-time website traffic monitoring.",
                  whyItMatters: "Batch processing of transaction logs, application clickstreams, or IoT telemetry data introduces latency, delaying critical operational insights. Amazon Kinesis provides high-throughput streaming capabilities to ingest, process, and analyze massive volumes of real-time data on the fly.",
                  howItWorks: "Consists of sub-services like Kinesis Data Streams (for real-time ingestion via shards) and Kinesis Data Firehose (for serverless loading of streams into destinations like S3 or Redshift), allowing continuous real-time data capture and analysis.",
                  keyWords: ["Real-Time-Streaming", "Data-Ingestion", "Shards-Scaling", "Clickstream-Analysis"]
                },
                {
                  term: "AWS Glue",
                  focus: "Serverless ETL (Extract, Transform, Load) service.",
                  example: "Preparing data for Redshift analysis.",
                  whyItMatters: "Data scientists and analysts spend the majority of their time cleaning, structuring, and preparing raw datasets from disparate sources before they can be used. AWS Glue simplifies this by providing a serverless data integration service that automates the Extract, Transform, and Load (ETL) lifecycle.",
                  howItWorks: "Features an automated data crawler that scans storage targets to populate a central Data Catalog with metadata. It generates Scala or Python ETL code to clean and transform datasets, running the workloads on a serverless Apache Spark environment.",
                  keyWords: ["ETL-Pipeline", "Data-Catalog", "Schema-Discovery", "Data-Preparation"]
                }
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
          title: "Management & Governance Overview (High-Level)",
          items: [
            {
              term: "AWS Trusted Advisor",
              focus: "Gives advice to optimize cost, security, performance.",
              example: "Finding idle EC2 instances to save money.",
              whyItMatters: "Without automated scanning, misconfigured security groups, idle resource waste, and performance bottlenecks can go unnoticed, costing thousands and introducing severe vulnerabilities. Trusted Advisor acts as a continuous automated consultant advising on best practices.",
              howItWorks: "Inspects your entire AWS environment against best practice checks in five categories: Cost Optimization, Security, Fault Tolerance, Performance, and Service Limits, providing clear color-coded recommendations for remediation.",
              keyWords: ["Best-Practice-Checks", "Cost-Optimization", "Security-Inspection", "Remediation-Guidance"]
            },
            {
              term: "AWS CloudWatch",
              focus: "Monitors performance metrics and logs.",
              example: "Setting an alarm if CPU usage goes above 80%.",
              whyItMatters: "Operating applications without operational visibility makes it impossible to detect performance bottlenecks or resource failures before customers complain. AWS CloudWatch provides real-time monitoring and log storage, ensuring you can detect and troubleshoot operational issues proactively.",
              howItWorks: "Collects and tracks performance metrics (CPU, disk I/O, network) from AWS resources. It aggregates application logs, allows custom search filters, and triggers alarms or automated scaling actions when thresholds are crossed.",
              keyWords: ["Performance-Monitoring", "Metric-Alarms", "Log-Aggregation", "Resource-Visibility"]
            },
            {
              term: "AWS CloudTrail",
              focus: "Logs API calls to track user activity ('who did what').",
              example: "Auditing who deleted an S3 bucket last night.",
              whyItMatters: "When a critical resource is deleted or a security setting is altered in your account, you must be able to audit exactly who performed the action and when. AWS CloudTrail records every single API request, providing a tamper-proof audit trail for security investigations.",
              howItWorks: "Captures all API calls made via the AWS Management Console, CLI, SDKs, or internal services. It logs metadata including the caller's identity, action time, source IP, and parameters, saving logs to S3 for auditing.",
              keyWords: ["API-Auditing", "Governance-Logs", "User-Activity-Tracking", "Security-Forensics"]
            },
            {
              term: "AWS Well-Architected Tool",
              focus: "Reviews architectures against best practices.",
              example: "Assessing your cloud setup against the 6 pillars.",
              whyItMatters: "Without structured architectural reviews, cloud deployments can suffer from hidden single points of failure, runaway costs, or security vulnerabilities. The Well-Architected Tool provides a formal process to evaluate your architectures against proven AWS best practices.",
              howItWorks: "Guides users through a series of questions aligned with the six pillars of the AWS Well-Architected Framework, compares answers to design principles, and outputs a prioritized list of high and medium risk issues.",
              keyWords: ["Framework-Review", "Architectural-Pillars", "Risk-Assessment", "Design-Best-Practices"]
            },
            {
              term: "AWS Auto Scaling",
              focus: "Unified tool to set up scaling for multiple resources.",
              example: "Coordinating scaling for DynamoDB and ECS together.",
              whyItMatters: "Scaling individual service tiers (like compute, database capacity, and task queues) independently using separate rules can cause synchronization issues and manual overhead. AWS Auto Scaling provides a unified interface to coordinate scaling plans across multiple interrelated resources.",
              howItWorks: "Scans your application configuration to discover scalable resources. It lets you define target tracking policies (e.g., maintaining 50% CPU) and coordinates scaling actions across EC2 Auto Scaling groups, ECS services, and DynamoDB tables.",
              keyWords: ["Unified-Scaling", "Resource-Optimization", "Target-Tracking", "Dynamic-Adjustment"]
            },
            {
              term: "AWS CLI & Console",
              focus: "Ways to interact with AWS (CLI vs. Browser).",
              example: "Stopping an instance via the terminal using 'aws ec2 stop-instances'.",
              whyItMatters: "Different operational tasks require different interfaces; manual adjustments benefit from a visual layout, while automated scripts require a powerful shell tool. Understanding when to use the graphical Console versus the command-line interface ensures operational efficiency.",
              howItWorks: "The AWS Console is a web-based portal for graphical resource management. The AWS CLI is a command-line utility that interacts directly with AWS APIs using commands like 'aws s3 cp', enabling scriptable automation.",
              keyWords: ["Management-Console", "Command-Line", "API-Interactions", "Scripted-Automation"]
            },
            {
              term: "AWS Config",
              focus: "Records and evaluates configuration history.",
              example: "Tracking how a security group's rules changed over time.",
              whyItMatters: "When a system fails or compliance is breached, troubleshooting requires understanding exactly how and when configurations changed. AWS Config functions as a continuous configuration recorder and compliance evaluator, keeping a detailed history of your resource changes.",
              howItWorks: "Continuously monitors configuration changes of AWS resources, records their relationships, and compares configurations against predefined rules. It generates compliance audits and notifies SNS when drift or non-compliance is detected.",
              keyWords: ["Configuration-History", "Compliance-Auditing", "Resource-Relationships", "Drift-Detection"]
            },
            {
              term: "AWS Organizations",
              focus: "Centrally manages billing and security policies.",
              example: "Consolidating 50 accounts into one master bill.",
              whyItMatters: "Managing billing, security policies, and resource sharing separately across multiple AWS accounts in an enterprise creates massive administrative friction and risk. AWS Organizations allows you to centrally manage and govern multiple accounts under a single administrative umbrella.",
              howItWorks: "Enables consolidating multiple AWS accounts into an Organization with hierarchical Organizational Units (OUs). It provides consolidated billing for volume discounts and uses Service Control Policies (SCPs) to restrict API permissions centrally.",
              keyWords: ["Consolidated-Billing", "Service-Control-Policies", "Multi-Account-Management", "Volume-Discounts"]
            }
          ]
        },
        {
          title: "Operational Visibility",
          items: [
            {
              term: "Amazon CloudWatch",
              focus: "Metrics, Logs, and Alarms (WHAT is happening). Performance focus.",
              example: "Alarms for high CPU or error counts.",
              whyItMatters: "Operating applications without operational visibility makes it impossible to detect performance bottlenecks or resource failures before customers complain. AWS CloudWatch provides real-time monitoring and log storage, ensuring you can detect and troubleshoot operational issues proactively.",
              howItWorks: "Collects and tracks performance metrics (CPU, disk I/O, network) from AWS resources. It aggregates application logs, allows custom search filters, and triggers alarms or automated scaling actions when thresholds are crossed.",
              keyWords: ["Performance-Monitoring", "Metric-Alarms", "Log-Aggregation", "Resource-Visibility"]
            },
            {
              term: "AWS CloudTrail",
              focus: "Audit trail of every API call (WHO did WHAT). Governance focus.",
              example: "Investigating which user deleted an EC2 instance.",
              whyItMatters: "When a critical resource is deleted or a security setting is altered in your account, you must be able to audit exactly who performed the action and when. AWS CloudTrail records every single API request, providing a tamper-proof audit trail for security investigations.",
              howItWorks: "Captures all API calls made via the AWS Management Console, CLI, SDKs, or internal services. It logs metadata including the caller's identity, action time, source IP, and parameters, saving logs to S3 for auditing.",
              keyWords: ["API-Auditing", "Governance-Logs", "User-Activity-Tracking", "Security-Forensics"]
            },
            {
              term: "CloudWatch vs CloudTrail",
              focus: "CloudWatch = Performance/Resource state. CloudTrail = API call logs/History.",
              example: "CloudWatch alerts on disk space; CloudTrail shows who formatted the disk.",
              whyItMatters: "Distinguishing between resource performance monitoring and API audit logging is a frequent point of confusion on the exam and in day-to-day operations. Recognizing which service captures operational performance versus administrative actions is crucial.",
              howItWorks: "CloudWatch focuses on performance monitoring, logs, and resource states (metrics like CPU, disk write, alarm triggers). CloudTrail focuses strictly on security auditing, capturing who triggered what API action (e.g. EC2 StartInstances) and when.",
              keyWords: ["Performance-vs-Auditing", "Operations-vs-Governance", "Metrics-vs-API-Logs"]
            },
            {
              term: "AWS Config",
              focus: "Continuous config compliance auditing.",
              example: "Checking if S3 buckets are public.",
              whyItMatters: "When a system fails or compliance is breached, troubleshooting requires understanding exactly how and when configurations changed. AWS Config functions as a continuous configuration recorder and compliance evaluator, keeping a detailed history of your resource changes.",
              howItWorks: "Continuously monitors configuration changes of AWS resources, records their relationships, and compares configurations against predefined rules. It generates compliance audits and notifies SNS when drift or non-compliance is detected.",
              keyWords: ["Configuration-History", "Compliance-Auditing", "Resource-Relationships", "Drift-Detection"]
            },
            {
              term: "AWS Health Dashboard",
              focus: "Proactive notifications about maintenance and outages.",
              example: "Alerts for scheduled EC2 maintenance.",
              whyItMatters: "When regional AWS service outages or scheduled underlying hardware maintenance occur, operators need instant clarity to determine if their systems will be impacted. The AWS Health Dashboard provides tailored, proactive alerts to keep operations informed.",
              howItWorks: "Operates as a personalized dashboard that displays active service disruptions, scheduled hardware retirements, and maintenance tasks specifically affecting the resources running in your AWS account.",
              keyWords: ["Service-Outages", "Maintenance-Alerts", "Resource-Health", "Status-Dashboard"]
            }
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
          title: "AWS Cost Management Overview (High-Level)",
          items: [
            {
              term: "AWS Cost Explorer",
              focus: "Visual graphs to analyze and forecast spending.",
              example: "Projecting next month's bill based on current usage.",
              whyItMatters: "Without a clear, visual breakdown of cloud expenditures, finance teams cannot identify which engineering teams or services are driving up bills. Cost Explorer provides interactive visual charts to track, analyze, and forecast long-term cloud investments.",
              howItWorks: "Aggregates historical billing data into interactive graphs. Users can filter costs by tag, account, region, or service, and use machine-learning algorithms to project future monthly costs based on historical trends.",
              keyWords: ["Spend-Visualization", "Cost-Forecasting", "Historical-Analysis", "Tag-Filtering"]
            },
            {
              term: "AWS Budgets",
              focus: "Sets custom spending limits and alerts.",
              example: "Getting an email when your bill hits $100.",
              whyItMatters: "Discovering that a development server was left running at the end of the month leading to a massive bill shock is a common operational pitfall. AWS Budgets acts as a proactive financial alarm system that alerts you before costs exceed your expectations.",
              howItWorks: "Allows users to set custom cost or usage limits. It continuously monitors actual spend or forecasted trends, instantly sending SNS or email alerts when thresholds are breached, and can trigger automated cost-saving policies.",
              keyWords: ["Spend-Alerts", "Budget-Thresholds", "Proactive-Monitoring", "Automated-Actions"]
            },
            {
              term: "AWS Cost & Usage Report (CUR)",
              focus: "Granular, raw spreadsheet of costs.",
              example: "Exporting detailed hourly costs to S3 for deep analysis.",
              whyItMatters: "Standard high-level dashboards and summaries are insufficient for enterprise finance departments needing to map individual resource hours to business units. The Cost & Usage Report provides the most detailed billing raw data available in the AWS catalog.",
              howItWorks: "Generates highly granular, itemized spreadsheets (CSV/Parquet format) containing hourly cost and usage data, metadata, product pricing, and resource IDs, depositing them directly into an S3 bucket for analysis.",
              keyWords: ["Granular-Billing", "S3-Data-Deposit", "Raw-Cost-Spreadsheet", "Enterprise-Auditing"]
            }
          ]
        },
        {
          title: "Purchasing Options",
          items: [
            {
              term: "On-Demand",
              focus: "No commitment. Pay by the hour/second. Highest unit cost.",
              example: "Short-term or unpredictable workloads.",
              whyItMatters: "Buying dedicated servers for experimental setups or temporary test environments results in wasteful hardware capital. On-Demand pricing offers complete compute flexibility with no long-term contracts, enabling zero-friction experimentation.",
              howItWorks: "Charges a flat, predefined hourly or per-second rate strictly for the duration that compute instances are active, with no upfront payments or multi-year commitments required.",
              keyWords: ["Flexible-Pricing", "No-Commitment", "Per-Second-Billing", "Short-Term-Workloads"]
            },
            {
              term: "Reserved Instances (RIs)",
              focus: "1 or 3 year commitment. Up to 72% discount.",
              example: "Predictable, steady-state production servers.",
              whyItMatters: "Running core, steady-state production servers under On-Demand rates wastes significant capital since these workloads are guaranteed to run 24/7. Reserved Instances offer substantial discounts in exchange for a predictable long-term usage commitment.",
              howItWorks: "Requires a 1-year or 3-year commitment to a specific instance type and region. It offers three payment terms (All Upfront, Partial Upfront, No Upfront) to deliver up to 72% discount compared to On-Demand rates.",
              keyWords: ["Capacity-Reservation", "Long-Term-Commitment", "Steady-State-Savings", "Upfront-Payment-Options"]
            },
            {
              term: "Savings Plans",
              focus: "Commit to spend rate ($/hr). Flexible across EC2/Lambda/Fargate.",
              example: "Modern compute cost reduction.",
              whyItMatters: "Traditional Reserved Instances lock users into specific instance families, making it difficult to modernise compute architectures without forfeiting discounts. Savings Plans solve this by providing generic discounts that automatically apply across various compute services.",
              howItWorks: "Requires a 1-year or 3-year commitment to a consistent hourly spend rate (e.g. $10/hour). Usage up to the committed rate is charged at the discounted Savings Plan rate, automatically applying to EC2, Fargate, and Lambda regardless of change in family or region.",
              keyWords: ["Hourly-Spend-Commitment", "Compute-Flexibility", "Cross-Service-Discount", "Automatic-Application"]
            },
            {
              term: "Spot Instances",
              focus: "Use spare capacity for up to 90% discount. Interrupted with 2m notice.",
              example: "Video rendering and batch jobs.",
              whyItMatters: "Non-time-sensitive workloads like batch processing, media rendering, and testing pipelines are unnecessarily expensive under standard rates. Spot Instances allow you to tap into spare AWS compute capacity at steep discounts, optimizing infrastructure budgets.",
              howItWorks: "Enables bidding on unused EC2 capacity for up to a 90% discount. When AWS needs the capacity back, the instance is terminated with a mandatory 2-minute warning notification, requiring stateless, fault-tolerant architectures.",
              keyWords: ["Spare-Capacity", "Steep-Discounts", "Fault-Tolerant-Workloads", "Two-Minute-Warning"]
            },
            {
              term: "Dedicated Hosts",
              focus: "Physical server for your use. Support for BYOL licensing.",
              example: "Compliance requiring physical isolation.",
              whyItMatters: "Highly regulated enterprises or organizations with restrictive per-socket software licensing agreements (like Windows or SQL Server) cannot run workloads on shared physical hardware. Dedicated Hosts provide physical server boundary isolation to satisfy these requirements.",
              howItWorks: "Allocates a fully physical, bare-metal server in an AWS data center dedicated entirely to your account. This gives full visibility and control over instance placement on the physical socket level, enabling Bring Your Own License (BYOL) compliance.",
              keyWords: ["Physical-Server-Isolation", "BYOL-Compliance", "Socket-Level-Control", "Licensing-Constraints"]
            }
          ]
        },
        {
            title: "Cost Management Tools",
            items: [
                {
                  term: "AWS Organizations",
                  focus: "Consolidated billing and volume discounts across accounts.",
                  example: "Sharing RI/SP discounts with sub-accounts.",
                  whyItMatters: "Managing billing, security policies, and resource sharing separately across multiple AWS accounts in an enterprise creates massive administrative friction and risk. AWS Organizations allows you to centrally manage and govern multiple accounts under a single administrative umbrella.",
                  howItWorks: "Enables consolidating multiple AWS accounts into an Organization with hierarchical Organizational Units (OUs). It provides consolidated billing for volume discounts and uses Service Control Policies (SCPs) to restrict API permissions centrally.",
                  keyWords: ["Consolidated-Billing", "Service-Control-Policies", "Multi-Account-Management", "Volume-Discounts"]
                },
                {
                  term: "AWS Cost Explorer",
                  focus: "Visualize, forecast, and identify trends in AWS spend.",
                  example: "Identifying which service caused a spike last month.",
                  whyItMatters: "Without a clear, visual breakdown of cloud expenditures, finance teams cannot identify which engineering teams or services are driving up bills. Cost Explorer provides interactive visual charts to track, analyze, and forecast long-term cloud investments.",
                  howItWorks: "Aggregates historical billing data into interactive graphs. Users can filter costs by tag, account, region, or service, and use machine-learning algorithms to project future monthly costs based on historical trends.",
                  keyWords: ["Spend-Visualization", "Cost-Forecasting", "Historical-Analysis", "Tag-Filtering"]
                },
                {
                  term: "AWS Budgets",
                  focus: "Set custom spend alerts and automated actions.",
                  example: "Receiving an email when bill reaches 80% of budget.",
                  whyItMatters: "Discovering that a development server was left running at the end of the month leading to a massive bill shock is a common operational pitfall. AWS Budgets acts as a proactive financial alarm system that alerts you before costs exceed your expectations.",
                  howItWorks: "Allows users to set custom cost or usage limits. It continuously monitors actual spend or forecasted trends, instantly sending SNS or email alerts when thresholds are breached, and can trigger automated cost-saving policies.",
                  keyWords: ["Spend-Alerts", "Budget-Thresholds", "Proactive-Monitoring", "Automated-Actions"]
                },
                {
                  term: "Pricing Calculator",
                  focus: "Estimate costs BEFORE deployment.",
                  example: "Modeling the cost of a new 3-tier architecture.",
                  whyItMatters: "Deploying cloud architectures without pre-calculating costs can lead to massive budget breaches. The AWS Pricing Calculator enables architects and finance teams to estimate monthly bills and build realistic cost models before writing code.",
                  howItWorks: "A web-based planning tool that allows users to model a proposed architecture (e.g., adding EC2 instances, EBS volumes, and RDS databases) and generates detailed monthly and yearly cost estimates based on current pricing tables.",
                  keyWords: ["Cost-Estimation", "Architecture-Modeling", "Pre-Deployment-Planning", "Web-Estimator"]
                }
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
            {
              term: "AWS Amplify",
              focus: "Full-stack web/mobile app build and hosting framework.",
              example: "Quickly building a serverless React app.",
              whyItMatters: "Building, configuring, and hosting full-stack mobile or web applications using separate AWS backend services requires extensive plumbing and infrastructure code. AWS Amplify accelerates frontend-focused teams by providing a unified, simplified deployment framework.",
              howItWorks: "Integrates a declarative frontend library, a command-line interface to provision serverless backends (Cognito, AppSync, DynamoDB), and a fully managed static hosting service with built-in CI/CD pipelines.",
              keyWords: ["Full-Stack-Framework", "Frontend-Hosting", "Serverless-Backend-CLI", "CI-CD-Deployment"]
            },
            {
              term: "Amazon WorkSpaces",
              focus: "Managed Desktop-as-a-Service (DaaS) (Cloud Desktops).",
              example: "Providing remote employees with secure Windows desktops.",
              whyItMatters: "Securing and managing physical desktop computers for a distributed global workforce is incredibly difficult, introducing severe data exfiltration risks. Amazon WorkSpaces provides a secure, cloud-based desktop solution that can be accessed from any device anywhere.",
              howItWorks: "A managed Desktop-as-a-Service (DaaS) that provisions persistent virtual Windows or Linux desktops in the cloud. Employees connect securely using a web browser or specialized client, keeping sensitive corporate data inside the AWS environment.",
              keyWords: ["Desktop-as-a-Service", "Virtual-Desktops", "Remote-Workforce", "Persistent-DaaS"]
            },
            {
              term: "AWS IoT Core",
              focus: "Securely connect and process messages from millions of IoT devices.",
              example: "Collecting temperature data from smart sensors.",
              whyItMatters: "Connecting, managing, and collecting telemetry from millions of distributed smart devices like sensors or smart home appliances introduces massive networking and messaging bottlenecks. AWS IoT Core provides a highly scalable serverless hub to handle these device streams.",
              howItWorks: "Utilizes lightweight communication protocols like MQTT and HTTP to connect IoT devices securely using X.509 certificates. It features a rules engine that filters and routes device messages directly to other AWS databases or analytical engines.",
              keyWords: ["Internet-of-Things", "MQTT-Protocol", "Device-Gateway", "Rules-Engine"]
            },
            {
              term: "AWS CodePipeline",
              focus: "Fully managed CI/CD pipeline orchestration.",
              example: "Automating build, test, and deploy stages.",
              whyItMatters: "Manually building, testing, and deploying software updates is slow, inconsistent, and highly prone to human error. AWS CodePipeline automates your continuous integration and continuous delivery (CI/CD) pipelines, enabling rapid, reliable software iterations.",
              howItWorks: "A fully managed orchestration service that defines pipeline stages (Source, Build, Test, Deploy). It automatically triggers a workflow execution whenever code changes are committed, coordinating tools like CodeBuild and CodeDeploy.",
              keyWords: ["CI-CD-Pipeline", "Release-Automation", "Workflow-Orchestration", "Continuous-Delivery"]
            },
            {
              term: "AWS AppStream 2.0",
              focus: "Stream desktop applications to any browser.",
              example: "Streaming 3D CAD apps to student laptops.",
              whyItMatters: "Heavy desktop applications like 3D design software or CAD tools historically required expensive high-performance user workstations. AWS AppStream 2.0 allows you to run these demanding apps in the cloud and stream them securely to any standard browser.",
              howItWorks: "Hosts desktop applications on highly optimized virtual instances inside AWS, converting the video and audio output of the app into a secure stream delivered to users via HTML5, with no local installations required.",
              keyWords: ["Application-Streaming", "HTML5-Access", "GPU-Instances", "Software-Delivery"]
            }
          ]
        },
        {
            title: "Support Resources",
            items: [
                {
                  term: "AWS Documentation",
                  focus: "Comprehensive technical guides for every service.",
                  example: "Referencing API details for S3.",
                  whyItMatters: "Navigating complex API behaviors and configuration options across hundreds of cloud services requires a structured, official reference manual. AWS Documentation provides the authoritative technical reference repository for developers and cloud practitioners.",
                  howItWorks: "Serves as a public web library containing comprehensive API references, user guides, code samples, CLI command documentation, and architectural whitepapers for all AWS offerings.",
                  keyWords: ["Technical-Manuals", "API-References", "User-Guides", "Whitepapers"]
                },
                {
                  term: "AWS re:Post",
                  focus: "Community Q&A platform for technical help.",
                  example: "Asking experts about a specific VPC config issue.",
                  whyItMatters: "When developers hit highly specific technical roadblocks, searching generic forums or waiting for official support tickets can delay development. AWS re:Post connects practitioners to a moderated, community-driven platform for expert AWS guidance.",
                  howItWorks: "Operates as a community Q&A platform where users can post technical questions. It features reputation points, answers verified by AWS employees or community experts, and integrations with AWS Support tiers.",
                  keyWords: ["Community-QA", "Expert-Guidance", "Knowledge-Sharing", "Moderated-Forum"]
                },
                {
                  term: "AWS IQ",
                  focus: "Marketplace to hire AWS-certified freelancers for projects.",
                  example: "Hiring an expert for a one-week migration audit.",
                  whyItMatters: "Organizations often need specialized, certified cloud expertise to complete a specific migration, architecture review, or troubleshooting task without hiring a full-time engineer. AWS IQ connects customers directly with vetted, certified professionals.",
                  howItWorks: "Provides a secure marketplace portal where customers can post project briefs, receive bids from certified AWS experts and consulting partners, approve proposals, and safely make milestone payments.",
                  keyWords: ["Freelance-Marketplace", "Certified-Experts", "Project-Bidding", "Milestone-Payments"]
                },
                {
                  term: "AWS Trust & Safety",
                  focus: "Report abuse of AWS resources (spam, phishing, malware).",
                  example: "Reporting a site hosted on AWS that is phishing.",
                  whyItMatters: "When AWS infrastructure is hijacked or misused by bad actors to launch spam, phishing, or malware campaigns, it endangers the entire internet ecosystem. The AWS Trust & Safety team provides a direct reporting mechanism to report and stop abusive usage.",
                  howItWorks: "Receives and investigates abuse reports submitted by third parties regarding malicious activities originating from AWS IP addresses, coordinating directly with customers to remediate violations of the Acceptable Use Policy.",
                  keyWords: ["Abuse-Reporting", "Security-Enforcement", "Acceptable-Use", "Threat-Mitigation"]
                }
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
