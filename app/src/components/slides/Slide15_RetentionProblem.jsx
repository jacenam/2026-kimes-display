import { useRef } from 'react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const cards = [
  {
    quote: '진료 후 늦은 시간까지 스태프가 남아 문자 대상을 선별하고 있습니다',
    role: '병원 원무팀',
    label: '대상 선별',
  },
  {
    quote: '환자별로 맞춤 문자를 작성하는 데 공수가 너무 많이 듭니다',
    role: '병원 마케팅 담당',
    label: '수동 문자 작성',
  },
  {
    quote: '예약 안내, 검사 후 안내사항 등 매일 반복되는 업무입니다',
    role: '병원 간호팀',
    label: '반복 안내 업무',
  },
]

export default function Slide15_RetentionProblem() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })

    tl.from('.s15-header', { opacity: 0, y: 30, duration: 0.6 })
      .from('.s15-card', { opacity: 0, y: 30, stagger: 0.12, duration: 0.6, ease: 'power2.out' }, '-=0.2')
      .from('.s15-bottom', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2')
  })

  return (
    <section id="slide-15" ref={ref} className="slide" style={{ background: 'white' }}>
      <div className="slide-content">
        {/* Header */}
        <div className="s15-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p className="section-label">RETENTION</p>
          <h2 style={{
            fontSize: '3rem', fontWeight: 900, color: '#0f172a',
            lineHeight: 1.25, letterSpacing: '-0.03em', marginBottom: '0.75rem',
          }}>
            신규 환자를 데려오는 것만큼 중요한 '재진 환자' 전환
          </h2>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem', marginBottom: '2.5rem',
        }}>
          {cards.map((card, i) => (
            <div key={i} className="s15-card" style={{
              background: '#fff1f2',
              borderRadius: '1.25rem',
              border: '1px solid #fecdd3',
              padding: '2rem 1.75rem',
              display: 'flex', flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '220px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
            >
              <div>
                <div style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.75rem', borderRadius: '2rem',
                  background: '#fda4af', marginBottom: '1.25rem',
                }}>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#9f1239' }}>
                    {card.label}
                  </span>
                </div>
                <p style={{
                  fontSize: '1.125rem', fontWeight: 700, color: '#0f172a',
                  lineHeight: 1.6,
                }}>
                  "{card.quote}"
                </p>
              </div>
              <p style={{
                fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600,
                marginTop: '1.5rem',
              }}>
                — {card.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
