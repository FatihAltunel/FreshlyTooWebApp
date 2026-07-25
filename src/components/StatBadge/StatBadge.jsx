export default function StatBadge({ value, label, detail, className = '' }) {
  return (
    <article className={`stat-badge ${className}`.trim()}>
      <p className="stat-badge__value">{value}</p>
      <p>{label}</p>
      {detail ? <p className="stat-badge__detail">{detail}</p> : null}
    </article>
  )
}
