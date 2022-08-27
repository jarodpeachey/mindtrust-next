import React from "react"
import styles from "./ToggleAnimation.module.scss"

// interface ToggleAnimationProps {
//   slides:
// }

const ToggleAnimation = props => {
  let slides = props.slides

  return (
    <div className={styles.toggle}>
      <div className="row">
        <div className="col-xl-4">
          <div className={styles.toggle__left}>
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
          <div className={styles.toggle__right}>
            <div className={styles.pie}>
              <div className={styles.pie__inner}>
                <div className={styles.pie__percent}><span className={styles["toggle-animation__number"]} data-animate="100">0</span>%</div>
                <div className={styles.pie__text}>Team Efficiency</div>
                <img src="/media/img/icons/icon--mindtrust.svg" alt="MindTrust logo" />
              </div>

              <div className={styles.doughnut}></div>
            </div>
            <div className={styles.toggle__slide}>
              <h3>
                <span className={styles.one}>Your project</span>
                <span className={styles.two}>Your MindTrust comes together</span>
                <span className={styles.three}>You get results</span>
              </h3>
              <img src="/media/img/laptop.svg" alt="Laptop image" className={styles.laptop} />
              <div className={styles.flex}>
                <div className={styles.splash}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className={styles["team-cards"]}>
                  <ul className={styles["team-card card"]}>
                    <li className={styles["team-card__image"]}>
                      <img width="48" height="48" src="/media/img/icons/silos/icon--strategy.svg" alt="" role="presentation" className={styles.one} />
                      <img
                        width="48"
                        height="48"
                        src="https://assets.mindtrust.com/img/strategy/marketing-strategist.jpg?auto=format"
                        alt=""
                        role="presentation"
                        className={styles.two}
                      />
                    </li>
                    <li className={styles["team-card__title"]}>
                      <span className={styles.one}>Strategy</span>
                      <span className={styles.two}>Marketing Strategist</span>
                    </li>
                    <li className={styles["team-card__icon"]}>
                      <img width="34" height="34" src="/media/img/icons/silos/icon--strategy.svg" alt="" role="presentation" className={styles.two} />
                      <img width="34" height="34" src="/media/img/icons/icon--checkmark--blue.svg" alt="" role="presentation" className={styles.three} />
                    </li>
                  </ul>
                  <ul className={styles["team-card card"]}>
                    <li className={styles["team-card__image"]}>
                      <img width="48" height="48" src="/media/img/icons/silos/icon--design.svg" alt="" role="presentation" className={styles.one} />
                      <img
                        width="48"
                        height="48"
                        src="https://assets.mindtrust.com/img/design/creative-director.jpg?auto=format"
                        alt=""
                        role="presentation"
                        className={styles.two}
                      />
                    </li>

                    <li className={styles["team-card__title"]}>
                      <span className={styles.one}>Design</span>
                      <span className={styles.two}>Creative Director</span>
                    </li>

                    <li className={styles["team-card__icon"]}>
                      <img width="34" height="34" src="/media/img/icons/silos/icon--design.svg" alt="" role="presentation" className={styles.two} />
                      <img width="34" height="34" src="/media/img/icons/icon--checkmark--blue.svg" alt="" role="presentation" className={styles.three} />
                    </li>
                  </ul>
                  <ul className={styles["team-card card"]}>
                    <li className={styles["team-card__image"]}>
                      <img width="48" height="48" src="/media/img/icons/silos/icon--development.svg" alt="" role="presentation" className={styles.one} />
                      <img
                        width="48"
                        height="48"
                        src="https://assets.mindtrust.com/img/development/web-developer.jpg?auto=format"
                        alt=""
                        role="presentation"
                        className={styles.two}
                      />
                    </li>

                    <li className={styles["team-card__title"]}>
                      <span className={styles.one}>Development</span>
                      <span className={styles.two}>Web Developer</span>
                    </li>

                    <li className={styles["team-card__icon"]}>
                      <img width="34" height="34" src="/media/img/icons/silos/icon--development.svg" alt="" role="presentation" className={styles.two} />
                      <img width="34" height="34" src="/media/img/icons/icon--checkmark--blue.svg" alt="" role="presentation" className={styles.three} />
                    </li>
                  </ul>
                  <ul className={styles["team-card card"]}>
                    <li className={styles["team-card__image"]}>
                      <img width="48" height="48" src="/media/img/icons/silos/icon--marketing.svg" alt="" role="presentation" className={styles.one} />
                      <img
                        width="48"
                        height="48"
                        src="https://assets.mindtrust.com/img/marketing/copywriter.jpg?auto=format"
                        alt=""
                        role="presentation"
                        className={styles.two}
                      />
                    </li>
                    <li className={styles["team-card__title"]}>
                      <span className={styles.one}>Marketing</span>
                      <span className={styles.two}>Copywriter</span>
                    </li>
                    <li className={styles["team-card__icon"]}>
                      <img width="34" height="34" src="/media/img/icons/silos/icon--marketing.svg" alt="" role="presentation" className={styles.two} />
                      <img width="34" height="34" src="/media/img/icons/icon--checkmark--blue.svg" alt="" role="presentation" className={styles.three} />
                    </li>
                  </ul>
                  <ul className={styles["team-card card"]}>
                    <li className={styles["team-card__image"]}>
                      <img width="48" height="48" src="/media/img/icons/silos/icon--production.svg" alt="" role="presentation" className={styles.one} />
                      <img
                        width="48"
                        height="48"
                        src="https://assets.mindtrust.com/img/production/3d-animator.jpg?auto=format"
                        alt=""
                        role="presentation"
                        className={styles.two}
                      />
                    </li>
                    <li className={styles["team-card__title"]}>
                      <span className={styles.one}>Production</span>
                      <span className={styles.two}>3D Animator</span>
                    </li>
                    <li className={styles["team-card__icon"]}>
                      <img width="34" height="34" src="/media/img/icons/silos/icon--production.svg" alt="" role="presentation" className={styles.two} />
                      <img width="34" height="34" src="/media/img/icons/icon--checkmark--blue.svg" alt="" role="presentation" className={styles.three} />
                    </li>
                  </ul>
                  <ul className={styles["team-card card"]}>
                    <li className={styles["team-card__image"]}>
                      <img width="48" height="48" src="/media/img/icons/silos/icon--technology.svg" alt="" role="presentation" className={styles.one} />
                      <img
                        width="48"
                        height="48"
                        src="https://assets.mindtrust.com/img/technology/blockchain-architect.jpg?auto=format"
                        alt=""
                        role="presentation"
                        className={styles.two}
                      />
                    </li>
                    <li className={styles["team-card__title"]}>
                      <span className={styles.one}>Technology</span>
                      <span className={styles.two}>Blockchain Architect</span>
                    </li>
                    <li className={styles["team-card__icon"]}>
                      <img width="34" height="34" src="/media/img/icons/silos/icon--technology.svg" alt="" role="presentation" className={styles.two} />
                      <img width="34" height="34" src="/media/img/icons/icon--checkmark--blue.svg" alt="" role="presentation" className={styles.three} />
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
