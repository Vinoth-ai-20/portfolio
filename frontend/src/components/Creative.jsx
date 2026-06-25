import { motion } from 'framer-motion';
import {
  Palette, Film, Camera, Scissors, Music, Music2, Feather,
} from 'lucide-react';
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
  visible: { transition: { staggerChildren: 0.08 } },
};

// Inline YouTube SVG — not in lucide-react
function YouTubeIcon({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const disciplines = [
  { Icon: Palette,    label: 'Portrait Art',                 sub: 'pencil, charcoal' },
  { Icon: Film,       label: 'Motion Graphics',               sub: 'After Effects, Illustrator' },
  { Icon: Camera,     label: 'Photography and Videography',   sub: null },
  { Icon: Scissors,   label: 'Video Editing',                 sub: null },
  { Icon: YouTubeIcon,label: 'YouTube Content Creator',       sub: '@ChromaticPolymath' },
  { Icon: Music,      label: 'Dance',                         sub: 'reels, performance' },
  { Icon: Music2,     label: 'Music Production',              sub: 'learning' },
  { Icon: Feather,    label: 'Storytelling and Scriptwriting', sub: null },
];

export default function Creative() {
  const { theme } = useTheme();
  const dark = theme === 'dark';

  const sectionStyle = dark
    ? { background: 'linear-gradient(180deg, #060d1a 0%, #000 100%)' }
    : { background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)' };

  return (
    <section id="creative" className="section-padding" style={sectionStyle}>
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Heading */}
          <motion.div variants={fadeUpVariants} className="mb-3">
            <h2 className={`font-display font-bold text-4xl md:text-5xl ${dark ? 'text-white' : 'text-gray-900'}`}>
              Beyond the Terminal
            </h2>
            <div className="w-16 h-1 bg-seagreen rounded-full mt-4" />
          </motion.div>
          <motion.p
            variants={fadeUpVariants}
            className={`font-body mb-12 text-lg ${dark ? 'text-alabaster/70' : 'text-gray-500'}`}
          >
            Art, motion, and storytelling are the other half of how I think.
          </motion.p>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left — Story */}
            <motion.div variants={fadeUpVariants} className="space-y-5">
              <p className={`font-body leading-relaxed text-lg ${dark ? 'text-alabaster/80' : 'text-gray-700'}`}>
                Before I was an engineer, I was an artist.
              </p>
              <p className={`font-body leading-relaxed ${dark ? 'text-alabaster/70' : 'text-gray-600'}`}>
                I won first prize in a school-level portrait competition. My father asked me
                to put the pencil down and study engineering instead. I did both, just in
                different forms.
              </p>
              <p className={`font-body leading-relaxed ${dark ? 'text-alabaster/70' : 'text-gray-600'}`}>
                Motion graphics, video editing, photography, and storytelling inform how I
                think about visualization in my simulation work. When I design a real-time
                frontend for a running ABM, I am also thinking about what makes the agent
                behavior legible, beautiful, and meaningful to watch.
              </p>
              <p className={`font-body leading-relaxed ${dark ? 'text-alabaster/70' : 'text-gray-600'}`}>
                I run a YouTube channel called{' '}
                <a
                  href="https://www.youtube.com/@ChromaticPolymath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-seagreen hover:underline font-medium"
                >
                  ChromaticPolymath
                </a>{' '}
                where I share creative and research work across disciplines.
              </p>

              {/* Quote card */}
              <div className={`rounded-2xl border p-6 mt-6 ${dark
                ? 'border-seagreen/20 bg-seagreen/5'
                : 'border-seagreen/25 bg-teal-50'}`}
              >
                <p className={`font-body italic leading-relaxed text-base ${dark ? 'text-white/90' : 'text-gray-800'}`}>
                  "The same thinking that makes a good simulation visualization makes a
                  good short film. You are trying to make invisible forces visible to
                  another person."
                </p>
              </div>
            </motion.div>

            {/* Right — Discipline cards */}
            <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-3">
              {disciplines.map(({ Icon, label, sub }, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpVariants}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -2 }}
                  className={`rounded-2xl p-4 border backdrop-blur-sm transition-all duration-300
                              flex flex-col items-start gap-2
                              ${dark
                                ? 'border-prussian/60 bg-prussian/30 hover:border-seagreen/30 hover:bg-prussian/50'
                                : 'border-gray-200 bg-white hover:border-seagreen/40 hover:shadow-md hover:shadow-seagreen/10'}`}
                >
                  {/* Icon bubble */}
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0
                                  ${dark ? 'bg-seagreen/15' : 'bg-seagreen/10'}`}>
                    <Icon size={18} className="text-seagreen" />
                  </div>
                  <span className={`font-display font-medium text-sm leading-tight ${dark ? 'text-white' : 'text-gray-800'}`}>
                    {label}
                  </span>
                  {sub && (
                    <span className="font-mono text-xs text-seagreen/70">{sub}</span>
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
