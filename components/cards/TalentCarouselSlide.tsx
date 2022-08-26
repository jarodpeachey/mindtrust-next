import React from "react"
import { TalentCarouselSlideItem } from "../../../types/card-types"

interface TalentCarouselSlideProps {
  slide: TalentCarouselSlideItem
  customClass?: string
}

const TalentCarouselSlide: React.FC<TalentCarouselSlideProps> = ({ slide, customClass }) => {
  const { name, title, avatar, alt, previously, countryLogo, countryTitle } = slide
  return (
    <div className="card p-none talent-carousel__slide">
      <img loading="lazy" src={avatar} alt={alt} className="headshot" />

      <ul className="individual-details">
        <li className="name">{name}</li>
        <li className="title">{title}</li>
        <li className="previously-at">
          <span>Previously at:</span>
          <img src={previously} alt="Previous Company" />
        </li>
      </ul>

      <span className="country">
        <img loading="lazy" src={countryLogo} alt={countryTitle} />
      </span>
    </div>
  )
}

export default TalentCarouselSlide