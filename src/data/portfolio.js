export const personalInfo = {
  name: "Davide",
  role: "AI & Robotics MSc Student",
  tagline: "Building software at the intersection of Artificial Intelligence, Computer Vision, and Robotics.",
  about: "Master's student in AI and Robotics focused on real-time 3D simulations, feature tracking pipelines, and scalable software architectures. Passionate about understanding complex systems from scratch and delivering functional proof-of-concept projects.",
  location: "Rome, Italy",
  socials: {
    github: "https://github.com/tuo-username",
    linkedin: "https://linkedin.com/in/tuo-username",
    email: "tua-email@email.com",
    cvPdf: "/resume.pdf"
  }
};

export const projects = [
  {
    title: "Interactive 3D Rover & Dust Particle Simulation",
    description: "A real-time web simulation demonstrating vehicle locomotion dynamics and custom physics-based dust particle rendering over terrain.",
    techStack: ["Three.js", "JavaScript", "WebGL", "Physics Engine"],
    highlights: [
      "Custom particle shading and dynamic wheel-terrain interaction physics.",
      "Optimized real-time rendering loop built with vanilla JavaScript & WebGL."
    ],
    githubUrl: "https://github.com/tuo-username/rover-sim",
    demoUrl: "", // Add link if available
    featured: true
  },
  {
    title: "Computer Vision & Visual Odometry Pipeline",
    description: "Feature tracking and camera trajectory estimation system designed for mobile robot state estimation.",
    techStack: ["Python", "OpenCV", "C++", "ROS2"],
    highlights: [
      "Optimized SIFT/ORB feature extraction and keypoint matching.",
      "3D camera pose estimation with trajectory drift reduction."
    ],
    githubUrl: "https://github.com/tuo-username/visual-odometry",
    demoUrl: "",
    featured: true
  }
];

export const skills = [
  { category: "Core & Languages", list: ["Python", "C++", "JavaScript", "SQL"] },
  { category: "AI & Computer Vision", list: ["PyTorch", "OpenCV", "Scikit-Learn", "Feature Matching"] },
  { category: "Robotics & Physics", list: ["ROS2", "Three.js", "Kinematics", "3D Simulation"] },
  { category: "Tools & Environment", list: ["Git", "Linux / Bash", "Docker", "Vercel"] }
];