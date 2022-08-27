import React from "react"
import TalentCarouselSlide from "../cards/TalentCarouselSlide"
import { TalentCarouselSlideItemHubDB } from "../../types/card-types.ts"
import styles from "./TalentCarousel.module.scss"
// import "../../static/js/talentCarousel"

// const slideWidth = 250;

interface TalentCarouselProps {
  slides: TalentCarouselSlideItemHubDB[]
}

const TalentCarousel: React.FC<TalentCarouselProps> = props => {
  return (
    <div className={styles["talent-carousel"]}>
      <div className={styles["talent-carousel__mask"]} id="talent-carousel__mask">
        <div className={styles["talent-carousel__track"]} id="talent-carousel__track">
          {/* TODO:: we need to use <TalentCarouselSlide /> component for the dynamic rendering */}
          {/* <TalentCarouselSlide slide={props.slides[0]} /> */}
          {props.slides.map((slide: any, index: number) => {
            return <TalentCarouselSlide slide={slide} key={index} />
          })}
        </div>
      </div>
      <div className={`container ${styles["talent-carousel__buttons"]}`}>
        <button aria-label="Previous Slide" className={styles["talent-carousel__control--prev talent-carousel__control"]}>
          <img loading="lazy" src="/media/img/icons/icon--chevron-left.svg" width="11" height="21" alt="Left arrow" />
        </button>
        <button aria-label="Next Slide" className={styles["talent-carousel__control--next talent-carousel__control"]}>
          <img loading="lazy" src="/media/img/icons/icon--chevron-right.svg" width="11" height="21" alt="Right arrow" />
        </button>
      </div>
    </div>
  )
}

export default TalentCarousel
