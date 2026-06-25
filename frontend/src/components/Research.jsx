import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Clock, FlaskConical } from 'lucide-react';

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

const researchInterests = [
  'Computational Ecology',
  'Agent-Based Modeling & Simulation',
  'Research Software Engineering for Life Sciences',
  'Emergent Behavior & Complex Systems',
  'Distributed Scientific Computing',
  'Evolutionary Computation',
];

const timeline = [
  { date: 'Aug 2026', event: 'M.E. degree conferred' },
  { date: 'Nov 2026', event: 'EcoSim Lab v1.0 public' },
  { date: 'Dec 2026', event: 'Literature review on arXiv' },
  { date: 'Jan 2027', event: 'PhD applications submitted' },
  { date: '2027–2028', event: 'PhD begins' },
];

export default function Research() {
  return (
    <section id="research" className="section-padding bg-white dark:bg-black">
      <div className="section-container">
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
            phd_application_status.active
          </motion.p>

          {/* Heading */}
          <motion.div variants={fadeUpVariants} className="mb-3">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-black dark:text-white">
              Research Direction
            </h2>
            <div className="w-16 h-1 bg-seagreen rounded-full mt-4" />
          </motion.div>
          <motion.p
            variants={fadeUpVariants}
            className="font-body text-black/60 dark:text-alabaster/70 mb-12 text-lg"
          >
            Targeting fully funded PhD positions in Computational Ecology — Europe 2027
          </motion.p>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left — Research statement */}
            <motion.div variants={fadeUpVariants} className="space-y-5">
              <p className="font-body text-black/80 dark:text-alabaster leading-relaxed">
                I am pursuing a fully funded PhD in Computational Ecology and Agent-Based
                Modeling at a European research university, targeting the 2027 intake.
              </p>
              <p className="font-body text-black/80 dark:text-alabaster leading-relaxed">
                My research focus: building open-source simulation infrastructure that
                enables ecologists and biologists to model complex ecosystem dynamics
                without requiring deep programming expertise.
              </p>
              <p className="font-body text-black/80 dark:text-alabaster leading-relaxed">
                The work connects directly to what I am building now — EcoSim Lab is the
                foundation of my PhD application portfolio and my proof of concept as a
                Research Software Engineer.
              </p>
              <div className="border border-seagreen/20 rounded-2xl p-5 bg-seagreen/5">
                <p className="font-body text-black/70 dark:text-alabaster/80 text-sm leading-relaxed">
                  Target institutions include{' '}
                  <span className="text-seagreen font-medium">
                    Wageningen University & Research (Netherlands)
                  </span>
                  ,{' '}
                  <span className="text-seagreen font-medium">
                    Helmholtz Centre for Environmental Research UFZ (Germany)
                  </span>
                  , and{' '}
                  <span className="text-seagreen font-medium">TU Dresden</span> — institutions
                  where the ODD Protocol for agent-based modeling was developed and where my
                  technical approach has direct alignment with active research groups.
                </p>
              </div>
            </motion.div>

            {/* Right — Cards */}
            <motion.div variants={staggerContainer} className="space-y-4">
              {/* Research Interests */}
              <motion.div variants={fadeUpVariants} className="card">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen size={16} className="text-seagreen" />
                  <h3 className="font-display font-bold text-black dark:text-white">
                    Research Interests
                  </h3>
                </div>
                <ul className="space-y-2">
                  {researchInterests.map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-seagreen mt-2 flex-shrink-0" />
                      <span className="font-body text-sm text-black/70 dark:text-alabaster/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Academic Profile */}
              <motion.div variants={fadeUpVariants} className="card">
                <div className="flex items-center gap-2 mb-4">
                  <FlaskConical size={16} className="text-seagreen" />
                  <h3 className="font-display font-bold text-black dark:text-white">
                    Academic Profile
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-black/50 dark:text-alabaster/50">
                      ORCID
                    </span>
                    <a
                      id="research-orcid-link"
                      href="https://orcid.org/0009-0007-2730-2139"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm text-seagreen hover:underline flex items-center gap-1"
                    >
                      0009-0007-2730-2139
                      <ExternalLink size={12} />
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-prussian/30 dark:bg-prussian/60 border border-prussian/60 text-xs font-mono text-alabaster/70">
                      📝 Preprint in preparation
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Timeline */}
              <motion.div variants={fadeUpVariants} className="card">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={16} className="text-seagreen" />
                  <h3 className="font-display font-bold text-black dark:text-white">
                    Target Timeline
                  </h3>
                </div>
                <div className="space-y-3">
                  {timeline.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="font-mono text-xs text-seagreen w-20 flex-shrink-0 pt-0.5">
                        {item.date}
                      </span>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-seagreen mt-1.5 flex-shrink-0" />
                        <span className="font-body text-sm text-black/70 dark:text-alabaster/80">
                          {item.event}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
