export const projects = [
  {
    id: 1,
    title: "SJG ERP",
    subtitle: "Open-Source CRM / ERP System",
    status: "In Development",
    statusColor: "green",
    stack: ["Tauri v2", "Rust", "React 19", "TypeScript", "libsql", "Turso"],
    description:
      "A full-stack desktop CRM/ERP for Sri Janagai Groups — a family tailoring institution. Built with Tauri v2 (Rust) and React 19. Features customer CRM, education module, tailoring order management, RBAC auth (Argon2id), and offline-first Turso sync. 24-phase roadmap, currently at Phase 4.",
    github: "https://github.com/Vinoth-ai-20",
    demo: null,
  },
  {
    id: 2,
    title: "NEAT Autonomous Driving Simulator",
    subtitle: "UG Capstone Project",
    status: "Completed",
    statusColor: "blue",
    stack: ["Python", "NEAT Algorithm", "Pygame"],
    description:
      "Autonomous vehicle simulator using NeuroEvolution of Augmenting Topologies. Individual vehicle agents evolve driving behavior over generations with no hand-coded rules — emergent competence through natural selection. An early personal landmark in agent-based simulation.",
    github: "https://github.com/Vinoth-ai-20",
    demo: null,
  },
  {
    id: 3,
    title: "AR Furniture Visualization App",
    subtitle: "M.E. Final Project",
    status: "In Progress",
    statusColor: "yellow",
    stack: ["Unify Engine", "Python", "AR", "Voice Commands"],
    description:
      "Augmented reality application for visualizing furniture placement in real rooms. Users scan their room, then place and reposition 3D furniture models using voice commands. Built as the M.E. Computer Science Engineering final project.",
    github: "https://github.com/Vinoth-ai-20",
    demo: null,
  },
  {
    id: 4,
    title: "COSMOS HPC DPR",
    subtitle: "Distributed Computing Platform",
    status: "Paused",
    statusColor: "gray",
    stack: ["Rust", "Axum", "Next.js", "Kubernetes", "PostgreSQL", "Turborepo"],
    description:
      "Kubernetes-based HPC distributed processing platform. Completed Week 1 (monorepo bootstrap with Turborepo + Cargo workspace) and Week 2 (auth infrastructure). Paused to focus on ecological simulation research.",
    github: "https://github.com/Vinoth-ai-20",
    demo: null,
  },
  {
    id: 5,
    title: "NEXUSIM HPC",
    subtitle: "Scientific Computing Platform",
    status: "Paused",
    statusColor: "gray",
    stack: ["Rust", "Axum", "Next.js", "PostgreSQL", "MinIO", "Docker", "k3d"],
    description:
      "Cloud-native HPC simulation management platform for computational chemistry workflows (Gaussian 16, ORCA). Features JWT auth, Jobs CRUD with RBAC, Zustand frontend store, and Docker Compose stack. Two weeks of an 8-phase roadmap completed.",
    github: "https://github.com/Vinoth-ai-20",
    demo: null,
  },
];
