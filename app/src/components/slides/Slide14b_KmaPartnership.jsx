import { useRef } from 'react'
import { Partnership, Cognitive, Calendar, CheckmarkFilled } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

export default function Slide14b_KmaPartnership() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })

    tl.from('.s14b-badge', { opacity: 0, scale: 0.8, duration: 0.8, ease: 'back.out(1.5)' })
      .from('.s14b-title', { opacity: 0, y: 30, duration: 0.7 }, '-=0.4')
      .from('.s14b-sub', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
      .from('.s14b-card', { opacity: 0, y: 20, stagger: 0.15, duration: 0.6 }, '-=0.2')
      .from('.s14b-launch', { opacity: 0, scale: 0.95, duration: 0.8, ease: 'power2.out' }, '-=0.2')
  })

  return (
    <SlideLayout id="slide-14b" ref={ref}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        {/* Partnership badge */}
        <div className="s14b-badge" style={{
          display: 'flex', alignItems: 'center', gap: '0.75rem',
          padding: '0.75rem 1.5rem', borderRadius: '3rem',
          background: 'var(--color-primary-light)', border: '1px solid rgba(47,208,150,0.2)',
          marginBottom: '2rem',
        }}>
          <Partnership size={22} style={{ color: 'var(--color-primary)' }} />
          <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
            공식 파트너십 체결
          </span>
          <CheckmarkFilled size={18} style={{ color: 'var(--color-primary)' }} />
        </div>

        {/* Title */}
        <h2 className="s14b-title" style={{
          fontSize: '2.75rem', fontWeight: 900, lineHeight: 1.3,
          color: '#0f172a', marginBottom: '1.25rem', maxWidth: '700px',
          letterSpacing: '-0.02em',
        }}>
          <span style={{ color: 'var(--color-primary)' }}>대한의사협회</span> 공식
          <br />
          AI 의료광고 자동심의 파트너
        </h2>

        <p className="s14b-sub" style={{
          fontSize: '1.0625rem', color: '#64748b', lineHeight: 1.7,
          maxWidth: '580px', marginBottom: '3rem',
        }}>
          닥프렌즈는 대한의사협회 의료광고심의위원회의 공식 파트너사로 선정되어,
          AI 기반 의료광고 자동심의 서비스를 공동으로 추진합니다.
        </p>

        {/* Info cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', width: '100%', maxWidth: '800px', marginBottom: '3rem' }}>
          <div className="s14b-card" style={{
            padding: '2rem 1.5rem', background: '#f8fafc', borderRadius: '1.25rem',
            border: '1px solid #e2e8f0', textAlign: 'center',
          }}>
            <Partnership size={28} style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }} />
            <p style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#1e293b', marginBottom: '0.375rem' }}>대한의사협회</p>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>의료광고심의위원회</p>
          </div>

          <div className="s14b-card" style={{
            padding: '2rem 1.5rem', background: '#f8fafc', borderRadius: '1.25rem',
            border: '1px solid #e2e8f0', textAlign: 'center',
          }}>
            <Cognitive size={28} style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }} />
            <p style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#1e293b', marginBottom: '0.375rem' }}>닥톡AI 자동심의</p>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>의료법·가이드라인 AI 학습</p>
          </div>

          <div className="s14b-card" style={{
            padding: '2rem 1.5rem', background: '#f8fafc', borderRadius: '1.25rem',
            border: '1px solid #e2e8f0', textAlign: 'center',
          }}>
            <Calendar size={28} style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }} />
            <p style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#1e293b', marginBottom: '0.375rem' }}>2026년 3분기</p>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>공식 서비스 런칭 예정</p>
          </div>
        </div>

        {/* Launch banner */}
        <div className="s14b-launch" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem',
          padding: '1.5rem 3rem', borderRadius: '1.25rem',
          background: 'var(--color-primary)', color: 'white',
          boxShadow: '0 16px 48px rgba(47, 208, 150, 0.25)',
          maxWidth: '600px', width: '100%',
        }}>
          <Cognitive size={28} />
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontWeight: 800, fontSize: '1.125rem' }}>닥톡AI 의료광고 자동심의</p>
            <p style={{ fontSize: '0.8125rem', opacity: 0.85 }}>2026년 3분기 공식 런칭</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
