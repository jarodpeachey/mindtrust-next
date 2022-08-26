import React from "react"
import "../../styles/partials/_news-entry.scss"
import { formatDate } from "../../../static/js/utils/formatDate"

interface NewsEntryProps {
  href: string
  className?: string
  children: object
  category: string
  post: object
}

const NewsEntry: React.FC<NewsEntryProps> = props => {
  return (
    <a className={`news-entry`} href={props.href}>
      <div className="news-entry__title">{props.post.htmlTitle}</div>
      <div className="news-entry__right">
        <strong>{new Date(props.post.publishDate).getDate()}</strong>
        <p>{formatDate(new Date(props.post.publishDate).getTime(), true)}</p>
      </div>
    </a>
  )
}

export default NewsEntry