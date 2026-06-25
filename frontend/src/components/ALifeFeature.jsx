import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Cpu, Layers, GitBranch } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const fadeUpVariants = {
  hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const featureTags = [
  'Agent-Based Modeling',
  'Evolutionary Computation',
  'Emergent Behavior',
  'Predator-Prey Dynamics',
  'ODD Protocol',
  'Scientific Reproducibility',
  'Spatial Simulation',
  'Rust Systems Programming',
  'Research Software Engineering',
];

// Architecture diagram node component
function ArchNode({ label, sublabel, highlight = false }) {
  return (
    <div
      className={`rounded-xl px-4 py-3 text-center border transition-all duration-300
        ${highlight
          ? 'bg-seagreen/20 border-seagreen text-gray-900 dark:text-white shadow-lg shadow-seagreen/20'
          : 'bg-gray-50 border-gray-200 text-gray-700 dark:bg-prussian/60 dark:border-prussian/80 dark:text-alabaster'
        }`}
    >
      <p className="font-mono text-sm font-medium">{label}</p>
      {sublabel && (
        <p className="font-mono text-xs text-seagreen/70 mt-0.5">{sublabel}</p>
      )}
    </div>
  );
}

function ArchArrow() {
  return (
    <div className="flex flex-col items-center py-1">
      <div className="w-px h-4 bg-seagreen/30" />
      <div className="text-seagreen/50 text-xs">↕</div>
      <div className="w-px h-4 bg-seagreen/30" />
    </div>
  );
}

export default function ALifeFeature() {
  const { theme } = useTheme();

  const sectionStyle = theme === 'dark'
    ? { background: 'linear-gradient(180deg, #000 0%, #0a1628 40%, #14213d 100%)' }
    : { background: 'linear-gradient(180deg, #f0f4ff 0%, #e8eef8 40%, #dce6f5 100%)' };

  const headingClass = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const bodyClass = theme === 'dark' ? 'text-alabaster/90' : 'text-gray-700';
  const quoteClass = theme === 'dark' ? 'text-alabaster/80' : 'text-gray-600';
  const glowStyle = theme === 'dark'
    ? { background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(13,148,136,0.08) 0%, transparent 70%)' }
    : { background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(13,148,136,0.06) 0%, transparent 70%)' };

  return (
    <section
      id="alife"
      className="section-padding relative overflow-hidden"
      style={sectionStyle}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={glowStyle}
      />

      <div className="section-container relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUpVariants}
            className="font-mono text-seagreen text-sm mb-3"
          >
            research_focus.primary
          </motion.p>

          {/* Heading */}
          <motion.div variants={fadeUpVariants} className="mb-2">
            <h2 className={`font-display font-bold text-4xl md:text-5xl ${headingClass}`}>
              Artificial Life Research
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUpVariants}
            className="font-display text-xl md:text-2xl text-seagreen mb-12 font-medium"
          >
            Building Phylon: My M.E. Thesis and Primary Research Platform
          </motion.p>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-10 mb-14">
            {/* Left — Description */}
            <motion.div variants={fadeUpVariants} className="space-y-6">
              <h3 className={`font-display font-bold text-2xl ${headingClass} leading-snug`}>
                An open-source platform for agent-based simulation, evolutionary
                computation, and emergent behavior research.
              </h3>

              <div className={`space-y-4 ${bodyClass} font-body leading-relaxed`}>
                <p>
                  <span className="text-seagreen font-semibold">Phylon</span> is my
                  M.E. Computer Science Engineering thesis. It simulates massive populations
                  of neural-driven organisms in a continuous, deterministic physics environment
                  using a data-oriented Entity-Component-System (ECS) architecture tightly
                  coupled with GPU compute shaders to solve chemical diffusion and rigid-body
                  mechanics at scale.
                </p>
                <p>
                  The system enforces bit-exact reproducibility across platforms using custom
                  fixed-timestep updates. All entities participate in a closed-loop chemical
                  economy (Glucose, O2, CO2, ATP), with organism bodies growing fractally via
                  L-System morphology (HoxSequence genetics). Day/Night cycles, driven by a
                  shifted cosine wave, create environmental pressure that culls inefficient
                  metabolisms.
                </p>
                <p>
                  The workspace is structured as a strict 30-crate Directed Acyclic Graph (DAG)
                  ensuring rapid compilation and clean boundary encapsulation between rendering,
                  simulation, and data analytics layers.
                </p>
              </div>

              {/* Research angle */}
              <div className="border-l-2 border-seagreen pl-4">
                <p className={`font-body ${quoteClass} italic text-sm leading-relaxed`}>
                  Phylon directly addresses a gap in the research software ecosystem:
                  most ALife researchers lack accessible, reproducible, high-performance
                  tools for large-scale agent simulation. Phylon is designed to be that
                  tool. It is also the foundation of my PhD application portfolio.
                </p>
              </div>
            </motion.div>

            {/* Right — Cards */}
            <motion.div variants={staggerContainer} className="space-y-4">
              {/* Phylon Card — PRIMARY, active */}
              <motion.div
                variants={fadeUpVariants}
                className="rounded-2xl p-6 border border-seagreen/50 backdrop-blur-sm
                           hover:border-seagreen transition-all duration-300 hover:shadow-lg hover:shadow-seagreen/15
                           ring-1 ring-seagreen/20
                           bg-white/80 dark:bg-black/40"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Cpu size={16} className="text-seagreen" />
                      <span className="font-display font-bold text-gray-900 dark:text-white text-lg">
                        Phylon
                      </span>
                    </div>
                    <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-seagreen/20 text-seagreen border border-seagreen/40">
                      Active: M.E. Thesis
                    </span>
                  </div>
                  <a
                    id="phylon-github-link"
                    href="https://github.com/Vinoth-ai-20/phylon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-seagreen/60 hover:text-seagreen transition-colors"
                    aria-label="Phylon GitHub"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {['Rust', 'WASM', 'GPU (CUDA/WGPU)', 'Agent-Based Modeling'].map(t => (
                    <span key={t} className="tag text-xs">{t}</span>
                  ))}
                </div>
                <div className="font-body text-sm text-gray-700 dark:text-alabaster/80 space-y-1.5">
                  <p className="flex items-start gap-2">
                    <ArrowRight size={14} className="text-seagreen/60 flex-shrink-0 mt-0.5" />
                    ECS architecture with lock-free parallel processing via rayon
                  </p>
                  <p className="flex items-start gap-2">
                    <ArrowRight size={14} className="text-seagreen/60 flex-shrink-0 mt-0.5" />
                    GPU compute shaders (wgpu) for chemical diffusion at scale
                  </p>
                  <p className="flex items-start gap-2">
                    <ArrowRight size={14} className="text-seagreen/60 flex-shrink-0 mt-0.5" />
                    Performance target: 100,000 organisms at 60 Hz tick rate
                  </p>
                  <p className="flex items-start gap-2">
                    <ArrowRight size={14} className="text-seagreen/60 flex-shrink-0 mt-0.5" />
                    L-System morphology, chemical economy, and Day/Night ecological pressure
                  </p>
                </div>
              </motion.div>

              {/* EcoSim Lab Card — Planned / Not Started */}
              <motion.div
                variants={fadeUpVariants}
                className="rounded-2xl p-6 border backdrop-blur-sm
                           hover:border-seagreen/20 transition-all duration-300
                           border-gray-200 bg-white/60 dark:border-prussian/60 dark:bg-black/40"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Layers size={16} className="text-gray-400 dark:text-alabaster/40" />
                      <span className="font-display font-bold text-gray-500 dark:text-white/70 text-lg">
                        EcoSim Lab
                      </span>
                    </div>
                    <span className="font-mono text-xs px-2 py-0.5 rounded-full
                                    bg-gray-100 text-gray-500 border border-gray-200
                                    dark:bg-prussian/60 dark:text-alabaster/50 dark:border-prussian/80">
                      Planned: Not Yet Started
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {['Python', 'Mesa', 'FastAPI', 'React'].map(t => (
                    <span key={t} className="font-mono text-xs px-3 py-1 rounded-full border
                                            border-gray-200 text-gray-400
                                            dark:border-prussian/60 dark:text-alabaster/40">{t}</span>
                  ))}
                </div>
                <div className="font-body text-sm text-gray-500 dark:text-alabaster/50 space-y-1.5">
                  <p>
                    A separate, independent web-based ecological simulation platform
                    planned for future development. Not connected to Phylon. Will model
                    multi-species ecosystems using Mesa with a React visualization frontend.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Architecture Diagram — Phylon focused */}
          <motion.div variants={fadeUpVariants} className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <GitBranch size={18} className="text-seagreen" />
              <p className="font-mono text-sm text-seagreen">phylon_architecture.diagram</p>
            </div>
            <div className="rounded-2xl border p-6 backdrop-blur-sm max-w-sm mx-auto
                           border-gray-200 bg-white/60 dark:border-prussian/60 dark:bg-black/60">
              <ArchNode label="wgpu Shader Layer" sublabel="Vulkan / Metal / DX12" highlight />
              <ArchArrow />
              <ArchNode label="GPU Compute Engine" sublabel="Chemical Diffusion + Rigid-Body" />
              <ArchArrow />
              <ArchNode label="ECS Core (Rust)" sublabel="30-crate DAG Workspace" />
              <ArchArrow />
              <div className="rounded-xl px-4 py-3 text-center border
                             border-gray-200 bg-gray-50 dark:border-prussian/50 dark:bg-prussian/30">
                <p className="font-mono text-xs text-gray-600 dark:text-alabaster/70">
                  Neural Agents with L-System Morphology and Chemical Economy
                </p>
              </div>
            </div>
          </motion.div>

          {/* Feature tags */}
          <motion.div variants={fadeUpVariants}>
            <p className="font-mono text-xs text-seagreen/60 mb-4">research_domains:</p>
            <div className="flex flex-wrap gap-2">
              {featureTags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
