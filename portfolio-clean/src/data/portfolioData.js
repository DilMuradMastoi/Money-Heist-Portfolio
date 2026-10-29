import sweetsImg from '../assets/project-sweets.jpg';
import portalImg from '../assets/project-portal.jpg';
import voiceImg from '../assets/project-voice.jpg';
import surveyImg from '../assets/project-survey.jpg';
import portfolioImg from '../assets/project-portfolio.jpg';
import moreImg from '../assets/project-more.jpg';
import signatureImg from '../assets/signature.jpg';

export const portfolioData = {
  personal: {
    name: 'Dilmurad',
    title: 'Web Developer',
    role: 'Web Developer & UI Designer',
    tagline: 'Turning ideas into digital reality with clean code, creative design, and modern web technologies.',
    email: 'dilmurad2307@gmail.com',
    phone: '+92 300 1234567',
    location: 'Quetta, Balochistan, Pakistan',
    social: {
      github: 'https://github.com/dilmuradmastoi',
      linkedin: 'https://linkedin.com/',
      twitter: 'https://x.com/',
      youtube: 'https://youtube.com/',
    },
    bio: [
      "I'm Dilmurad, a passionate web developer who enjoys transforming creative ideas into real, responsive, and user-friendly digital experiences.",
      "I enjoy building modern websites using React, JavaScript, HTML, CSS, and contemporary frontend tools.",
      "I believe great development requires creativity, discipline, problem-solving, and attention to detail. My goal is to create digital experiences that look impressive, work smoothly, and solve real problems."
    ],
    signature: signatureImg,
    stats: [
      { label: 'Years of Learning', value: '1+' },
      { label: 'Projects Built', value: '10+' },
      { label: 'Commitment to Growth', value: '100%' }
    ]
  },

  navigation: [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' }
  ],

  quotes: {
    home: {
      text: 'Sometimes the best way to solve a problem is to think differently.',
      altText: 'Sometimes the best way to solve a problem is to rob a bank.',
      author: 'THE MASTERMIND'
    },
    about: {
      text: 'Ideas are bulletproof.',
      author: 'THE PROFESSOR'
    },
    experience: {
      text: 'Experience is the best teacher.',
      author: 'THE MASTERMIND'
    },
    skills: 'GOOD CODE BUILDS FREEDOM',
    contact: 'Dream • Code • Build • Repeat'
  },

  experience: [
    {
      period: '2024 — Present',
      title: 'Web Developer (Freelance)',
      institution: 'Independent & Client Solutions',
      description: 'Building modern web applications using React, Tailwind CSS, Firebase and other technologies with focus on responsiveness, performance and clean architecture.',
      tags: ['React', 'Tailwind CSS', 'Firebase', 'JavaScript', 'Responsive UI']
    },
    {
      period: '2023 — 2024',
      title: 'Web Development Course',
      institution: 'Saylani Welfare International Trust',
      description: 'Completed a comprehensive web development certification covering HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.',
      tags: ['HTML5 / CSS3', 'JavaScript (ES6+)', 'React', 'Node.js', 'MongoDB']
    },
    {
      period: '2022 — 2023',
      title: 'Self Learning & Foundation',
      institution: 'Independent Exploration',
      description: 'Started my journey in web development, exploring modern frontend workflows, algorithm challenges, and building responsive personal projects.',
      tags: ['Core Web APIs', 'Git & GitHub', 'Frontend Basics', 'Problem Solving']
    }
  ],

  skills: [
    { name: 'React', category: 'Frontend', level: 'Advanced', icon: 'atom', color: '#61DAFB' },
    { name: 'JavaScript', category: 'Language', level: 'Advanced', icon: 'js', color: '#F7DF1E' },
    { name: 'HTML5', category: 'Markup', level: 'Expert', icon: 'html5', color: '#E34F26' },
    { name: 'CSS3', category: 'Styling', level: 'Expert', icon: 'css3', color: '#1572B6' },
    { name: 'Tailwind CSS', category: 'Styling', level: 'Advanced', icon: 'tailwind', color: '#38BDF8' },
    { name: 'Node.js', category: 'Backend', level: 'Intermediate', icon: 'node', color: '#339933' },
    { name: 'Express.js', category: 'Backend', level: 'Intermediate', icon: 'express', color: '#CCCCCC' },
    { name: 'MongoDB', category: 'Database', level: 'Intermediate', icon: 'mongo', color: '#47A248' },
    { name: 'Firebase', category: 'Backend / Auth', level: 'Intermediate', icon: 'firebase', color: '#FFCA28' },
    { name: 'Git & GitHub', category: 'Version Control', level: 'Advanced', icon: 'git', color: '#F05032' },
    { name: 'VS Code', category: 'Development Tool', level: 'Advanced', icon: 'vscode', color: '#007ACC' },
    { name: 'Responsive Design', category: 'UI Architecture', level: 'Expert', icon: 'responsive', color: '#E50924' }
  ],

  skillBars: [
    { label: 'Frontend Development', percentage: 90 },
    { label: 'UI / UX Implementation', percentage: 80 },
    { label: 'Backend Fundamentals', percentage: 75 },
    { label: 'Problem Solving & Logic', percentage: 80 }
  ],

  services: [
    {
      id: '01',
      title: 'Web Development',
      description: 'Modern, responsive and scalable websites built with clean architecture, high performance, and standard-compliant code.',
      icon: 'code'
    },
    {
      id: '02',
      title: 'UI/UX Design',
      description: 'Clean and user-friendly interfaces with strong typographic hierarchy, intuitive navigation, and captivating dark aesthetics.',
      icon: 'palette'
    },
    {
      id: '03',
      title: 'Website Redesign',
      description: 'Improve your existing website with a modern look, faster loading speed, accessibility enhancements, and mobile optimization.',
      icon: 'layers'
    },
    {
      id: '04',
      title: 'API Integration',
      description: 'Connect your frontends with backend APIs, authentication services (Firebase, OAuth), and third-party data streams.',
      icon: 'zap'
    },
    {
      id: '05',
      title: 'Performance Optimization',
      description: 'Faster and smoother websites through asset minification, image compression, optimized bundle sizes, and caching.',
      icon: 'gauge'
    },
    {
      id: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing technical support, bug fixing, security upgrades, and incremental feature updates for long-term reliability.',
      icon: 'shield'
    }
  ],

  projects: [
    {
      id: 'sweets',
      name: 'Murad Sweets & Bakers',
      subtitle: 'Bakery Website (MERN Stack)',
      category: 'E-Commerce / Food',
      img: sweetsImg,
      desc: 'A full-stack bakery web application featuring dynamic menu browsing, custom order inquiries, customer reviews, and a high-converting responsive checkout flow.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      demoUrl: '#',
      githubUrl: 'https://github.com/dilmuradmastoi'
    },
    {
      id: 'portal',
      name: 'Firebase Portal',
      subtitle: 'User & Owner Dashboard',
      category: 'Web App / SaaS',
      img: portalImg,
      desc: 'A multi-role portal featuring real-time data persistence, administrative controls, user authentication, and secure profile management built with Firebase.',
      tags: ['React', 'Firebase Auth', 'Firestore', 'Tailwind CSS'],
      demoUrl: '#',
      githubUrl: 'https://github.com/dilmuradmastoi'
    },
    {
      id: 'voice',
      name: 'VoiceShift Studio',
      subtitle: 'Voice Conversion App',
      category: 'Audio / AI Tool',
      img: voiceImg,
      desc: 'A sleek, dark studio interface for audio uploads, real-time waveform visualization, conversion workflows, and project asset exports.',
      tags: ['React', 'Web Audio API', 'REST API', 'Modern UI'],
      demoUrl: '#',
      githubUrl: 'https://github.com/dilmuradmastoi'
    },
    {
      id: 'survey',
      name: 'Google Forms Survey',
      subtitle: 'Research Form (No-Code Workflow)',
      category: 'Research / Data',
      img: surveyImg,
      desc: 'An accessible, bilingual survey experience designed for clean respondent flow, validation rules, and structured data analysis.',
      tags: ['Google Workspace', 'UX Design', 'Form Logic'],
      demoUrl: '#',
      githubUrl: 'https://github.com/dilmuradmastoi'
    },
    {
      id: 'portfolio',
      name: 'Portfolio Website',
      subtitle: 'Cinematic Personal Brand',
      category: 'Portfolio / Design',
      img: portfolioImg,
      desc: 'A cinematic heist-themed developer portfolio crafted with bold typography, layered character backgrounds, and responsive single-page architecture.',
      tags: ['React', 'CSS3', 'Barlow Condensed', 'Responsive'],
      demoUrl: '#',
      githubUrl: 'https://github.com/dilmuradmastoi'
    },
    {
      id: 'more',
      name: 'More Projects',
      subtitle: 'Experimental UI Lab',
      category: 'Creative Coding',
      img: moreImg,
      desc: 'A growing repository of creative frontend experiments, interactive animations, custom micro-interactions, and prototype user experiences.',
      tags: ['Creative Coding', 'CSS Animations', 'UI Lab'],
      demoUrl: '#',
      githubUrl: 'https://github.com/dilmuradmastoi'
    }
  ],

  resume: {
    summary: 'Creative, disciplined, and detail-oriented Web Developer with solid expertise in modern JavaScript, React, and responsive frontend architecture. Proven record of building user-focused web applications with clean code, strong aesthetic sensibility, and continuous drive for growth.',
    education: [
      {
        degree: 'Intermediate in Computer Science (ICS)',
        institution: 'Board of Intermediate and Secondary Education, Quetta',
        period: '2021 — 2023',
        details: 'Core focus on Computer Science, Mathematics, and Physics.'
      },
      {
        degree: 'Web & Mobile App Development Certification',
        institution: 'Saylani Welfare International Trust',
        period: '2023 — 2024',
        details: 'Intensive hands-on training in HTML5, CSS3, JavaScript ES6+, React, Node.js, Express, MongoDB, and Git.'
      }
    ],
    experience: [
      {
        role: 'Freelance Web Developer',
        company: 'Independent Contractor',
        period: '2024 — Present',
        bullets: [
          'Designed and developed responsive, cross-browser web interfaces for diverse small business clients.',
          'Integrated backend solutions and databases using Firebase and REST APIs.',
          'Optimized web performance, achieving sub-second page loads and high accessibility scores.'
        ]
      }
    ],
    languages: ['English (Professional)', 'Urdu (Native / Bilingual)', 'Pashto (Native)'],
    certifications: [
      'Saylani Welfare — Certified Web Developer (2024)',
      'Responsive Web Design Certification',
      'JavaScript Algorithms and Data Structures'
    ]
  }
};
