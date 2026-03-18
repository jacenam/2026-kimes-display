// Reusable animated text component (scroll-triggered typography animations)
export default function AnimatedText({ children, className = '' }) {
  return (
    <span className={className}>
      {children}
    </span>
  )
}
