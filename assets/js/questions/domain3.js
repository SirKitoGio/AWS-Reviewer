export const domain3Questions = [
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
  }
];
