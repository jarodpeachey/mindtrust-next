import React from "react"

import "../../styles/partials/_category-navigation.scss"

interface Props {
  post: boolean
  category: string
}

const VideoNavigation: React.FC<Props> = props => {
  return (
    // <div className="blog-navigation">
    //   {!props.post && (
    //     <a href="/videos" className={`blog-navigation--item ${props.category === "all" ? "selected" : ""}`}>
    //       All topics
    //     </a>
    //   )}
    //   <a href="/videos/strategy" className={`blog-navigation--item strategy ${props.category === "strategy" ? "selected" : ""}`}>
    //     Strategy
    //   </a>
    //   <a href="/videos/design" className={`blog-navigation--item design ${props.category === "design" ? "selected" : ""}`}>
    //     Design
    //   </a>
    //   <a href="/videos/development" className={`blog-navigation--item development ${props.category === "development" ? "selected" : ""}`}>
    //     Development
    //   </a>
    //   <a href="/videos/marketing" className={`blog-navigation--item marketing ${props.category === "marketing" ? "selected" : ""}`}>
    //     Marketing
    //   </a>
    //   <a href="/videos/production" className={`blog-navigation--item production ${props.category === "production" ? "selected" : ""}`}>
    //     Production
    //   </a>
    //   <a href="/videos/technology" className={`blog-navigation--item technology ${props.category === "technology" ? "selected" : ""}`}>
    //     Technology
    //   </a>
    // </div>
    <div></div>
  )
}

export default VideoNavigation
