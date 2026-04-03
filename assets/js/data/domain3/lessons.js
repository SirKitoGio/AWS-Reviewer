import { GlobalInfrastructureDiagram, S3StorageClassesDiagram } from '../diagrams.js';

export const domain3 = {
  id: 3,
  name: "Cloud Technology and Services",
  weight: "34%",
  color: "var(--primary)",
  icon: "",
  diagramTitle: "Global Infrastructure Architecture",
  diagram: GlobalInfrastructureDiagram,
  diagram2Title: "S3 Storage Classes Architecture",
  diagram2: S3StorageClassesDiagram,
  detailedNotes: `
    <div class="detailed-notes-content">
      <p>This domain covers the core AWS services: Compute, Storage, Networking, Databases, and Application Integration.</p>
    </div>
  `,
  modules: [
    {
      id: 2,
      title: "Module 2 & 3: Compute in the Cloud",
      description: "AWS compute models vary by the level of abstraction provided.",
      customHtml: `
        <div class="card diagram-card" style="padding: 16px; background: var(--bg-card); cursor: zoom-in; margin-bottom: 30px;" onclick="enlargeDiagram(Diagrams.ComputeModelsDiagram)">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px">
                <div style="font-size: 10px; color: var(--muted); font-weight: 700; letter-spacing: 1px">COMPUTE MODELS</div>
                <div style="font-size: 10px; color: var(--primary)">[CLICK TO ENLARGE]</div>
            </div>
            \${Diagrams.ComputeModelsDiagram}
        </div>
      `,
      sections: [
        {
          title: "EC2 Instance Families",
          items: [
            { term: "Compute Optimized (C)", focus: "High-performance processors.", example: "Batch processing and media transcoding." },
            { term: "Memory Optimized (R)", focus: "High RAM footprint.", example: "Real-time big data analytics (Redis)." },
            { term: "Storage Optimized (I/D)", focus: "High, sequential read/write.", example: "NoSQL databases and data warehousing." },
            { term: "Accelerated (P/G)", focus: "Hardware accelerators (GPUs).", example: "Machine Learning model training." },
            { term: "General Purpose (M/T)", focus: "Balanced compute, memory, and network.", example: "Development environments and basic web servers." }
          ]
        },
        {
          title: "Elasticity & Traffic",
          items: [
            { term: "Auto Scaling", focus: "Adds (scaling out) or removes (scaling in) instances.", example: "Scaling based on CPU utilization." },
            { term: "Load Balancing (ELB)", focus: "Distributes incoming traffic across multiple targets.", example: "Distributing HTTP requests across multiple AZs." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Module 4: Going Global",
      description: "AWS's massive global footprint enables high availability and low latency.",
      sections: [
        {
          title: "Infrastructure Components",
          items: [
            { term: "Regions", focus: "Large geographic areas with 2+ Availability Zones.", example: "Choosing us-east-1 for proximity to US customers." },
            { term: "Availability Zones (AZs)", focus: "One or more discrete data centers with redundant power.", example: "Separated by miles to prevent localized disasters." },
            { term: "Edge Locations", focus: "Caching centers for CloudFront (CDN).", example: "Caching static content closer to users worldwide." },
            { term: "AWS Local Zones", focus: "Brings compute/storage closer to large populations.", example: "Millisecond latency for workloads in specific cities." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Module 5: Networking (VPC)",
      description: "Logically isolated sections of the AWS Cloud.",
      sections: [
        {
          title: "Subnets & Firewalls",
          items: [
            { term: "Public Subnet", focus: "Has a route to the Internet Gateway (IGW).", example: "Hosting public-facing web servers." },
            { term: "Private Subnet", focus: "No direct route to the internet.", example: "Hosting backend databases for security." },
            { term: "Security Groups", focus: "Stateful instance-level firewalls.", example: "Allowing port 80 in; return traffic is automatically allowed." },
            { term: "Network ACLs", focus: "Stateless subnet-level firewalls.", example: "Requiring explicit rules for both directions." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Module 6: Storage",
      description: "Choosing the right storage based on persistence and access patterns.",
      sections: [
        {
          title: "Storage Types",
          items: [
            { term: "Amazon S3", focus: "Object storage in buckets. 11 nines of durability.", example: "Hosting static assets and enterprise backups." },
            { term: "Amazon EBS", focus: "Block storage (Persistent network drives).", example: "Storing the boot volume OS for an EC2 instance." },
            { term: "Instance Store", focus: "Ephemeral block storage (Directly attached).", example: "Temporary cache or scratch data." },
            { term: "Amazon EFS", focus: "Managed NFS for Linux (Shared file system).", example: "Shared media directory for a fleet of servers." }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Module 7: Databases",
      description: "Managed database services reduce operational overhead.",
      sections: [
        {
          title: "Database Services",
          items: [
            { term: "Amazon RDS", focus: "Managed service for Relational (SQL) DBs.", example: "MySQL, PostgreSQL, Oracle, SQL Server." },
            { term: "Amazon Aurora", focus: "Cloud-native SQL DB. 5x faster than MySQL.", example: "Highly available DB across 3 AZs." },
            { term: "Amazon DynamoDB", focus: "Serverless key-value NoSQL DB.", example: "High-performance apps at any scale." },
            { term: "Amazon ElastiCache", focus: "In-memory caching (Redis/Memcached).", example: "Alleviating database load for fast reads." }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Module 8: Application Integration",
      description: "Decoupling and communicating between services.",
      sections: [
        {
          title: "Integration Tools",
          items: [
            { term: "Amazon SQS", focus: "Message queuing for decoupling.", example: "Placing orders in a queue for backend processing." },
            { term: "Amazon SNS", focus: "Pub/Sub messaging service.", example: "Fanning out notifications to email and SMS." },
            { term: "Amazon EventBridge", focus: "Serverless event bus.", example: "Connecting SaaS apps and AWS services." }
          ]
        }
      ]
    },
    {
      id: 10,
      title: "Module 10 (Part B): Monitoring & Guidance",
      description: "Keeping systems healthy and optimized.",
      sections: [
        {
          title: "Performance Tools",
          items: [
            { term: "Amazon CloudWatch", focus: "Performance Monitoring - Metrics and Alarms.", example: "Setting an alarm if CPU goes above 80%." },
            { term: "AWS Trusted Advisor", focus: "Real-time guidance across 5 categories.", example: "Identifying idle resources to save costs." },
            { term: "AWS Health Dashboard", focus: "Personalized view of AWS service status.", example: "Checking if a specific AZ outage affects your RDS." }
          ]
        }
      ]
    }
  ],
  concepts: [
    {
      company: "Expedia",
      industry: "Travel",
      challenge: "Processing massive amounts of real-time search data across the globe.",
      solution: "Used Amazon ElastiCache to store search results in-memory, reducing latency and database pressure."
    }
  ]
};
