import { useRef } from 'react'
import { ChartColumn, Finance } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

export default function Slide03_MarketSize() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })

    tl.from('.s03-title', { opacity: 0, y: 30, duration: 0.7 })
      .from('.s03-stat', { opacity: 0, y: 40, duration: 0.8, stagger: 0.2 }, '-=0.3')

    // Animate the graph lines drawing in
    gsap.from('.s03-graph-line', {
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      strokeDashoffset: 1200,
      duration: 2.5,
      stagger: 0.3,
      ease: 'power2.out',
      delay: 0.8,
    })
  })

  return (
    <SlideLayout id="slide-03" ref={ref}>
      {/* Background growth graph */}
      <svg
        style={{
          position: 'absolute', top: 0, left: 0,
          width: '100%', height: '100%',
          pointerEvents: 'none', zIndex: 0,
        }}
        viewBox="0 0 800 600"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="graphGrad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="graphGrad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.01" />
          </linearGradient>
        </defs>
        {/* Fill areas */}
        <path d="M0 500 Q100 480 200 440 T400 360 T600 240 T800 120 L800 600 L0 600 Z" fill="url(#graphGrad1)" />
        <path d="M0 520 Q100 510 200 490 T400 430 T600 350 T800 260 L800 600 L0 600 Z" fill="url(#graphGrad2)" />
        {/* Lines */}
        <path
          className="s03-graph-line"
          d="M0 500 Q100 480 200 440 T400 360 T600 240 T800 120"
          fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round"
          strokeDasharray="1200" strokeDashoffset="0"
        />
        <path
          className="s03-graph-line"
          d="M0 520 Q100 510 200 490 T400 430 T600 350 T800 260"
          fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round"
          opacity="0.4"
          strokeDasharray="1200" strokeDashoffset="0"
        />
        <path
          className="s03-graph-line"
          d="M0 540 Q100 535 200 520 T400 480 T600 420 T800 370"
          fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round"
          opacity="0.2"
          strokeDasharray="1200" strokeDashoffset="0"
        />
      </svg>

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Title */}
        <h2 className="s03-title" style={{
          fontSize: '3rem', fontWeight: 800, lineHeight: 1.3,
          color: '#0f172a', marginBottom: '4rem', maxWidth: '600px',
        }}>
          국내 의료 광고 시장은
          <br />
          <span style={{ color: 'var(--color-primary)' }}>8조 원</span> 규모로 성장했습니다.
        </h2>

        {/* Stats grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '2rem', maxWidth: '560px', marginBottom: '2.5rem',
        }}>
          <div className="s03-stat">
            <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
              전체 의료 광고 시장
            </p>
            <p style={{ fontSize: '4rem', fontWeight: 900, color: '#0f172a', lineHeight: 1, letterSpacing: '-0.03em' }}>
              8조원 <span style={{ fontSize: '1.5rem', fontWeight: 500, color: '#94a3b8' }}>+</span>
            </p>
          </div>

          <div className="s03-stat">
            <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
              온라인 광고 비중
            </p>
            <p style={{ fontSize: '4rem', fontWeight: 900, color: '#0f172a', lineHeight: 1, letterSpacing: '-0.03em' }}>
              5조원 <span style={{ fontSize: '1.5rem', fontWeight: 500, color: '#94a3b8' }}>+</span>
            </p>
          </div>
        </div>

      </div>
    </SlideLayout>
  )
}
