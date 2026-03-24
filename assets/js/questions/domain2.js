export const domain2Questions = [
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
  }
];
