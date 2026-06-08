import { Link } from 'react-router-dom';

// Soft pastel background per category — gives each card its own personality
const CARD_BG = {
  gems:       '#fdf4ff',
  industrial: '#fff7ed',
  pharma:     '#eff6ff',
  agro:       '#f0fdf4',
  dehydrated: '#fefce8',
  frozen:     '#f0f9ff',
  dairy:      '#fffef0',
  animal:     '#f7fee7',
  textiles:   '#fdf2f8',
  packaging:  '#f8fafc',
  eco:        '#f0fdf4',
  toys:       '#fff7ed',
  footwear:   '#fef9ee',
  minerals:   '#f5f5f7',
};

// Fallback for products without a real image
const IMG_FALLBACK = {
  gems:       { bg: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)', icon: '💎' },
  industrial: { bg: 'linear-gradient(135deg, #431407 0%, #9a3412 50%, #c2410c 100%)', icon: '⚙️' },
  pharma:     { bg: 'linear-gradient(135deg, #0c4a6e 0%, #0369a1 100%)',               icon: '💊' },
  agro:       { bg: 'linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)', icon: '🌾' },
  dehydrated: { bg: 'linear-gradient(135deg, #451a03 0%, #92400e 100%)',               icon: '🥗' },
  frozen:     { bg: 'linear-gradient(135deg, #0c4a6e 0%, #0ea5e9 100%)',               icon: '❄️' },
  dairy:      { bg: 'linear-gradient(135deg, #713f12 0%, #ca8a04 100%)',               icon: '🥛' },
  animal:     { bg: 'linear-gradient(135deg, #14532d 0%, #65a30d 100%)',               icon: '🌱' },
  textiles:   { bg: 'linear-gradient(135deg, #500724 0%, #be185d 100%)',               icon: '👕' },
  packaging:  { bg: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',               icon: '📦' },
  eco:        { bg: 'linear-gradient(135deg, #052e16 0%, #15803d 100%)',               icon: '🌿' },
  toys:       { bg: 'linear-gradient(135deg, #431407 0%, #ea580c 100%)',               icon: '🧸' },
  footwear:   { bg: 'linear-gradient(135deg, #292524 0%, #a16207 100%)',               icon: '👟' },
  minerals:   { bg: 'linear-gradient(135deg, #1c1917 0%, #57534e 100%)',               icon: '🪨' },
};

export default function ProductCard({ product, selected, onToggleSelect }) {
  const cardBg   = selected ? '#f0fdf8' : (CARD_BG[product.category] || '#fafafa');
  const fallback = IMG_FALLBACK[product.category] || { bg: 'linear-gradient(135deg,#e2e8f0,#94a3b8)', icon: '📦' };

  return (
    <div
      style={{
        background: cardBg,
        borderRadius: '14px',
        border: selected ? '2px solid #1FA971' : '1.5px solid rgba(0,0,0,0.06)',
        boxShadow: selected
          ? '0 0 0 4px rgba(31,169,113,0.1)'
          : '0 2px 14px rgba(0,0,0,0.06)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.18s, box-shadow 0.18s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = selected
          ? '0 0 0 4px rgba(31,169,113,0.1)'
          : '0 10px 32px rgba(0,0,0,0.11)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = selected
          ? '0 0 0 4px rgba(31,169,113,0.1)'
          : '0 2px 14px rgba(0,0,0,0.06)';
      }}
    >
      {/* ── Image ── */}
      <div style={{ position: 'relative', width: '100%', paddingTop: '65%', overflow: 'hidden', flexShrink: 0 }}>
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onError={e => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div style={{ position: 'absolute', inset: 0, background: fallback.bg, display: product.image ? 'none' : 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '52px' }}>
          {fallback.icon}
        </div>

        {/* Checkbox for batch RFQ */}
        <button
          onClick={e => { e.preventDefault(); onToggleSelect(product.id); }}
          title={selected ? 'Remove from RFQ' : 'Add to RFQ'}
          style={{
            position: 'absolute', top: '10px', left: '10px',
            width: '26px', height: '26px', borderRadius: '7px',
            border: selected ? '2px solid #1FA971' : '2px solid rgba(255,255,255,0.75)',
            background: selected ? '#1FA971' : 'rgba(255,255,255,0.85)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', padding: 0,
            fontSize: '13px', fontWeight: '700',
            color: selected ? '#fff' : 'transparent',
            transition: 'all 0.15s',
            boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
          }}
        >
          ✓
        </button>
      </div>

      {/* ── Body ── */}
      <div style={{ padding: '16px 18px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#0B1F3A', margin: '0 0 8px', lineHeight: '1.3' }}>
          {product.name}
        </h3>

        <p style={{
          fontSize: '13px', color: '#6b7280', lineHeight: '1.65',
          margin: '0 0 18px', flex: 1,
          display: '-webkit-box', WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          {product.description}
        </p>

        <Link
          to={`/request-quote?product=${product.id}`}
          style={{
            display: 'block', textAlign: 'center',
            background: '#1FA971', color: '#fff',
            padding: '10px 0', borderRadius: '8px',
            fontSize: '13px', fontWeight: '700',
            textDecoration: 'none',
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#178a5f'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#1FA971'; }}
        >
          Request Quote
        </Link>
      </div>
    </div>
  );
}
