import { useRef } from 'react'
import { ConnectionSignal, Search, Chat, Store, Globe, FaceActivated, Devices, ArrowRight } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const ORGANIC = [
  { icon: Search, label: '네이버 플레이스' },
  { icon: Chat, label: '카카오 채널' },
  { icon: Store, label: '당근 동네병원' },
  { icon: Globe, label: '구글 검색' },
]

const PAID = [
  { icon: Search, label: '네이버 검색광고' },
  { icon: Chat, label: '카카오 비즈보드' },
  { icon: FaceActivated, label: '강남언니 광고' },
  { icon: Devices, label: '블라인드 광고' },
]

export default function Slide11b_BookingDataFlow() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })

    tl.from('.s11b-header', { opacity: 0, y: 30, duration: 0.6 })
      .from('.s11b-organic', { opacity: 0, x: -30, duration: 0.6 }, '-=0.2')
      .from('.s11b-paid', { opacity: 0, x: 30, duration: 0.6 }, '-=0.4')
      .from('.s11b-card', { opacity: 0, y: 15, stagger: 0.05, duration: 0.4 }, '-=0.3')
      .from('.s11b-flow-line', { scaleY: 0, transformOrigin: 'top', duration: 0.6 }, '-=0.3')
      .from('.s11b-hub', { opacity: 0, scale: 0, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.3')
      .from('.s11b-data-items', { opacity: 0, y: 20, stagger: 0.1, duration: 0.5 }, '-=0.3')
  })

  return (
    <SlideLayout id="slide-11b" ref={ref}>
      <div className="s11b-header" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <p className="section-label">BOOKING DATA</p>
        <h2 className="section-title">예약 데이터가 한 곳으로 모이다</h2>
        <p className="section-subtitle">
          Organic 예약과 Paid 예약, 모든 유입 데이터가 닥프렌즈에 집결됩니다
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        {/* Top: Two columns - Organic & Paid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', width: '100%', maxWidth: '900px' }}>
          {/* Organic */}
          <div className="s11b-organic">
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              marginBottom: '1rem', paddingBottom: '0.75rem',
              borderBottom: '2px solid #e2e8f0',
            }}>
              <div style={{
                padding: '0.25rem 0.75rem', background: '#f1f5f9',
                borderRadius: '2rem', fontSize: '0.6875rem', fontWeight: 700, color: '#475569',
                letterSpacing: '0.05em',
              }}>ORGANIC</div>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>자연 유입 예약</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {ORGANIC.map(({ icon: Icon, label }) => (
                <div key={label} className="s11b-card" style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.875rem 1.25rem', background: '#f8fafc',
                  borderRadius: '0.75rem', border: '1px solid #e2e8f0',
                }}>
                  <Icon size={18} style={{ color: '#475569', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Paid */}
          <div className="s11b-paid">
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              marginBottom: '1rem', paddingBottom: '0.75rem',
              borderBottom: '2px solid var(--color-primary)',
            }}>
              <div style={{
                padding: '0.25rem 0.75rem', background: 'var(--color-primary)',
                borderRadius: '2rem', fontSize: '0.6875rem', fontWeight: 700, color: 'white',
                letterSpacing: '0.05em',
              }}>PAID</div>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>광고 유입 예약</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {PAID.map(({ icon: Icon, label }) => (
                <div key={label} className="s11b-card" style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.875rem 1.25rem', background: 'var(--color-primary-light)',
                  borderRadius: '0.75rem', border: '1px solid rgba(47,208,150,0.15)',
                }}>
                  <Icon size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Converging flow lines */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '6rem' }}>
          <div className="s11b-flow-line" style={{ width: '2px', height: '40px', background: 'linear-gradient(180deg, #e2e8f0, var(--color-primary))' }} />
          <div className="s11b-flow-line" style={{ width: '2px', height: '40px', background: 'linear-gradient(180deg, var(--color-primary), var(--color-primary))' }} />
        </div>

        {/* Center hub */}
        <div className="s11b-hub" style={{
          display: 'flex', alignItems: 'center', gap: '1.5rem',
          padding: '1.5rem 3rem', borderRadius: '1.25rem',
          background: 'var(--color-primary)', color: 'white',
          boxShadow: '0 16px 48px rgba(47, 208, 150, 0.25)',
        }}>
          <ConnectionSignal size={36} />
          <div>
            <p style={{ fontWeight: 800, fontSize: '1.25rem' }}>닥프렌즈</p>
            <p style={{ fontSize: '0.75rem', opacity: 0.8 }}>예약 데이터 통합 허브</p>
          </div>
        </div>

        {/* Data items collected */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '700px' }}>
          {['유입 플랫폼', '예약 경로', '광고 채널', '환자 유형', '예약 시간대', '진료과목'].map((item) => (
            <div key={item} className="s11b-data-items" style={{
              padding: '0.5rem 1.25rem', background: '#f8fafc',
              borderRadius: '2rem', border: '1px solid #e2e8f0',
              fontSize: '0.8125rem', fontWeight: 600, color: '#475569',
            }}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  )
}
