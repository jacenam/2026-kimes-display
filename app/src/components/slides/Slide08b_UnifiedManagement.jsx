import { useRef } from 'react'
import { ConnectionSignal, ArrowRight, Devices, Hospital, Globe, Search, Chat, Store, FaceActivated } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const PLATFORMS = [
  { icon: Search, label: '네이버' },
  { icon: Chat, label: '카카오' },
  { icon: Store, label: '당근' },
  { icon: FaceActivated, label: '강남언니' },
  { icon: Globe, label: '구글' },
  { icon: Devices, label: '블라인드' },
  { icon: Devices, label: '키즈노트' },
]

export default function Slide08b_UnifiedManagement() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })

    tl.from('.s08b-header', { opacity: 0, y: 30, duration: 0.6 })
      .from('.s08b-platform', { opacity: 0, x: -20, scale: 0.9, stagger: 0.06, duration: 0.5, ease: 'back.out(1.4)' }, '-=0.2')
      .from('.s08b-arrow', { opacity: 0, scaleX: 0, duration: 0.6, stagger: 0.08 }, '-=0.4')
      .from('.s08b-hub', { opacity: 0, scale: 0, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.3')
      .from('.s08b-emr', { opacity: 0, x: 20, duration: 0.6 }, '-=0.4')
      .from('.s08b-bottom', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2')
  })

  return (
    <SlideLayout id="slide-08b" ref={ref}>
      <div className="s08b-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p className="section-label">UNIFIED MANAGEMENT</p>
        <h2 className="section-title">채널은 넓어지고, 관리는 하나로</h2>
        <p className="section-subtitle">
          다양한 플랫폼 예약 채널이 늘어나도, 관리 포인트는 닥톡예약 한 곳으로 모입니다
        </p>
      </div>

      {/* Infographic: Many platforms → Doctalk → EMR */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem',
      }}>
        {/* Left: Multiple platforms fanning out */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: '0.5rem',
          alignItems: 'flex-end',
        }}>
          {PLATFORMS.map(({ icon: Icon, label }) => (
            <div key={label} className="s08b-platform" style={{
              display: 'flex', alignItems: 'center', gap: '0.625rem',
              padding: '0.625rem 1.25rem',
              background: '#f8fafc', borderRadius: '0.75rem',
              border: '1px solid #e2e8f0', fontSize: '0.8125rem', fontWeight: 600,
            }}>
              <Icon size={18} style={{ color: 'var(--color-primary)' }} />
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Arrows converging */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
          {[...Array(7)].map((_, i) => (
            <div key={i} className="s08b-arrow" style={{
              width: '60px', height: '2px',
              background: 'linear-gradient(90deg, #e2e8f0, var(--color-primary))',
              borderRadius: '1px',
            }} />
          ))}
        </div>

        {/* Center hub: Doctalk */}
        <div className="s08b-hub" style={{
          width: '160px', height: '160px', borderRadius: '50%',
          background: 'var(--color-primary)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          color: 'white', textAlign: 'center', flexShrink: 0,
          boxShadow: '0 20px 60px rgba(47, 208, 150, 0.3)',
        }}>
          <ConnectionSignal size={32} style={{ marginBottom: '0.25rem' }} />
          <p style={{ fontWeight: 800, fontSize: '0.9375rem' }}>닥톡예약</p>
          <p style={{ fontSize: '0.625rem', opacity: 0.8 }}>단일 관리 포인트</p>
        </div>

        {/* Arrow to EMR */}
        <div className="s08b-arrow" style={{
          width: '60px', height: '2px',
          background: 'linear-gradient(90deg, var(--color-primary), #e2e8f0)',
          borderRadius: '1px',
        }} />

        {/* Right: EMR */}
        <div className="s08b-emr" style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem',
        }}>
          <div style={{
            width: '100px', height: '100px', borderRadius: '1.25rem',
            background: '#f8fafc', border: '2px solid #e2e8f0',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          }}>
            <Hospital size={28} style={{ color: '#475569' }} />
            <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#475569', marginTop: '0.25rem' }}>EMR</p>
          </div>
          <p style={{ fontSize: '0.6875rem', color: '#94a3b8', fontWeight: 600 }}>32개 전자차트 연동</p>
        </div>
      </div>

      {/* Bottom callout */}
      <div className="s08b-bottom" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem',
        marginTop: '2.5rem', padding: '1.25rem 2rem',
        background: 'var(--color-primary-light)', borderRadius: '1rem',
        border: '1px solid rgba(47, 208, 150, 0.2)',
      }}>
        <ConnectionSignal size={22} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
        <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#1e293b' }}>
          예약 설정 한 번이면 모든 플랫폼에 실시간 반영 — 유입은 넓히고, 관리는 줄이고
        </p>
      </div>
    </SlideLayout>
  )
}
