const steps = [
  {
    num: "01",
    title: "Submit Inquiry",
    desc: "Share your product requirements with us.",
    img: "/images/categories/inquiry.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Supplier Matching",
    desc: "We connect you with the best suppliers.",
    img: "/images/categories/suppliermatching.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Documentation",
    desc: "We handle all paperwork and compliance.",
    img: "/images/categories/documentation.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="12" y2="17" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Shipping & Delivery",
    desc: "Products delivered safely to your destination.",
    img: "/images/categories/shipping2.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

const trustItems = [
  {
    label: "Trusted Suppliers",
    sub: "Verified & reliable partners",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    label: "Best Prices",
    sub: "Competitive & transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6" />
      </svg>
    ),
  },
  {
    label: "On-Time Delivery",
    sub: "We value your time",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: "Dedicated Support",
    sub: "We're here to help",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

/* location pin SVG */
const Pin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#1FA971" strokeWidth="1.5" width="18" height="18" opacity="0.4">
    <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

export default function HowItWorks() {
  return (
    <section style={S.section} className="hiw-section">

      {/* dot grid background */}
      <div style={S.dotGrid} aria-hidden="true" />

      {/* scattered location pins */}
      {[
        { top: "12%", left: "8%" },
        { top: "18%", right: "12%" },
        { top: "8%",  left: "42%" },
        { top: "22%", right: "30%" },
        { top: "15%", left: "68%" },
      ].map((pos, i) => (
        <div key={i} style={{ position: "absolute", ...pos, pointerEvents: "none", zIndex: 0 }}>
          <Pin />
        </div>
      ))}

      <div style={S.container}>

        {/* ── heading ── */}
        <div style={S.head}>
          <p style={S.eyebrow}>OUR PROCESS</p>
          <h2 style={S.title}>How It Works?</h2>
          <div style={S.titleUnderline} />
          <p style={S.subtitle}>
            Simple 4-step process to get your products delivered globally
          </p>
        </div>

        {/* ── steps row ── */}
        <div style={S.stepsRow}>
          {steps.map((step, i) => (
            <div key={i} style={S.stepWrapper}>

              {/* card */}
              <div className="hiw-card" style={S.card}>

                {/* image */}
                <div style={S.imgWrap}>
                  <img
                    src={step.img}
                    alt={step.title}
                    style={S.img}
                    loading="lazy"
                    onError={(e) => { e.target.src = `https://picsum.photos/seed/step${i}/400/220`; }}
                  />
                  {/* number badge */}
                  <div style={S.numBadge}>{step.num}</div>
                </div>

                {/* text */}
                <div style={S.cardBody}>
                  <div style={S.iconCircle}>{step.icon}</div>
                  <div>
                    <h3 style={S.stepTitle}>{step.title}</h3>
                    <p style={S.stepDesc}>{step.desc}</p>
                  </div>
                </div>

              </div>

              {/* arrow between cards */}
              {i < steps.length - 1 && (
                <div style={S.arrowWrap}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#1FA971" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* ── trust bar ── */}
        <div style={S.trustBar}>
          {trustItems.map((t, i) => (
            <div key={i} style={S.trustItem}>
              <div style={S.trustIcon}>{t.icon}</div>
              <div>
                <p style={S.trustLabel}>{t.label}</p>
                <p style={S.trustSub}>{t.sub}</p>
              </div>
              {i < trustItems.length - 1 && <span style={S.trustDiv} />}
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .hiw-card {
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }
        .hiw-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(11,31,58,0.12) !important;
        }
        .hiw-card:hover img {
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .hiw-section { padding: 52px 20px !important; }
        }
        @media (max-width: 480px) {
          .hiw-section { padding: 40px 16px !important; }
        }
      `}</style>
    </section>
  );
}

const S = {
  section: {
    position: "relative",
    background: "linear-gradient(160deg, #f0faf5 0%, #ffffff 50%, #f0faf5 100%)",
    padding: "60px 60px",
    overflow: "hidden",
  },

  dotGrid: {
    position: "absolute",
    inset: 0,
    backgroundImage: "radial-gradient(circle, rgba(31,169,113,0.18) 1px, transparent 1px)",
    backgroundSize: "32px 32px",
    pointerEvents: "none",
    zIndex: 0,
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
  },

  /* heading */
  head: {
    textAlign: "center",
    marginBottom: "52px",
  },

  eyebrow: {
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "3px",
    color: "#1FA971",
    textTransform: "uppercase",
    margin: "0 0 12px",
  },

  title: {
    fontSize: "clamp(28px, 3.5vw, 42px)",
    fontWeight: "800",
    color: "#0B1F3A",
    margin: "0 0 10px",
    letterSpacing: "-0.5px",
  },

  titleUnderline: {
    width: "48px",
    height: "4px",
    background: "#1FA971",
    borderRadius: "4px",
    margin: "0 auto 16px",
  },

  subtitle: {
    fontSize: "15px",
    color: "rgba(11,31,58,0.5)",
    margin: "0",
    lineHeight: "1.6",
  },

  /* steps */
  stepsRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0",
    marginBottom: "48px",
  },

  stepWrapper: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },

  card: {
    flex: 1,
    background: "#ffffff",
    borderRadius: "14px",
    overflow: "hidden",
    border: "1px solid #E8F5EE",
    boxShadow: "0 4px 20px rgba(11,31,58,0.07)",
    cursor: "default",
  },

  imgWrap: {
    position: "relative",
    height: "180px",
    overflow: "hidden",
  },

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.4s ease",
  },

  numBadge: {
    position: "absolute",
    top: "12px",
    left: "12px",
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    background: "#1FA971",
    color: "#ffffff",
    fontSize: "13px",
    fontWeight: "800",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 12px rgba(31,169,113,0.4)",
  },

  cardBody: {
    padding: "18px 16px",
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
  },

  iconCircle: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "#EEF9F4",
    border: "1px solid rgba(31,169,113,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#1FA971",
    flexShrink: 0,
  },

  stepTitle: {
    fontSize: "15px",
    fontWeight: "700",
    color: "#0B1F3A",
    margin: "0 0 4px",
    letterSpacing: "-0.1px",
  },

  stepDesc: {
    fontSize: "12.5px",
    color: "rgba(11,31,58,0.5)",
    lineHeight: "1.6",
    margin: "0",
  },

  arrowWrap: {
    flexShrink: 0,
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    background: "#EEF9F4",
    border: "1px solid rgba(31,169,113,0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 -2px",
    marginTop: "-60px",
    zIndex: 2,
    position: "relative",
  },

  /* trust bar */
  trustBar: {
    display: "flex",
    alignItems: "center",
    background: "#ffffff",
    borderRadius: "14px",
    border: "1px solid #E8F5EE",
    boxShadow: "0 2px 16px rgba(11,31,58,0.06)",
    padding: "0",
    overflow: "hidden",
  },

  trustItem: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "22px 24px",
    position: "relative",
  },

  trustIcon: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    background: "#EEF9F4",
    border: "1px solid rgba(31,169,113,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#1FA971",
    flexShrink: 0,
  },

  trustLabel: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#0B1F3A",
    margin: "0 0 2px",
  },

  trustSub: {
    fontSize: "12px",
    color: "rgba(11,31,58,0.45)",
    margin: "0",
    fontWeight: "500",
  },

  trustDiv: {
    position: "absolute",
    right: 0,
    top: "15%",
    height: "70%",
    width: "1px",
    background: "#E8F5EE",
  },
};
