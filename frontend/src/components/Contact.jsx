import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, Link2, MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

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

const contactLinks = [
  {
    id: 'contact-email',
    icon: <Mail size={18} className="text-seagreen flex-shrink-0" />,
    label: 'Email',
    value: 'vinoth.ac.in@gmail.com',
    href: 'mailto:vinoth.ac.in@gmail.com',
  },
  {
    id: 'contact-github',
    icon: <ExternalLink size={18} className="text-seagreen flex-shrink-0" />,
    label: 'GitHub',
    value: 'github.com/Vinoth-ai-20',
    href: 'https://github.com/Vinoth-ai-20',
  },
  {
    id: 'contact-linkedin',
    icon: <Link2 size={18} className="text-seagreen flex-shrink-0" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/vinoth-murugan-2k3',
    href: 'https://linkedin.com/in/vinoth-murugan-2k3',
  },
  {
    id: 'contact-orcid',
    icon: <ExternalLink size={18} className="text-seagreen flex-shrink-0" />,
    label: 'ORCID',
    value: 'orcid.org/0009-0007-2730-2139',
    href: 'https://orcid.org/0009-0007-2730-2139',
  },
  {
    id: 'contact-location',
    icon: <MapPin size={18} className="text-seagreen flex-shrink-0" />,
    label: 'Location',
    value: 'Tamil Nadu, India · Remote globally',
    href: null,
  },
];

const subjects = [
  'PhD Inquiry',
  'Research Collaboration',
  'Project Discussion',
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
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
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
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
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

  const inputClass = (field) =>
    `w-full bg-white dark:bg-prussian/40 border rounded-xl px-4 py-3 font-body text-sm
     text-black dark:text-white placeholder-black/40 dark:placeholder-white/30
     focus:outline-none focus:border-seagreen transition-colors duration-200
     ${errors[field] ? 'border-red-400' : 'border-alabaster dark:border-prussian/80'}`;

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
              Get In Touch
            </h2>
            <div className="w-16 h-1 bg-seagreen rounded-full mt-4" />
          </motion.div>
          <motion.p
            variants={fadeUpVariants}
            className="font-body text-black/60 dark:text-alabaster/70 mb-12 text-lg"
          >
            For PhD collaboration inquiries, research discussions, or project opportunities.
          </motion.p>

          {/* Two-column */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left — Contact info */}
            <motion.div variants={staggerContainer} className="space-y-3">
              {contactLinks.map(link => (
                <motion.div
                  key={link.id}
                  variants={fadeUpVariants}
                  className="card flex items-start gap-3 hover:shadow-md hover:shadow-seagreen/10 transition-shadow"
                >
                  {link.icon}
                  <div>
                    <p className="font-mono text-xs text-black/40 dark:text-white/40 mb-0.5">
                      {link.label}
                    </p>
                    {link.href ? (
                      <a
                        id={link.id}
                        href={link.href}
                        target={link.href.startsWith('mailto') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        className="font-body text-sm text-black dark:text-alabaster hover:text-seagreen dark:hover:text-seagreen transition-colors"
                      >
                        {link.value}
                      </a>
                    ) : (
                      <p className="font-body text-sm text-black dark:text-alabaster">
                        {link.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right — Form */}
            <motion.div variants={fadeUpVariants}>
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="card space-y-4 border border-alabaster dark:border-prussian/60"
                noValidate
              >
                {/* Name */}
                <div>
                  <label className="font-mono text-xs text-black/50 dark:text-white/50 mb-1 block">
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass('name')}
                    required
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="font-mono text-xs text-black/50 dark:text-white/50 mb-1 block">
                    Email *
                  </label>
                  <input
                    id="contact-email-input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@institution.edu"
                    className={inputClass('email')}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="font-mono text-xs text-black/50 dark:text-white/50 mb-1 block">
                    Subject
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`${inputClass('subject')} cursor-pointer`}
                  >
                    {subjects.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="font-mono text-xs text-black/50 dark:text-white/50 mb-1 block">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={4}
                    className={`${inputClass('message')} resize-y`}
                    required
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  id="contact-submit"
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {/* Status messages */}
                {status === 'success' && (
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-body bg-emerald-400/10 rounded-lg px-4 py-3">
                    <CheckCircle size={16} />
                    Message sent. I'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-start gap-2 text-red-400 text-sm font-body bg-red-400/10 rounded-lg px-4 py-3">
                    <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                    <span>
                      Something went wrong. Try emailing directly at{' '}
                      <a
                        href="mailto:vinoth.ac.in@gmail.com"
                        className="underline hover:text-red-300"
                      >
                        vinoth.ac.in@gmail.com
                      </a>
                    </span>
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
