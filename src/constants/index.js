import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning Engineer",
    icon: backend,
  },
  {
    title: "Competitive Programmer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Data Scientist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Flask",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Power BI",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Portfolio",
    company_name: "React.js Developer",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Jan 2025 - March 2025",
    points: [
      "Built and maintained interactive web applications using React.js and modern web technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Reviewed and optimized code, following best practices to enhance performance and maintainability.",
    ],
  },
  {
    title: "Spam Vs Ham",
    company_name: "Spam",
    icon: git,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed a machine learning model to classify messages as spam or ham using Natural Language Processing (NLP) techniques.",
      "Preprocessed text data by removing stopwords, stemming, and vectorizing using TF-IDF and Count Vectorization.",
      "Implemented and compared multiple classification algorithms such as Naïve Bayes, Logistic Regression, and Random Forest.",
      "Evaluated model performance using precision, recall, F1-score, and confusion matrix to optimize accuracy.",
      "Deployed the model using Flask and integrated it into a user-friendly web interface for real-time spam detection.",
    ],
    
  },
  {
    title: "Competitive Programmer",
    company_name: "C++",
    icon: git,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Actively practicing and competing in coding contests on platforms like CodeChef, LeetCode, and Codeforces.",
      "Achieved Division 2 status on CodeChef, consistently solving problems in rated contests.",
      "Strong problem-solving skills with a focus on Data Structures and Algorithms, including Graphs, DP, and Binary Search.",
      "Optimizing solutions for efficiency, participating in virtual contests, and upskilling through regular practice.",
      "Engaging with the competitive programming community, sharing solutions, and learning new techniques to improve ranking.",
    ],
    
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Spam vs Ham",
    description:
      "Web application that classifies messages as spam or ham using machine learning algorithms, providing real-time detection and analysis.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "Sckit-learn",
        color: "pink-text-gradient",
      },
    ],
    image: meta,
    source_code_link: "https://github.com/Hadar01",
  },
  {
    name: "Food Recommender System",
    description:
      "Model that recommends food recipes based on user preferences, dietary restrictions, and nutritional requirements.",
    tags: [
      {
        name: "tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "keras",
        color: "green-text-gradient",
      },
      {
        name: "numpy",
        color: "pink-text-gradient",
      },
    ],
    image: starbucks,
    source_code_link: "https://github.com/Hadar01",
  },

  {
    name: "Portfolio",
    description:
      "Personal portfolio website that showcases projects, skills, and experience, and provides a platform for users to connect and collaborate.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tesla,
    source_code_link: "https://github.com/Hadar01",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
