import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Loader2, CheckCircle, AlertCircle, Send } from 'lucide-react';

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

// Inline brand SVGs
function GitHubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function OrcidIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947-.947-.431-.947-.947.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.925-1.444 3.925-3.722 0-2.016-1.284-3.722-3.925-3.722h-2.297z" />
    </svg>
  );
}

function YouTubeIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const contactInfo = [
  {
    id: 'contact-email',
    Icon: Mail,
    label: 'Email',
    value: 'vinoth.ac.in@gmail.com',
    href: 'mailto:vinoth.ac.in@gmail.com',
  },
  {
    id: 'contact-github',
    Icon: GitHubIcon,
    label: 'GitHub',
    value: 'github.com/Vinoth-ai-20',
    href: 'https://github.com/Vinoth-ai-20',
  },
  {
    id: 'contact-youtube',
    Icon: YouTubeIcon,
    label: 'YouTube',
    value: '@ChromaticPolymath',
    href: 'https://www.youtube.com/@ChromaticPolymath',
  },
  {
    id: 'contact-linkedin',
    Icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/vinoth-murugan-2k3',
    href: 'https://linkedin.com/in/vinoth-murugan-2k3',
  },
  {
    id: 'contact-orcid',
    Icon: OrcidIcon,
    label: 'ORCID',
    value: '0009-0007-2730-2139',
    href: 'https://orcid.org/0009-0007-2730-2139',
  },
  {
    id: 'contact-location',
    Icon: MapPin,
    label: 'Location',
    value: 'Tamil Nadu, India (open to remote globally)',
    href: null,
  },
];

const subjects = [
  'Research Guide Inquiry',
  'PhD Collaboration',
  'Open Source Contribution',
  'Freelance Project',
  'Other',
];

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: subjects[0],
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('loading');
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', subject: subjects[0], message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-black">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Heading */}
          <motion.div variants={fadeUpVariants} className="mb-3">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-black dark:text-white">
              Connect
            </h2>
            <div className="w-16 h-1 bg-seagreen rounded-full mt-4" />
          </motion.div>
          <motion.p
            variants={fadeUpVariants}
            className="font-body text-black/60 dark:text-alabaster/70 mb-12 text-lg"
          >
            I am actively seeking research supervisors and PhD collaboration opportunities
            in Computational Biophysics, PINNs, and Scientific Machine Learning. Reach out
            for research discussions, project work, or open source collaboration.
          </motion.p>

          {/* Main card — two columns inside */}
          <motion.div
            variants={fadeUpVariants}
            className="rounded-3xl overflow-hidden border border-alabaster dark:border-prussian/60
                       shadow-2xl shadow-black/20 dark:shadow-black/60"
          >
            <div className="grid lg:grid-cols-5">
              {/* Left panel — dark info strip */}
              <div
                className="lg:col-span-2 p-8 lg:p-10 flex flex-col gap-8"
                style={{
                  background: 'linear-gradient(160deg, #0a2622 0%, #061a17 60%, #04120f 100%)',
                }}
              >
                <div>
                  <p className="font-mono text-xs text-seagreen/60 mb-1">contact_info.json</p>
                  <h3 className="font-display font-bold text-2xl text-white mb-2">
                    Let us work together
                  </h3>
                  <p className="font-body text-sm text-white/50 leading-relaxed">
                    Open to PhD supervisors, research collaborators, and software
                    project discussions. I respond to every message personally.
                  </p>
                </div>

                {/* Contact info list */}
                <div className="space-y-5 flex-1">
                  {contactInfo.map(item => {
                    const Icon = item.Icon;
                    return (
                      <div key={item.id} className="flex items-start gap-3 group">
                        <div className="w-9 h-9 rounded-xl bg-seagreen/20 border border-seagreen/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-seagreen/30 transition-colors">
                          <Icon size={16} className="text-seagreen" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-mono text-[10px] text-white/30 uppercase tracking-wider mb-0.5">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              id={item.id}
                              href={item.href}
                              target={item.href.startsWith('mailto') ? undefined : '_blank'}
                              rel="noopener noreferrer"
                              className="font-body text-sm text-white/80 hover:text-seagreen transition-colors truncate block"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-body text-sm text-white/80">{item.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Social quick links */}
                <div className="flex gap-3 pt-2 border-t border-white/10">
                  <a
                    href="https://github.com/Vinoth-ai-20"
                    target="_blank" rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-seagreen hover:border-seagreen/40 hover:bg-seagreen/10 transition-all"
                  >
                    <GitHubIcon size={16} />
                  </a>
                  <a
                    href="https://linkedin.com/in/vinoth-murugan-2k3"
                    target="_blank" rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-seagreen hover:border-seagreen/40 hover:bg-seagreen/10 transition-all"
                  >
                    <LinkedInIcon size={16} />
                  </a>
                  <a
                    href="https://www.youtube.com/@ChromaticPolymath"
                    target="_blank" rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-seagreen hover:border-seagreen/40 hover:bg-seagreen/10 transition-all"
                  >
                    <YouTubeIcon size={16} />
                  </a>
                  <a
                    href="https://orcid.org/0009-0007-2730-2139"
                    target="_blank" rel="noopener noreferrer"
                    aria-label="ORCID"
                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-seagreen hover:border-seagreen/40 hover:bg-seagreen/10 transition-all"
                  >
                    <OrcidIcon size={16} />
                  </a>
                </div>
              </div>

              {/* Right panel — form */}
              <div className="lg:col-span-3 bg-alabaster dark:bg-prussian/30 p-8 lg:p-10">
                <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5 h-full flex flex-col"
                >
                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-[11px] text-black/40 dark:text-white/40 uppercase tracking-wider mb-1.5 block">
                        Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`w-full bg-white dark:bg-black/40 border rounded-xl px-4 py-3 font-body text-sm
                                   text-black dark:text-white placeholder-black/30 dark:placeholder-white/20
                                   focus:outline-none focus:ring-2 focus:ring-seagreen/40 focus:border-seagreen
                                   transition-all duration-200
                                   ${errors.name ? 'border-red-400' : 'border-black/10 dark:border-white/10'}`}
                        required
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="font-mono text-[11px] text-black/40 dark:text-white/40 uppercase tracking-wider mb-1.5 block">
                        Email *
                      </label>
                      <input
                        id="contact-email-input"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@institution.edu"
                        className={`w-full bg-white dark:bg-black/40 border rounded-xl px-4 py-3 font-body text-sm
                                   text-black dark:text-white placeholder-black/30 dark:placeholder-white/20
                                   focus:outline-none focus:ring-2 focus:ring-seagreen/40 focus:border-seagreen
                                   transition-all duration-200
                                   ${errors.email ? 'border-red-400' : 'border-black/10 dark:border-white/10'}`}
                        required
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="font-mono text-[11px] text-black/40 dark:text-white/40 uppercase tracking-wider mb-1.5 block">
                      Subject
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {subjects.map(s => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setForm(prev => ({ ...prev, subject: s }))}
                          className={`font-mono text-xs px-4 py-2 rounded-full border transition-all duration-200
                                     ${form.subject === s
                                       ? 'bg-seagreen border-seagreen text-black font-medium'
                                       : 'border-black/20 dark:border-white/20 text-black/60 dark:text-white/50 hover:border-seagreen hover:text-seagreen'
                                     }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex-1">
                    <label className="font-mono text-[11px] text-black/40 dark:text-white/40 uppercase tracking-wider mb-1.5 block">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your research group, collaboration idea, or inquiry..."
                      rows={5}
                      className={`w-full bg-white dark:bg-black/40 border rounded-xl px-4 py-3 font-body text-sm
                                 text-black dark:text-white placeholder-black/30 dark:placeholder-white/20
                                 focus:outline-none focus:ring-2 focus:ring-seagreen/40 focus:border-seagreen
                                 transition-all duration-200 resize-none
                                 ${errors.message ? 'border-red-400' : 'border-black/10 dark:border-white/10'}`}
                      required
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit button */}
                  <button
                    id="contact-submit"
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className="btn-primary w-full flex items-center justify-center gap-2
                               disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : status === 'success' ? (
                      <>
                        <CheckCircle size={16} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Status messages */}
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400 text-sm font-body
                                 bg-emerald-50 dark:bg-emerald-400/10 border border-emerald-200 dark:border-emerald-400/20
                                 rounded-xl px-4 py-3"
                    >
                      <CheckCircle size={16} className="flex-shrink-0" />
                      <span>Message sent. I will get back to you soon.</span>
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-3 text-red-500 dark:text-red-400 text-sm font-body
                                 bg-red-50 dark:bg-red-400/10 border border-red-200 dark:border-red-400/20
                                 rounded-xl px-4 py-3"
                    >
                      <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                      <span>
                        Something went wrong. Email me directly at{' '}
                        <a href="mailto:vinoth.ac.in@gmail.com" className="underline hover:no-underline">
                          vinoth.ac.in@gmail.com
                        </a>
                      </span>
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
