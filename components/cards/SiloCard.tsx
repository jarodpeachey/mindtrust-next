import React from "react"
import "../../styles/partials/cards/_silo-card.scss"

interface SiloCardProps {
  link: boolean
  href: string
  isBlog: boolean
  icon: string
  alt: string
  title: string
  description: string
  category: string
}

const SiloCard: React.FC<SiloCardProps> = props => {
  return (
    <>
      {props.href ? (
        <a className={`card silo-card ${props.category}`} href={props.href}>
          <div className="card-heading">
            <img loading="lazy" src={props.icon} width="72" height="73" alt={props.alt} />
            <h3>{props.title}</h3>
          </div>
          <p>{props.description}</p>
          <button className="btn link card-link">{props.title} Teams</button>
        </a>
      ) : (
        <div className="card">
          <div className="card-heading">
            <img loading="lazy" src={props.icon} width="72" height="73" alt={props.alt} />
            <h3>{props.title}</h3>
          </div>
          <p>{props.description}</p>
        </div>
      )}
    </>
  )
}

export default SiloCard
