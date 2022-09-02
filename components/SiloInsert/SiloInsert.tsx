import React from "react"
import TalentCarouselSlide from "../cards/TalentCarouselSlide"
import { TalentCarouselSlideItem } from "../../types/card-types"
// import "../styles/partials/_silo-insert.scss"
import { BRIDGE_APP_URL } from "../../config"
import { teamCards } from "../../data/designPage"
import TeamCard from "../cards/TeamCard"

// import "../public/js/talentCarousel
const SiloInsert = ({ title, subtitle, silo }) => {
  return (
    <div className={`silo-insert ${silo.toLowerCase()}`}>
      <div className="container relative">
        <div className="row vertical-center">
          <div className="col-xl-5 col-lg-6 col-md-6">
            <h1 className="section-heading display">
              {silo}
              <br /> Teams as a Service (TaaS)
            </h1>
            <p className="section-description">{subtitle}</p>
            <a href={`${BRIDGE_APP_URL}/request-project?silo=${silo.toLowerCase()}`} className="btn">
              Get started
            </a>
          </div>

          <div className="col-xl-4 col-md-6 offset-xl-2">
            <ul className="teamCards">
              {teamCards.map((m, i) => {
                return (
                  <li key={i}>
                    <TeamCard lazy={false} member={m} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiloInsert
