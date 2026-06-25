import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, Download, MapPin } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';
import { useTheme } from '../hooks/useTheme';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Rotating research identity labels
const IDENTITY_LABELS = [
  'artificial_life_researcher.py',
  'computational_biophysics.py',
  'scientific_ml_engineer.py',
  'pinns_researcher.py',
  'agent_based_modeler.py',
  'research_software_engineer.py',
];

export default function Hero() {
  const { theme } = useTheme();
  const [showChevron, setShowChevron] = useState(true);
  const [labelIndex, setLabelIndex] = useState(0);
  const [labelVisible, setLabelVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setShowChevron(window.scrollY < 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cycle through identity labels with a smooth fade transition
  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setLabelVisible(false);
      setTimeout(() => {
        setLabelIndex(i => (i + 1) % IDENTITY_LABELS.length);
        setLabelVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToAlife = (e) => {
    e.preventDefault();
    document.getElementById('alife')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        theme === 'dark' ? 'bg-black' : 'bg-slate-50'
      }`}
    >
      {/* Particle canvas background */}
      <ParticleCanvas theme={theme} />

      {/* Subtle radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: theme === 'dark'
            ? 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(13,148,136,0.08) 0%, transparent 70%)'
            : 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(13,148,136,0.05) 0%, transparent 70%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        className="relative section-container flex flex-col items-center text-center"
        style={{ zIndex: 10 }}
      >
        {/* Dynamic rotating eyebrow label */}
        <div className="h-7 mb-6 flex items-center justify-center">
          <motion.p
            key={labelIndex}
            className="font-mono text-seagreen text-sm tracking-wider"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 6 }}
            animate={{ opacity: labelVisible ? 1 : 0, y: labelVisible ? 0 : -6 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {IDENTITY_LABELS[labelIndex]}
          </motion.p>
        </div>

        {/* Name */}
        <motion.h1
          className={`font-display font-bold leading-none mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
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
          className={`font-body text-lg max-w-2xl mb-4 leading-relaxed ${
            theme === 'dark' ? 'text-alabaster' : 'text-gray-700'
          }`}
          style={{ fontSize: '1.125rem' }}
          {...(prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.4 },
              })}
        >
          Research Software Engineer building{' '}
          <span className="text-seagreen font-semibold">Phylon</span>, a research-grade
          platform for agent-based simulation, evolutionary computation, and emergent
          behavior. Shifting focus toward{' '}
          <span className="text-seagreen font-semibold">Computational Biophysics</span>,
          PINNs, and Scientific Machine Learning.
        </motion.p>

        {/* Location Tag */}
        <motion.p
          className="font-mono text-seagreen text-sm mb-10 flex items-center gap-1.5 justify-center"
          {...(prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.5, delay: 0.55 },
              })}
        >
          <MapPin size={14} className="text-seagreen" />
          Tamil Nadu, India
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center flex-wrap justify-center"
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
          <a
            id="hero-cta-cv"
            href="/vinoth-murugan-cv.pdf"
            download="Vinoth_Murugan_CV.pdf"
            className="btn-secondary text-base flex items-center gap-2"
            title="Download CV — upload vinoth-murugan-cv.pdf to frontend/public/ to activate"
          >
            <Download size={18} />
            Download CV
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
