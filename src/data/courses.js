export const coursesData = [
  {
    id: "fullstack-software-engineering",
    title: "Full-Stack Software Engineering",
    category: "Software Development",
    shortDescription: "Master modern frontend, scalable Node.js/Python backends, SQL/NoSQL databases, and real-world deployment workflows.",
    duration: "16 Weeks",
    level: "Intermediate",
    mode: "Live Interactive + Projects",
    schedule: "Tue & Thu: 6:00 PM – 9:00 PM EST + Sat Labs",
    fees: "$2,400 (Installment plans available)",
    eligibility: "Familiarity with basic JavaScript or any modern programming language and basic HTML/CSS concepts.",
    tags: ["React", "Node.js", "PostgreSQL", "Docker", "REST & GraphQL"],
    link: "/courses/fullstack-software-engineering",
    enrollmentUrl: "/enrollment?course=fullstack-software-engineering",
    overview: "This intensive cohort program trains software engineers to architect, build, and deploy full-lifecycle web applications. You will write production-grade TypeScript/React frontends, construct resilient REST and GraphQL microservices, design optimized relational database schemas, and manage CI/CD pipelines.",
    syllabus: [
      {
        module: "Module 1",
        title: "Modern Frontend Architecture & State Management",
        topics: ["TypeScript fundamentals", "React Component lifecycle & hooks", "Custom hooks & Context", "Component design tokens & CSS Modules"]
      },
      {
        module: "Module 2",
        title: "Scalable Backend & API Engineering",
        topics: ["Node.js & Express / NestJS architectures", "RESTful API design & OpenAPI specs", "Authentication, JWT & OAuth2", "Error handling & logging middlewares"]
      },
      {
        module: "Module 3",
        title: "Relational & Document Databases",
        topics: ["PostgreSQL schema design & indexes", "Prisma & TypeORM integrations", "Redis caching strategies", "Database migrations in production"]
      },
      {
        module: "Module 4",
        title: "DevOps, Containerization & Cloud Deployment",
        topics: ["Docker multi-stage builds", "Automated GitHub Actions CI/CD", "AWS ECS / Cloud Run deployment", "Monitoring, Sentry & health checks"]
      }
    ],
    learningOutcomes: [
      "Design and deploy production-ready full-stack applications with TypeScript and React.",
      "Architect secure and performant backend APIs with robust authentication and validation.",
      "Write automated unit and integration tests with Jest and Cypress.",
      "Build a verified capstone project to demonstrate to hiring managers."
    ]
  },
  {
    id: "cloud-devops-mastery",
    title: "Cloud Infrastructure & DevOps",
    category: "Cloud & Infrastructure",
    shortDescription: "Build automated CI/CD pipelines, manage Kubernetes clusters, and orchestrate secure multi-cloud architectures.",
    duration: "12 Weeks",
    level: "Advanced",
    mode: "Hands-on Lab Focused",
    schedule: "Mon & Wed: 6:30 PM – 9:30 PM EST",
    fees: "$2,200 (Corporate sponsorships accepted)",
    eligibility: "1+ years of software development or IT sysadmin experience, Linux command-line fluency.",
    tags: ["AWS", "Kubernetes", "Terraform", "CI/CD", "Docker", "Prometheus"],
    link: "/courses/cloud-devops-mastery",
    enrollmentUrl: "/enrollment?course=cloud-devops-mastery",
    overview: "Designed for software engineers and systems administrators transitioning into modern DevOps and Cloud Platform engineering. Gain direct, lab-based expertise provisioning Infrastructure-as-Code, configuring self-healing Kubernetes clusters, and implementing zero-downtime deployment pipelines.",
    syllabus: [
      {
        module: "Module 1",
        title: "Linux Systems & Container Runtimes",
        topics: ["Advanced Linux internals & networking", "Docker containerization at scale", "Image security scanning", "Multi-stage artifact optimization"]
      },
      {
        module: "Module 2",
        title: "Infrastructure as Code with Terraform",
        topics: ["HCL syntax & module design", "State management & locking in S3", "Multi-environment provisioning", "Terraform Cloud & drift detection"]
      },
      {
        module: "Module 3",
        title: "Kubernetes Administration & Helm",
        topics: ["Pods, Deployments, Services & Ingress", "StatefulSets & Persistent Volumes", "Helm chart packaging", "ArgoCD GitOps deployments"]
      },
      {
        module: "Module 4",
        title: "Observability, SRE & Incident Response",
        topics: ["Prometheus & Grafana dashboards", "Distributed tracing with OpenTelemetry", "SLIs/SLOs & alert routing", "Automated chaos engineering tests"]
      }
    ],
    learningOutcomes: [
      "Provision secure cloud environments on AWS using modular Terraform.",
      "Manage and troubleshoot multi-node Kubernetes clusters in production.",
      "Build GitOps deployment workflows using GitHub Actions and ArgoCD.",
      "Set up full observability stacks with Prometheus, Grafana, and ELK."
    ]
  },
  {
    id: "ui-ux-design-systems",
    title: "UI/UX & Modern Design Systems",
    category: "Design & Product",
    shortDescription: "Learn end-to-end product design, user research methodologies, accessible design systems, and Figma component libraries.",
    duration: "10 Weeks",
    level: "All Levels",
    mode: "Portfolio Driven",
    schedule: "Tue & Fri: 6:00 PM – 8:30 PM EST",
    fees: "$1,800 (Flexible payment options)",
    eligibility: "No prior coding experience required. Basic familiarity with Figma or digital graphic tools is helpful.",
    tags: ["Figma", "Design Tokens", "WCAG 2.1", "Prototyping", "User Research"],
    link: "/courses/ui-ux-design-systems",
    enrollmentUrl: "/enrollment?course=ui-ux-design-systems",
    overview: "Master the art and science of digital product design. Learn user research, wireframing, high-fidelity interactive prototyping, WCAG accessibility standards, and how to build scalable tokenized design systems that seamlessly integrate with frontend codebases.",
    syllabus: [
      {
        module: "Module 1",
        title: "User Research & Information Architecture",
        topics: ["Qualitative user interviews", "Personas & customer journey maps", "Information architecture & sitemaps", "Card sorting & usability testing"]
      },
      {
        module: "Module 2",
        title: "Interface Design & Visual Hierarchy",
        topics: ["Grid systems & responsive layouts", "Typography & color token models", "Micro-interactions & UX feedback", "Design accessibility (WCAG 2.1 AA)"]
      },
      {
        module: "Module 3",
        title: "Building Scalable Design Systems in Figma",
        topics: ["Figma components & auto-layout 5.0", "Variants & component properties", "Design tokens for developers", "Design system governance & versioning"]
      },
      {
        module: "Module 4",
        title: "Interactive Prototyping & Developer Handoff",
        topics: ["Advanced interactive prototypes in Figma", "Design spec documentation", "Handoff workflows with engineering", "Portfolio review & presentation"]
      }
    ],
    learningOutcomes: [
      "Conduct user research and translate insights into wireframes and user flows.",
      "Build a complete multi-tier design system in Figma with tokens and documentation.",
      "Ensure all UI assets meet international accessibility compliance standards.",
      "Complete 2 comprehensive case studies for your professional portfolio."
    ]
  },
  {
    id: "data-engineering-ai",
    title: "Data Engineering & Analytics",
    category: "Data & AI",
    shortDescription: "Construct resilient ETL data pipelines, data warehousing in BigQuery/Snowflake, and practical analytics frameworks.",
    duration: "14 Weeks",
    level: "Intermediate",
    mode: "Project Based",
    schedule: "Wed & Sat: 6:00 PM – 9:00 PM EST",
    fees: "$2,300 (Scholarships available)",
    eligibility: "Proficiency in Python and basic SQL knowledge.",
    tags: ["Python", "SQL", "Airflow", "BigQuery", "Snowflake", "dbt"],
    link: "/courses/data-engineering-ai",
    enrollmentUrl: "/enrollment?course=data-engineering-ai",
    overview: "Learn to build resilient data infrastructure capable of handling millions of events daily. This program covers automated ETL/ELT pipelines with Apache Airflow and dbt, cloud data warehouses, real-time streaming with Kafka, and operationalizing machine learning models.",
    syllabus: [
      {
        module: "Module 1",
        title: "Advanced SQL & Data Modeling",
        topics: ["Complex window functions & CTEs", "Dimensional modeling (Star & Snowflake schemas)", "Database normalization vs denormalization", "Query performance tuning"]
      },
      {
        module: "Module 2",
        title: "ETL / ELT Pipelines & Orchestration",
        topics: ["Python data manipulation with Pandas & Polars", "Apache Airflow DAG authoring & scheduling", "Transformations with dbt (data build tool)", "Data quality testing & Great Expectations"]
      },
      {
        module: "Module 3",
        title: "Cloud Data Warehousing & Big Data",
        topics: ["Google BigQuery & Snowflake architecture", "Partitioning & clustering strategies", "Cost management in cloud data lakes", "Apache Spark on Dataproc"]
      },
      {
        module: "Module 4",
        title: "Streaming Data & Practical AI Pipelines",
        topics: ["Apache Kafka fundamentals", "Real-time streaming architectures", "Feature stores for machine learning", "Deploying batch inference pipelines"]
      }
    ],
    learningOutcomes: [
      "Design robust data warehouse schemas on BigQuery and Snowflake.",
      "Orchestrate production ELT pipelines using Airflow and dbt.",
      "Implement automated data quality testing and alerting.",
      "Build an end-to-end streaming data pipeline capstone project."
    ]
  }
];
