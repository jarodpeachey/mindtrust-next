import React from "react"

import "../../styles/partials/_category-navigation.scss"

interface Props {
  post: boolean
  category: string
}

const EventsNavigation: React.FC<Props> = props => {
  return <div></div>
  // return (
  //   <div className="blog-navigation">
  //     {!props.post && (
  //       <a href="/events" className={`blog-navigation--item ${props.category === "all" ? "selected" : ""}`}>
  //         All
  //       </a>
  //     )}
  //     <a href="/events/webinars" className={`blog-navigation--item  ${props.category === "webinar" ? "selected" : ""}`}>
  //       Webinar
  //     </a>
  //     <a href="/events/industry-event" className={`blog-navigation--item  ${props.category === "industry-event" ? "selected" : ""}`}>
  //       Industry Event
  //     </a>
  //     <a href="/events/guest-speaker" className={`blog-navigation--item  ${props.category === "guest-speaker" ? "selected" : ""}`}>
  //       Guest Speaker
  //     </a>
  //     <a href="/events/insights" className={`blog-navigation--item  ${props.category === "insights" ? "selected" : ""}`}>
  //       Insights
  //     </a>
  //   </div>
  // )
}

export default EventsNavigation
