export const domain1Questions = [
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
  }
];
