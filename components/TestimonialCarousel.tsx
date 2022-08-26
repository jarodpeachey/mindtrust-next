import React, { useState, useEffect } from "react"
import TestimonialCarouselSlide from "./cards/TestimonialCarouselSlide"
import { TestimonialCarouselSlideItem } from "../../types/card-types"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../styles/partials/_testimonial-carousel.scss"
import { graphql, useStaticQuery } from "gatsby"
// import "../../static/js/testimonialCarousel"

library.add(faChevronLeft, faChevronRight)

const TestimonialCarousel = ({slides}) => {
  return (
    <div className="testimonial-carousel">
      <div className="testimonial-carousel__scroll" id="scroll">
        <div className="container">
          <div id="testimonial-track" className={`testimonial-carousel__track`}>
            {slides.map((slide: any, index: number) => {
              return <TestimonialCarouselSlide slide={slide} key={index} id={`testimonial-slide-${index}`} />
            })}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="testimonial-carousel--arrows">
          <button className="testimonial-carousel__control--prev testimonial-carousel__control" aria-label="Previous Slide" id="carousel-edge">
            <img loading="lazy" src="/media/img/icons/icon--chevron-left.svg" width="11" height="21" alt="Left arrow" />
          </button>
          <button aria-label="Next Slide" className="testimonial-carousel__control--next testimonial-carousel__control">
            {/* <span className="testimonial-carousel__text">Next</span> */}
            <img loading="lazy" src="/media/img/icons/icon--chevron-right.svg" width="11" height="21" alt="Right arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCarousel
