import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../data/products';
import ProductCard from '../components/products/ProductCard';

// ── Hero ───────────────────────────────────────────────────────────────────
const HERO_STATS = [
  {
    value: '500+', label: 'Products',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1FA971" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
  },
  {
    value: '100+', label: 'Verified Suppliers',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1FA971" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  },
  {
    value: '25+', label: 'Countries Served',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1FA971" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  },
];

function ProductsHero({ onBrowse }) {
  return (
    <div style={{ background: '#0B1F3A', position: 'relative', overflow: 'hidden', color: '#fff' }}>

      {/* Subtle dot grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '22px 22px', pointerEvents: 'none' }} />

      {/* Right image */}
      <div className="ph-img-wrap" style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '52%', zIndex: 0 }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #0B1F3A 0%, rgba(11,31,58,0.55) 35%, transparent 70%)', zIndex: 1 }} />
        <img src="/images/categories/spices.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>

      {/* Left content */}
      <div className="ph-content" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '520px', padding: '52px 0 40px' }}>
          <h1 style={{ fontSize: 'clamp(22px, 2.6vw, 38px)', fontWeight: '800', lineHeight: '1.18', margin: '0 0 14px', letterSpacing: '-0.3px', color: '#fff' }}>
            Global Products.<br />
            Verified Suppliers.<br />
            <span style={{ color: '#1FA971' }}>Import Simplified.</span>
          </h1>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.62)', margin: '0 0 32px', lineHeight: '1.75', maxWidth: '400px' }}>
            Explore 500+ export-ready products across multiple categories. Sourced from verified suppliers and delivered worldwide.
          </p>
          <div className="ph-stats" style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
            {HERO_STATS.map(s => (
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
    </div>
  );
}

const ITEMS_PER_PAGE = 20;


// ── Pagination ─────────────────────────────────────────────────────────────
function Pagination({ page, total, onChange }) {
  const items = [];
  if (total <= 7) {
    for (let i = 1; i <= total; i++) items.push(i);
  } else {
    items.push(1);
    if (page > 3) items.push('…');
    for (let i = Math.max(2, page - 1); i <= Math.min(total - 1, page + 1); i++) items.push(i);
    if (page < total - 2) items.push('…');
    items.push(total);
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '36px 0 8px' }}>
      <PgBtn label="←" onClick={() => onChange(page - 1)} disabled={page === 1} />
      {items.map((item, i) =>
        item === '…'
          ? <span key={`d${i}`} style={{ padding: '0 4px', color: '#bbb', fontSize: '14px' }}>…</span>
          : <PgBtn key={item} label={item} onClick={() => onChange(item)} active={item === page} />
      )}
      <PgBtn label="→" onClick={() => onChange(page + 1)} disabled={page === total} />
    </div>
  );
}
function PgBtn({ label, onClick, active, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: '36px', height: '36px', borderRadius: '50%',
        border: active ? '1.5px solid #1FA971' : '1px solid #e0e0e0',
        background: active ? '#1FA971' : '#fff',
        color: active ? '#fff' : '#333',
        fontSize: '14px', fontWeight: active ? '700' : '500',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'inherit', transition: 'background 0.15s',
      }}
    >
      {label}
    </button>
  );
}

// ── RFQ Modal ──────────────────────────────────────────────────────────────
function RFQModal({ products, onClose }) {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', country: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const set = field => e => setForm(f => ({ ...f, [field]: e.target.value }));
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

  return (
    <div
      style={{
        position: 'fixed', inset: 0, background: 'rgba(11,31,58,0.6)',
        zIndex: 200, display: 'flex', alignItems: 'center',
        justifyContent: 'center', padding: '20px',
      }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div style={{
        background: '#fff', borderRadius: '14px',
        width: '100%', maxWidth: '540px',
        maxHeight: '90vh', overflowY: 'auto',
        boxShadow: '0 24px 60px rgba(0,0,0,0.3)',
      }}>
        {/* Header */}
        <div style={{ padding: '22px 24px 16px', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div>
            <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '800', color: '#0B1F3A' }}>
              Request Quote
            </h2>
            <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#888' }}>
              {products.length} product{products.length !== 1 ? 's' : ''} selected
            </p>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#999', lineHeight: 1, padding: '4px' }}>✕</button>
        </div>

        {/* Selected products */}
        <div style={{ padding: '14px 24px', borderBottom: '1px solid #f0f0f0', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {products.map(p => (
            <span key={p.id} style={{ background: '#f0fdf8', color: '#15803d', border: '1px solid #bbf7d0', fontSize: '12px', fontWeight: '600', padding: '4px 10px', borderRadius: '20px' }}>
              {p.name}
            </span>
          ))}
        </div>

        {/* Form or success */}
        <div style={{ padding: '20px 24px 24px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '28px 0' }}>
              <div style={{ fontSize: '42px', marginBottom: '12px' }}>✅</div>
              <h3 style={{ margin: '0 0 6px', fontSize: '17px', color: '#0B1F3A', fontWeight: '700' }}>Inquiry Sent!</h3>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>We&apos;ll get back to you within 24 hours.</p>
              <button onClick={onClose} style={{ marginTop: '20px', background: '#1FA971', color: '#fff', border: 'none', borderRadius: '7px', padding: '10px 24px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}>
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="rfq-modal-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                <input style={inputStyle} placeholder="Your Name *" value={form.name} onChange={set('name')} required />
                <input style={inputStyle} placeholder="Company Name *" value={form.company} onChange={set('company')} required />
                <input style={inputStyle} type="email" placeholder="Email Address *" value={form.email} onChange={set('email')} required />
                <input style={inputStyle} type="tel" placeholder="Phone / WhatsApp" value={form.phone} onChange={set('phone')} />
              </div>
              <select style={{ ...inputStyle, marginBottom: '10px', width: '100%' }} value={form.country} onChange={set('country')} required>
                <option value="">Destination Country *</option>
                {['United States','United Kingdom','Germany','Australia','Canada','UAE','Saudi Arabia','Singapore','Malaysia','France','Netherlands','Other'].map(c => <option key={c}>{c}</option>)}
              </select>
              <textarea
                style={{ ...inputStyle, width: '100%', minHeight: '90px', resize: 'vertical', boxSizing: 'border-box' }}
                placeholder="Specifications, quantity, packaging requirements, incoterms…"
                value={form.message}
                onChange={set('message')}
              />
              <button type="submit" style={{ width: '100%', marginTop: '14px', background: '#1FA971', border: 'none', borderRadius: '8px', color: '#fff', padding: '13px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}>
                Submit Inquiry →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
const inputStyle = {
  width: '100%', padding: '10px 12px', borderRadius: '7px',
  border: '1px solid #e0e0e0', background: '#fafafa',
  fontSize: '13px', color: '#333', outline: 'none',
  fontFamily: 'inherit', boxSizing: 'border-box',
};

// ── Main Page ──────────────────────────────────────────────────────────────
export default function Products() {
  const tabsRef = useRef(null);

  const [activeCat,    setActiveCat]    = useState('all');
  const [search,       setSearch]       = useState('');
  const [sort,         setSort]         = useState('popular');
  const [page,         setPage]         = useState(1);
  const [selected,     setSelected]     = useState(new Set());
  const [showModal,    setShowModal]     = useState(false);

  const scrollToTabs = () => tabsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const toggleSelect = useCallback(id => {
    setSelected(s => {
      const next = new Set(s);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const clearSelection = () => setSelected(new Set());

  const filtered = useMemo(() => {
    let list = PRODUCTS;

    if (activeCat !== 'all') list = list.filter(p => p.category === activeCat);

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    if (sort === 'az') return [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'za') return [...list].sort((a, b) => b.name.localeCompare(a.name));
    return list;
  }, [activeCat, search, sort]);

  const totalPages   = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const safePage     = Math.min(page, totalPages);
  const pageProducts = filtered.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE);
  const activeCatObj = CATEGORIES.find(c => c.id === activeCat);

  const selectedProducts = PRODUCTS.filter(p => selected.has(p.id));

  const selectCat = id => { setActiveCat(id); setPage(1); };
  const handleSearch = e => { setSearch(e.target.value); setPage(1); };
  const clearAllFilters = () => { setFilters({ cert: '', moq: '', lead: '', verified: false }); setPage(1); };

  return (
    <>
      <style>{`
        /* ── scrollbars ── */
        .tabs-scroll::-webkit-scrollbar { display: none; }

        /* ── product grid ── */
        @media (max-width: 1100px) { .prod-grid { grid-template-columns: repeat(3,1fr) !important; } }
        @media (max-width: 700px)  { .prod-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 420px)  { .prod-grid { grid-template-columns: 1fr !important; } }

        /* ── hero ── */
        @media (max-width: 768px) {
          .ph-img-wrap { display: none !important; }
          .ph-content  { padding: 0 20px !important; }
          .ph-content > div { padding: 36px 0 28px !important; max-width: 100% !important; }
          .ph-stats { gap: 16px !important; }
        }

        /* ── tabs ── */
        @media (max-width: 640px) {
          .tabs-scroll { padding: 0 16px !important; }
        }

        /* ── main page padding ── */
        @media (max-width: 640px) {
          .page-inner { padding-left: 16px !important; padding-right: 16px !important; }
        }

        /* ── search row ── */
        @media (max-width: 500px) {
          .search-row { flex-direction: column !important; align-items: stretch !important; }
          .sort-box   { width: 100% !important; }
        }

        /* ── cta banner ── */
        @media (max-width: 680px) {
          .cta-banner { flex-direction: column !important; }
          .cta-right  { align-items: flex-start !important; }
        }

        /* ── section header ── */
        @media (max-width: 480px) {
          .section-head { flex-direction: column !important; align-items: flex-start !important; gap: 8px !important; }
        }

        /* ── rfq modal grid ── */
        @media (max-width: 480px) {
          .rfq-modal-grid { grid-template-columns: 1fr !important; }
        }

        /* ── batch RFQ bar ── */
        @media (max-width: 640px) {
          .rfq-bar-inner { flex-direction: column !important; align-items: flex-start !important; gap: 12px !important; }
          .rfq-bar-btns  { width: 100% !important; display: flex !important; gap: 8px !important; }
          .rfq-bar-btns button { flex: 1 !important; }
        }
      `}</style>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <ProductsHero onBrowse={scrollToTabs} />

      <div style={{ background: '#f7f8fa', minHeight: '100vh', paddingBottom: '80px' }}>

        {/* ── Category Tabs ──────────────────────────────────────── */}
        <div ref={tabsRef} style={{ background: '#fff', borderBottom: '1px solid #ececec', padding: '20px 0 0' }}>
          <div className="tabs-scroll" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', display: 'flex', gap: '8px', overflowX: 'auto' }}>
            {CATEGORIES.map(cat => {
              const active = activeCat === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => selectCat(cat.id)}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
                    padding: '10px 14px 12px', borderRadius: '8px 8px 0 0',
                    border: active ? '1px solid #b6e8d3' : '1px solid #e8e8e8',
                    borderBottom: active ? '2px solid #1FA971' : '2px solid transparent',
                    background: active ? '#f0fdf4' : '#fff',
                    color: active ? '#1FA971' : '#555',
                    fontSize: '11.5px', fontWeight: active ? '700' : '500',
                    cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0,
                    transition: 'all 0.15s', fontFamily: 'inherit',
                  }}
                >
                  <span style={{ fontSize: '18px', lineHeight: 1 }}>{cat.icon}</span>
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Main content ───────────────────────────────────────── */}
        <div className="page-inner" style={{ maxWidth: '1280px', margin: '0 auto', padding: '24px 32px 0' }}>

          {/* Search + Sort */}
          <div className="search-row" style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', border: '1px solid #e0e0e0', borderRadius: '8px', background: '#fff', padding: '0 14px', height: '46px', gap: '10px' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                style={{ flex: 1, border: 'none', outline: 'none', fontSize: '13.5px', color: '#333', background: 'transparent', fontFamily: 'inherit' }}
                type="text"
                placeholder="Search products, categories, HS codes…"
                value={search}
                onChange={handleSearch}
              />
              {search && (
                <button onClick={() => { setSearch(''); setPage(1); }} style={{ background: 'none', border: 'none', color: '#bbb', cursor: 'pointer', fontSize: '16px', padding: 0, lineHeight: 1 }}>✕</button>
              )}
            </div>
            <div className="sort-box" style={{ display: 'flex', alignItems: 'center', border: '1px solid #e0e0e0', borderRadius: '8px', background: '#fff', padding: '0 12px', height: '46px', gap: '6px', flexShrink: 0 }}>
              <span style={{ fontSize: '12px', color: '#999' }}>Sort by:</span>
              <select
                value={sort}
                onChange={e => { setSort(e.target.value); setPage(1); }}
                style={{ border: 'none', outline: 'none', background: 'transparent', fontSize: '13px', fontWeight: '600', color: '#333', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                <option value="popular">Popular</option>
                <option value="az">A – Z</option>
                <option value="za">Z – A</option>
              </select>
            </div>
          </div>


          {/* CTA Banner */}
          <div className="cta-banner" style={{ background: '#0B1F3A', borderRadius: '10px', padding: '20px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>📦</div>
              <div>
                <h3 style={{ margin: '0 0 3px', fontSize: '15px', fontWeight: '700', color: '#fff' }}>Can&apos;t Find What You&apos;re Looking For?</h3>
                <p style={{ margin: 0, fontSize: '12.5px', color: 'rgba(255,255,255,0.55)' }}>Need custom specs, private label, custom packaging, or a completely new product?</p>
              </div>
            </div>
            <div className="cta-right" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px', flexShrink: 0 }}>
              <Link to="/request-quote" style={{ background: '#1FA971', color: '#fff', border: 'none', padding: '9px 18px', borderRadius: '6px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: 'inherit', textDecoration: 'none', display: 'inline-block' }}>
                Customize Your Product &nbsp;→
              </Link>
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>⏱ Response within 24 hours</span>
            </div>
          </div>

          {/* Section header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '19px', fontWeight: '700', color: '#0B1F3A' }}>{activeCatObj?.label ?? 'All'}</span>
              <span style={{ background: '#dcfce7', color: '#16a34a', fontSize: '11.5px', fontWeight: '600', padding: '3px 10px', borderRadius: '20px' }}>
                {filtered.length} Products
              </span>
            </div>
            {activeCat !== 'all' && (
              <button
                onClick={() => selectCat('all')}
                style={{ background: 'none', border: '1px solid #e0e0e0', color: '#666', fontSize: '12px', cursor: 'pointer', padding: '5px 12px', borderRadius: '20px', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                Clear Filter &nbsp;✕
              </button>
            )}
          </div>

          {/* Grid */}
          {pageProducts.length > 0 ? (
            <div className="prod-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '18px' }}>
              {pageProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  selected={selected.has(product.id)}
                  onToggleSelect={toggleSelect}
                />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '72px 0', color: '#aaa' }}>
              <span style={{ fontSize: '48px', display: 'block', marginBottom: '12px' }}>🔍</span>
              <p style={{ fontSize: '15px', margin: 0, color: '#888' }}>No products found. Try adjusting your filters or search.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && <Pagination page={safePage} total={totalPages} onChange={setPage} />}
        </div>
      </div>

      {/* ── Batch RFQ sticky bar ───────────────────────────────── */}
      {selected.size > 0 && (
        <div style={{
          position: 'fixed', bottom: 0, left: 0, right: 0,
          background: '#0B1F3A', zIndex: 100,
          padding: '14px 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          boxShadow: '0 -4px 24px rgba(0,0,0,0.2)',
          animation: 'slideUp 0.25s ease',
        }}>
          <style>{`@keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }`}</style>
          <div className="rfq-bar-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: 0 }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1FA971', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '800', color: '#fff', flexShrink: 0 }}>
                {selected.size}
              </div>
              <div style={{ minWidth: 0 }}>
                <p style={{ margin: 0, color: '#fff', fontSize: '14px', fontWeight: '600' }}>
                  {selected.size} product{selected.size !== 1 ? 's' : ''} selected
                </p>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '11px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {selectedProducts.map(p => p.name).join(' · ')}
                </p>
              </div>
            </div>
            <div className="rfq-bar-btns" style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
              <button onClick={clearSelection} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.7)', padding: '9px 16px', borderRadius: '7px', fontSize: '13px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: '500' }}>
                Clear
              </button>
              <button onClick={() => setShowModal(true)} style={{ background: '#1FA971', border: 'none', color: '#fff', padding: '9px 20px', borderRadius: '7px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}>
                Send Batch RFQ ({selected.size}) →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── RFQ Modal ────────────────────────────────────────────── */}
      {showModal && (
        <RFQModal
          products={selectedProducts}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
