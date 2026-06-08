import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "Agro Products",       count: "120+", img: "/images/categories/agro.jpg"       },
  { id: 2, name: "Spices",              count: "90+",  img: "/images/categories/spices.jpg"      },
  { id: 3, name: "Grains & Pulses",     count: "75+",  img: "/images/categories/grains.jpg"      },
  { id: 4, name: "Leather Goods",       count: "60+",  img: "/images/categories/leather.jpg"     },
  { id: 5, name: "Organic Products",    count: "50+",  img: "/images/categories/organic.jpg"     },
  { id: 6, name: "Industrial Products", count: "100+", img: "/images/categories/industrial.jpg"  },
  { id: 7, name: "Chemicals",           count: "80+",  img: "/images/categories/chemicals.jpg"   },
  { id: 8, name: "Consumer Goods",      count: "150+", img: "/images/categories/consumer.jpg"    },
];

export default function ProductCategories() {
  return (
    <section style={S.section} className="pc-section">
      <div style={S.container}>

        {/* heading */}
        <div style={S.head}>
          <h2 style={S.title}>Popular Product Categories</h2>
        </div>

        {/* 4×2 grid */}
        <div className="pc-grid">
          {categories.map((c) => (
            <Link key={c.id} to="/products" style={S.cardLink} className="pc-card">
              <img
                src={c.img}
                alt={c.name}
                style={S.img}
                loading="lazy"
                onError={(e) => { e.target.src = `https://picsum.photos/seed/${c.id + 10}/400/280`; }}
              />
              <div style={S.overlay} />
              <div style={S.cardContent}>
                <h3 style={S.catName}>{c.name}</h3>
                <span style={S.catCount}>{c.count} Products</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={S.ctaRow}>
          <Link to="/products" style={S.ctaBtn} className="pc-cta">
            View All Categories
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

      </div>

      <style>{`
        .pc-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .pc-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          display: block;
          text-decoration: none;
          aspect-ratio: 4/3;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .pc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.18) !important;
        }
        .pc-card:hover img {
          transform: scale(1.07);
        }
        .pc-cta {
          transition: background 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
        }
        .pc-cta:hover {
          background: #178a5e !important;
          box-shadow: 0 8px 28px rgba(31,169,113,0.35) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 900px) {
          .pc-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .pc-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
          .pc-section { padding: 40px 16px !important; }
        }
        @media (max-width: 768px) {
          .pc-section { padding: 52px 20px !important; }
        }
      `}</style>
    </section>
  );
}

const S = {
  section: {
    background: "#ffffff",
    padding: "60px 60px",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  head: {
    marginBottom: "32px",
  },

  title: {
    fontSize: "clamp(22px, 2.5vw, 30px)",
    fontWeight: "800",
    color: "#0B1F3A",
    margin: "0",
    letterSpacing: "-0.4px",
  },

  cardLink: {
    textDecoration: "none",
  },

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.4s ease",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(5,20,45,0.78) 0%, rgba(5,20,45,0.15) 55%, transparent 100%)",
    pointerEvents: "none",
  },

  cardContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "16px 16px 14px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },

  catName: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#ffffff",
    margin: "0",
    letterSpacing: "-0.1px",
  },

  catCount: {
    fontSize: "11px",
    fontWeight: "600",
    color: "rgba(255,255,255,0.7)",
    letterSpacing: "0.2px",
  },

  ctaRow: {
    display: "flex",
    justifyContent: "center",
    marginTop: "36px",
  },

  ctaBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "#1FA971",
    color: "#ffffff",
    textDecoration: "none",
    padding: "12px 28px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "700",
    boxShadow: "0 4px 16px rgba(31,169,113,0.28)",
  },
};
