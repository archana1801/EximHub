const reviews = [
  {
    quote:
      "ImportWiz helped us source the right products with complete documentation support. Highly professional and reliable team.",
    name: "Michael Johnson",
    company: "Global Trade Ltd.",
    role: "Head of Procurement",
    country: "USA",
    flag: "🇺🇸",
    initials: "MJ",
    accent: "#1FA971",
  },
  {
    quote:
      "Their logistics and customs support is excellent. Our shipments always arrive on time without any issues.",
    name: "Ahmad Al Mansouri",
    company: "Al Mansouri Imports",
    role: "Founder & CEO",
    country: "UAE",
    flag: "🇦🇪",
    initials: "AA",
    accent: "#0891b2",
  },
  {
    quote:
      "Great experience working with ImportWiz. Transparent pricing and genuine suppliers. Highly recommended!",
    name: "Sarah Thompson",
    company: "EuroAgri GmbH",
    role: "Operations Director",
    country: "UK",
    flag: "🇬🇧",
    initials: "ST",
    accent: "#7C3AED",
  },
];

const QuoteIcon = () => (
  <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M0 24V14.4C0 10.56 1.04 7.36 3.12 4.8C5.28 2.16 8.32 0.56 12.24 0L13.44 2.16C11.04 2.72 9.12 3.84 7.68 5.52C6.32 7.12 5.64 8.96 5.64 11.04H10.08V24H0ZM18.56 24V14.4C18.56 10.56 19.6 7.36 21.68 4.8C23.84 2.16 26.88 0.56 30.8 0L32 2.16C29.6 2.72 27.68 3.84 26.24 5.52C24.88 7.12 24.2 8.96 24.2 11.04H28.64V24H18.56Z"
      fill="currentColor"
    />
  </svg>
);

const StarRow = () => (
  <div style={{ display: "flex", gap: "3px" }}>
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section style={S.section} className="tm-section">

      {/* subtle bg blobs */}
      <div style={S.blobLeft}  aria-hidden="true" />
      <div style={S.blobRight} aria-hidden="true" />

      <div style={S.container}>

        {/* heading block */}
        <div style={S.headingBlock}>
          <span style={S.badge}>
            <span style={S.badgeDot} />
            Client Stories
          </span>
          <h2 style={S.heading}>What Our Importers Say</h2>
          <p style={S.subtext}>
            Businesses across multiple countries rely on our sourcing and logistics expertise.
          </p>
        </div>

        {/* card grid */}
        <div className="tm-grid">
          {reviews.map((r, i) => (
            <div key={i} className="tm-card" style={S.card}>

              {/* quote icon + stars */}
              <div style={S.cardTop}>
                <span style={{ color: r.accent, opacity: 0.25 }}>
                  <QuoteIcon />
                </span>
                <StarRow />
              </div>

              {/* testimonial text */}
              <p style={S.quoteText}>"{r.quote}"</p>

              {/* divider */}
              <div style={{ ...S.divider, background: `linear-gradient(90deg, ${r.accent}33, transparent)` }} />

              {/* author row */}
              <div style={S.authorRow}>
                <div style={{ ...S.avatar, background: `linear-gradient(135deg, ${r.accent}22, ${r.accent}44)`, border: `1.5px solid ${r.accent}44`, color: r.accent }}>
                  {r.initials}
                </div>
                <div style={S.authorInfo}>
                  <p style={S.authorName}>{r.name}</p>
                  <p style={S.authorRole}>{r.role}</p>
                  <p style={S.authorCompany}>{r.company}</p>
                </div>
                <div style={S.countryTag}>
                  <span style={S.flagEmoji}>{r.flag}</span>
                  <span style={S.countryName}>{r.country}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* bottom trust bar */}
        <div style={S.trustRow}>
          <span style={S.trustStat}><strong style={S.statNum}>500+</strong> Importers</span>
          <span style={S.trustDivider} />
          <span style={S.trustStat}><strong style={S.statNum}>40+</strong> Countries</span>
          <span style={S.trustDivider} />
          <span style={S.trustStat}><strong style={S.statNum}>98%</strong> On-Time Delivery</span>
          <span style={S.trustDivider} />
          <span style={S.trustStat}><strong style={S.statNum}>4.9★</strong> Avg. Rating</span>
        </div>
      </div>

      <style>{`
        .tm-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }
        .tm-card {
          transition: transform 0.3s cubic-bezier(.22,.68,0,1.2), box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .tm-card:hover {
          transform: translateY(-7px);
          border-color: rgba(31,169,113,0.45) !important;
          box-shadow: 0 20px 56px rgba(10,20,40,0.13), 0 4px 12px rgba(10,20,40,0.07), 0 0 0 1px rgba(31,169,113,0.2) !important;
        }
        @media (max-width: 960px) {
          .tm-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }
        @media (max-width: 580px) {
          .tm-grid { grid-template-columns: 1fr; gap: 16px; }
          .tm-section { padding: 52px 20px !important; }
        }
        @media (max-width: 480px) {
          .tm-section { padding: 40px 16px !important; }
        }
      `}</style>
    </section>
  );
}

const S = {
  section: {
    position: "relative",
    background: "linear-gradient(160deg, #F5F7FA 0%, #F8FAFB 50%, #F2F5F9 100%)",
    padding: "60px 60px",
    overflow: "hidden",
  },

  blobLeft: {
    position: "absolute",
    width: "420px", height: "420px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(31,169,113,0.06) 0%, transparent 65%)",
    top: "-80px", left: "-120px",
    pointerEvents: "none",
  },
  blobRight: {
    position: "absolute",
    width: "360px", height: "360px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 65%)",
    bottom: "-80px", right: "-80px",
    pointerEvents: "none",
  },

  container: {
    maxWidth: "1160px",
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
  },

  headingBlock: {
    textAlign: "center",
    marginBottom: "60px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0",
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
    marginBottom: "22px",
  },

  badgeDot: {
    display: "inline-block",
    width: "7px", height: "7px",
    borderRadius: "50%",
    background: "#1FA971",
    boxShadow: "0 0 7px #1FA971",
    flexShrink: 0,
  },

  heading: {
    fontSize: "clamp(28px, 3.6vw, 46px)",
    fontWeight: "800",
    color: "#0D1B2A",
    margin: "0 0 16px 0",
    letterSpacing: "-0.8px",
    lineHeight: "1.12",
  },

  subtext: {
    fontSize: "16px",
    color: "rgba(13,27,42,0.52)",
    lineHeight: "1.8",
    maxWidth: "500px",
    margin: "0",
  },

  /* card */
  card: {
    background: "#ffffff",
    borderRadius: "16px",
    border: "1.5px solid rgba(31,169,113,0.15)",
    padding: "30px 26px 26px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    cursor: "default",
    boxShadow: "0 4px 24px rgba(13,27,42,0.07), 0 1px 4px rgba(13,27,42,0.04)",
  },

  cardTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  quoteText: {
    fontSize: "14.5px",
    color: "rgba(13,27,42,0.68)",
    lineHeight: "1.8",
    margin: "0",
    fontStyle: "italic",
    flexGrow: 1,
  },

  divider: {
    height: "1px",
    borderRadius: "1px",
  },

  authorRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  avatar: {
    width: "42px", height: "42px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    fontWeight: "800",
    letterSpacing: "-0.3px",
    flexShrink: 0,
  },

  authorInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "1px",
    flexGrow: 1,
    minWidth: 0,
  },

  authorName: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#0D1B2A",
    margin: "0",
    letterSpacing: "-0.1px",
  },

  authorRole: {
    fontSize: "11.5px",
    color: "rgba(13,27,42,0.45)",
    margin: "0",
    fontWeight: "500",
  },

  authorCompany: {
    fontSize: "12px",
    color: "rgba(13,27,42,0.55)",
    margin: "0",
    fontWeight: "600",
  },

  countryTag: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "3px",
    flexShrink: 0,
  },

  flagEmoji: {
    fontSize: "20px",
    lineHeight: 1,
  },

  countryName: {
    fontSize: "10px",
    fontWeight: "700",
    color: "rgba(13,27,42,0.35)",
    textTransform: "uppercase",
    letterSpacing: "0.8px",
  },

  /* bottom stats row */
  trustRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "28px",
    marginTop: "64px",
    padding: "24px 40px",
    background: "#ffffff",
    borderRadius: "16px",
    border: "1px solid rgba(13,27,42,0.07)",
    boxShadow: "0 2px 16px rgba(13,27,42,0.05)",
    flexWrap: "wrap",
  },

  trustStat: {
    fontSize: "14px",
    color: "rgba(13,27,42,0.55)",
    fontWeight: "500",
    whiteSpace: "nowrap",
  },

  statNum: {
    color: "#0D1B2A",
    fontWeight: "800",
    marginRight: "4px",
  },

  trustDivider: {
    display: "inline-block",
    width: "1px",
    height: "20px",
    background: "rgba(13,27,42,0.12)",
    flexShrink: 0,
  },
};
