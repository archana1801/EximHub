import { Link } from "react-router-dom";

const guides = [
  {
    color: "#1FA971",
    bg: "rgba(31,169,113,0.08)",
    border: "rgba(31,169,113,0.22)",
    tag: "Getting Started",
    tagBg: "rgba(31,169,113,0.08)",
    tagBorder: "rgba(31,169,113,0.25)",
    title: "Import Process Guide",
    desc: "A step-by-step walkthrough of the entire import cycle — from supplier selection and sampling to customs clearance and final delivery.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    color: "#0891b2",
    bg: "rgba(8,145,178,0.08)",
    border: "rgba(8,145,178,0.22)",
    tag: "Supplier Sourcing",
    tagBg: "rgba(8,145,178,0.08)",
    tagBorder: "rgba(8,145,178,0.25)",
    title: "How to Find Reliable Suppliers",
    desc: "Learn what to look for when evaluating manufacturers — certifications, MOQs, sample quality, communication, and red flags to avoid.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <polyline points="9 11 11 13 15 9" />
      </svg>
    ),
  },
  {
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.08)",
    border: "rgba(124,58,237,0.22)",
    tag: "Documentation",
    tagBg: "rgba(124,58,237,0.08)",
    tagBorder: "rgba(124,58,237,0.25)",
    title: "Export Documentation Basics",
    desc: "Understand the key documents required for international trade — Bill of Lading, Certificate of Origin, Export Invoice, and more.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="12" y2="17" />
      </svg>
    ),
  },
  {
    color: "#D97706",
    bg: "rgba(217,119,6,0.08)",
    border: "rgba(217,119,6,0.22)",
    tag: "Logistics",
    tagBg: "rgba(217,119,6,0.08)",
    tagBorder: "rgba(217,119,6,0.25)",
    title: "Shipping & Logistics Guide",
    desc: "Compare air, sea, and land freight options. Understand Incoterms, freight costs, transit times, and how to choose the right carrier.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    color: "#059669",
    bg: "rgba(5,150,105,0.08)",
    border: "rgba(5,150,105,0.22)",
    tag: "Branding",
    tagBg: "rgba(5,150,105,0.08)",
    tagBorder: "rgba(5,150,105,0.25)",
    title: "Private Label Guide",
    desc: "Everything you need to launch your own brand — product customization, logo placement, MOQ requirements, and packaging design.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
  {
    color: "#2563EB",
    bg: "rgba(37,99,235,0.08)",
    border: "rgba(37,99,235,0.22)",
    tag: "Compliance",
    tagBg: "rgba(37,99,235,0.08)",
    tagBorder: "rgba(37,99,235,0.25)",
    title: "Customs & Compliance Handbook",
    desc: "Navigate customs duties, HS codes, import regulations, and country-specific compliance requirements for smooth clearance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "How long does the import process take?",
    a: "Timelines vary by product and destination. Standard sea freight typically takes 18–35 days. Air freight is 5–10 days. Express courier for samples is 3–7 days. We provide accurate ETAs at the time of order confirmation.",
  },
  {
    q: "Do you handle all customs documentation?",
    a: "Yes. Our documentation team prepares and manages all required paperwork — Export Invoice, Packing List, Bill of Lading, Certificate of Origin, and country-specific compliance certificates.",
  },
  {
    q: "Can I order small quantities or test orders?",
    a: "Absolutely. We offer flexible MOQ (Minimum Order Quantity) options for first-time importers and trial orders, allowing you to test product quality before committing to larger volumes.",
  },
  {
    q: "Which countries do you export to?",
    a: "We currently export to 40+ countries across the USA, UAE, UK, Germany, Australia, Singapore, Nigeria, France, and more. Contact us to confirm availability for your specific destination.",
  },
  {
    q: "What certifications do your suppliers hold?",
    a: "Our supplier network holds ISO 9001:2015, APEDA, DGFT, FSSAI, and other relevant industry certifications. All certifications are verifiable and shared upon request before order confirmation.",
  },
];

export default function Resources() {
  return (
    <main style={S.main}>

      {/* ── 1. HERO ── */}
      <section style={S.hero}>
        <div style={S.heroBlobLeft}  aria-hidden="true" />
        <div style={S.heroBlobRight} aria-hidden="true" />
        <div style={S.heroInner}>

          {/* LEFT */}
          <div style={S.heroLeft}>
            <span style={S.badge}>
              <span style={S.badgeDot} />
              Knowledge Base
            </span>
            <h1 style={S.heroTitle}>
              Resources &amp; <span style={S.heroAccent}>Guides</span>
            </h1>
            <p style={S.heroSub}>
              Everything you need to know about importing, sourcing, and global trade — in one place.
            </p>
            <div style={S.crumbs}>
              <Link to="/" style={S.crumbLink}>Home</Link>
              <span style={S.crumbSep}>›</span>
              <span style={S.crumbActive}>Resources</span>
            </div>
          </div>

          {/* RIGHT — hero image */}
          <div style={S.heroRight}>
            <img
              src="/images/categories/resourcehero.png"
              alt="Resources and guides"
              style={S.heroImg}
              onError={(e) => { e.target.style.display = "none"; }}
            />
          </div>

        </div>
      </section>

      {/* ── 2. RESOURCE CARDS ── */}
      <section style={S.cardsSection}>
        <div style={S.container}>
          <div style={S.sectionHead}>
            <h2 style={S.sectionTitle}>Guides &amp; Handbooks</h2>
            <p style={S.sectionSub}>
              Practical resources built for importers — from first inquiry to delivery.
            </p>
          </div>
          <div className="rs-grid">
            {guides.map((g, i) => (
              <div key={i} className="rs-card" style={S.card}>
                <div style={S.cardTop}>
                  <div style={{ ...S.iconBox, background: g.bg, border: `1px solid ${g.border}`, color: g.color }}>
                    {g.icon}
                  </div>
                  <span style={{ ...S.cardTag, color: g.color, background: g.tagBg, border: `1px solid ${g.tagBorder}` }}>
                    {g.tag}
                  </span>
                </div>
                <h3 style={S.cardTitle}>{g.title}</h3>
                <p style={S.cardDesc}>{g.desc}</p>
                <button style={{ ...S.learnBtn, color: g.color, borderColor: g.border }} className="rs-learn-btn">
                  Learn More
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. FAQ ── */}
      <section style={S.faqSection}>
        <div style={S.faqBlobLeft}  aria-hidden="true" />
        <div style={S.faqBlobRight} aria-hidden="true" />
        <div style={S.container}>
          <div style={S.sectionHead}>
            <h2 style={S.sectionTitle}>Frequently Asked Questions</h2>
            <p style={S.sectionSub}>
              Quick answers to the questions importers ask most often.
            </p>
          </div>

          {/* 2-col: image left + accordion right */}
          <div style={S.faqLayout}>

            {/* LEFT — question image */}
            <div style={S.faqImgCol}>
              <img
                src="/images/categories/question.png"
                alt="FAQ"
                style={S.faqImg}
                onError={(e) => { e.target.style.display = "none"; }}
              />
            </div>

            {/* RIGHT — accordion */}
            <div style={S.faqRight}>
              <div style={S.faqList}>
                {faqs.map((f, i) => (
                  <div key={i} className="rs-faq" style={S.faqItem}>
                    <div style={S.faqDot} />
                    <div style={S.faqBody}>
                      <h3 style={S.faqQ}>{f.q}</h3>
                      <p style={S.faqA}>{f.a}</p>
                    </div>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" style={{ flexShrink: 0 }}>
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                ))}
              </div>
              <button style={S.viewAllBtn} className="rs-view-all">
                View All Questions
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. SUPPORT CTA ── */}
      <section style={S.ctaSection}>
        <div style={S.ctaBlobLeft}  aria-hidden="true" />
        <div style={S.ctaBlobRight} aria-hidden="true" />
        <div style={S.ctaInner}>
          <div style={S.ctaIconWrap}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#1FA971" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <span style={S.ctaBadge}>
            <span style={S.ctaBadgeDot} />
            Expert Support
          </span>
          <h2 style={S.ctaTitle}>
            Need <span style={S.ctaAccent}>Expert Guidance?</span>
          </h2>
          <p style={S.ctaSub}>
            Our team helps you at every step of the import process — from sourcing to delivery.
          </p>
          <div style={S.ctaBtns}>
            <Link to="/contact" style={S.ctaBtn} className="rs-cta-btn">
              Contact Us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link to="/certifications" style={S.outlineBtn} className="rs-outline-btn">
              View Certifications
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .rs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .rs-card {
          transition: transform 0.3s cubic-bezier(.22,.68,0,1.2), box-shadow 0.3s ease;
        }
        .rs-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 20px 48px rgba(13,27,42,0.11), 0 4px 12px rgba(13,27,42,0.05) !important;
        }
        .rs-learn-btn {
          transition: background 0.2s ease, color 0.2s ease;
          cursor: pointer;
        }
        .rs-learn-btn:hover {
          background: rgba(31,169,113,0.08) !important;
        }
        .rs-faq {
          transition: background 0.22s ease;
        }
        .rs-faq:hover {
          background: #ffffff !important;
          box-shadow: 0 4px 20px rgba(13,27,42,0.07) !important;
        }
        .rs-cta-btn {
          transition: background 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
        }
        .rs-cta-btn:hover {
          background: #178a5e !important;
          box-shadow: 0 10px 32px rgba(31,169,113,0.4) !important;
          transform: translateY(-2px);
        }
        .rs-outline-btn {
          transition: background 0.22s ease, color 0.22s ease;
        }
        .rs-outline-btn:hover {
          background: rgba(255,255,255,0.1) !important;
          color: #ffffff !important;
        }
        @media (max-width: 960px) {
          .rs-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .rs-grid { grid-template-columns: 1fr; }
        }
        .rs-view-all {
          transition: background 0.22s ease, box-shadow 0.22s ease;
        }
        .rs-view-all:hover {
          background: #178a5e !important;
          box-shadow: 0 6px 20px rgba(31,169,113,0.3) !important;
        }
        @media (max-width: 860px) {
          .rs-faq-layout { flex-direction: column !important; }
        }
      `}</style>
    </main>
  );
}

const S = {
  main: { width: "100%" },

  /* ── HERO ── */
  hero: {
    position: "relative",
    background: "linear-gradient(160deg, #F8FAFB 0%, #F0FAF5 55%, #F5F7FA 100%)",
    padding: "80px 60px 72px",
    overflow: "hidden",
    borderBottom: "1px solid rgba(13,27,42,0.07)",
  },
  heroBlobLeft: {
    position: "absolute",
    width: "480px", height: "480px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(31,169,113,0.08) 0%, transparent 65%)",
    top: "-140px", left: "-140px",
    pointerEvents: "none",
  },
  heroBlobRight: {
    position: "absolute",
    width: "360px", height: "360px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 65%)",
    bottom: "-80px", right: "-80px",
    pointerEvents: "none",
  },
  heroInner: {
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "48px",
  },

  heroLeft: {
    flex: 1,
    maxWidth: "560px",
  },

  heroRight: {
    flexShrink: 0,
    width: "700px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  heroImg: {
    width: "100%",
    height: "auto",
    maxHeight: "520px",
    objectFit: "contain",
    display: "block",
    opacity: 0.95,
    maskImage: "linear-gradient(to left, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%), linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
    WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%), linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
    maskComposite: "intersect",
    WebkitMaskComposite: "destination-in",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "11px",
    fontWeight: "700",
    color: "#1FA971",
    textTransform: "uppercase",
    letterSpacing: "2.2px",
    padding: "7px 18px",
    background: "rgba(31,169,113,0.08)",
    border: "1px solid rgba(31,169,113,0.28)",
    borderRadius: "30px",
    marginBottom: "24px",
  },
  badgeDot: {
    display: "inline-block",
    width: "7px", height: "7px",
    borderRadius: "50%",
    background: "#1FA971",
    boxShadow: "0 0 7px #1FA971",
    flexShrink: 0,
  },
  heroTitle: {
    fontSize: "clamp(32px, 4vw, 52px)",
    fontWeight: "800",
    color: "#0D1B2A",
    margin: "0 0 18px 0",
    letterSpacing: "-1px",
    lineHeight: "1.1",
  },
  heroAccent: { color: "#1FA971" },
  heroSub: {
    fontSize: "16px",
    color: "rgba(13,27,42,0.55)",
    lineHeight: "1.8",
    maxWidth: "540px",
    margin: "0 0 28px 0",
  },
  crumbs: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "13px",
  },
  crumbLink: { color: "#1FA971", textDecoration: "none", fontWeight: "500" },
  crumbSep: { color: "rgba(13,27,42,0.3)", fontSize: "15px" },
  crumbActive: { color: "rgba(13,27,42,0.45)", fontWeight: "500" },

  /* ── SHARED ── */
  container: { maxWidth: "1160px", margin: "0 auto" },
  sectionHead: { textAlign: "center", marginBottom: "52px" },
  sectionTitle: {
    fontSize: "clamp(24px, 3vw, 38px)",
    fontWeight: "800",
    color: "#0D1B2A",
    margin: "0 0 14px 0",
    letterSpacing: "-0.5px",
  },
  sectionSub: {
    fontSize: "15.5px",
    color: "rgba(13,27,42,0.52)",
    lineHeight: "1.8",
    maxWidth: "500px",
    margin: "0 auto",
  },

  /* ── CARDS ── */
  cardsSection: {
    padding: "96px 60px",
    background: "#ffffff",
  },
  card: {
    background: "#ffffff",
    border: "1px solid rgba(13,27,42,0.08)",
    borderRadius: "16px",
    padding: "26px 22px 22px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    cursor: "default",
    boxShadow: "0 4px 20px rgba(13,27,42,0.06), 0 1px 4px rgba(13,27,42,0.03)",
  },
  cardTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
  },
  iconBox: {
    width: "48px", height: "48px",
    borderRadius: "13px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  cardTag: {
    fontSize: "10px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.8px",
    padding: "4px 10px",
    borderRadius: "20px",
    whiteSpace: "nowrap",
  },
  cardTitle: {
    fontSize: "15px",
    fontWeight: "700",
    color: "#0D1B2A",
    margin: "0",
    letterSpacing: "-0.1px",
    lineHeight: "1.35",
  },
  cardDesc: {
    fontSize: "13.5px",
    color: "rgba(13,27,42,0.52)",
    lineHeight: "1.75",
    margin: "0",
    flexGrow: 1,
  },
  learnBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "7px",
    fontSize: "13px",
    fontWeight: "600",
    background: "transparent",
    border: "1px solid",
    padding: "8px 16px",
    borderRadius: "8px",
    alignSelf: "flex-start",
    letterSpacing: "0.1px",
  },

  /* ── FAQ ── */
  faqSection: {
    position: "relative",
    padding: "96px 60px",
    background: "linear-gradient(160deg, #F8FAFB 0%, #F0FAF5 60%, #F8FAFB 100%)",
    overflow: "hidden",
  },
  faqBlobLeft: {
    position: "absolute",
    width: "400px", height: "400px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(31,169,113,0.06) 0%, transparent 65%)",
    top: "-100px", left: "-100px",
    pointerEvents: "none",
  },
  faqBlobRight: {
    position: "absolute",
    width: "360px", height: "360px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 65%)",
    bottom: "-80px", right: "-80px",
    pointerEvents: "none",
  },
  faqLayout: {
    display: "flex",
    alignItems: "stretch",
    gap: "48px",
  },

  faqImgCol: {
    flexShrink: 0,
    width: "340px",
    minHeight: "520px",
    display: "flex",
    alignItems: "stretch",
    alignSelf: "stretch",
  },

  faqImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    display: "block",
    borderRadius: "16px",
    boxShadow: "0 8px 32px rgba(11,31,58,0.1)",
  },

  faqRight: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  faqList: {
    display: "flex",
    flexDirection: "column",
    gap: "0",
  },

  faqItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
    background: "#ffffff",
    border: "1px solid #EAECF0",
    borderRadius: "12px",
    padding: "18px 20px",
    cursor: "default",
    marginBottom: "10px",
    boxShadow: "0 1px 6px rgba(11,31,58,0.05)",
  },

  faqDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#1FA971",
    flexShrink: 0,
    marginTop: "6px",
  },

  faqBody: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    flex: 1,
  },

  faqQ: {
    fontSize: "14.5px",
    fontWeight: "700",
    color: "#0B1F3A",
    margin: "0",
    letterSpacing: "-0.1px",
    lineHeight: "1.4",
  },

  faqA: {
    fontSize: "13.5px",
    color: "rgba(11,31,58,0.52)",
    lineHeight: "1.75",
    margin: "0",
  },

  viewAllBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "#1FA971",
    color: "#ffffff",
    border: "none",
    padding: "11px 24px",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: "700",
    cursor: "pointer",
    alignSelf: "flex-start",
    fontFamily: "inherit",
    boxShadow: "0 4px 14px rgba(31,169,113,0.28)",
  },

  /* ── SUPPORT CTA ── */
  ctaSection: {
    position: "relative",
    background: "linear-gradient(160deg, #0B1F3A 0%, #0D2444 55%, #061529 100%)",
    padding: "96px 60px",
    overflow: "hidden",
    textAlign: "center",
  },
  ctaBlobLeft: {
    position: "absolute",
    width: "500px", height: "500px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(31,169,113,0.1) 0%, transparent 65%)",
    top: "-150px", left: "-150px",
    pointerEvents: "none",
  },
  ctaBlobRight: {
    position: "absolute",
    width: "400px", height: "400px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 65%)",
    bottom: "-100px", right: "-80px",
    pointerEvents: "none",
  },
  ctaInner: {
    maxWidth: "600px",
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  ctaIconWrap: {
    width: "64px", height: "64px",
    borderRadius: "18px",
    background: "rgba(31,169,113,0.12)",
    border: "1px solid rgba(31,169,113,0.28)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "22px",
  },
  ctaBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "11px",
    fontWeight: "700",
    color: "#1FA971",
    textTransform: "uppercase",
    letterSpacing: "2.2px",
    padding: "7px 18px",
    background: "rgba(31,169,113,0.1)",
    border: "1px solid rgba(31,169,113,0.3)",
    borderRadius: "30px",
    marginBottom: "22px",
  },
  ctaBadgeDot: {
    display: "inline-block",
    width: "7px", height: "7px",
    borderRadius: "50%",
    background: "#22C55E",
    boxShadow: "0 0 8px #22C55E, 0 0 16px #22C55E",
    flexShrink: 0,
  },
  ctaTitle: {
    fontSize: "clamp(26px, 3.5vw, 40px)",
    fontWeight: "800",
    color: "#E8F4FF",
    margin: "0 0 18px 0",
    letterSpacing: "-0.8px",
    lineHeight: "1.15",
  },
  ctaAccent: {
    background: "linear-gradient(90deg, #1FA971, #06B6D4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  ctaSub: {
    fontSize: "15.5px",
    color: "rgba(200,220,255,0.55)",
    lineHeight: "1.8",
    margin: "0 0 40px 0",
    maxWidth: "440px",
  },
  ctaBtns: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  ctaBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    background: "#1FA971",
    color: "#ffffff",
    textDecoration: "none",
    padding: "15px 36px",
    borderRadius: "50px",
    fontSize: "15px",
    fontWeight: "700",
    boxShadow: "0 6px 24px rgba(31,169,113,0.32)",
  },
  outlineBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    background: "rgba(255,255,255,0.06)",
    color: "rgba(200,220,255,0.75)",
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.15)",
    padding: "15px 36px",
    borderRadius: "50px",
    fontSize: "15px",
    fontWeight: "600",
  },
};
