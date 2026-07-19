import { ImageResponse } from 'next/og'

// Favicon — Next.js auto-discovers this file at /icon and serves it as favicon.ico.
//
// Design: monogram "S" in gold on warm charcoal, framed by a thin gold border.
// Reads well at 16x16 (browser tab) and 32x32 (bookmark bar).

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#141210',
          borderRadius: '6px',
          border: '1.5px solid #fbbf24',
          fontFamily: 'Georgia, serif',
          fontSize: '22px',
          fontWeight: 600,
          color: '#fbbf24',
          letterSpacing: '-0.04em',
        }}
      >
        S
      </div>
    ),
    { ...size }
  )
}
