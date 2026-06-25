import { Mail, Heart } from 'lucide-react';

// Brand SVG icons (inline, since lucide-react doesn't include social brands)
function GitHubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function OrcidIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947-.947-.431-.947-.947.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.925-1.444 3.925-3.722 0-2.016-1.284-3.722-3.925-3.722h-2.297z" />
    </svg>
  );
}

function YouTubeIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const socialLinks = [
  {
    id: 'footer-github',
    icon: GitHubIcon,
    href: 'https://github.com/Vinoth-ai-20',
    label: 'GitHub',
  },
  {
    id: 'footer-linkedin',
    icon: LinkedInIcon,
    href: 'https://linkedin.com/in/vinoth-murugan-2k3',
    label: 'LinkedIn',
  },
  {
    id: 'footer-youtube',
    icon: YouTubeIcon,
    href: 'https://www.youtube.com/@ChromaticPolymath',
    label: 'YouTube',
  },
  {
    id: 'footer-orcid',
    icon: OrcidIcon,
    href: 'https://orcid.org/0009-0007-2730-2139',
    label: 'ORCID',
  },
  {
    id: 'footer-email',
    icon: ({ size }) => <Mail size={size} />,
    href: 'mailto:vinoth.ac.in@gmail.com',
    label: 'Email',
  },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-prussian/40 py-10">
      <div className="section-container flex flex-col items-center gap-6">
        {/* Social icons */}
        <div className="flex items-center gap-6">
          {socialLinks.map(link => {
            const Icon = link.icon;
            return (
              <a
                key={link.id}
                id={link.id}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
                className="text-white/40 hover:text-seagreen transition-colors duration-200 hover:scale-110 transform flex flex-col items-center gap-1 group"
              >
                <Icon size={20} />
                <span className="font-mono text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="font-mono text-xs text-white/30 text-center flex items-center gap-1.5">
          © 2026 Vinoth Murugan · Built with
          <Heart size={12} className="text-seagreen fill-seagreen" />
          by Vinoth Murugan
        </p>
      </div>
    </footer>
  );
}
