import React from "react"
import { TestimonialCarouselSlideItem } from "../../../types/card-types"
import styles from "./TestimonialCarousel.module.scss"
import { shortenText } from "../../utils/shortenText"

interface TestimonialCarouselSlideProps {
  slide: TestimonialCarouselSlideItem
  customClass?: string
  id: string
}

const TestimonialCarouselSlide: React.FC<TestimonialCarouselSlideProps> = ({ slide, customClass, id }) => {
  const { name, title, review, company } = slide
  return (
    <div className={styles["card testimonial-carousel__slide no-scale"]} id={id}>
      <p className={styles["testimonial-carousel__quote"]}>{shortenText(slide.review, 200)}</p>
      <div className={styles["testimonial-carousel__info"]}>
        <img style={{ background: "#00000050" }} width="64" height="64" loading="lazy" src={slide.image} alt={slide.name} className={styles["testimonial-carousel__image"]} />
        <p className={styles["testimonial-carousel__name"]}>{slide.name}</p>
        <p className={styles["testimonial-carousel__title"]}>{slide.title}</p>
        <p className={styles["testimonial-carousel__title"]}>{slide.company}</p>
      </div>
    </div>
  )
}

export default TestimonialCarouselSlide
