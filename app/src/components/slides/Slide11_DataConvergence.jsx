import { useRef } from 'react'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const BASE = import.meta.env.BASE_URL

const PLATFORMS = [
  { name: '네이버', logo: `${BASE}images/logos/네이버 로고.png`, size: '5.5rem' },
  { name: '카카오', logo: `${BASE}images/logos/카카오 로고.png`, size: '4.5rem' },
  { name: '당근', logo: `${BASE}images/logos/당근 로고.png`, size: '4.5rem' },
  { name: '강남언니', logo: `${BASE}images/logos/강남언니 로고.png`, size: '5.5rem' },
  { name: '구글', logo: `${BASE}images/logos/구글 로고.png`, size: '4.5rem' },
  { name: '블라인드', logo: `${BASE}images/logos/블라인드 로고.png`, size: '4.5rem', upcoming: true },
  { name: '키즈노트', logo: `${BASE}images/logos/키즈노트 로고.png`, size: '5.5rem', upcoming: true },
]

const HUB_X = 850
const HUB_Y = 350

function buildAllPaths() {
  const paths = []
  const sourceXBase = 100
  const totalPlatforms = PLATFORMS.length
  // Logos are vertically centered in the viewport, roughly from 20% to 80% of 700
  const topMargin = 155
  const bottomMargin = 155
  const usableHeight = 700 - topMargin - bottomMargin
  const verticalSpacing = usableHeight / (totalPlatforms - 1)

  PLATFORMS.forEach((_, pi) => {
    const sourceY = topMargin + pi * verticalSpacing
    const linesPerPlatform = 6

    for (let li = 0; li < linesPerPlatform; li++) {
      const spread = 55
      const offsetY = (li - (linesPerPlatform - 1) / 2) * (spread / linesPerPlatform)
      const startY = sourceY + offsetY
      const wobble = (li % 2 === 0 ? 1 : -1) * (15 + li * 8)

      const cp1x = 220 + li * 25 + pi * 10
      const cp1y = startY + wobble
      const cp2x = 550 + li * 15
      const cp2y = HUB_Y + (startY - HUB_Y) * 0.15 + (li % 2 === 0 ? 10 : -10)

      // First half = organic, second half = paid
      const isOrganic = li < linesPerPlatform / 2

      paths.push({
        d: `M ${sourceXBase},${startY} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${HUB_X},${HUB_Y}`,
        lineIndex: li,
        type: isOrganic ? 'organic' : 'paid',
      })
    }
  })
  return paths
}

const ALL_PATHS = buildAllPaths()

export default function Slide11_DataConvergence() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })

    tl.from('.s11-title', { opacity: 0, y: 30, duration: 0.7 })
      .from('.s11-platform', { opacity: 0, x: -20, stagger: 0.05, duration: 0.4 }, '-=0.3')

    const paths = ref.current.querySelectorAll('.s11-path')
    paths.forEach((path) => {
      const length = path.getTotalLength()
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
    })

    tl.to('.s11-path', {
      strokeDashoffset: 0,
      duration: 2,
      ease: 'power2.inOut',
      stagger: { amount: 0.8, from: 'random' },
    }, '-=0.5')

    tl.from('.s11-hub', { opacity: 0, scale: 0, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.8')
      .from('.s11-hub-text', { opacity: 0, y: 10, duration: 0.5 }, '-=0.3')
      .from('.s11-legend', { opacity: 0, y: 10, duration: 0.4 }, '-=0.2')
      .from('.s11-bottom', { opacity: 0, duration: 0.5 }, '-=0.2')
  })

  return (
    <section id="slide-11" ref={ref} className="slide" style={{
      background: 'white',
      position: 'relative', overflow: 'hidden',
    }}>
      <style>{`
        .s11-hub-core {
          animation: s11glow 1.5s ease-in-out infinite;
        }
        @keyframes s11glow {
          0%, 100% { box-shadow: 0 0 30px 8px rgba(47,208,150,0.3); }
          50% { box-shadow: 0 0 50px 16px rgba(47,208,150,0.5); }
        }
        .s11-ripple {
          position: absolute;
          border-radius: 50%;
          border: 2px solid rgba(47,208,150,0.6);
          animation: s11ripple 6s ease-out infinite;
        }
        .s11-ripple:nth-child(2) { animation-delay: 1.5s; }
        .s11-ripple:nth-child(3) { animation-delay: 3s; }
        .s11-ripple:nth-child(4) { animation-delay: 4.5s; }
        @keyframes s11ripple {
          0% { width: 110px; height: 110px; opacity: 1; }
          100% { width: 700px; height: 700px; opacity: 0; }
        }
      `}</style>

      {/* SVG convergence lines */}
      <svg viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        zIndex: 1,
      }}>
        <defs>
          <linearGradient id="lineGradOrganic" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#6366f1" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="lineGradPaid" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.2" />
            <stop offset="60%" stopColor="#2fd096" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2fd096" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {ALL_PATHS.map((p, i) => (
          <g key={i}>
            <path
              className="s11-path"
              d={p.d}
              fill="none"
              stroke={p.type === 'organic' ? 'url(#lineGradOrganic)' : 'url(#lineGradPaid)'}
              strokeWidth={1.2 + p.lineIndex * 0.2}
            />
            {/* Data particle traveling along the path */}
            <circle
              r={2 + p.lineIndex * 0.3}
              fill={p.type === 'organic' ? '#6366f1' : '#2fd096'}
              opacity="0.9"
            >
              <animateMotion
                dur={`${2.5 + (i % 7) * 0.4}s`}
                repeatCount="indefinite"
                begin={`${(i * 0.3) % 3}s`}
                path={p.d}
              />
            </circle>
          </g>
        ))}
      </svg>

      <div className="slide-content" style={{ position: 'relative', zIndex: 2 }}>
        {/* Title */}
        <div className="s11-title" style={{
          textAlign: 'center', marginBottom: '1rem',
          position: 'absolute', top: '2.5rem', left: '50%',
          transform: 'translateX(-50%)', width: '100%',
          zIndex: 5,
        }}>
          <p style={{
            fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em',
            textTransform: 'uppercase', color: 'var(--color-primary)',
            marginBottom: '1rem',
          }}>
            DATA CONVERGENCE
          </p>
          <h2 style={{
            fontSize: '2rem', fontWeight: 800, color: '#0f172a',
            lineHeight: 1.35, letterSpacing: '-0.02em',
          }}>
            각 플랫폼의 예약과 광고 데이터가 닥톡에 모이면,<br />
            어떤 <span style={{ color: 'var(--color-primary)' }}>'맥락'</span>이 보일까요?
          </h2>
        </div>

        {/* Platform logos — left side, no text */}
        <div style={{
          position: 'absolute', left: '1.5rem', top: 0, bottom: 0,
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', gap: '1rem',
          alignItems: 'flex-end',
          width: '5rem',
          zIndex: 3,
        }}>
          {PLATFORMS.map((p) => (
            <div key={p.name} className="s11-platform" style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
            }}>
              <img src={p.logo} alt={p.name} style={{
                width: p.size, height: p.size, objectFit: 'contain',
                ...(p.upcoming ? { filter: 'grayscale(1)', opacity: 0.5 } : {}),
              }} />
            </div>
          ))}
        </div>

        {/* Hub — right center + ripple */}
        <div style={{
          position: 'absolute',
          right: '10%', top: '54%',
          transform: 'translateY(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: '1rem', zIndex: 3,
        }}>
          <div style={{
            position: 'relative',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '110px', height: '110px',
          }}>
            <div className="s11-ripple" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
            <div className="s11-ripple" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
            <div className="s11-ripple" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
            <div className="s11-ripple" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />

            <div className="s11-hub s11-hub-core" style={{
              width: '110px', height: '110px', borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--color-primary), #1a9d6f)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', zIndex: 2,
            }}>
              <span style={{
                fontSize: '1.125rem', fontWeight: 800, color: 'white',
                letterSpacing: '0.02em',
              }}>
                닥톡
              </span>
            </div>
          </div>

          <div className="s11-hub-text" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.375rem', fontWeight: 800, color: '#0f172a' }}>닥톡광고</p>
            <p style={{ fontSize: '0.8125rem', color: '#94a3b8', lineHeight: 1.5 }}>
              자연유입 + 광고유입<br />예약 데이터 통합
            </p>
          </div>
        </div>

        {/* Legend */}
        <div className="s11-legend" style={{
          position: 'absolute', bottom: '5rem', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', alignItems: 'center', gap: '2rem',
          zIndex: 3,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: '#6366f1',
            }} />
            <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#6366f1' }}>
              Organic 자연유입 예약
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: 'var(--color-primary)',
            }} />
            <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-primary)' }}>
              Paid 광고유입 예약
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
