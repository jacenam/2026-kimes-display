export default function SlideLayout({ id, className = '', children }) {
  return (
    <section id={id} className={`slide ${className}`}>
      <div className="slide-content">
        {children}
      </div>
    </section>
  )
}
