import React from "react"
import TalentCarouselSlide from "./cards/TalentCarouselSlide"
import { TalentCarouselSlideItemHubDB } from "../../types/card-types"
import "../styles/partials/_talent-carousel.scss"
// import "../../static/js/talentCarousel"

// const slideWidth = 250;

interface TalentCarouselProps {
  slides: TalentCarouselSlideItemHubDB[]
}

const TalentCarousel: React.FC<TalentCarouselProps> = props => {
  return (
    <div className="talent-carousel">
      <div className="talent-carousel__mask" id="talent-carousel__mask">
        <div className="talent-carousel__track" id="talent-carousel__track">
          {/* TODO:: we need to use <TalentCarouselSlide /> component for the dynamic rendering */}
          {/* <TalentCarouselSlide slide={props.slides[0]} /> */}
          {props.slides.map((slide: any, index: number) => {
            return <TalentCarouselSlide slide={slide} key={index} />
          })}
        </div>
      </div>
      <div className="talent-carousel__buttons container">
        <button aria-label="Previous Slide" className="talent-carousel__control--prev talent-carousel__control">
          <img loading="lazy" src="/media/img/icons/icon--chevron-left.svg" width="11" height="21" alt="Left arrow" />
        </button>
        <button aria-label="Next Slide" className="talent-carousel__control--next talent-carousel__control">
          <img loading="lazy" src="/media/img/icons/icon--chevron-right.svg" width="11" height="21" alt="Right arrow" />
        </button>
      </div>
    </div>
  )
}

export default TalentCarousel
