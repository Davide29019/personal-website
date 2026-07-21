export const personalInfo = {
  name: "Davide",
  role: "AI & Robotics Engineer",
  tagline: "Bridging the gap between Deep Learning, NLP, Computer Vision, and Autonomous Robotics.",
  about: "Master's student in AI and Robotics at Sapienza University of Rome. My passion spans across General AI, Computer Vision, Natural Language Processing, and physical robot deployment. I love building intelligent systems from the ground up, whether it's fine-tuning LLMs for RAG pipelines, adapting Vision Foundation Models (VFMs), or applying machine learning to robot kinematics. Currently, I'm working with ROS2 and exploring the cutting-edge field of Medical Robotics and Surgical Scene Understanding.",
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
    title: "AI-Generated Image & Degradation Detector",
    description: "A dual-task Computer Vision pipeline to simultaneously classify AI-generated images and identify real-world post-processing alterations.",
    techStack: ["PyTorch", "DINOv3", "LoRA", "FFT"],
    highlights: [
      "Combined visual features from a frozen DINOv3 backbone with a custom 2D Fast Fourier Transform (FFT) frequency descriptor.",
      "Fine-tuned the model using LoRA adapters, achieving ~96% accuracy on complex image degradations."
    ],
    githubUrl: "https://github.com/tuo-username/cv-aigi-detection",
    demoUrl: "",
    featured: true
  },
  {
    title: "Multilingual RAG & LLM Fine-Tuning",
    description: "An end-to-end Retrieval-Augmented Generation (RAG) system with bi-encoder semantic search and custom instruction-tuned small LLMs.",
    techStack: ["HuggingFace", "SentenceTransformers", "Qwen", "LoRA"],
    highlights: [
      "Trained bi-encoders using Triplet Loss for robust semantic document retrieval and reranking.",
      "Applied LoRA fine-tuning to small LLMs (SmolLM/Qwen) and evaluated generation quality using an LLM-as-a-judge approach."
    ],
    githubUrl: "https://github.com/tuo-username/mnlp-rag-system",
    demoUrl: "",
    featured: true
  },
  {
    title: "Machine Learning for Robot Kinematics & Perception",
    description: "Deep learning models to solve complex robotic inverse kinematics and visual perception tasks in a Robot Soccer environment.",
    techStack: ["PyTorch", "Optuna", "ResNet", "Ensemble NNs"],
    highlights: [
      "Designed Neural Network Ensembles to solve Inverse Kinematics for 3, 4, and 6-DOF robotic manipulators without analytical models.",
      "Developed custom CNNs and fine-tuned ResNet18 architectures for highly imbalanced object classification and coordinate regression."
    ],
    githubUrl: "https://github.com/tuo-username/ml-robotics",
    demoUrl: "",
    featured: true
  },
  {
    title: "Interactive CC8: 3D Mars Rover Simulation",
    description: "A real-time, browser-based 3D simulation featuring a drivable rover with physically-animated suspension across procedural terrain.",
    techStack: ["JavaScript", "Three.js", "WebGL", "Procedural Generation"],
    highlights: [
      "Implemented an infinite chunk-streaming procedural terrain using fractional Brownian motion (fBm) and dynamic day/night cycles.",
      "Programmed a working rocker-bogie suspension system based on terrain-height sampling and real-time particle emission."
    ],
    githubUrl: "https://github.com/tuo-username/interactive-cc8",
    demoUrl: "", // Add link if you hosted the game online!
    featured: true
  }
];

export const skills = [
  { category: "Core & Frameworks", list: ["Python", "C++", "PyTorch", "HuggingFace", "Optuna"] },
  { category: "Computer Vision", list: ["DINOv3", "ResNet", "CNNs", "Object Localization", "Feature Extraction"] },
  { category: "NLP & LLMs", list: ["RAG Systems", "LoRA Fine-tuning", "Sentence Transformers", "Semantic Search"] },
  { category: "Robotics & Sim", list: ["ROS2", "Medical Robotics", "Kinematics", "Three.js", "Simulation"] }
];