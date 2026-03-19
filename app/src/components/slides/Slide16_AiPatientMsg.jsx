import { useRef } from 'react'
import { Chat, Send, UserMultiple, TaskComplete, ArrowRight } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const FEATURES = [
  { num: 1, title: '비식별 진료·처방 데이터 분석', desc: '전자차트에서 수집된 데이터를 바탕으로 대상 자동 선별' },
  { num: 2, title: '의사별 진료 스타일 반영', desc: '각 의사 선생님의 진료 패턴에 맞춘 개인화 메시지 생성' },
  { num: 3, title: '자동 생성 및 발송', desc: '예약 확인, 문진, 재방문 유도 등 환자 상황별 자동 발송' },
]

const MSG_SAMPLES = [
  { time: '진료 당일', text: '김닥톡님, 오늘 임플란트 수술 고생 많으셨습니다. 처방해 드린 약을 꼭 챙겨주세요.' },
  { time: '3일 후', text: '김닥톡님, 수술 부위에 이상은 없으신가요? 불편하신 점이 있으시면 언제든 말씀해 주세요.' },
  { time: '2주 후', text: '김닥톡님, 경과 확인을 위한 내원일이 다가오고 있습니다. 예약을 확인해 주세요.' },
]

export default function Slide16_AiPatientMsg() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })

    tl.from('.s16-header', { opacity: 0, y: 30, duration: 0.6 })
      .from('.s16-feature', { opacity: 0, x: -30, stagger: 0.15, duration: 0.5 }, '-=0.2')
      .from('.s16-msg', { opacity: 0, y: 20, stagger: 0.12, duration: 0.5 }, '-=0.3')
  })

  return (
    <SlideLayout id="slide-16" ref={ref}>
      <div className="s16-header">
        <p className="section-label">AI PATIENT MESSAGE</p>
        <h2 className="section-title">닥톡AI 환자메세지</h2>
        <p className="section-subtitle">
          진료 후 스태프의 수동 문자 발송 업무를 AI가 대체합니다
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
        {/* Left: Features */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
            "나를 기억해 주는 세심한 주치의"
          </p>
          {FEATURES.map((f) => (
            <div key={f.num} className="s16-feature" style={{
              display: 'flex', alignItems: 'flex-start', gap: '1rem',
              padding: '1.25rem', background: '#f8fafc', borderRadius: '1rem',
              border: '1px solid #e2e8f0',
            }}>
              <div style={{
                width: '2.25rem', height: '2.25rem', borderRadius: '50%',
                background: 'var(--color-primary)', color: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: '0.875rem', flexShrink: 0,
              }}>{f.num}</div>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#1e293b', marginBottom: '0.25rem' }}>{f.title}</p>
                <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Message timeline */}
        <div>
          <p style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            자동 발송 메시지 예시
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {MSG_SAMPLES.map((msg, i) => (
              <div key={i} className="s16-msg" style={{
                padding: '1.25rem 1.5rem', background: 'var(--color-primary-light)',
                borderRadius: '1rem', border: '1px solid rgba(47,208,150,0.15)',
                position: 'relative',
              }}>
                <div style={{
                  display: 'inline-block', padding: '0.2rem 0.625rem',
                  background: 'var(--color-primary)', color: 'white',
                  borderRadius: '2rem', fontSize: '0.625rem', fontWeight: 700,
                  marginBottom: '0.5rem',
                }}>{msg.time}</div>
                <p style={{ fontSize: '0.875rem', color: '#1e293b', lineHeight: 1.6 }}>{msg.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
