import React from "react"
import { TalentCarouselSlideItemHubDB } from "../../../types/card-types"

interface TalentCarouselSlideProps {
  slide: TalentCarouselSlideItemHubDB
  customClass?: string
}

const TalentCarouselSlide: React.FC<TalentCarouselSlideProps> = ({ slide, customClass }) => {
  const { full_name, position, avatar, previously_at, company_logo, country } = slide
  return (
    <div className="card p-none talent-carousel__slide">
      <img loading="lazy" src={avatar} alt={position} className="headshot" />

      <ul className="individual-details">
        <li className="name">{full_name}</li>
        <li className="title">{position}</li>
        <li className="previously-at">
          <span>Previously at:</span>
          <img src={company_logo} alt="Previous Company" />
        </li>
      </ul>

      <span className="country">
        {/* <img loading="lazy" src={`/media/img/flags/${country_logo}`} alt={countryTitle} /> */}
        <img loading="lazy" src={`/media/img/flags/${country?.name}`} alt={country?.name.split(".svg")[0]} />
      </span>
    </div>
  )
}

export default TalentCarouselSlide
