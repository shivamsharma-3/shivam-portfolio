import { ImageResponse } from 'next/og'

// Static OG image — generated at build/runtime via next/og (ImageResponse).
// Size: 1200x630 (recommended Open Graph size for Twitter/Facebook/LinkedIn/WhatsApp).
//
// Design matches the live site:
// - Warm charcoal background (#141210)
// - Gold ambient glow at top (simpler gradient — Vercel edge has issues with complex CSS)
// - Serif headline (Georgia — universally available, no font loading needed)
// - Gold italic accent for the punchy bit
// - Stats strip at bottom

export const runtime = 'edge'
export const alt = 'Shivam Sharma — SaaS Product Builder'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#141210',
          backgroundImage:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(251, 191, 36, 0.18) 0%, transparent 60%)',
          padding: '80px',
          fontFamily: 'Georgia, serif',
          color: '#fafafa',
        }}
      >
        {/* Top label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '20px',
            color: '#a3a3a3',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              marginRight: '16px',
            }}
          />
          <div style={{ display: 'flex' }}>Available for work · India · 2025 grad</div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: '86px',
            lineHeight: 1.0,
            letterSpacing: '-0.025em',
          }}
        >
          <div style={{ display: 'flex', color: '#fafafa' }}>Shivam Sharma</div>
          <div style={{ display: 'flex', marginTop: '24px', color: '#d4d4d4' }}>
            <span>I build SaaS products </span>
            <span style={{ color: '#fbbf24', fontStyle: 'italic' }}>shipped in weeks.</span>
          </div>
        </div>

        {/* Bottom stats */}
        <div
          style={{
            display: 'flex',
          }}
        >
          {[
            { num: '03', label: 'PRODUCTS SHIPPED' },
            { num: '06', label: 'MONTHS BUILDING' },
            { num: '24h', label: 'REPLY TIME' },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginRight: '60px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  fontSize: '48px',
                  fontFamily: 'Georgia, serif',
                  color: '#fbbf24',
                  lineHeight: 1,
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: '14px',
                  color: '#a3a3a3',
                  letterSpacing: '1.5px',
                  marginTop: '8px',
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
