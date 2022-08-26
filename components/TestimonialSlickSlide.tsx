import React from "react"

import TestimonialSlideCard from "./cards/TestimonialSlideCard"
import "../styles/partials/_testimonial-slider.scss"

const TestimonialSlickSlide = ({ slides, showAvatar = true }) => {
  return (
    <div className="testimonial-slider_container">
      <div className="testimonial-slider__main-container">
        <div className="tertiary-testimonial-slick-slide">
          {slides.map((slide: any, index: number) => (
            <TestimonialSlideCard slide={slide} key={index} id={`testimonial-slide-${index}`} showAvatar={showAvatar} />
          ))}
        </div>
      </div>
      <div className="testimonials__carousel-arrow-group">
        <button className="tertiary_slide__prev-arrow">
          <img loading="lazy" src="/media/img/icons/icon--slide-arrow-left.svg" />
        </button>
        <button className="tertiary_slide__next-arrow">
          <img loading="lazy" src="/media/img/icons/icon--slide-arrow-right.svg" />
        </button>
      </div>
    </div>
  )
}

export default TestimonialSlickSlide
