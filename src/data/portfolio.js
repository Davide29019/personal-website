export const personalInfo = {
  name: "Davide Ottaviani",
  role: "AI & Robotics Engineer",
  tagline: "Building intelligent systems across Computer Vision, NLP, and Robotics.",
  about:
    "MSc student in Artificial Intelligence and Robotics at Sapienza University of Rome (BS in Computer and Control Engineering, 110/110). I work across the full stack of modern AI: fine-tuning vision foundation models, building RAG pipelines with LLMs, and applying deep learning to robot kinematics and perception. Currently exploring ROS2 and surgical scene understanding.",
  location: "Rome, Italy",
  socials: {
    github: "https://github.com/Davide29019",
    linkedin: "https://www.linkedin.com/in/davide-ottaviani-5079a3232/",
    emailUser: "davide.ottaviani.dev",
    emailDomain: "gmail.com",
    cvPdf: "/Davide_Ottaviani_CV_no_phone_number.pdf",
  },
};

export const education = [
  {
    school: "Sapienza University of Rome",
    degree: "MSc, Artificial Intelligence and Robotics",
    period: "Oct 2025 – Present",
  },
  {
    school: "Sapienza University of Rome",
    degree: "BS, Computer and Control Engineering",
    period: "Sept 2022 – Oct 2025",
  },
];

export const projects = [
  {
    title: "Joint Detection of AI-Generated Images & Post-Processing",
    description:
      "A dual-task Computer Vision pipeline that simultaneously classifies AI-generated images and identifies the post-processing applied to them (original / transmitted / re-digitized), on a frozen DINOv3 backbone.",
    techStack: ["PyTorch", "DINOv3 (ViT-B/16)", "LoRA / PEFT", "Transformers"],
    highlights: [
      "Combined frozen DINOv3 visual features with a custom 2D FFT frequency descriptor to capture low-level compression artifacts the backbone alone misses.",
      "Compared Baseline, Joint, and LoRA training regimes across 6 configurations; the best (LoRA + FFT) reached 95.7% real/fake accuracy and 96.4% transformation-type accuracy.",
      "Full ablations on loss-weighting and shared-trunk bottleneck size to characterize the trade-off between the two tasks.",
    ],
    githubUrl: "https://github.com/janniuni/cv_project_2526",
    demoUrl: "",
    featured: true,
  },
  {
    title: "Multilingual Semantic Search & RAG System",
    description:
      "An end-to-end Retrieval-Augmented Generation pipeline: a bi-encoder retriever with cross-encoder reranking, feeding small instruction-tuned LLMs evaluated with LLM-as-a-judge and human annotation.",
    techStack: ["Python", "SentenceTransformers", "PyTorch", "Qwen3 / SmolLM2", "LoRA"],
    highlights: [
      "Fine-tuned DistilBERT and all-MiniLM with MultipleNegativesRankingLoss (Sentence Pairs vs. Triplets); best pipeline (Triplets + cross-encoder reranking) reached MRR 0.72, up from a 0.37 baseline.",
      "Built a full RAG generation stage across 6 prompting configurations (Baseline, RAG, Oracle, Few-Shot, Wikidata-augmented), and LoRA fine-tuned the best model, lifting Sub-EM from 0.286 to 0.321.",
      "Validated an LLM-as-a-judge against two independent human annotators (Cohen's Kappa 0.95 human-human), quantifying the judge's harshness and failure modes.",
    ],
    githubUrl: "",
    demoUrl: "",
    featured: true,
  },
  {
    title: "Machine Learning for Robot Kinematics & Perception",
    description:
      "Deep learning models for model-free inverse kinematics and visual perception in a Robot Soccer environment, with systematic hyperparameter search via Optuna.",
    techStack: ["PyTorch", "Optuna", "ResNet18", "Ensemble NNs"],
    highlights: [
      "Trained Ensembles of Feedforward Neural Networks to learn inverse kinematics for 3, 4, and 6-DOF robotic arms directly from data, reaching R² ≈ 0.66 on non-redundant robots.",
      "Identified and resolved a severe cross-session distribution shift by merging acquisition logs, turning a catastrophic negative R² into stable generalization.",
      "Built a ResNet18-based object classifier (99.27% accuracy) and a conditional regression head for object localization under strong class imbalance.",
    ],
    githubUrl: "",
    demoUrl: "",
    featured: true,
  },
  {
    title: "Interactive CC8 — Procedural Mars Rover 3D Game",
    description:
      "A real-time, browser-based 3D driving game built from scratch with Three.js: a rover crosses a procedurally generated Martian desert with a physically animated suspension and a dependency-driven mission system.",
    techStack: ["JavaScript", "Three.js", "WebGL", "Vite"],
    highlights: [
      "Implemented infinite chunk-streaming procedural terrain (5-octave simplex fBm) with seamless cross-chunk stitching and a dynamic day/night lighting cycle.",
      "Built a working rocker-bogie suspension driven by live terrain-height sampling, plus GPU-instanced dust and nitro particle systems with custom shaders.",
      "Designed a data-driven mission/dependency system, procedural structure placement, and live-synthesized audio via the Web Audio API.",
    ],
    githubUrl: "https://github.com/SapienzaInteractiveGraphicsCourse/final-project-interactivecc8",
    demoUrl: "https://sapienzainteractivegraphicscourse.github.io/final-project-interactivecc8/",
    featured: true,
  },
];

export const skills = [
  {
    category: "Languages",
    list: ["Python", "C++", "C", "Java", "JavaScript", "SQL", "MATLAB"],
  },
  {
    category: "AI / ML / NLP / Vision",
    list: ["PyTorch", "Transformers", "SentenceTransformers", "OpenCV", "LoRA / PEFT", "Optuna"],
  },
  {
    category: "Robotics & Simulation",
    list: ["ROS2", "Kinematics", "Three.js", "WebGL", "3D Simulation"],
  },
  {
    category: "Tools & Workflow",
    list: ["Git / GitHub", "Docker", "Linux / Bash", "REST APIs", "Vercel"],
  },
];