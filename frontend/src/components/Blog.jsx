import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Tag, ArrowUpRight, FileText, Loader2, X, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';

// KaTeX + highlight.js styles injected once
if (typeof document !== 'undefined') {
  const katexLink = 'https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css';
  const hlLink = 'https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/github-dark.min.css';

  [katexLink, hlLink].forEach(href => {
    if (!document.querySelector(`link[href="${href}"]`)) {
      const el = document.createElement('link');
      el.rel = 'stylesheet';
      el.href = href;
      document.head.appendChild(el);
    }
  });
}

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const fadeUpVariants = {
  hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

const TAG_PALETTES = [
  'bg-seagreen/10 text-seagreen border-seagreen/30',
  'bg-sky-500/10 text-sky-500 border-sky-500/30',
  'bg-violet-500/10 text-violet-400 border-violet-400/30',
  'bg-amber-500/10 text-amber-500 border-amber-500/30',
];

function buildTagMap(posts) {
  const allTags = [...new Set(posts.flatMap(p => p.tags))];
  return Object.fromEntries(allTags.map((t, i) => [t, TAG_PALETTES[i % TAG_PALETTES.length]]));
}

// ─── Markdown reader modal ────────────────────────────────────────────────────
function PostModal({ post, onClose }) {
  const [markdown, setMarkdown] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const base = import.meta.env.BASE_URL || '/';
    fetch(`${base}blog/${post.slug}.md`)
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      })
      .then(text => { setMarkdown(text); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, [post.slug]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal panel */}
        <motion.div
          className="relative z-10 my-8 mx-4 w-full max-w-3xl bg-white dark:bg-[#0a0e1a] rounded-3xl
                     shadow-2xl shadow-black/50 border border-black/10 dark:border-white/10 overflow-hidden"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 px-8 py-5 border-b border-black/10 dark:border-white/10
                          bg-white/95 dark:bg-[#0a0e1a]/95 backdrop-blur-md flex items-center justify-between">
            <button
              onClick={onClose}
              className="flex items-center gap-2 font-mono text-sm text-black/50 dark:text-white/40
                         hover:text-seagreen transition-colors duration-200"
            >
              <ArrowLeft size={16} />
              Back to blog
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center
                         hover:bg-seagreen/10 hover:text-seagreen transition-colors duration-200"
              aria-label="Close"
            >
              <X size={15} />
            </button>
          </div>

          {/* Post meta */}
          <div className="px-8 pt-8 pb-4 border-b border-black/5 dark:border-white/5">
            <div className="flex items-center gap-3 mb-3">
              <time className="font-mono text-xs text-black/40 dark:text-white/30">
                {formatDate(post.date)}
              </time>
              <span className="text-black/20 dark:text-white/20">·</span>
              <span className="flex items-center gap-1 font-mono text-xs text-black/40 dark:text-white/30">
                <Clock size={11} />
                {post.readingTime} min read
              </span>
            </div>
            <h1 className="font-display font-bold text-2xl md:text-3xl text-black dark:text-white leading-snug">
              {post.title}
            </h1>
          </div>

          {/* Content */}
          <div className="px-8 py-8">
            {loading && (
              <div className="flex items-center justify-center py-16 gap-3 text-black/30 dark:text-white/30">
                <Loader2 size={18} className="animate-spin text-seagreen" />
                <span className="font-mono text-sm">Loading post...</span>
              </div>
            )}
            {error && (
              <p className="font-mono text-sm text-red-400 text-center py-10">
                Could not load {post.slug}.md — {error}
              </p>
            )}
            {markdown && (
              <div className="prose prose-sm md:prose-base max-w-none
                              prose-headings:font-display prose-headings:text-black dark:prose-headings:text-white
                              prose-p:text-gray-700 dark:prose-p:text-gray-300
                              prose-p:leading-relaxed
                              prose-a:text-seagreen prose-a:no-underline hover:prose-a:underline
                              prose-code:text-seagreen prose-code:bg-seagreen/10 prose-code:rounded prose-code:px-1 prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                              prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl
                              prose-blockquote:border-seagreen prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-300
                              prose-strong:text-black dark:prose-strong:text-white
                              prose-table:text-sm
                              prose-th:text-black dark:prose-th:text-white
                              prose-td:text-gray-700 dark:prose-td:text-gray-300
                              prose-hr:border-black/10 dark:prose-hr:border-white/10">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm, remarkMath]}
                  rehypePlugins={[rehypeKatex, rehypeHighlight]}
                >
                  {markdown}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Post card ────────────────────────────────────────────────────────────────
function PostCard({ post, tagColorMap, onClick }) {
  return (
    <motion.article
      variants={fadeUpVariants}
      whileHover={prefersReducedMotion ? {} : { y: -4 }}
      onClick={onClick}
      className="card group flex flex-col h-full cursor-pointer
                 hover:shadow-lg hover:shadow-seagreen/10 hover:border-seagreen/30
                 border border-transparent transition-all duration-300"
    >
      {/* Date + reading time */}
      <div className="flex items-center justify-between mb-3">
        <time className="font-mono text-[11px] text-black/40 dark:text-white/30">
          {formatDate(post.date)}
        </time>
        <div className="flex items-center gap-1 font-mono text-[11px] text-black/40 dark:text-white/30">
          <Clock size={11} />
          <span>{post.readingTime} min read</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-lg text-black dark:text-white leading-snug mb-3
                     group-hover:text-seagreen transition-colors duration-200">
        {post.title}
      </h3>

      {/* Summary */}
      <p className="font-body text-sm text-black/60 dark:text-alabaster/70 leading-relaxed mb-4 flex-1">
        {post.summary}
      </p>

      {/* Tags + read button */}
      <div className="flex flex-wrap items-center gap-1.5 mt-auto">
        {post.tags.map(tag => (
          <span
            key={tag}
            className={`inline-flex items-center gap-1 font-mono text-[10px] px-2.5 py-1 rounded-full border
                        ${tagColorMap[tag] ?? TAG_PALETTES[0]}`}
          >
            <Tag size={9} />
            {tag}
          </span>
        ))}
        <span className="ml-auto font-mono text-[11px] text-seagreen flex items-center gap-1
                         opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Read <ArrowUpRight size={12} />
        </span>
      </div>
    </motion.article>
  );
}

// ─── Main Blog section ────────────────────────────────────────────────────────
export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tagColorMap, setTagColorMap] = useState({});
  const [openPost, setOpenPost] = useState(null);

  useEffect(() => {
    const base = import.meta.env.BASE_URL || '/';
    fetch(`${base}blog/index.json`)
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(data => {
        const sorted = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
        setPosts(sorted);
        setTagColorMap(buildTagMap(sorted));
        setLoading(false);
      })
      .catch(err => { setError(err.message); setLoading(false); });
  }, []);

  const handleClose = useCallback(() => setOpenPost(null), []);

  return (
    <>
      <section id="blog" className="section-padding bg-white dark:bg-black">
        <div className="section-container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Eyebrow */}
            <motion.p variants={fadeUpVariants} className="font-mono text-seagreen text-sm mb-3">
              research_log.md
            </motion.p>

            {/* Heading */}
            <motion.div variants={fadeUpVariants} className="mb-3">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-black dark:text-white">
                Writing and Findings
              </h2>
              <div className="w-16 h-1 bg-seagreen rounded-full mt-4" />
            </motion.div>
            <motion.p
              variants={fadeUpVariants}
              className="font-body text-black/60 dark:text-alabaster/70 mb-12 text-lg"
            >
              Technical write-ups, research notes, and release announcements. Each post is a
              Markdown file — click any card to read it right here.
            </motion.p>

            {/* Loading */}
            {loading && (
              <div className="flex items-center justify-center py-20 gap-3 text-black/40 dark:text-white/30">
                <Loader2 size={20} className="animate-spin text-seagreen" />
                <span className="font-mono text-sm">Loading posts...</span>
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="text-center py-16">
                <p className="font-mono text-sm text-red-400">
                  Could not load blog/index.json — {error}
                </p>
              </div>
            )}

            {/* Empty state */}
            {!loading && !error && posts.length === 0 && (
              <motion.div
                variants={fadeUpVariants}
                className="text-center py-20 border border-dashed border-black/10 dark:border-white/10 rounded-3xl"
              >
                <FileText size={40} className="text-seagreen/30 mx-auto mb-4" />
                <p className="font-display font-medium text-black/40 dark:text-white/30 text-lg">
                  No posts yet
                </p>
                <p className="font-body text-sm text-black/30 dark:text-white/20 mt-1">
                  Add a <code className="font-mono">.md</code> file to{' '}
                  <code className="font-mono">frontend/public/blog/</code> and update{' '}
                  <code className="font-mono">index.json</code> to publish.
                </p>
              </motion.div>
            )}

            {/* Post grid */}
            {!loading && !error && posts.length > 0 && (
              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {posts.map(post => (
                  <PostCard
                    key={post.slug}
                    post={post}
                    tagColorMap={tagColorMap}
                    onClick={() => setOpenPost(post)}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Full-screen post reader */}
      {openPost && <PostModal post={openPost} onClose={handleClose} />}
    </>
  );
}
