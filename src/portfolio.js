/* Change this file to get your personal Porfolio */

//SEO Related settings
const seo = {
  title: "Aishwarya's Portfolio",
  description:
    "Masters in Computer Science | Software Developer | Web Developer | Women in Tech | Seeking Spring 2025 Internship Opportunities.",
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
    "Masters in Computer Science | Software Developer | Web Developer | Women in Tech | Seeking Spring 2025 Internship Opportunities.",
  resumeLink:
    "https://docs.google.com/document/d/1qcSgaim5Lz0HuoNB8Ro49OG50oQUoIvZ/edit?usp=sharing&ouid=115128601061020080300&rtpof=true&sd=true",
  portfolio_repository: "",
  githubProfile: "https://github.com/AishwaryaCodes",
  aboutTitle: "About Me!",
  aboutMe: [
    "Hi there! I’m Aishwarya, an independent and driven professional. After earning my Bachelor’s degree in Computer Science, I began my career as a Software Developer with multinational companies, where I worked with clients from Australia and The United States, building and maintaining strong professional relationships over 05 years in India. ",
    "Currently, I am pursuing a Master’s degree in Computer Science, focusing on areas like Intelligent Systems, Advanced Algorithms, and Web-Base Databases. I am also enhancing my skills in Data Structures and Algorithms (DSA) while actively working on Machine Learning projects.",
  ],
};

const socialMediaLinks = [
  {
    name: "Github",
    title: "Github",
    link: "https://github.com/AishwaryaCodes",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/aishwarya-kundur-3454a6207/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "YouTube",
    title: "YouTube",
    link: "https://www.youtube.com/@aish165_",
    fontAwesomeIcon: "fa-youtube",
    backgroundColor: "#FF0000",
  },
  {
    name: "Gmail",
    title: "Gmail",
    link: "mailto:akundur17@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "X-Twitter",
    title: "X-Twitter",
    link: "https://x.com/Akundur17",
    fontAwesomeIcon: "fa-x-twitter",
    backgroundColor: "#000000",
  },
  {
    name: "Facebook",
    title: "Facebook",
    link: "https://www.facebook.com/aish165.kundur.17",
    fontAwesomeIcon: "fa-facebook-f",
    backgroundColor: "#1877F2",
  },
  {
    name: "Instagram",
    title: "Instagram",
    link: "https://www.instagram.com/aish165_/?hl=en",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
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
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/profile/akundur17",
    // },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/akundur_17",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Roosevelt University, Chicago, Illinois",
      subtitle: "M.S. in Computer Science.",
      logo_path: "iu_logo.png",
      alt_name: "Roosevelt University",
      duration: "2024 - Present",
      descriptions: [
        "I studied CST 408 Advanced Algorithms, CST 467 Web-Based Databases, and CST 449 Advanced Architecture, Big Data in my first semester.",
        "Currently, I am enrolled in CST 421 Data Mining, CST 457 System Programming, and CST 411 Intelligent Systems, with a focus on machine learning projects",
      ],
      website_link: "https://www.roosevelt.edu/",
    },
    {
      title: "Zeal College of Engineering and Research, Pune, India",
      subtitle: "B.E. in Computer Science.",
      logo_path: "iiitk_logo.png",
      alt_name: "ZCOER, Pune",
      duration: "2014 - 2018",
      descriptions: [
        "I have completed 04 year's of Bachelor's degree in Computer Science, where I studied fundamental of computer science, software engineering subjects",
        "like Data Structures, Algorithms, Database Management Systems, Operating Systems, Computer Architecture, and Artificial Intelligence.",
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
          title: "Part-time: Student Ambassador.",
          company: "Roosevelt University, Office of Admissions",
          company_url: "https://www.roosevelt.edu/",
          duration: "April 2024 - Present",
          location: "CHICAGO",
          roledescription: [
            "Facilitated the admissions process for prospective students by providing support and guidance, addressing inquiries, and assisting with application procedures at Roosevelt University's Office of Admissions.",
            "Led comprehensive campus tours at Roosevelt University's Chicago campus, showcasing facilities, sharing insights about student life, and highlighting academic opportunities to prospective students and their families.",
          ],
          color: "#9b1578",
        },
        {
          title: "Programmer Analyst at Cognizant Technology Solutions.",
          company: "Ernst and Young (EY) Auditing website",
          company_url:
            "https://www.ey.com/en_us/services/consulting/virtual-internal-auditor?WT.mc_id=10682535&AA.tsrc=paidsearch&msclkid=cb44e396ba8d186b779f8518046fc826",
          duration: "DEC 2021 - NOV 2023",
          location: "INDIA",
          roledescription: [
            "Designed and developed new features for a product that contained embedded applications and website, focusing on enhancing customer experience while maintaining and improving the existing code base.",
            "Implemented and programmed RESTful APIs using Redux, Node.js & parsed JSON/XML data to establish communication between front-end and back-end services. Validated REST APIs with Postman for performance and security and Managed dependencies with NPM/ Yarn, resulting in a 20% improvement in response time.",
            "Led & Managed a team of 3 junior developers and 2 interns, trained them in software development Life cycle and Agile methodologies & explain application overview enhancing their productivity",
            "Attended daily Scrum meetings to track progress, raise obstacles, address dependencies, problem solving, and discuss successes. Collaborated with stakeholders, co-workers, cross-functional teams, and customers for regular code reviews, internal and client demos, leading to a 10% increase in project delivery speed in an agile environment.",
          ],
          color: "#fc1f20",
        },

        {
          title: "Associate Software developer at Mphasis Limited Company.",
          company: "Bank of Queensland (BoQ) Banking Application",
          company_url: "https://www.boq.com.au/",
          duration: "FEB 2019 - DEC 2021",
          location: "INDIA",
          roledescription: [
            "Built and optimized the system architecture for dynamic single-page web applications (SPAs) and landing page templates using React JS, JavaScript, HTML, and CSS. Engineered accurate and exact designs UI/UX user experiences with high-quality responsive websites based on Figma wireframes",
            "Assisted in developing server-side logic and integrated server-side functionalities with front-end components to facilitate data exchange and user interaction, boosting data processing efficiency by 20%.",
            "Architected and supervised database schemas, upgraded queries, and executed CRUD operations using SQL and NoSQL databases, reducing query response times by 15%.",
            "Completed delegated assignments on time and delivered error-free code by using existing large models and built reusable quality code and components, Elevating application performance",
            "Associated with quality assurance software developers (QAs) / Testers to focus on defects and debug issues, sharpening application user interface quality and minimizing bug occurrence.",
          ],
          color: "#fc1f20",
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
            "Volunteered at the Greater Chicago Food Depository's Food Rescue event, collecting high-quality food for distribution to alleviate community food insecurity.",
        },
        {
          volunteerTitle: "Student Volunteer at Laker Union Club,",
          location: "Roosevelt University Chicago Campus.",
          description:
            "Volunteered at the Laker Union Club, where I contributed to the creation of no-sew fleece blankets for a community service project.",
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
      "I specialize in Software Development, Web Development, Machine Learning, Python, React JS, and Open-Source Projects.",
      "I'm currently seeking Spring 2025 internship opportunities in the USA. Let's connect, collaborate, or just chat, I'd love to hear from you!",
    ],
  },
  addressSection: {
    title: "Mailing Address",
    subtitle: "3445 S Rhodes Ave, Chicago, IL 60616, Apt - 0705",
    locality: "Chicago",
    country: "USA",
    region: "Chicago",
    postalCode: "60616",
    streetAddress: "S Rhodes Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/3445+S+Rhodes+Ave,+Chicago,+IL+60616/@41.8315204,-87.6153648,17z/data=!4m6!3m5!1s0x880e2bf3eb172319:0xdd1eb9f1b756430!8m2!3d41.8315204!4d-87.6127899!16s%2Fg%2F11c4r4mnm2?entry=ttu",
  },
  phoneSection: {
    title: "",
    subtitle: "",
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
