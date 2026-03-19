import { useRef } from 'react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

export default function Slide08c_SlotSync() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })

    tl.from('.s08c-header', { opacity: 0, y: 30, duration: 0.6 })
      .from('.s08c-image', { opacity: 0, y: 30, duration: 0.8, ease: 'power2.out' }, '-=0.2')
  })

  return (
    <SlideLayout id="slide-08c" ref={ref}>
      <div className="s08c-header" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
        <p className="section-label">SLOT SYNC</p>
        <h2 className="section-title">
          예약 가능 인원 수(슬롯) 동기화
        </h2>
        <p className="section-subtitle">
          병원 차트의 예약 가능 인원 수가 연동된 플랫폼에도 실시간으로 반영되어,<br />
          오프라인과 온라인 예약을 자동으로 관리합니다
        </p>
      </div>

      <div className="s08c-image" style={{
        borderRadius: '1rem', overflow: 'hidden',
        border: '2px solid var(--color-primary)',
        background: 'white',
        boxShadow: '0 8px 32px rgba(47, 208, 150, 0.15)',
        maxWidth: '960px', margin: '0 auto',
      }}>
        <img
          src={`${import.meta.env.BASE_URL}images/doctalk-slot-sync.png`}
          alt="예약 가능 인원 수(슬롯) 동기화"
          style={{
            width: '100%', height: 'auto', display: 'block',
          }}
        />
      </div>
    </SlideLayout>
  )
}
