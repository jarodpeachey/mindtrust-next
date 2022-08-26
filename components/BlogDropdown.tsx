import React from "react"

const BlogDropdown = () => {
  return (
    <div className="dropdown blogs">
      <div className="d-flex align-items-center">
        Blogs
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L6 6L11 1" stroke="black" stroke-width="2" stroke-linecap="round" />
        </svg>
      </div>
      <div className="dropdown__menu">
        <div className="dropdown__menu--inner">
          <div className="row">
            <div className="col-sm-6">
              <a href="/strategy/blog">
                <img src="/media/img/icons/silos/icon--strategy.svg" alt="" />
                Strategy
              </a>
            </div>
            <div className="col-sm-6">
              <a href="/design/blog">
                <img src="/media/img/icons/silos/icon--design.svg" alt="" />
                Design
              </a>
            </div>
            <div className="col-sm-6">
              <a href="/development/blog">
                <img src="/media/img/icons/silos/icon--development.svg" alt="" />
                Development
              </a>
            </div>
            <div className="col-sm-6">
              <a href="/marketing/blog">
                <img src="/media/img/icons/silos/icon--marketing.svg" alt="" />
                Marketing
              </a>
            </div>
            <div className="col-sm-6">
              <a href="/production/blog">
                <img src="/media/img/icons/silos/icon--production.svg" alt="" />
                Production
              </a>
            </div>
            <div className="col-sm-6">
              <a href="/technology/blog">
                <img src="/media/img/icons/silos/icon--technology.svg" alt="" />
                Technology
              </a>
            </div>
            <div className="col-sm-6">
              <a href="/future-of-work/blog">
                <img src="/media/img/icons/icon--mindtrust-solid.svg" alt="" />
                Future of Work
              </a>
            </div>
            <div className="col-sm-6">
              <a href="/mindtrustlabs/blog">
                <img src="/media/img/icons/icon--mindtrust-labs.svg" alt="" />
                MindTrust Labs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDropdown
