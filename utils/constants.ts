
// utils/constants.ts
export const personalInfo = {
    name: "Dhanusha Nandakumar",
    title: "Software Engineer",
    email: "dhanudhanusha99@gmail.com",
    phone: "+91 8129943194",
    location: "Kochi, Kerala",
    bio: "Software engineer with 3 years of experience specializing in React.js, Next.js, and Node.js. Passionate about building performant and user-friendly web applications with clean code practices.",
    about: `I'm a software engineer with 3 years of professional experience in web development. 
            My expertise lies in building responsive and interactive web applications using React.js, Next.js, and Node.js.
            I enjoy solving complex problems and creating intuitive user experiences. My approach to development
            focuses on writing clean, maintainable code that delivers exceptional performance.`,
    resumeLink: "/resume.pdf",
  };
  
  export const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/DhanushaNandakumar26",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dhanusha-nandakumar/",
      icon: "linkedin",
    },
    {
      name: "Twitter",
      url: "https://x.com/Dhanusha_Dhanu_",
      icon: "twitter",
    },
    {
      name: "Medium",
      url: "https://medium.com/@dhanudhanusha99",
      icon: "medium",
    },
  ];
  
// utils/constants.js
export const projects = [
  {
    id: 1,
    title: "Cloud Service Automation Platform",
    description: "A centralized dashboard providing comprehensive oversight of AWS resources with real-time monitoring of usage, performance metrics, and cost analytics. Features an intuitive interface that simplifies resource management and enhances operational visibility across the organization.",
    technologies: ["React", "TypeScript", "Node.js", "MySQL", "AWS", "Material UI", "Joy UI", "React Query", "GitLab" ],
    featured: true,
  },
  {
    id: 2,
    title: "Furniture Order Management System",
    description: "An advanced web platform that streamlines furniture inventory management with real-time tracking capabilities. The system facilitates seamless product browsing, order processing with DocuSign integration, and inventory updates with comprehensive analytics dashboards for business intelligence.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Query", "Redux Toolkit", "Bitbucket"],
    featured: true,
  },
  {
    id: 3,
    title: "Edge Computing Management System",
    description: "A sophisticated solution designed to optimize network connectivity and manage industrial data streams. The platform empowers organizations with advanced network optimization tools and seamless data flow management for high-reliability environments requiring consistent connectivity.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "GitHub Actions", "Memoization", "Responsive Design", "Code Optimization"],
    featured: true,
  },
  {
    id: 4,
    title: "Certification Management Portal",
    description: "A comprehensive platform enabling professionals to showcase their certifications and digital badges. The system provides secure credential management, profile sharing capabilities, and verification services for enhanced professional visibility within organizations.",
    technologies: ["React.js", "CSS", "Redux", "GitHub", "Responsive Design"],
    featured: false,
  },
  {
    id: 5,
    title: "Utility Management & Payment Platform",
    description: "A full-stack application that revolutionizes utility management for residential complexes.A web-based application developed in React js as front end and Node and mySQL as backend. This project mainly aims to support apartments for their utility management and bill payment. Users can manage utility bills like electricity, water, Maintenance etc. ",
    technologies: ["React.js", "Node.js", "MySQL", "REST API", "ORM", "JavaScript", "Postman", "Git", "Chrome DevTools"],
    featured: true,
  },
  {
    id: 6,
    title: "Recipe Finder",
    description: "An academic project leveraging Deep Learning with Faster RCNN to identify vegetables and suggest recipes. The system employs computer vision to analyze available ingredients and provide recipe recommendations for healthier meal planning based on what's available in the kitchen.",
    technologies: ["Python", "Faster RCNN", "Image Recognition", "HTML/CSS"],
    featured: false,
  },
  {
    id: 7,
    title: "Care and Cure",
    description: "An academic healthcare platform connecting patients with medical services, facilitating remote consultations, and coordinating blood donation efforts. The system enables communication between healthcare providers and patients while supporting donation requests for those in need.",
    technologies: ["Node.js", "MySQL", "JavaScript", "HTML/CSS", "RESTful APIs"],
    featured: false,
  },
  {
    id: 8,
    title: "Portfolio Showcase Solution",
    description: "A portfolio platform developed for a client to effectively showcase professional work, skills, and achievements. The fully responsive design delivers an excellent user experience across all devices with optimized performance and enhanced visual presentation.",
    technologies: ["React", "CSS", "JavaScript", "Responsive Design", "Performance Optimization"],
    featured: false,
  }
];
  
export const education = [
  {
    id: 1,
    degree: "Masters of Computer Applications",
    institution: "Mar Athanasius College of Engineering",
    location: "Kothamangalam, Ernakulam",
    duration: "2020 - 2022",
    description: "Completed an advanced program with a focus on software engineering, web development, and problem-solving skills, graduating with honors.",
  },
  {
    id: 2,
    degree: "Bachelors of Computer Applications",
    institution: "Mar Dionysius College",
    location: "Pazhanji, Thrissur",
    duration: "2017-2020",
    description: "Developed a strong foundation in computer science, programming, and application development through a comprehensive undergraduate curriculum.",
  },
];
  
  export const skills = {
    technical: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MySQL" },           // Common relational DB alongside SQL
      { name: "MongoDB" },
      { name: "SQL" },
      { name: "HTML5/CSS3" },
      { name: "SCSS/Sass" },
      { name: "RESTful APIs" },
      { name: "Git/GitHub" },
      { name: "Redux" },           // Common in React projects
      { name: "Bootstrap" },   
      { name: "Tailwind CSS" },
      { name: "Material UI"}   
    ],
    soft: [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Time Management",
      "Adaptability",
      "Critical Thinking",
    ],
    tools: [
      "VS Code",
      "Postman",
      "Figma",
      "AWS",
      "JIRA",
      "Bitbucket",
      "Gitlab",
      "NPM/Yarn",
      "DBeaver",
    ],
  };
  
  export const experiences = [
    {
      id: 1,
      position: "Software Engineer",
      company: "Pumex Infotech Pvt. Ltd.",
      location: "Kakkanad, Ernakulam",
      duration: "July 2022 - Present",
      responsibilities: [
        "Developed and maintained responsive web applications using React.js and Next.js",
        "Implemented state management solutions using Redux and Context API",
        "Collaborated with design and backend teams to deliver high-quality, performant features",
        "Optimized application performance and ensured cross-browser compatibility",
        "Participated in code reviews and mentored junior developers",
        "Built and maintained client websites and web applications",

      ],
    },
    {
      id: 2,
      position: "Software Engineer Intern",
      company: "Pumex Infotech Pvt. Ltd.",
      location: "Kakkanad, Ernakulam",
      duration: "April 2022 - July 2022",
      responsibilities: [
        "Implemented responsive designs using HTML, CSS, and JavaScript",
        "Developed frontend components with React.js",
        "Created RESTful API endpoints with Node.js and Express",
        "Participated in agile development processes",
      ],
    },
  ];