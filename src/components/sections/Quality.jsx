const features = [
  {
    color: "#1FA971",
    bg: "#EEF9F4",
    title: "Verified Suppliers",
    desc: "We work with trusted manufacturers and export-ready suppliers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    color: "#3B82F6",
    bg: "#EFF6FF",
    title: "Documentation Support",
    desc: "Complete import/export documentation and compliance assistance.",
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
    color: "#F59E0B",
    bg: "#FFFBEB",
    title: "Competitive Pricing",
    desc: "Get the best prices with transparent and fair deals.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6" />
      </svg>
    ),
  },
  {
    color: "#8B5CF6",
    bg: "#F5F3FF",
    title: "Quality Assurance",
    desc: "Strict quality checks to ensure international standards.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <polyline points="9 11 11 13 15 9" />
      </svg>
    ),
  },
  {
    color: "#06B6D4",
    bg: "#ECFEFF",
    title: "Timely Delivery",
    desc: "On-time delivery with reliable logistics partners.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    color: "#10B981",
    bg: "#ECFDF5",
    title: "End-to-End Support",
    desc: "From sourcing to delivery, we handle everything.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

export default function Quality() {
  return (
    <section style={S.section}>
      <div style={S.container}>

        {/* left: heading */}
        <div style={S.left}>
          <h2 style={S.title}>
            Why Importers<br />
            <span style={S.titleGreen}>Choose Us?</span>
          </h2>
          <p style={S.subtitle}>
            End-to-end support, verified suppliers, and seamless global trade you can rely on.
          </p>
        </div>

        {/* right: 3×2 feature grid */}
        <div className="wc-grid">
          {features.map((f, i) => (
            <div key={i} className="wc-item" style={S.item}>
              <div style={{ ...S.iconWrap, background: f.bg, color: f.color }}>
                {f.icon}
              </div>
              <div style={S.itemText}>
                <h3 style={S.itemTitle}>{f.title}</h3>
                <p style={S.itemDesc}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .wc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px 28px;
          flex: 1;
        }
        .wc-item {
          transition: transform 0.25s ease, border-color 0.25s ease,
                      box-shadow 0.25s ease, background 0.25s ease;
          border: 1.5px solid rgba(31,169,113,0.18);
          border-radius: 10px;
          padding: 10px 12px;
          margin: -10px -12px;
          background: rgba(31,169,113,0.02);
        }
        .wc-item:hover {
          transform: translateY(-3px);
          border-color: #1FA971 !important;
          background: #F0FDF4 !important;
          box-shadow: 0 6px 20px rgba(31,169,113,0.15) !important;
        }
        @media (max-width: 960px) {
          .wc-layout { flex-direction: column !important; }
          .wc-left   { max-width: 100% !important; }
          .wc-grid   { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 600px) {
          .wc-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  );
}

const S = {
  section: {
    background: "#ffffff",
    padding: "60px 60px",
    borderTop: "1px solid #F0F2F5",
    borderBottom: "1px solid #F0F2F5",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "flex-start",
    gap: "64px",
  },

  left: {
    flexShrink: 0,
    width: "240px",
    paddingTop: "4px",
  },

  title: {
    fontSize: "clamp(22px, 2.5vw, 30px)",
    fontWeight: "800",
    color: "#0B1F3A",
    margin: "0 0 14px",
    letterSpacing: "-0.4px",
    lineHeight: "1.2",
  },

  titleGreen: {
    color: "#1FA971",
  },

  subtitle: {
    fontSize: "14px",
    color: "rgba(11,31,58,0.52)",
    lineHeight: "1.75",
    margin: "0",
  },

  item: {
    display: "flex",
    alignItems: "flex-start",
    gap: "14px",
  },

  iconWrap: {
    width: "42px",
    height: "42px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  itemText: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },

  itemTitle: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#0B1F3A",
    margin: "0",
    letterSpacing: "-0.1px",
  },

  itemDesc: {
    fontSize: "13px",
    color: "rgba(11,31,58,0.5)",
    lineHeight: "1.65",
    margin: "0",
  },
};
