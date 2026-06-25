import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';
import { useTheme } from '../hooks/useTheme';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const fadeUp = prefersReducedMotion
  ? { initial: {}, animate: {}, transition: {} }
  : {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: 'easeOut' },
    };

export default function Hero() {
  const { theme } = useTheme();
  const [showChevron, setShowChevron] = useState(true);

  useEffect(() => {
    const onScroll = () => setShowChevron(window.scrollY < 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToAlife = (e) => {
    e.preventDefault();
    document.getElementById('alife')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black dark:bg-black"
    >
      {/* Particle canvas background */}
      <ParticleCanvas theme={theme} />

      {/* Subtle radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(92,148,110,0.06) 0%, transparent 70%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        className="relative section-container flex flex-col items-center text-center"
        style={{ zIndex: 10 }}
      >
        {/* Eyebrow */}
        <motion.p
          className="font-mono text-seagreen text-sm mb-6 tracking-wider"
          {...(prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.1 },
              })}
        >
          artificial_life_research_engineer.py
        </motion.p>

        {/* Name */}
        <motion.h1
          className="font-display font-bold text-white leading-none mb-6"
          style={{ fontSize: 'clamp(3rem, 10vw, 6rem)' }}
          {...(prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.2 },
              })}
        >
          Vinoth
          <br />
          <span className="text-seagreen">Murugan</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-body text-alabaster text-lg max-w-2xl mb-4 leading-relaxed"
          style={{ fontSize: '1.125rem' }}
          {...(prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.4 },
              })}
        >
          Artificial Life Research Engineer developing{' '}
          <span className="text-seagreen font-semibold">Phylon</span>, a research-grade
          platform for agent-based simulation, evolutionary computation, emergent behavior,
          and adaptive intelligence.
        </motion.p>

        {/* Location Tag */}
        <motion.p
          className="font-mono text-seagreen text-sm mb-10"
          {...(prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.5, delay: 0.55 },
              })}
        >
          📍 Tamil Nadu, India → PhD applicant, Europe 2027
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center"
          {...(prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.7 },
              })}
        >
          <a
            id="hero-cta-alife"
            href="#alife"
            onClick={scrollToAlife}
            className="btn-primary text-base"
          >
            View ALife Research
          </a>
          <a
            id="hero-cta-github"
            href="https://github.com/Vinoth-ai-20"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-base flex items-center gap-2"
          >
            <ExternalLink size={18} />
            GitHub
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-500"
        style={{ opacity: showChevron ? 1 : 0, zIndex: 10 }}
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-seagreen/60" size={28} />
        </motion.div>
      </div>
    </section>
  );
}
