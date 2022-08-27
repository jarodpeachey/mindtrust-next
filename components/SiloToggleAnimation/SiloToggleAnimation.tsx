import React from "react"
import "../styles/partials/_silo-toggle-animation.scss"
import TeamCard from "../cards/TeamCard"
import { Doughnut } from "react-chartjs-2"
import { data } from "../../data/pieData"

// interface ToggleAnimationProps {
//   slides:
// }

const ToggleAnimation = props => {
  let slides = props.slides
  let cards = props.cards
  let swapCards = props.swapCards

  return (
    <div className="silo-toggle">
      <div className="row">
        <div className="col-xl-4">
          <div className="toggle__left">
            {slides.map((slide, index) => {
              const key = `toggle__button-${index}`
              return (
                <div key={key} id={key} className={`toggle__button`}>
                  <p>{slide.title}</p>
                  <p>{slide.description}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="col-xl-8">
          <div className="toggle__right">
            <div className="pie">
              <div className="pie__inner">
                <div className="pie__percent">
                  <span className="silo-toggle-animation__number-1" data-animate="40">
                    0
                  </span>
                </div>
                <div className="pie__text">TaaS Hours</div>
                <img src="/media/img/icons/icon--mindtrust.svg" alt="MindTrust logo" />
              </div>
              <div className="pie__indicator">
                <div className="block"></div>
                Teams as a Service
              </div>

              <div className="doughnut"></div>
            </div>
            <div className="pie-vs">VS</div>
            <div className="pie-two">
              <div className="pie-two__inner">
                <div className="pie-two__percent">
                  <span className="silo-toggle-animation__number-2" data-animate="200">
                    0
                  </span>
                </div>
                <div className="pie-two__text">Full-Time Hours</div>
                <img src="/media/img/icons/icon--alert.svg" alt="Alert icon" />
              </div>
              <div className="pie__indicator">
                <div className="block"></div>
                Traditional Teams
              </div>

              <div className="doughnut-two"></div>
            </div>
            <div className={`toggle__slide`}>
              <h3>
                <span className="one" dangerouslySetInnerHTML={{ __html: slides[0].heading }} />
                <span className="two" dangerouslySetInnerHTML={{ __html: slides[1].heading }} />
                <span className="three" dangerouslySetInnerHTML={{ __html: slides[2].heading }} />
                <svg
                  version="1.1"
                  className="title__arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="100"
                  height="20"
                  viewBox="0 0 100 20"
                  xmlSpace="preserve"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" className="draw-arrow" d="M1, 19Q50 1, 99 9.5" />
                </svg>
              </h3>
              <img src="/media/img/laptop.svg" alt="Laptop image" className="laptop" />
              <div className="flex">
                <div className="team-cards">
                  {cards.map((card, index) => {
                    return (
                      <ul key={index} className={`team-card card ${index === 2 ? "swap-1 out" : index === 4 ? "swap-2 out" : ""}`}>
                        <li className="team-card__image">
                          <img width="48" height="48" style={{ background: "#00000050" }} src={card.image} alt="" role="presentation" />
                        </li>
                        <li className="team-card__title">{card.title}</li>
                        <li className="team-card__icon">
                          <img width="34" height="34" src={`/media/img/icons/silos/icon--${card.category}.svg`} alt="" role="presentation" className="one" />
                          <div className="team-card__title team-card__hours delay">
                            <strong>{card.hours}</strong> hours
                          </div>
                        </li>
                      </ul>
                    )
                  })}
                  {swapCards.map((card, index) => {
                    return (
                      <ul key={index} className={`team-card swap-${index + 1} in card`}>
                        <li className="team-card__image">
                          <img width="48" height="48" style={{ background: "#00000050" }} src={card.image} alt="" role="presentation" />
                        </li>
                        <li className="team-card__title">{card.title}</li>
                        <li className="team-card__icon">
                          <img width="34" height="34" src={`/media/img/icons/silos/icon--${card.category}.svg`} alt="" role="presentation" className="one" />
                          <div className="team-card__title team-card__hours delay">
                            <strong>{card.hours}</strong> hours
                          </div>
                        </li>
                      </ul>
                    )
                  })}
                  <svg
                    version="1.1"
                    className="arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="50"
                    height="100"
                    viewBox="0 0 25 100"
                    xmlSpace="preserve"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" className="draw-arrow tail-1" d="M1, 1Q15 6, 25 1" />
                    <path strokeLinecap="round" strokeLinejoin="round" className="draw-arrow tail-2" d="M1, 1Q6 15, 1 25" />
                    <path strokeLinecap="round" strokeLinejoin="round" className="st0 draw-arrow" d="M1, 99Q49 49, 1 1" />
                    <path strokeLinecap="round" strokeLinejoin="round" className="draw-arrow tail-3" d="M1, 99Q15 94, 25 99" />
                    <path strokeLinecap="round" strokeLinejoin="round" className="draw-arrow tail-4" d="M1, 99Q6 85, 1 75" />
                  </svg>
                  <svg
                    version="1.1"
                    className="arrow-2"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="216"
                    height="108"
                    viewBox="0 0 120 60"
                    xmlSpace="preserve"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" className="st0 draw-arrow" d="M40, 1Q150 0, 90 59" />
                    <path strokeLinecap="round" strokeLinejoin="round" className="draw-arrow tail-1" d="M90, 59L98, 59" />
                    <path strokeLinecap="round" strokeLinejoin="round" className="draw-arrow tail-2" d="M90, 59L90, 51" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToggleAnimation
