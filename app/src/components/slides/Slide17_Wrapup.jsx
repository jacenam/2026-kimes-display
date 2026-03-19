import { useRef } from 'react'
import { ConnectionSignal, Growth, Analytics, FavoriteFilled, ArrowRight } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const LIFECYCLE = [
  {
    phase: '신규 환자 유입',
    service: '닥톡예약',
    desc: '파편화된 플랫폼 예약을 하나로 통합',
    icon: ConnectionSignal,
    color: 'var(--color-primary)',
  },
  {
    phase: '광고 성과 추적',
    service: '닥톡광고',
    desc: '광고 노출부터 내원까지 실시간 추적',
    icon: Analytics,
    color: 'var(--color-primary)',
  },
  {
    phase: '재진 환자 전환',
    service: '닥톡AI',
    desc: 'AI 환자메세지 + AI 의료상담으로 세심한 케어',
    icon: FavoriteFilled,
    color: 'var(--color-primary)',
  },
]

export default function Slide17_Wrapup() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })

    tl.from('.s17w-header', { opacity: 0, y: 30, duration: 0.7 })
      .from('.s17w-phase', { opacity: 0, y: 30, stagger: 0.2, duration: 0.6, ease: 'power2.out' }, '-=0.3')
      .from('.s17w-arrow', { opacity: 0, scaleX: 0, stagger: 0.15, duration: 0.4 }, '-=0.8')
      .from('.s17w-cycle', { opacity: 0, scale: 0.9, duration: 0.8, ease: 'back.out(1.4)' }, '-=0.3')
      .from('.s17w-bottom', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
  })

  return (
    <SlideLayout id="slide-17w" ref={ref}>
      <div className="s17w-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p className="section-label">WRAP UP</p>
        <h2 className="section-title">환자의 전 생애주기를 함께합니다</h2>
        <p className="section-subtitle">
          유입부터 관계 형성까지, 닥프렌즈는 모든 단계를 빠르게 고도화하고 있습니다
        </p>
      </div>

      {/* Lifecycle flow */}
      <div style={{
        display: 'flex', alignItems: 'stretch', justifyContent: 'center', gap: '0',
        marginBottom: '3rem',
      }}>
        {LIFECYCLE.map((item, i) => {
          const Icon = item.icon
          return (
            <div key={item.service} style={{ display: 'flex', alignItems: 'center' }}>
              <div className="s17w-phase" style={{
                padding: '2rem 2.5rem', background: '#f8fafc', borderRadius: '1.25rem',
                border: '1px solid #e2e8f0', textAlign: 'center', width: '240px',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem',
              }}>
                <div style={{
                  width: '3.5rem', height: '3.5rem', borderRadius: '1rem',
                  background: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={24} style={{ color: 'white' }} />
                </div>
                <div>
                  <p style={{ fontSize: '0.6875rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>{item.phase}</p>
                  <p style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.375rem' }}>{item.service}</p>
                  <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </div>
              {i < LIFECYCLE.length - 1 && (
                <div className="s17w-arrow" style={{
                  display: 'flex', alignItems: 'center', padding: '0 1rem',
                  color: 'var(--color-primary)',
                }}>
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Cycle indicator */}
      <div className="s17w-cycle" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem',
        marginBottom: '2rem',
      }}>
        <div style={{
          height: '2px', width: '80px',
          background: 'linear-gradient(90deg, transparent, var(--color-primary))',
        }} />
        <div style={{
          padding: '0.625rem 1.5rem', borderRadius: '3rem',
          background: 'var(--color-primary)', color: 'white',
          fontSize: '0.8125rem', fontWeight: 700,
          display: 'flex', alignItems: 'center', gap: '0.5rem',
        }}>
          <Growth size={18} />
          선순환 구조
        </div>
        <div style={{
          height: '2px', width: '80px',
          background: 'linear-gradient(90deg, var(--color-primary), transparent)',
        }} />
      </div>

      {/* Bottom message */}
      <div className="s17w-bottom" style={{
        textAlign: 'center', maxWidth: '640px', margin: '0 auto',
      }}>
        <p style={{
          fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.7,
        }}>
          닥프렌즈는 <span style={{ color: 'var(--color-primary)' }}>닥톡예약</span>으로 신규 환자를 유입하고,{' '}
          <span style={{ color: 'var(--color-primary)' }}>닥톡광고</span>로 성과를 추적하며,{' '}
          <span style={{ color: 'var(--color-primary)' }}>닥톡AI</span>로 세심하게 케어하여
          진성 환자로 전환하는 선순환 구조를 빠르게 고도화하고 있습니다.
        </p>
      </div>
    </SlideLayout>
  )
}
