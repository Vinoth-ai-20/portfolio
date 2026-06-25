import { motion } from 'framer-motion';
import { GraduationCap, Building2, MapPin, Target, FlaskConical } from 'lucide-react';
import profileImg from '../assets/profile.png';

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

const facts = [
  {
    icon: <GraduationCap size={16} className="text-seagreen flex-shrink-0" />,
    text: 'B.Tech AI and DS, DSEC, 2024',
  },
  {
    icon: <GraduationCap size={16} className="text-seagreen flex-shrink-0" />,
    text: 'M.E. CSE, SKEC, 2026',
  },
  {
    icon: <Building2 size={16} className="text-seagreen flex-shrink-0" />,
    text: 'Ex-TTE at ARVR Innovation Center, DSU (Oct 2024 to Jun 2026)',
  },
  {
    icon: <MapPin size={16} className="text-seagreen flex-shrink-0" />,
    text: 'Tamil Nadu, India',
  },
  {
    icon: <Target size={16} className="text-seagreen flex-shrink-0" />,
    text: 'PhD applicant in Computational Biophysics, PINNs, and Scientific Machine Learning, Europe 2027',
  },
  {
    icon: <FlaskConical size={16} className="text-seagreen flex-shrink-0" />,
    text: (
      <>
        ORCID:{' '}
        <a
          id="about-orcid-link"
          href="https://orcid.org/0009-0007-2730-2139"
          target="_blank"
          rel="noopener noreferrer"
          className="text-seagreen hover:underline"
        >
          0009-0007-2730-2139
        </a>
      </>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-black">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Section heading */}
          <motion.div variants={fadeUpVariants} className="mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-black dark:text-white">
              About Me
            </h2>
            <div className="w-16 h-1 bg-seagreen rounded-full mt-4" />
          </motion.div>

          {/* Three-column layout on desktop: photo | bio | cards */}
          <div className="grid lg:grid-cols-[280px_1fr_300px] gap-10 items-start">

            {/* Column 1 — Profile photo */}
            <motion.div variants={fadeUpVariants} className="flex flex-col items-center gap-4">
              {/* Photo frame */}
              <div className="relative group">
                {/* Glow ring */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-seagreen/50 to-seagreen/10 opacity-70 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-seagreen/30 bg-prussian">
                  <img
                    src={profileImg}
                    alt="Vinoth Murugan — Artificial Life Research Engineer"
                    className="w-full h-auto object-cover object-top"
                    style={{ maxHeight: '340px' }}
                  />
                </div>
              </div>
              {/* Name label below photo */}
              <div className="text-center">
                <p className="font-display font-bold text-black dark:text-white text-lg">
                  Vinoth Murugan
                </p>
                <p className="font-mono text-xs text-seagreen mt-0.5">
                  Research Software Engineer
                </p>
              </div>
            </motion.div>

            {/* Column 2 — Bio */}
            <motion.div variants={fadeUpVariants} className="space-y-5">
              <p className="font-body text-black/80 dark:text-alabaster text-lg leading-relaxed">
                I am a creative technologist and Research Software Engineer from Thanjavur,
                Tamil Nadu. My work sits at the intersection of computation, biology, and
                simulation. I build the software platforms that help scientists model how
                living systems behave.
              </p>
              <p className="font-body text-black/70 dark:text-alabaster/80 leading-relaxed">
                I hold a B.Tech in Artificial Intelligence and Data Science and have completed
                an M.E. in Computer Science Engineering (August 2026). I spent a year and a
                half as a Technical Training Engineer at an ARVR Innovation Center, teaching
                students and guiding projects in augmented and virtual reality.
              </p>
              <p className="font-body text-black/70 dark:text-alabaster/80 leading-relaxed">
                I am now focused on two things: building open-source simulation
                infrastructure as an independent researcher, and preparing for a fully funded
                PhD in Computational Biophysics, Physics-Informed Neural Networks, or
                Scientific Machine Learning at a European university in the 2027 intake.
              </p>
              {/* Quote highlight */}
              <div className="border-l-2 border-seagreen pl-5 py-1">
                <p className="font-body text-black dark:text-white font-medium leading-relaxed">
                  My goal is simple: I want to build the tools that make
                  scientists faster at understanding life.
                </p>
              </div>
            </motion.div>

            {/* Column 3 — Quick facts */}
            <motion.div variants={staggerContainer} className="space-y-2">
              <p className="font-mono text-xs text-seagreen/60 mb-3">quick_facts.json</p>
              {facts.map((fact, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpVariants}
                  className="card !p-3.5 flex items-start gap-2.5
                             hover:shadow-md hover:shadow-seagreen/10 transition-all duration-300
                             hover:border hover:border-seagreen/20"
                >
                  <div className="w-6 h-6 rounded-lg bg-seagreen/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {fact.icon}
                  </div>
                  <span className="font-body text-xs text-black dark:text-alabaster leading-relaxed">
                    {fact.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
