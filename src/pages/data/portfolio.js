export const personalInfo = {
  name: "Davide",
  role: "AI & Robotics Specialist",
  tagline: "Sviluppo soluzioni all'intersezione tra Intelligenza Artificiale, Computer Vision e Robotica.",
  about: "Studente magistrale in AI e Robotica. Mi occupo di progettazione di sistemi complessi, simulazioni fisiche 3D e algoritmi di apprendimento. Focus su proof-of-work e architetture software efficienti.",
  location: "Roma, Italia",
  socials: {
    github: "https://github.com/tuo-username",
    linkedin: "https://linkedin.com/in/tuo-username",
    email: "tua-email@email.com",
    cvPdf: "/resume.pdf" // Metteremo il PDF nella cartella public/
  }
};

export const projects = [
  {
    title: "Simulatore Rover 3D & Particle System",
    description: "Simulatore web interattivo in tempo reale con fisica dei fluidi/particelle per le ruote in movimento su terreno deformabile.",
    techStack: ["Three.js", "JavaScript", "WebGL", "Physics Engine"],
    highlights: [
      "Rendering e shading personalizzato per le particelle di polvere.",
      "Calcolo cinematico in tempo reale per la trazione delle ruote."
    ],
    githubUrl: "https://github.com/tuo-username/rover-sim",
    demoUrl: "", // Opzionale: inserisci il link se hai una demo live
    featured: true
  },
  {
    title: "Pipeline CV & Visual Odometry",
    description: "Sistema per il tracciamento di feature e stima della traiettoria robotica basato su algoritmi di Computer Vision.",
    techStack: ["Python", "OpenCV", "C++", "ROS2"],
    highlights: [
      "Estrazione e matching di feature (SIFT/ORB) ottimizzato.",
      "Stima della posa 3D e riduzione dell'errore di drift."
    ],
    githubUrl: "https://github.com/tuo-username/visual-odometry",
    demoUrl: "",
    featured: true
  }
];

export const skills = [
  { category: "Languages & Core", list: ["Python", "C++", "JavaScript", "SQL"] },
  { category: "AI & Vision", list: ["PyTorch", "OpenCV", "Scikit-Learn", "Computer Vision"] },
  { category: "Robotics & Sim", list: ["ROS2", "Three.js", "Physics Engines", "3D Modeling"] },
  { category: "Tools & Workflow", list: ["Git", "Linux/Bash", "Docker", "Vercel"] }
];