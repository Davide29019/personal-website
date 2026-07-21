export const personalInfo = {
  name: "Davide",
  role: "AI, NLP & Robotics MSc Student",
  tagline: "AI · NLP · Computer Vision · Robotics",
  about: "Master's student working across AI/ML, NLP, computer vision, and robotics (ROS2). Comfortable moving from research-style experimentation — model training, ablations, fine-tuning strategies — to full engineering pipelines, from data to deployment. Robotics and medical robotics are long-term interests I keep coming back to.",
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
    title: "Joint Detection of AI-Generated Images & Post-Processing",
    description: "Computer Vision exam project: a dual-task pipeline detecting whether an image is real or AI-generated and identifying its post-processing (original / transmitted / re-digitized), using a frozen DINOv3 backbone, an optional FFT frequency branch, and LoRA adapters.",
    techStack: ["PyTorch", "DINOv3 (ViT-B/16)", "LoRA", "FFT", "Transformers"],
    highlights: [
      "Compared Baseline, Joint, and LoRA regimes across 6 configurations (CLS vs CLS+FFT features).",
      "Best model (LoRA + FFT) reached 95.7% real/fake accuracy and 96.4% transformation-type accuracy.",
      "Ablation on loss-weighting and shared-trunk bottleneck size to study task competition vs complementarity."
    ],
    githubUrl: "https://github.com/tuo-username/ai-image-detection",
    demoUrl: "",
    featured: true
  },
  {
    title: "Multilingual Semantic Search & Retrieval",
    description: "Information retrieval system built on a bi-encoder architecture, comparing baseline and fine-tuned sentence embedding models (Sentence Pairs vs Triplets) with a cross-encoder reranking stage on top.",
    techStack: ["Python", "SentenceTransformers", "PyTorch", "Cross-Encoder"],
    highlights: [
      "Fine-tuned distilbert and all-MiniLM with MultipleNegativesRankingLoss, comparing pair vs triplet strategies.",
      "Best pipeline (Triplets + reranking) reached MRR 0.72, up from a 0.37 baseline.",
      "Analyzed cosine vs Euclidean similarity behavior under embedding normalization."
    ],
    githubUrl: "https://github.com/tuo-username/semantic-search-nlp",
    demoUrl: "",
    featured: true
  },
  {
    title: "Interactive CC8 — Procedural Mars Rover 3D Game",
    description: "Browser-based 3D driving game built from scratch with Three.js: pilot a rover across a procedurally generated Martian desert with a working rocker-bogie suspension, day/night cycle, and a mission system.",
    techStack: ["Three.js", "JavaScript", "WebGL", "Vite"],
    highlights: [
      "Infinite procedural terrain via simplex-noise fBm with seamless chunk streaming.",
      "Physically-animated rocker-bogie suspension sampling terrain height per wheel.",
      "Live-synthesized audio, dynamic lighting, and a dependency-driven mission system."
    ],
    githubUrl: "https://github.com/SapienzaInteractiveGraphicsCourse/final-project-interactivecc8",
    demoUrl: "https://sapienzainteractivegraphicscourse.github.io/final-project-interactivecc8/",
    featured: true
  }
];

export const skills = [
  { category: "core", list: ["Python", "C++", "JavaScript", "SQL"] },
  { category: "ai_nlp_vision", list: ["PyTorch", "Transformers", "SentenceTransformers", "OpenCV", "LoRA / PEFT"] },
  { category: "robotics", list: ["ROS2", "Three.js", "Kinematics", "3D Simulation"] },
  { category: "tools", list: ["Git", "Linux / Bash", "Docker", "Vercel"] }
];

export const currentlyExploring = [
  "Medical robotics — surgical scene understanding (Critical View of Safety on laparoscopic video)",
  "Vision-language alignment for domain-specific, low-data settings (CoOp / adapter-based prompt tuning)"
];