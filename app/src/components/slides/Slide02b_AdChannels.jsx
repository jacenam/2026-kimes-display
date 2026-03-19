import { useRef } from 'react'
import { Store, Screen, Van, Globe, Search, Chat, FaceActivated } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const OFFLINE = [
  { icon: Van, label: '버스 광고', desc: '노선별 배너, 외부 래핑' },
  { icon: Store, label: '우편 배달 전단지', desc: '지역 타겟 DM 발송' },
  { icon: Screen, label: '아파트 엘리베이터 광고', desc: '디스플레이 영상 광고' },
]

const ONLINE = [
  { icon: Search, label: '네이버', desc: '검색광고, 플레이스, 블로그' },
  { icon: Store, label: '당근', desc: '동네 병원 광고' },
  { icon: Chat, label: '카카오', desc: '채널, 비즈보드 광고' },
  { icon: FaceActivated, label: '강남언니', desc: '시술/미용 전문 플랫폼' },
  { icon: Globe, label: '구글', desc: '검색광고, GDN 디스플레이' },
]

export default function Slide02b_AdChannels() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })

    tl.from('.s02b-header', { opacity: 0, y: 30, duration: 0.6 })
      .from('.s02b-group-label', { opacity: 0, y: 20, duration: 0.4, stagger: 0.15 }, '-=0.2')
      .from('.s02b-card', { opacity: 0, y: 30, scale: 0.95, stagger: 0.08, duration: 0.5, ease: 'power2.out' }, '-=0.3')
  })

  return (
    <SlideLayout id="slide-02b" ref={ref}>
      <div className="s02b-header">
        <p className="section-label">AD CHANNELS</p>
        <h2 className="section-title">병원이 활용하는 광고 채널</h2>
        <p className="section-subtitle">
          오프라인부터 온라인까지, 병원 마케팅의 현재 모습
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '3rem', alignItems: 'start' }}>
        {/* Offline */}
        <div>
          <p className="s02b-group-label" style={{
            fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.1em',
            color: '#94a3b8', textTransform: 'uppercase', marginBottom: '1rem',
            paddingBottom: '0.75rem', borderBottom: '2px solid #e2e8f0',
          }}>
            Offline
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {OFFLINE.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="s02b-card" style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                padding: '1.25rem 1.5rem',
                background: '#f8fafc', borderRadius: '1rem',
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s ease',
              }}>
                <div style={{
                  width: '3rem', height: '3rem', borderRadius: '0.75rem',
                  background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={22} style={{ color: '#475569' }} />
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#1e293b' }}>{label}</p>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Online */}
        <div>
          <p className="s02b-group-label" style={{
            fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.1em',
            color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '1rem',
            paddingBottom: '0.75rem', borderBottom: '2px solid var(--color-primary)',
          }}>
            Online
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {ONLINE.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="s02b-card" style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                padding: '1.25rem 1.5rem',
                background: 'var(--color-primary-light)', borderRadius: '1rem',
                border: '1px solid rgba(47, 208, 150, 0.15)',
                transition: 'all 0.3s ease',
              }}>
                <div style={{
                  width: '3rem', height: '3rem', borderRadius: '0.75rem',
                  background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={22} style={{ color: '#ffffff' }} />
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
    </SlideLayout>
  )
}
