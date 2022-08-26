import React from "react"
import { formatURL } from "../utils/formatURL"

const IndustriesDropdown = () => {
  return (
    <div className="dropdown industries">
      <div className="d-flex align-items-center">
        Industries
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L6 6L11 1" stroke="black" stroke-width="2" stroke-linecap="round" />
        </svg>
      </div>
      <div className="dropdown__menu">
        <div className="dropdown__menu--inner">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <a href={`/blog/industries/${formatURL("Healthcare")}`}>Healthcare</a>
              <a href={`/blog/industries/${formatURL("Aerospace & Defense")}`}>Aerospace & Defense</a>
              <a href={`/blog/industries/${formatURL("Automotive")}`}>Automotive</a>
              <a href={`/blog/industries/${formatURL("Construction & Infrastructure")}`}>Construction & Infrastructure</a>
              <a href={`/blog/industries/${formatURL("Consumer Goods & Services")}`}>Consumer Goods & Services</a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href={`/blog/industries/${formatURL("Education")}`}>Education</a>
              <a href={`/blog/industries/${formatURL("Energy & Utilities")}`}>Energy & Utilities</a>
              <a href={`/blog/industries/${formatURL("Financial Services")}`}>Financial Services</a>
              <a href={`/blog/industries/${formatURL("Games, VR, AR, XR")}`}>Games, VR, AR, XR</a>
              <a href={`/blog/industries/${formatURL("Government")}`}>Government</a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href={`/blog/industries/${formatURL("Insurance")}`}>Insurance</a>
              <a href={`/blog/industries/${formatURL("Paper, Forest Products")}`}>Paper, Forest Products</a>
              <a href={`/blog/industries/${formatURL("Life Sciences")}`}>Life Sciences</a>
              <a href={`/blog/industries/${formatURL("Private Equity")}`}>Private Equity</a>
              <a href={`/blog/industries/${formatURL("Retail")}`}>Retail</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndustriesDropdown
