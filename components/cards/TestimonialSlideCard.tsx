import React from "react"
import { TestimonialSlideItem } from "../../../types/card-types"
import { shortenText } from "../../utils/shortenText"

import styles from "./TestimonialSlideCard.module.scss"

interface TestimonialSlideCardProps {
  slide: TestimonialSlideItem
  customClass?: string
  id: string
  showAvatar?: boolean
}

const TestimonialSlideCard: React.FC<TestimonialSlideCardProps> = ({ slide, customClass, id, showAvatar = true }) => {
  return (
    <div className={styles["testimonial-slide__card"]} id={id}>
      <div className={styles["testimonial-slide__description-container"]}>
        <div>
          {showAvatar && slide.avatar && <img className={styles["testimonial-slide__image"]} loading="lazy" src={slide.avatar} alt={slide.client_name} />}
          {/* <p className={styles["testimonial-slide__quote"]}>“{shortenText(slide.quote, 200)}”</p> */}
          <p className={styles["testimonial-slide__quote"]}>“{slide.quote}”</p>
        </div>

        <div className={styles["testimonial-slide__client-info-container"]}>
          {/* <img className={styles["testimonial-slide__company-logo-short"]} src="/media/img/icon_tint.svg" alt="company logo short" /> */}
          <img className={styles["testimonial-slide__company-logo-short"]} src={slide.company_logo_icon} alt="company logo short" />
          {showAvatar ? (
            <div className={styles["testimonial-slide__client-info-container-wrap"]}>
              <p className={styles["testimonial-slide__name"]}>{slide.client_name}</p>
              <p className={styles["testimonial-slide__title"]}>{slide.title}</p>
              <p className={styles["testimonial-slide__title"]}>{slide.company}</p>
            </div>
          ) : (
            <div className={styles["testimonial-slide__client-info-container-wrap"]}>
              <p className={styles["testimonial-slide__name"]}>{slide.client_name}</p>
              <p className={styles["testimonial-slide__title"]}>{slide.title},</p>
              <p className={styles["testimonial-slide__title"]}>{slide.company}</p>
            </div>
          )}
        </div>
      </div>
      <div className={styles["testimonial-slide__company-logo-container"]} style={{ backgroundImage: `url(${slide.background_image})` }}>
        {slide.company_logo && <img className={styles["testimonial-slide__company-logo"]} src={slide.company_logo} alt="company logo" />}
      </div>
    </div>
  )
}

export default TestimonialSlideCard
