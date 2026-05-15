const allQuestions = [
  {
    "id": 1,
    "domain": 2,
    "question": "Under the shared responsibility model, which of the following is the customer responsible for?",
    "options": [
      "Ensuring that disk drives are wiped after use.",
      "Ensuring that firmware is updated on hardware devices.",
      "Ensuring that data is encrypted at rest.",
      "Ensuring that network cables are category six or higher."
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Reference: https://www.whizlabs.com/blog/aws-security-shared-responsibility/"
  },
  {
    "id": 2,
    "domain": 1,
    "question": "The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?",
    "options": [
      "Cost allocation tags",
      "Consolidated billing",
      "AWS Budgets",
      "AWS Marketplace"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/blogs/startups/how-to-set-aws-budget-when-paying-with-aws-credits/"
  },
  {
    "id": 3,
    "domain": 1,
    "question": "Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?",
    "options": [
      "Amazon Glacier",
      "AWS Storage Gateway",
      "Amazon S\t3",
      "Amazon EBS"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/s3/faqs/"
  },
  {
    "id": 4,
    "domain": 1,
    "question": "What AWS team assists customers with accelerating cloud adoption through paid engagements in any of several specialty practice areas?",
    "options": [
      "AWS Enterprise Support",
      "AWS Solutions Architects",
      "AWS Professional Services",
      "AWS Account Managers"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/professional-services/"
  },
  {
    "id": 5,
    "domain": 4,
    "question": "A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?",
    "options": [
      "AWS Partner Network Technology Partners",
      "AWS Marketplace",
      "AWS Partner Network Consulting Partners",
      "AWS Service Catalog"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 6,
    "domain": 1,
    "question": "Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?",
    "options": [
      "Implement automation.",
      "Design for agility.",
      "Design for failure.",
      "Implement elasticity."
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 7,
    "domain": 3,
    "question": "Which AWS services can host a Microsoft SQL Server database? (Choose two.)",
    "options": [
      "Amazon EC2",
      "Amazon Relational Database Service (Amazon RDS)",
      "Amazon Aurora",
      "Amazon Redshift",
      "Amazon S3"
    ],
    "correct": [
      0,
      1
    ],
    "multi": true,
    "explanation": "Reference: https://aws.amazon.com/sql/"
  },
  {
    "id": 8,
    "domain": 1,
    "question": "Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance?",
    "options": [
      "AWS Cost Explorer",
      "AWS Trusted Advisor",
      "Consolidated billing",
      "Detailed billing"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 9,
    "domain": 4,
    "question": "Which of the following Amazon EC2 pricing models allow customers to use existing server-bound software licenses?",
    "options": [
      "Spot Instances",
      "Reserved Instances",
      "Dedicated Hosts",
      "On-Demand Instances"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/ec2/pricing/"
  },
  {
    "id": 10,
    "domain": 4,
    "question": "Which AWS characteristics make AWS cost effective for a workload with dynamic user demand? (Choose two.)",
    "options": [
      "High availability",
      "Shared security model",
      "Elasticity",
      "Pay-as-you-go pricing",
      "Reliability"
    ],
    "correct": [
      2,
      3
    ],
    "multi": true,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 11,
    "domain": 1,
    "question": "Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?",
    "options": [
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "AWS Config",
      "AWS Health"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/cloudtrail/"
  },
  {
    "id": 12,
    "domain": 3,
    "question": "Which of the following are characteristics of Amazon S3? (Choose two.)",
    "options": [
      "A global file system",
      "An object store",
      "A local file store",
      "A network file system",
      "A durable storage system"
    ],
    "correct": [
      1,
      4
    ],
    "multi": true,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 13,
    "domain": 1,
    "question": "Which services can be used across hybrid AWS Cloud architectures? (Choose two.)",
    "options": [
      "Amazon Route 53",
      "Virtual Private Gateway",
      "Classic Load Balancer",
      "Auto Scaling",
      "Amazon CloudWatch default metrics"
    ],
    "correct": [
      0,
      1
    ],
    "multi": true,
    "explanation": "Reference: https://www.stratoscale.com/blog/cloud/building-hybrid-cloud-environment-using-amazon-cloud/"
  },
  {
    "id": 14,
    "domain": 4,
    "question": "What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?",
    "options": [
      "Project management",
      "Antivirus software licensing",
      "Data center security",
      "Software development"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 15,
    "domain": 4,
    "question": "A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. Which service should the company use?",
    "options": [
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store",
      "Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)"
    ],
    "correct": 3,
    "multi": false,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 16,
    "domain": 1,
    "question": "Which of the following is a correct relationship between regions, Availability Zones, and edge locations?",
    "options": [
      "Data centers contain regions.",
      "Regions contain Availability Zones.",
      "Availability Zones contain edge locations.",
      "Edge locations contain regions."
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/about-aws/global-infrastructure/regions_az/#Region_Maps_and_Edge_Networks"
  },
  {
    "id": 17,
    "domain": 4,
    "question": "Which AWS tools assist with estimating costs? (Choose three.)",
    "options": [
      "Detailed billing report",
      "Cost allocation tags",
      "AWS Simple Monthly Calculator",
      "AWS Total Cost of Ownership (TCO) Calculator",
      "Cost Estimator"
    ],
    "correct": [
      1,
      2,
      3
    ],
    "multi": true,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 18,
    "domain": 4,
    "question": "Which of the following are advantages of AWS consolidated billing? (Choose two.)",
    "options": [
      "The ability to receive one bill for multiple accounts",
      "Service limits increasing by default in all accounts",
      "A fixed discount on the monthly bill",
      "Potential volume discounts, as usage in all accounts is combined",
      "The automatic extension of the master accounta\u20ac\u2122s AWS support plan to all accounts"
    ],
    "correct": [
      0,
      3
    ],
    "multi": true,
    "explanation": "Reference: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html"
  },
  {
    "id": 19,
    "domain": 4,
    "question": "Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?",
    "options": [
      "One-year, No Upfront, Standard RI pricing",
      "One-year, All Upfront, Convertible RI pricing",
      "Three-year, All Upfront, Standard RI pricing",
      "Three-year, No Upfront, Convertible Rl pricing"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/ec2/pricing/reserved-instances/pricing/"
  },
  {
    "id": 20,
    "domain": 4,
    "question": "Compared with costs in traditional and virtualized data centers, AWS has:",
    "options": [
      "greater variable costs and greater upfront costs.",
      "fixed usage costs and lower upfront costs.",
      "lower variable costs and greater upfront costs.",
      "lower variable costs and lower upfront costs."
    ],
    "correct": 3,
    "multi": false,
    "explanation": "Reference: https://d1.awsstatic.com/whitepapers/introduction-to-aws-cloud-economics-final.pdf"
  },
  {
    "id": 21,
    "domain": 1,
    "question": "A characteristic of edge locations is that they:",
    "options": [
      "host Amazon EC2 instances closer to users.",
      "help lower latency and improve performance for users.",
      "cache frequently changing data without reaching the origin server.",
      "refresh data changes daily."
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Reference: https://www.edureka.co/community/600/what-is-an-edge-location-in-aws"
  },
  {
    "id": 22,
    "domain": 3,
    "question": "Which of the following can limit Amazon Storage Service (Amazon S3) bucket access to specific users?",
    "options": [
      "A public and private key-pair",
      "Amazon Inspector",
      "AWS Identity and Access Management (IAM) policies",
      "Security Groups"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/blogs/security/how-to-restrict-amazon-s3-bucket-access-to-a-specific-am-role/"
  },
  {
    "id": 23,
    "domain": 2,
    "question": "Which of the following security-related actions are available at no cost?",
    "options": [
      "Calling AWS Support",
      "Contacting AWS Professional Services to request a workshop",
      "Accessing forums, blogs, and whitepapers",
      "Attending AWS classes at a local university"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 24,
    "domain": 4,
    "question": "Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?",
    "options": [
      "Dedicated Ris",
      "Scheduled Ris",
      "Convertible RIs",
      "Standard Ris"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/ec2/pricing/reserved-instances/"
  },
  {
    "id": 25,
    "domain": 4,
    "question": "Which AWS feature will reduce the customera\u20ac\u2122s total cost of ownership (TCO)?",
    "options": [
      "Shared responsibility security model",
      "Single tenancy PDF",
      "Elastic computing",
      "Encryption"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 26,
    "domain": 1,
    "question": "Which of the following services will automatically scale with an expected increase in web traffic?",
    "options": [
      "AWS CodePipeline",
      "Elastic Load Balancing",
      "Amazon EBS",
      "AWS Direct Connect"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/elasticloadbalancing/"
  },
  {
    "id": 27,
    "domain": 2,
    "question": "Where are AWS compliance documents, such as an SOC 1 report, located?",
    "options": [
      "Amazon Inspector",
      "AWS CloudTrail",
      "AWS Artifact",
      "AWS Certificate Manager"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/compliance/soc-faqs/"
  },
  {
    "id": 28,
    "domain": 2,
    "question": "Under the AWS shared responsibility model, which of the following activities are the customera\u20ac\u2122s responsibility? (Choose two.)",
    "options": [
      "Patching operating system components for Amazon Relational Database Server (Amazon RDS)",
      "Encrypting data on the client-side",
      "Training the data center staff",
      "Configuring Network Access Control Lists (ACL)",
      "Maintaining environmental controls within a data center"
    ],
    "correct": [
      1,
      3
    ],
    "multi": true,
    "explanation": "Reference: https://aws.amazon.com/compliance/shared-responsibility-model/"
  },
  {
    "id": 29,
    "domain": 1,
    "question": "Which is a recommended pattern for designing a highly available architecture on AWS?",
    "options": [
      "Ensure that components have low-latency network connectivity.",
      "Run enough Amazon EC2 instances to operate at peak load.",
      "Ensure that the application is designed to accommodate failure of any single component.",
      "Use a monolithic application that handles all operations."
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 30,
    "domain": 1,
    "question": "According to best practices, how should an application be designed to run in the AWS Cloud?",
    "options": [
      "Use tightly coupled components.",
      "Use loosely coupled components.",
      "Use infrequently coupled components.",
      "Use frequently coupled components."
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Reference: https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf"
  },
  {
    "id": 31,
    "domain": 2,
    "question": "AWS supports which of the following methods to add security to Identity and Access Management (IAM) users? (Choose two.)",
    "options": [
      "Implementing Amazon Rekognition",
      "Using AWS Shield-protected resources",
      "Blocking access with Security Groups",
      "Using Multi-Factor Authentication (MFA)",
      "Enforcing password strength and expiration"
    ],
    "correct": [
      3,
      4
    ],
    "multi": true,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 32,
    "domain": 1,
    "question": "Which AWS services should be used for read/write of constantly changing data? (Choose two.)",
    "options": [
      "Amazon Glacier",
      "Amazon RDS",
      "AWS Snowball",
      "Amazon Redshift",
      "Amazon EFS"
    ],
    "correct": [
      1,
      4
    ],
    "multi": true,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 33,
    "domain": 3,
    "question": "What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?",
    "options": [
      "It simplifies relational database administration tasks.",
      "It provides 99.99999999999% reliability and durability.",
      "It automatically scales databases for loads.",
      "It enables users to dynamically adjust CPU and RAM resources."
    ],
    "correct": 0,
    "multi": false,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 34,
    "domain": 3,
    "question": "A customer needs to run a MySQL database that easily scales. Which AWS service should they use?",
    "options": [
      "Amazon Aurora",
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon ElastiCache"
    ],
    "correct": 0,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/rds/aurora/serverless/"
  },
  {
    "id": 35,
    "domain": 1,
    "question": "Which of the following components of the AWS Global Infrastructure consists of one or more discrete data centers interconnected through low latency links?",
    "options": [
      "Availability Zone",
      "Edge location",
      "Region",
      "Private networking"
    ],
    "correct": 0,
    "multi": false,
    "explanation": "Reference: https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html"
  },
  {
    "id": 36,
    "domain": 1,
    "question": "Which of the following is a shared control between the customer and AWS?",
    "options": [
      "Providing a key for Amazon S3 client-side encryption",
      "Configuration of an Amazon EC2 instance",
      "Environmental controls of physical AWS data centers",
      "Awareness and training"
    ],
    "correct": 3,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/compliance/shared-responsibility-model/"
  },
  {
    "id": 37,
    "domain": 3,
    "question": "How many Availability Zones should compute resources be provisioned across to achieve high availability?",
    "options": [
      "A minimum of one",
      "A minimum of two",
      "A minimum of three",
      "A minimum of four or more"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 38,
    "domain": 1,
    "question": "One of the advantages to moving infrastructure from an on-premises data center to the AWS Cloud is:",
    "options": [
      "it allows the business to eliminate IT bills.",
      "it allows the business to put a server in each customer:\u20ac\u2122s data center.",
      "it allows the business to focus on business activities.",
      "it allows the business to leave servers unpatched."
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 39,
    "domain": 4,
    "question": "What is the lowest-cost, durable storage option for retaining database backups for immediate retrieval?",
    "options": [
      "Amazon S3",
      "Amazon Glacier",
      "Amazon EBS",
      "Amazon EC2 Instance Store"
    ],
    "correct": 0,
    "multi": false,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 40,
    "domain": 2,
    "question": "Which AWS IAM feature allows developers to access AWS services through the AWS CLI?",
    "options": [
      "API keys",
      "Access keys",
      "User names/Passwords",
      "SSH keys"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Reference: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html"
  },
  {
    "id": 41,
    "domain": 3,
    "question": "Which of the following is a fast and reliable NoSQL database service?",
    "options": [
      "Amazon Redshift",
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon S3"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/dynamodb/"
  },
  {
    "id": 42,
    "domain": 1,
    "question": "What is an example of agility in the AWS Cloud?",
    "options": [
      "Access to multiple instance types",
      "Access to managed services",
      "Using Consolidated Billing to produce one bill",
      "Decreased acquisition time for new compute resources"
    ],
    "correct": 3,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/blogs/enterprise-strategy/risk-is-lack-of-agility/"
  },
  {
    "id": 43,
    "domain": 1,
    "question": "Which service should a customer use to consolidate and centrally manage multiple AWS accounts?",
    "options": [
      "AWS IAM",
      "AWS Organizations",
      "AWS Schema Conversion Tool",
      "AWS Config"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/organizations/"
  },
  {
    "id": 44,
    "domain": 1,
    "question": "What approach to transcoding a large number of individual video files adheres to AWS architecture principles?",
    "options": [
      "Using many instances in parallel",
      "Using a single large instance during off-peak hours",
      "Using dedicated hardware",
      "Using a large GPU instance type"
    ],
    "correct": 0,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/solutions/case-studies/encoding/"
  },
  {
    "id": 45,
    "domain": 1,
    "question": "For which auditing process does AWS have sole responsibility?",
    "options": [
      "AWS IAM policies",
      "Physical security",
      "Amazon S3 bucket policies",
      "AWS CloudTrail Logs"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 46,
    "domain": 1,
    "question": "Which feature of the AWS Cloud will support an international company:\u20ac\u2122s requirement for low latency to all of its customers?",
    "options": [
      "Fault tolerance",
      "Global reach",
      "Pay-as-you-go pricing",
      "High availability"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 47,
    "domain": 2,
    "question": "Which of the following is the customera\u20ac\u2122s responsibility under the AWS shared responsibility model?",
    "options": [
      "Patching underlying infrastructure",
      "Physical security",
      "Patching Amazon EC2 instances",
      "Patching network infrastructure"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/compliance/shared-responsibility-model/"
  },
  {
    "id": 48,
    "domain": 4,
    "question": "A customer is using multiple AWS accounts with separate billing. How can the customer take advantage of volume discounts with minimal impact to the AWS resources?",
    "options": [
      "Create one global AWS account and move all AWS resources to that account.",
      "Sign up for three years of Reserved Instance pricing up front.",
      "Use the consolidated billing feature from AWS Organizations.",
      "Sign up for the AWS Enterprise support plan to get volume discounts."
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/answers/account-management/aws-multi-account-billing-strategy/"
  },
  {
    "id": 49,
    "domain": 1,
    "question": "Which of the following are features of Amazon CloudWatch Logs? (Choose two.)",
    "options": [
      "Summaries by Amazon Simple Notification Service (Amazon SNS)",
      "Free Amazon Elasticsearch Service analytics",
      "Provided at no charge",
      "Real-time monitoring",
      "Adjustable retention"
    ],
    "correct": [
      3,
      4
    ],
    "multi": true,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 50,
    "domain": 1,
    "question": "Which of the following is an AWS managed Domain Name System (DNS) web service?",
    "options": [
      "Amazon Route 53",
      "Amazon Neptune",
      "Amazon SageMaker",
      "Amazon Lightsail"
    ],
    "correct": 0,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/getting-started/tutorials/get-a-domain/"
  },
  {
    "id": 51,
    "domain": 1,
    "question": "A customer is deploying a new application and needs to choose an AWS Region. Which of the following factors could influence the customera\u20ac\u2122s decision? (Choose two.)",
    "options": [
      "Reduced latency to users",
      "The applications\u20ac\u2122s presentation in the local language",
      "Data sovereignty compliance",
      "Cooling costs in hotter climates",
      "Proximity to the customerx\u20ac\u2122s office for on-site visits"
    ],
    "correct": [
      0,
      2
    ],
    "multi": true,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 52,
    "domain": 4,
    "question": "Which storage service can be used as a low-cost option for hosting static websites?",
    "options": [
      "Amazon Glacier",
      "Amazon DynamoDB",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon Simple Storage Service (Amazon S3)"
    ],
    "correct": 3,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/getting-started/projects/host-static-website/"
  },
  {
    "id": 53,
    "domain": 4,
    "question": "Which Amazon EC2 instance pricing model can provide discounts of up to 90%?",
    "options": [
      "Reserved Instances",
      "On-Demand",
      "Dedicated Hosts",
      "Spot Instances"
    ],
    "correct": 3,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/ec2/spot/"
  },
  {
    "id": 54,
    "domain": 2,
    "question": "What is the AWS customer responsible for according to the AWS shared responsibility model?",
    "options": [
      "Physical access controls",
      "Data encryption",
      "Secure disposal of storage devices",
      "Environmental risk management"
    ],
    "correct": [],
    "multi": false,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 55,
    "domain": 3,
    "question": "Which of the following AWS Cloud services can be used to run a customer-managed relational database?",
    "options": [
      "Amazon EC2",
      "Amazon Route 53",
      "Amazon ElastiCache",
      "Amazon DynamoDB"
    ],
    "correct": 0,
    "multi": false,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 56,
    "domain": 1,
    "question": "A company is looking for a scalable data warehouse solution. Which of the following AWS solutions would meet the company:\u20ac\u2122s needs?",
    "options": [
      "Amazon Simple Storage Service (Amazon S3)",
      "Amazon DynamoDB",
      "Amazon Kinesis",
      "Amazon Redshift"
    ],
    "correct": 3,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/redshift/"
  },
  {
    "id": 57,
    "domain": 1,
    "question": "Which statement best describes Elastic Load Balancing?",
    "options": [
      "It translates a domain name into an IP address using DNS.",
      "It distributes incoming application traffic across one or more Amazon EC2 instances.",
      "It collects metrics on connected Amazon EC2 instances.",
      "It automatically adjusts the number of Amazon EC2 instances to support incoming traffic."
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/elasticloadbalancing/"
  },
  {
    "id": 58,
    "domain": 1,
    "question": "Which of the following are valid ways for a customer to interact with AWS services? (Choose two.)",
    "options": [
      "Command line interface",
      "On-premises",
      "Software Development Kits",
      "Software-as-a-service",
      "Hybrid"
    ],
    "correct": [
      0,
      2
    ],
    "multi": true,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 59,
    "domain": 1,
    "question": "The AWS Cloud:\u20ac\u2122s multiple Regions are an example of:",
    "options": [
      "agility.",
      "global infrastructure.",
      "elasticity.",
      "pay-as-you-go pricing."
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 60,
    "domain": 1,
    "question": "Which of the following AWS services can be used to serve large amounts of online video content with the lowest possible latency? (Choose two.)",
    "options": [
      "AWS Storage Gateway",
      "Amazon S3",
      "Amazon Elastic File System (EFS)",
      "Amazon Glacier",
      "Amazon CloudFront"
    ],
    "correct": [
      1,
      4
    ],
    "multi": true,
    "explanation": "Reference: https://aws.amazon.com/getting-started/tutorials/deliver-content-faster/ https://aws.amazon.com/cloudfront/"
  },
  {
    "id": 61,
    "domain": 3,
    "question": "Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?",
    "options": [
      "Cloud-native",
      "Partner network",
      "Hybrid architecture",
      "Infrastructure as a service"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/enterprise/hybrid/"
  },
  {
    "id": 62,
    "domain": 3,
    "question": "What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?",
    "options": [
      "They require the customer to monitor and replace failing instances.",
      "They have better performance than customer-managed services.",
      "They simplify patching and updating underlying OSs.",
      "They do not require the customer to optimize instance type or size selections."
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 63,
    "domain": 3,
    "question": "Which service provides a virtually unlimited amount of online highly durable object Storage?",
    "options": [
      "Amazon Redshift",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon Elastic Container Service (Amazon ECS)",
      "Amazon S3"
    ],
    "correct": 3,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/what-is-cloud-object-storage/"
  },
  {
    "id": 64,
    "domain": 2,
    "question": "Which of the following Identity and Access Management (IAM) entities is associated with an access key ID and secret access key when using AWS Command Line Interface (AWS CLI)?",
    "options": [
      "IAM group",
      "IAM user",
      "IAM role",
      "IAM policy"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Reference: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html"
  },
  {
    "id": 65,
    "domain": 2,
    "question": "Which of the following security-related services does AWS offer? (Choose two.)",
    "options": [
      "Multi-factor authentication physical tokens",
      "AWS Trusted Advisor security checks",
      "Data encryption",
      "Automated penetration testing",
      "Amazon S3 copyrighted content detection"
    ],
    "correct": [
      1,
      2
    ],
    "multi": true,
    "explanation": "Reference: https://aws.amazon.com/security/"
  },
  {
    "id": 66,
    "domain": 3,
    "question": "Which AWS managed service is used to host databases?",
    "options": [
      "AWS Batch",
      "AWS Artifact",
      "AWS Data Pipeline",
      "Amazon RDS"
    ],
    "correct": 3,
    "multi": false,
    "explanation": "Explanation - Amazon Relational Database Service (Amazon RDS) makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity while automating time-consuming administration tasks such as hardware provisioning, database setup, patching and backups. It frees you to focus on your applications so you can give them the fast performance, high availability, security and compatibility they need. Reference: https://aws.amazon.com/rds/?c=db&sec=srv"
  },
  {
    "id": 67,
    "domain": 3,
    "question": "Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?",
    "options": [
      "Amazon S3",
      "Amazon Glacier",
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon Elastic File System (Amazon EFS)"
    ],
    "correct": 3,
    "multi": false,
    "explanation": "Amazon Elastic File System (Amazon EFS) provides a simple, scalable, fully managed elastic NFS file system for use with AWS Cloud services and on-premises resources. It is built to scale on demand to petabytes without disrupting applications, growing and shrinking automatically as you add and remove files, eliminating the need to provision and manage capacity to accommodate growth. Amazon EFS is designed to provide the throughput, IOPS, and low latency needed for Linux workloads. Throughput and IOPS scale as a file system grows and can burst to higher throughput levels for short periods of time to support the unpredictable performance needs of file workloads. For the most demanding workloads, Amazon EFS can support performance over 10 GB/sec and up to 500,000 IOPS."
  },
  {
    "id": 68,
    "domain": 1,
    "question": "When architecting cloud applications, which of the following are a key design principle?",
    "options": [
      "Use the largest instance possible",
      "Provision capacity for peak load",
      "Use the Scrum development process",
      "Implement elasticity"
    ],
    "correct": 3,
    "multi": false,
    "explanation": "Cloud services main proposition is to provide elasticity through horizontal scaling. Itx\u20ac\u2122s already there. As for using largest instance possible, it is not a design principle that helps cloud applications in anyway. Scrum development process is not related to architecting. Therefore, a key principle is to provision your application for on-demand capacity . Peak loads is something that cloud applications experience everyday. Peak load management should be a necessary part of cloud applciaton design principle. Reference: https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf"
  },
  {
    "id": 69,
    "domain": 4,
    "question": "Which AWS service should be used for long-term, low-cost storage of data backups?",
    "options": [
      "Amazon RDS",
      "Amazon Glacier",
      "AWS Snowball",
      "AWS EBS"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Explanation - Amazon S3 Glacier is a secure, durable, and low-cost storage class of S3 for data archiving and long-term backup. Customers can store large or small amounts of data for as little as $0.004 per gigabyte per month. The S3 Glacier storage class is ideal for archives where data is regularly retrieved and some of the data may be needed in minutes. Amazon RDS is a relational database service that hosts databases. It helps you create and manage databases. Amazon Snowball is a petabyte-scale data transfer service that provides cost efficient data transfer to AWS from tamper proof physical devices. Similarly, Elastic block storage offers persistent block storage volumes for EC2 instances. Reference: https://aws.amazon.com/backup-restore/services/"
  },
  {
    "id": 70,
    "domain": 2,
    "question": "Under the shared responsibility model, which of the following is a shared control between a customer and AWS?",
    "options": [
      "Physical controls",
      "Patch management",
      "Zone security",
      "Data center auditing"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 71,
    "domain": 3,
    "question": "Which AWS service allows companies to connect an Amazon VPC to an on-premises data center?",
    "options": [
      "AWS VPN",
      "Amazon Redshift",
      "API Gateway",
      "Amazon Connect"
    ],
    "correct": 3,
    "multi": false,
    "explanation": "AWS Direct Connect enables you to securely connect your AWS environment to your on-premises data center or office location over a standard 1 gigabit or 10 gigabit Ethernet fiber-optic connection. AWS Direct Connect offers dedicated high speed, low latency connection, which bypasses internet service providers in your network path. An AWS Direct Connect location provides access to Amazon Web Services in the region it is associated with, as well as access to other US regions. AWS Direct Connect allows you to logically partition the fiber-optic connections into multiple logical connections called Virtual Local Area Networks (VLAN). You can take advantage of these logical connections to improve security, differentiate traffic, and achieve compliance requirements. Reference: https://aws.amazon.com/getting-started/projects/connect-data-center-to-aws/"
  },
  {
    "id": 72,
    "domain": 3,
    "question": "A company wants to reduce the physical compute footprint that developers use to run code. Which service would meet that need by enabling serverless architectures?",
    "options": [
      "Amazon Elastic Compute Cloud (Amazon EC2)",
      "AWS Lambda",
      "Amazon DynamoDB",
      "AWS CodeCommit"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "AWS Lambda is an integral part of coding on AWS. It reduces physical compute footprint by utilizing aws cloud services to run code."
  },
  {
    "id": 73,
    "domain": 1,
    "question": "Which AWS service provides alerts when an AWS event may impact a companyx\u20ac\u2122s AWS resources?",
    "options": [
      "AWS Personal Health Dashboard",
      "AWS Service Health Dashboard",
      "AWS Trusted Advisor",
      "AWS Infrastructure Event Management"
    ],
    "correct": 0,
    "multi": false,
    "explanation": "AWS Personal Health Dashboard provides alerts and remediation guidance when AWS is experiencing events that may impact you. While the Service Health Dashboard displays the general status of AWS services, Personal Health Dashboard gives you a personalized view into the performance and availability of the AWS services underlying your AWS resources. Reference: https://aws.amazon.com/premiumsupport/technology/personal-health-dashboard/"
  },
  {
    "id": 74,
    "domain": 1,
    "question": "Which of the following are categories of AWS Trusted Advisor? (Choose two.)",
    "options": [
      "Fault Tolerance",
      "Instance Usage",
      "Infrastructure",
      "Performance",
      "Storage Capacity"
    ],
    "correct": [
      0,
      3
    ],
    "multi": true,
    "explanation": "Like your customized cloud expert, AWS Trusted Advisor analyzes your AWS environment and provides best practice recommendations in five categories: cost optimization, performance, security, fault tolerance and service limits. Reference: https://aws.amazon.com/premiumsupport/technology/trusted-"
  },
  {
    "id": 75,
    "domain": 2,
    "question": "Which task is AWS responsible for in the shared responsibility model for security and compliance?",
    "options": [
      "Granting access to individuals and services",
      "Encrypting data in transit",
      "Updating Amazon EC2 host firmware",
      "Updating operating systems"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "AWS Compliance enables customers to establish and operate in an AWS security control environment The shared responsibility model is part of AWS Compliance program The Security of the cloud is managed by Amazon AWS provider The Security in the cloud is responsibility of the customer The customer is responsible for their information and data, their secure transmission, integrity, and encryption Also, the customer is responsible for managing, support, patching and control of the guest operating system and AWS services provided like EC2 AWS customers retain control and ownership of their data The AWS network provides significant protection against traditional network security issues and the customer can implement further protection Reference: https://www.whizlabs.com/blog/aws-security-shared-responsibility/"
  },
  {
    "id": 76,
    "domain": 1,
    "question": "Where should a company go to search software listings from independent software vendors to find, test, buy and deploy software that runs on AWS?",
    "options": [
      "AWS Marketplace",
      "Amazon Lumberyard",
      "AWS Artifact",
      "Amazon CloudSearch"
    ],
    "correct": 0,
    "multi": false,
    "explanation": "AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that make it easy to find, test, buy, and deploy software that runs on AWS. Reference: https://aws.amazon.com"
  },
  {
    "id": 77,
    "domain": 1,
    "question": "Which of the following is a benefit of using the AWS Cloud?",
    "options": [
      "Permissive security removes the administrative burden.",
      "Ability to focus on revenue-generating activities.",
      "Control over cloud network hardware.",
      "Choice of specific cloud hardware vendors."
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Developer and IT staff productivity accounted for nearly 30% of overall financial benefits. The remaining benefits were driven by the flexibility and agility of PDF Amazon cloud infrastructure services, which make it easier to trial new business models, support revenue-generating applications, and provide more reliable services to end users. Reference: https://media.amazonwebservices.com/IDC_Business_Value_of_AWS_Accelerates_Over_time.pdf"
  },
  {
    "id": 78,
    "domain": 4,
    "question": "When performing a cost analysis that supports physical isolation of a customer workload, which compute hosting model should be accounted for in the Total Cost of Ownership (TCO)?",
    "options": [
      "Dedicated Hosts",
      "Reserved Instances",
      "On-Demand Instances",
      "No Upfront Reserved Instances"
    ],
    "correct": 0,
    "multi": false,
    "explanation": "Use Dedicated Hosts to launch Amazon EC2 instances on physical servers that are dedicated for your use. Dedicated Hosts give you additional visibility and control over how instances are placed on a physical server, and you can reliably use the same physical server over time. As a result, Dedicated Hosts enable you to use your existing server-bound software licenses like Windows Server and address corporate compliance and regulatory requirements."
  },
  {
    "id": 79,
    "domain": 1,
    "question": "Which AWS service provides the ability to manage infrastructure as code?",
    "options": [
      "AWS CodePipeline",
      "AWS CodeDeploy",
      "AWS Direct Connect",
      "AWS CloudFormation"
    ],
    "correct": 3,
    "multi": false,
    "explanation": "AWS CloudFormation provides a common language for you to describe and provision all the infrastructure resources in your cloud environment. CloudFormation allows you to use a simple text file to model and provision, in an automated and secure manner, all the resources needed for your applications across all regions and accounts. This file serves as the single source of truth for your cloud environment. Reference: https://aws.amazon.com/cloudformation/"
  },
  {
    "id": 80,
    "domain": 1,
    "question": "If a customer needs to audit the change management of AWS resources, which of the following AWS services should the customer use?",
    "options": [
      "AWS Config",
      "AWS Trusted Advisor",
      "Amazon CloudWatch",
      "Amazon Inspector"
    ],
    "correct": 0,
    "multi": false,
    "explanation": "AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations. With Config, you can review changes in configurations and relationships between AWS resources, dive into detailed resource configuration histories, and determine your overall compliance against the configurations specified in your internal guidelines. This enables you to simplify compliance auditing, security analysis, change management, and operational troubleshooting. Reference: https://aws.amazon.com/config/"
  },
  {
    "id": 81,
    "domain": 1,
    "question": "What is Amazon CloudWatch?",
    "options": [
      "A code repository with customizable build and team commit features.",
      "A metrics repository with customizable notification thresholds and channels.",
      "A security configuration repository with threat analytics.",
      "A rule repository of a web application firewall with automated vulnerability prevention features."
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Amazon CloudWatch is basically a metrics repository. An AWS service \u20ac\" such as Amazon EC2 \u20ac\" puts metrics into the repository, and you retrieve statistics based on those metrics. If you put your own custom metrics into the repository, you can retrieve statistics on these metrics as well. Reference: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_architecture.html"
  },
  {
    "id": 82,
    "domain": 1,
    "question": "Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?",
    "options": [
      "AWS Server Migration Service",
      "AWS Organizations",
      "AWS Budgets",
      "AWS Trusted Advisor"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "use the consolidated billing feature in AWS Organizations to consolidate billing and payment for multiple AWS accounts or multiple Amazon Internet Services Pvt. Ltd (AISPL) accounts. Every organization in AWS Organizations has a master account that pays the charges of all the member accounts. Consolidated billing has the following benefits: One bill - You get one bill for multiple accounts. Easy tracking \u20ac\" You can track the charges across multiple accounts and download the combined cost and usage data. Combined usage \u20ac\" You can combine the usage across all accounts in the organization to share the volume pricing discounts and Reserved Instance discounts. This can result in a lower charge for your project, department, or company than with individual standalone accounts. For more information, see Volume Discounts. No extra fee \"Consolidated billing is offered at no additional cost."
  },
  {
    "id": 83,
    "domain": 1,
    "question": "Which of the following services could be used to deploy an application to servers running on-premises(Choose two.)",
    "options": [
      "AWS Elastic Beanstalk",
      "AWS OpsWorks",
      "AWS CodeDeploy",
      "AWS Batch",
      "AWS X-Ray"
    ],
    "correct": [
      1,
      2
    ],
    "multi": true,
    "explanation": "Reference: https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-on-premises.html/ https://aws.amazon.com/blogs/aws/opsworks-on-prem-and-existing-instances/"
  },
  {
    "id": 84,
    "domain": 4,
    "question": "Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?",
    "options": [
      "On-Demand Instances",
      "Reserved Instances",
      "Spot Instances",
      "Convertible Reserved Instances"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "In the new model, the Spot prices are more predictable, updated less frequently, and are determined by supply and demand for Amazon EC2 spare capacity, not bid prices. Reference: https://aws.amazon.com/blogs/compute/new-amazon-ec2-spot-pricing/"
  },
  {
    "id": 85,
    "domain": 1,
    "question": "Which design principles for cloud architecture are recommended when re-architecting a large monolithic application? (Choose two.)",
    "options": [
      "Use manual monitoring.",
      "Use fixed servers.",
      "Implement loose coupling.",
      "Rely on individual components.",
      "Design for scalability."
    ],
    "correct": [
      2,
      4
    ],
    "multi": true,
    "explanation": "Rearchitecting applications involves sweeping change where an old monolithic application is completely revamped according to modern microservices architecture. Using individual components to re-architect a big application is one part of the process. The most important part is to design the application for scalability because the level of investment for a monolithic application can only be justified when resilience and scalability is needed. Reference: https://www.architech.ca/re-architect-applications/"
  },
  {
    "id": 86,
    "domain": 4,
    "question": "Which is the MINIMUM AWS Support plan that allows for one-hour target response time for support cases?",
    "options": [
      "Enterprise",
      "Business",
      "Developer",
      "Basic"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/premiumsupport/plans/"
  },
  {
    "id": 87,
    "domain": 2,
    "question": "Where can AWS compliance and certification reports be downloaded?",
    "options": [
      "AWS Artifact",
      "AWS Concierge",
      "AWS Certificate Manager",
      "AWS Trusted Advisor"
    ],
    "correct": 0,
    "multi": false,
    "explanation": "AWS Artifact is your go-to, central resource for compliance-related information that matters to you. It provides on-demand access to AWS:\u20ac\u2122s security and compliance reports and select online agreements. The AWS SOC 2 report is particularly helpful for completing questionnaires because it provides a comprehensive description of the implementation and operating effectiveness of AWS security controls. Another useful document is the Executive Briefing within the AWS FedRAMP Partner Package. Reference: https://aws.amazon.com/compliance/faq/"
  },
  {
    "id": 88,
    "domain": 1,
    "question": "Which AWS service provides a customized view of the health of specific AWS services that power a customer:\u20ac\u2122s workloads running on AWS?",
    "options": [
      "AWS Service Health Dashboard",
      "AWS X-Ray",
      "AWS Personal Health Dashboard",
      "Amazon CloudWatch"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Personal Health Dashboard gives you a personalized view of the status of the AWS services that power your applications, enabling you to quickly see when AWS is experiencing issues that may impact you. For example, in the event of a lost EBS volume associated with one of your EC2 instances, you would gain quick visibility into the status of the specific service you are using, helping save precious time troubleshooting to determine root cause. Reference: https://aws.amazon.com/premiumsupport/technology/personal-health-dashboard/"
  },
  {
    "id": 89,
    "domain": 4,
    "question": "Which of the following is an advantage of consolidated billing on AWS?",
    "options": [
      "Volume pricing qualification",
      "Shared access permissions",
      "Multiple bills per account",
      "Eliminates the need for tagging"
    ],
    "correct": 0,
    "multi": false,
    "explanation": "If you have multiple standalone accounts, your charges might decrease if you add the accounts to an organization. AWS combines usage from all accounts in the organization to qualify you for volume pricing discounts. Reference: https://help.nops.io/consolidated-billing"
  },
  {
    "id": 90,
    "domain": 1,
    "question": "Which of the following steps should be taken by a customer when conducting penetration testing on AWS?",
    "options": [
      "Conduct penetration testing using Amazon Inspector, and then notify AWS support.",
      "Request and wait for approval from the customera\u20ac\u2122s internal security team, and then conduct testing.",
      "Notify AWS support, and then conduct testing immediately.",
      "Request and wait for approval from AWS support, and then conduct testing."
    ],
    "correct": 3,
    "multi": false,
    "explanation": "AWS customers are welcome to carry out security assessments or penetration tests against their AWS infrastructure without prior approval for 8 services. Reference: https://aws.amazon.com/security/penetration-testing/"
  },
  {
    "id": 91,
    "domain": 3,
    "question": "Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?",
    "options": [
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon Machine Image",
      "Amazon EC2 Systems Manager",
      "Amazon AppStream 2.0"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "To use Amazon EC2, you simply: Select a pre-configured, templated Amazon Machine Image (AMI) to get up and running immediately. Or create an AMI containing your applications, libraries, data, and associated configuration settings. \u2192 Configure security and network access on your Amazon EC2 instance. Choose which instance type(s) you want, then start, terminate, and monitor as many instances of your AMI as needed, using the web service APIs or the variety of management tools provided. \u2192 Determine whether you want to run in multiple locations, utilize static IP endpoints, or attach persistent block storage to your instances. Pay only for the resources that you actually consume. like instance-hours or data transfer. Reference: https://aws.amazon.com/ec2/features/"
  },
  {
    "id": 92,
    "domain": 1,
    "question": "How would an AWS customer easily apply common access controls to a large set of users?",
    "options": [
      "Apply an IAM policy to an IAM group.",
      "Apply an IAM policy to an IAM role.",
      "Apply the same IAM policy to all IAM users with access to the same workload.",
      "Apply an IAM policy to an Amazon Cognito user pool."
    ],
    "correct": 0,
    "multi": false,
    "explanation": "Instead of defining permissions for individual IAM users, it's usually more convenient to create groups that relate to job functions (administrators, developers, accounting, etc.). Next, define the relevant permissions for each group. Finally, assign IAM users to those groups. All the users in an IAM group inherit the permissions assigned to the group. That way, you can make changes for everyone in a group in just one place. As people move around in your company, you can simply change what IAM group their IAM user belongs to. Reference: https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html"
  },
  {
    "id": 93,
    "domain": 3,
    "question": "What technology enables compute capacity to adjust as loads change?",
    "options": [
      "Load balancing",
      "Automatic failover",
      "Round robin",
      "Auto Scaling"
    ],
    "correct": 3,
    "multi": false,
    "explanation": "AWS Auto Scaling monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost. Using AWS Auto Scaling, ita\u20ac\u2122s easy to setup application scaling for multiple resources across multiple services in minutes. The service provides a simple, powerful user interface that lets you build scaling plans for resources including Amazon EC2 instances and Spot Fleets, Amazon ECS tasks, Amazon DynamoDB tables and indexes, and Amazon Aurora Replicas. AWS Auto Scaling makes scaling simple with recommendations that allow you to optimize performance, costs, or balance between them. If youx\u20ac\u2122re already using Amazon EC2 Auto Scaling to dynamically scale your Amazon EC2 instances, you can now combine it with AWS Auto Scaling to scale additional resources for other AWS services. With AWS Auto Scaling, your applications always have the right resources at the right time. Reference: https://aws.amazon.com/autoscaling/"
  },
  {
    "id": 94,
    "domain": 1,
    "question": "Which AWS services are defined as global instead of regional? (Choose two.)",
    "options": [
      "Amazon Route 53",
      "Amazon EC2",
      "Amazon S3",
      "Amazon CloudFront",
      "Amazon DynamoDB"
    ],
    "correct": [
      0,
      3
    ],
    "multi": true,
    "explanation": "Reference: http://jayendrapatil.com/aws-global-vs-regional-vs-az-resources/"
  },
  {
    "id": 95,
    "domain": 2,
    "question": "Which AWS service would you use to obtain compliance reports and certificates?",
    "options": [
      "AWS Artifact",
      "AWS Lambda",
      "Amazon Inspector",
      "AWS Certificate Manager"
    ],
    "correct": 0,
    "multi": false,
    "explanation": "AWS Artifact is your go-to, central resource for compliance-related information that matters to you. It provides on-demand access to AWSx\u20ac\u2122 security and compliance reports and select online agreements. Reports available in AWS Artifact include our Service Organization Control (SOC) reports, Payment Card Industry (PCI) reports, and certifications from accreditation bodies across geographies and compliance verticals that validate the implementation and operating effectiveness of AWS security controls. Agreements available in AWS Artifact include the Business Associate Addendum (BAA) and the Nondisclosure Agreement (NDA). Reference: https://aws.amazon.com/artifact/"
  },
  {
    "id": 96,
    "domain": 2,
    "question": "Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Choose two.)",
    "options": [
      "Ensuring that application data is encrypted at rest",
      "Ensuring that AWS NTP servers are set to the correct time",
      "Ensuring that users have received security training in the use of AWS services",
      "Ensuring that access to data centers is restricted",
      "Ensuring that hardware is disposed of properly"
    ],
    "correct": [
      0,
      2
    ],
    "multi": true,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 97,
    "domain": 1,
    "question": "Which AWS service can be used to manually launch instances based on resource requirements?",
    "options": [
      "Amazon EBS",
      "Amazon S3",
      "Amazon EC2",
      "Amazon ECS"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 98,
    "domain": 4,
    "question": "A company is migrating an application that is running non-interruptible workloads for a three-year time frame. Which pricing construct would provide the MOST cost-effective solution?",
    "options": [
      "Amazon EC2 Spot Instances",
      "Amazon EC2 Dedicated Instances",
      "Amazon EC2 On-Demand Instances",
      "Amazon EC2 Reserved Instances"
    ],
    "correct": 3,
    "multi": false,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 99,
    "domain": 1,
    "question": "The financial benefits of using AWS are: (Choose two.)",
    "options": [
      "reduced Total Cost of Ownership (TCO).",
      "increased capital expenditure (capex).",
      "reduced operational expenditure (opex).",
      "deferred payment plans for startups.",
      "business credit lines for stratups."
    ],
    "correct": [
      0,
      2
    ],
    "multi": true,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 100,
    "domain": 4,
    "question": "Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?",
    "options": [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Cost and Usage report",
      "AWS Billing dashboard"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "The Cost & Usage Report is your one-stop-shop for accessing the most granular data about your AWS costs and usage. You can also load your cost and usage information into Amazon Athena, Amazon Redshift, AWS QuickSight, or a tool of your choice. Reference: https://aws.amazon.com/aws-cost-management/"
  },
  {
    "id": 101,
    "domain": 3,
    "question": "Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster?",
    "options": [
      "AWS Concierge",
      "AWS CloudFormation",
      "Amazon Simple Storage Service (Amazon S3)",
      "Amazon EC2 Auto Scaling",
      "AWS Management Console"
    ],
    "correct": 4,
    "multi": false,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 102,
    "domain": 1,
    "question": "Which of the following is an AWS Cloud architecture design principle?",
    "options": [
      "Implement single points of failure.",
      "Implement loose coupling.",
      "Implement monolithic design.",
      "Implement vertical scaling."
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Loose coupling between services can also be done through asynchronous integration. It involves one component that generates events and another that consumes them. The two components do not integrate through direct point-to-point interaction, but usually through an intermediate durable storage layer. This approach decouples the two components and introduces additional resiliency. So, for example, if a process that is reading messages from the queue fails, messages can still be added to the queue to be processed when the system recovers. Reference: https://www.botmetric.com/blog/aws-cloud-architecture-design-principles/"
  },
  {
    "id": 103,
    "domain": 2,
    "question": "Which of the following security measures protect access to an AWS account? (Choose two.)",
    "options": [
      "Enable AWS CloudTrail.",
      "Grant least privilege access to IAM users.",
      "Create one IAM user and share with many developers and users.",
      "Enable Amazon CloudFront.",
      "Activate multi-factor authentication (MFA) for privileged users."
    ],
    "correct": [
      1,
      4
    ],
    "multi": true,
    "explanation": "If you decided to create service accounts (that is, accounts used for programmatic access by applications running outside of the AWS environment) and generate access keys for them, you should create a dedicated service account for each use case. This will allow you to restrict the associated policy to only the permissions needed for the particular use case, limiting the blast radius if the credentials are compromised. For example, if a monitoring tool and a release management tool both require access to your AWS environment, create two separate service accounts with two separate policies that define the minimum set of permissions for each tool. Reference: https://aws.amazon.com/blogs/security/guidelines-for-protecting-your-aws-account-while-using-programmatic-access/"
  },
  {
    "id": 104,
    "domain": 3,
    "question": "Which service provides a hybrid storage service that enables on-premises applications to seamlessly use cloud storage?",
    "options": [
      "Amazon Glacier",
      "AWS Snowball",
      "AWS Storage Gateway",
      "Amazon Elastic Block Storage (Amazon EBS)"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "AWS Storage Gateway is a hybrid cloud storage service that gives you on-premises access to virtually unlimited cloud storage. Customers use Storage Gateway to simplify storage management and reduce costs for key hybrid cloud storage use cases. These include moving tape backups to the cloud, reducing on-premises storage with cloud-backed file shares, providing low latency access to data in AWS for on-premises applications, as well as various migration, archiving, processing, and disaster recovery use cases. Reference: https://aws.amazon.com/storagegateway/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc"
  },
  {
    "id": 105,
    "domain": 2,
    "question": "Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?",
    "options": [
      "Amazon RDS",
      "Amazon EC2",
      "Amazon ElastiCache",
      "AWS Fargate"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "The customer is responsible for managing, support, patching and control of the guest operating system and AWS services provided like EC2. Reference: https://www.whizlabs.com/blog/aws-security-shared-responsibility/"
  },
  {
    "id": 106,
    "domain": 1,
    "question": "Which of the following is an important architectural design principle when designing cloud applications?",
    "options": [
      "Use multiple Availability Zones.",
      "Use tightly coupled components.",
      "Use open source software.",
      "Provision extra capacity."
    ],
    "correct": 0,
    "multi": false,
    "explanation": "Data Center resilience is practiced through Availability Zones across data centers that reduce the impact of failures. Fault isolation improvement can be made to traditional horizontal scaling by sharding (a method of grouping instances into groups called shards, instead of sending the traffic from all users to every node like in the traditional IT structure.) Reference: https://www.botmetric.com/blog/aws-cloud-architecture-design-principles/"
  },
  {
    "id": 107,
    "domain": 4,
    "question": "Which AWS support plan includes a dedicated Technical Account Manager?",
    "options": [
      "Developer",
      "Enterprise",
      "Business",
      "Basic"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "The enterprise support plans supports technical account manager. Developer and business support plans are devoid of this facility. Reference: https://aws.amazon.com/premiumsupport/plans/"
  },
  {
    "id": 108,
    "domain": 3,
    "question": "Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?",
    "options": [
      "AWS manages the data stored in Amazon RDS tables.",
      "AWS manages the maintenance of the operating system.",
      "AWS automatically scales up instance types on demand.",
      "AWS manages the database type."
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 109,
    "domain": 3,
    "question": "Which service is best for storing common database query results, which helps to alleviate database access load?",
    "options": [
      "Amazon Machine Learning",
      "Amazon SQS",
      "Amazon ElastiCache",
      "Amazon EC2 Instance Store"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Amazon ElastiCache for Redis is a great choice for implementing a highly available, distributed, and secure in-memory cache to decrease access latency, increase throughput, and ease the load off your relational or NoSQL databases and applications. ElastiCache can serve frequently requested items at sub- millisecond response times, and enables you to easily scale for higher loads without growing the costlier backend databases. Database query results caching, persistent session caching, and full-page caching are all popular examples of caching with ElastiCache for Redis. Reference: https://aws.amazon.com/products/databases/real-time-apps-elasticache-for-redis/"
  },
  {
    "id": 110,
    "domain": 2,
    "question": "Which of the following is a component of the shared responsibility model managed entirely by AWS?",
    "options": [
      "Patching operating system software",
      "Encrypting data",
      "Enforcing multi-factor authentication",
      "Auditing physical data center assets"
    ],
    "correct": 3,
    "multi": false,
    "explanation": "Of course, Amazon is responsible for auditing physical data center assets and resources since it is the property of Amazon Inc. Customers have no access to physical sites, hence they are not responsible for maintaining physical data center assets."
  },
  {
    "id": 111,
    "domain": 2,
    "question": "Which options does AWS make available for customers who want to learn about security in the cloud in an instructor-led setting? (Choose two.)",
    "options": [
      "AWS Trusted Advisor",
      "AWS Online Tech Talks",
      "AWS Blog",
      "AWS Forums",
      "AWS Classroom Training"
    ],
    "correct": [
      1,
      4
    ],
    "multi": true,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 112,
    "domain": 3,
    "question": "Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Choose two.)",
    "options": [
      "Amazon CloudFront distributions",
      "Amazon Route 53",
      "Security Groups",
      "Subnets",
      "Elastic Load Balancing"
    ],
    "correct": [
      2,
      3
    ],
    "multi": true,
    "explanation": "Amazon Virtual Private Cloud (Amazon VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define. You have complete control over your virtual networking environment, including selection of your own IP address range, creation of subnets, and configuration of route tables and network gateways. You can use both IPv4 and IPv6 in your VPC for secure and easy access to resources and applications. You can easily customize the network configuration for your Amazon VPC. For example, you can create a public-facing subnet for your web servers that has access to the Internet, and place your backend systems such as databases or application servers in a private-facing subnet with no Internet access. You can leverage multiple layers of security, including security groups and network access control lists, to help control access to Amazon EC2 instances in each subnet. Reference: https://aws.amazon.com/vpc/"
  },
  {
    "id": 113,
    "domain": 4,
    "question": "If each department within a company has its own AWS account, what is one way to enable consolidated billing?",
    "options": [
      "Use AWS Budgets on each account to pay only to budget.",
      "Contact AWS Support for a monthly bill.",
      "Create an AWS Organization from the payer account and invite the other accounts to join.",
      "Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report."
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Reference: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html"
  },
  {
    "id": 114,
    "domain": 1,
    "question": "How do customers benefit from Amazonas massive economies of scale?",
    "options": [
      "Periodic price reductions as the result of Amazon:\u20ac\u2122s operational efficiencies",
      "New Amazon EC2 instance types providing the latest hardware",
      "The ability to scale up and down when needed",
      "Increased reliability in the underlying hardware of Amazon EC2 instances"
    ],
    "correct": 0,
    "multi": false,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 115,
    "domain": 1,
    "question": "Which AWS services can be used to gather information about AWS account activity? (Choose two.)",
    "options": [
      "Amazon CloudFront",
      "AWS Cloud9",
      "AWS CloudTrail",
      "AWS CloudHSM",
      "Amazon CloudWatch"
    ],
    "correct": [
      2,
      4
    ],
    "multi": true,
    "explanation": "AWS offers a solution that uses AWS CloudTrail to log account activity, Amazon Kinesis to compute and stream metrics in real-time, and Amazon DynamoDB to durably store the computed data. Metrics are calculated for create, modify, and delete API calls for more than 60 supported AWS services. The solution also features a dashboard that visualizes your account activity in real-time. Reference: https://aws.amazon.com/solutions/real-time-insights-account-activity/"
  },
  {
    "id": 116,
    "domain": 1,
    "question": "Which of the following common IT tasks can AWS cover to free up company IT resources? (Choose two.)",
    "options": [
      "Patching databases software",
      "Testing application releases",
      "Backing up databases",
      "Creating database schema",
      "Running penetration tests"
    ],
    "correct": [
      0,
      2
    ],
    "multi": true,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 117,
    "domain": 3,
    "question": "In which scenario should Amazon EC2 Spot Instances be used?",
    "options": [
      "A company wants to move its main website to AWS from an on-premises web server.",
      "A company has a number of application services whose Service Level Agreement (SLA) requires 99.999% uptime.",
      "A company:\u20ac\u2122s heavily used legacy database is currently running on-premises.",
      "A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances."
    ],
    "correct": 3,
    "multi": false,
    "explanation": "Reference: https://docs.aws.amazon.com/whitepapers/latest/cost-optimization-leveraging-ec2-spot-instances/spot-instance-interruptions.html"
  },
  {
    "id": 118,
    "domain": 1,
    "question": "Which AWS service should a customer leverage to achieve high availability of an application?",
    "options": [
      "AWS Direct Connect",
      "Availability Zones",
      "Data centers",
      "Amazon Virtual Private Cloud (Amazon VPC)"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "This is to achieve High Availability for any web application (in this case SwiftCode) deployed in AWS. The following features will be present: High availability across multiple instances/multiple availability zones. \u2192 Auto Scaling of instances (scale up and scale down) based on number of requests coming in Additional Security to the instances/database that are in production No impact to end users during newer version of code deployment No Impact during patching the instances Reference: https://betsol.com/2018/01/how-to-make-high-availability-web-applications-on-amazon-web-services/"
  },
  {
    "id": 119,
    "domain": 4,
    "question": "Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?",
    "options": [
      "Enterprise",
      "Business",
      "Developer",
      "Basic"
    ],
    "correct": 0,
    "multi": false,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 120,
    "domain": 3,
    "question": "Which AWS service can serve a static website?",
    "options": [
      "Amazon S3",
      "Amazon Route 53",
      "Amazon QuickSight",
      "AWS X-Ray"
    ],
    "correct": 0,
    "multi": false,
    "explanation": "You can host a static website on Amazon Simple Storage Service (Amazon S3). On a static website individual webpages include static content They might also contain client-side scripts. By contrast, a dynamic website relies on server-side processing, including server-side scripts such as PHP, JSP, or ASP.NET. Amazon S3 does not support server-side scripting. Reference: https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html"
  },
  {
    "id": 121,
    "domain": 1,
    "question": "How does AWS shorten the time to provision IT resources?",
    "options": [
      "It supplies an online IT ticketing platform for resource requests.",
      "It supports automatic code validation services.",
      "It provides the ability to programmatically provision existing resources.",
      "It automates the resource request process from a company:\u20ac\u2122s IT vendor list."
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 122,
    "domain": 1,
    "question": "What can AWS edge locations be used for? (Choose two.)",
    "options": [
      "Hosting applications",
      "Delivering content closer to users",
      "Running NoSQL database caching services",
      "Reducing traffic on the server by caching responses",
      "Sending notification messages to end users"
    ],
    "correct": [
      1,
      3
    ],
    "multi": true,
    "explanation": "CloudFront delivers your content through a worldwide network of data centers called edge locations. When a user requests content that you're serving with CloudFront, the user is routed to the edge location that provides the lowest latency (time delay), so that content is delivered with the best possible performance. Reference: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html"
  },
  {
    "id": 123,
    "domain": 3,
    "question": "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
    "options": [
      "A public and private key-pair",
      "Amazon Inspector",
      "AWS Identity and Access Management (IAM) policies",
      "Security Groups"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "To allow users to perform S3 actions on the bucket from the VPC endpoints or IP addresses, you must explicitly grant those user-level permissions. You can grant user-level permissions on either an AWS Identity and Access Management (IAM) policy or another statement in the bucket policy. Reference: https://aws.amazon.com/premiumsupport/knowledge-center/block-s3-traffic-vpc-ip/"
  },
  {
    "id": 124,
    "domain": 1,
    "question": "A solution that is able to support growth in users, traffic, or data size with no drop in performance aligns with which cloud architecture principle?",
    "options": [
      "Think parallel",
      "Implement elasticity",
      "Decouple your components",
      "Design for failure"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Reference: https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf"
  },
  {
    "id": 125,
    "domain": 1,
    "question": "A company will be moving from an on-premises data center to the AWS Cloud. What would be one financial difference after the move?",
    "options": [
      "Moving from variable operational expense (opex) to upfront capital expense (capex).",
      "Moving from upfront capital expense (capex) to variable capital expense (capex).",
      "Moving from upfront capital expense (capex) to variable operational expense (opex).",
      "Elimination of upfront capital expense (capex) and elimination of variable operational expense (opex)."
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 126,
    "domain": 4,
    "question": "How should a customer forecast the future costs for running a new web application?",
    "options": [
      "Amazon Aurora Backtrack",
      "Amazon CloudWatch Billing Alarms",
      "AWS Simple Monthly Calculator",
      "AWS Cost and Usage report"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "You can use Cost explorer which is part of Cost and Usage report to forecast future costs of running an application. Reference: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-forecast.html"
  },
  {
    "id": 127,
    "domain": 4,
    "question": "Which is the MINIMUM AWS Support plan that provides technical support through phone calls?",
    "options": [
      "Enterprise",
      "Business",
      "Developer",
      "Basic"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/premiumsupport/plans/"
  },
  {
    "id": 128,
    "domain": 1,
    "question": "Which of the following tasks is the responsibility of AWS?",
    "options": [
      "Encrypting client-side data",
      "Configuring AWS Identity and Access Management (IAM) roles",
      "Securing the Amazon EC2 hypervisor",
      "Setting user password policies"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "In EC2, the AWS laas offering, everything from the hypervisor layer down is AWSx\u20ac\u2122s responsibility. A customer:\u20ac\u2122s poorly coded applications, misconfigured operating systems, or insecure firewall settings will not affect the hypervisor, it will only affect the customera\u20ac\u2122s virtual machines running on that hypervisor. Reference: https://www.mindpointgroup.com/blog/the-aws-shared-responsibility-model-part-1-security-in-the-cloud/"
  },
  {
    "id": 129,
    "domain": 4,
    "question": "One benefit of On-Demand Amazon Elastic Compute Cloud (Amazon EC2) pricing is:",
    "options": [
      "the ability to bid for a lower hourly cost.",
      "paying a daily rate regardless of time used.",
      "paying only for time used.",
      "pre-paying for instances and paying a lower hourly rate."
    ],
    "correct": 2,
    "multi": false,
    "explanation": "On-Demand Capacity Reservations are priced exactly the same as their equivalent (On-Demand) instance usage. If a Capacity Reservation is fully utilized, you only pay for instance usage and nothing towards the Capacity Reservation. If a Capacity Reservation is partially utilized, you pay for the instance usage and for the unused portion of the Capacity Reservation. Reference: https://aws.amazon.com/ec2/pricing/on-demand/"
  },
  {
    "id": 130,
    "domain": 1,
    "question": "An administrator needs to rapidly deploy a popular IT solution and start using it immediately. Where can the administrator find assistance?",
    "options": [
      "AWS Well-Architected Framework documentation",
      "Amazon CloudFront",
      "AWS CodeCommit",
      "AWS Quick Start reference deployments"
    ],
    "correct": 3,
    "multi": false,
    "explanation": "Quick Starts are built by AWS solutions architects and partners to help you deploy popular technologies on AWS, based on AWS best practices for security and high availability. These accelerators reduce hundreds of manual procedures into just a few steps, so you can build your production environment quickly and start using it immediately. Reference: https://aws.amazon.com/quickstart/?quickstart-all.sort-by=item.additionalFields.updateDate&quickstart-all.sort-order=desc"
  },
  {
    "id": 131,
    "domain": 1,
    "question": "Which of the following services is in the category of AWS serverless platform?",
    "options": [
      "Amazon EMR",
      "Elastic Load Balancing",
      "AWS Lambda",
      "AWS Mobile Hub"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "AWS provides a set of fully managed services that you can use to build and run serverless applications. Serverless applications dona\u20ac\u2122t require provisioning, maintaining, and administering servers for backend components such as compute, databases, storage, stream processing, message queueing, and more. You also no longer need to worry about ensuring application fault tolerance and availability. Instead, AWS handles all of these capabilities for you. Serverless platform includes: AWS lambda, Amazon S3, DynamoDB, API gateway, Amazon SNS, AWS step functions, Amazon kinesis and developing tools and services. Reference: https://aws.amazon.com/serverless/"
  },
  {
    "id": 132,
    "domain": 1,
    "question": "Which services are parts of the AWS serverless platform?",
    "options": [
      "Amazon EC2, Amazon S3, Amazon Athena",
      "Amazon Kinesis, Amazon SQS, Amazon EMR",
      "AWS Step Functions, Amazon DynamoDB, Amazon SNS",
      "Amazon Athena, Amazon Cognito, Amazon EC2"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "AWS provides a set of fully managed services that you can use to build and run serverless applications. Serverless applications dona\u20ac\u2122t require provisioning, maintaining, and administering servers for backend components such as compute, databases, storage, stream processing, message queueing, and more. You also no longer need to worry about ensuring application fault tolerance and availability. Instead, AWS handles all of these capabilities for you. Serverless platforms include AWS lambda, Amazon S3, DynamoDB, API Gateway, Amazon SNS, AWS Step Functions, Amazon Kinesis, and developing tools and services. Reference: https://aws.amazon.com/serverless/"
  },
  {
    "id": 133,
    "domain": 2,
    "question": "According to the AWS shared responsibility model, what is the sole responsibility of AWS?",
    "options": [
      "Application security",
      "Edge location management",
      "Patch management",
      "Client-side data"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Client-side data, application security is the sole responsibility of the customer. Patch management is a shared responsibility. That leaves us with edge location management and since this out of the control of the customer, AWS is the one responsible for it. Reference: https://aws.amazon.com/compliance/shared-responsibility-model/"
  },
  {
    "id": 134,
    "domain": 2,
    "question": "Which AWS IAM feature is used to associate a set of permissions with multiple users?",
    "options": [
      "Multi-factor authentication",
      "Groups",
      "Password policies",
      "Access keys"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "An IAM group is a collection of IAM users. You can use groups to specify permissions for a collection of users, which can make those permissions easier to manage for those users. For example, you could have a group called Admins and give that group the types of permissions that administrators typically need. Reference: https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html"
  },
  {
    "id": 135,
    "domain": 1,
    "question": "Which of the following are benefits of the AWS Cloud? (Choose two.)",
    "options": [
      "Unlimited uptime",
      "Elasticity",
      "Agility",
      "Colocation",
      "Capital expenses"
    ],
    "correct": [
      1,
      2
    ],
    "multi": true,
    "explanation": "The most celebrated benefit of AWS cloud is elasticity since you can expand the services when you experience more traffic. Agile developments in AWS Cloud through strategies are day by day becoming more established within the enterprises across the world. With so much improvement and call for optimization in the cloud, it is necessary that these strategies get established from the ground up within the organizations. It is highly important as already enterprises have a lot of bequest, politics and hierarchies which act as barriers in their businesses. Reference: https://www.botmetric.com/blog/evolution-agile-enterprises-aws-cloud/"
  },
  {
    "id": 136,
    "domain": 1,
    "question": "Which of the following can a customer use to enable single sign-on (SSO) to the AWS Console?",
    "options": [
      "Amazon Connect",
      "AWS Directory Service",
      "Amazon Pinpoint",
      "Amazon Rekognition"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Single sign-on only works when used on a computer that is joined to the AWS Directory Service directory. It cannot be used on computers that are not joined to the directory. Reference: https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_single_sign_on.html"
  },
  {
    "id": 137,
    "domain": 1,
    "question": "What are the multiple, isolated locations within an AWS Region that are connected by low-latency networks called?",
    "options": [
      "AWS Direct Connects",
      "Amazon VPCS",
      "Edge locations",
      "Availability Zones"
    ],
    "correct": 3,
    "multi": false,
    "explanation": "Each Region is completely independent. Each Availability Zone is isolated, but the Availability Zones in a Region are connected through low-latency links. A Local Zone is an AWS infrastructure deployment that places select services closer to your end users. A Local Zone is an extension of a Region that is in a different location from your Region. It provides a high-bandwidth backbone to the AWS infrastructure and is ideal for latency-sensitive applications, for example machine learning. Reference: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html"
  },
  {
    "id": 138,
    "domain": 2,
    "question": "Which of the following benefits does the AWS Compliance program provide to AWS customers? (Choose two.)",
    "options": [
      "It verifies that hosted workloads are automatically compliant with the controls of supported compliance frameworks. PDF",
      "AWS is responsible for the maintenance of common compliance framework documentation.",
      "It assures customers that AWS is maintaining physical security and data protection.",
      "It ensures the use of compliance frameworks that are being used by other cloud providers.",
      "It will adopt new compliance frameworks as they become relevant to customer workloads."
    ],
    "correct": [
      1,
      2
    ],
    "multi": true,
    "explanation": "Reference: https://d0.awsstatic.com/whitepapers/compliance/AWS_Risk_and_Compliance_Whitepaper.pdf"
  },
  {
    "id": 139,
    "domain": 2,
    "question": "Which of the following services provides on-demand access to AWS compliance reports? AWS IAM RAWS Artifact Amazon GuardDuty AWS KMS",
    "options": [],
    "correct": 1,
    "multi": false,
    "explanation": "AWS Artifact is your go-to, central resource for compliance-related information that matters to you. It provides on-demand access to AWSx\u20ac\u2122 security and compliance reports and select online agreements. Reports available in AWS Artifact include our Service Organization Control (SOC) reports, Payment Card Industry (PCI) reports, and certifications from accreditation bodies across geographies and compliance verticals that validate the implementation and operating effectiveness of AWS security controls. Agreements available in AWS Artifact include the Business Associate Addendum (BAA) and the Nondisclosure Agreement (NDA). Reference: https://aws.amazon.com/artifact/"
  },
  {
    "id": 140,
    "domain": 2,
    "question": "As part of the AWS shared responsibility model, which of the following operational controls do users fully inherit from AWS?",
    "options": [
      "Security management of data center",
      "Patch management",
      "Configuration management",
      "User and access management"
    ],
    "correct": 0,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/compliance/shared-responsibility-model/"
  },
  {
    "id": 141,
    "domain": 4,
    "question": "When comparing AWS Cloud with on-premises Total Cost of Ownership, which expenses must be considered? (Choose two.)",
    "options": [
      "Software development",
      "Project management",
      "Storage hardware",
      "Physical servers",
      "Antivirus software license"
    ],
    "correct": [
      2,
      3
    ],
    "multi": true,
    "explanation": "Reference: https://aws.amazon.com/blogs/aws/the-new-aws-tco-calculator/"
  },
  {
    "id": 142,
    "domain": 2,
    "question": "Under the shared responsibility model, which of the following tasks are the responsibility of the customer? (Choose two.)",
    "options": [
      "Maintaining the underlying Amazon EC2 hardware.",
      "Managing the VPC network access control lists.",
      "Encrypting data in transit and at rest.",
      "Replacing failed hard disk drives.",
      "Deploying hardware in different Availability Zones."
    ],
    "correct": [
      1,
      2
    ],
    "multi": true,
    "explanation": "The hardware related jobs is the prime responsibility of AWS. VPC network access control lists is something a customer has to do himself to secure the applications. Encrypting data in transit and at rest is a shared responsibility in which AWS plays a part. All hardware related jobs have nothing to do with the customer. Reference: https://dzone.com/articles/aws-shared-responsibility-model-cloud-security"
  },
  {
    "id": 143,
    "domain": 1,
    "question": "Which scenarios represent the concept of elasticity on AWS? (Choose two.)",
    "options": [
      "Scaling the number of Amazon EC2 instances based on traffic.",
      "Resizing Amazon RDS instances as business needs change.",
      "Automatically directing traffic to less-utilized Amazon EC2 instances.",
      "Using AWS compliance documents to accelerate the compliance process.",
      "Having the ability to create and govern environments using code."
    ],
    "correct": [
      0,
      1
    ],
    "multi": true,
    "explanation": "Reference: https://wa.aws.amazon.com/wat.concept.elasticity.en.html"
  },
  {
    "id": 144,
    "domain": 1,
    "question": "When is it beneficial for a company to use a Spot Instance?",
    "options": [
      "When there is flexibility in when an application needs to run.",
      "When there are mission-critical workloads.",
      "When dedicated capacity is needed.",
      "When an instance should not be stopped."
    ],
    "correct": 0,
    "multi": false,
    "explanation": "The key to understanding spot instances is to look at the way that cloud service providers such as Amazon Web Services (AWS) operate. Cloud service providers invest in hardware resources and then release those resources (often on a per hour basis) to subscribers. One of the problems with this business model, however, is that at any given time, there are likely to be compute resources that are not being utilized. These resources represent hardware capacity that AWS has paid for but are sitting idle, and not making AWS any money at the moment. Rather than allowing these computing resources to go to waste, AWS offers them at a substantially discounted rate, with the understanding that if someone needs those resources for running a normal EC2 instance, that instance will take priority over spot instances that are using the hardware resources at a discounted rate. In fact, spot instances will be stopped if the resources are needed elsewhere. Reference: https://awsinsider.net/articles/2017/09/25/aws-spot-instances-primer.aspx"
  },
  {
    "id": 145,
    "domain": 4,
    "question": "A company is considering moving its on-premises data center to AWS. What factors should be included in doing a Total Cost of Ownership (TCO) analysis? (Choose two.)",
    "options": [
      "Amazon EC2 instance availability",
      "Power consumption of the data center",
      "Labor costs to replace old servers",
      "Application developer time",
      "Database engine capacity"
    ],
    "correct": [
      1,
      2
    ],
    "multi": true,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 146,
    "domain": 3,
    "question": "How does AWS charge for AWS Lambda? Users bid on the maximum price they are willing to pay per hour. Users choose a 1-3 or 5 year upfront payment term. Users pay for the required permanent storage on a file system or in a database. Users pay based on the number of requests and consumed compute resources.",
    "options": [],
    "correct": 3,
    "multi": false,
    "explanation": "AWS Lambda is charging its users by the number of requests for their functions and by the duration, which is the time the code needs to execute. When code starts running in response to an event, AWS Lambda counts a request. It will charge the total number of requests across all of the functions used. Duration is calculated by the time when your code started executing until it returns or until it is terminated, rounded up near to 100ms. The AWS Lambda pricing depends on the amount of memory that the user used to allocate to the function. Reference: https://dashbird.io/blog/aws-lambda-pricing-model-explained/"
  },
  {
    "id": 147,
    "domain": 2,
    "question": "What function do security groups serve related to Amazon Elastic Compute Cloud (Amazon EC2) instance security?",
    "options": [
      "Act as a virtual firewall for the Amazon EC2 instance.",
      "Secure AWS user accounts with AWS Identity and Access Management (IAM) policies.",
      "Provide DDoS protection with AWS Shield.",
      "Use Amazon CloudFront to protect the Amazon EC2 instance."
    ],
    "correct": 0,
    "multi": false,
    "explanation": "AWS Security Groups act like a firewall for your Amazon EC2 instances controlling both inbound and outbound traffic. When you launch an instance on Amazon EC2, you need to assign it to a particular security group. After that, you can set up ports and protocols, which remain open for users and computers over the internet. AWS Security Groups are very flexible. You can use the default security group and still customize it according to your liking (although we dona\u20ac\u2122t recommend this practice because groups should be named according to their purpose.) Or you can create a security group that you want for your specific applications. To do this, you can write the corresponding code or use the Amazon EC2 console to make the process easier. Reference: https://www.threatstack.com/blog/aws-security-groups-what-they-are-and-how-to-get-the-most-out-of-them"
  },
  {
    "id": 148,
    "domain": 1,
    "question": "Which disaster recovery scenario offers the lowest probability of down time?",
    "options": [
      "Backup and restore",
      "Pilot light",
      "Warm standby",
      "Multi-site active-active"
    ],
    "correct": 3,
    "multi": false,
    "explanation": "Backup and Restore: a simple, straightforward, cost-effective method that backs up and restores data as needed. Keep in mind that because none of your data is on standby, this method, while cheap, can be quite time-consuming. Pilot Light: This method keeps critical applications and data at the ready so that it can be quickly retrieved if needed. Warm Standby: This method keeps a duplicate version of your businessa\u20ac\u2122 core elements running on standby at all times, which makes for a little downtime and an almost seamless transition. Multi-Site Solution: Also known as a Hot Standby, this method fully replicates your companya\u20ac\u2122s data/applications between two or more active locations and splits your traffic/usage bed.can them. IP a disaster strikes, everything is simply rucated to the unaffected area, which means youxt \"Il suffer almost zero downtime. However, by running two separate environments simultaneously, you will obviously incur much higher costs. Reference: https://cloudranger.com/best-practices-aws-disaster-recovery-planning/"
  },
  {
    "id": 149,
    "domain": 4,
    "question": "What will help a company perform a cost benefit analysis of migrating to the AWS Cloud?",
    "options": [
      "Cost Explorer",
      "AWS Total Cost of Ownership (TCO) Calculator",
      "AWS Simple Monthly Calculator",
      "AWS Trusted Advisor"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "AWS TCO calculators allow you to estimate the cost savings when using AWS and provide a detailed set of reports that can be used in executive presentations. The calculators also give you the option to modify assumptions that best meet your business needs. Reference: https://aws.amazon.com/tco-calculator/"
  },
  {
    "id": 150,
    "domain": 4,
    "question": "Which of the following provides the ability to share the cost benefits of Reserved Instances across AWS accounts?",
    "options": [
      "AWS Cost Explorer between AWS accounts",
      "Linked accounts and consolidated billing",
      "Amazon Elastic Compute Cloud (Amazon EC2) Reserved Instance Utilization Report",
      "Amazon EC2 Instance Usage Report between AWS accounts"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "The way that Reserved Instance discounts apply to accounts in an organization's consolidated billing family depends on whether Reserved Instance sharing is turned on or off for the account. By default, Reserved Instance sharing for all accounts in an organization is turned on. You can change this setting by Turning Off Reserved Instance Sharing for an account. The capacity reservation for a Reserved Instance applies only to the account the Reserved Instance was purchased on, regardless of whether Reserved Instance sharing is turned on or off. Reference: https://aws.amazon.com/premiumsupport/knowledge-center/ec2-ri-consolidated-billing/"
  },
  {
    "id": 151,
    "domain": 4,
    "question": "A company has multiple AWS accounts and wants to simplify and consolidate its billing process. Which AWS service will achieve this?",
    "options": [
      "AWS Cost and Usage Reports",
      "AWS Organizations",
      "AWS Cost Explorer",
      "AWS Budgets"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "You can use the consolidated billing feature in AWS Organizations to consolidate billing and payment for multiple AWS accounts or multiple Amazon Internet Services Pvt. Ltd (AISPL) accounts. Every organization in AWS Organizations has a master (payer) account that pays the charges of all the member (linked) accounts. Reference: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html"
  },
  {
    "id": 152,
    "domain": 1,
    "question": "A company is designing an application hosted in a single AWS Region serving end-users spread across the world. The company wants to provide the end-users low latency access to the application data. Which of the following services will help fulfill this requirement?",
    "options": [
      "Amazon CloudFront",
      "AWS Direct Connect PDF",
      "Amazon Route 53 global DNS",
      "Amazon Simple Storage Service (Amazon S3) transfer acceleration"
    ],
    "correct": 0,
    "multi": false,
    "explanation": "Use AWS Local Zones to deploy workloads closer to your end-users for low-latency requirements. AWS Local Zones have their own connection to the internet and support AWS Direct Connect, so resources created in the Local Zone can serve local end-users with very low-latency communications.nation Reference: https://aws.amazon.com/about-aws/global-infrastructure/localzones/faqs/"
  },
  {
    "id": 153,
    "domain": 1,
    "question": "Which of the following deployment models enables customers to fully trade their capital IT expenses for operational expenses?",
    "options": [
      "On-premises",
      "Hybrid",
      "Cloud",
      "Platform as a service"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "The cloud allows you to trade capital expenses (such as data centers and physical servers) for variable expenses, and only pay for IT as you consume it. Plus, the variable expenses are much lower than what you would pay to do it yourself because of the economies of scale. Reference: https://aws.amazon.com/what-is-cloud-computing/"
  },
  {
    "id": 154,
    "domain": 1,
    "question": "How is asset management on AWS easier than asset management in a physical data center?",
    "options": [
      "AWS provides a Configuration Management Database that users can maintain.",
      "AWS performs infrastructure discovery scans on the customera\u20ac\u2122s behalf.",
      "Amazon EC2 automatically generates an asset report and places it in the customer:\u20ac\u2122s specified Amazon S3 bucket.",
      "Users can gather asset metadata reliably with a few API calls."
    ],
    "correct": 1,
    "multi": false,
    "explanation": "AWS assets are centrally managed through an inventory management system that stores and tracks owner, location, status, maintenance, and descriptive information for AWS-owned assets. Following procurement, assets are scanned and tracked, and assets undergoing maintenance are checked and monitored for ownership, status, and resolution. Reference: https://aws.amazon.com/compliance/data-center/controls/"
  },
  {
    "id": 155,
    "domain": 3,
    "question": "What feature of Amazon RDS helps to create globally redundant databases?",
    "options": [
      "Snapshots",
      "Automatic patching and updating",
      "Cross-Region read replicas",
      "Provisioned IOPS"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/blogs/aws/cross-region-read-replicas-for-amazon-rds-for-mysql/"
  },
  {
    "id": 156,
    "domain": 2,
    "question": "Using AWS Identity and Access Management (IAM) to grant access only to the resources needed to perform a task is a concept known as:",
    "options": [
      "restricted access.",
      "as-needed access.",
      "least privilege access.",
      "token access."
    ],
    "correct": 2,
    "multi": false,
    "explanation": "When you create IAM policies, follow the standard security advice of granting least privilege, or granting only the permissions required to perform a task. Determine what users (and roles) need to do and then craft policies that allow them to perform only those tasks. Reference: https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html"
  },
  {
    "id": 157,
    "domain": 4,
    "question": "Which methods can be used to identify AWS costs by departments? (Choose two.)",
    "options": [
      "Enable multi-factor authentication for the AWS account root user.",
      "Create separate accounts for each department.",
      "Use Reserved Instances whenever possible.",
      "Use tags to associate each instance with a particular department.",
      "Pay bills using purchase orders."
    ],
    "correct": [
      1,
      3
    ],
    "multi": true,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 158,
    "domain": 2,
    "question": "Under the AWS shared responsibility model, customer responsibilities include which one of the following?",
    "options": [
      "Securing the hardware, software, facilities, and networks that run all products and services.",
      "Providing certificates, reports, and other documentation directly to AWS customers under NDA.",
      "Configuring the operating system, network, and firewall.",
      "Obtaining industry certifications and independent third-party attestations."
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Reference: https://aws.amazon.com/compliance/shared-responsibility-model/"
  },
  {
    "id": 159,
    "domain": 2,
    "question": "Which managed AWS service provides real-time guidance on AWS security best practices?",
    "options": [
      "AWS X-Ray",
      "AWS Trusted Advisor",
      "Amazon CloudWatch",
      "AWS Systems Manager"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "AWS offers premium services such as AWS Trusted Advisor, which provides real-time guidance to help you reduce cost, increase performance, and improve security. Reference: https://www.ibm.com/downloads/cas/2N40X4PQ"
  },
  {
    "id": 160,
    "domain": 3,
    "question": "Which feature adds elasticity to Amazon EC2 instances to handle the changing demand for workloads?",
    "options": [
      "Resource groups",
      "Lifecycle policies",
      "Application Load Balancer",
      "Amazon EC2 Auto Scaling"
    ],
    "correct": 3,
    "multi": false,
    "explanation": "Support for monitoring the health of each service independently, as health checks are defined at the target group level and many CloudWatch metrics are reported at the target group level. Attaching a target group to an Auto Scaling group enables you to scale each service dynamically based on demand. Reference: https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html"
  },
  {
    "id": 161,
    "domain": 2,
    "question": "Under the AWS shared responsibility model, customers are responsible for which aspects of security in the cloud? (Choose two.)",
    "options": [
      "Virtualization Management",
      "Hardware management",
      "Encryption management",
      "Facilities management",
      "Firewall management"
    ],
    "correct": [
      2,
      4
    ],
    "multi": true,
    "explanation": "With the basic Cloud infrastructure secured and maintained by AWS, the responsibility for what goes into the cloud falls on you. This covers both client and server side encryption and network traffic protection, security of the operating system, network, and firewall configuration, followed by application security and identity and access management. Firewall configuration remains the responsibility of the end user, which integrates at the platform and application management level. For example, RDS utilizes security groups, which you would be responsible for configuring and implementing. Reference: https://cloudacademy.com/blog/aws-shared-responsibility-model-security/"
  },
  {
    "id": 162,
    "domain": 3,
    "question": "Which AWS hybrid storage service enables your on-premises applications to seamlessly use AWS Cloud storage through standard file-storage protocols?",
    "options": [
      "AWS Direct Connect",
      "AWS Snowball",
      "AWS Storage Gateway",
      "AWS Snowball Edge"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "The AWS Storage Gateway service enables hybrid cloud storage between on-premises environments and the AWS Cloud. It seamlessly integrates on-premises enterprise applications and workflows with Amazonx\u20ac\u2122s block and object cloud storage services through industry standard storage protocols. It provides low-latency performance by caching frequently accessed data on premises, while storing data securely and durably in Amazon cloud storage services. It provides an optimized data transfer mechanism and bandwidth management, which tolerates unreliable networks and minimizes the amount of data being transferred. It brings the security, manageability, durability, and scalability of AWS to existing enterprise environments through native integration with AWS encryption, identity management, monitoring, and storage services. Typical use cases include backup and archiving, disaster recovery, moving data to S3 for in-cloud workloads, and tiered storage. Reference: https://aws.amazon.com/storagegateway/faqs/"
  },
  {
    "id": 163,
    "domain": 2,
    "question": "What is a responsibility of AWS in the shared responsibility model?",
    "options": [
      "Updating the network ACLs to block traffic to vulnerable ports.",
      "Patching operating systems running on Amazon EC2 instances.",
      "Updating the firmware on the underlying EC2 hosts.",
      "Updating the security group rules to block traffic to the vulnerable ports."
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Refer to AWS documentation."
  }
];

export { allQuestions };