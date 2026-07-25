/* Ortasında serif italik vurgu taşıyan başlıklar.
   `breaks` hero'daki üç satırlık düzen için: parçalar arasına <br> girer. */
export default function Headline({
  as: Tag = 'h2',
  content,
  className = '',
  accentClassName = 'ft-accent',
  breaks = false,
}) {
  const { before, accent, after } = content
  const separator = breaks ? <br /> : ' '

  return (
    <Tag className={className}>
      {before}
      {separator}
      <span className={accentClassName}>{accent}</span>
      {after ? (
        <>
          {separator}
          {after}
        </>
      ) : null}
    </Tag>
  )
}
