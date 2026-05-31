const posts = [
  {
    id: 1,
    category: "Import Guide",
    title: "How to Import Spices from India: A Complete Guide",
    date: "May 16, 2024",
    img: "/images/categories/latest1.jpg",
    catColor: "#1FA971",
    catBg: "#EEF9F4",
  },
  {
    id: 2,
    category: "Trade Terms",
    title: "FOB vs CIF: Which is Better for Importers?",
    date: "May 16, 2024",
    img: "/images/categories/latest2.jpg",
    catColor: "#3B82F6",
    catBg: "#EFF6FF",
  },
  {
    id: 3,
    category: "Compliance",
    title: "Essential Import Documents Checklist for 2024",
    date: "Apr 28, 2024",
    img: "/images/categories/latest3.jpg",
    catColor: "#F59E0B",
    catBg: "#FFFBEB",
  },
  {
    id: 4,
    category: "Products",
    title: "Top 10 Agro Products to Import from India",
    date: "Apr 20, 2024",
    img: "/images/categories/latest4.jpg",
    catColor: "#8B5CF6",
    catBg: "#F5F3FF",
  },
];

export default function LatestInsights() {
  return (
    <section style={S.section}>
      <div style={S.container}>

        {/* heading row */}
        <div style={S.head}>
          <h2 style={S.title}>Latest Insights</h2>
          <button style={S.viewBtn} className="li-view-btn">
            View Resources
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

        {/* 4-card grid */}
        <div className="li-grid">
          {posts.map((p) => (
            <article key={p.id} className="li-card" style={S.card}>
              <div style={S.imgWrap}>
                <img
                  src={p.img}
                  alt={p.title}
                  style={S.img}
                  loading="lazy"
                />
              </div>
              <div style={S.cardBody}>
                <span style={{ ...S.category, color: p.catColor, background: p.catBg }}>
                  {p.category}
                </span>
                <h3 style={S.postTitle}>{p.title}</h3>
                <p style={S.date}>{p.date}</p>
              </div>
            </article>
          ))}
        </div>

      </div>

      <style>{`
        .li-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .li-card {
          transition: transform 0.28s ease, box-shadow 0.28s ease;
          cursor: pointer;
        }
        .li-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(11,31,58,0.1) !important;
        }
        .li-card:hover img {
          transform: scale(1.05);
        }
        .li-view-btn {
          transition: background 0.22s ease, box-shadow 0.22s ease;
        }
        .li-view-btn:hover {
          background: #178a5e !important;
          box-shadow: 0 6px 20px rgba(31,169,113,0.3) !important;
        }
        @media (max-width: 900px) {
          .li-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .li-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

const S = {
  section: {
    background: "#F8FAFB",
    padding: "60px 60px",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  head: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "32px",
  },

  title: {
    fontSize: "clamp(22px, 2.5vw, 30px)",
    fontWeight: "800",
    color: "#0B1F3A",
    margin: "0",
    letterSpacing: "-0.4px",
  },

  viewBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "7px",
    background: "#1FA971",
    color: "#ffffff",
    border: "none",
    padding: "10px 22px",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 3px 12px rgba(31,169,113,0.25)",
    fontFamily: "inherit",
  },

  card: {
    background: "#ffffff",
    borderRadius: "12px",
    overflow: "hidden",
    border: "1px solid #EAECF0",
    boxShadow: "0 2px 8px rgba(11,31,58,0.05)",
  },

  imgWrap: {
    overflow: "hidden",
    height: "180px",
  },

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.4s ease",
  },

  cardBody: {
    padding: "18px 18px 20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  category: {
    display: "inline-flex",
    fontSize: "11px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    padding: "4px 10px",
    borderRadius: "20px",
    width: "fit-content",
  },

  postTitle: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#0B1F3A",
    lineHeight: "1.5",
    margin: "0",
    letterSpacing: "-0.1px",
  },

  date: {
    fontSize: "12px",
    color: "rgba(11,31,58,0.4)",
    margin: "0",
    fontWeight: "500",
  },
};
