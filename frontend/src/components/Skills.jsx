import { motion } from 'framer-motion';
import {
  Code, Activity, Globe, Brain, Monitor, Server, Glasses, Palette,
} from 'lucide-react';
import { skills } from '../data/skills';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const fadeUpVariants = {
  hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const iconMap = {
  Code,
  Activity,
  Globe,
  Brain,
  Monitor,
  Server,
  Glasses,
  Palette,
};

function SkillCard({ category, icon, items }) {
  const Icon = iconMap[icon] || Code;

  return (
    <motion.div
      variants={fadeUpVariants}
      className="card hover:shadow-lg hover:shadow-seagreen/10 transition-all duration-300
                 hover:-translate-y-1 border border-transparent hover:border-seagreen/20"
    >
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-8 h-8 rounded-lg bg-seagreen/15 flex items-center justify-center flex-shrink-0">
          <Icon size={16} className="text-seagreen" />
        </div>
        <h3 className="font-display font-bold text-black dark:text-white text-base">
          {category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {items.map(item => (
          <span key={item} className="tag text-xs">{item}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, #000 0%, #060d1a 100%)' }}
    >
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Heading */}
          <motion.div variants={fadeUpVariants} className="mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              Technical Skills
            </h2>
            <div className="w-16 h-1 bg-seagreen rounded-full mt-4" />
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {skills.map(skill => (
              <SkillCard key={skill.category} {...skill} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
