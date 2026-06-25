import { motion } from 'framer-motion';

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

const disciplines = [
  { emoji: '🎨', label: 'Portrait Art', sub: 'pencil, charcoal' },
  { emoji: '🎬', label: 'Motion Graphics', sub: 'After Effects, Illustrator' },
  { emoji: '📷', label: 'Photography & Videography', sub: null },
  { emoji: '✂️', label: 'Video Editing', sub: null },
  { emoji: '🎥', label: 'YouTube Content Creator', sub: null },
  { emoji: '💃', label: 'Dance', sub: 'reels, performance' },
  { emoji: '🎵', label: 'Music Production', sub: 'learning' },
  { emoji: '📖', label: 'Storytelling & Scriptwriting', sub: null },
];

export default function Creative() {
  return (
    <section
      id="creative"
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, #060d1a 0%, #000 100%)' }}
    >
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Heading */}
          <motion.div variants={fadeUpVariants} className="mb-3">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              Beyond the Terminal
            </h2>
            <div className="w-16 h-1 bg-seagreen rounded-full mt-4" />
          </motion.div>
          <motion.p
            variants={fadeUpVariants}
            className="font-body text-alabaster/70 mb-12 text-lg"
          >
            Art, motion, and storytelling — the other half of how I think.
          </motion.p>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left — Story */}
            <motion.div variants={fadeUpVariants} className="space-y-5">
              <p className="font-body text-alabaster/80 leading-relaxed text-lg">
                Before I was an engineer, I was an artist.
              </p>
              <p className="font-body text-alabaster/70 leading-relaxed">
                I won first prize in a school-level portrait competition. My father asked me
                to put the pencil down and study engineering instead. I did both — just in
                different forms.
              </p>
              <p className="font-body text-alabaster/70 leading-relaxed">
                Motion graphics, video editing, photography, and storytelling inform how I
                think about visualization in my simulation work. When I design a real-time
                frontend for a running ABM, I am also thinking about what makes the agent
                behavior legible, beautiful, and meaningful to watch.
              </p>

              {/* Quote card */}
              <div className="rounded-2xl border border-seagreen/20 bg-seagreen/5 p-6 mt-6">
                <p className="font-body text-white/90 italic leading-relaxed text-base">
                  "The same thinking that makes a good simulation visualization makes a
                  good short film — you're trying to make invisible forces visible to
                  another person."
                </p>
              </div>
            </motion.div>

            {/* Right — Discipline cards */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 gap-3"
            >
              {disciplines.map((d, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpVariants}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -2 }}
                  className="rounded-2xl p-4 border border-prussian/60 bg-prussian/30 backdrop-blur-sm
                             hover:border-seagreen/30 hover:bg-prussian/50 transition-all duration-300
                             flex flex-col items-start gap-1"
                >
                  <span className="text-2xl">{d.emoji}</span>
                  <span className="font-display font-medium text-white text-sm leading-tight">
                    {d.label}
                  </span>
                  {d.sub && (
                    <span className="font-mono text-xs text-seagreen/60">{d.sub}</span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
