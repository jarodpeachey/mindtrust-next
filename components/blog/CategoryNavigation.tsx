import React, { useState, useEffect } from "react"

import "../../styles/partials/_category-navigation.scss"

interface Props {
  post: boolean
}

const CategoryNavigation: React.FC<Props> = props => {
  return (
    <div className="blog-navigation">
      {!props.post && (
        <a href="/blog" className={`blog-navigation--item ${props.category === "all" ? "selected" : ""}`}>
          All topics
        </a>
      )}
      <a href="/blog/strategy" className={`blog-navigation--item strategy ${props.category === "strategy" ? "selected" : ""}`}>
        Strategy
      </a>
      <a href="/blog/design" className={`blog-navigation--item design ${props.category === "design" ? "selected" : ""}`}>
        Design
      </a>
      <a href="/blog/development" className={`blog-navigation--item development ${props.category === "development" ? "selected" : ""}`}>
        Development
      </a>
      <a href="/blog/marketing" className={`blog-navigation--item marketing ${props.category === "marketing" ? "selected" : ""}`}>
        Marketing
      </a>
      <a href="/blog/production" className={`blog-navigation--item production ${props.category === "production" ? "selected" : ""}`}>
        Production
      </a>
      <a href="/blog/technology" className={`blog-navigation--item technology ${props.category === "technology" ? "selected" : ""}`}>
        Technology
      </a>
    </div>
  )
}

export default CategoryNavigation
