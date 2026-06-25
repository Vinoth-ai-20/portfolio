import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const fadeUpVariants = {
  hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const statusConfig = {
  green:  { dot: 'bg-emerald-400', text: 'text-emerald-400' },
  blue:   { dot: 'bg-blue-400',    text: 'text-blue-400'    },
  yellow: { dot: 'bg-yellow-400',  text: 'text-yellow-400'  },
  gray:   { dot: 'bg-gray-400',    text: 'text-gray-400'    },
};

function ProjectCard({ project }) {
  const status = statusConfig[project.statusColor] || statusConfig.gray;

  return (
    <motion.div
      variants={fadeUpVariants}
      whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -4 }}
      className="card flex flex-col group cursor-default
                 hover:shadow-xl hover:shadow-seagreen/10 transition-all duration-300
                 border border-transparent hover:border-seagreen/20"
    >
      {/* Status badge */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${status.dot} animate-pulse`} />
          <span className={`font-mono text-xs ${status.text}`}>{project.status}</span>
        </div>
      </div>

      {/* Title + Subtitle */}
      <h3 className="font-display font-bold text-xl text-black dark:text-white mb-1 leading-tight">
        {project.title}
      </h3>
      <p className="font-mono text-xs text-seagreen mb-3">{project.subtitle}</p>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.stack.map(tech => (
          <span key={tech} className="tag text-xs">{tech}</span>
        ))}
      </div>

      {/* Description */}
      <p className="font-body text-sm text-black/70 dark:text-alabaster/80 leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* Links */}
      <div className="flex items-center gap-3 mt-auto">
        {project.github && (
          <a
            id={`project-${project.id}-github`}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-seagreen/70 hover:text-seagreen text-sm font-mono transition-colors duration-200"
            aria-label={`${project.title} GitHub`}
          >
            <ExternalLink size={16} />
            <span>GitHub</span>
          </a>
        )}
        {project.demo && (
          <a
            id={`project-${project.id}-demo`}
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-seagreen/70 hover:text-seagreen text-sm font-mono transition-colors duration-200"
            aria-label={`${project.title} demo`}
          >
            <ExternalLink size={16} />
            <span>Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white dark:bg-black">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Heading */}
          <motion.div variants={fadeUpVariants} className="mb-4">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-black dark:text-white">
              Other Projects
            </h2>
            <div className="w-16 h-1 bg-seagreen rounded-full mt-4" />
          </motion.div>
          <motion.p
            variants={fadeUpVariants}
            className="font-body text-black/60 dark:text-alabaster/70 mb-12 text-lg"
          >
            Systems, platforms, and experiments across simulation, enterprise, and HPC.
          </motion.p>

          {/* Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
