import { useRef } from 'react'
import { Phone, WatsonHealthStackedMove, Globe, Hospital, WarningAlt, ArrowRight } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const OFFLINE_CHANNELS = [
  { icon: Phone, label: '전화 예약', desc: '진료 시간 중 응대 필요' },
  { icon: WatsonHealthStackedMove, label: '직접 방문', desc: '대기 시간 발생' },
]

const ONLINE_CHANNELS = [
  { icon: Globe, label: '홈페이지 예약', desc: '자체 운영 필요' },
  { icon: Globe, label: '네이버 예약', desc: 'EMR 미연동' },
  { icon: Globe, label: '카카오 예약', desc: 'EMR 미연동' },
  { icon: Globe, label: '당근 예약', desc: 'EMR 미연동' },
  { icon: Globe, label: '강남언니', desc: 'EMR 미연동' },
]

export default function Slide05b_FragmentedBooking() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })

    tl.from('.s05b-header', { opacity: 0, y: 30, duration: 0.6 })
      .from('.s05b-offline', { opacity: 0, x: -30, duration: 0.6 }, '-=0.2')
      .from('.s05b-online', { opacity: 0, x: 30, duration: 0.6 }, '-=0.4')
      .from('.s05b-card', { opacity: 0, y: 20, scale: 0.95, stagger: 0.06, duration: 0.5, ease: 'power2.out' }, '-=0.3')
      .from('.s05b-center', { opacity: 0, scale: 0.8, duration: 0.6, ease: 'back.out(1.5)' }, '-=0.4')
      .from('.s05b-bottom', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2')
  })

  return (
    <SlideLayout id="slide-05b" ref={ref}>
      <div className="s05b-header" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <p className="section-label">FRAGMENTED BOOKING</p>
        <h2 className="section-title">파편화된 병원 예약 창구</h2>
        <p className="section-subtitle">
          오프라인과 온라인, 흩어진 예약 경로가 병원 운영의 비효율을 만듭니다
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '2rem', alignItems: 'center' }}>
        {/* Offline */}
        <div className="s05b-offline">
          <p style={{
            fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.1em',
            color: '#94a3b8', textTransform: 'uppercase', marginBottom: '1rem',
            paddingBottom: '0.75rem', borderBottom: '2px solid #e2e8f0', textAlign: 'center',
          }}>
            Offline
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {OFFLINE_CHANNELS.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="s05b-card" style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                padding: '1.25rem 1.5rem',
                background: '#f8fafc', borderRadius: '1rem', border: '1px solid #e2e8f0',
              }}>
                <div style={{
                  width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem',
                  background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Icon size={20} style={{ color: '#475569' }} />
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#1e293b' }}>{label}</p>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center — Hospital icon with warning */}
        <div className="s05b-center" style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem',
        }}>
          <div style={{
            width: '100px', height: '100px', borderRadius: '50%',
            background: '#fff7ed', border: '3px dashed #f59e0b',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Hospital size={36} style={{ color: '#f59e0b' }} />
          </div>
          <p style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#1e293b', textAlign: 'center' }}>병원</p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
            <WarningAlt size={16} style={{ color: '#ef4444' }} />
            <p style={{ fontSize: '0.6875rem', color: '#ef4444', fontWeight: 600 }}>관리 포인트 분산</p>
          </div>
        </div>

        {/* Online */}
        <div className="s05b-online">
          <p style={{
            fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.1em',
            color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '1rem',
            paddingBottom: '0.75rem', borderBottom: '2px solid var(--color-primary)', textAlign: 'center',
          }}>
            Online
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {ONLINE_CHANNELS.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="s05b-card" style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                padding: '1rem 1.25rem',
                background: 'var(--color-primary-light)', borderRadius: '1rem',
                border: '1px solid rgba(47, 208, 150, 0.15)',
              }}>
                <div style={{
                  width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem',
                  background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Icon size={20} style={{ color: '#ffffff' }} />
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#1e293b' }}>{label}</p>
                  <p style={{ fontSize: '0.75rem', color: '#64748b' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom message */}
      <div className="s05b-bottom" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
        marginTop: '2rem', padding: '1.25rem', background: '#fef2f2',
        borderRadius: '1rem', border: '1px solid #fecaca',
      }}>
        <WarningAlt size={20} style={{ color: '#ef4444', flexShrink: 0 }} />
        <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#991b1b' }}>
          예약 창구가 늘어날수록, 관리 비용은 올라가고 데이터는 더 흩어집니다
        </p>
      </div>
    </SlideLayout>
  )
}
