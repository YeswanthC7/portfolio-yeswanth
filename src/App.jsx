import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Github, Download, ArrowRight } from 'lucide-react';

// --- Data extracted from resume & images ---

const experienceData = [
  {
    company: 'Synchronoss Technologies',
    role: 'Software QA Engineer',
    dates: 'July 2022 – July 2023',
    description: 'Led backend automation testing for Verizon Cloud application APIs using Maven, TestNG, and Shell scripting, improving release cycle stability. Containerized the automation test suite using Docker to reduce environment-related failures. Collaborated with the Machine Learning team on testing analytics-driven features, contributing to data refinement processes that improved feature performance and boosted model result accuracy by 15%.'
  },
  {
    company: 'TCR Innovation',
    role: 'Cloud QA & DevOps Intern',
    dates: 'January 2021 – July 2022',
    description: 'Authored Java/TestNG scripts in LocalStack to automate smoke tests for Lambda and API Gateway. Assisted in designing Terraform modules to provision temporary QA environments and enhanced a Node.js ingestion service by incorporating CloudWatch metrics and resolving bugs. Monitored Lambdas with Datadog APM to flag and address a memory spike.'
  },
  {
    company: 'Verzeo',
    role: 'Machine Learning Intern',
    dates: 'August 2021 – Dec 2021',
    description: 'Cleaned and prepared 50k customer reviews with Python, boosting model F1 score by 15%. Built a collaborative filtering recommender that increased click-through rates by 20% and developed an LSTM sentiment classifier (88% accuracy), deployed via a Flask REST API. Automated weekly data refresh and model retraining using cron jobs and Bash scripts.'
  },
  {
    company: 'Lets Grow More',
    role: 'Web Development Intern',
    dates: 'October 2021 – November 2021',
    description: 'Developed a responsive single-page website using HTML, CSS, and JavaScript. Built a React.js web app that fetched and displayed live data from a public API, implementing asynchronous calls and error handling. Deployed projects on GitHub Pages, maintaining clean, version-controlled repositories.'
  }
];

const projectData = [
  {
    title: 'LLM-Driven QA Test Authoring',
    dates: 'May 2025 - Present',
    tech: ['Python', 'Playwright', 'PyTest', 'GitHub Actions'],
    description: 'Prototyping a pipeline that turns user-story markdown into Playwright tests via cloud-LLM prompts and AST validation, targeting a 60% reduction in manual coding time. The CI pipeline regenerates tests, runs them across multiple browsers, and establishes dependable quality gates.',
    link: '#' // Add GitHub link here
  },
  {
    title: 'Vehicle Ranking System (Capstone)',
    dates: 'Jan 2025 - May 2025',
    tech: ['Python', 'Random Forest', 'Streamlit'],
    description: 'Designed and deployed a Smart Weighted Vehicle Ranking System on 8k used-car listings. The end-to-end pipeline cleans data, scores cars in real time, and allows users to set weights. Integrated SHAP explainers and outlier detection to flag overpriced listings and build user trust.',
    link: '#' // Add GitHub link here
  },
  {
    title: 'Traffic Sign Recognition',
    dates: 'January 2024 - May 2024',
    tech: ['Python', 'Random Forest', 'OpenCV', 'Applied ML'],
    description: 'Built a full preprocessing and augmentation pipeline for the German Traffic Sign dataset (~44k images, 43 classes). Trained multiple models and selected Random Forest (90% test accuracy, 0.90 validation) to classify signs, demonstrating robustness for driver-assistance systems.',
    link: '#' // Add GitHub link here
  }
];

const skillsData = [
  {
    category: 'Programming & Databases',
    skills: ['Go', 'Java', 'TypeScript', 'JavaScript', 'Python', 'SQL', 'MongoDB', 'MySQL', 'C', 'Kotlin', 'R']
  },
  {
    category: 'Frameworks & Interfaces',
    skills: ['Spring Boot', 'Django', 'Streamlit', 'PySpark']
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS (Lambda, ECS)', 'Azure', 'Docker', 'Kubernetes', 'Ansible', 'CI/CD', 'GitHub Actions', 'Datadog']
  },
  {
    category: 'Testing & QA',
    skills: ['Playwright', 'Selenium', 'TestNG', 'JUnit', 'Cucumber (BDD)', 'API Testing', 'Performance Testing', 'A/B Testing']
  },
  {
    category: 'Data Science & Misc',
    skills: ['KNIME', 'Tableau', 'Power BI', 'Git', 'Predictive Analytics', 'Prompt Engineering']
  }
];


const certificationsData = [
    {
        title: 'Classify Images with TensorFlow on Google Cloud',
        issuer: 'Google',
        date: 'Issued Jun 2025',
        skills: ['Machine Learning', 'TensorFlow', 'Vertex AI']
    },
    {
        title: 'Machine Learning Operations (MLOps) for Generative AI',
        issuer: 'Google Cloud',
        date: 'Issued Jun 2025',
        skills: ['MLOps', 'Generative AI']
    },
    {
        title: 'Academy Accreditation - Generative AI Fundamentals',
        issuer: 'Databricks',
        date: 'Issued May 2025',
        skills: ['Generative AI', 'Databricks']
    },
     {
        title: 'Academy Accreditation - Databricks Fundamentals',
        issuer: 'Databricks',
        date: 'Issued May 2025',
        skills: ['Databricks', 'Big Data']
    },
    {
        title: 'Data Science Tools',
        issuer: 'IBM',
        date: 'Issued May 2025',
        skills: ['Data Science', 'Python']
    },
    {
        title: 'Machine Learning',
        issuer: 'Duke University | Coursera',
        date: 'Issued Jun 2021',
        skills: ['Machine Learning', 'Python']
    },
];

const educationData = [
    {
        university: 'University of Texas at Dallas',
        degree: 'Master of Science in Business Analytics and Artificial Intelligence',
        date: 'May 2025'
    },
    {
        university: 'BMS Institute of Technology and Management',
        degree: 'Bachelor of Technology in Computer Science and Engineering',
        date: 'July 2022'
    }
];

// --- Main App Component ---

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const certificationsRef = useRef(null);
  const educationRef = useRef(null);


  const sections = {
    'about': aboutRef,
    'experience': experienceRef,
    'projects': projectsRef,
    'skills': skillsRef,
    'certifications': certificationsRef,
    'education': educationRef
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let currentSection = 'about';

      // Find the current section based on scroll position
      for (const sectionId in sections) {
        const section = sections[sectionId].current;
        if (section && section.offsetTop <= scrollPosition + 120) {
          currentSection = sectionId;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return (
    <div className="bg-slate-50 text-slate-800 font-sans leading-relaxed">
      <div className="container mx-auto lg:flex lg:gap-16">
        <LeftNav activeSection={activeSection} />
        <MainContent refs={{ aboutRef, experienceRef, projectsRef, skillsRef, certificationsRef, educationRef }} />
      </div>
    </div>
  );
};


// --- Components ---

const LeftNav = ({ activeSection }) => {
    const navLinks = [
        { id: 'about', title: 'About' },
        { id: 'experience', title: 'Experience' },
        { id: 'projects', title: 'Projects' },
        { id: 'skills', title: 'Skills' },
        { id: 'certifications', title: 'Certifications' },
        { id: 'education', title: 'Education' }
    ];

    const socialLinks = [
        { icon: <Github size={20}/>, href: 'https://github.com/YeswanthC7' },
        { icon: <Linkedin size={20}/>, href: 'https://linkedin.com/in/yeswanth-c' },
        { icon: <Mail size={20}/>, href: 'mailto:yeswanthchandrasekhar7@gmail.com' },
    ];

    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 px-6 py-12 md:px-12">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Yeswanth Chandrasekhar</h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-700 sm:text-xl">DevOps & Backend Engineer</h2>
                <p className="mt-4 max-w-xs leading-normal text-slate-600">
                    I build reliable infrastructure and innovative, automated solutions for software quality and deployment.
                </p>
                <nav className="hidden lg:block mt-16">
                    <ul className="space-y-4">
                        {navLinks.map(link => (
                            <li key={link.id}>
                                <a href={`#${link.id}`} className={`group flex items-center transition-all duration-300 ${activeSection === link.id ? 'text-slate-900' : 'text-slate-500 hover:text-slate-800'}`}>
                                    <span className={`nav-indicator mr-4 h-px w-8 bg-slate-500 group-hover:w-16 group-hover:bg-slate-800 transition-all duration-300 ${activeSection === link.id ? 'w-16 bg-slate-900' : ''}`}></span>
                                    <span className={`nav-text text-xs font-bold uppercase tracking-widest ${activeSection === link.id ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-800'}`}>{link.title}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div>
                <div className="flex items-center mt-8 space-x-5">
                    {socialLinks.map((social, index) => (
                        <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors">
                            {social.icon}
                        </a>
                    ))}
                </div>
                 <div className="mt-8">
                    <a 
                        href="/Yeswanth_Resume_2025.pdf"
                        download="Yeswanth_Chandrasekhar_Resume.pdf"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-md text-sm text-slate-800 hover:bg-slate-100 hover:border-slate-400 transition-colors"
                    >
                        <Download size={16} />
                        Download Résumé
                    </a>
                </div>
            </div>
        </header>
    );
};

const MainContent = ({ refs }) => (
    <main className="lg:w-1/2 lg:py-24 px-6 md:px-12">
        <section ref={refs.aboutRef} id="about" className="mb-16 scroll-mt-24">
            <p className="text-slate-600">
                A DevOps and Backend Engineer with a foundation in computer science and a Master's degree in Business Analytics and AI. I am passionate about building reliable, scalable infrastructure and leveraging automation to improve software quality and development lifecycles. My experience spans from backend API testing and CI/CD pipeline management to prototyping innovative, AI-driven QA solutions.
            </p>
        </section>

        <section ref={refs.experienceRef} id="experience" className="mb-16 scroll-mt-24">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-8 lg:hidden">Experience</h2>
            <div className="space-y-12">
                {experienceData.map((job, index) => (
                    <div key={index} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100/50"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">{job.dates}</header>
                        <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-slate-900">
                                <span className="font-bold">{job.role}</span> at <span className="font-bold text-sky-700">{job.company}</span>
                            </h3>
                            <p className="mt-2 text-sm leading-normal text-slate-600">{job.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section ref={refs.projectsRef} id="projects" className="mb-16 scroll-mt-24">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-8 lg:hidden">Projects</h2>
             <div className="space-y-12">
                {projectData.map((project, index) => (
                     <div key={index} className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                         <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100/50"></div>
                        <div className="z-10 sm:order-2 sm:col-span-6">
                           <h3 className="font-medium leading-snug text-slate-900">
                              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-baseline font-medium leading-tight text-slate-900 hover:text-sky-600 focus-visible:text-sky-600 group/link text-base">
                                 <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                 <span>{project.title} <ArrowRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"/></span>
                              </a>
                           </h3>
                           <p className="mt-2 text-sm leading-normal text-slate-600">{project.description}</p>
                           <ul className="mt-2 flex flex-wrap">
                              {project.tech.map(t => (
                                 <li key={t} className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-700">{t}</div>
                                 </li>
                              ))}
                           </ul>
                        </div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">{project.dates}</header>
                     </div>
                ))}
            </div>
        </section>
        
        <section ref={refs.skillsRef} id="skills" className="mb-16 scroll-mt-24">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-8 lg:hidden">Skills</h2>
            <div className="space-y-6">
                {skillsData.map((category, index) => (
                    <div key={index}>
                        <h3 className="font-bold text-slate-800 mb-2">{category.category}</h3>
                        <ul className="flex flex-wrap">
                           {category.skills.map(skill => (
                              <li key={skill} className="mr-1.5 mt-2">
                                 <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-700">{skill}</div>
                              </li>
                           ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>

        <section ref={refs.certificationsRef} id="certifications" className="mb-16 scroll-mt-24">
             <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-8 lg:hidden">Certifications</h2>
             <div className="space-y-12">
                {certificationsData.map((cert, index) => (
                     <div key={index} className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                         <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100/50"></div>
                        <div className="z-10 sm:order-2 sm:col-span-6">
                           <h3 className="font-medium leading-snug text-slate-900">
                              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-baseline font-medium leading-tight text-slate-900 hover:text-sky-600 focus-visible:text-sky-600 group/link text-base">
                                 <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                 <span>{cert.title} <ArrowRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"/></span>
                              </a>
                           </h3>
                           <p className="mt-2 text-sm leading-normal text-slate-600 font-semibold">{cert.issuer}</p>
                           <ul className="mt-2 flex flex-wrap">
                              {cert.skills.map(skill => (
                                 <li key={skill} className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-700">{skill}</div>
                                 </li>
                              ))}
                           </ul>
                        </div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">{cert.date}</header>
                     </div>
                ))}
            </div>
        </section>

        <section ref={refs.educationRef} id="education" className="scroll-mt-24">
             <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-8 lg:hidden">Education</h2>
             <div className="space-y-12">
                {educationData.map((edu, index) => (
                     <div key={index} className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                         <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100/50"></div>
                        <div className="z-10 sm:order-2 sm:col-span-6">
                           <h3 className="font-medium leading-snug text-slate-900">
                              <span className="font-bold text-sky-700">{edu.university}</span>
                           </h3>
                           <p className="mt-2 text-sm leading-normal text-slate-600">{edu.degree}</p>
                        </div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">{edu.date}</header>
                     </div>
                ))}
            </div>
        </section>
    </main>
);

export default App;
