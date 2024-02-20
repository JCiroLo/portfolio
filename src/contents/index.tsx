import { GithubIcon, InstagramIcon, LinkedInIcon, MailIcon } from "../components";
import { SECTIONS } from "../utilities/constants";

const PROJECT_IMAGES = {
  artfcl: "/img/projects/artfcl.png",
  avovite: "/img/projects/avovite.png",
  bitnapse: "/img/projects/bitnapse.png",
  cameraeffects: "/img/projects/cameraeffects.png",
  cupidocarwash: "/img/projects/cupidocarwash.png",
  discoplanet: "/img/projects/discoplanet.png",
  doogma: "/img/projects/doogma.png",
  drummachine: "/img/projects/drummachine.png",
  finalflows: "/img/projects/finalflows.png",
  financity: "/img/projects/financity.png",
  fractalcanopy: "/img/projects/fractalcanopy.png",
  getapig: "/img/projects/getapig.png",
  lolre: "/img/projects/lolre.png",
  minaslaaurora: "/img/projects/minaslaaurora.png",
  mitox: "/img/projects/mitox.png",
  musicalscalefinder: "/img/projects/musicalscalefinder.png",
  porimpacto: "/img/projects/porimpacto.png",
  regex: "/img/projects/regex.png",
  snakegame: "/img/projects/snakegame.png",
  tradesforce: "/img/projects/tradesforce.png",
  validocus: "/img/projects/validocus.png",
};

const LOGO_IMAGES = {
  amplify: {
    name: "AWS Amplify",
    svg: "/img/logos/amplify.svg",
  },
  calendly: {
    name: "Calendly",
    svg: "/img/logos/calendly.svg",
  },
  chartjs: {
    name: "Chart.js",
    svg: "/img/logos/chartjs.svg",
  },
  css: {
    name: "CSS",
    svg: "/img/logos/css.svg",
  },
  dynamodb: {
    name: "AWS DynamoDB",
    svg: "/img/logos/dynamodb.svg",
  },
  epayco: {
    name: "Epayco SDK",
    svg: "/img/logos/epayco.svg",
  },
  expo: {
    name: "Expo",
    svg: "/img/logos/expo.svg",
  },
  firebase: {
    name: "Firebase",
    svg: "/img/logos/firebase.svg",
  },
  flutter: {
    name: "Flutter",
    svg: "/img/logos/flutter.svg",
  },
  gpt: {
    name: "GPT 3.5",
    svg: "/img/logos/gpt.svg",
  },
  graphql: {
    name: "GraphQL",
    svg: "/img/logos/graphql.svg",
  },
  html5: {
    name: "HTML5",
    svg: "/img/logos/html5.svg",
  },
  javascript: {
    name: "JavaScript",
    svg: "/img/logos/javascript.svg",
  },
  jquery: {
    name: "jQuery",
    svg: "/img/logos/jquery.svg",
  },
  materialui: {
    name: "Material UI",
    svg: "/img/logos/materialui.svg",
  },
  moleculerjs: {
    name: "Moleculer.js",
    svg: "/img/logos/moleculerjs.svg",
  },
  nextjs: {
    name: "Next.js",
    svg: "/img/logos/nextjs.svg",
  },
  nodejs: {
    name: "Node.js",
    svg: "/img/logos/nodejs.svg",
  },
  pugjs: {
    name: "Pug.js",
    svg: "/img/logos/pugjs.svg",
  },
  reactjs: {
    name: "React.js",
    svg: "/img/logos/reactjs.svg",
  },
  s3: {
    name: "AWS S3",
    svg: "/img/logos/s3.svg",
  },
  sass: {
    name: "SASS",
    svg: "/img/logos/sass.svg",
  },
  stenciljs: {
    name: "Stencil.js",
    svg: "/img/logos/stenciljs.svg",
  },
  tailwindcss: {
    name: "Tailwind CSS",
    svg: "/img/logos/tailwindcss.svg",
  },
  threejs: {
    name: "Three.js",
    svg: "/img/logos/threejs.svg",
  },
  tonejs: {
    name: "Tone.js",
    svg: "/img/logos/tonejs.svg",
  },
  typescript: {
    name: "TypeScript",
    svg: "/img/logos/typescript.svg",
  },
  vitejs: {
    name: "Vite.js",
    svg: "/img/logos/vitejs.svg",
  },
  vuejs: {
    name: "Vue.js",
    svg: "/img/logos/vuejs.svg",
  },
  zoom: {
    name: "Zoom SDK",
    svg: "/img/logos/zoom.svg",
  },
};

const contents = {
  sidebar: {
    profile: {
      title: "Juan Pablo Ciro",
      img: "/img/profile.jpeg",
    },
    sections: [
      {
        title: "Home",
        key: SECTIONS[0],
      },
      {
        title: "About",
        key: SECTIONS[1],
      },
      {
        title: "Experience",
        key: SECTIONS[2],
      },
      {
        title: "Projects",
        key: SECTIONS[3],
      },
      {
        title: "Contact",
        key: SECTIONS[4],
      },
    ],
  },
  me: {
    title: "JUAN CIRO",
    subtitle: "Informatics and software engineer",
  },
  about: {
    img: "/img/profile.jpeg",
    title: "Hi, I'm Juan Pablo Ciro",
    description: `I am a software engineer passionate about web UI programming. I have ${
      new Date().getFullYear() - 2020
    } years of experience developing web sites using various frameworks and libraries in JavaScript such as ReactJS, VueJS and NextJs. I love create interfaces from designs following Pixel Perfect techniques. I am a professional with a minimalist mindset, prioritizing efficiency in every task. I am capable of leading, with great imagination and creativity solving challenges. I like teamwork building great projects, sharing ideas, and listening to others.`,
  },
  skills: {
    title: "Experience",
    description:
      "My professional career has been diverse and challenging. Below is a summary of the places and teams I have had the privilege of contributing to:",
    contents: [
      {
        company: "Star Solutions, Medellín, Colombia",
        role: "Lead front-end developer",
        responsabilities: [
          "Support in the professional growth of co-workers, teaching them best practices in development.",
          "Web application development using frameworks like NextJs, VueJs and libraries like ReactJs, StencilJs.",
          "Mobile application development using Flutter and React Native (expo).",
          "Development of web applications with responsive design, ensuring accessibility on a variety of devices and screen sizes.",
          "Development of web interfaces from designs in Figma and AdobeXD.",
          "Creation of complex components such as drag'n drop, dashboard analytics, real-time chats, referrals tree, PDF management, wysiwyg editors.",
          "Optimization of website performance and loading speed using techniques such as memoization, debouncing and design patterns.",
          "Integrations with various APIs and SDKs such as Google Finance, Google Maps, ChatGPT 3.5, Epayco, Zoom meetings and Firebase.",
          "Project management using Trello to document user requirements.",
          "Use of version control system tools such as Github and Gitlab.",
        ],
      },
      {
        company: "Pimex, Medellín, Colombia",
        role: "Full-stack web developer",
        responsabilities: [
          "Software maintenance, improving performance, and code structure with optimization techniques.",
          "Responsive interface creation in VueJs and NuxtJs, based on Figma and Envato Elements designs.",
          "Creation of integrations with Google, Facebook, and Mailchimp.",
          "Creation of RESTFul APIs using frameworks such as ExpressJs and MoleculerJs.",
          "Socketio Integration for the creation of real-time communication channels for chats and real-time tables.",
          "Project management in Firebase and Google Cloud.",
          "Customer support on the software using Intercom.",
        ],
      },
      {
        company: "Getapig!, Medellín, Colombia",
        role: "Freelance web developer",
        responsabilities: [
          "Development of the entire site using VueJs.",
          "Component creation using a UI/UX design system from Envato Elements using mockups.",
          "Full responsive design.",
          "Development of the server using MoleculerJS with JWT token-based authentication and microservices architecture.",
          "Integration with an own developed administration panel to manage the site contents.",
          "Setup of domains and subdomains in the hosting panel and GoDaddy.",
          "Integration with ChartJS to show real-time analytics.",
          "Integration of Search Engine Optimization (SEO) techniques.",
        ],
      },
      {
        company: "Cupido Car Wash, Tampa, USA",
        role: "Freelance web developer",
        responsabilities: [
          "Development of the entire site from scratch using templates from Envato Elements.",
          "Component creation using a UI/UX design system.",
          "Integration with Calendly to automate appointment scheduling.",
          "Integration of Search Engine Optimization (SEO) techniques.",
        ],
      },
      {
        company: "National University of Colombia, Medellín, Colombia",
        role: "Student Assistant - Software engineer",
        responsabilities: [
          "Software requirements gathering and state-of-the-art research on citizen security projects.",
          "Development of a mobile application in Flutter to visualize a map with hotspots referencing incidents of danger.",
          "Development of a web application with VueJS to manage the users of the mobile app.",
        ],
      },
      {
        company: "La Company Creativa, Medellín, Colombia",
        role: "Front-end web developer",
        responsabilities: [
          "Development of small web applications in Wordpress using plugins like Elementor and Divi.",
          "Configuration and maintenance of web domains and subdomains.",
          "Configuration and maintenance of web sites in the hosting panel.",
        ],
      },
    ],
  },
  projects: {
    title: "Projects",
    description: "Scroll right to see my previous projects",
    contents: [
      {
        name: "Artfcl",
        description:
          "It is a web platform to generate AI-based art from text with the possibility of purchase and convert them into wall paintings.",
        category: "Star Solutions",
        technologies: [
          LOGO_IMAGES.nextjs,
          LOGO_IMAGES.graphql,
          LOGO_IMAGES.amplify,
          LOGO_IMAGES.s3,
          LOGO_IMAGES.dynamodb,
          LOGO_IMAGES.tailwindcss,
        ],
        website: "https://artfcl.ai",
        repository: null,
        preview: PROJECT_IMAGES.artfcl,
      },
      {
        name: "Avovite",
        description:
          "It's a Colombian web platform specializing in avocado production investment through 'VITES' acquisition. The project aims to generate annual returns from avocado harvests.",
        category: "Star Solutions",
        technologies: [LOGO_IMAGES.reactjs, LOGO_IMAGES.epayco, LOGO_IMAGES.materialui, LOGO_IMAGES.vitejs],
        website: "https://avovite.com",
        repository: null,
        preview: PROJECT_IMAGES.avovite,
      },
      {
        name: "Bitnapse",
        description:
          "It is a web platform focused on connecting international students to swap AUD into COP or vice versa. The project aims to connect students and improve their financial life.",
        category: "Star Solutions",
        technologies: [LOGO_IMAGES.reactjs, LOGO_IMAGES.materialui, LOGO_IMAGES.vitejs],
        website: "https://bitnapse.au",
        repository: null,
        preview: PROJECT_IMAGES.bitnapse,
      },
      {
        name: "Tradesfoce",
        description:
          "It is a web platform where users can view cryptocurrency information in real time, with the possibility of modifying the information.",
        category: "Star Solutions",
        technologies: [LOGO_IMAGES.reactjs, LOGO_IMAGES.materialui, LOGO_IMAGES.vitejs],
        website: "https://tradesforce.conciblot.com",
        repository: null,
        preview: PROJECT_IMAGES.tradesforce,
      },
      {
        name: "Validocus",
        description:
          "It is a web platform for managing digital signatures using blockchain. The main functionality is the generation of documents with the possibility of sending them to users for safe signing using video. The project aims to improve the security of digital signatures using blockchain while mantaining traceability.",
        category: "Star Solutions",
        technologies: [LOGO_IMAGES.reactjs, LOGO_IMAGES.materialui, LOGO_IMAGES.vitejs],
        website: "https://validocus.com",
        repository: null,
        preview: PROJECT_IMAGES.validocus,
      },
      {
        name: "Doogma",
        description:
          "It is a web platform for creating web interfaces using pre-built components in real time with the possibility of customization. The project is based on Divi from Wordpress, using drag'n drop, tree visualization, and preview of the final result.",
        category: "Star Solutions",
        technologies: [LOGO_IMAGES.reactjs, LOGO_IMAGES.stenciljs, LOGO_IMAGES.materialui, LOGO_IMAGES.threejs, LOGO_IMAGES.vitejs],
        website: "https://doogma-builder-three.vercel.app",
        repository: null,
        preview: PROJECT_IMAGES.doogma,
      },
      {
        name: "FinalFlows",
        description:
          "It is a web platform focused on connecting different interfaces imported from Figma, simulating a 'flow'. The project uses a custom builder inspired by Figma.",
        category: "Star Solutions",
        technologies: [LOGO_IMAGES.reactjs, LOGO_IMAGES.materialui, LOGO_IMAGES.vitejs],
        website: null,
        repository: null,
        preview: PROJECT_IMAGES.finalflows,
      },
      {
        name: "Financity",
        description:
          "It is a web platform dedicated to monetary investments through referrals. You can earn commissions by referring others and boost your current earnings. You can preview all your referrals in real time using a dashboard analytics and a referral tree.",
        category: "Star Solutions",
        technologies: [LOGO_IMAGES.reactjs, LOGO_IMAGES.materialui, LOGO_IMAGES.vitejs],
        website: "https://financity.city",
        repository: null,
        preview: PROJECT_IMAGES.financity,
      },
      {
        name: "Mitox",
        description:
          "It is a web platform dedicated to monetary investments through referrals. You can earn commissions by referring others and boost your current earnings. You can preview all your referrals in real time using a dashboard analytics and referral tree.",
        category: "Star Solutions",
        technologies: [LOGO_IMAGES.nextjs, LOGO_IMAGES.materialui, LOGO_IMAGES.zoom],
        website: "https://mitox.com.co",
        repository: null,
        preview: PROJECT_IMAGES.mitox,
      },
      {
        name: "Por Impacto",
        description:
          "It is a global platform for enterprise management, fostering a community of providers offering human, intellectual, and financial capital. Committed to achieving high-impact solutions in Latin America and the Caribbean.",
        category: "Star Solutions",
        technologies: [LOGO_IMAGES.html5, LOGO_IMAGES.css, LOGO_IMAGES.javascript],
        website: "https://porimpacto.org",
        repository: null,
        preview: PROJECT_IMAGES.porimpacto,
      },
      {
        name: "Minas la Aurora",
        description:
          "It is an application to manage mine personnel, their schedules, hours, tasks and their work status. All personnel information is stored in a database and displayed in real time using a dashboard.",
        category: "Freelance job",
        technologies: [LOGO_IMAGES.reactjs, LOGO_IMAGES.materialui, LOGO_IMAGES.firebase, LOGO_IMAGES.chartjs, LOGO_IMAGES.vitejs],
        website: "https://www.minaslaaurora.com/es/",
        repository: null,
        preview: PROJECT_IMAGES.minaslaaurora,
      },
      {
        name: "Getapig",
        description:
          "It is an investment platform focused on financing projects in the pork industry. The project has an admin panel to manage contets.",
        category: "Freelance job (Backend and Frontend)",
        technologies: [
          LOGO_IMAGES.vuejs,
          LOGO_IMAGES.pugjs,
          LOGO_IMAGES.sass,
          LOGO_IMAGES.chartjs,
          LOGO_IMAGES.nodejs,
          LOGO_IMAGES.moleculerjs,
        ],
        website: "https://getapig.co",
        repository: null,
        preview: PROJECT_IMAGES.getapig,
      },
      {
        name: "Cupido Car Wash",
        description: "It is an application to easily schedule car wash service at home using calendly.",
        category: "Freelance job",
        technologies: [LOGO_IMAGES.vuejs, LOGO_IMAGES.pugjs, LOGO_IMAGES.sass, LOGO_IMAGES.calendly],
        website: "https://cupidowash.com",
        repository: null,
        preview: PROJECT_IMAGES.cupidocarwash,
      },
      {
        name: "Musical Scale Finder",
        description: "Application created to find musical scales that match the notes you previously selected.",
        category: "Personal project",
        technologies: [LOGO_IMAGES.reactjs, LOGO_IMAGES.materialui, LOGO_IMAGES.tonejs, LOGO_IMAGES.vitejs],
        website: "https://jcirolo.github.io/musical-scale-finder",
        repository: "https://github.com/JCiroLo/musical-scale-finder",
        preview: PROJECT_IMAGES.musicalscalefinder,
      },
      {
        name: "Fractal Canopy",
        description: "Simulator to generate custom fractal trees with different parameters.",
        category: "Personal project",
        technologies: [LOGO_IMAGES.vuejs, LOGO_IMAGES.pugjs, LOGO_IMAGES.sass],
        website: "https://jcirolo.github.io/fractal-canopy",
        repository: "https://github.com/JCiroLo/fractal-canopy",
        preview: PROJECT_IMAGES.fractalcanopy,
      },
      {
        name: "Lolre",
        description:
          "League of Legends search engine that allows you to see the lore, skins and abilities of your favorite champions in different languages. Uses the official Riot Games API.",
        category: "Personal project",
        technologies: [LOGO_IMAGES.vuejs, LOGO_IMAGES.sass],
        website: "https://jcirolo.github.io/lolre",
        repository: "https://github.com/JCiroLo/lolre",
        preview: PROJECT_IMAGES.lolre,
      },
      {
        name: "Drum Machine",
        description: "Create progressions with different sounds on a retro-inspired radio tape recorder.",
        category: "Personal project",
        technologies: [LOGO_IMAGES.vitejs, LOGO_IMAGES.pugjs, LOGO_IMAGES.sass, LOGO_IMAGES.tonejs],
        website: "https://jcirolo.github.io/drum-machine",
        repository: "https://github.com/JCiroLo/drum-machine",
        preview: PROJECT_IMAGES.drummachine,
      },
      {
        name: "Snake Game",
        description: "The classic snake game made in pure HTML, JavaScript and CSS with multiple difficulties and modes.",
        category: "Personal project",
        technologies: [LOGO_IMAGES.vuejs, LOGO_IMAGES.pugjs, LOGO_IMAGES.sass],
        website: "https://jcirolo.github.io/snake-game",
        repository: "https://github.com/JCiroLo/snake-game",
        preview: PROJECT_IMAGES.snakegame,
      },
      {
        name: "Ascii Camera",
        description: "Small application that uses the camera to create animated shapes in ASCII art.",
        category: "Personal project",
        technologies: [LOGO_IMAGES.html5, LOGO_IMAGES.css, LOGO_IMAGES.javascript],
        website: "https://jcirolo.github.io/camera-effects",
        repository: "https://github.com/JCiroLo/camera-effects",
        preview: PROJECT_IMAGES.cameraeffects,
      },
      {
        name: "Disco Planet",
        description: "Perosnal project that uses music to create animations and visual effects in the screen at the rythm of the song.",
        category: "Personal project",
        technologies: [LOGO_IMAGES.html5, LOGO_IMAGES.javascript, LOGO_IMAGES.threejs],
        website: "https://jcirolo.github.io/disco-planet",
        repository: "https://github.com/JCiroLo/disco-planet",
        preview: PROJECT_IMAGES.discoplanet,
      },
      // {
      //   name: "Glasses Frame Shop",
      //   description: "Personal project made to emulate an online store to sell glasses frames. You can also test the glasses online.",
      //   category: "Personal project",
      //   technologies: [],
      //   website: null,
      //   repository: "https://github.com/JCiroLo/glasses-frame-shop",
      //   preview: PROJECT_IMAGES.glassesframeshop
      // },
    ],
  },
  contact: {
    title: "Contact me",
    description: "Available for any remote job opportunity. Send me an email or contact me via instant message!",
  },
  social: [
    {
      url: "mailto: juanciro35@gmail.com",
      icon: MailIcon,
    },
    {
      url: "https://www.linkedin.com/in/jcirolo",
      icon: LinkedInIcon,
    },
    {
      url: "https://github.com/JCiroLo",
      icon: GithubIcon,
    },
    {
      url: "https://www.instagram.com/justanotherzero.jpg",
      icon: InstagramIcon,
    },
  ],
};

export default contents;
