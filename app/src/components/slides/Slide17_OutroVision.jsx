import { useRef } from 'react'
import { Collaborate } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

export default function Slide17_OutroVision() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })

    tl.from('.s17-card', { opacity: 0, y: 30, duration: 1, ease: 'power2.out' })
      .from('.s17-label', { opacity: 0, y: 15, duration: 0.5 }, '-=0.5')
      .from('.s17-vision-text', { opacity: 0, y: 15, duration: 0.6 }, '-=0.3')
      .from('.s17-sub', { opacity: 0, y: 10, duration: 0.5 }, '-=0.2')
      .from('.s17-thanks', { opacity: 0, duration: 0.6 }, '-=0.1')
  })

  return (
    <section
      id="slide-17"
      ref={ref}
      className="slide"
      style={{
        position: 'relative', overflow: 'hidden',
        background: '#f7f6f3',
      }}
    >
      {/* Warm, organic background texture */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0,
        background: `
          radial-gradient(ellipse at 20% 80%, rgba(47, 208, 150, 0.07) 0%, transparent 40%),
          radial-gradient(ellipse at 80% 20%, rgba(230, 218, 200, 0.3) 0%, transparent 40%),
          radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.6) 0%, transparent 60%)
        `,
      }} />

      {/* Subtle line decoration */}
      <svg style={{
        position: 'absolute', bottom: 0, left: 0, width: '100%', height: '40%',
        pointerEvents: 'none', zIndex: 0, opacity: 0.06,
      }}>
        <line x1="0" y1="100%" x2="100%" y2="0" stroke="#2FD096" strokeWidth="1" />
        <line x1="10%" y1="100%" x2="100%" y2="20%" stroke="#2FD096" strokeWidth="0.5" />
      </svg>

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        width: '100%', height: '100%',
      }}>
        <div className="s17-card" style={{
          background: 'rgba(55, 62, 72, 0.92)',
          borderRadius: '1.25rem',
          padding: '3.5rem 5rem',
          maxWidth: '800px',
          textAlign: 'center',
          boxShadow: '0 30px 80px rgba(0,0,0,0.15), 0 10px 30px rgba(0,0,0,0.08)',
        }}>
          {/* Label */}
          <div className="s17-label" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.625rem',
            marginBottom: '2rem',
          }}>
            <Collaborate size={22} style={{ color: 'var(--color-primary)' }} />
            <p style={{
              fontSize: '1.375rem', fontWeight: 700, letterSpacing: '0.05em',
              color: 'var(--color-primary)',
            }}>
              닥프렌즈의 비전
            </p>
          </div>

          {/* Vision text */}
          <p className="s17-vision-text" style={{
            fontSize: '1.625rem', fontWeight: 700, color: '#f1f0ed',
            lineHeight: 1.7, marginBottom: '1.5rem',
            letterSpacing: '-0.01em',
          }}>
            파편화된 의료 인프라를 하나로 이어
            <br />
            환자와 의사를{' '}
            <span style={{
              color: 'var(--color-primary)',
              borderBottom: '2px solid var(--color-primary)',
              paddingBottom: '2px',
            }}>1인 1주치의</span>{' '}
            관계로 연결하고자 합니다.
          </p>

          {/* Divider */}
          <div style={{
            width: '48px', height: '2px', background: 'rgba(255,255,255,0.12)',
            margin: '0 auto 1.5rem',
          }} />

          {/* Sub text */}
          <p className="s17-sub" style={{
            fontSize: '0.9375rem', color: 'rgba(241, 240, 237, 0.5)',
            lineHeight: 1.8,
          }}>
            병원 경영과 환자 케어의 진심을 데이터와 기술로서 연결하는 이 여정에,
            <br />
            여러분과 함께 하겠습니다.
          </p>
        </div>

        {/* Thank you */}
        <p className="s17-thanks" style={{
          fontSize: '0.9375rem', color: '#94918a',
          fontWeight: 500, marginTop: '2.5rem',
        }}>
          경청해 주셔서 감사합니다.
        </p>
      </div>
    </section>
  )
}
