import React from "react"
import "../../styles/partials/cards/_events-card.scss"
import { formatDate } from "../../../static/js/utils/formatDate"

interface EventsCardProps {
  href: string
  className?: string
  children: object
  category: string
  post: object
}

const EventsCard: React.FC<EventsCardProps> = props => {
  return (
    <a className={`post-card card ${props.className} ${props.category}`} href={props.href}>
      <div className="post-card__content">
        {/* <div className="post-card__category">{props.post.siloCategory[1] ? props.post.siloCategory[1].title : props.post.siloCategory[0].title}</div> */}
        <h3 className="post-card__title">{props.post.title}</h3>
        <div className="post-card__footer">
          {/* <img loading="lazy" src={node.author.image} /> */}
          <div className="post-card__date">{formatDate(new Date(props.post.date).getTime())}</div>
          <img loading="lazy" width="35" height="35" src={`/media/img/icons/icon--calendar-solid.svg`} alt="" />
        </div>
      </div>
    </a>
  )
}

export default EventsCard
