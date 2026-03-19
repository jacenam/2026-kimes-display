import { useRef } from 'react'
import { ArrowRight, ViewOff } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const FLOW = [
  { label: '광고 집행 신청', desc: '병원·광고대행사', color: '#334155' },
  { label: '광고 집행', desc: '플랫폼 광고 게재', color: '#334155' },
  { label: '타겟 환자 노출', desc: '플랫폼 내 광고 노출', color: '#334155' },
  { label: '광고 클릭', desc: '환자가 광고 클릭', color: '#334155' },
]

const UNKNOWN = [
  { label: '예약', question: '실제 예약까지 이어졌는가?' },
  { label: '내원', question: '환자가 직접 병원에 왔는가?' },
]

export default function Slide10_TrackingOverview() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })

    tl.from('.s10-header', { opacity: 0, y: 30, duration: 0.6 })

    // Known flow steps
    tl.from('.s10-step', { opacity: 0, x: -20, stagger: 0.1, duration: 0.4 }, '-=0.2')
    tl.from('.s10-arrow', { opacity: 0, scaleX: 0, stagger: 0.08, duration: 0.3 }, '-=0.8')

    // Measurable badge
    tl.from('.s10-measurable', { opacity: 0, y: 10, duration: 0.4 }, '-=0.2')

    // Break point
    tl.from('.s10-break', { opacity: 0, scale: 0.8, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.1')

    // Unknown steps
    tl.from('.s10-unknown', { opacity: 0, x: 20, stagger: 0.12, duration: 0.5 }, '-=0.2')

    // Bottom callout
    tl.from('.s10-callout', { opacity: 0, y: 20, duration: 0.5 }, '-=0.1')
  })

  return (
    <SlideLayout id="slide-10" ref={ref}>
      {/* Header */}
      <div className="s10-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p className="section-label">AD TRACKING PROBLEM</p>
        <h2 className="section-title">광고의 '진짜 성과'를 알 수 없는 구조</h2>
        <p className="section-subtitle" style={{ marginBottom: 0 }}>
          기존 광고 집행 플로우에서는 클릭 이후의 환자 여정을 추적할 수 없습니다
        </p>
      </div>

      {/* Flow diagram */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 0, marginBottom: '1.5rem', flexWrap: 'nowrap',
      }}>
        {/* Known steps */}
        {FLOW.map((step, i) => (
          <div key={step.label} style={{ display: 'flex', alignItems: 'center' }}>
            <div className="s10-step" style={{
              padding: '1.5rem 1.75rem',
              background: '#f8fafc',
              borderRadius: '1rem',
              border: '1px solid #e2e8f0',
              textAlign: 'center',
              minWidth: '140px',
            }}>
              <p style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#0f172a', marginBottom: '0.25rem' }}>
                {step.label}
              </p>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{step.desc}</p>
            </div>
            {i < FLOW.length - 1 && (
              <div className="s10-arrow" style={{ padding: '0 0.5rem', color: '#cbd5e1', flexShrink: 0 }}>
                <ArrowRight size={20} />
              </div>
            )}
          </div>
        ))}

        {/* Break — dashed wall */}
        <div className="s10-break" style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          margin: '0 1rem', flexShrink: 0,
        }}>
          <div style={{
            width: '3px', height: '5rem',
            backgroundImage: 'repeating-linear-gradient(180deg, #e11d48 0, #e11d48 6px, transparent 6px, transparent 12px)',
            borderRadius: '2px',
          }} />
          <p style={{
            fontSize: '0.6875rem', fontWeight: 700, color: '#e11d48',
            marginTop: '0.375rem', whiteSpace: 'nowrap',
          }}>
            추적 불가
          </p>
        </div>

        {/* Unknown steps */}
        {UNKNOWN.map((step, i) => (
          <div key={step.label} style={{ display: 'flex', alignItems: 'center' }}>
            <div className="s10-unknown" style={{
              padding: '1.5rem 1.75rem',
              background: '#fff1f2',
              borderRadius: '1rem',
              border: '2px dashed #fecdd3',
              textAlign: 'center',
              minWidth: '140px',
              opacity: 0.85,
            }}>
              <ViewOff size={20} style={{ color: '#e11d48', marginBottom: '0.375rem' }} />
              <p style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#e11d48', marginBottom: '0.25rem' }}>
                {step.label}
              </p>
              <p style={{ fontSize: '0.6875rem', color: '#9f1239', lineHeight: 1.4 }}>
                {step.question}
              </p>
            </div>
            {i < UNKNOWN.length - 1 && (
              <div className="s10-arrow" style={{ padding: '0 0.5rem', color: '#fecdd3', flexShrink: 0 }}>
                <ArrowRight size={20} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Measurable vs unmeasurable labels */}
      <div style={{
        display: 'flex', justifyContent: 'center', gap: '2rem',
        marginBottom: '2.5rem',
      }}>
        <div className="s10-measurable" style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
        }}>
          <span style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: '#334155', flexShrink: 0,
          }} />
          <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#64748b' }}>
            측정 가능 — 노출 수(Imp), 클릭 수(Clicks)
          </span>
        </div>
        <div className="s10-measurable" style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
        }}>
          <span style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: '#e11d48', flexShrink: 0,
          }} />
          <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#e11d48' }}>
            측정 불가 — 예약 전환(Conv), 실제 내원
          </span>
        </div>
      </div>

      {/* Bottom callout */}
      <p className="s10-callout" style={{
        textAlign: 'center', fontSize: '1.125rem', fontWeight: 600,
        color: '#64748b', lineHeight: 1.7,
      }}>
        광고비를 쓰고 있지만, 그 광고가 실제 환자를 데려왔는지{' '}
        <strong style={{ color: '#0f172a' }}>알기 어렵습니다</strong>
      </p>
    </SlideLayout>
  )
}
