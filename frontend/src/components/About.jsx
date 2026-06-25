import { motion } from 'framer-motion';
import { GraduationCap, Building2, MapPin, Target, FlaskConical } from 'lucide-react';

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
    icon: <GraduationCap size={18} className="text-seagreen flex-shrink-0" />,
    text: 'B.Tech AI & DS — DSEC, 2024',
  },
  {
    icon: <GraduationCap size={18} className="text-seagreen flex-shrink-0" />,
    text: 'M.E. CSE — SKEC, 2026',
  },
  {
    icon: <Building2 size={18} className="text-seagreen flex-shrink-0" />,
    text: 'Ex-TTE — ARVR Innovation Center, DSU (Oct 2024 – Jun 2026)',
  },
  {
    icon: <MapPin size={18} className="text-seagreen flex-shrink-0" />,
    text: 'Tamil Nadu, India',
  },
  {
    icon: <Target size={18} className="text-seagreen flex-shrink-0" />,
    text: 'PhD applicant — Computational Ecology, Europe 2027',
  },
  {
    icon: <FlaskConical size={18} className="text-seagreen flex-shrink-0" />,
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
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section heading */}
          <motion.div variants={fadeUpVariants} className="mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-black dark:text-white">
              About Me
            </h2>
            <div className="w-16 h-1 bg-seagreen rounded-full mt-4" />
          </motion.div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left — Bio */}
            <motion.div variants={fadeUpVariants} className="space-y-5">
              <p className="font-body text-black/80 dark:text-alabaster text-lg leading-relaxed">
                I am a creative technologist and Research Software Engineer from Thanjavur,
                Tamil Nadu. My work lives at the intersection of computation, biology, and
                simulation — building the software platforms that help scientists model how
                living systems behave.
              </p>
              <p className="font-body text-black/80 dark:text-alabaster leading-relaxed">
                I hold a B.Tech in Artificial Intelligence & Data Science and have completed
                an M.E. in Computer Science Engineering (August 2026). I spent a year and a
                half as a Technical Training Engineer at an ARVR Innovation Center, teaching
                students and guiding projects in augmented and virtual reality.
              </p>
              <p className="font-body text-black/80 dark:text-alabaster leading-relaxed">
                I am now focused entirely on two things: building open-source simulation
                infrastructure as an independent researcher, and preparing for a fully funded
                PhD in Computational Ecology at a European university in the 2027 intake.
              </p>
              <p className="font-body text-black dark:text-white font-medium leading-relaxed">
                My research software goal is simple — I want to build the tools that make
                scientists faster at understanding life.
              </p>
            </motion.div>

            {/* Right — Fact cards */}
            <motion.div
              variants={staggerContainer}
              className="grid gap-3"
            >
              {facts.map((fact, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpVariants}
                  className="card flex items-start gap-3 hover:shadow-md hover:shadow-seagreen/10 transition-shadow duration-300"
                >
                  {fact.icon}
                  <span className="font-body text-sm text-black dark:text-alabaster leading-relaxed">
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
