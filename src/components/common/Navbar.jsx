import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Certifications", to: "/certifications" },
  { label: "Resources", to: "/resources" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (to) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <>
      <nav style={{ ...S.nav, ...(scrolled ? S.navScrolled : {}) }}>
        <div style={S.inner}>
          
          {/* LOGO */}
          <Link to="/" style={S.logo}>
            <div style={S.logoMark}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#1FA971" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <span style={S.logoText}>
              Import<span style={S.logoAccent}>Wiz</span>
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <div style={S.links} className="nb-desktop-links">
            {navLinks.map((l) => {
              const active = isActive(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  style={{
                    ...S.link,
                    color: active
                      ? "#1FA971"
                      : hoveredLink === l.to
                      ? "#1FA971"
                      : "rgba(200,220,255,0.75)",
                  }}
                  onMouseEnter={() => setHoveredLink(l.to)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {l.label}
                  {active && <span style={S.activeDot} />}
                </Link>
              );
            })}
          </div>

          {/* RIGHT SIDE */}
          <div style={S.right}>
            <Link to="/contact" style={S.cta} className="nb-cta">
              Request Quote
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>

            {/* HAMBURGER */}
            <button
              style={S.hamburger}
              className="nb-hamburger"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div style={S.mobileMenu}>
            {navLinks.map((l) => {
              const active = isActive(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  style={{
                    ...S.mobileLink,
                    color: active ? "#1FA971" : "#ccc",
                  }}
                >
                  {l.label}
                </Link>
              );
            })}

            <Link to="/contact" style={S.mobileCta}>
              Request Quote →
            </Link>
          </div>
        )}
      </nav>

      <style>{`
        .nb-cta {
          transition: all 0.25s ease;
        }
        .nb-cta:hover {
          background: #178a5e !important;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 6px 20px rgba(31,169,113,0.4);
        }

        .nb-hamburger {
          transition: all 0.2s ease;
        }
        .nb-hamburger:hover {
          background: rgba(31,169,113,0.15);
          color: #1FA971;
        }

        @media (min-width: 861px) {
          .nb-hamburger { display: none !important; }
        }

        @media (max-width: 860px) {
          .nb-desktop-links { display: none !important; }
          .nb-cta { display: none !important; }
        }
      `}</style>
    </>
  );
}

const S = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 999,
    background: "rgba(11,31,58,0.92)",
    backdropFilter: "blur(14px)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },

  navScrolled: {
    background: "rgba(11,31,58,0.97)",
    boxShadow: "0 6px 30px rgba(0,0,0,0.35)",
    borderBottom: "1px solid rgba(31,169,113,0.15)",
  },

  inner: {
    maxWidth: "1160px",
    margin: "0 auto",
    padding: "0 40px",
    height: "68px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
  },

  logoMark: {
    width: "34px",
    height: "34px",
    borderRadius: "8px",
    background: "rgba(31,169,113,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  logoText: {
    fontSize: "18px",
    fontWeight: "800",
    color: "#E8F4FF",
  },

  logoAccent: {
    color: "#1FA971",
  },

  links: {
    display: "flex",
    gap: "12px",
  },

  link: {
    fontSize: "14px",
    textDecoration: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    position: "relative",
  },

  activeDot: {
    position: "absolute",
    bottom: "-2px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "4px",
    height: "4px",
    background: "#1FA971",
    borderRadius: "50%",
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  cta: {
    background: "#1FA971",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },

  hamburger: {
    background: "rgba(255,255,255,0.1)",
    border: "none",
    padding: "8px",
    borderRadius: "6px",
    color: "#fff",
    cursor: "pointer",
  },

  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    padding: "10px 20px",
    background: "#0B1F3A",
  },

  mobileLink: {
    padding: "10px 0",
    textDecoration: "none",
    fontSize: "15px",
  },

  mobileCta: {
    marginTop: "10px",
    background: "#1FA971",
    color: "#fff",
    padding: "10px",
    borderRadius: "8px",
    textAlign: "center",
    textDecoration: "none",
  },
};