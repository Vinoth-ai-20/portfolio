import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Tag, ArrowUpRight, FileText, Loader2 } from 'lucide-react';

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

// Relative date formatting
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

// Tag color palette — cycles through a small set
const TAG_COLORS = [
  'bg-seagreen/10 text-seagreen border-seagreen/30',
  'bg-sky-500/10 text-sky-500 border-sky-500/30',
  'bg-violet-500/10 text-violet-400 border-violet-400/30',
  'bg-amber-500/10 text-amber-500 border-amber-500/30',
];

function tagClass(tag, allTags) {
  const idx = allTags.indexOf(tag) % TAG_COLORS.length;
  return TAG_COLORS[idx >= 0 ? idx : 0];
}

// Build a stable per-session tag color map
function buildTagColorMap(posts) {
  const allTags = [...new Set(posts.flatMap(p => p.tags))];
  const map = {};
  allTags.forEach((t, i) => { map[t] = TAG_COLORS[i % TAG_COLORS.length]; });
  return map;
}

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tagColorMap, setTagColorMap] = useState({});

  useEffect(() => {
    const base = import.meta.env.BASE_URL || '/';
    fetch(`${base}blog.json`)
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(data => {
        // Sort newest first
        const sorted = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
        setPosts(sorted);
        setTagColorMap(buildTagColorMap(sorted));
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section id="blog" className="section-padding bg-white dark:bg-black">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Heading */}
          <motion.p variants={fadeUpVariants} className="font-mono text-seagreen text-sm mb-3">
            research_log.json
          </motion.p>
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
            Technical write-ups, research notes, and release announcements. Updated whenever
            I have something worth sharing.
          </motion.p>

          {/* States: Loading / Error / Posts */}
          {loading && (
            <div className="flex items-center justify-center py-20 gap-3 text-black/40 dark:text-white/30">
              <Loader2 size={20} className="animate-spin text-seagreen" />
              <span className="font-mono text-sm">Loading posts...</span>
            </div>
          )}

          {error && (
            <div className="text-center py-16">
              <p className="font-mono text-sm text-red-400">
                Could not load blog.json: {error}
              </p>
            </div>
          )}

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
                Add entries to <code className="font-mono">frontend/public/blog.json</code> and push to update this section.
              </p>
            </motion.div>
          )}

          {!loading && !error && posts.length > 0 && (
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {posts.map(post => (
                <PostCard key={post.id} post={post} tagColorMap={tagColorMap} />
              ))}
            </motion.div>
          )}

          {/* Update hint */}
          {!loading && !error && (
            <motion.div
              variants={fadeUpVariants}
              className="mt-10 rounded-2xl border border-dashed border-seagreen/20 bg-seagreen/5 px-6 py-4 flex items-start gap-3"
            >
              <FileText size={16} className="text-seagreen flex-shrink-0 mt-0.5" />
              <p className="font-body text-sm text-black/50 dark:text-alabaster/50">
                This section is driven by{' '}
                <code className="font-mono text-seagreen">frontend/public/blog.json</code>.
                Add a new entry to that file and push to GitHub to publish a new post instantly.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function PostCard({ post, tagColorMap }) {
  const isExternal = Boolean(post.link);

  const inner = (
    <motion.article
      variants={fadeUpVariants}
      whileHover={prefersReducedMotion ? {} : { y: -4 }}
      className="card group flex flex-col h-full cursor-pointer
                 hover:shadow-lg hover:shadow-seagreen/10 hover:border-seagreen/30
                 transition-all duration-300"
    >
      {/* Date row */}
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
        {isExternal && (
          <ArrowUpRight size={16} className="inline ml-1 mb-0.5 opacity-60" />
        )}
      </h3>

      {/* Summary */}
      <p className="font-body text-sm text-black/60 dark:text-alabaster/70 leading-relaxed mb-4 flex-1">
        {post.summary}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {post.tags.map(tag => (
          <span
            key={tag}
            className={`inline-flex items-center gap-1 font-mono text-[10px] px-2.5 py-1 rounded-full border
                        ${tagColorMap[tag] ?? TAG_COLORS[0]}`}
          >
            <Tag size={9} />
            {tag}
          </span>
        ))}
        {!isExternal && (
          <span className="inline-flex items-center font-mono text-[10px] px-2.5 py-1 rounded-full border
                           border-black/10 dark:border-white/10 text-black/30 dark:text-white/30">
            Coming Soon
          </span>
        )}
      </div>
    </motion.article>
  );

  if (isExternal) {
    return (
      <a href={post.link} target="_blank" rel="noopener noreferrer" className="no-underline">
        {inner}
      </a>
    );
  }
  return inner;
}
