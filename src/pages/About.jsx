import { Link } from "react-router-dom";

// ── Data ────────────────────────────────────────────────────────────────────

const whyCards = [
  {
    color: "#1FA971", bg: "rgba(31,169,113,0.08)", border: "rgba(31,169,113,0.22)",
    title: "Verified Suppliers",
    desc: "Every supplier in our network undergoes strict vetting — factory audits, compliance checks, and sample approvals before onboarding.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"/><polyline points="9 12 11 14 15 10"/></svg>,
  },
  {
    color: "#0891b2", bg: "rgba(8,145,178,0.08)", border: "rgba(8,145,178,0.22)",
    title: "Quality Assurance",
    desc: "Third-party pre-shipment inspections on every consignment ensure product specifications are met before goods leave the warehouse.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><polyline points="9 11 11 13 15 9"/></svg>,
  },
  {
    color: "#7C3AED", bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.22)",
    title: "Global Reach",
    desc: "We serve importers across 40+ countries with established logistics networks across Asia, Europe, the Middle East, and the Americas.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  },
  {
    color: "#D97706", bg: "rgba(217,119,6,0.08)", border: "rgba(217,119,6,0.22)",
    title: "End-to-End Support",
    desc: "From product discovery to customs clearance and last-mile delivery — we manage the entire supply chain so you can focus on your business.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  },
];

const stats = [
  { num: "2018",  label: "Founded" },
  { num: "500+",  label: "Active Importers" },
  { num: "40+",   label: "Countries Served" },
  { num: "1,200+", label: "Verified Suppliers" },
];

const steps = [
  {
    num: "01", color: "#1FA971",
    title: "Share Requirements",
    desc: "Tell us what you need — product specs, quantity, target price, and destination. We handle the rest.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  },
  {
    num: "02", color: "#0891b2",
    title: "Supplier Matching",
    desc: "We shortlist verified manufacturers from our network and present you with the best options.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    num: "03", color: "#7C3AED",
    title: "Quality Inspection",
    desc: "Pre-shipment inspection by third-party auditors confirms product quality before it leaves the factory.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  },
  {
    num: "04", color: "#D97706",
    title: "Shipping & Delivery",
    desc: "We manage documentation, customs, and freight so your goods arrive on time and in full compliance.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  },
];


const values = [
  { title: "Transparency", desc: "Clear pricing, honest timelines, and no hidden fees — always.", color: "#1FA971" },
  { title: "Reliability",  desc: "Consistent quality and on-time delivery you can build a business on.", color: "#0891b2" },
  { title: "Compliance",   desc: "Every shipment meets the legal and regulatory requirements of its destination.", color: "#7C3AED" },
];

// ── Component ────────────────────────────────────────────────────────────────
export default function About() {
  return (
    <main style={{ width: "100%" }}>

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="ab-hero" style={{ background: '#0B1F3A', position: 'relative', overflow: 'hidden', color: '#fff' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '22px 22px', pointerEvents: 'none' }} />
        <div className="ab-img-wrap" style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '52%', zIndex: 0 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #0B1F3A 0%, rgba(11,31,58,0.55) 35%, transparent 70%)', zIndex: 1 }} />
          <img src="/images/categories/about.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div className="ab-hero-content" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 60px', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '520px', padding: '52px 0 40px' }}>
            <h1 style={{ fontSize: 'clamp(22px, 2.6vw, 38px)', fontWeight: '800', lineHeight: '1.18', margin: '0 0 14px', letterSpacing: '-0.3px', color: '#fff' }}>
              About<br />
              <span style={{ color: '#1FA971' }}>ImportWiz</span>
            </h1>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.62)', margin: '0 0 32px', lineHeight: '1.75', maxWidth: '400px' }}>
              Your trusted partner in global sourcing and export solutions — connecting importers with reliable suppliers since 2018.
            </p>
            <div className="ab-hero-stats" style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
              {[
                { value: '2018', label: 'Founded', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1FA971" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
                { value: '1,200+', label: 'Verified Suppliers', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1FA971" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
                { value: '40+', label: 'Countries Served', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1FA971" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
              ].map(s => (
                <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', flexShrink: 0, background: 'rgba(31,169,113,0.12)', border: '1px solid rgba(31,169,113,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {s.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '17px', fontWeight: '800', color: '#fff', lineHeight: '1.1' }}>{s.value}</div>
                    <div style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.6px', marginTop: '1px' }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. STATS TICKER ─────────────────────────────────────── */}
      <div style={S.statsTicker}>
        <div style={S.statsTickerInner} className="ab-stats-inner">
          {stats.map((s, i) => (
            <div key={i} style={S.tickerItem}>
              <span style={S.tickerNum}>{s.num}</span>
              <span style={S.tickerLabel}>{s.label}</span>
              {i < stats.length - 1 && <span style={S.tickerDiv} />}
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. OUR STORY ────────────────────────────────────────── */}
      <section style={S.overview}>
        <div style={S.container} className="ab-container">
          <div style={S.overviewGrid} className="ab-overview-grid">

            <div style={S.overviewLeft}>
              <p style={S.sectionLabel}>Our Story</p>
              <h2 style={S.overviewTitle}>
                Simplifying Global Trade,<br />
                <span style={{ color: "#1FA971" }}>One Shipment at a Time</span>
              </h2>
              <p style={S.overviewBody}>
                ImportWiz was founded with a single goal: make international sourcing accessible, transparent, and reliable for importers of every size. We bridge the gap between global buyers and verified manufacturers across India and South Asia.
              </p>
              <p style={S.overviewBody}>
                We manage the full procurement cycle — from supplier discovery and sample approval to quality inspection, documentation, and door-to-door logistics. Whether you're importing spices, textiles, industrial components, or consumer goods, our team handles the complexity so you don't have to.
              </p>
              <div style={S.overviewTags}>
                {["ISO Certified", "APEDA Registered", "DGFT Licensed", "Export Compliant"].map(t => (
                  <span key={t} style={S.tag}>{t}</span>
                ))}
              </div>
            </div>

            {/* Visual card */}
            <div style={S.storyCard} className="ab-story-card">
              <div style={S.storyCardTop}>
                <div style={S.storyYear}>Est. 2018</div>
                <p style={{ margin: 0, fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: "1.7" }}>
                  Started as a small sourcing desk. Today we're a full-service global trade partner operating in 40+ countries.
                </p>
              </div>
              <div style={S.storyCardBottom}>
                {[
                  { label: "Categories", val: "14+" },
                  { label: "Products",   val: "500+" },
                  { label: "Suppliers",  val: "1,200+" },
                  { label: "Countries",  val: "40+" },
                ].map(item => (
                  <div key={item.label} style={S.storyMetric}>
                    <span style={S.storyMetricVal}>{item.val}</span>
                    <span style={S.storyMetricLabel}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. HOW WE WORK ──────────────────────────────────────── */}
      <section style={S.processSection}>
        <div style={S.container} className="ab-container">
          <div style={S.sectionHead}>
            <p style={S.sectionLabel}>Our Process</p>
            <h2 style={S.sectionTitle}>How We Work</h2>
            <p style={S.sectionSub}>
              A simple, proven four-step process that takes you from requirement to delivery.
            </p>
          </div>

          <div className="ab-steps-grid">
            {steps.map((step, i) => (
              <div key={i} style={S.stepCard}>
                {/* Connector line */}
                {i < steps.length - 1 && <div className="ab-step-connector" style={{ background: `linear-gradient(to right, ${step.color}, ${steps[i+1].color})` }} />}

                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                  <div style={{ ...S.stepIconBox, background: `${step.color}18`, border: `1px solid ${step.color}35`, color: step.color }}>
                    {step.icon}
                  </div>
                  <span style={{ ...S.stepNum, color: step.color }}>{step.num}</span>
                </div>
                <h3 style={{ ...S.stepTitle, color: step.color }}>{step.title}</h3>
                <p style={S.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHY CHOOSE US ────────────────────────────────────── */}
      <section style={S.whySection}>
        <div style={S.container} className="ab-container">
          <div style={S.sectionHead}>
            <p style={S.sectionLabel}>Why ImportWiz</p>
            <h2 style={S.sectionTitle}>Why Clients Choose Us</h2>
            <p style={S.sectionSub}>Importers across 40+ countries rely on us for one reason — we deliver on our promises.</p>
          </div>
          <div className="ab-why-grid">
            {whyCards.map((c, i) => (
              <div key={i} className="ab-card" style={S.whyCard}>
                <div style={{ ...S.whyIconBox, background: c.bg, border: `1px solid ${c.border}`, color: c.color }}>
                  {c.icon}
                </div>
                <h3 style={{ ...S.whyTitle, color: c.color }}>{c.title}</h3>
                <p style={S.whyDesc}>{c.desc}</p>
                <div style={{ height: "2px", width: "38%", borderRadius: "2px", background: `linear-gradient(90deg, ${c.color}, transparent)` }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. MISSION + VALUES ─────────────────────────────────── */}
      <section style={S.missionSection}>
        <div style={S.missionBlobLeft} />
        <div style={S.missionBlobRight} />
        <div style={S.container} className="ab-container">
          <div style={S.missionGrid} className="ab-mission-grid">

            <div style={S.missionLeft}>
              <span style={S.sectionLabel}>Our Mission</span>
              <h2 style={S.missionTitle}>
                "To simplify global trade and provide reliable sourcing solutions to businesses worldwide."
              </h2>
              <p style={S.missionBody}>
                We believe every business, regardless of size, deserves access to quality global suppliers, fair pricing, and a logistics partner that takes accountability seriously.
              </p>
            </div>

            <div style={{ flex: "0 0 360px", display: "flex", flexDirection: "column" }} className="ab-mission-right">
              {values.map((v, i) => (
                <div key={i} style={{ ...S.valueItem, borderBottom: i < values.length - 1 ? "1px solid rgba(13,27,42,0.07)" : "none" }}>
                  <div style={{ width: "4px", height: "44px", borderRadius: "4px", flexShrink: 0, marginTop: "2px", background: v.color }} />
                  <div>
                    <p style={{ fontSize: "15px", fontWeight: "700", margin: "0 0 5px", color: v.color }}>{v.title}</p>
                    <p style={{ fontSize: "13.5px", color: "rgba(13,27,42,0.52)", lineHeight: "1.65", margin: 0 }}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* ── 8. CTA ──────────────────────────────────────────────── */}
      <section style={S.ctaSection} className="ab-cta-section">
        <div style={S.ctaBlobLeft} />
        <div style={S.ctaBlobRight} />
        <div style={S.ctaInner}>
          <span style={S.ctaBadge}>
            <span style={S.ctaBadgeDot} />
            Get In Touch
          </span>
          <h2 style={S.ctaTitle}>
            Let's Build Your <span style={S.ctaAccent}>Supply Chain</span>
          </h2>
          <p style={S.ctaSub}>
            Tell us what you need. Our sourcing team will connect you with the right suppliers and handle the rest.
          </p>
          <div style={S.ctaBtns}>
            <Link to="/request-quote" style={S.ctaBtn} className="ab-cta-btn">
              Request a Quote
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
            <Link to="/certifications" style={S.outlineBtn} className="ab-outline-btn">
              View Certifications
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .ab-why-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 24px; }
        .ab-steps-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 0; position: relative; }
        .ab-step-connector {
          position: absolute; top: 31px; left: calc(25% - 0px); width: 25%;
          height: 2px; z-index: 0;
        }
        .ab-card { transition: transform 0.3s cubic-bezier(.22,.68,0,1.2), box-shadow 0.3s ease; }
        .ab-card:hover { transform: translateY(-7px); box-shadow: 0 20px 48px rgba(13,27,42,0.11) !important; }

        .ab-cta-btn { transition: background 0.22s, box-shadow 0.22s, transform 0.22s; }
        .ab-cta-btn:hover { background: #178a5e !important; box-shadow: 0 10px 32px rgba(31,169,113,0.4) !important; transform: translateY(-2px); }

        .ab-outline-btn { transition: background 0.22s, color 0.22s; }
        .ab-outline-btn:hover { background: rgba(255,255,255,0.1) !important; color: #fff !important; }

        @media (max-width: 1024px) {
          .ab-why-grid   { grid-template-columns: repeat(2,1fr); }
          .ab-steps-grid { grid-template-columns: repeat(2,1fr); }
          .ab-step-connector { display: none; }
          .ab-container { padding: 0 32px !important; }
        }
        @media (max-width: 768px) {
          .ab-img-wrap { display: none !important; }
          .ab-hero-content { padding: 0 20px !important; }
          .ab-hero-content > div { padding: 36px 0 28px !important; max-width: 100% !important; }
          .ab-hero-stats { gap: 16px !important; }
          .ab-container { padding: 0 20px !important; }
          .ab-stats-inner { padding: 0 20px !important; flex-wrap: wrap !important; gap: 0 !important; }
          .ab-overview-grid { flex-direction: column !important; gap: 32px !important; }
          .ab-story-card { width: 100% !important; }
          .ab-mission-grid { flex-direction: column !important; gap: 32px !important; }
          .ab-mission-right { flex: none !important; width: 100% !important; }
          .ab-cta-section { padding: 60px 20px !important; }
        }
        @media (max-width: 600px) {
          .ab-why-grid  { grid-template-columns: 1fr; }
          .ab-steps-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .ab-hero-content { padding: 0 16px !important; }
          .ab-container { padding: 0 16px !important; }
          .ab-cta-section { padding: 48px 16px !important; }
        }
      `}</style>
    </main>
  );
}

// ── Styles ───────────────────────────────────────────────────────────────────
const S = {

  /* ── HERO ── */
  hero: {
    position: "relative",
    background: "linear-gradient(160deg, #F8FAFB 0%, #F0FAF5 55%, #F5F7FA 100%)",
    padding: "80px 60px 72px",
    overflow: "hidden",
    borderBottom: "1px solid rgba(13,27,42,0.07)",
  },
  heroBlobLeft: {
    position: "absolute", width: "480px", height: "480px", borderRadius: "50%",
    background: "radial-gradient(circle, rgba(31,169,113,0.08) 0%, transparent 65%)",
    top: "-140px", left: "-140px", pointerEvents: "none",
  },
  heroBlobRight: {
    position: "absolute", width: "380px", height: "380px", borderRadius: "50%",
    background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 65%)",
    bottom: "-80px", right: "-80px", pointerEvents: "none",
  },
  heroInner: {
    maxWidth: "1160px", margin: "0 auto", position: "relative", zIndex: 1,
    display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0",
  },
  heroLeft: { flex: "0 0 520px", maxWidth: "520px", paddingRight: "20px", zIndex: 2 },
  heroRight: { flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-start", marginLeft: "-40px" },
  heroImg: {
    width: "680px", height: "auto", maxHeight: "480px", objectFit: "contain", display: "block",
    maskImage: "linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
    WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
  },
  badge: {
    display: "inline-flex", alignItems: "center", gap: "8px",
    fontSize: "11px", fontWeight: "700", color: "#1FA971",
    textTransform: "uppercase", letterSpacing: "2.2px",
    padding: "7px 18px", background: "rgba(31,169,113,0.08)",
    border: "1px solid rgba(31,169,113,0.28)", borderRadius: "30px", marginBottom: "24px",
  },
  badgeDot: {
    display: "inline-block", width: "7px", height: "7px", borderRadius: "50%",
    background: "#1FA971", boxShadow: "0 0 7px #1FA971", flexShrink: 0,
  },
  heroTitle: {
    fontSize: "clamp(30px, 3.8vw, 50px)", fontWeight: "800", color: "#0D1B2A",
    margin: "0 0 18px", letterSpacing: "-1px", lineHeight: "1.1",
  },
  heroSub: {
    fontSize: "16px", color: "rgba(13,27,42,0.55)", lineHeight: "1.8",
    maxWidth: "480px", margin: "0 0 28px",
  },

  /* ── STATS TICKER ── */
  statsTicker: {
    background: "#0B1F3A",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  statsTickerInner: {
    maxWidth: "1160px", margin: "0 auto", padding: "0 60px",
    display: "flex", alignItems: "center",
  },
  tickerItem: {
    flex: 1, display: "flex", alignItems: "center", gap: "14px",
    padding: "24px 0", position: "relative",
  },
  tickerNum: {
    fontSize: "28px", fontWeight: "800", color: "#fff", letterSpacing: "-1px", lineHeight: 1,
  },
  tickerLabel: {
    fontSize: "12px", color: "rgba(255,255,255,0.45)", textTransform: "uppercase",
    letterSpacing: "0.8px", fontWeight: "600",
  },
  tickerDiv: {
    position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)",
    width: "1px", height: "32px", background: "rgba(255,255,255,0.1)",
  },

  /* ── SHARED ── */
  container: { maxWidth: "1160px", margin: "0 auto", padding: "0 60px" },
  sectionHead: { textAlign: "center", marginBottom: "52px" },
  sectionLabel: {
    fontSize: "11px", fontWeight: "700", color: "#1FA971",
    textTransform: "uppercase", letterSpacing: "2px", margin: "0 0 14px",
  },
  sectionTitle: {
    fontSize: "clamp(24px, 3vw, 36px)", fontWeight: "800", color: "#0D1B2A",
    margin: "0 0 14px", letterSpacing: "-0.5px",
  },
  sectionSub: {
    fontSize: "15.5px", color: "rgba(13,27,42,0.52)", lineHeight: "1.8",
    maxWidth: "500px", margin: "0 auto",
  },

  /* ── OVERVIEW ── */
  overview: { padding: "96px 0", background: "#fff" },
  overviewGrid: { display: "flex", alignItems: "flex-start", gap: "64px" },
  overviewLeft: { flex: "1 1 0", minWidth: 0 },
  overviewTitle: {
    fontSize: "clamp(22px, 2.8vw, 34px)", fontWeight: "800", color: "#0D1B2A",
    margin: "0 0 22px", letterSpacing: "-0.5px", lineHeight: "1.2",
  },
  overviewBody: {
    fontSize: "15px", color: "rgba(13,27,42,0.58)", lineHeight: "1.85", margin: "0 0 16px",
  },
  overviewTags: { display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "28px" },
  tag: {
    fontSize: "12px", fontWeight: "600", color: "#1FA971",
    background: "rgba(31,169,113,0.08)", border: "1px solid rgba(31,169,113,0.25)",
    padding: "5px 14px", borderRadius: "20px",
  },

  /* Story card (replaces the old plain stats card) */
  storyCard: {
    flexShrink: 0, width: "280px", borderRadius: "20px", overflow: "hidden",
    boxShadow: "0 8px 32px rgba(13,27,42,0.1)",
  },
  storyCardTop: {
    background: "linear-gradient(135deg, #0B1F3A 0%, #0f3460 100%)",
    padding: "28px 24px",
  },
  storyYear: {
    fontSize: "11px", fontWeight: "700", color: "#1FA971",
    textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px",
  },
  storyCardBottom: {
    display: "grid", gridTemplateColumns: "1fr 1fr",
    background: "#F8FAFB", borderTop: "1px solid rgba(13,27,42,0.07)",
  },
  storyMetric: {
    display: "flex", flexDirection: "column", gap: "3px",
    padding: "20px 18px", borderRight: "1px solid rgba(13,27,42,0.07)",
    borderBottom: "1px solid rgba(13,27,42,0.07)",
  },
  storyMetricVal: { fontSize: "22px", fontWeight: "800", color: "#0D1B2A", lineHeight: 1 },
  storyMetricLabel: { fontSize: "11px", color: "rgba(13,27,42,0.4)", textTransform: "uppercase", letterSpacing: "0.5px", fontWeight: "600" },

  /* ── PROCESS ── */
  processSection: {
    padding: "96px 0",
    background: "linear-gradient(160deg, #F8FAFB 0%, #F0FAF5 60%, #F8FAFB 100%)",
  },
  stepCard: {
    background: "#fff", border: "1px solid rgba(13,27,42,0.08)", borderRadius: "16px",
    padding: "28px 24px", margin: "0 8px", position: "relative", zIndex: 1,
    boxShadow: "0 4px 20px rgba(13,27,42,0.05)",
  },
  stepIconBox: {
    width: "46px", height: "46px", borderRadius: "12px",
    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
  },
  stepNum: { fontSize: "28px", fontWeight: "800", letterSpacing: "-1px", lineHeight: 1 },
  stepTitle: { fontSize: "15px", fontWeight: "700", margin: "0 0 10px", letterSpacing: "-0.1px" },
  stepDesc: { fontSize: "13.5px", color: "rgba(13,27,42,0.52)", lineHeight: "1.75", margin: 0 },

  /* ── WHY CHOOSE US ── */
  whySection: { padding: "96px 0", background: "#fff" },
  whyCard: {
    background: "#fff", border: "1px solid rgba(13,27,42,0.08)", borderRadius: "16px",
    padding: "28px 22px 22px", display: "flex", flexDirection: "column", gap: "12px",
    boxShadow: "0 4px 20px rgba(13,27,42,0.06)", overflow: "hidden",
  },
  whyIconBox: { width: "50px", height: "50px", borderRadius: "13px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  whyTitle: { fontSize: "15px", fontWeight: "700", margin: 0 },
  whyDesc: { fontSize: "13.5px", color: "rgba(13,27,42,0.52)", lineHeight: "1.75", margin: 0, flexGrow: 1 },

  /* ── MISSION ── */
  missionSection: {
    position: "relative", padding: "96px 0", background: "#F8FAFB", overflow: "hidden",
  },
  missionBlobLeft: {
    position: "absolute", width: "400px", height: "400px", borderRadius: "50%",
    background: "radial-gradient(circle, rgba(31,169,113,0.06) 0%, transparent 65%)",
    top: "-100px", left: "-100px", pointerEvents: "none",
  },
  missionBlobRight: {
    position: "absolute", width: "360px", height: "360px", borderRadius: "50%",
    background: "radial-gradient(circle, rgba(8,145,178,0.05) 0%, transparent 65%)",
    bottom: "-80px", right: "-80px", pointerEvents: "none",
  },
  missionGrid: {
    display: "flex", alignItems: "flex-start", gap: "80px", position: "relative", zIndex: 1,
  },
  missionLeft: { flex: "1 1 0", minWidth: 0 },
  missionTitle: {
    fontSize: "clamp(20px, 2.6vw, 30px)", fontWeight: "700", color: "#0D1B2A",
    margin: "0 0 20px", lineHeight: "1.5", letterSpacing: "-0.3px", fontStyle: "italic",
    borderLeft: "4px solid #1FA971", paddingLeft: "24px",
  },
  missionBody: {
    fontSize: "15px", color: "rgba(13,27,42,0.55)", lineHeight: "1.85", margin: 0, paddingLeft: "28px",
  },
  valueItem: { display: "flex", alignItems: "flex-start", gap: "18px", padding: "24px 0" },

  /* ── CTA ── */
  ctaSection: {
    position: "relative",
    background: "linear-gradient(160deg, #0B1F3A 0%, #0D2444 55%, #061529 100%)",
    padding: "96px 60px", overflow: "hidden", textAlign: "center",
  },
  ctaBlobLeft: {
    position: "absolute", width: "500px", height: "500px", borderRadius: "50%",
    background: "radial-gradient(circle, rgba(31,169,113,0.1) 0%, transparent 65%)",
    top: "-150px", left: "-150px", pointerEvents: "none",
  },
  ctaBlobRight: {
    position: "absolute", width: "400px", height: "400px", borderRadius: "50%",
    background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 65%)",
    bottom: "-100px", right: "-80px", pointerEvents: "none",
  },
  ctaInner: {
    maxWidth: "640px", margin: "0 auto", position: "relative", zIndex: 1,
    display: "flex", flexDirection: "column", alignItems: "center",
  },
  ctaBadge: {
    display: "inline-flex", alignItems: "center", gap: "8px",
    fontSize: "11px", fontWeight: "700", color: "#1FA971",
    textTransform: "uppercase", letterSpacing: "2.2px",
    padding: "7px 18px", background: "rgba(31,169,113,0.1)",
    border: "1px solid rgba(31,169,113,0.3)", borderRadius: "30px", marginBottom: "24px",
  },
  ctaBadgeDot: {
    display: "inline-block", width: "7px", height: "7px", borderRadius: "50%",
    background: "#22C55E", boxShadow: "0 0 8px #22C55E, 0 0 16px #22C55E", flexShrink: 0,
  },
  ctaTitle: {
    fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: "800", color: "#E8F4FF",
    margin: "0 0 18px", letterSpacing: "-0.8px", lineHeight: "1.15",
  },
  ctaAccent: {
    background: "linear-gradient(90deg, #1FA971, #06B6D4)",
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
  },
  ctaSub: {
    fontSize: "15.5px", color: "rgba(200,220,255,0.55)", lineHeight: "1.8",
    margin: "0 0 40px", maxWidth: "460px",
  },
  ctaBtns: { display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" },
  ctaBtn: {
    display: "inline-flex", alignItems: "center", gap: "10px",
    background: "#1FA971", color: "#fff", textDecoration: "none",
    padding: "15px 36px", borderRadius: "50px", fontSize: "15px", fontWeight: "700",
    boxShadow: "0 6px 24px rgba(31,169,113,0.32)",
  },
  outlineBtn: {
    display: "inline-flex", alignItems: "center", gap: "10px",
    background: "rgba(255,255,255,0.06)", color: "rgba(200,220,255,0.75)",
    textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)",
    padding: "15px 36px", borderRadius: "50px", fontSize: "15px", fontWeight: "600",
  },
};
