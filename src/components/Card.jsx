

export const Card = ({title, url}) => {
  return (
    <div className="card">
        <img className="card__gif" src={url} alt={title} />
        <p className="card__text">{title}</p>
    </div>
  )
}
