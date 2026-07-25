import useInView from '../../hooks/useInView.js'
import './StatBar.css'

/* Etki bölümündeki ince ilerleme çubuğu: genişlik 0'dan hedefe, 1.2s,
   satır başına 120ms gecikmeyle. */
export default function StatBar({ percent, delay = 0 }) {
  const [ref, isInView] = useInView()

  return (
    <div className="stat-bar" ref={ref}>
      <div
        className="stat-bar__fill"
        style={{ width: isInView ? `${percent}%` : 0, transitionDelay: `${delay}ms` }}
      />
    </div>
  )
}
