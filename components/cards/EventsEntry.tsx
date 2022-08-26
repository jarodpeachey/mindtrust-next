import React from "react"
import "../../styles/partials/_events-entry.scss"
import { formatDate } from "../../../static/js/utils/formatDate"

interface EventsEntryProps {
  href: string
  className?: string
  children: object
  category: string
  post: object
}

const EventsEntry: React.FC<EventsEntryProps> = props => {
  return (
    <div className={`events-entry`}>
      <div>
        <div className="events-entry__title">{props.post.title}</div>
        <div className="d-flex align-items-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.375 2.875H1.375V18.625H18.625V2.875H15.625"
              stroke="#66737F"
              stroke-width="1.3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.625 1.375H4.375V4.375H6.625V1.375Z"
              stroke="#66737F"
              stroke-width="1.3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.625 1.375H13.375V4.375H15.625V1.375Z"
              stroke="#66737F"
              stroke-width="1.3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path d="M6.625 2.875H13.375" stroke="#66737F" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1.375 6.625H18.625" stroke="#66737F" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <p>{formatDate(new Date(props.post.date).getTime())}</p>

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.5 22.9702C7.5 17.055 5 12.5441 5 9.4375C5 4.7776 7.8401 1 12.5 1C17.1599 1 20 4.7776 20 9.4375C20 12.5441 17.5 17.055 12.5 22.9702ZM18.875 9.43751C18.875 5.14999 16.3143 2.12501 12.5 2.12501C8.68565 2.12501 6.125 5.14999 6.125 9.43751C6.125 12.0288 8.23674 15.9974 12.5 21.2109C16.7633 15.9974 18.875 12.0288 18.875 9.43751ZM12.5 11.3125C10.9467 11.3125 9.6875 10.0533 9.6875 8.5C9.6875 6.9467 10.9467 5.6875 12.5 5.6875C14.0533 5.6875 15.3125 6.9467 15.3125 8.5C15.3125 10.0533 14.0533 11.3125 12.5 11.3125ZM12.5 10.1875C13.432 10.1875 14.1875 9.43199 14.1875 8.50001C14.1875 7.56803 13.432 6.81251 12.5 6.81251C11.568 6.81251 10.8125 7.56803 10.8125 8.50001C10.8125 9.43199 11.568 10.1875 12.5 10.1875Z"
              fill="#66737F"
            />
          </svg>

          <p>{props.post.location}</p>
        </div>
      </div>

      <div className="events-entry__right">
        <a href={`${props.post.slug}`} className="btn">See Details</a>
      </div>
    </div>
  )
}

export default EventsEntry
