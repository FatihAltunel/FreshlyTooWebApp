export default function FeatureCard({ title, description, className = '', children }) {
  return (
    <article className={`feature-card ${className}`.trim()}>
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </article>
  )
}
