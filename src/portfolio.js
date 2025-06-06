/* Change this file to get your personal Porfolio */

//SEO Related settings
const seo = {
  title: "Aishwarya's Portfolio",
  description:
    "Master's in Computer Science (Graduating May 2025) | 5+ Years of IT Experience | Web Developer | UX Researcher | Frontend Expert | Former Associate at Cognizant & Mphasis | Seeking Full-Time UI/UX Research Roles in 2025.",
  og: {
    title: "Aishwarya Kundur Portfolio",
    type: "website",
    url: "http://aishwaryakundur.com/",
  },
};

//Home Page
const greeting = {
  title: "Aishwarya Kundur",
  logo_name: "AKundur",
  subTitle:
    "CS Master’s Student (Graduating May 2025) | 5+ Years of Tech Experiences | UX Researcher & Designer| Web Developer | Seeking Full-Time UI/UX Research Roles in 2025.",
  resumeLink:
    "https://drive.google.com/file/d/183v91IcJlNcGBYp36fIaezYyOxG8fng7/view?usp=sharing",
  portfolio_repository: "",
  githubProfile: "https://github.com/AishwaryaCodes",
  aboutTitle: "About Me!",
  aboutMeCurrent:
    " Building AI-powered Apps | MSCS @Roosevelt | GirlsWhoCode | 4+ Yrs SDE & Creativity",
  aboutMeIntro: "Code Create Scale",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/aishwarya-kundur-3454a6207/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Github",
    title: "Github",
    link: "https://github.com/AishwaryaCodes",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  // {
  //   name: "YouTube",
  //   title: "YouTube",
  //   link: "https://www.youtube.com/@aish165_",
  //   fontAwesomeIcon: "fa-youtube",
  //   backgroundColor: "#FF0000",
  // },
  {
    name: "Gmail",
    title: "Gmail",
    link: "mailto:akundur17@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  // {
  //   name: "X-Twitter",
  //   title: "X-Twitter",
  //   link: "https://x.com/Akundur17",
  //   fontAwesomeIcon: "fa-x-twitter",
  //   backgroundColor: "#000000",
  // },
  // {
  //   name: "Facebook",
  //   title: "Facebook",
  //   link: "https://www.facebook.com/aish165.kundur.17",
  //   fontAwesomeIcon: "fa-facebook-f",
  //   backgroundColor: "#1877F2",
  // },
  // {
  //   name: "Instagram",
  //   title: "Instagram",
  //   link: "https://www.instagram.com/aish165_/?hl=en",
  //   fontAwesomeIcon: "fa-instagram",
  //   backgroundColor: "#E4405F",
  // },
];

const technologiesIcon = [
  {
    name: "HTML",
    title: "HTML",
    fontAwesomeIcon: "fa-html5",
  },
  {
    name: "CSS",
    title: "CSS",
    fontAwesomeIcon: "fa-css3-alt",
  },
  {
    name: "javaScript",
    title: "javaScript",
    fontAwesomeIcon: "fa-js",
  },
  {
    name: "ReactJS",
    title: "ReactJS",
    fontAwesomeIcon: "fa-react",
  },
  {
    name: "Angular",
    title: "Angular",
    fontAwesomeIcon: "fa-angular",
  },
  {
    name: "Bootstrap",
    title: "Bootstrap",
    fontAwesomeIcon: "fa-bootstrap",
  },
  {
    name: "JAVA",
    title: "JAVA",
    fontAwesomeIcon: "fa-java",
  },
  {
    name: "Python",
    title: "Python",
    fontAwesomeIcon: "fa-python",
  },
  {
    name: "Node",
    title: "Node",
    fontAwesomeIcon: "fa-node",
  },
  {
    name: "NPM",
    title: "NPM",
    fontAwesomeIcon: "fa-npm",
  },
  {
    name: "GIT",
    title: "GIT",
    fontAwesomeIcon: "fa-git",
  },
  {
    name: "GitHub",
    title: "GitHub",
    fontAwesomeIcon: "fa-github",
  },
  {
    name: "Docker",
    title: "Docker",
    fontAwesomeIcon: "fa-docker",
  },
  {
    name: "Figma",
    title: "Figma",
    fontAwesomeIcon: "fa-figma",
  },
  {
    name: "Linux",
    title: "Linux",
    fontAwesomeIcon: "fa-linux",
  },
  {
    name: "AWS",
    title: "AWS",
    fontAwesomeIcon: "fa-aws",
  },
  {
    name: "Slack",
    title: "Slack",
    fontAwesomeIcon: "fa-slack",
  },
  {
    name: "Confluence",
    title: "Confluence",
    fontAwesomeIcon: "fa-confluence",
  },
];

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/akundur/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/akundur17",
    },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/akundur_17",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      uniLogo: "./uniImg.jpg",
      title: "Roosevelt University, Chicago, Illinois",
      subtitle: "M.S. in Computer Science.",
      logo_path: "iu_logo.png",
      alt_name: "Roosevelt University",
      duration: "2024 - Present",
      descriptions: [
        "Relevant Coursework: CST 408 Advanced Algorithms, CST 467 Web-Based Databases, CST 421 Data Mining, CST 457 System Programming, and CST 411 Intelligent Systems.",
      ],
      website_link: "https://www.roosevelt.edu/",
    },
    {
      uniLogo: "./uniZeal.png",
      title: "Zeal College of Engineering and Research, Pune, India",
      subtitle: "B.E. in Computer Science.",
      logo_path: "iiitk_logo.png",
      alt_name: "ZCOER, Pune",
      duration: "2014 - 2018",
      descriptions: [
        "Relevant Coursework: Object-Oriented Programming, Operating System, Database Management System, Data Structure",
      ],
      website_link: "https://zcoer.in/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    {
      title: "Deep Learning",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link: "",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Azure Data Engineer Associate",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.credly.com/badges/2768f3ed-7379-4d9b-b570-ff99a99f91d6/linked_in_profile",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Azure Fundamentals",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.credly.com/badges/f1608270-0b59-4c96-880e-ef7d775eca24/linked_in_profile",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Professional Experience",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Programmer Analyst at Cognizant Technology Solutions",
          company: "Ernst and Young (EY) Auditing website",
          company_url:
            "https://www.ey.com/en_us/services/consulting/virtual-internal-auditor?WT.mc_id=10682535&AA.tsrc=paidsearch&msclkid=cb44e396ba8d186b779f8518046fc826",
          duration: "DEC 2021 - NOV 2023",
          location: "INDIA",
          logo: "./cogni.jpeg",
          roledescription: [
            "Designed and developed new features for embedded applications and websites, enhancing customer experience and optimizing the existing code base.",
            "Implemented and validated RESTful APIs using Redux, Node.js, and JSON/XML for efficient front-end and back-end communication, improving response time by 20%.",
            "Led a team of 3 junior developers and 2 interns, trained them in Agile and SDLC practices, and collaborated with stakeholders, resulting in a 10% boost in project delivery speed.",
          ],
          skills: "React.JS | Redux | Node.JS | SQL",
          color: "#fc1f20",
        },

        {
          title: "Associate Software Developer at Mphasis Limited Company",
          company: "Bank of Queensland (BoQ) Banking Application",
          company_url: "https://www.boq.com.au/",
          duration: "FEB 2019 - DEC 2021",
          location: "INDIA",
          logo: "./M1.jpg",
          roledescription: [
            "Built and optimized system architecture for SPAs and landing pages using React JS, JavaScript, HTML, and CSS, delivering high-quality responsive websites from Figma wireframes.",
            "Developed server-side logic and integrated with front-end components, improving data processing efficiency by 20%, and optimized database schemas and queries, reducing response times by 15%.",
            "Delivered reusable, error-free code, collaborated with QA testers to debug and minimize bugs, and consistently completed assignments on time, enhancing overall application performance.",
          ],
          skills: "HTML | CSS | JavaScript | React.JS",
          color: "#fc1f20",
        },

        {
          title: "Part-time: Student Ambassador",
          company: "Roosevelt University, Office of Admissions",
          company_url: "https://www.roosevelt.edu/",
          duration: "April 2024 - Present",
          location: "CHICAGO",
          logo: "./uniImg.jpg",
          roledescription: [
            "Facilitated the admissions process and led campus tours at Roosevelt University, providing guidance to prospective students, addressing inquiries, and showcasing academic and student life opportunities.",
          ],
          skills:
            "Communication Skills | Leadership | Public Speaking | Problem-Solving",
          color: "#9b1578",
        },
      ],
    },
  ],
};

const volunteership = {
  title: "Community Involvement",
  sections: [
    {
      volunteers: [
        {
          volunteerTitle: "Volunteered at Greater Chicago Food Depository,",
          location: "McCormick Place Convention Center.",
          description:
            "👉🏻 Volunteeredat at the Greater Chicago Food Depository and McCormick Place Convention Center for the Food Rescue event, helping address food insecurity in the community",
        },
        {
          volunteerTitle: "Student Volunteer at Laker Union Club,",
          location: "Roosevelt University Chicago Campus.",
          description:
            "👉🏻 Volunteered at the Laker Union Club, Roosevelt University, making no-sew fleece blankets for those in need.",
        },
        {
          volunteerTitle: "Programmer Chair at Girls Who Code,",
          location: "Roosevelt University Chicago Campus.",
          description:
            "👉🏻 As a Programming Chair at Girls Who Code, I manage events, budgets, volunteers, and marketing.",
        },
      ],
    },
  ],
};

// Achievements
const achievements = {
  title: "Key Achievements",
  descriptions: [
    "Received appreciation from EY client for successfully developing web app components in the EY application (2022).",
    "Received Mphasis Summit Individual Award and Mphasis Value Awards from the senior manager (2019).",
  ],
};

// Participations
const participations = {
  title: "Event Participations",
  descriptions: [
    "Participated in academic events like Modal making competitions, Zeal Nirmaan, and Sinhgad Karandak.(India - 2015).",
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Academic Publications",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "",
      name:
        "Prevention and Detection of Cooperative Gray Hole Attack in Mobile Network.",
      createdAt: "2018-04-04T00:00:00Z",
      description: "Paper published in ijircce 2018",
      url:
        "https://ijircce.com/admin/main/storage/app/pdf/Fz9Di8DFuUtqubvnM7oMnyG90eFNRhgMv5DMJ3FD.pdf",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Get in Touch!",
    profile_image_path: "",
    description: [
      "Feel free to reach out for collaborations, projects, or just to say hello!",
      "I'd love to hear from you! Reach me at: ",
    ],
  },
};

export {
  seo,
  greeting,
  socialMediaLinks,
  technologiesIcon,
  competitiveSites,
  degrees,
  certifications,
  experience,
  volunteership,
  achievements,
  participations,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
