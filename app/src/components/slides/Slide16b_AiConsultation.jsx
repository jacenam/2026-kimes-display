import { useRef } from 'react'
import { Chat, Security, ArrowRight, Cognitive } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const chatMessages = [
  { type: 'ai', text: '김닥톡님, 오늘 임플란트 수술 고생 많으셨습니다.' },
  { type: 'ai', text: '마취가 풀리면 통증이 있을 수 있으니, 처방해 드린 약을 꼭 챙겨주세요.' },
  { type: 'user', text: '네, 술은 언제부터 마실 수 있나요?' },
  { type: 'ai', text: '술은 상처 치유를 늦추고 염증을 유발할 수 있어, 최소 2주간은 피해주시는 것이 가장 좋습니다!' },
]

const FEATURES = [
  { icon: Cognitive, title: '환자 맞춤 AI 비서', desc: '진료 이력과 처방 데이터를 바탕으로 정확한 의료 상담 제공' },
  { icon: Chat, title: '24시간 상담 가능', desc: '메시지 내 링크를 통해 언제든 AI 비서와 의료상담' },
]

export default function Slide16b_AiConsultation() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })

    tl.from('.s16b-header', { opacity: 0, y: 30, duration: 0.6 })
      .from('.s16b-feature', { opacity: 0, x: -30, stagger: 0.15, duration: 0.5 }, '-=0.2')
      .from('.s16b-privacy', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2')
      .from('.s16b-phone', { opacity: 0, y: 60, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .from('.s16b-bubble', { opacity: 0, y: 10, stagger: 0.15, duration: 0.4 }, '-=0.4')
  })

  return (
    <SlideLayout id="slide-16b" ref={ref}>
      <div className="s16b-header">
        <p className="section-label">AI CONSULTATION</p>
        <h2 className="section-title">닥톡AI 의료상담</h2>
        <p className="section-subtitle">
          환자가 메시지 링크를 통해 24시간 AI 비서와 의료상담을 할 수 있습니다
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
        {/* Left: Features + Privacy */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="s16b-feature" style={{
              display: 'flex', alignItems: 'flex-start', gap: '1rem',
              padding: '1.25rem', background: '#f8fafc', borderRadius: '1rem',
              border: '1px solid #e2e8f0',
            }}>
              <div style={{
                width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem',
                background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Icon size={20} style={{ color: 'white' }} />
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#1e293b', marginBottom: '0.25rem' }}>{title}</p>
                <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.5 }}>{desc}</p>
              </div>
            </div>
          ))}

          {/* Privacy — key differentiator */}
          <div className="s16b-privacy" style={{
            padding: '1.5rem', borderRadius: '1rem',
            background: 'var(--color-bg-dark)', color: 'white',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <Security size={22} style={{ color: 'var(--color-primary)' }} />
              <p style={{ fontWeight: 700, fontSize: '1rem' }}>독립적 AI 학습 구조</p>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, opacity: 0.8 }}>
              특정 원장님의 진료 데이터는 다른 의사의 AI 학습에 활용되지 않습니다.
              오직 해당 병원만의 독립적인 데이터로 관리되어, 환자는 "나를 기억해 주는 세심한 주치의"를 경험하게 됩니다.
            </p>
          </div>

          <p style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.5 }}>
            ※ 의료법 가이드라인을 철저히 준수하며, 원격 진단·처방은 포함되지 않습니다
          </p>
        </div>

        {/* Right: Phone mockup */}
        <div className="s16b-phone" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="phone-mockup">
            <div className="phone-mockup__header">
              <div style={{
                width: '2rem', height: '2rem', borderRadius: '50%',
                background: 'var(--color-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Chat size={14} style={{ color: 'white' }} />
              </div>
              <div>
                <p style={{ fontSize: '0.8125rem', fontWeight: 700 }}>닥프렌즈 치과의원</p>
                <p style={{ fontSize: '0.6875rem', color: 'var(--color-primary)', fontWeight: 600 }}>AI 상담 비서 연결됨</p>
              </div>
            </div>

            <div className="phone-mockup__body">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`chat-bubble chat-bubble--${msg.type} s16b-bubble`}>
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="phone-mockup__input">
              <div style={{
                flex: 1, padding: '0.5rem 0.75rem',
                background: '#f1f5f9', borderRadius: '1rem',
                fontSize: '0.75rem', color: '#94a3b8',
              }}>
                메시지를 입력하세요...
              </div>
              <div style={{
                width: '2rem', height: '2rem', borderRadius: '50%',
                background: 'var(--color-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <ArrowRight size={14} style={{ color: 'white' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
