import { useState, useEffect, useCallback, useRef } from 'react'

const AUTO_INTERVAL = 7000    // 7초마다 자동 넘김
const IDLE_TIMEOUT = 15000    // 마우스 15초 무활동 시 자동 재개

export default function useScrollSnap(containerRef, totalSlides = 19) {
  const [activeSlide, setActiveSlide] = useState(0)
  const autoTimerRef = useRef(null)
  const idleTimerRef = useRef(null)
  const isPausedRef = useRef(false)

  const scrollToSlide = useCallback((index) => {
    const container = containerRef.current
    if (!container) return
    const clamped = Math.max(0, Math.min(index, totalSlides - 1))
    container.scrollTo({
      top: window.innerHeight * clamped,
      behavior: 'smooth',
    })
  }, [containerRef, totalSlides])

  // 자동 슬라이드 시작
  const startAuto = useCallback(() => {
    isPausedRef.current = false
    if (autoTimerRef.current) clearInterval(autoTimerRef.current)
    autoTimerRef.current = setInterval(() => {
      if (isPausedRef.current) return
      setActiveSlide((prev) => {
        const next = prev + 1 >= totalSlides ? 0 : prev + 1
        scrollToSlide(next)
        return next
      })
    }, AUTO_INTERVAL)
  }, [totalSlides, scrollToSlide])

  // 자동 슬라이드 일시정지
  const pauseAuto = useCallback(() => {
    isPausedRef.current = true
    if (autoTimerRef.current) {
      clearInterval(autoTimerRef.current)
      autoTimerRef.current = null
    }
  }, [])

  // 마우스 움직임 → 일시정지 + 15초 뒤 자동 재개
  const resetIdleTimer = useCallback(() => {
    pauseAuto()
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
    idleTimerRef.current = setTimeout(() => {
      startAuto()
    }, IDLE_TIMEOUT)
  }, [pauseAuto, startAuto])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollPos = container.scrollTop
      const slideHeight = window.innerHeight
      const index = Math.round(scrollPos / slideHeight)
      setActiveSlide(index)
    }

    const handleKeyDown = (e) => {
      if (e.code === 'Space' || e.code === 'ArrowDown' || e.code === 'ArrowRight') {
        e.preventDefault()
        setActiveSlide((prev) => {
          const next = Math.min(prev + 1, totalSlides - 1)
          scrollToSlide(next)
          return next
        })
      } else if (e.code === 'ArrowUp' || e.code === 'ArrowLeft') {
        e.preventDefault()
        setActiveSlide((prev) => {
          const next = Math.max(prev - 1, 0)
          scrollToSlide(next)
          return next
        })
      }
    }

    const handleMouseMove = () => {
      resetIdleTimer()
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('mousemove', handleMouseMove)

    // 초기 자동 슬라이드 시작
    startAuto()

    return () => {
      container.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('mousemove', handleMouseMove)
      if (autoTimerRef.current) clearInterval(autoTimerRef.current)
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
    }
  }, [containerRef, totalSlides, scrollToSlide, startAuto, resetIdleTimer])

  return { activeSlide, scrollToSlide }
}
