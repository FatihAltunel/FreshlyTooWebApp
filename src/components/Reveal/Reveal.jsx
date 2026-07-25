import useInView from '../../hooks/useInView.js'

/* Görünüme girince açılan sarmalayıcı.
   `delay` kolonlar arası kademelendirme için (tasarımda .05s / .14s / .23s),
   `distance` başlangıç ötelemesi için (bölümlere göre 18–30px). */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  distance,
  className = '',
  style,
  children,
  ...rest
}) {
  const [ref, isInView] = useInView()

  const customProperties = {}
  if (delay) customProperties['--ft-reveal-delay'] = `${delay}s`
  if (distance) customProperties['--ft-reveal-distance'] = `${distance}px`

  return (
    <Tag
      ref={ref}
      className={`ft-reveal${isInView ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ ...customProperties, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
