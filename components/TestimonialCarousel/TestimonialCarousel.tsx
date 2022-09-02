import React, { useState, useEffect } from "react"
import TestimonialCarouselSlide from "./TestimonialCarouselSlide"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import styles from "./TestimonialCarousel.module.scss"
// import "../public/js/testimonialCarousel"

library.add(faChevronLeft, faChevronRight)

const TestimonialCarousel = ({slides}) => {
  return (
    <div className={styles["testimonial-carousel"]}>
      <div className={styles["testimonial-carousel__scroll"]} id="scroll">
        <div className="container">
          <div id="testimonial-track" className={styles["testimonial-carousel__track"]}>
            {slides.map((slide: any, index: number) => {
              return <TestimonialCarouselSlide slide={slide} key={index} id={`testimonial-slide-${index}`} />
            })}
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles["testimonial-carousel--arrows"]}>
          <button className={styles["testimonial-carousel__control--prev testimonial-carousel__control"]} aria-label="Previous Slide" id="carousel-edge">
            <img loading="lazy" src="/media/img/icons/icon--chevron-left.svg" width="11" height="21" alt="Left arrow" />
          </button>
          <button aria-label="Next Slide" className={styles["testimonial-carousel__control--next testimonial-carousel__control"]}>
            {/* <span className={styles["testimonial-carousel__text"]}>Next</span> */}
            <img loading="lazy" src="/media/img/icons/icon--chevron-right.svg" width="11" height="21" alt="Right arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCarousel
