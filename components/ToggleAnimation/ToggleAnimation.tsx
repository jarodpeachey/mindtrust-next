import React from "react"
import Script from '../../node_modules/next/script'

// interface ToggleAnimationProps {
//   slides:
// }

const ToggleAnimation = props => {
  let slides = props.slides

  return (
    <div className="toggle">
      <Script src="/js/toggle-animation.js" strategy="lazyOnload" />
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
                <div className="pie__percent"><span className="toggle-animation__number" data-animate="100">0</span>%</div>
                <div className="pie__text">Team Efficiency</div>
                <img src="/media/img/icons/icon--mindtrust.svg" alt="MindTrust logo" />
              </div>

              <div className="doughnut"></div>
            </div>
            <div className={`toggle__slide`}>
              <h3>
                <span className="one">Your project</span>
                <span className="two">Your MindTrust comes together</span>
                <span className="three">You get results</span>
              </h3>
              <img src="/media/img/laptop.svg" alt="Laptop image" className="laptop" />
              <div className="flex">
                <div className="splash">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="teamCards">
                  <ul className="teamCard card">
                    <li className="teamCard__image">
                      <img width="48" height="48" src="/media/img/icons/silos/icon--strategy.svg" alt="" role="presentation" className="one" />
                      <img
                        width="48"
                        height="48"
                        src="https://assets.mindtrust.com/img/strategy/marketing-strategist.jpg?auto=format"
                        alt=""
                        role="presentation"
                        className="two"
                      />
                    </li>
                    <li className="teamCard__title">
                      <span className="one">Strategy</span>
                      <span className="two">Marketing Strategist</span>
                    </li>
                    <li className="teamCard__icon">
                      <img width="34" height="34" src="/media/img/icons/silos/icon--strategy.svg" alt="" role="presentation" className="two" />
                      <img width="34" height="34" src="/media/img/icons/icon--checkmark--blue.svg" alt="" role="presentation" className="three" />
                    </li>
                  </ul>
                  <ul className="teamCard card">
                    <li className="teamCard__image">
                      <img width="48" height="48" src="/media/img/icons/silos/icon--design.svg" alt="" role="presentation" className="one" />
                      <img
                        width="48"
                        height="48"
                        src="https://assets.mindtrust.com/img/design/creative-director.jpg?auto=format"
                        alt=""
                        role="presentation"
                        className="two"
                      />
                    </li>

                    <li className="teamCard__title">
                      <span className="one">Design</span>
                      <span className="two">Creative Director</span>
                    </li>

                    <li className="teamCard__icon">
                      <img width="34" height="34" src="/media/img/icons/silos/icon--design.svg" alt="" role="presentation" className="two" />
                      <img width="34" height="34" src="/media/img/icons/icon--checkmark--blue.svg" alt="" role="presentation" className="three" />
                    </li>
                  </ul>
                  <ul className="teamCard card">
                    <li className="teamCard__image">
                      <img width="48" height="48" src="/media/img/icons/silos/icon--development.svg" alt="" role="presentation" className="one" />
                      <img
                        width="48"
                        height="48"
                        src="https://assets.mindtrust.com/img/development/web-developer.jpg?auto=format"
                        alt=""
                        role="presentation"
                        className="two"
                      />
                    </li>

                    <li className="teamCard__title">
                      <span className="one">Development</span>
                      <span className="two">Web Developer</span>
                    </li>

                    <li className="teamCard__icon">
                      <img width="34" height="34" src="/media/img/icons/silos/icon--development.svg" alt="" role="presentation" className="two" />
                      <img width="34" height="34" src="/media/img/icons/icon--checkmark--blue.svg" alt="" role="presentation" className="three" />
                    </li>
                  </ul>
                  <ul className="teamCard card">
                    <li className="teamCard__image">
                      <img width="48" height="48" src="/media/img/icons/silos/icon--marketing.svg" alt="" role="presentation" className="one" />
                      <img
                        width="48"
                        height="48"
                        src="https://assets.mindtrust.com/img/marketing/copywriter.jpg?auto=format"
                        alt=""
                        role="presentation"
                        className="two"
                      />
                    </li>
                    <li className="teamCard__title">
                      <span className="one">Marketing</span>
                      <span className="two">Copywriter</span>
                    </li>
                    <li className="teamCard__icon">
                      <img width="34" height="34" src="/media/img/icons/silos/icon--marketing.svg" alt="" role="presentation" className="two" />
                      <img width="34" height="34" src="/media/img/icons/icon--checkmark--blue.svg" alt="" role="presentation" className="three" />
                    </li>
                  </ul>
                  <ul className="teamCard card">
                    <li className="teamCard__image">
                      <img width="48" height="48" src="/media/img/icons/silos/icon--production.svg" alt="" role="presentation" className="one" />
                      <img
                        width="48"
                        height="48"
                        src="https://assets.mindtrust.com/img/production/3d-animator.jpg?auto=format"
                        alt=""
                        role="presentation"
                        className="two"
                      />
                    </li>
                    <li className="teamCard__title">
                      <span className="one">Production</span>
                      <span className="two">3D Animator</span>
                    </li>
                    <li className="teamCard__icon">
                      <img width="34" height="34" src="/media/img/icons/silos/icon--production.svg" alt="" role="presentation" className="two" />
                      <img width="34" height="34" src="/media/img/icons/icon--checkmark--blue.svg" alt="" role="presentation" className="three" />
                    </li>
                  </ul>
                  <ul className="teamCard card">
                    <li className="teamCard__image">
                      <img width="48" height="48" src="/media/img/icons/silos/icon--technology.svg" alt="" role="presentation" className="one" />
                      <img
                        width="48"
                        height="48"
                        src="https://assets.mindtrust.com/img/technology/blockchain-architect.jpg?auto=format"
                        alt=""
                        role="presentation"
                        className="two"
                      />
                    </li>
                    <li className="teamCard__title">
                      <span className="one">Technology</span>
                      <span className="two">Blockchain Architect</span>
                    </li>
                    <li className="teamCard__icon">
                      <img width="34" height="34" src="/media/img/icons/silos/icon--technology.svg" alt="" role="presentation" className="two" />
                      <img width="34" height="34" src="/media/img/icons/icon--checkmark--blue.svg" alt="" role="presentation" className="three" />
                    </li>
                  </ul>
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
