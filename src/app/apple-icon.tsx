import { ImageResponse } from 'next/og'

// Apple touch icon — used for iOS home screen bookmarks and macOS Safari pinned tabs.
// Larger than favicon (180x180), no transparency, square corners (Apple applies its own mask).

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
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
          fontFamily: 'Georgia, serif',
          fontSize: '120px',
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
