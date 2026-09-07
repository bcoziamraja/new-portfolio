export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  subRole: string;
  tagline: string;
  college: string;
  degree: string;
  specialization: string;
  year: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  status: string;
  resumeUrl: string;
  phone?: string;
  resumePdf?: string;
  resumeImage?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: 'ALL' | 'AI / ML' | 'DEEP LEARNING' | 'WEB' | 'DATA SCIENCE';
  shortDesc: string;
  fullDesc: string;
  problemSolved: string;
  technologies: string[];
  keyFeatures: string[];
  metrics: string;
  githubUrl: string;
  liveDemoUrl: string;
  image: string;
}

export interface CertificateItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  description: string;
  credentialId: string;
  verifyUrl: string;
  badge: string;
  skillsCovered: string[];
  image?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  currentStatus?: string;
  score?: string;
  highlights: string[];
}

export interface InternshipDocument {
  id: string;
  title: string;
  type: string;
  date: string;
  image: string;
  description: string;
}

export interface InternshipItem {
  id: string;
  organization: string;
  program: string;
  role: string;
  year: string;
  duration: string;
  focusArea: string;
  studentId: string;
  status: string;
  overview: string;
  skillsGained: string[];
  documents: InternshipDocument[];
}

export interface HobbyItem {
  name: string;
  icon: string;
  tagline: string;
  description: string;
}

export const portfolioData = {
  personalInfo: {
    name: "RAJKUMAR ERUVAKA",
    firstName: "RAJKUMAR",
    lastName: "ERUVAKA",
    role: "AI / ML ENGINEER",
    subRole: "COMPUTER SCIENCE • DATA SCIENCE • GRAPHIC DESIGN",
    tagline:
      "Passionate AI / ML Engineer specializing in Deep Learning, Computer Vision, and Creative Technology. Transforming ideas and complex data into practical, high-impact intelligent systems.",
    college: "JNTU Manthani",
    degree: "B.Tech (Under Graduation)",
    specialization: "Computer Science, AI / ML",
    year: "B.Tech (Joined 2023)",
    location: "Manthani, Peddapalli, Telangana, India",
    email: "rajkumareruvaka.e26@gmail.com",
    github: "https://github.com/bcoziamraja",
    linkedin: "https://www.linkedin.com/in/rajkumar-eruvaka-934571381?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    phone: "(+91) 9959510782",
    status: "Open for AI / ML, Data Science & Engineering Roles",
    resumeUrl: "/Rajkumar_Eruvaka_Resume.pdf",
    resumePdf: "/Rajkumar_Eruvaka_Resume.pdf",
    resumeImage: "/Rajkumar_Eruvaka_Resume.png",
  } as PersonalInfo,

  heroBadges: [
    { label: "AI / ML", color: "border-black/15 bg-white/80" },
    { label: "DEVELOPER", color: "border-black/15 bg-white/80" },
    { label: "DATA SCIENCE", color: "border-black/15 bg-white/80" },
    { label: "CREATIVE DESIGNER", color: "border-black/15 bg-white/80" },
  ],

  about: {
    headline: "WHO AM I?",
    story:
      "I’m Rajkumar Eruvaka, a B.Tech undergraduate passionate about Computer Science, Data Science, Machine Learning, and Graphic Design. I enjoy transforming ideas into practical solutions through programming, data-driven thinking, and creative design. I’m constantly exploring emerging technologies, solving challenging problems, and working on projects that strengthen both my technical and creative skills. My goal is to continuously learn, innovate, and build meaningful solutions that create real-world impact.",
    metrics: [
      { label: "UNIVERSITY", value: "JNTU", suffix: "Manthani" },
      { label: "INTERNSHIP", value: "CodeAlpha", suffix: "Data Analytics" },
      { label: "SSC BOARD", value: "10.0", suffix: "GPA (2021)" },
      { label: "INTERMEDIATE", value: "85.0%", suffix: "Marks (2023)" },
    ],
  },

  internship: {
    id: "codealpha-data-analytics",
    organization: "CodeAlpha",
    program: "Virtual Internship Program in Data Analytics",
    role: "Data Analytics Intern",
    year: "2026",
    duration: "1st June 2026 — 30th June 2026",
    focusArea: "Data Analytics, Data Visualization & Python",
    studentId: "CA/DF1/90534",
    status: "Successfully Completed",
    overview:
      "Successfully participated in and completed the intensive Data Analytics Virtual Internship at CodeAlpha. Developed practical, hands-on competence in end-to-end data preprocessing, exploratory data analysis, visual storytelling, and deriving actionable analytical insights. Awarded an official Certificate of Completion and Letter of Recommendation highlighting high productivity, analytical acumen, and collaborative adaptability.",
    skillsGained: [
      "Data Analysis",
      "Data Preprocessing",
      "Data Visualization",
      "Python",
      "Problem Solving",
      "Data-Driven Insights",
    ],
    documents: [
      {
        id: "completion-cert",
        title: "Certificate of Completion",
        type: "Verified Certificate",
        date: "1st July 2026",
        image: "/internship/codealpha_completion_certificate.jpg",
        description:
          "Official Certificate of Completion presented to Eruvaka Rajkumar (Student ID: CA/DF1/90534) for active, dedicated participation in the Data Analytics Internship at CodeAlpha, recognized by MSME, Government of India.",
      },
      {
        id: "recommendation-letter",
        title: "Letter of Recommendation",
        type: "Executive Endorsement",
        date: "1st July 2026",
        image: "/internship/codealpha_recommendation_letter.jpg",
        description:
          "Official Letter of Recommendation from CodeAlpha Founder & CEO certifying excellent analytical skills, rapid technology adaptation, high productivity, and strong team collaboration.",
      },
      {
        id: "offer-letter",
        title: "Internship Offer Letter",
        type: "Official Selection",
        date: "22nd May 2026",
        image: "/internship/codealpha_offer_letter.jpg",
        description:
          "Official selection and welcome letter confirming appointment for the Data Analytics Internship Program effective 1st June 2026 to 30th June 2026.",
      },
    ],
  } as InternshipItem,

  skillsCategories: [
    {
      title: "PROGRAMMING",
      description: "Core programming languages for algorithmic problem solving and software design.",
      skills: [
        { name: "Python", level: 95, highlight: true },
        { name: "Java", level: 85 },
        { name: "C", level: 82 },
        { name: "C++", level: 85, highlight: true },
        { name: "JavaScript", level: 90, highlight: true },
      ],
    },
    {
      title: "AI / MACHINE LEARNING",
      description: "Applied artificial intelligence, neural networks, predictive modeling, and data science.",
      skills: [
        { name: "Machine Learning", level: 92, highlight: true },
        { name: "Deep Learning", level: 90, highlight: true },
        { name: "Data Science", level: 90, highlight: true },
        { name: "Data Analytics", level: 92, highlight: true },
        { name: "Computer Vision", level: 88, highlight: true },
        { name: "Generative AI", level: 86, highlight: true },
      ],
    },
    {
      title: "FRAMEWORKS & LIBRARIES",
      description: "State-of-the-art libraries for training, evaluating, and deploying machine learning models.",
      skills: [
        { name: "TensorFlow", level: 88, highlight: true },
        { name: "PyTorch", level: 90, highlight: true },
        { name: "Scikit-learn", level: 92 },
        { name: "Pandas", level: 95, highlight: true },
        { name: "NumPy", level: 95, highlight: true },
        { name: "OpenCV", level: 86 },
      ],
    },
    {
      title: "WEB & CREATIVE DESIGN",
      description: "Frontend development, responsive UI engineering, and creative graphic design.",
      skills: [
        { name: "React", level: 90, highlight: true },
        { name: "HTML5 / CSS3", level: 95 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Graphic Design", level: 92, highlight: true },
        { name: "Digital Content Creation", level: 90, highlight: true },
        { name: "Video / Photo Editing", level: 88, highlight: true },
      ],
    },
    {
      title: "TOOLS & DATABASES",
      description: "Productivity, version control, model experimentation, and data storage.",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 92, highlight: true },
        { name: "VS Code", level: 95 },
        { name: "Jupyter Notebook", level: 95, highlight: true },
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 82 },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "designify",
      number: "01",
      title: "Designify — AI Interior Design & Virtual Room Staging",
      category: "AI / ML",
      shortDesc: "Generative AI platform that transforms photos of empty, unfurnished rooms into fully furnished, photorealistic modern interior designs using diffusion models and neural prompt conditioning.",
      fullDesc: "Designify is an intelligent generative AI platform engineered for interior styling and virtual room staging. When a user uploads a photo of an empty, bare room, the application leverages PyTorch and HuggingFace Diffusers pipelines with custom prompt guidance to generate photorealistic, fully furnished modern interior spaces complete with designer furniture, ambient lighting, architectural textures, and harmonious decor.",
      problemSolved: "Eliminates the heavy time and financial costs of physical interior staging and complex 3D rendering by transforming bare room photographs into styled architectural concepts in seconds.",
      technologies: ["Python", "PyTorch", "Stable Diffusion", "HuggingFace Diffusers", "Flask", "Computer Vision", "HTML5 / CSS3"],
      keyFeatures: [
        "Empty-to-furnished neural transformation pipeline using Stable Diffusion",
        "Asynchronous Flask REST API with FP16 GPU tensor acceleration for fast image generation",
        "Automated room layout and interior style conditioning via prompt synthesis",
        "Interactive web dashboard with before/after visual inspection and download"
      ],
      metrics: "Virtual Staging in Seconds | Open Source",
      githubUrl: "https://github.com/bcoziamraja/designify",
      liveDemoUrl: "https://github.com/bcoziamraja/designify",
      image: "/projects/designify.jpg"
    },
    {
      id: "online-resume-builder",
      number: "02",
      title: "Online Resume Builder",
      category: "WEB",
      shortDesc: "Interactive web application empowering students and developers to craft elegant, professional, ATS-friendly resumes with real-time layout rendering.",
      fullDesc: "An intuitive online resume generation tool designed to help job seekers produce clean, beautifully formatted, two-column professional resumes. Users can input their achievements, education, internships, technical projects, and skills with instant real-time visual preview and one-click export.",
      problemSolved: "Eliminates formatting headaches and disjointed Word templates by enforcing balanced editorial typography, structured sections, and clear visual hierarchy.",
      technologies: ["JavaScript", "HTML5", "CSS3 / Modern UI", "Web Engineering", "PDF Export"],
      keyFeatures: [
        "Structured data inputs for Education, Experience, Projects, and Skills",
        "Live two-column editorial layout preview with modern dark green accents",
        "Instant real-time rendering of achievements and technical competencies",
        "Clean export functionality for submission-ready professional resumes"
      ],
      metrics: "100% Responsive | Real-Time Layout",
      githubUrl: "https://github.com/bcoziamraja",
      liveDemoUrl: "https://github.com/bcoziamraja",
      image: "/projects/online_resume_builder.jpg"
    }
  ] as ProjectItem[],

  certifications: [
    {
      id: "ibm-getting-started-ai",
      name: "Getting Started with Artificial Intelligence",
      issuer: "IBM SkillsBuild",
      date: "Aug 13, 2026",
      description: "Recognized by IBM for professional excellence and mastery of core Artificial Intelligence foundations, machine intelligence concepts, and real-world AI applications.",
      credentialId: "55432276-d836-46e3-81f6-480debc9146d",
      verifyUrl: "https://www.credly.com/badges/55432276-d836-46e3-81f6-480debc9146d",
      badge: "IBM SkillsBuild",
      image: "/certificates/ibm_getting_started_ai.jpg",
      skillsCovered: ["Artificial Intelligence", "Cognitive Computing", "Machine Learning Basics", "AI Ethics", "IBM SkillsBuild"]
    },
    {
      id: "ibm-python-data-science",
      name: "Python for Data Science",
      issuer: "IBM Skills Network",
      date: "Jun 23, 2026",
      description: "Satisfied comprehensive requirements for Python for Data Science from IBM. Mastered core Python programming, data structures, scientific computing with Pandas and NumPy, and data preprocessing.",
      credentialId: "12be3503-f9cd-4f8d-ad84-0c54123476c1",
      verifyUrl: "https://www.credly.com/badges/12be3503-f9cd-4f8d-ad84-0c54123476c1",
      badge: "IBM Verified",
      image: "/certificates/ibm_python_data_science.jpg",
      skillsCovered: ["Python", "Data Science", "Pandas", "NumPy", "Data Preprocessing", "Algorithmic Analysis"]
    },
    {
      id: "hp-life-data-science",
      name: "Data Science & Analytics",
      issuer: "HP LIFE | HP Foundation",
      date: "Jun 1, 2026",
      description: "Completed the HP LIFE online course covering leading data science and analytics methodologies, tools, and examining the opportunities of data-driven business approaches.",
      credentialId: "c05ed343-cfb6-4d1d-be9f-385ca6a23c40",
      verifyUrl: "https://www.life-global.org",
      badge: "HP Foundation",
      image: "/certificates/hp_life_data_science_analytics.jpg",
      skillsCovered: ["Data Science", "Data Analytics", "Business Analytics", "Methodologies & Tools", "Data-Driven Strategy"]
    },
    {
      id: "anthropic-claude-101",
      name: "Claude 101",
      issuer: "Anthropic",
      date: "2026",
      description: "Official Certificate of Completion for Anthropic's Claude 101, mastering foundational prompt engineering, conversational AI capabilities, and generative LLM integration.",
      credentialId: "6qe3efv5tzku",
      verifyUrl: "https://anthropic.com",
      badge: "Anthropic Certified",
      image: "/certificates/anthropic_claude_101.jpg",
      skillsCovered: ["Generative AI", "Claude Architecture", "Prompt Engineering", "LLM Workflows", "AI Systems"]
    },
    {
      id: "edunet-sap-emerging-tech",
      name: "Emerging Technologies (AI, Deep Learning & SAP BTP)",
      issuer: "Edunet Foundation & SAP (Supported by TASK)",
      date: "2025–2026",
      description: "Successfully completed advance training on Emerging Technologies (AI & ML, Deep Learning, Edge Computing, SAP Analytics Cloud, and SAP ABAP on BTP) under Code Unnati Program, a CSR initiative of SAP and implemented by Edunet Foundation at JNTUH UCE Manthani.",
      credentialId: "CU26_33149",
      verifyUrl: "https://edunetfoundation.org",
      badge: "SAP • Edunet • TASK",
      image: "/certificates/sap_edunet_emerging_tech.jpg",
      skillsCovered: ["Artificial Intelligence", "Deep Learning", "Edge Computing", "SAP Analytics Cloud", "SAP BTP / ABAP", "Machine Learning"]
    },
    {
      id: "codealpha-data-analytics-cert",
      name: "Data Analytics Virtual Internship Program",
      issuer: "CodeAlpha (Govt. of India MSME Recognized)",
      date: "July 1, 2026",
      description: "Awarded for active, dedicated participation in the Data Analytics Virtual Internship. Validated proficiency in data analysis, data preprocessing, visualization, and Python-driven insights.",
      credentialId: "CA/DF1/90534",
      verifyUrl: "https://codealpha.tech",
      badge: "MSME Recognized",
      image: "/certificates/codealpha_data_analytics.jpg",
      skillsCovered: ["Data Analytics", "Data Preprocessing", "Data Visualization", "Python", "Data Insights", "Problem Solving"]
    }
  ] as CertificateItem[],

  education: [
    {
      id: "btech-jntu",
      degree: "B.Tech (Under Graduation)",
      field: "Computer Science, AI & Machine Learning",
      institution: "JNTU Manthani (Jawaharlal Nehru Technological University College of Engineering Manthani)",
      location: "Manthani, Peddapalli, Telangana, India",
      period: "2023 — 2027",
      currentStatus: "B.Tech Undergraduate (CGPA: 7.47)",
      score: "CGPA 7.47",
      highlights: [
        "Pursuing deep studies in Computer Science, Data Science, Machine Learning, and Graphic Design.",
        "Transforming theoretical ideas into practical software applications and data-driven solutions.",
        "Constantly exploring emerging AI technologies and solving challenging computational problems."
      ]
    },
    {
      id: "intermediate",
      degree: "Intermediate",
      field: "MPC (Mathematics, Physics, Chemistry)",
      institution: "Intermediate Board of Telangana",
      location: "Telangana, India",
      period: "Passed 2023",
      score: "85.0%",
      highlights: [
        "Successfully graduated from Intermediate Board of Telangana in 2023 with 85.0% marks.",
        "Strong quantitative and analytical foundation in higher mathematics, analytical calculus, and sciences."
      ]
    },
    {
      id: "ssc",
      degree: "Secondary School Certificate (SSC / 10th)",
      field: "General Academic Sciences & Mathematics",
      institution: "SSC Board of Telangana",
      location: "Telangana, India",
      period: "Passed 2021",
      score: "10.0 GPA (Perfect Score)",
      highlights: [
        "Graduated from SSC Board of Telangana in 2021 with a perfect 10.0 GPA distinction.",
        "Demonstrated outstanding academic achievement across mathematics, sciences, and foundational studies."
      ]
    }
  ] as EducationItem[],

  hobbies: [
    {
      name: "Watching Rom-Com Movies",
      icon: "Film",
      tagline: "Cinema & Stories",
      description: "Unwinding with romantic comedies and cinematic storytelling that blend humor, emotion, and relatable human connections."
    },
    {
      name: "Creating Digital Content",
      icon: "Video",
      tagline: "Media & Creativity",
      description: "Brainstorming and crafting engaging digital content, social graphics, and creative multimedia assets that resonate with audiences."
    },
    {
      name: "Video & Photo Editing",
      icon: "Sliders",
      tagline: "Visual Polishing",
      description: "Fine-tuning visual rhythms, color grading, motion pacing, and aesthetic details across modern creative editing suites."
    },
    {
      name: "Graphic Design",
      icon: "Palette",
      tagline: "Aesthetic Layouts",
      description: "Designing sleek visual identities, typography experiments, and modern UI mockups at the intersection of tech and art."
    },
    {
      name: "Exploring Emerging AI",
      icon: "Sparkles",
      tagline: "Continuous Learning",
      description: "Experimenting with next-gen models, AI tooling, and creative machine intelligence applications to solve real-world problems."
    }
  ] as HobbyItem[],

  navLinks: [
    { label: "HOME", href: "#hero" },
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CERTIFICATES", href: "#certificates" },
    { label: "EDUCATION", href: "#education" },
    { label: "HOBBIES", href: "#hobbies" },
    { label: "CONTACT", href: "#contact" },
  ]
};
