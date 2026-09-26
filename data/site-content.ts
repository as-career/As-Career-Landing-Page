import type {
  Course,
  Leader,
  Partner,
  Placement,
  Review,
} from "@/types/content";

export const stats = [
  { label: "Students Placed", value: "200+" },
  { label: "Students Trained", value: "500+" },
  { label: "Hiring Partners", value: "100+" },
];

export const leaders: Leader[] = [
  {
    id: 1,
    name: "Ateef Shaikh",
    title: "CEO & Technical Head Associate",
    bio: "",
    image: "/assets/ateef-shaikh-ceo-as-career-consultancy.png",
    url: "/chief-executive-officer",
  },
  {
    id: 2,
    name: "Azhar Killedar",
    title: "MD & Communication Training Head",
    bio: "",
    image: "/assets/azhar-md-as-career-consultany.png",
    url: "/managing-director",
  },
  {
    id: 3,
    name: "Shoaib Ankalgi",
    title: "COO & Head of IT-Operations, Training & Placement",
    bio: "",
    image: "/assets/shoaib-as-career-consultancy.png",
    url: "/chief-operating-officer",
  },
];

export const courses: Course[] = [
  {
    slug: "ccna-networking",
    title: "CCNA (Cisco Certified Network Associate) Networking",
    category: "IT & Technical",
    duration: "2 Months",
    mode: "Online + Offline",
    // fee: "₹18,000",

    description:
      "A practical, career-focused CCNA Networking program designed to build strong networking fundamentals and prepare learners for entry-level networking and IT infrastructure roles. The course combines instructor-led training, Cisco Packet Tracer and GNS3 labs, real-world troubleshooting scenarios, interview preparation, and certification guidance.",

    highlights: [
      "Hands-on Cisco Packet Tracer & GNS3 networking labs",
      "Strong foundation in networking concepts and protocols",
      "IP addressing, subnetting & VLSM mastery",
      "Cisco switching and routing configuration",
      "VLAN, trunking and inter-VLAN routing practice",
      "Static and dynamic routing configuration",
      "OSPF and EIGRP routing concepts",
      "ACL, NAT and DHCP configuration",
      "Network troubleshooting using practical scenarios",
      "Network security fundamentals",
      "Real-world networking case studies",
      "Interview preparation and mock interviews",
      "Technical aptitude and networking mock tests",
      "CCNA certification exam guidance",
      "Career guidance and placement support",
    ],

    curriculum: [
      "Networking Fundamentals: LAN, WAN, MAN, WLAN, network topologies and networking devices",
      "OSI & TCP/IP Models: Layers, protocols, encapsulation and data communication",
      "IP Addressing: IPv4, IPv6, public/private IP addressing and CIDR",
      "Subnetting & VLSM: Subnet masks, network calculations and address planning",
      "Ethernet & Switching: MAC addresses, switching concepts and Cisco IOS",
      "VLANs & Trunking: VLAN creation, access ports, trunk ports and 802.1Q",
      "Inter-VLAN Routing: Router-on-a-stick and Layer 3 routing concepts",
      "Routing Fundamentals: Routing tables, default gateways and static routes",
      "Dynamic Routing: OSPF and EIGRP concepts and configuration",
      "Network Services: DHCP, DNS, NAT, PAT and network service troubleshooting",
      "Access Control Lists: Standard ACLs, extended ACLs and traffic filtering",
      "Network Security: Port security, device security and common network threats",
      "WAN Technologies: WAN connectivity, VPN fundamentals and troubleshooting",
      "Network Troubleshooting: Ping, traceroute, Cisco IOS commands and troubleshooting methodology",
      "Practical Labs: Router, switch, VLAN, routing, ACL, NAT and DHCP configuration",
      "Career & Certification Preparation: CCNA exam preparation, technical interviews and placement preparation",
    ],

    eligibility: [
      "Any graduate",
      "Diploma holders",
      "Students pursuing graduation",
      "Basic computer knowledge",
      "Basic networking knowledge is helpful but not mandatory",
    ],

    instructor: "Ateef Shaikh, Shoiab Ankalgi, Azhar Killedar",
  },

  {
    slug: "spoken-english-accelerator",
    title: "Spoken English Accelerator",
    category: "Spoken English",
    duration: "6 Weeks",
    mode: "Offline",
    // fee: "₹7,500",

    description:
      "A practical spoken English and communication program designed to improve fluency, vocabulary, pronunciation, confidence and professional communication skills for academic, workplace and interview situations.",

    highlights: [
      "Daily English speaking practice",
      "One-to-one speaking activities",
      "Real-life conversation practice",
      "Vocabulary building exercises",
      "Grammar improvement",
      "Pronunciation and fluency training",
      "Presentation skills development",
      "Group discussion practice",
      "Public speaking activities",
      "Mock interviews",
      "Confidence building sessions",
      "Professional communication training",
      "Interview communication preparation",
      "Workplace English practice",
    ],

    curriculum: [
      "English Communication Fundamentals: Sentence formation, common expressions and everyday English",
      "Daily Conversation: Introducing yourself, asking questions, conversations and real-life situations",
      "Vocabulary Development: Common vocabulary, professional vocabulary and contextual usage",
      "Grammar Essentials: Tenses, articles, prepositions, conjunctions and sentence structures",
      "Pronunciation & Fluency: Correct pronunciation, speaking rhythm and fluency improvement",
      "Listening Skills: Understanding conversations, instructions and different speaking styles",
      "Speaking Practice: Individual speaking activities, pair conversations and group discussions",
      "Presentation Skills: Structuring presentations, body language and confident delivery",
      "Public Speaking: Stage confidence, speech preparation and audience interaction",
      "Group Discussions: Discussion techniques, expressing opinions and active listening",
      "Professional Communication: Workplace conversations, meetings and professional etiquette",
      "Interview Skills: Self-introduction, common interview questions and professional responses",
      "Mock Interviews: Practice interviews with feedback and improvement guidance",
      "Personality Development: Confidence, body language and professional presentation",
    ],

    eligibility: [
      "Students",
      "Graduates",
      "Job seekers",
      "Working professionals",
      "Anyone looking to improve spoken English",
      "Basic understanding of English is preferred",
    ],

    instructor: "Ateef Shaikh, Shoiab Ankalgi, Azhar Killedar",
  },

  {
    slug: "ccnp",
    title: "CCNP (Cisco Certified Network Professional)",
    category: "Networking",
    duration: "12 Weeks",
    mode: "Hybrid",
    // fee: "₹5,500",

    description:
      "An advanced networking program designed for learners who want to strengthen their enterprise networking knowledge through advanced routing, switching, network security, infrastructure design and troubleshooting.",

    highlights: [
      "Advanced enterprise networking concepts",
      "Advanced routing and switching",
      "OSPF and EIGRP configuration",
      "VLAN and STP implementation",
      "Enterprise network architecture",
      "Advanced troubleshooting techniques",
      "WAN technologies",
      "Network security fundamentals",
      "Cisco IOS configuration practice",
      "Real-world enterprise networking scenarios",
      "Hands-on Packet Tracer and GNS3 labs",
      "CCNP certification guidance",
      "Technical interview preparation",
      "Mock tests and assessments",
      "Career and placement guidance",
    ],

    curriculum: [
      "Advanced Networking Concepts: Enterprise network architecture and design principles",
      "Advanced IP Addressing: IPv4, IPv6, subnetting and address planning",
      "Advanced Switching: VLANs, trunking, EtherChannel and switching technologies",
      "Spanning Tree Protocol: STP, RSTP and troubleshooting",
      "Inter-VLAN Routing: Layer 3 switching and enterprise routing",
      "OSPF: Single-area and multi-area OSPF concepts and configuration",
      "EIGRP: Advanced EIGRP concepts, configuration and troubleshooting",
      "Routing Tables: Route selection, administrative distance and metrics",
      "Route Redistribution: Redistribution concepts and routing optimization",
      "WAN Technologies: WAN architecture, connectivity and troubleshooting",
      "Network Security: ACLs, port security and network security fundamentals",
      "VPN Fundamentals: VPN concepts and secure network connectivity",
      "Network Troubleshooting: Structured troubleshooting methodologies and Cisco IOS commands",
      "Enterprise Infrastructure: Network scalability, redundancy and high availability",
      "Network Management: Monitoring, logging and performance management",
      "Practical Labs: Enterprise routing, switching and troubleshooting scenarios",
      "Certification Preparation: CCNP-focused practice, assessments and exam guidance",
    ],

    eligibility: [
      "CCNA certified candidates",
      "Networking professionals",
      "IT professionals with networking experience",
      "Graduates with strong networking knowledge",
      "Candidates with equivalent networking experience",
      "Basic Cisco IOS knowledge recommended",
    ],

    instructor: "Ateef Shaikh, Shoiab Ankalgi, Azhar Killedar",
  },

  {
    slug: "cloud-computing",
    title: "Cloud Computing",
    category: "IT & Technical",
    duration: "2 Months",
    mode: "Online + Offline",
    // fee: "₹20,000",

    description:
      "A practical Cloud Computing program designed to develop industry-ready skills in cloud infrastructure, virtualization, storage, networking, security, deployment and management using leading cloud platforms such as AWS and Microsoft Azure.",

    highlights: [
      "AWS and Microsoft Azure fundamentals",
      "Hands-on cloud computing labs",
      "Cloud infrastructure deployment",
      "Virtual machines and cloud networking",
      "AWS EC2, S3, IAM and VPC",
      "Azure cloud fundamentals",
      "Cloud storage and database concepts",
      "Docker and container fundamentals",
      "Cloud security fundamentals",
      "Real-world cloud deployment projects",
      "Cloud monitoring and management",
      "Cost optimization concepts",
      "Certification preparation",
      "Technical interview preparation",
      "Career and placement guidance",
    ],

    curriculum: [
      "Cloud Computing Fundamentals: Introduction to cloud computing and cloud architecture",
      "Cloud Service Models: IaaS, PaaS, SaaS and common cloud deployment models",
      "Cloud Deployment Models: Public, private, hybrid and multi-cloud environments",
      "Virtualization: Virtual machines, hypervisors and virtualization concepts",
      "AWS Fundamentals: AWS global infrastructure, regions, availability zones and core services",
      "AWS EC2: Virtual machines, instances, security groups and deployment",
      "AWS S3: Object storage, buckets, permissions and storage concepts",
      "AWS IAM: Users, groups, roles, permissions and identity management",
      "AWS VPC: Virtual networks, subnets, route tables and security concepts",
      "Microsoft Azure Fundamentals: Azure architecture, services and resource management",
      "Azure Compute: Virtual machines and basic cloud deployment",
      "Cloud Storage: Object, block and file storage concepts",
      "Cloud Databases: Relational and NoSQL database fundamentals",
      "Docker Fundamentals: Containers, images and basic Docker commands",
      "Cloud Networking: Virtual networks, subnets, gateways and security",
      "Cloud Security: Identity, access control, encryption and security best practices",
      "Deployment & Scaling: Application deployment, load balancing and scalability",
      "Monitoring: Cloud monitoring, logging and performance management",
      "Cost Optimization: Cloud pricing concepts, resource management and cost control",
      "Practical Projects: Deploying applications and services in simulated cloud environments",
      "Certification Preparation: AWS/Azure certification guidance and practice assessments",
    ],

    eligibility: [
      "Any graduate",
      "Diploma holders",
      "Students pursuing graduation",
      "Basic computer knowledge",
      "Basic networking knowledge preferred",
      "Basic Linux knowledge is beneficial but not mandatory",
    ],

    instructor: "Ateef Shaikh, Shoiab Ankalgi, Azhar Killedar",
  },
];

// export const placements: Placement[] = [
//   {
//     name: "Meera Kulkarni",
//     course: "CCNA Networking",
//     company: "TCS",
//     role: "Network Associate",
//     testimonial:
//       "The practical labs and placement guidance made the transition effortless.",
//     image:
//       "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     name: "Arjun Verma",
//     course: "IELTS Preparation",
//     company: "Infosys",
//     role: "Operations Executive",
//     testimonial:
//       "Their confidence-building program helped me crack my interview with ease.",
//     image:
//       "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     name: "Ritika Singh",
//     course: "Spoken English Accelerator",
//     company: "Wipro",
//     role: "Customer Support Associate",
//     testimonial:
//       "The communication sessions increased my fluency and confidence dramatically.",
//     image:
//       "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
//   },
// ];

export const placements: Placement[] = [
  {
    id: 1,
    name: "Muskan Desai",
    company: "Banzu",
    location: "Remote/Bangalore",
    role: "Business Development Associate",
    package: "3.5 LPA",
    status: "Paid",
  },
  {
    id: 2,
    name: "Insha Gani",
    company: "Banzu",
    location: "Remote/Bangalore",
    role: "Business Development Associate",
    package: "3.5 LPA",
    status: "Dropped",
  },
  {
    id: 3,
    name: "Anil B",
    company: "Concentrix",
    location: "Bangalore",
    role: "Technical Support",
    package: "4.5 LPA",
    status: "Paid",
  },
  {
    id: 4,
    name: "Sashi G",
    company: "Concentrix",
    location: "Bangalore",
    role: "Technical Support",
    package: "4.5 LPA",
    status: "6k Pending (18k)",
  },
  {
    id: 5,
    name: "Mateen D",
    company: "Wipro",
    location: "Pune",
    role: "Network Engineer",
    package: "3.5 LPA",
    status: "Pending",
  },
  {
    id: 6,
    name: "Shadil S",
    company: "Wipro",
    location: "Pune",
    role: "Network Engineer",
    package: "5 LPA",
    status: "Pending",
  },
  {
    id: 7,
    name: "Anmol Sapkal",
    company: "IAIL INNOVATION",
    location: "Remote/Bangalore",
    role: "Quality Control",
    package: "1.4 LPA",
    status: "Dropped",
  },
  {
    id: 8,
    name: "Ifla",
    company: "IAIL INNOVATION",
    location: "Remote/Bangalore",
    role: "Quality Control",
    package: "1.4 LPA",
    status: "Dropped",
  },
  {
    id: 9,
    name: "Abushema",
    company: "Startek - Zomato",
    location: "Remote/Bangalore",
    role: "Customer Support",
    package: "2.4 LPA",
    status: "Dropped",
  },
  {
    id: 10,
    name: "Heena",
    company: "Startek - Zomato",
    location: "Remote/Bangalore",
    role: "Customer Support",
    package: "2.4 LPA",
    status: "Dropped",
  },
  {
    id: 11,
    name: "Mir Ismaeel",
    company: "Startek - Zomato",
    location: "Remote/Bangalore",
    role: "Customer Support",
    package: "2.4 LPA",
    status: "Dropped",
  },
  {
    id: 12,
    name: "Simran Jamadar",
    company: "Startek - Zomato",
    location: "Remote/Bangalore",
    role: "Customer Support",
    package: "2.4 LPA",
    status: "Dropped",
  },
  {
    id: 13,
    name: "Sneha Mathad",
    company: "Jio Fibre",
    location: "Remote/Bangalore",
    role: "Customer Support",
    package: "2.4 LPA",
    status: "Paid",
  },
  {
    id: 14,
    name: "Raj Bable",
    company: "Jio Fibre",
    location: "Remote/Bangalore",
    role: "Customer Support",
    package: "2.4 LPA",
    status: "Pending",
  },
  {
    id: 15,
    name: "Sabeer",
    company: "Concentrix",
    location: "Bangalore",
    role: "Technical Support",
    package: "3.3 LPA",
    status: "10k Pending",
  },
  {
    id: 16,
    name: "Venkatesh",
    company: "IAIL INNOVATION",
    location: "Remote/Bangalore",
    role: "Claims",
    package: "14k",
    status: "Dropped",
  },
  {
    id: 17,
    name: "Dimple",
    company: "IAIL INNOVATION",
    location: "Remote/Bangalore",
    role: "Quality Control",
    package: "1.4 LPA",
    status: "Dropped",
  },
  {
    id: 18,
    name: "Sayeeda",
    company: "—",
    location: "Remote/Canada",
    role: "Customer Support",
    package: "41k",
    status: "5k Pending (25k)",
  },
  {
    id: 19,
    name: "Naziya",
    company: "—",
    location: "Remote/Canada",
    role: "Customer Support",
    package: "41k",
    status: "5k Pending (30k)",
  },
  {
    id: 20,
    name: "Simran Jamadar",
    company: "—",
    location: "Remote/Canada",
    role: "Customer Support",
    package: "41k",
    status: "Paid",
  },
  {
    id: 21,
    name: "Yasmeen",
    company: "IAIL INNOVATION",
    location: "Remote/Bangalore",
    role: "Claims",
    package: "14k",
    status: "Pending",
  },
];

export const partners: Partner[] = [
  {
    name: "Infosys",
    type: "Industry Partner",
    description:
      "Global technology and consulting organization offering opportunities across IT services, digital transformation, and technology-enabled business solutions.",
  },
  {
    name: "Tech Mahindra",
    type: "Industry Partner",
    description:
      "Technology and digital services organization with career opportunities across IT, telecommunications, customer experience, and enterprise solutions.",
  },
  {
    name: "Akamai",
    type: "Industry Partner",
    description:
      "Global cloud and cybersecurity technology company focused on edge computing, application security, and digital experiences.",
  },
  {
    name: "Prodapt",
    type: "Industry Partner",
    description:
      "Digital and IT services organization specializing in telecommunications, media, technology, and digital transformation solutions.",
  },
  {
    name: "AM Infoweb",
    type: "Industry Partner",
    description:
      "Technology and business solutions organization offering opportunities across IT, digital services, and business support functions.",
  },
  {
    name: "Zscaler",
    type: "Industry Partner",
    description:
      "Cloud security company focused on zero-trust security, secure internet access, and modern enterprise network protection.",
  },
  {
    name: "SonicWall",
    type: "Industry Partner",
    description:
      "Cybersecurity technology company providing network security, cloud security, secure access, and threat protection solutions.",
  },
  {
    name: "Check Point",
    type: "Industry Partner",
    description:
      "Cybersecurity organization specializing in network security, cloud security, endpoint protection, and threat prevention technologies.",
  },
  {
    name: "HCL",
    type: "Industry Partner",
    description:
      "Global technology organization providing IT services, engineering, digital transformation, infrastructure, and enterprise technology solutions.",
  },
  {
    name: "Citrix",
    type: "Industry Partner",
    description:
      "Technology organization focused on secure digital workspaces, application delivery, virtual applications, and remote work solutions.",
  },
  {
    name: "Swiggy",
    type: "Industry Partner",
    description:
      "Technology-driven consumer platform offering opportunities across technology, operations, customer experience, analytics, and business functions.",
  },
  {
    name: "Amazon",
    type: "Industry Partner",
    description:
      "Global technology and commerce organization with diverse career opportunities across technology, operations, customer service, logistics, and business functions.",
  },
  {
    name: "Randstad",
    type: "Industry Partner",
    description:
      "Global talent and human resources organization specializing in recruitment, workforce solutions, staffing, and career services.",
  },
  {
    name: "Wipro",
    type: "Industry Partner",
    description:
      "Global IT services and consulting organization providing technology, digital transformation, engineering, and business process solutions.",
  },
  {
    name: "Zomato",
    type: "Industry Partner",
    description:
      "Technology-enabled consumer platform with opportunities across technology, operations, customer support, analytics, and business functions.",
  },
  {
    name: "Accenture",
    type: "Industry Partner",
    description:
      "Global professional services organization providing consulting, technology, digital transformation, cloud, and business solutions.",
  },
  {
    name: "Startek",
    type: "Industry Partner",
    description:
      "Customer experience and business process services organization offering opportunities across customer support, operations, and technology-enabled services.",
  },
  {
    name: "Coforge",
    type: "Industry Partner",
    description:
      "Digital services and technology organization specializing in cloud, data, automation, enterprise applications, and digital transformation.",
  },
  {
    name: "Xevyte",
    type: "Industry Partner",
    description:
      "Technology and business services organization offering opportunities across digital solutions, IT services, and professional functions.",
  },
  {
    name: "Movate",
    type: "Industry Partner",
    description:
      "Digital technology and customer experience organization focused on digital services, customer experience, automation, and technology solutions.",
  },
  {
    name: "Concentrix",
    type: "Industry Partner",
    description:
      "Global customer experience and technology organization providing customer service, digital operations, analytics, and business process solutions.",
  },
  {
    name: "VOIS",
    type: "Industry Partner",
    description:
      "Technology and business services organization supporting digital, IT, analytics, operations, and enterprise technology functions.",
  },
];

export const reviews: Review[] = [
  {
    name: "Sonal Bhatia",
    company: "Capgemini",
    quote:
      "The mentorship and mock interviews were the difference-maker in my job search.",
    rating: 5,
  },
  {
    name: "Kunal Rao",
    company: "Accenture",
    quote:
      "Professional, practical, and extremely supportive throughout the process.",
    rating: 5,
  },
  {
    name: "Divya Menon",
    company: "IBM",
    quote:
      "I discovered the right role quickly because the institute knew exactly how to position me.",
    rating: 5,
  },
];
