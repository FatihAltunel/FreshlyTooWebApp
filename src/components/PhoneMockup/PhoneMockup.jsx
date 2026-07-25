import './PhoneMockup.css'

export default function PhoneMockup({
  imageSrc,
  imageAlt,
  title,
  caption,
  tone = 'green',
}) {
  return (
    <figure className={`phone-mockup phone-mockup--${tone}`}>
      <article className="phone-mockup__frame" aria-label={title}>
        <span className="phone-mockup__notch" aria-hidden="true"></span>
        <img src={imageSrc} alt={imageAlt} loading="lazy" />
      </article>
      {caption ? <figcaption className="phone-mockup__caption">{caption}</figcaption> : null}
    </figure>
  )
}
