export default function Button({
  children,
  href,
  ariaLabel,
  onClick,
  className = '',
  variant = 'primary',
  type = 'button',
  ariaPressed,
  title,
}) {
  const classes = `button button--${variant} ${className}`.trim()

  if (href) {
    return (
      <a className={classes} href={href} aria-label={ariaLabel} title={title}>
        {children}
      </a>
    )
  }

  return (
    <button
      className={classes}
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      aria-pressed={ariaPressed}
      title={title}
    >
      {children}
    </button>
  )
}
