import { Link } from "react-router-dom";

const certs = [
  {
    short: "ISO",
    sub: "9001:2015",
    label: "Quality Management",
    color: "#1FA971",
    underline: "#1FA971",
    img: "/images/categories/iso.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    short: "APEDA",
    sub: "Registered",
    label: "Agri Export Authority",
    color: "#16A34A",
    underline: "#16A34A",
    img: "/images/categories/apeda.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M17 8C8 10 5.9 16.17 3.82 19.82A9.08 9.08 0 0 0 12 22c5.52 0 10-4.48 10-10C22 6 17 2 12 2c0 0 1.5 4 5 6z" />
        <path d="M12 22C12 22 12 16 8 12" />
      </svg>
    ),
  },
  {
    short: "FSSAI",
    sub: "Certified",
    label: "Food Safety Standards",
    color: "#DC2626",
    underline: "#DC2626",
    img: "/images/categories/fssai.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    short: "DGFT",
    sub: "Licensed",
    label: "Export Trade License",
    color: "#7C3AED",
    underline: "#7C3AED",
    img: "/images/categories/dgft.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
      </svg>
    ),
  },
  {
    short: "GLOBAL",
    sub: "G.A.P.",
    label: "Good Agricultural Practices",
    color: "#0891B2",
    underline: "#0891B2",
    img: "/images/categories/global.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function Certifications() {
  return (
    <section style={S.section}>
      <div style={S.container}>

        {/* ── heading row ── */}
        <div style={S.head}>
          <div style={S.headLeft}>
            <h2 style={S.title}>Our Certifications</h2>
            <p style={S.subtitle}>
              Recognized standards that reflect our commitment to quality, safety and global best practices.
            </p>
          </div>
          <Link to="/certifications" style={S.viewBtn} className="cert-view-btn">
            View All Certificates &nbsp;→
          </Link>
        </div>

        {/* ── cert cards ── */}
        <div className="cert-grid">
          {certs.map((c, i) => (
            <div key={i} className="cert-card" style={S.card}>

              {/* image */}
              <div style={S.imgWrap}>
                <img
                  src={c.img}
                  alt={c.short}
                  style={S.img}
                  loading="lazy"
                  onError={(e) => { e.target.src = `https://picsum.photos/seed/cert${i}/400/220`; }}
                />
                {/* icon overlapping image bottom */}
                <div style={{ ...S.iconOverlap, background: `${c.color}15`, border: `2px solid ${c.color}30` }}>
                  <span style={{ color: c.color, display: "flex" }}>{c.icon}</span>
                </div>
              </div>

              {/* text body */}
              <div style={S.cardBody}>
                <h3 style={{ ...S.certShort, color: c.color }}>{c.short}</h3>
                <p style={{ ...S.certSub, color: c.color }}>{c.sub}</p>
                <div style={{ ...S.underline, background: c.underline }} />
                <p style={S.certLabel}>{c.label}</p>
              </div>

              {/* bottom accent */}
              <div style={{ ...S.bottomAccent, background: c.color }} />
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
        }
        .cert-card {
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }
        .cert-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(11,31,58,0.12) !important;
        }
        .cert-card:hover img {
          transform: scale(1.05);
        }
        .cert-view-btn {
          transition: background 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
        }
        .cert-view-btn:hover {
          background: #178a5e !important;
          box-shadow: 0 8px 24px rgba(31,169,113,0.35) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 960px) {
          .cert-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 580px) {
          .cert-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  );
}

const S = {
  section: {
    background: "#F4F7F9",
    padding: "60px 60px",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  /* heading */
  head: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: "36px",
    gap: "24px",
  },

  headLeft: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  title: {
    fontSize: "clamp(22px, 2.5vw, 32px)",
    fontWeight: "800",
    color: "#0B1F3A",
    margin: "0",
    letterSpacing: "-0.4px",
  },

  subtitle: {
    fontSize: "14px",
    color: "rgba(11,31,58,0.5)",
    margin: "0",
    lineHeight: "1.6",
    maxWidth: "480px",
  },

  viewBtn: {
    display: "inline-flex",
    alignItems: "center",
    background: "#1FA971",
    color: "#ffffff",
    textDecoration: "none",
    padding: "13px 26px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "700",
    whiteSpace: "nowrap",
    flexShrink: 0,
    boxShadow: "0 4px 16px rgba(31,169,113,0.3)",
  },

  /* card */
  card: {
    background: "#ffffff",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(11,31,58,0.07)",
    border: "1px solid #EAECF0",
    cursor: "default",
    position: "relative",
    paddingBottom: "4px",
  },

  imgWrap: {
    position: "relative",
    height: "200px",
    overflow: "visible",
  },

  img: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.4s ease",
  },

  iconOverlap: {
    position: "absolute",
    bottom: "-24px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    background: "#EEF9F4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
    boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
  },

  cardBody: {
    padding: "36px 16px 16px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
  },

  certShort: {
    fontSize: "22px",
    fontWeight: "900",
    margin: "0",
    letterSpacing: "-0.3px",
    lineHeight: "1.1",
  },

  certSub: {
    fontSize: "14px",
    fontWeight: "700",
    margin: "0",
    letterSpacing: "0.2px",
  },

  underline: {
    width: "36px",
    height: "3px",
    borderRadius: "3px",
    margin: "6px auto",
  },

  certLabel: {
    fontSize: "12.5px",
    color: "rgba(11,31,58,0.45)",
    margin: "0",
    fontWeight: "500",
    lineHeight: "1.4",
    textAlign: "center",
  },

  bottomAccent: {
    height: "3px",
    width: "100%",
    borderRadius: "0 0 3px 3px",
  },
};
