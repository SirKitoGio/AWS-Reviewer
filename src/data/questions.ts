import { Question } from './types';
export const allQuestions: Question[] = [
  {
    "id": "new1-1",
    "domain": 1,
    "question": "Which of the following is a correct relationship between Regions, Availability Zones, and edge locations?",
    "options": [
      "Regions contain Availability Zones.",
      "Availability Zones contain Regions.",
      "Edge locations contain Availability Zones.",
      "Regions contain edge locations."
    ],
    "correct": 0,
    "multi": false,
    "explanation": "Regions are large geographic areas containing 2 or more AZs. Edge locations are independent caching endpoints for CloudFront, not nested within AZs."
  },
  {
    "id": "new1-2",
    "domain": 1,
    "question": "Which AWS characteristics make AWS cost-effective for a workload with dynamic user demand? (Choose two.)",
    "options": [
      "High Availability",
      "Elasticity",
      "Pay-as-you-go pricing",
      "Global Reach",
      "Shared Responsibility"
    ],
    "correct": [
      1,
      2
    ],
    "multi": true,
    "explanation": "Elasticity ensures you only provision what you need at the exact moment you need it. Pay-as-you-go ensures you only pay for that precise capacity."
  },
  {
    "id": "new1-3",
    "domain": 1,
    "question": "Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?",
    "options": [
      "Loose Coupling",
      "Design for failure",
      "Agility",
      "Economies of scale"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Placing resources in multiple AZs assumes that hardware will eventually fail, and builds architecture that routes around that failure automatically."
  },
  {
    "id": "new1-4",
    "domain": 1,
    "question": "What is an example of agility in the AWS Cloud?",
    "options": [
      "Access to the lowest possible pricing.",
      "Using multiple Availability Zones for an application.",
      "Decreased acquisition time for new compute resources.",
      "Automated scaling of resources based on CPU."
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Moving from a weeks-long hardware procurement process to launching a virtual server in two minutes highlights operational agility."
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
      "Amazon S 3",
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
    "id": 38,
    "domain": 1,
    "question": "One of the advantages to moving infrastructure from an on-premises data center to the AWS Cloud is:",
    "options": [
      "it allows the business to eliminate IT bills.",
      "it allows the business to put a server in each customer:€™s data center.",
      "it allows the business to focus on business activities.",
      "it allows the business to leave servers unpatched."
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Refer to AWS documentation."
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
    "question": "Which feature of the AWS Cloud will support an international company:€™s requirement for low latency to all of its customers?",
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
    "question": "A customer is deploying a new application and needs to choose an AWS Region. Which of the following factors could influence the customera€™s decision? (Choose two.)",
    "options": [
      "Reduced latency to users",
      "The applications€™s presentation in the local language",
      "Data sovereignty compliance",
      "Cooling costs in hotter climates",
      "Proximity to the customerx€™s office for on-site visits"
    ],
    "correct": [
      0,
      2
    ],
    "multi": true,
    "explanation": "Refer to AWS documentation."
  },
  {
    "id": 56,
    "domain": 1,
    "question": "A company is looking for a scalable data warehouse solution. Which of the following AWS solutions would meet the company:€™s needs?",
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
    "question": "The AWS Cloud:€™s multiple Regions are an example of:",
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
    "explanation": "Cloud services main proposition is to provide elasticity through horizontal scaling. Itx€™s already there. As for using largest instance possible, it is not a design principle that helps cloud applications in anyway. Scrum development process is not related to architecting. Therefore, a key principle is to provision your application for on-demand capacity . Peak loads is something that cloud applications experience everyday. Peak load management should be a necessary part of cloud applciaton design principle. Reference: https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf"
  },
  {
    "id": 73,
    "domain": 1,
    "question": "Which AWS service provides alerts when an AWS event may impact a companyx€™s AWS resources?",
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
    "explanation": "Amazon CloudWatch is basically a metrics repository. An AWS service €\" such as Amazon EC2 €\" puts metrics into the repository, and you retrieve statistics based on those metrics. If you put your own custom metrics into the repository, you can retrieve statistics on these metrics as well. Reference: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_architecture.html"
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
    "explanation": "use the consolidated billing feature in AWS Organizations to consolidate billing and payment for multiple AWS accounts or multiple Amazon Internet Services Pvt. Ltd (AISPL) accounts. Every organization in AWS Organizations has a master account that pays the charges of all the member accounts. Consolidated billing has the following benefits: One bill - You get one bill for multiple accounts. Easy tracking €\" You can track the charges across multiple accounts and download the combined cost and usage data. Combined usage €\" You can combine the usage across all accounts in the organization to share the volume pricing discounts and Reserved Instance discounts. This can result in a lower charge for your project, department, or company than with individual standalone accounts. For more information, see Volume Discounts. No extra fee \"Consolidated billing is offered at no additional cost."
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
    "id": 88,
    "domain": 1,
    "question": "Which AWS service provides a customized view of the health of specific AWS services that power a customer:€™s workloads running on AWS?",
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
    "id": 90,
    "domain": 1,
    "question": "Which of the following steps should be taken by a customer when conducting penetration testing on AWS?",
    "options": [
      "Conduct penetration testing using Amazon Inspector, and then notify AWS support.",
      "Request and wait for approval from the customera€™s internal security team, and then conduct testing.",
      "Notify AWS support, and then conduct testing immediately.",
      "Request and wait for approval from AWS support, and then conduct testing."
    ],
    "correct": 3,
    "multi": false,
    "explanation": "AWS customers are welcome to carry out security assessments or penetration tests against their AWS infrastructure without prior approval for 8 services. Reference: https://aws.amazon.com/security/penetration-testing/"
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
    "id": 114,
    "domain": 1,
    "question": "How do customers benefit from Amazonas massive economies of scale?",
    "options": [
      "Periodic price reductions as the result of Amazon:€™s operational efficiencies",
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
    "explanation": "This is to achieve High Availability for any web application (in this case SwiftCode) deployed in AWS. The following features will be present: High availability across multiple instances/multiple availability zones. → Auto Scaling of instances (scale up and scale down) based on number of requests coming in Additional Security to the instances/database that are in production No impact to end users during newer version of code deployment No Impact during patching the instances Reference: https://betsol.com/2018/01/how-to-make-high-availability-web-applications-on-amazon-web-services/"
  },
  {
    "id": 121,
    "domain": 1,
    "question": "How does AWS shorten the time to provision IT resources?",
    "options": [
      "It supplies an online IT ticketing platform for resource requests.",
      "It supports automatic code validation services.",
      "It provides the ability to programmatically provision existing resources.",
      "It automates the resource request process from a company:€™s IT vendor list."
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
    "explanation": "In EC2, the AWS laas offering, everything from the hypervisor layer down is AWSx€™s responsibility. A customer:€™s poorly coded applications, misconfigured operating systems, or insecure firewall settings will not affect the hypervisor, it will only affect the customera€™s virtual machines running on that hypervisor. Reference: https://www.mindpointgroup.com/blog/the-aws-shared-responsibility-model-part-1-security-in-the-cloud/"
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
    "explanation": "AWS provides a set of fully managed services that you can use to build and run serverless applications. Serverless applications dona€™t require provisioning, maintaining, and administering servers for backend components such as compute, databases, storage, stream processing, message queueing, and more. You also no longer need to worry about ensuring application fault tolerance and availability. Instead, AWS handles all of these capabilities for you. Serverless platform includes: AWS lambda, Amazon S3, DynamoDB, API gateway, Amazon SNS, AWS step functions, Amazon kinesis and developing tools and services. Reference: https://aws.amazon.com/serverless/"
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
    "explanation": "AWS provides a set of fully managed services that you can use to build and run serverless applications. Serverless applications dona€™t require provisioning, maintaining, and administering servers for backend components such as compute, databases, storage, stream processing, message queueing, and more. You also no longer need to worry about ensuring application fault tolerance and availability. Instead, AWS handles all of these capabilities for you. Serverless platforms include AWS lambda, Amazon S3, DynamoDB, API Gateway, Amazon SNS, AWS Step Functions, Amazon Kinesis, and developing tools and services. Reference: https://aws.amazon.com/serverless/"
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
    "explanation": "Backup and Restore: a simple, straightforward, cost-effective method that backs up and restores data as needed. Keep in mind that because none of your data is on standby, this method, while cheap, can be quite time-consuming. Pilot Light: This method keeps critical applications and data at the ready so that it can be quickly retrieved if needed. Warm Standby: This method keeps a duplicate version of your businessa€™ core elements running on standby at all times, which makes for a little downtime and an almost seamless transition. Multi-Site Solution: Also known as a Hot Standby, this method fully replicates your companya€™s data/applications between two or more active locations and splits your traffic/usage bed.can them. IP a disaster strikes, everything is simply rucated to the unaffected area, which means youxt \"Il suffer almost zero downtime. However, by running two separate environments simultaneously, you will obviously incur much higher costs. Reference: https://cloudranger.com/best-practices-aws-disaster-recovery-planning/"
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
      "AWS performs infrastructure discovery scans on the customera€™s behalf.",
      "Amazon EC2 automatically generates an asset report and places it in the customer:€™s specified Amazon S3 bucket.",
      "Users can gather asset metadata reliably with a few API calls."
    ],
    "correct": 1,
    "multi": false,
    "explanation": "AWS assets are centrally managed through an inventory management system that stores and tracks owner, location, status, maintenance, and descriptive information for AWS-owned assets. Following procurement, assets are scanned and tracked, and assets undergoing maintenance are checked and monitored for ownership, status, and resolution. Reference: https://aws.amazon.com/compliance/data-center/controls/"
  },
  {
    "id": "new2-1",
    "domain": 2,
    "question": "Under the shared responsibility model, which of the following is the customer responsible for?",
    "options": [
      "Updating Amazon EC2 host firmware.",
      "Ensuring that data is encrypted at rest.",
      "Securing the underlying infrastructure of RDS.",
      "Managing physical security of data centers."
    ],
    "correct": 1,
    "multi": false,
    "explanation": "AWS provides the tools (like KMS), but configuring and enforcing encryption of customer data is strictly the customer's responsibility."
  },
  {
    "id": "new2-2",
    "domain": 2,
    "question": "Which task is AWS solely responsible for under the shared responsibility model?",
    "options": [
      "Updating Amazon EC2 host firmware.",
      "Managing IAM user permissions.",
      "Patching the guest operating system on EC2.",
      "Configuring security groups in a VPC."
    ],
    "correct": 0,
    "multi": false,
    "explanation": "Firmware lives on the physical hardware beneath the virtualization layer. Customers have no access to this layer."
  },
  {
    "id": "new2-3",
    "domain": 2,
    "question": "Where are AWS compliance documents such as SOC 1 reports located?",
    "options": [
      "AWS Trusted Advisor",
      "AWS Config",
      "AWS Artifact",
      "Amazon CloudWatch"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Artifact is the central repository for downloading compliance agreements and audit documents."
  },
  {
    "id": "new2-4",
    "domain": 2,
    "question": "Which of the following security measures protect access to an AWS account? (Choose two.)",
    "options": [
      "Grant least privilege access to IAM users",
      "Sharing Root user credentials with IT staff",
      "Activate MFA for privileged users",
      "Enabling public access to all S3 buckets",
      "Using the same password for all IAM users"
    ],
    "correct": [
      0,
      2
    ],
    "multi": true,
    "explanation": "Least privilege and MFA are core IAM best practices for account security."
  },
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
    "question": "Under the AWS shared responsibility model, which of the following activities are the customera€™s responsibility? (Choose two.)",
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
    "id": 47,
    "domain": 2,
    "question": "Which of the following is the customera€™s responsibility under the AWS shared responsibility model?",
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
    "explanation": "AWS Artifact is your go-to, central resource for compliance-related information that matters to you. It provides on-demand access to AWS:€™s security and compliance reports and select online agreements. The AWS SOC 2 report is particularly helpful for completing questionnaires because it provides a comprehensive description of the implementation and operating effectiveness of AWS security controls. Another useful document is the Executive Briefing within the AWS FedRAMP Partner Package. Reference: https://aws.amazon.com/compliance/faq/"
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
    "explanation": "AWS Artifact is your go-to, central resource for compliance-related information that matters to you. It provides on-demand access to AWSx€™ security and compliance reports and select online agreements. Reports available in AWS Artifact include our Service Organization Control (SOC) reports, Payment Card Industry (PCI) reports, and certifications from accreditation bodies across geographies and compliance verticals that validate the implementation and operating effectiveness of AWS security controls. Agreements available in AWS Artifact include the Business Associate Addendum (BAA) and the Nondisclosure Agreement (NDA). Reference: https://aws.amazon.com/artifact/"
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
    "explanation": "AWS Artifact is your go-to, central resource for compliance-related information that matters to you. It provides on-demand access to AWSx€™ security and compliance reports and select online agreements. Reports available in AWS Artifact include our Service Organization Control (SOC) reports, Payment Card Industry (PCI) reports, and certifications from accreditation bodies across geographies and compliance verticals that validate the implementation and operating effectiveness of AWS security controls. Agreements available in AWS Artifact include the Business Associate Addendum (BAA) and the Nondisclosure Agreement (NDA). Reference: https://aws.amazon.com/artifact/"
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
    "explanation": "AWS Security Groups act like a firewall for your Amazon EC2 instances controlling both inbound and outbound traffic. When you launch an instance on Amazon EC2, you need to assign it to a particular security group. After that, you can set up ports and protocols, which remain open for users and computers over the internet. AWS Security Groups are very flexible. You can use the default security group and still customize it according to your liking (although we dona€™t recommend this practice because groups should be named according to their purpose.) Or you can create a security group that you want for your specific applications. To do this, you can write the corresponding code or use the Amazon EC2 console to make the process easier. Reference: https://www.threatstack.com/blog/aws-security-groups-what-they-are-and-how-to-get-the-most-out-of-them"
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
  },
  {
    "id": "new3-1",
    "domain": 3,
    "question": "Which service stores objects, provides real-time access, and offers versioning and lifecycle capabilities?",
    "options": [
      "Amazon EBS",
      "Amazon S3",
      "Amazon EFS",
      "Amazon Glacier"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "S3 is an object storage service supporting versioning and lifecycle rules (moving older data to cheaper storage classes)."
  },
  {
    "id": "new3-2",
    "domain": 3,
    "question": "A company wants to reduce the physical compute footprint that developers use to run code. Which service enables serverless architectures?",
    "options": [
      "Amazon EC2",
      "AWS Lambda",
      "Amazon ECS",
      "AWS OpsWorks"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Lambda requires zero server management or provisioning. You upload the code and AWS executes it."
  },
  {
    "id": "new3-3",
    "domain": 3,
    "question": "A company needs a scalable data warehouse solution. Which AWS service meets this need?",
    "options": [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon Aurora"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Redshift is AWS's petabyte-scale data warehouse service optimized for complex analytical queries (OLAP)."
  },
  {
    "id": "new3-4",
    "domain": 3,
    "question": "Which service provides a hybrid storage service enabling on-premises apps to use cloud storage seamlessly?",
    "options": [
      "AWS Direct Connect",
      "AWS Storage Gateway",
      "Amazon Route 53",
      "AWS Snowball"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Storage Gateway connects an on-premises software appliance with cloud-based storage to provide seamless integration."
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
    "explanation": "To use Amazon EC2, you simply: Select a pre-configured, templated Amazon Machine Image (AMI) to get up and running immediately. Or create an AMI containing your applications, libraries, data, and associated configuration settings. → Configure security and network access on your Amazon EC2 instance. Choose which instance type(s) you want, then start, terminate, and monitor as many instances of your AMI as needed, using the web service APIs or the variety of management tools provided. → Determine whether you want to run in multiple locations, utilize static IP endpoints, or attach persistent block storage to your instances. Pay only for the resources that you actually consume. like instance-hours or data transfer. Reference: https://aws.amazon.com/ec2/features/"
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
    "explanation": "AWS Auto Scaling monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost. Using AWS Auto Scaling, ita€™s easy to setup application scaling for multiple resources across multiple services in minutes. The service provides a simple, powerful user interface that lets you build scaling plans for resources including Amazon EC2 instances and Spot Fleets, Amazon ECS tasks, Amazon DynamoDB tables and indexes, and Amazon Aurora Replicas. AWS Auto Scaling makes scaling simple with recommendations that allow you to optimize performance, costs, or balance between them. If youx€™re already using Amazon EC2 Auto Scaling to dynamically scale your Amazon EC2 instances, you can now combine it with AWS Auto Scaling to scale additional resources for other AWS services. With AWS Auto Scaling, your applications always have the right resources at the right time. Reference: https://aws.amazon.com/autoscaling/"
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
    "id": 117,
    "domain": 3,
    "question": "In which scenario should Amazon EC2 Spot Instances be used?",
    "options": [
      "A company wants to move its main website to AWS from an on-premises web server.",
      "A company has a number of application services whose Service Level Agreement (SLA) requires 99.999% uptime.",
      "A company:€™s heavily used legacy database is currently running on-premises.",
      "A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances."
    ],
    "correct": 3,
    "multi": false,
    "explanation": "Reference: https://docs.aws.amazon.com/whitepapers/latest/cost-optimization-leveraging-ec2-spot-instances/spot-instance-interruptions.html"
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
    "id": 146,
    "domain": 3,
    "question": "How does AWS charge for AWS Lambda? Users bid on the maximum price they are willing to pay per hour. Users choose a 1-3 or 5 year upfront payment term. Users pay for the required permanent storage on a file system or in a database. Users pay based on the number of requests and consumed compute resources.",
    "options": [],
    "correct": 3,
    "multi": false,
    "explanation": "AWS Lambda is charging its users by the number of requests for their functions and by the duration, which is the time the code needs to execute. When code starts running in response to an event, AWS Lambda counts a request. It will charge the total number of requests across all of the functions used. Duration is calculated by the time when your code started executing until it returns or until it is terminated, rounded up near to 100ms. The AWS Lambda pricing depends on the amount of memory that the user used to allocate to the function. Reference: https://dashbird.io/blog/aws-lambda-pricing-model-explained/"
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
    "explanation": "The AWS Storage Gateway service enables hybrid cloud storage between on-premises environments and the AWS Cloud. It seamlessly integrates on-premises enterprise applications and workflows with Amazonx€™s block and object cloud storage services through industry standard storage protocols. It provides low-latency performance by caching frequently accessed data on premises, while storing data securely and durably in Amazon cloud storage services. It provides an optimized data transfer mechanism and bandwidth management, which tolerates unreliable networks and minimizes the amount of data being transferred. It brings the security, manageability, durability, and scalability of AWS to existing enterprise environments through native integration with AWS encryption, identity management, monitoring, and storage services. Typical use cases include backup and archiving, disaster recovery, moving data to S3 for in-cloud workloads, and tiered storage. Reference: https://aws.amazon.com/storagegateway/faqs/"
  },
  {
    "id": "new4-1",
    "domain": 4,
    "question": "The use of which AWS feature allows companies to track and categorize spending on a detailed level?",
    "options": [
      "AWS Budgets",
      "Cost allocation tags",
      "Consolidated billing",
      "AWS Marketplace"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "By applying a tag (e.g., Environment=Production, Department=Marketing) to resources, you can filter your AWS bill."
  },
  {
    "id": "new4-2",
    "domain": 4,
    "question": "Which of the following Reserved Instance pricing models provides the highest average savings vs On-Demand?",
    "options": [
      "One-year, No Upfront",
      "One-year, All Upfront",
      "Three-year, No Upfront",
      "Three-year, All Upfront"
    ],
    "correct": 3,
    "multi": false,
    "explanation": "The longest commitment time combined with paying the entire amount upfront yields the maximum possible discount."
  },
  {
    "id": "new4-3",
    "domain": 4,
    "question": "Which of the following are advantages of AWS consolidated billing? (Choose two.)",
    "options": [
      "Receive one bill for multiple accounts",
      "Potential volume discounts as usage is combined",
      "Automatic right-sizing of EC2 instances",
      "Free access to Enterprise Support",
      "Unlimited usage of the AWS Free Tier"
    ],
    "correct": [
      0,
      1
    ],
    "multi": true,
    "explanation": "Consolidated billing provides one bill and allows for volume discounts across all accounts in the organization."
  },
  {
    "id": "new4-4",
    "domain": 4,
    "question": "Which is the minimum AWS Support plan that allows for one-hour target response time for support cases?",
    "options": [
      "Developer",
      "Business",
      "Enterprise On-Ramp",
      "Enterprise"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Business support introduces the 1-hour SLA for production system impairments."
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
      "The automatic extension of the master accounta€™s AWS support plan to all accounts"
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
    "question": "Which AWS feature will reduce the customera€™s total cost of ownership (TCO)?",
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
    "domain": 0,
    "question": "A company wants to move its on-premises application to AWS. The application requires a stable, predictable amount of compute capacity and will run continuously for the next three years. Which EC2 purchasing option will provide the LOWEST cost for this use case?",
    "options": [
      "On-Demand Instances",
      "Spot Instances",
      "Reserved Instances",
      "Dedicated Hosts"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "C (Reserved Instances) When a workload is steady-state and will run for 1–3 years, Reserved Instances (or Savings Plans) offer up to 72% savings over On-Demand. The commitment aligns with the known usage pattern. • A — On-Demand: No discount. Pays full price. Correct for unpredictable or short-term workloads, but not optimal here. • B — Spot Instances: Cheapest option, but can be interrupted with 2 minutes’ notice. Unsuitable for a continuous production application requiring stability. • D — Dedicated Hosts: Most expensive option. Only necessary for compli- ance/licensing requirements. Not a cost-saving option for standard workloads."
  },
  {
    "domain": 0,
    "question": "Under the AWS Shared Responsibility Model, which of the following is the responsi- bility of the customer?",
    "options": [
      "Patching the hypervisor on EC2 hosts",
      "Physical security of AWS data centres",
      "Patching the operating system on Amazon EC2 instances",
      "Replacing failed hard drives in AWS storage arrays"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "C (Patching the OS on EC2) EC2 is an IaaS service. The Shared Responsibility Model makes the customer responsible for everything above the hypervisor layer, including the OS. • A — Patching the hypervisor: AWS responsibility. Customers never access the hypervisor. • B — Physical data centre security: AWS responsibility. Customers have no physical access. 79AWS CLF-C02 Study Guide CHAPTER 8\\. ANSWER KEY AND EXPLANATIONS • D — Replacing hardware: AWS responsibility. Customers never touch physical hardware."
  },
  {
    "domain": 0,
    "question": "A solutions architect needs to ensure that an application is highly available. The application runs on Amazon EC2. Which action best supports this requirement?",
    "options": [
      "Deploy the EC2 instances across multiple Availability Zones",
      "Deploy the EC2 instances in a single, large instance type",
      "Deploy the EC2 instances in a single Region with multiple security groups",
      "Use Amazon S3 instead of EC2 for compute"
    ],
    "correct": 0,
    "multi": false,
    "explanation": "A (Deploy across multiple AZs) High availability means eliminating single points of failure. By distributing instances across AZs (which have independent power, cooling, and networking), a failure in one AZ does not bring down the application. • B — Single large instance: Creates a single point of failure. Makes the failure worse (bigger blast radius). • C — Multiple security groups: Security groups control traffic — they have nothing to do with availability. • D — Use S3: S3 is object storage, not a compute service. Cannot “replace” EC2 for running applications."
  },
  {
    "domain": 0,
    "question": "A company needs to run batch processing jobs that can be interrupted and restarted without data loss. Which EC2 purchasing option offers the greatest cost savings for this workload?",
    "options": [
      "Reserved Instances",
      "On-Demand Instances",
      "Spot Instances",
      "Dedicated Instances"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "C (Spot Instances) Spot Instances offer up to 90% savings but can be interrupted. Batch jobs that can be interrupted and restarted (checkpointed) are the canonical Spot Instance use case. • A — Reserved Instances: Lower discount (up to 72%) and require a 1–3 year commitment. Best for steady-state, not batch jobs. • B — On-Demand: Full price. No benefit over Spot for this use case. • D — Dedicated Instances: Expensive single-tenant option. Not related to cost optimisation for batch workloads."
  },
  {
    "domain": 0,
    "question": "Which AWS service is used to detect threats and suspicious activity in an AWS account by analysing CloudTrail, VPC Flow Logs, and DNS logs?",
    "options": [
      "AWS WAF",
      "Amazon GuardDuty",
      "Amazon Inspector",
      "AWS Shield"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "B (Amazon GuardDuty) GuardDuty is the threat detection service that analyses CloudTrail, VPC Flow Logs, and DNS logs using machine learning to detect threats like compromised credentials or unusual API activity. • A — AWS WAF: Protects web applications from Layer 7 attacks (SQL injection, XSS). Does not analyse account-level logs. • C — Amazon Inspector: Scans EC2 instances for vulnerabilities (CVEs, misconfigurations), not account-level threats. 80AWS CLF-C02 Study Guide CHAPTER 8\\. ANSWER KEY AND EXPLANATIONS • D — AWS Shield: Protects against DDoS attacks. Does not analyse logs for threat detection."
  },
  {
    "domain": 0,
    "question": "A company is building a global application and wants to reduce latency by serving content from locations closest to users worldwide. Which AWS service should they use?",
    "options": [
      "Amazon Route 53",
      "AWS Direct Connect",
      "Amazon CloudFront",
      "AWS Global Accelerator"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "C (Amazon CloudFront) CloudFront is a CDN that caches content at 400+ global edge locations, serving it from the location closest to the user to minimise latency. • A — Amazon Route 53: A DNS service. It can route traffic geographically but does not cache and serve content. • B — AWS Direct Connect: A private network connection from on-premises to AWS. Does not help with global content distribution to end users. • D — AWS Global Accelerator: Routes traffic through AWS’s backbone network but does not cache content. Best for dynamic, non-cacheable traffic."
  },
  {
    "domain": 0,
    "question": "Which pillar of the AWS Well-Architected Framework focuses on the ability to run and monitor systems to deliver business value and continually improve processes?",
    "options": [
      "Reliability",
      "Security",
      "Operational Excellence",
      "Performance Efficiency"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "C (Operational Excellence) The Operational Excellence pillar explicitly focuses on running and monitoring systems to deliver business value and continually improving processes, procedures, and team culture. • A — Reliability: Focuses on a workload’s ability to recover from failures and meet demand. • B — Security: Focuses on protecting information and systems. • D — Performance Efficiency: Focuses on using computing resources effi- ciently for the workload’s requirements."
  },
  {
    "domain": 0,
    "question": "A company wants to set up an alert that notifies the finance team when their AWS monthly spend reaches 80% of a defined threshold. Which AWS service should they use?",
    "options": [
      "AWS Cost Explorer",
      "AWS Pricing Calculator",
      "AWS Budgets",
      "Amazon CloudWatch"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "C (AWS Budgets) AWS Budgets is specifically designed to set cost thresholds and send alerts when actual or forecasted spending approaches or exceeds those thresholds. • A — AWS Cost Explorer: Used to analyse and visualisehistorical spending. Does not send threshold alerts. • B — AWS Pricing Calculator: For estimating costs before deployment. Not for monitoring live spending. • D — Amazon CloudWatch: Monitors operational metrics (CPU, memory, error rates). Can create alarms but is not primarily a billing alert tool (though 81AWS CLF-C02 Study Guide CHAPTER 8\\. ANSWER KEY AND EXPLANATIONS billing alarms via CloudWatch are possible, Budgets is the dedicated and more feature-rich solution)."
  },
  {
    "domain": 0,
    "question": "A developer needs to store database credentials securely and have them automati- cally rotated every 30 days. Which AWS service is the BEST fit?",
    "options": [
      "AWS Systems Manager Parameter Store",
      "AWS Secrets Manager",
      "AWS KMS",
      "Amazon S3 with server-side encryption"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "B (AWS Secrets Manager) Secrets Manager is designed specifically for storing secrets (passwords, API keys) and, critically, supports automatic rotation — it can rotate database credentials automatically on a defined schedule. • A — Parameter Store: Can store secrets but does not natively support automatic rotation. Lower cost but less feature-rich. • C — AWS KMS: Manages encryption keys, not application secrets. It is used by Secrets Manager to encrypt the stored secrets. • D — S3 with encryption: Object storage. Not appropriate for secret manage- ment."
  },
  {
    "domain": 0,
    "question": "A company is running a web application on Amazon EC2. They want to protect it from SQL injection and cross-site scripting (XSS) attacks. Which AWS service should they use?",
    "options": [
      "AWS Shield Advanced",
      "Amazon GuardDuty",
      "AWS WAF",
      "Amazon Inspector"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "C (AWS WAF) AWS WAF (Web Application Firewall) is specifically designed to protect web appli- cations from Layer 7 attacks including SQL injection and XSS. • A — AWS Shield Advanced: Protects against DDoS at Layers 3/4 (volumetric attacks). Does not inspect application-layer traffic for SQL injection. • B — Amazon GuardDuty: Detects threats in account logs. Does not inspect HTTP requests to web applications. 82AWS CLF-C02 Study Guide CHAPTER 8\\. ANSWER KEY AND EXPLANATIONS • D — Amazon Inspector: Scans for vulnerabilities in EC2 configurations and software. Does not act as a firewall to block incoming requests."
  },
  {
    "domain": 0,
    "question": "Which AWS feature allows companies to see a single consolidated bill for all AWS accounts in their organisation?",
    "options": [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Organizations (Consolidated Billing)",
      "AWS Billing Conductor"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "C (AWS Organizations) AWS Organizations enables consolidated billing, where all member accounts’ charges roll up to a single monthly bill paid by the management account. It also enables volume discount pooling and RI/SP sharing. • A — Cost Explorer: Analyses costs but does not create a consolidated bill. • B — Budgets: Sets spending alerts. Not a billing consolidation mechanism. • D — Billing Conductor: Allows customisation of how costs are presented to accounts (e.g., for internal charge-back). Not the mechanism for consolidated billing itself."
  },
  {
    "domain": 0,
    "question": "A startup with unpredictable workloads needs an AWS database solution that scales automatically, requires no infrastructure management, and charges only for the capacity used. Which service BEST fits this requirement?",
    "options": [
      "Amazon RDS with Multi-AZ",
      "MySQL running on Amazon EC2",
      "Amazon DynamoDB",
      "Amazon Aurora with provisioned capacity"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "C (Amazon DynamoDB) DynamoDBisfullymanaged(noservermanagement), serverless(nocapacityplanning required — it scales automatically), and charges based on actual throughput and storage used. Perfect for unpredictable, variable workloads. • A — RDS with Multi-AZ: Managed but requires selecting instance types and pre-provisioned capacity. Not serverless. • B — MySQL on EC2: Fully unmanaged. The customer handles everything. • D — Aurora with provisioned capacity: Still requires provisioning. Aurora Serverless v2 would be closer, but “provisioned capacity” Aurora requires pre- planning."
  },
  {
    "domain": 0,
    "question": "An enterprise needs a dedicated physical connection from its data centre to AWS, providing consistent bandwidth and low latency, without traversing the public internet. Which AWS service meets this requirement?",
    "options": [
      "AWS VPN",
      "Amazon CloudFront",
      "AWS Direct Connect",
      "AWS Global Accelerator"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "C (AWS Direct Connect) Direct Connect provides a dedicated, private physical connection between a data centre and AWS, bypassing the public internet. It offers consistent bandwidth and low latency. • A — AWS VPN: Creates an encrypted tunnel over the public internet. Performance depends on internet quality — not consistent. • B — CloudFront: A CDN. Not a private connectivity solution. • D — Global Accelerator: Routes internet traffic over the AWS backbone. Still 83AWS CLF-C02 Study Guide CHAPTER 8\\. ANSWER KEY AND EXPLANATIONS uses the public internet for the “first mile”. Not a private dedicated connection."
  },
  {
    "domain": 0,
    "question": "Which of the following tasks can only be performed by the AWS account root user?",
    "options": [
      "Creating IAM users",
      "Launching an Amazon EC2 instance",
      "Closing (deleting) the AWS account",
      "Creating an S3 bucket"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "C (Closing the AWS ac- count) Closing an AWS account can only be performed by the root user. This is a root-only task because of its irreversible, account-wide impact. • A—CreatingIAMusers: CanbedonebyanyIAMuserwithiam:CreateUser permission. • B — Launching EC2: Can be done by any IAM user with ec2:RunInstances permission. • D—CreatingS3bucket: CanbedonebyanyIAMuserwiths3:CreateBucket permission."
  },
  {
    "domain": 0,
    "question": "A company wants to analyse clickstream data from its website in real time. Which AWS service is MOST appropriate?",
    "options": [
      "Amazon Redshift",
      "AWS Glue",
      "Amazon Kinesis",
      "Amazon Athena"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "C (Amazon Kinesis) Kinesis is AWS’s real-time data streaming service, designed for ingesting and pro- cessing large volumes of streaming data (like clickstream events) in real time. • A — Amazon Redshift: A data warehouse for batch analytics on historical data. Not real-time. • B — AWS Glue: An ETL service for batch data preparation. Not real-time streaming. • D — Amazon Athena: Queries data at rest in S3. Not a streaming solution."
  },
  {
    "domain": 0,
    "question": "Which AWS support plan provides a dedicated Technical Account Manager (TAM) and a 15-minute response time for business-critical system outages?",
    "options": [
      "Developer Support",
      "Business Support",
      "Enterprise On-Ramp Support",
      "Enterprise Support"
    ],
    "correct": 3,
    "multi": false,
    "explanation": "D (Enterprise Support) Enterprise Support is the only plan that includes a dedicated Technical Account Manager and a 15-minute response time for business-critical system outages. En- terprise On-Ramp has a pool of TAMs (not dedicated) and a 30-minute response. • A — Developer: No TAM, no 24/7 phone support, no SLA for production outages. • B — Business: No TAM, 1-hour response for business-critical. • C — Enterprise On-Ramp: Pooled TAMs (not dedicated), 30-minute response for business-critical. 84AWS CLF-C02 Study Guide CHAPTER 8\\. ANSWER KEY AND EXPLANATIONS"
  },
  {
    "domain": 0,
    "question": "A company stores infrequently accessed compliance data in Amazon S3. The data must be retained for 7 years, retrieved within hours if needed, and stored at the lowest possible cost. Which S3 storage class should they use?",
    "options": [
      "S3 Standard",
      "S3 Standard-IA",
      "S3 Glacier Deep Archive",
      "S3 One Zone-IA"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "C(S3GlacierDeepArchive) For data accessed rarely (compliance archival held for years) with retrieval times of hours acceptable, Glacier Deep Archive is the cheapest S3 storage class (significantly less per GB than other classes). Retrieval time is 12–48 hours. • A — S3 Standard: Most expensive. Designed for frequently accessed data. • B — Standard-IA: Cheaper than Standard but more expensive than Glacier. For infrequent access needing millisecond retrieval. • D — One Zone-IA: Cheaper, but stored in only one AZ — less durable. Compliance data should typically be stored in multi-AZ. Also not the cheapest overall."
  },
  {
    "domain": 0,
    "question": "According to the AWS Shared Responsibility Model, which of the following is AWS responsible for when a customer uses Amazon RDS?",
    "options": [
      "Encrypting data stored in the database",
      "Managing IAM access to the RDS instance",
      "Patching the relational database engine",
      "Creating database schemas and tables"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "C (Patching the database engine) Amazon RDS is a managed service. AWS is responsible for patching the underlying database engine (MySQL, PostgreSQL, etc.) including security patches and version updates. • A — Encrypting data: The customer decides whether to enable encryption and manages the encryption settings. • B — Managing IAM access: The customer manages who has IAM permis- sions to access the RDS service. • D — Creating schemas: The customer designs and creates the database schemas, tables, and queries."
  },
  {
    "domain": 0,
    "question": "A company has multiple EC2 instances that each need access to the same S3 bucket. Which is the BEST practice for granting this access?",
    "options": [
      "Embed IAM access keys in the application code on each instance",
      "Create one IAM user, share the credentials across all instances",
      "Attach an IAM role with appropriate S3 permissions to each EC2 instance",
      "Make the S3 bucket public so all instances can access it"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "C (IAM role attached to EC2) each EC2 instance. IAM roles for EC2 instances provide temporary, automatically rotated credentials to the instance via the Instance Metadata Service. This is the AWS best practice — no static credentials to manage or accidentally expose. • A — Embed access keys in code: A security anti-pattern. Keys can be accidentally exposed via source control, logs, etc. Never hardcode credentials. • B — Share credentials: Violates least privilege and auditability. You cannot 85AWS CLF-C02 Study Guide CHAPTER 8\\. ANSWER KEY AND EXPLANATIONS trace actions to individual instances. • D — Make S3 public: A major security vulnerability. Any internet user could access the bucket."
  },
  {
    "domain": 0,
    "question": "A company is running a stateless web application that experiences dramatically varying traffic throughout the day. Which combination of services BEST addresses cost optimisation and availability? (Select TWO)",
    "options": [
      "AWS Auto Scaling",
      "Elastic Load Balancing",
      "Amazon EC2 Dedicated Hosts",
      "Amazon S3 Glacier",
      "AWS CloudTrail"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "AWS Artifact is a self-service portal providing on-demand access to AWS compliance reports (SOC 1, SOC 2, PCI DSS, ISO 27001, FedRAMP, etc.) and AWS agreements (BAAs for HIPAA). • A — Trusted Advisor: Provides operational best practice recommendations. Does not provide compliance reports. • B — AWS Config: Records resource configurations and evaluates compliance against rules. Does not provide downloadable audit reports. • D — Security Hub: Aggregates security findings. Does not provide AWS compliance certifications."
  },
  {
    "domain": 0,
    "question": "Which of the following describes the principle of least privilege in AWS?",
    "options": [
      "Granting all users administrator access to reduce management complexity",
      "Providing users only the permissions needed to perform their specific job functions",
      "Restricting all users from accessing AWS until they pass a security exam",
      "Allowing AWS to decide which permissions each user receives"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "B (Minimum permissions for the job) their specific job functions. This is the textbook definition of the principle of least privilege: grant the minimum necessary permissions, and nothing more. • A: Granting everyone admin access is the opposite of least privilege. It is a major security risk. 86AWS CLF-C02 Study Guide CHAPTER 8\\. ANSWER KEY AND EXPLANATIONS • C: Restricting all users until they pass an exam is an organisational policy, not the least privilege principle. • D: AWS does not decide permissions. The account owner (customer) defines and manages all permissions via IAM."
  },
  {
    "domain": 0,
    "question": "A company wants to convert audio recordings of customer service calls into searchable text. Which AWS service should they use?",
    "options": [
      "Amazon Polly",
      "Amazon Translate",
      "Amazon Transcribe",
      "Amazon Comprehend"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "C (Amazon Transcribe) Transcribe is the speech-to-text service. It converts audio recordings into text, making them searchable and processable. • A — Amazon Polly: The opposite direction — converts text to speech. • B — Amazon Translate: Translates text between languages. Not audio. • D — Amazon Comprehend: Analyses text for sentiment, entities, and key phrases. Requires text input, not audio."
  },
  {
    "domain": 0,
    "question": "Which benefit of AWS Cloud computing allows a company to avoid purchasing excess capacity by dynamically adding or removing resources based on actual demand?",
    "options": [
      "High availability",
      "Elasticity",
      "Durability",
      "Fault tolerance"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "B (Elasticity) Elasticity is the ability to automatically scale resources both up and down based on real-time demand, eliminating the need to purchase and maintain excess capacity for peak loads. • A—Highavailability: Referstotheabilityofasystemtoremainoperational despite failures, not to scaling with demand. • C — Durability: Refers to data persistence (e.g., S3’s 11 nines durability). Not related to capacity scaling. • D—Faulttolerance: Theabilitytocontinueoperatingdespitecomponent failures. Related to availability, not dynamic capacity management."
  },
  {
    "domain": 0,
    "question": "A company runs a critical production database on Amazon RDS. They want to ensure the database remains available even if an Availability Zone fails. Which RDS feature should they enable?",
    "options": [
      "RDS Read Replicas across Regions",
      "RDS Multi-AZ deployment",
      "Amazon Aurora Serverless",
      "AWS Database Migration Service"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "B (RDS Multi-AZ) RDS Multi-AZ maintains a synchronous standby replica in a different Availability Zone. If the primary AZ fails, RDS automatically fails over to the standby with no manual intervention and minimal downtime. • A — Read Replicas across Regions: Read Replicas improve read performance but are not designed for automatic failover in the same way as Multi-AZ. They are asynchronous and primarily for read scaling. • C — Aurora Serverless: A serverless scaling option for Aurora, not primarily 87AWS CLF-C02 Study Guide CHAPTER 8\\. ANSWER KEY AND EXPLANATIONS a high availability feature for standard RDS. • D — AWS DMS: A migration service. Not a high availability feature."
  },
  {
    "domain": 0,
    "question": "Which AWS Cloud Adoption Framework (AWSCAF) benefit describes how moving to AWS can help reduce energy consumption and improve environmental sustainability reporting?",
    "options": [
      "Increased revenue",
      "Reduced business risk",
      "Improved ESG performance",
      "Increased operational efficiency"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "C (Improved ESG perfor- mance) performance. The AWS CAF identifies four key outcomes. Improved ESG performance specifically encompasses the environmental sustainability benefits of cloud adoption (lower energy consumption, AWS’s renewable energy commitments) that support a company’s ESG reporting and goals. • A — Increased revenue: A CAF benefit, but this relates to faster product launches and market responsiveness, not sustainability. • B — Reduced business risk: A CAF benefit, but relates to improved reliability and security posture. • D — Increased operational efficiency: A CAF benefit, but relates to eliminating undifferentiated heavy lifting and reducing operational costs."
  },
  {
    "domain": 0,
    "question": "A company needs to share a single set of files simultaneously with hundreds of Linux-based EC2 instances in the same Region. Which AWS storage service is MOST appropriate?",
    "options": [
      "Amazon EBS (Elastic Block Store)",
      "Amazon S3",
      "Amazon EFS (Elastic File System)",
      "AWS Storage Gateway"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "C (Amazon EFS) EFS provides a shared NFS file system that can be mounted by hundreds or thousands of EC2 instances simultaneously. It scales automatically and is highly available across multiple AZs. • A — Amazon EBS: Block storage attached to one EC2 instance at a time (standard EBS volumes). Cannot be shared across hundreds of instances. • B — Amazon S3: Object storage accessed via HTTP API. Not mountable as a standard file system; access patterns are very different from a shared file system. • D — Storage Gateway: Used for hybrid cloud (connecting on-premises to AWS storage). Not the right solution for shared EC2 access."
  },
  {
    "domain": 0,
    "question": "Which AWS service continuously records the state of AWS resources and evaluates them against desired configurations to identify non-compliant resources?",
    "options": [
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "AWS Config",
      "AWS Audit Manager"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "C (AWS Config) AWS Config continuously records the configuration state of your AWS resources and evaluates them against defined compliance rules. It identifies resources that are non-compliant and tracks configuration changes over time. 88AWS CLF-C02 Study Guide CHAPTER 8\\. ANSWER KEY AND EXPLANATIONS • A — CloudWatch: Monitors operational metrics (CPU, latency, errors). Does not evaluate resource configurations for compliance. • B — CloudTrail: Records API calls (who did what). Provides audit history but does not continuously evaluate configuration compliance. • D — AWS Audit Manager: Automates evidence collection for compliance frameworks. Relies on Config and CloudTrail data but is focused on generating audit reports, not real-time compliance evaluation."
  },
  {
    "id": "td1-1",
    "domain": 1,
    "question": "Which of the following Reserved Instance pricing models provides the highest average savings vs On-Demand?",
    "options": [
      "One-year, No Upfront, Standard RI",
      "One-year, All Upfront, Convertible RI",
      "Three-year, All Upfront, Standard RI",
      "Three-year, No Upfront, Convertible RI"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Three-year commitment, paying All Upfront, and selecting Standard (rather than Convertible) provides the maximum possible discount. Each concession—shorter term, no upfront payment, or Convertible flexibility—reduces the savings percentage."
  },
  {
    "id": "td1-2",
    "domain": 1,
    "question": "Which of the following are advantages of AWS consolidated billing? (Choose two.)",
    "options": [
      "Receive one bill for multiple accounts.",
      "Service limits increase by default in all accounts.",
      "A fixed discount on the monthly bill.",
      "Potential volume discounts as usage across accounts is combined.",
      "Automatic extension of the master account's support plan."
    ],
    "correct": [0, 3],
    "multi": true,
    "explanation": "Consolidated billing simplifies payments by providing a single monthly invoice for multiple accounts, and aggregates usage across those accounts to qualify for tiered volume discounts."
  },
  {
    "id": "td1-3",
    "domain": 1,
    "question": "A company is migrating a non-interruptible workload running for a three-year time frame. Which EC2 pricing offers the most savings?",
    "options": [
      "Amazon EC2 Spot Instances",
      "Amazon EC2 Dedicated Instances",
      "Amazon EC2 On-Demand Instances",
      "Amazon EC2 Reserved Instances"
    ],
    "correct": 3,
    "multi": false,
    "explanation": "Reserved Instances with a 3-year commitment offer up to 72% savings compared to On-Demand for steady, non-interruptible workloads. Spot instances are cheaper but can be interrupted, making them unsuitable for non-interruptible workloads."
  },
  {
    "id": "td1-4",
    "domain": 1,
    "question": "Which is the minimum AWS Support plan that allows for one-hour target response time for support cases?",
    "options": [
      "Enterprise",
      "Business",
      "Developer",
      "Basic"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Business Support offers a target response time of less than 1 hour for urgent/production-down cases. Developer Support response time is 12-24 hours, Enterprise is under 15 minutes (and includes a TAM), and Basic offers no technical support SLA."
  },
  {
    "id": "td1-5",
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
    "explanation": "AWS Organizations is the dedicated service to consolidate and centrally manage multiple AWS accounts, enabling consolidated billing, Service Control Policies (SCPs), and grouping accounts into Organizational Units (OUs)."
  },
  {
    "id": "td1-6",
    "domain": 1,
    "question": "Which of the following does AWS automatically handle for you? (Select TWO.)",
    "options": [
      "Introduce updates and patches to EC2 hypervisors",
      "Secure AWS data centers from environmental hazards",
      "Provide web application firewall protection to your public endpoints.",
      "Makes sure your data is safely kept and replicated between AZs",
      "Introduce updates and patches to EC2 guest operating systems"
    ],
    "correct": [0, 1],
    "multi": true,
    "explanation": "AWS is responsible for 'security of the cloud'. This includes protecting physical infrastructure and data centers from environmental hazards, and maintaining host hardware and hypervisors. Patching guest operating systems, configuring firewalls (like WAF), and managing customer data backups/replication inside resources are customer responsibilities under the Shared Responsibility Model."
  },
  {
    "id": "td1-7",
    "domain": 1,
    "question": "How is expense shifted when moving from traditional servers to the Cloud?",
    "options": [
      "Capital expense is traded for variable expense",
      "Operational expense is traded for variable expense",
      "Capital expense is traded for operational expense",
      "Variable expense is traded for capital expense"
    ],
    "correct": 0,
    "multi": false,
    "explanation": "Cloud computing trades upfront capital expense (CapEx) for variable/operational pay-as-you-go expense (OpEx), allowing you to pay only for the resources you consume and scale dynamically."
  },
  {
    "id": "td1-8",
    "domain": 1,
    "question": "Which statement below is correct regarding the components of the AWS Global Infrastructure?",
    "options": [
      "An Availability Zone contains multiple AWS Regions.",
      "An AWS Region contains multiple Availability Zones.",
      "An edge location contains multiple AWS Regions.",
      "An Availability Zone contains edge locations."
    ],
    "correct": 1,
    "multi": false,
    "explanation": "An AWS Region is a physical location in the world where AWS has multiple Availability Zones. Each AZ consists of one or more discrete data centers. Edge locations are standalone infrastructure sites used by CloudFront to cache content closer to users."
  },
  {
    "id": "td1-9",
    "domain": 1,
    "question": "A company is in the process of choosing the most suitable AWS Region to migrate its applications. Which of the following factors should they consider? (Select TWO.)",
    "options": [
      "Enhance customer experiences by reducing latency to users.",
      "Proximity to your end-users for on-site visits to your on-premises data center.",
      "Potential volume discounts for the specific AWS Region.",
      "Support country-specific data sovereignty compliance requirements.",
      "Consider Availability Zone security and utilize AWS Security Hub for centralized security monitoring."
    ],
    "correct": [0, 3],
    "multi": true,
    "explanation": "The key factors in selecting an AWS Region are user latency reduction (placing applications geographically close to end-users) and meeting legal/compliance requirements for data sovereignty (retaining data within specific borders). On-site visits, region-specific volume discounts, and AZ-specific security monitors do not drive region selection."
  },
  {
    "id": "td1-10",
    "domain": 1,
    "question": "Which AWS service is suitable for launching a highly scalable MySQL OLTP database?",
    "options": [
      "Amazon Aurora",
      "Amazon Redshift",
      "Amazon Timestream",
      "Amazon DynamoDB"
    ],
    "correct": 0,
    "multi": false,
    "explanation": "Amazon Aurora is a fully managed, MySQL- and PostgreSQL-compatible relational database built for the cloud, specifically designed for highly scalable Online Transaction Processing (OLTP) workloads. Redshift is for OLAP data warehousing, DynamoDB is a NoSQL/document store, and Timestream is for time-series data."
  },
  {
    "id": "td1-11",
    "domain": 1,
    "question": "Which of the following cloud design principles supports growth in users, traffic, or data size with no drop-in performance?",
    "options": [
      "Decouple your components",
      "Go Serverless to reduce compute footprint",
      "Design for failure",
      "Scalability"
    ],
    "correct": 3,
    "multi": false,
    "explanation": "Scalability is the design principle that ensures an architecture can grow seamlessly to support increasing demand (users, traffic, or data volume) without a drop in system performance, scaling resources in a linear manner."
  },
  {
    "id": "td1-12",
    "domain": 1,
    "question": "A startup is developing a mobile app with a database service to store user data. The app is expected to grow rapidly, and the company needs a flexible and scalable database service that can handle unpredictable traffic and workload spikes. Which service should the startup use if they need a scalable, fast, and flexible non-relational database service?",
    "options": [
      "Amazon RDS",
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon S3"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Amazon DynamoDB is a fully managed NoSQL/non-relational database service providing fast, predictable single-digit millisecond latency performance at any scale, making it ideal for rapid growth and unpredictable traffic spikes. RDS is relational, Redshift is for OLAP warehousing, and S3 is object storage."
  },
  {
    "id": "td1-13",
    "domain": 1,
    "question": "Which of the following is a fully managed database in AWS that can be used to store JSON documents?",
    "options": [
      "Amazon ElastiCache",
      "Amazon Aurora",
      "Amazon DynamoDB",
      "Amazon Redshift"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "Amazon DynamoDB is a key-value and document database that natively supports storing and querying JSON-formatted documents. Aurora is relational, ElastiCache is an in-memory caching engine, and Redshift is a columnar analytics warehouse."
  },
  {
    "id": "td1-14",
    "domain": 1,
    "question": "Which of the following is used to enable instances in the public subnet to connect to the public Internet?",
    "options": [
      "NAT instance",
      "NAT Gateway",
      "Internet Gateway",
      "API Gateway"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "An Internet Gateway (IGW) is attached to a VPC to enable direct communication between resources in a public subnet and the public internet. NAT Gateways and NAT Instances allow private subnet resources to reach the internet while blocking inbound connections from the internet."
  },
  {
    "id": "td1-15",
    "domain": 1,
    "question": "The use of multi-threading in Amazon S3 requests via the Multipart Upload API is an example of which AWS cloud best practice?",
    "options": [
      "Implement elasticity.",
      "Think parallel.",
      "Allow for evolutionary architectures.",
      "Decouple your components."
    ],
    "correct": 1,
    "multi": false,
    "explanation": "The 'Think Parallel' design principle emphasizes leveraging concurrent request parallelization and multi-threading (such as parallel uploads via S3 Multipart Upload API) to maximize data transfer performance and overall throughput."
  },
  {
    "id": "td1-16",
    "domain": 1,
    "question": "Which of the following infrastructure correlates to a VPC’s subnet?",
    "options": [
      "Edge location",
      "Availability zone",
      "AWS Region",
      "Server"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Each VPC subnet resides entirely within exactly one Availability Zone (AZ) and cannot span multiple zones. Availability Zones consist of isolated data centers to ensure high availability and fault tolerance."
  },
  {
    "id": "td1-17",
    "domain": 1,
    "question": "What does AWS do when a storage device reaches the end of its lifespan?",
    "options": [
      "AWS wipes the drives and sends it back to the manufacturer to procure a new one",
      "AWS follows a strict decommissioning process as described in compliance procedures",
      "AWS simply wipes the device and disposes it",
      "AWS archives the device in case customers request their data again"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "When storage media reaches its end of life, AWS follows strict decommissioning procedures detailed in NIST 800-88 standards to securely destroy data before any device leaves AWS physical control."
  },
  {
    "id": "td1-18",
    "domain": 1,
    "question": "What is the right arrangement of the AWS Global Infrastructure components according to their geographical coverage area size, in descending order?",
    "options": [
      "Regions, Edge Locations, Availability Zones",
      "Regions, Availability Zones, Edge Locations"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Descending by geographical size: Regions (global geographical areas consisting of multiple isolated zones), Availability Zones (isolated partitions containing physical data centers within a Region), and Edge Locations (independent sites caching content via CloudFront)."
  },
  {
    "id": "td1-19",
    "domain": 1,
    "question": "Which of the following are defined as global services in AWS? (Select TWO.)",
    "options": [
      "AWS Batch",
      "Amazon CloudFront",
      "Amazon DynamoDB",
      "Amazon RDS",
      "AWS Identity and Access Management"
    ],
    "correct": [1, 4],
    "multi": true,
    "explanation": "Amazon CloudFront and AWS Identity and Access Management (IAM) are global services spanning all regions. AWS Batch, RDS, and DynamoDB are regional in scope."
  },
  {
    "id": "td1-20",
    "domain": 1,
    "question": "Which of the following are pillars of the AWS Well-Architected Framework? (Select TWO.)",
    "options": [
      "High Availability",
      "Sustainability",
      "Performance Efficiency",
      "Agility",
      "Scalability"
    ],
    "correct": [1, 2],
    "multi": true,
    "explanation": "The six pillars of the AWS Well-Architected Framework are: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability. High Availability, Agility, and Scalability are architecture qualities but not formal framework pillars."
  },
  {
    "id": "td1-21",
    "domain": 1,
    "question": "Which of the following is one of the benefits of migrating your systems from an on-premises data center to AWS Cloud?",
    "options": [
      "Completely eliminates the administrative overhead of patching the guest operating system of their EC2 instances",
      "Enables the customer to focus on business activities rather than on the heavy lifting of racking, stacking, and powering servers",
      "Eliminates the need for the customer to implement client-side or service-side encryption for their data",
      "Enables the customer to eliminate high IT infrastructure costs since cloud computing is absolutely free"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Migrating to AWS shifts the burden of physical hardware setup, server racking, stacking, and power management to AWS, letting customers focus on differentiating business operations. Guest OS patching, encryption implementation, and pay-as-you-go costs remain customer concerns."
  },
  {
    "id": "td1-22",
    "domain": 1,
    "question": "Which of the following is not a standard design principle when designing systems in AWS?",
    "options": [
      "Loose coupling",
      "Design for failure",
      "Servers, not services",
      "Disposable resources instead of fixed servers"
    ],
    "correct": 2,
    "multi": false,
    "explanation": "The correct AWS design principle is 'Services, not servers' (leveraging managed services over self-managed server resources). Loose coupling, designing for failure, and disposable resources are standard AWS architectural practices."
  },
  {
    "id": "td1-23",
    "domain": 1,
    "question": "A company is planning to deploy a high-frequency trading (HFT) application that will store constantly changing financial data in AWS and require low-latency access. Which AWS services should be used? (Select TWO.)",
    "options": [
      "Amazon S3 Glacier Instant Retrieval",
      "AWS Snowball Edge",
      "Amazon EFS",
      "Amazon RDS",
      "Amazon S3"
    ],
    "correct": [2, 3],
    "multi": true,
    "explanation": "For fast read/write workloads with frequently changing data, Amazon EFS (elastic shared file system) and Amazon RDS (managed relational database) are appropriate low-latency storage choices. Glacier is for archives, Snowball is physical migration, and S3 has higher latency as a global object store outside a VPC."
  },
  {
    "id": "td1-24",
    "domain": 1,
    "question": "An e-commerce company is considering migrating its website to the AWS Cloud to improve its scalability and reduce costs. Which statements explain the business value of migration to the AWS Cloud? (Select TWO.)",
    "options": [
      "Companies that migrate to the AWS Cloud reduce IT costs related to infrastructure, freeing the budget for reinvestment in other areas.",
      "Companies migrating to AWS Cloud can benefit from improving service level agreements (SLAs) while reducing risk and unplanned outages.",
      "Migrating to AWS Cloud offers the e-commerce company access to advanced analytics and machine learning capabilities.",
      "The migration of enterprise applications to the AWS Cloud makes these applications automatically available on mobile devices.",
      "Applications are modernized because migration to the AWS Cloud requires companies to rearchitect and rewrite all enterprise applications."
    ],
    "correct": [0, 1],
    "multi": true,
    "explanation": "Moving to the cloud reduces physical IT infrastructure capital expenses and enhances overall service level agreements (SLAs) with lower operational risk and unplanned downtime. Migration does not automatically translate apps to mobile, nor does it require rewriting all systems."
  },
  {
    "id": "td1-25",
    "domain": 1,
    "question": "A company used to experience delays in developing new services due to the time it took to procure and set up on-premises servers. They recently migrated their infrastructure to the AWS Cloud. This change has allowed them to spin up testing environments in just days, accelerating the time to market for their services. Which of the following AWS Cloud benefits is showcased in this particular scenario?",
    "options": [
      "Elasticity",
      "Agility",
      "Cost savings",
      "Deploy globally in minutes"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "This scenario demonstrates operational agility—the speed and efficiency with which developers can provision testing/development resources in days instead of waiting weeks for physical hardware procurement, thus accelerating time-to-market."
  },
  {
    "id": "td1-26",
    "domain": 1,
    "question": "Which of the following options is an AWS Cloud Adoption Framework (CAF) perspective specifically tailored to ensure your cloud investments expedite your digital transformation goals and business outcomes?",
    "options": [
      "Operations perspective",
      "Business perspective",
      "Governance perspective",
      "People perspective"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "The AWS CAF Business Perspective ensures that cloud investments align with organizational strategic plans to expedite digital transformation and maximize business outcomes. Governance, People, and Operations focus on policies, organizational skills, and operational SLAs respectively."
  },
  {
    "id": "td1-27",
    "domain": 1,
    "question": "Which of the following perspective includes the foundational capabilities of the AWS Cloud Adoption Framework (AWS CAF)?",
    "options": [
      "Sustainability",
      "Security",
      "Scalability",
      "Reliability"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Security is a foundational perspective of the AWS CAF (along with Business, People, Governance, Platform, and Operations). Sustainability, Scalability, and Reliability are important design principles/pillars but are not AWS CAF perspectives."
  },
  {
    "id": "td1-28",
    "domain": 1,
    "question": "What cloud computing model deals with services such as EC2 instances?",
    "options": [
      "SaaS",
      "IaaS",
      "DBaaS",
      "PaaS"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Infrastructure as a Service (IaaS) provides physical or virtual servers, networking, and storage blocks where you have full control over OS and applications. EC2 is the quintessential IaaS offering in AWS."
  },
  {
    "id": "td1-29",
    "domain": 1,
    "question": "An organization would like to boost productivity by improving business communication channels and customer service experience. Which of the following AWS applications would be suggested? (Select TWO.)",
    "options": [
      "AWS Transfer Family",
      "AWS Marketplace",
      "Amazon Connect",
      "Amazon Workspaces",
      "Amazon Chime"
    ],
    "correct": [2, 4],
    "multi": true,
    "explanation": "Amazon Chime provides high-quality communications (meetings, video, chat) inside and outside the company. Amazon Connect is an easy-to-use omnichannel cloud contact center. Together they streamline business communications and customer support."
  },
  {
    "id": "td1-30",
    "domain": 1,
    "question": "What service provides the lowest-cost storage option for retaining database backups, which also allows occasional data retrieval in minutes, and can be used with Lifecycle policies to automatically move backups to the most cost-effective tier?",
    "options": [
      "Amazon EFS",
      "Amazon S3 Glacier Flexible Retrieval",
      "Amazon S3",
      "Amazon EBS"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Amazon S3 Glacier Flexible Retrieval offers the lowest-cost storage tier for long-term database backups that can tolerate occasional retrieval delays from minutes to hours. S3 Standard is more expensive, EBS is block-based, and EFS is file system storage."
  },
  {
    "id": "td1-31",
    "domain": 1,
    "question": "Which of the following cloud best practices reinforces the use of the Service-Oriented Architecture (SOA) design principle?",
    "options": [
      "Decouple your components.",
      "Implement elasticity.",
      "Design for failure.",
      "Think parallel."
    ],
    "correct": 0,
    "multi": false,
    "explanation": "Decoupling components isolates layers so they operate asynchronously without direct dependencies, reinforcing the Service-Oriented Architecture (SOA) design principle and enhancing scaling capability."
  },
  {
    "id": "td1-32",
    "domain": 1,
    "question": "Which AWS solution enables the provisioning of a logically isolated section of the AWS Cloud where AWS resources can be launched, and where you can configure a Route table to manage traffic flow?",
    "options": [
      "Amazon EC2",
      "Amazon VPC",
      "Internet gateway",
      "AWS Elastic Beanstalk"
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Amazon VPC lets you provision a logically isolated section of the AWS Cloud to launch resources in your own defined virtual network, giving you control over IP ranges, subnets, route tables, and gateways."
  },
  {
    "id": "td1-33",
    "domain": 1,
    "question": "Which of the following is the responsibility of the customer in the AWS cloud? (Select TWO.)",
    "options": [
      "Managing data stored in the AWS resources",
      "Managing users in their AWS account",
      "Disposal of disk drives",
      "Upgrading chipsets to the latest commercially available product",
      "Ensuring that AWS services comply with the standards required of them"
    ],
    "correct": [0, 1],
    "multi": true,
    "explanation": "According to the AWS Shared Responsibility Model, customer responsibilities ('security in the cloud') include managing user identities/access (IAM) and securing stored data. Physical hardware controls, chipset upgrades, and compliance auditing are managed entirely by AWS."
  },
  {
    "id": "td1-34",
    "domain": 1,
    "question": "Which of the following are regarded as regional services in AWS? (Select TWO.)",
    "options": [
      "Amazon EFS",
      "AWS Security Token Service",
      "AWS Billing Conductor",
      "Amazon EC2",
      "AWS Batch"
    ],
    "correct": [0, 4],
    "multi": true,
    "explanation": "Amazon EFS and AWS Batch are regional services. AWS STS and AWS Billing Conductor are global services, and Amazon EC2 is a zonal service (instances are tied to specific Availability Zones, though security groups and AMIs are regional)."
  },
  {
    "id": "td1-35",
    "domain": 1,
    "question": "A company wants to launch a Microsoft SQL Server database in AWS. The database instance should only be managed by the company’s DBA and must be accessible via RDP. A standard license for SQL Server is required but the company is not yet sure how much CPU and memory to allocate to the database. Which option gives the most convenience and flexibility to determine the best database size while still being cost-effective?",
    "options": [
      "Launch an RDS instance that runs MS SQL Server Standard. Purchase a Standard MSSQL license and store it in the AWS Managed Services (AMS).",
      "Use a Windows Server with SQL Server Standard bundled AMI so you won’t need to buy and manage your own license.",
      "Launch an EC2 instance and install MS SQL Server. Purchase a Standard MSSQL license from Microsoft and apply it to the database you installed.",
      "Launch an Amazon Aurora database that runs MS SQL Server. Buy a Standard MSSQL license from the AWS License Manager service."
    ],
    "correct": 1,
    "multi": false,
    "explanation": "Launching Amazon EC2 using a Windows Server AMI with SQL Server Standard bundled avoids the need to purchase/manage SQL licenses separately, allows direct RDP access (unlike RDS), and offers full flexibility to change instance classes on a pay-as-you-go basis. Aurora does not support SQL Server."
  }
];
export const domain1Questions = allQuestions.filter(q => q.domain === 1);
export const domain2Questions = allQuestions.filter(q => q.domain === 2);
export const domain3Questions = allQuestions.filter(q => q.domain === 3);
export const domain4Questions = allQuestions.filter(q => q.domain === 4);
export const extraQuestions = allQuestions.filter(q => q.domain === 0);
