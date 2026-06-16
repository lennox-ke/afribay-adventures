import { Navigation } from "@/components/navigation"
import { ArrowLeft, Calendar, Clock, User, Share2, Copy, ChevronRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { posts } from "../data"
import { Metadata } from "next"
import Script from "next/script"

// ─── SEO METADATA ──────────────────────────────────────────────
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Blog Post Not Found | AfriBay Adventures",
      description: "The blog post you are looking for does not exist.",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      images: [{ url: post.cover, width: 1200, height: 800, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.cover],
    },
    alternates: {
      canonical: `https://afribayog/${post.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
  }
}

// ─── PLAIN-TEXT / LIGHT-MARKDOWN → HTML ───────────────────────
function formatContent(raw: string): string {
  const lines = raw.trim().split("\n")
  const html: string[] = []
  let inList = false
  let paragraphLines: string[] = []

  const flushParagraph = () => {
    if (paragraphLines.length > 0) {
      const text = paragraphLines.join(" ").trim()
      if (text) html.push(`<p>${text}</p>`)
      paragraphLines = []
    }
  }

  const flushList = () => {
    if (inList) { html.push("</ul>"); inList = false }
  }

  const inline = (text: string) =>
    text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")

  for (const raw of lines) {
    const line = raw.trimEnd()
    if (line.startsWith("## ")) {
      flushParagraph(); flushList()
      html.push(`<h2>${inline(line.slice(3).trim())}</h2>`)
      continue
    }
    if (line.startsWith("### ")) {
      flushParagraph(); flushList()
      html.push(`<h3>${inline(line.slice(4).trim())}</h3>`)
      continue
    }
    if (line.match(/^[-*]\s+/)) {
      flushParagraph()
      if (!inList) { html.push("<ul>"); inList = true }
      html.push(`<li>${inline(line.replace(/^[-*]\s+/, "").trim())}</li>`)
      continue
    }
    if (line.trim() === "") { flushParagraph(); flushList(); continue }
    paragraphLines.push(inline(line.trim()))
  }
  flushParagraph(); flushList()
  return html.join("\n")
}

type Props = { params: Promise<{ slug: string }> }

export default async function BlogDetailPage({ params }: Props) {
  // ← await params before accessing .slug (required in Next.js 15)
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const shareUrl = `https://afribayke.com/blog/${post.slug}`
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`
  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(post.title + " " + shareUrl)}`
  const formattedContent = formatContent(post.content)

  return (
    <main className="min-h-screen" style={{ background: "#F7F4F0", fontFamily: "'Georgia', serif" }}>

      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.cover,
            datePublished: post.date,
            dateModified: post.date,
            author: { "@type": "Person", name: post.author },
            publisher: {
              "@type": "Organization",
              name: "AfriBay Adventures",
              url: "https://afribay.vercel.app",
              logo: { "@type": "ImageObject", url: "https://afribay.vercel.app/logo.png" },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://afribay.vercel.app/blog/${post.slug}`,
            },
          }),
        }}
      />

      <Navigation />

      {/* ══════════════════════════════════════════════
          HERO — flex-col so nothing ever overlaps
      ══════════════════════════════════════════════ */}
      <section
        className="relative flex flex-col"
        style={{ minHeight: "100vh", paddingTop: "64px" }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={post.cover}
            alt={post.title}
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 40%" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 40%, rgba(20,28,20,0.80) 70%, rgba(20,28,20,0.97) 100%)",
            }}
          />
        </div>

        {/* Breadcrumb */}
        <div className="relative z-10 max-w-6xl mx-auto w-full px-6 pt-8">
          <nav className="flex items-center gap-2 text-white/60 text-sm" style={{ fontFamily: "'system-ui', sans-serif" }}>
            <Link href="/" className="hover:text-white/90 transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 flex-shrink-0" />
            <Link href="/blog" className="hover:text-white/90 transition-colors">Stories</Link>
            <ChevronRight className="h-3 w-3 flex-shrink-0" />
            <span className="text-white/90 truncate">{post.title}</span>
          </nav>
        </div>

        {/* Spacer */}
        <div className="flex-1" style={{ minHeight: "4rem" }} />

        {/* Hero text */}
        <div className="relative z-10 max-w-6xl mx-auto w-full px-6 pb-14">

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase"
                style={{
                  background: "rgba(232,161,125,0.9)",
                  color: "#1a1a1a",
                  fontFamily: "'system-ui', sans-serif",
                  backdropFilter: "blur(6px)",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1
            className="font-bold text-white mb-6"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3.75rem)",
              lineHeight: 1.1,
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
              maxWidth: "820px",
            }}
          >
            {post.title}
          </h1>

          {/* Meta */}
          <div
            className="flex flex-wrap items-center gap-x-6 gap-y-3"
            style={{ fontFamily: "'system-ui', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.75)" }}
          >
            <span className="flex items-center gap-2">
              <User className="h-4 w-4 flex-shrink-0" style={{ color: "#E8A17D" }} />
              <span style={{ color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>{post.author}</span>
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 flex-shrink-0" style={{ color: "#E8A17D" }} />
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 flex-shrink-0" style={{ color: "#E8A17D" }} />
              {post.readTime} read
            </span>
            <div className="flex items-center gap-2">
              <a
                href={twitterShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium no-underline"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "white",
                  backdropFilter: "blur(8px)",
                  fontFamily: "'system-ui', sans-serif",
                }}
              >
                <Share2 className="h-3.5 w-3.5" /> Share
              </a>
              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium no-underline"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "white",
                  backdropFilter: "blur(8px)",
                  fontFamily: "'system-ui', sans-serif",
                }}
              >
                <Copy className="h-3.5 w-3.5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          ARTICLE BODY
      ══════════════════════════════════════════════ */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
          <div className="lg:grid lg:grid-cols-[1fr_3fr] lg:gap-16">

            {/* Sticky Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-8">

                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                  style={{ color: "#7a6a55", fontFamily: "'system-ui', sans-serif", textDecoration: "none" }}
                >
                  <ArrowLeft className="h-4 w-4" /> All stories
                </Link>

                <div style={{ borderTop: "1px solid #ddd8d0" }} />

                <div>
                  <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#a89880", fontFamily: "'system-ui', sans-serif" }}>
                    Written by
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #2F3B2F, #7FB5B5)" }}
                    >
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "#2F3B2F", fontFamily: "'system-ui', sans-serif" }}>
                        {post.author}
                      </p>
                      <p className="text-xs" style={{ color: "#a89880", fontFamily: "'system-ui', sans-serif" }}>
                        Safari Guide & Writer
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: "1px solid #ddd8d0" }} />

                <div>
                  <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#a89880", fontFamily: "'system-ui', sans-serif" }}>
                    Topics
                  </p>
                  <div className="flex flex-col gap-2">
                    {post.tags.map((t) => (
                      <span key={t} className="text-sm" style={{ color: "#5c6b4a", fontFamily: "'system-ui', sans-serif" }}>
                        # {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ borderTop: "1px solid #ddd8d0" }} />

                <div>
                  <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#a89880", fontFamily: "'system-ui', sans-serif" }}>
                    Share
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href={twitterShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm"
                      style={{ color: "#7a6a55", fontFamily: "'system-ui', sans-serif", textDecoration: "none" }}
                    >
                      <Share2 className="h-4 w-4" /> Share on Twitter/X
                    </a>
                    <a
                      href={whatsappShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm"
                      style={{ color: "#7a6a55", fontFamily: "'system-ui', sans-serif", textDecoration: "none" }}
                    >
                      <Copy className="h-4 w-4" /> Share on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Article */}
            <article>

              {/* Pull quote */}
              <div className="mb-12 pl-6" style={{ borderLeft: "3px solid #E8A17D" }}>
                <p
                  className="italic"
                  style={{ color: "#4a3f35", fontSize: "clamp(1.1rem, 2vw, 1.35rem)", lineHeight: 1.75 }}
                >
                  &ldquo;{post.intro}&rdquo;
                </p>
              </div>

              {/* Body */}
              <div className="prose prose-lg max-w-none">
                <style>{`
                  .article-body p {
                    color: #3d3328;
                    font-size: 1.075rem;
                    line-height: 1.9;
                    margin-bottom: 1.6rem;
                    font-family: Georgia, serif;
                  }
                  .article-body h2 {
                    color: #2F3B2F;
                    font-size: 1.55rem;
                    font-weight: 700;
                    font-family: Georgia, serif;
                    margin-top: 2.8rem;
                    margin-bottom: 1rem;
                    padding-bottom: 0.5rem;
                    border-bottom: 2px solid #e8e0d8;
                  }
                  .article-body h3 {
                    color: #2F3B2F;
                    font-size: 1.2rem;
                    font-weight: 700;
                    font-family: Georgia, serif;
                    margin-top: 2rem;
                    margin-bottom: 0.75rem;
                  }
                  .article-body ul {
                    margin: 1.25rem 0 1.6rem 0;
                    list-style: none;
                    padding: 0;
                  }
                  .article-body ul li {
                    color: #3d3328;
                    font-size: 1.075rem;
                    line-height: 1.8;
                    font-family: Georgia, serif;
                    padding-left: 1.5rem;
                    position: relative;
                    margin-bottom: 0.5rem;
                  }
                  .article-body ul li::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0.65rem;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #E8A17D;
                  }
                  .article-body strong { color: #2F3B2F; font-weight: 700; }
                  .article-body em { color: #5c6b4a; font-style: italic; }
                `}</style>
                <div className="article-body" dangerouslySetInnerHTML={{ __html: formattedContent }} />
              </div>

              {/* Tags (mobile) */}
              <div className="flex flex-wrap gap-2 mt-12 lg:hidden">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase"
                    style={{ background: "#ede8e0", color: "#5c6b4a", fontFamily: "'system-ui', sans-serif" }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Share bar (mobile) */}
              <div className="mt-10 flex items-center gap-4 pt-8 lg:hidden" style={{ borderTop: "1px solid #ddd8d0" }}>
                <span className="text-xs uppercase tracking-widest" style={{ color: "#a89880", fontFamily: "'system-ui', sans-serif" }}>
                  Share
                </span>
                <a
                  href={twitterShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm px-4 py-2 rounded-full no-underline"
                  style={{ background: "#ede8e0", color: "#4a3f35", fontFamily: "'system-ui', sans-serif" }}
                >
                  <Share2 className="h-4 w-4" /> Twitter/X
                </a>
                <a
                  href={whatsappShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm px-4 py-2 rounded-full no-underline"
                  style={{ background: "#2F3B2F", color: "white", fontFamily: "'system-ui', sans-serif" }}
                >
                  <Copy className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative overflow-hidden" style={{ height: "80px" }}>
        <div className="absolute inset-0" style={{ background: "#2F3B2F" }} />
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" style={{ fill: "#F7F4F0" }}>
          <path d="M0,0 C360,80 1080,0 1440,80 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 md:py-32" style={{ background: "#2F3B2F" }}>
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #7FB5B5 0%, transparent 70%)", transform: "translate(30%,-30%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #E8A17D 0%, transparent 70%)", transform: "translate(-30%,30%)" }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.25em] mb-6 font-medium" style={{ color: "#7FB5B5", fontFamily: "'system-ui', sans-serif" }}>
            Your adventure awaits
          </p>
          <h2 className="font-bold leading-tight mb-6" style={{ color: "#F7F4F0", fontSize: "clamp(2rem, 5vw, 4.5rem)" }}>
            Ready to write your own<br />
            <span style={{ color: "#E8A17D" }}>safari story?</span>
          </h2>
          <p
            className="mb-12 leading-relaxed mx-auto"
            style={{ color: "rgba(247,244,240,0.7)", fontSize: "clamp(1rem, 2vw, 1.2rem)", maxWidth: "540px", fontFamily: "'system-ui', sans-serif" }}
          >
            Let our expert guides transform these inspiring tales into your personal adventure.
            Every journey begins with a single conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-105"
              style={{ background: "#E8A17D", color: "#1a1a1a", fontFamily: "'system-ui', sans-serif", textDecoration: "none", boxShadow: "0 4px 24px rgba(232,161,125,0.35)" }}
            >
              Start Planning Your Safari <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/packages/luxury"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base"
              style={{ border: "1.5px solid rgba(247,244,240,0.3)", color: "#F7F4F0", fontFamily: "'system-ui', sans-serif", textDecoration: "none" }}
            >
              View Safari Packages
            </Link>
          </div>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-sm" style={{ color: "rgba(247,244,240,0.45)", fontFamily: "'system-ui', sans-serif" }}>
            <span><span style={{ color: "#7FB5B5" }}>✓</span> Expert local guides</span>
            <span><span style={{ color: "#7FB5B5" }}>✓</span> Tailored itineraries</span>
            <span><span style={{ color: "#7FB5B5" }}>✓</span> 24/7 support</span>
          </div>
        </div>
      </section>
    </main>
  )
}