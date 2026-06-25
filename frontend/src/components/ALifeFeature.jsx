import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Cpu, Layers, GitBranch } from 'lucide-react';

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
  'Distributed Computing',
  'Research Software Engineering',
];

// Architecture diagram node component
function ArchNode({ label, sublabel, color = 'seagreen', highlight = false }) {
  return (
    <div
      className={`rounded-xl px-4 py-3 text-center border transition-all duration-300
        ${highlight
          ? 'bg-seagreen/20 border-seagreen text-white shadow-lg shadow-seagreen/20'
          : 'bg-prussian/60 border-prussian/80 text-alabaster'
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
  return (
    <section
      id="alife"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #000 0%, #0a1628 40%, #14213d 100%)' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(92,148,110,0.08) 0%, transparent 70%)',
        }}
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
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              Artificial Life Simulator
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUpVariants}
            className="font-display text-xl md:text-2xl text-seagreen mb-12 font-medium"
          >
            EcoSim Lab & Phylon — Building the Platform
          </motion.p>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-10 mb-14">
            {/* Left — Description */}
            <motion.div variants={fadeUpVariants} className="space-y-6">
              <h3 className="font-display font-bold text-2xl text-white leading-snug">
                An open-source platform for agent-based simulation, evolutionary
                computation, and emergent behavior research.
              </h3>

              <div className="space-y-4 text-alabaster/90 font-body leading-relaxed">
                <p>
                  <span className="text-seagreen font-semibold">EcoSim Lab</span> is a
                  web-based agent-based ecological simulation platform — the active
                  prototype of a larger vision called Phylon.
                </p>
                <p>
                  Built with Python, Mesa, FastAPI, and React, EcoSim Lab models
                  multi-species ecosystems where individual agents follow simple behavioral
                  rules and complex population dynamics emerge from their interactions.
                </p>
                <p>
                  <span className="text-seagreen font-semibold">Phylon</span> extends this
                  into a research-grade Artificial Life Laboratory: a GPU-capable, massively
                  scalable simulation environment for studying evolution, emergence, and
                  adaptive intelligence — with no game engine dependencies and full
                  scientific reproducibility built in.
                </p>
              </div>

              {/* Research angle */}
              <div className="border-l-2 border-seagreen pl-4">
                <p className="font-body text-alabaster/80 italic text-sm leading-relaxed">
                  This work directly addresses a gap in the research software ecosystem:
                  most ecologists and ALife researchers lack accessible, reproducible,
                  web-based tools for interactive simulation. Phylon aims to be that tool.
                </p>
              </div>
            </motion.div>

            {/* Right — Cards */}
            <motion.div variants={staggerContainer} className="space-y-4">
              {/* EcoSim Lab Card */}
              <motion.div
                variants={fadeUpVariants}
                className="rounded-2xl p-6 border border-seagreen/30 bg-black/40 backdrop-blur-sm
                           hover:border-seagreen/60 transition-all duration-300 hover:shadow-lg hover:shadow-seagreen/10"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Layers size={16} className="text-seagreen" />
                      <span className="font-display font-bold text-white text-lg">
                        EcoSim Lab
                      </span>
                    </div>
                    <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-seagreen/20 text-seagreen border border-seagreen/30">
                      In Development
                    </span>
                  </div>
                  <a
                    id="ecosim-github-link"
                    href="https://github.com/Vinoth-ai-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-seagreen/60 hover:text-seagreen transition-colors"
                    aria-label="EcoSim Lab GitHub"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {['Python', 'Mesa', 'FastAPI', 'React', 'Docker'].map(t => (
                    <span key={t} className="tag text-xs">{t}</span>
                  ))}
                </div>
                <div className="font-mono text-xs text-alabaster/70 space-y-1 bg-prussian/30 rounded-lg p-3">
                  <p className="text-seagreen/80">// Architecture</p>
                  <p>Mesa engine → FastAPI backend → React frontend</p>
                  <p>50×50 spatial grid · Wolf / Sheep / Grass agents</p>
                  <p>ODD Protocol documented · Sensitivity analysis</p>
                </div>
              </motion.div>

              {/* Phylon Card */}
              <motion.div
                variants={fadeUpVariants}
                className="rounded-2xl p-6 border border-prussian/60 bg-black/40 backdrop-blur-sm
                           hover:border-seagreen/30 transition-all duration-300 hover:shadow-lg hover:shadow-seagreen/5"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Cpu size={16} className="text-seagreen/70" />
                      <span className="font-display font-bold text-white text-lg">
                        Phylon
                      </span>
                    </div>
                    <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-prussian/60 text-alabaster/70 border border-prussian/80">
                      Research Design Phase
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {['Rust', 'WASM', 'GPU (CUDA/WGPU)'].map(t => (
                    <span key={t} className="tag text-xs">{t}</span>
                  ))}
                </div>
                <div className="font-body text-sm text-alabaster/70 space-y-1.5">
                  <p className="flex items-start gap-2">
                    <ArrowRight size={14} className="text-seagreen/60 flex-shrink-0 mt-0.5" />
                    Each organism = autonomous Rust agent
                  </p>
                  <p className="flex items-start gap-2">
                    <ArrowRight size={14} className="text-seagreen/60 flex-shrink-0 mt-0.5" />
                    GPU-accelerated massive population runs
                  </p>
                  <p className="flex items-start gap-2">
                    <ArrowRight size={14} className="text-seagreen/60 flex-shrink-0 mt-0.5" />
                    Emergent behavior, evolutionary computation, adaptive intelligence
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Architecture Diagram */}
          <motion.div variants={fadeUpVariants} className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <GitBranch size={18} className="text-seagreen" />
              <p className="font-mono text-sm text-seagreen">system_architecture.diagram</p>
            </div>
            <div className="rounded-2xl border border-prussian/60 bg-black/60 p-6 backdrop-blur-sm max-w-sm mx-auto">
              <ArchNode label="React Frontend" sublabel="Visualization" highlight />
              <ArchArrow />
              <ArchNode
                label="FastAPI Backend"
                sublabel="Simulation Controller"
              />
              <ArchArrow />
              <ArchNode label="Mesa Engine" sublabel="Agent Logic" />
              <ArchArrow />
              <div className="rounded-xl px-4 py-3 text-center border border-prussian/50 bg-prussian/30">
                <p className="font-mono text-xs text-alabaster/70">
                  Wolf Agents · Sheep Agents · Grass Agents
                </p>
              </div>
              <ArchArrow />
              <ArchNode label="Rust Core · GPU Compute · WASM Bridge" sublabel="Phylon extension" />
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
