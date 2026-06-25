import { ExternalLink, Link2, Mail } from 'lucide-react';

const socialLinks = [
  {
    id: 'footer-github',
    icon: <ExternalLink size={18} />,
    href: 'https://github.com/Vinoth-ai-20',
    label: 'GitHub',
  },
  {
    id: 'footer-linkedin',
    icon: <Link2 size={18} />,
    href: 'https://linkedin.com/in/vinoth-murugan-2k3',
    label: 'LinkedIn',
  },
  {
    id: 'footer-orcid',
    icon: <ExternalLink size={18} />,
    href: 'https://orcid.org/0009-0007-2730-2139',
    label: 'ORCID',
  },
  {
    id: 'footer-email',
    icon: <Mail size={18} />,
    href: 'mailto:vinoth.ac.in@gmail.com',
    label: 'Email',
  },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-prussian/40 py-10">
      <div className="section-container flex flex-col items-center gap-6">
        {/* Social icons */}
        <div className="flex items-center gap-5">
          {socialLinks.map(link => (
            <a
              key={link.id}
              id={link.id}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-white/40 hover:text-seagreen transition-colors duration-200 hover:scale-110 transform"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="font-mono text-xs text-white/30 text-center">
          © 2026 Vinoth Murugan · Built with React + Tailwind + FastAPI
        </p>
      </div>
    </footer>
  );
}
