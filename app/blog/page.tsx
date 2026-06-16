import { Navigation } from "@/components/navigation"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Head from "next/head"
import { posts } from "./data"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function BlogIndexPage() {
  const [p0, p1, p2, p3, p4, ...remainder] = posts

  return (
    <main style={{ background: "#F5F0E8", minHeight: "100vh", fontFamily: "'Georgia', serif" }}>
      <Navigation />
        <Head>
          {/* ===== Google tag (gtag.js) ===== */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-RG47BTJYSL"
          />
          <SpeedInsights />
          <Analytics />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-RG47BTJYSL');
              `,
            }}
          />

          {/* ===== FAVICONS & PWA ===== */}
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.png" type="image/png" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />

          {/* ===== Google Site Verification ===== */}
          <meta name="google-site-verification" content="repnd0wkFxG-89op86fuQuIEOPzDn5epyg7HmU2-_AI" />
        </Head>      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Lato:wght@300;400;700&display=swap');

        :root {
          --ink: #1a1410;
          --cream: #F5F0E8;
          --amber: #C8782A;
          --muted: #7a6e60;
          --rule: #d4cbbf;
          --card-bg: #FDFAF4;
        }

        .blog-page * { box-sizing: border-box; }

        .blog-page h1, .blog-page h2, .blog-page h3 {
          font-family: 'Playfair Display', Georgia, serif;
        }

        .blog-page p, .blog-page span, .blog-page a.sans {
          font-family: 'Lato', system-ui, sans-serif;
        }

        /* ── MASTHEAD ── */
        .masthead {
          border-bottom: 3px solid var(--ink);
          padding: 6rem 0 2rem;
        }
        .masthead-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }
        .masthead-top {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }
        .masthead-title {
          font-size: clamp(3rem, 12vw, 8rem);
          font-weight: 900;
          line-height: 0.9;
          color: var(--ink);
          letter-spacing: -0.03em;
        }
        .masthead-title em {
          font-style: italic;
          color: var(--amber);
        }
        .masthead-meta {
          text-align: right;
          padding-bottom: 0.5rem;
          flex-shrink: 0;
        }
        .masthead-meta p {
          font-family: 'Lato', sans-serif;
          font-size: 0.75rem;
          color: var(--muted);
          line-height: 1.6;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }
        .masthead-rule {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--rule);
          overflow-x: auto;
        }
        .masthead-rule span {
          font-family: 'Lato', sans-serif;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--muted);
          white-space: nowrap;
        }
        .masthead-rule-line { flex: 1; min-width: 24px; height: 1px; background: var(--rule); }

        /* ── LEAD STORY ── */
        .lead-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2.5rem 1.25rem;
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 2.5rem;
          align-items: start;
          border-bottom: 1px solid var(--rule);
        }
        .lead-image-wrap {
          position: relative;
          overflow: hidden;
        }
        .lead-image-wrap img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          display: block;
          transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .lead-image-wrap:hover img { transform: scale(1.03); }
        .lead-issue {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--amber);
          color: white;
          font-family: 'Lato', sans-serif;
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          padding: 0.3rem 0.65rem;
        }
        .lead-content { padding-top: 1.25rem; }
        .lead-kicker {
          font-family: 'Lato', sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--amber);
          margin-bottom: 0.65rem;
          display: block;
        }
        .lead-title {
          font-size: clamp(1.6rem, 4vw, 2.8rem);
          font-weight: 700;
          line-height: 1.1;
          color: var(--ink);
          margin-bottom: 0.9rem;
          letter-spacing: -0.02em;
        }
        .lead-excerpt {
          font-family: 'Lato', sans-serif;
          font-size: 0.95rem;
          line-height: 1.75;
          color: #5a5246;
          margin-bottom: 1.25rem;
        }
        .lead-byline {
          font-family: 'Lato', sans-serif;
          font-size: 0.75rem;
          color: var(--muted);
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 1.25rem;
        }
        .lead-byline strong { color: var(--ink); font-weight: 700; }
        .read-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Lato', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--ink);
          text-decoration: none;
          border-bottom: 2px solid var(--amber);
          padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s;
        }
        .read-btn:hover { color: var(--amber); }
        .read-btn svg { transition: transform 0.2s; }
        .read-btn:hover svg { transform: translateX(3px); }

        /* ── LEAD SIDEBAR ── */
        .lead-sidebar {
          border-left: 1px solid var(--rule);
          padding-left: 2rem;
          padding-top: 1.25rem;
        }
        .sidebar-label {
          font-family: 'Lato', sans-serif;
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--muted);
          margin-bottom: 1.25rem;
          display: block;
        }
        .sidebar-post {
          padding: 1.1rem 0;
          border-bottom: 1px solid var(--rule);
          text-decoration: none;
          display: block;
        }
        .sidebar-post:first-of-type { padding-top: 0; }
        .sidebar-post-num {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--rule);
          line-height: 1;
          margin-bottom: 0.4rem;
          display: block;
        }
        .sidebar-post-title {
          font-family: 'Playfair Display', serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1.3;
          margin-bottom: 0.35rem;
          display: block;
          transition: color 0.2s;
        }
        .sidebar-post:hover .sidebar-post-title { color: var(--amber); }
        .sidebar-post-meta {
          font-family: 'Lato', sans-serif;
          font-size: 0.7rem;
          color: var(--muted);
        }

        /* ── MOBILE SIDEBAR CARDS (shown only on mobile) ── */
        .mobile-sidebar {
          display: none;
          border-top: 1px solid var(--rule);
          margin-top: 2rem;
        }
        .mobile-sidebar-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .mobile-sidebar-card {
          text-decoration: none;
          display: block;
          padding: 1rem;
          background: var(--card-bg);
        }
        .mobile-sidebar-card-num {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          font-weight: 900;
          color: var(--rule);
          line-height: 1;
          margin-bottom: 0.4rem;
          display: block;
        }
        .mobile-sidebar-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1.3;
          display: block;
          transition: color 0.2s;
        }
        .mobile-sidebar-card:hover .mobile-sidebar-card-title { color: var(--amber); }

        /* ── BENTO GRID ── */
        .grid-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2.5rem 1.25rem;
        }
        .section-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .section-header h2 {
          font-family: 'Lato', sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--muted);
          white-space: nowrap;
        }
        .section-header-rule { flex: 1; height: 1px; background: var(--rule); }

        .bento {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 1.25rem;
        }
        .bento-a { grid-column: span 5; }
        .bento-b { grid-column: span 4; }
        .bento-c { grid-column: span 3; }
        .bento-d { grid-column: span 4; }
        .bento-e { grid-column: span 8; }

        .story-card {
          background: var(--card-bg);
          text-decoration: none;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: box-shadow 0.3s ease;
        }
        .story-card:hover { box-shadow: 0 6px 30px rgba(26,20,16,0.12); }
        .story-card-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .story-card:hover .story-card-img { transform: scale(1.04); }
        .story-card-img-wrap { overflow: hidden; position: relative; }

        .story-card-body { padding: 1.1rem; flex: 1; display: flex; flex-direction: column; }
        .story-tag {
          font-family: 'Lato', sans-serif;
          font-size: 0.6rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--amber);
          margin-bottom: 0.45rem;
          display: block;
        }
        .story-title {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1.3;
          margin-bottom: 0.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.2s;
        }
        .story-card:hover .story-title { color: var(--amber); }
        .story-excerpt {
          font-family: 'Lato', sans-serif;
          font-size: 0.8rem;
          line-height: 1.65;
          color: #6b6055;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 0.9rem;
        }
        .story-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.65rem;
          border-top: 1px solid var(--rule);
          margin-top: auto;
        }
        .story-author {
          font-family: 'Lato', sans-serif;
          font-size: 0.68rem;
          color: var(--muted);
        }
        .story-arrow {
          color: var(--ink);
          transition: transform 0.2s, color 0.2s;
          flex-shrink: 0;
        }
        .story-card:hover .story-arrow { transform: translate(2px, -2px); color: var(--amber); }

        /* ── STRIP ROW ── */
        .strip-section {
          border-top: 3px solid var(--ink);
          border-bottom: 1px solid var(--rule);
          background: var(--ink);
        }
        .strip-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2.5rem 1.25rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 0;
        }
        .strip-item {
          padding: 0 1.75rem;
          border-right: 1px solid rgba(255,255,255,0.1);
          text-decoration: none;
        }
        .strip-item:first-child { padding-left: 0; }
        .strip-item:last-child { border-right: none; }
        .strip-num {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 0.82rem;
          color: var(--amber);
          margin-bottom: 0.4rem;
          display: block;
        }
        .strip-title {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 700;
          color: #F5F0E8;
          line-height: 1.3;
          margin-bottom: 0.35rem;
          transition: color 0.2s;
          display: block;
        }
        .strip-item:hover .strip-title { color: var(--amber); }
        .strip-meta {
          font-family: 'Lato', sans-serif;
          font-size: 0.68rem;
          color: rgba(245,240,232,0.4);
        }

        /* ── CTA ── */
        .cta-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 1.25rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          border-bottom: 1px solid var(--rule);
        }
        .cta-label {
          font-family: 'Lato', sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--amber);
          margin-bottom: 0.9rem;
          display: block;
        }
        .cta-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 900;
          line-height: 1.0;
          color: var(--ink);
          letter-spacing: -0.03em;
        }
        .cta-title em { font-style: italic; color: var(--amber); }
        .cta-right p {
          font-family: 'Lato', sans-serif;
          font-size: 0.95rem;
          line-height: 1.75;
          color: #5a5246;
          margin-bottom: 1.75rem;
        }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--ink);
          color: var(--cream);
          font-family: 'Lato', sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          padding: 0.9rem 1.75rem;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }
        .cta-btn:hover { background: var(--amber); color: white; }
        .cta-btn svg { transition: transform 0.2s; }
        .cta-btn:hover svg { transform: translateX(3px); }

        /* ── FOOTER ── */
        .footer-strip {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.75rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .footer-strip p {
          font-family: 'Lato', sans-serif;
          font-size: 0.7rem;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }
        .footer-strip-rule { flex: 1; height: 1px; background: var(--rule); min-width: 24px; }

        /* ══════════════════════════════════
           MOBILE BREAKPOINTS
        ══════════════════════════════════ */

        /* Tablet: ≤ 900px */
        @media (max-width: 900px) {
          .lead-section {
            grid-template-columns: 1fr;
            gap: 0;
          }
          /* Hide desktop sidebar, show mobile cards */
          .lead-sidebar { display: none; }
          .mobile-sidebar { display: block; }

          .lead-image-wrap img { height: 320px; }

          /* Bento: 2 columns */
          .bento { grid-template-columns: 1fr 1fr; gap: 1rem; }
          .bento-a, .bento-b, .bento-c,
          .bento-d, .bento-e { grid-column: span 1; }

          /* Wide card becomes stacked on tablet */
          .bento-e { flex-direction: column !important; }
          .bento-e .story-card-img-wrap { flex: none !important; }
          .bento-e .story-card-img { height: 200px !important; min-height: unset !important; }

          .cta-section { grid-template-columns: 1fr; gap: 2rem; }
        }

        /* Mobile: ≤ 600px */
        @media (max-width: 600px) {
          .masthead { padding: 5rem 0 1.5rem; }

          .masthead-top { flex-direction: column; align-items: flex-start; gap: 1rem; }
          .masthead-meta { text-align: left; }

          .lead-image-wrap img { height: 240px; }
          .lead-excerpt { display: none; } /* save space; excerpt is in body text */

          /* Sidebar cards: single column on small phones */
          .mobile-sidebar-grid { grid-template-columns: 1fr; }

          /* Bento: single column */
          .bento { grid-template-columns: 1fr; }
          .bento-a, .bento-b, .bento-c,
          .bento-d, .bento-e { grid-column: span 1; }

          /* Strip: stacked */
          .strip-inner { grid-template-columns: 1fr; }
          .strip-item {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding: 1.25rem 0;
          }
          .strip-item:first-child { padding-left: 0; padding-top: 0; }
          .strip-item:last-child { border-bottom: none; }

          .cta-section { padding: 3rem 1.25rem; }
          .cta-title { font-size: clamp(2rem, 10vw, 2.8rem); }
        }
      `}</style>

      <div className="blog-page">

        {/* ══════════════════════════════════
            MASTHEAD
        ══════════════════════════════════ */}
        <div className="masthead">
          <div className="masthead-inner">
            <div className="masthead-top">
              <h1 className="masthead-title">
                Safari<br /><em>Stories</em>
              </h1>
              <div className="masthead-meta">
                <p>AfriBay Adventures</p>
                <p>Kenya & Tanzania</p>
                <p style={{ marginTop: "0.5rem", fontSize: "0.62rem" }}>
                  {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </p>
              </div>
            </div>
            <div className="masthead-rule">
              <span>Field Dispatches</span>
              <div className="masthead-rule-line" />
              <span>{posts.length} stories</span>
              <div className="masthead-rule-line" />
              <span>Kenya · Tanzania</span>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════
            LEAD STORY + SIDEBAR
        ══════════════════════════════════ */}
        <div className="lead-section">
          {/* Main lead */}
          <div>
            <Link href={`/blog/${p0.slug}`} style={{ textDecoration: "none", display: "block" }}>
              <div className="lead-image-wrap">
                <img src={p0.cover} alt={p0.title} />
                <div className="lead-issue">Feature</div>
              </div>
            </Link>
            <div className="lead-content">
              <span className="lead-kicker">{p0.tags[0]}</span>
              <Link href={`/blog/${p0.slug}`} style={{ textDecoration: "none" }}>
                <h2 className="lead-title">{p0.title}</h2>
              </Link>
              <p className="lead-excerpt">{p0.excerpt}</p>
              <div className="lead-byline">
                <span>By <strong>{p0.author}</strong></span>
                <span>{new Date(p0.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                <span>{p0.readTime} read</span>
              </div>
              <Link href={`/blog/${p0.slug}`} className="read-btn">
                Read full story <ArrowRight size={14} />
              </Link>
            </div>

            {/* Mobile-only: sidebar posts rendered as a compact card grid */}
            <div className="mobile-sidebar">
              <span className="sidebar-label" style={{ display: "block", paddingTop: "1.5rem", marginBottom: "1rem" }}>
                Also in this issue
              </span>
              <div className="mobile-sidebar-grid">
                {[p1, p2, p3].filter(Boolean).map((p, i) => (
                  <Link key={p!.slug} href={`/blog/${p!.slug}`} className="mobile-sidebar-card">
                    <span className="mobile-sidebar-card-num">0{i + 2}</span>
                    <span className="mobile-sidebar-card-title">{p!.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop sidebar */}
          <aside className="lead-sidebar">
            <span className="sidebar-label">Also in this issue</span>
            {[p1, p2, p3].filter(Boolean).map((p, i) => (
              <Link key={p!.slug} href={`/blog/${p!.slug}`} className="sidebar-post">
                <span className="sidebar-post-num">0{i + 2}</span>
                <span className="sidebar-post-title">{p!.title}</span>
                <span className="sidebar-post-meta">{p!.author} · {p!.readTime} read</span>
              </Link>
            ))}
          </aside>
        </div>

        {/* ══════════════════════════════════
            BENTO GRID
        ══════════════════════════════════ */}
        {remainder.length > 0 && (
          <div className="grid-section">
            <div className="section-header">
              <h2>More stories</h2>
              <div className="section-header-rule" />
            </div>

            <div className="bento">
              {remainder[0] && (
                <Link href={`/blog/${remainder[0].slug}`} className="story-card bento-a" style={{ textDecoration: "none" }}>
                  <div className="story-card-img-wrap">
                    <img src={remainder[0].cover} alt={remainder[0].title} className="story-card-img" style={{ height: "260px" }} />
                  </div>
                  <div className="story-card-body">
                    <span className="story-tag">{remainder[0].tags[0]}</span>
                    <span className="story-title">{remainder[0].title}</span>
                    <p className="story-excerpt">{remainder[0].excerpt}</p>
                    <div className="story-footer">
                      <span className="story-author">{remainder[0].author}</span>
                      <ArrowUpRight size={16} className="story-arrow" />
                    </div>
                  </div>
                </Link>
              )}
              {remainder[1] && (
                <Link href={`/blog/${remainder[1].slug}`} className="story-card bento-b" style={{ textDecoration: "none" }}>
                  <div className="story-card-img-wrap">
                    <img src={remainder[1].cover} alt={remainder[1].title} className="story-card-img" />
                  </div>
                  <div className="story-card-body">
                    <span className="story-tag">{remainder[1].tags[0]}</span>
                    <span className="story-title">{remainder[1].title}</span>
                    <p className="story-excerpt">{remainder[1].excerpt}</p>
                    <div className="story-footer">
                      <span className="story-author">{remainder[1].author}</span>
                      <ArrowUpRight size={16} className="story-arrow" />
                    </div>
                  </div>
                </Link>
              )}
              {remainder[2] && (
                <Link href={`/blog/${remainder[2].slug}`} className="story-card bento-c" style={{ textDecoration: "none" }}>
                  <div className="story-card-img-wrap">
                    <img src={remainder[2].cover} alt={remainder[2].title} className="story-card-img" />
                  </div>
                  <div className="story-card-body">
                    <span className="story-tag">{remainder[2].tags[0]}</span>
                    <span className="story-title">{remainder[2].title}</span>
                    <div className="story-footer" style={{ marginTop: "auto" }}>
                      <span className="story-author">{remainder[2].author}</span>
                      <ArrowUpRight size={16} className="story-arrow" />
                    </div>
                  </div>
                </Link>
              )}

              {remainder[3] && (
                <Link href={`/blog/${remainder[3].slug}`} className="story-card bento-d" style={{ textDecoration: "none" }}>
                  <div className="story-card-img-wrap">
                    <img src={remainder[3].cover} alt={remainder[3].title} className="story-card-img" />
                  </div>
                  <div className="story-card-body">
                    <span className="story-tag">{remainder[3].tags[0]}</span>
                    <span className="story-title">{remainder[3].title}</span>
                    <div className="story-footer" style={{ marginTop: "auto" }}>
                      <span className="story-author">{remainder[3].author}</span>
                      <ArrowUpRight size={16} className="story-arrow" />
                    </div>
                  </div>
                </Link>
              )}
              {remainder[4] && (
                <Link href={`/blog/${remainder[4].slug}`} className="story-card bento-e" style={{ textDecoration: "none", flexDirection: "row" }}>
                  <div className="story-card-img-wrap" style={{ flex: "0 0 52%", overflow: "hidden" }}>
                    <img src={remainder[4].cover} alt={remainder[4].title} className="story-card-img" style={{ height: "100%", minHeight: "200px" }} />
                  </div>
                  <div className="story-card-body" style={{ flex: 1 }}>
                    <span className="story-tag">{remainder[4].tags[0]}</span>
                    <span className="story-title" style={{ fontSize: "1.2rem" }}>{remainder[4].title}</span>
                    <p className="story-excerpt">{remainder[4].excerpt}</p>
                    <div className="story-footer">
                      <span className="story-author">{remainder[4].author}</span>
                      <ArrowUpRight size={16} className="story-arrow" />
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        )}

        {/* ══════════════════════════════════
            DARK STRIP — remaining posts
        ══════════════════════════════════ */}
        {remainder.length > 5 && (
          <div className="strip-section">
            <div className="strip-inner">
              {remainder.slice(5, 8).map((p, i) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="strip-item">
                  <span className="strip-num">0{i + 1}</span>
                  <span className="strip-title">{p.title}</span>
                  <span className="strip-meta">{p.author} · {p.readTime} read</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ══════════════════════════════════
            CTA
        ══════════════════════════════════ */}
        <div className="cta-section">
          <div>
            <span className="cta-label">Plan your adventure</span>
            <h2 className="cta-title">
              Your story<br />
              starts <em>here.</em>
            </h2>
          </div>
          <div className="cta-right">
            <p>
              Every great safari story begins the same way — a single conversation with someone who knows the land. Our guides have spent years tracking the migration, watching the skies and earning the trust of the wilderness.
            </p>
            <Link href="/contact" className="cta-btn">
              Talk to an expert <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* ── footer rule ── */}
        <div className="footer-strip">
          <p>AfriBay Adventures</p>
          <div className="footer-strip-rule" />
          <p>Kenya · Tanzania · East Africa</p>
        </div>

      </div>
    </main>
  )
}