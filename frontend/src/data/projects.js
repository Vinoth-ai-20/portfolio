export const projects = [
  {
    id: 1,
    title: "Phylon",
    subtitle: "M.E. Thesis: Artificial Life Laboratory",
    status: "Active Development",
    statusColor: "green",
    stack: ["Rust", "wgpu (Vulkan/Metal/DX12)", "rayon", "ECS", "GPU Compute Shaders"],
    description:
      "My M.E. CSE thesis. A research-grade Artificial Life Laboratory built in Rust that simulates massive populations of neural-driven organisms in a deterministic physics environment. Enforces bit-exact reproducibility across platforms. Uses a 30-crate DAG workspace, ECS architecture, and GPU compute shaders for chemical diffusion at scale. Performance target: 100,000 organisms at 60 Hz.",
    github: "https://github.com/Vinoth-ai-20/phylon",
    demo: null,
  },
  {
    id: 2,
    title: "LumiRoom",
    subtitle: "AI-Assisted Mobile AR Interior Planning",
    status: "In Development",
    statusColor: "yellow",
    stack: ["Kotlin", "Jetpack Compose", "ARCore", "SceneView", "Firebase", "Hilt", "Material 3"],
    description:
      "Enterprise-grade Android application for AR furniture visualization and interior design. Combines ARCore spatial tracking with a 2D Room Planner using a shared reactive RoomState as the single source of truth. Supports true-to-scale 3D placement, bidirectional AR/2D sync, offline-first persistence via Room/SQLite, and a dynamically generated furniture catalog driven entirely by local asset naming conventions.",
    github: "https://github.com/Vinoth-ai-20/lumiroom",
    demo: null,
  },
  {
    id: 3,
    title: "Evolve-B",
    subtitle: "Realtime Evolutionary Ecosystem Simulation",
    status: "In Development",
    statusColor: "yellow",
    stack: ["FastAPI", "Python", "React 19", "TypeScript", "Zustand", "WebSockets", "Recharts"],
    description:
      "A real-time scientific evolutionary ecosystem simulation platform with live visualization and analytics. Runs 250+ organisms with 11-trait genomes at 30 Hz, tracking mutation, recombination, natural selection, and species divergence across four biomes. All simulation state streams live via WebSocket. Includes analytics dashboards for population, genetic diversity (Shannon entropy), and fitness history.",
    github: "https://github.com/Vinoth-ai-20/evolve-b",
    demo: null,
  },
  {
    id: 4,
    title: "FreelancerOS",
    subtitle: "Local-First CRM and Time Tracker",
    status: "In Development",
    statusColor: "yellow",
    stack: ["Tauri v2", "Rust", "React", "TypeScript", "SQLite", "Tailwind CSS", "shadcn/ui"],
    description:
      "A local-first CRM and time tracker built for Indian freelancers. No cloud, no subscription: data lives on your machine in SQLite via Tauri v2. Features a live start/stop timer with crash recovery, client management with status tracking, CSV export, collapsible sidebar, and an optional cloud sync (v0.7.0) via Supabase for backup and restore.",
    github: "https://github.com/Vinoth-ai-20/freelancer-os",
    demo: null,
  },
  {
    id: 5,
    title: "SJG ERP",
    subtitle: "Open-Source Desktop CRM/ERP System",
    status: "In Development",
    statusColor: "yellow",
    stack: ["Tauri v2", "Rust", "React 19", "TypeScript", "libsql", "Turso"],
    description:
      "A full-stack desktop CRM/ERP for Sri Janagai Groups, a family tailoring institution. Features customer CRM, education module, tailoring order management, RBAC auth (Argon2id), and offline-first Turso sync. Built on a 24-phase roadmap, currently at Phase 4.",
    github: "https://github.com/Vinoth-ai-20/sjg-erp",
    demo: null,
  },
  {
    id: 6,
    title: "NEAT Autonomous Driving Simulator",
    subtitle: "UG Capstone Project",
    status: "Completed",
    statusColor: "blue",
    stack: ["Python", "NEAT Algorithm", "Pygame"],
    description:
      "Autonomous vehicle simulator using NeuroEvolution of Augmenting Topologies. Vehicle agents evolve driving behavior over generations with no hand-coded rules. Emergent competence arises through natural selection. An early personal landmark in agent-based simulation research.",
    github: null,
    demo: null,
  },
];
