import { GlobalInfrastructureDiagram, S3StorageClassesDiagram } from '../diagrams.js';

export const domain3 = {
  id: 3,
  name: "Cloud Technology & Services",
  weight: "34%",
  color: "#3FB950",
  icon: "",
  diagramTitle: "Global Infrastructure Hierarchy",
  diagram: GlobalInfrastructureDiagram,
  diagram2Title: "S3 Storage Classes Comparison",
  diagram2: S3StorageClassesDiagram,
  sections: [
    {
      title: "Global Infrastructure",
      items: [
        { term: "Regions", focus: "Physical location with 2+ AZs.", example: "us-east-1 (N. Virginia) or eu-west-1 (Ireland)." },
        { term: "Availability Zones (AZ)", focus: "One or more discrete data centers with redundant power.", example: "us-east-1a and us-east-1b in the same Region." },
        { term: "Edge Locations", focus: "450+ mini DCs for content delivery (CDN).", example: "Amazon CloudFront using an Edge Location in New York to serve local users faster." },
        { term: "Local Zones", focus: "Place infra near large population centers.", example: "Running a gaming server in Los Angeles for lowest latency." },
      ]
    },
    {
      title: "Compute Services",
      items: [
        { term: "Amazon EC2", focus: "Virtual VMs (IaaS); full control of OS.", example: "Hosting a custom WordPress site on an Ubuntu instance." },
        { term: "AWS Lambda", focus: "Serverless code—no server management.", example: "Triggering a resize script every time an image is uploaded to S3." },
        { term: "AWS Fargate", focus: "Serverless container management.", example: "Running a Docker container without managing the underlying EC2 host." },
        { term: "AWS Elastic Beanstalk", focus: "PaaS; upload code, AWS handles deployment.", example: "Uploading a Java .war file and AWS sets up LB, EC2, and ASG." },
      ]
    },
    {
      title: "Networking Services",
      items: [
        { term: "Amazon VPC", focus: "Private network segment on AWS.", example: "Creating a 'Public' and 'Private' subnet for a multi-tier app." },
        { term: "Internet Gateway", focus: "Connects your VPC to the internet.", example: "Adding an IGW to a route table to make a subnet public." },
        { term: "Elastic Load Balancing", focus: "Distributes traffic across EC2 instances.", example: "Balancing users between 3 web servers for reliability." },
        { term: "Amazon Route 53", focus: "DNS and Domain Registration.", example: "Routing www.myapp.com to a healthy Load Balancer." },
        { term: "AWS Direct Connect", focus: "Private physical line from your DC to AWS.", example: "A bank creating a secure link between their data center and us-east-1." },
      ]
    },
    {
      title: "Storage & Databases",
      items: [
        { term: "Amazon S3", focus: "Unlimited Object Storage; high durability.", example: "Storing millions of backup logs and static images." },
        { term: "Amazon EBS", focus: "Block Storage (Network Drive) for EC2.", example: "A persistent C: drive for a Windows EC2 instance." },
        { term: "Amazon EFS", focus: "Shared network file system for Linux.", example: "Multiple web servers sharing the same /var/www directory." },
        { term: "Amazon RDS", focus: "Managed Relational Database.", example: "Hosting a MySQL database where AWS handles backups." },
        { term: "Amazon DynamoDB", focus: "NoSQL Database; single-digit ms performance.", example: "Storing shopping cart state for a high-traffic mobile app." },
        { term: "Amazon Aurora", focus: "AWS-proprietary database; 5x faster than MySQL.", example: "Enterprise app requiring highest speed and reliability." },
      ]
    }
  ],
  concepts: [
    {
      company: "The Coca-Cola Company",
      industry: "Consumer Goods",
      challenge: "Managing a massive global supply chain with real-time data needs.",
      solution: "Migrated to a serverless architecture using AWS Lambda and Amazon DynamoDB to handle millions of transactions per day without managing servers."
    },
    {
      company: "Expedia",
      industry: "Travel / Booking",
      challenge: "Serving high-resolution travel photos to users globally with low latency.",
      solution: "Implemented Amazon S3 for storage and Amazon CloudFront (CDN) to cache images at Edge Locations near their worldwide customers."
    },
    {
      company: "Formula 1",
      industry: "Sports / Data",
      challenge: "Analyzing 1.1 million data points per second from 300+ sensors on racing cars.",
      solution: "Used Amazon SageMaker (AI/ML) and AWS Redshift to provide real-time racing statistics and performance predictions to fans."
    }
  ]
};
