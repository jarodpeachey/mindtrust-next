import React from "react"
import Layout from "../components/layout"
import Navigation from "../components/Navigation/Navigation"
// import "../styles/partials/pages/_why-mindtrust.scss"
import styles from "./WhyMindtrust.module.scss"
import Footer from "../components/Footer/Footer"
import TalentCarousel from "../components/TalentCarousel/TalentCarousel"
import { talentCarouselSlides } from "../data/homePage"
import Script from '../node_modules/next/script'

const WhyMindTrust = () => {
  return (
    <>
      <Layout
        whypage={true}
        title={"Why MindTrust - The better way to grow your business"}
        description={
          "Our Teams as a Service model combines world-class talent with proprietary software to load balance your growth. We’ve created the most efficient, least risky way for enterprises and startups to innovate and scale."
        }
        bodyClass="why"
      >
        <Script src="/js/whyCollapse.js" strategy="lazyOnload" />
        <header>
          <Navigation />
        </header>

        <section className={`${styles.hero} ${styles["dot-burst"]}`}>
          {/* <img loading="lazy" src="/media/img/backgrounds/strategy.svg" alt="Strategy icon" className={styles["background--icon"]} /> */}
          <div className="container relative">
            <h1 className={`display ${styles.heroTitle}`}>There’s a better way to grow your business</h1>
            <p className={`section-description ${styles.heroSubtitle}`}>
              Our Teams as a Service model combines world-class talent with proprietary software to load balance your growth. We’ve created the most efficient,
              least risky way for enterprises and startups to innovate and scale.
            </p>

            <div className={styles.buttons}>
              <a href="/request-project/1" className="btn primary">
              Get started
            </a>
            <a target="_blank" href="https://meetings.mindtrust.com/meetings/sales-team-demo/web-demo-request" className="btn light outlined">
              Request a Demo
            </a>
            </div>
            <div className={`row ${styles["trusted-by"]}`}>
              <div className="col-12">
                <p>We've helped grow some of the largest companies:</p>
                <img loading="lazy" src="/media/img/logos/logos-why.svg" alt="Important companies choose MindTrust" />
              </div>
            </div>
          </div>
        </section>
        <main>
          <section className={styles.talent}>
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <h2 className="section-heading">The world’s top innovation talent at your fingertips</h2>
                </div>
                <div className="col-lg-8">
                  <p className="section-description">
                    MindTrust is an all-star team of top strategists, technologists, marketers, and creatives from leading companies and top universities. We
                    are a passionate tribe committed to growing your business and building experiences that people love! Headquartered in the USA, we’re a
                    global company that spans 6 continents and 30+ countries and growing fast.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-10 offset-1">
                  <img loading="lazy" src="/media/img/section-arrow.svg" role="presentation" className="talent__arrow" alt="" />
                </div>
              </div>
            </div>
            <div className={styles["talent__carousel-holder"]}>
              <TalentCarousel slides={talentCarouselSlides} />
            </div>
          </section>
          <section className={styles.advantage}>
            <div className="container">
              <h2 className="section-heading">Stop Paying for Idle Time</h2>
              <p className="section-description">
                MindTrust provides a powerful alternative to traditional hiring, agencies, and outsourcing. By plugging into the Internet of Talent&trade;, you
                can affordably grow your business with fluid teams of expert business strategists. Improve efficiency, eliminate the risk of idle time, and only
                pay for hours you use.
              </p>
              <div className="advantage__wrapper down-arrow">
                <div className="advantage__categories advantage__right row">
                  <div className="col-6">
                    <h3>Traditional Teams</h3>
                  </div>
                  <div className="col-6">
                    <h3>Teams as a Service</h3>
                  </div>
                </div>
                <div className="advantage__item">
                  <div className="advantage__left">
                    <h3>Team Size</h3>
                    <img src="/media/img/icons/icon--plus.svg" alt="Toggle collapse" height="32" width="32" />
                  </div>
                  <div className="advantage__right row">
                    <div className="col-sm-6">
                      <h4 className="advantage__item--category">Traditional Teams</h4>
                      <img loading="lazy" src="/media/img/team-member.svg" alt="Traditional teams" />
                      <img loading="lazy" src="/media/img/team-member.svg" alt="Traditional teams" />
                      <img loading="lazy" src="/media/img/team-member.svg" alt="Traditional teams" />
                      <img loading="lazy" src="/media/img/team-member.svg" alt="Traditional teams" />
                      <img loading="lazy" src="/media/img/team-member.svg" alt="Traditional teams" />
                      <p className="advantage__comparison--title">5x Team Members</p>
                      <p>Pay for salaries, benefits and 100% of your employee and contractor time.</p>
                    </div>
                    <div className="col-sm-6">
                      <h4 className="advantage__item--category">TaaS</h4>
                      <img loading="lazy" src="/media/img/team-member--blue.svg" alt="Traditional teams" />
                      <img loading="lazy" src="/media/img/team-member--blue.svg" alt="Traditional teams" />
                      <img loading="lazy" src="/media/img/team-member--blue.svg" alt="Traditional teams" />
                      <img loading="lazy" src="/media/img/team-member--blue.svg" alt="Traditional teams" />
                      <img loading="lazy" src="/media/img/team-member--blue.svg" alt="Traditional teams" />
                      <p className="advantage__comparison--title">∞ Team Members</p>
                      <p>Your team is fluid and infinitely scalable based upon your month-to-month needs.</p>
                    </div>
                  </div>
                </div>
                <div className="advantage__item">
                  <div className="advantage__left">
                    <h3>Talent Utilization</h3>
                    <img src="/media/img/icons/icon--plus.svg" alt="Toggle collapse" height="32" width="32" />
                  </div>
                  <div className="advantage__right row">
                    <div className="col-sm-6">
                      <h4 className="advantage__item--category">Traditional Teams</h4>
                      <div className="advantage__item--flex">
                        <img loading="lazy" src="/media/img/icons/icon--60-percent.svg" alt="Traditional teams" />
                        <p className="advantage__comparison--title">60% Utilized</p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <h4 className="advantage__item--category">TaaS</h4>
                      <div className="advantage__item--flex">
                        <img loading="lazy" src="/media/img/icons/icon--100-percent.svg" alt="Traditional teams" />
                        <div>
                          <p className="advantage__comparison--title">100% Utilized</p>
                          <p>With our TaaS model, your team is adaptive to your needs. You only pay for hours you use. </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="advantage__item">
                  <div className="advantage__left">
                    <h3>Monthly Hours</h3>
                    <img src="/media/img/icons/icon--plus.svg" alt="Toggle collapse" height="32" width="32" />
                  </div>
                  <div className="advantage__right row">
                    <div className="col-sm-6">
                      <h4 className="advantage__item--category">Traditional Teams</h4>
                      <div className="advantage__item--flex">
                        <img loading="lazy" src="/media/img/icons/icon--hours.svg" alt="Traditional teams" />
                        <div>
                          <p className="advantage__comparison--title">867 hours</p>
                          <p>You are paying for 160 to 184 hours per team member each and every month.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <h4 className="advantage__item--category">TaaS</h4>
                      <div className="advantage__item--flex">
                        <img loading="lazy" src="/media/img/icons/icon--hours-blue.svg" alt="Traditional teams" />
                        <div>
                          <p className="advantage__comparison--title">Flexible hours</p>
                          <p>With MindTrust you can easily scale up or down, and only pay for hours you use.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="advantage__item">
                  <div className="advantage__left">
                    <h3>Total Savings</h3>
                    <img src="/media/img/icons/icon--plus.svg" alt="Toggle collapse" height="32" width="32" />
                  </div>
                  <div className="advantage__right row">
                    <div className="col-sm-6">
                      <h4 className="advantage__item--category">Traditional Teams</h4>
                      <div className="advantage__item--flex">
                        <div className="advantage__savings">0%</div>
                        <div>
                          <p className="advantage__comparison--title">Savings</p>
                          <p>Pay for salaries, benefits, and 100% of your employee and contractor time.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <h4 className="advantage__item--category">TaaS</h4>
                      <div className="advantage__item--flex">
                        <div className="advantage__savings">53%</div>
                        <div>
                          <p className="advantage__comparison--title">Savings</p>
                          <p>We provide the right talent at the right time, and you only pay for hours worked.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.compare}>
            <div className="container">
              <h2 className={`section-heading ${styles.compareTitle}`}>How do you design, build, launch and promote projects today?</h2>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className={`card ${styles.compareCard}`}>
                    <div className={styles.compareCardInfo}>
                      <img loading="lazy" alt="" className={styles.a} src="/media/img/backgrounds/a.svg" role="presentation" />
                      <div>
                        <h3>I rely on employees</h3>
                        <p>to manage their own productivity and learn what's necessary for a project.</p>
                      </div>
                    </div>
                    <ul className={styles.bullets}>
                      <li className={styles.bullet}>
                        <img loading="lazy" width="32" height="32" src="/media/img/icons/icon--checkmark--blue.svg" role="presentation" alt="" />
                        Accountability
                      </li>
                      <li className={styles.bullet}>
                        <img loading="lazy" width="32" height="32" src="/media/img/icons/icon--close.svg" role="presentation" alt="" />
                        Big investment
                      </li>
                      <li className={styles.bullet}>
                        <img loading="lazy" width="32" height="32" src="/media/img/icons/icon--close.svg" role="presentation" alt="" />
                        Limited capacity
                      </li>
                      <li className={styles.bullet}>
                        <img loading="lazy" width="32" height="32" src="/media/img/icons/icon--close.svg" role="presentation" alt="" />
                        Limited skill diversity
                      </li>
                      <li className={styles.bullet}>
                        <img loading="lazy" width="32" height="32" src="/media/img/icons/icon--close.svg" role="presentation" alt="" />
                        Slow hiring process
                      </li>
                      <li className={styles.bullet}>
                        <img loading="lazy" width="32" height="32" src="/media/img/icons/icon--close.svg" role="presentation" alt="" />
                        Long-term commitment
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className={`card ${styles.compareCard}`}>
                    <div className={styles.compareCardInfo}>
                      <img loading="lazy" alt="" src="/media/img/backgrounds/b.svg" role="presentation" />
                      <div>
                        <h3>I rely on an agency</h3>
                        <p>to scope a project for us and then execute on the tasks autonomously.</p>
                      </div>
                    </div>
                    <ul className={styles.bullets}>
                      <li className={styles.bullet}>
                        <img loading="lazy" width="32" height="32" src="/media/img/icons/icon--checkmark--blue.svg" role="presentation" alt="" />
                        No employee overhead
                      </li>
                      <li className={styles.bullet}>
                        <img loading="lazy" width="32" height="32" src="/media/img/icons/icon--checkmark--blue.svg" role="presentation" alt="" />
                        Quality assurance
                      </li>
                      <li className={styles.bullet}>
                        <img loading="lazy" width="32" height="32" src="/media/img/icons/icon--close.svg" role="presentation" alt="" />
                        High pricing
                      </li>
                      <li className={styles.bullet}>
                        <img loading="lazy" width="32" height="32" src="/media/img/icons/icon--close.svg" role="presentation" alt="" />
                        Loss of control
                      </li>
                      <li className={styles.bullet}>
                        <img loading="lazy" width="32" height="32" src="/media/img/icons/icon--close.svg" role="presentation" alt="" />
                        Juggling other clients
                      </li>
                      <li className={styles.bullet}>
                        <img loading="lazy" width="32" height="32" src="/media/img/icons/icon--close.svg" role="presentation" alt="" />
                        Minimum retainers
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className={`card ${styles.compareCard}`}>
                    <div className={styles.compareCardInfo}>
                      <img loading="lazy" alt="" className={styles.c} src="/media/img/backgrounds/c.svg" role="presentation" />
                      <div>
                        <h3>I rely on freelancers</h3>
                        <p>or outsourcing for a specific project or fill skill gaps on my team.</p>
                      </div>
                    </div>
                    <ul className={styles.bullets}>
                      <li className={styles.bullet}>
                        <img loading="lazy" width="32" height="32" src="/media/img/icons/icon--checkmark--blue.svg" role="presentation" alt="" />
                        Fast time to hire
                      </li>
                      <li className={styles.bullet}>
                        <img loading="lazy" width="32" height="32" src="/media/img/icons/icon--checkmark--blue.svg" role="presentation" alt="" />
                        Cheap hourly pricing
                      </li>
                      <li className={styles.bullet}>
                        <img loading="lazy" width="32" height="32" src="/media/img/icons/icon--close.svg" role="presentation" alt="" />
                        High total pricing
                      </li>
                      <li className={styles.bullet}>
                        <img loading="lazy" width="32" height="32" src="/media/img/icons/icon--close.svg" role="presentation" alt="" />
                        High failure rate
                      </li>
                      <li className={styles.bullet}>
                        <img loading="lazy" width="32" height="32" src="/media/img/icons/icon--close.svg" role="presentation" alt="" />
                        Limited capacity
                      </li>
                      <li className={styles.bullet}>
                        <img loading="lazy" width="32" height="32" src="/media/img/icons/icon--close.svg" role="presentation" alt="" />
                        No accountability
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.trust}>
            <div className="container">
              <h2 className="section-heading">I trust MindTrust to build and manage a world-class team and bring our vision to life</h2>
              <div className="trust__row">
                <div className={styles.trust__column}>
                  <ul className="card">
                    <li>
                      <img loading="lazy" alt="" role="presentation" src="/media/img/icons/icon--checkmark--blue.svg" width="32" height="32" />
                      Right skills as needed
                    </li>
                    <li>
                      <img loading="lazy" alt="" role="presentation" src="/media/img/icons/icon--checkmark--blue.svg" width="32" height="32" />
                      Transparent pricing
                    </li>
                    <li>
                      <img loading="lazy" alt="" role="presentation" src="/media/img/icons/icon--checkmark--blue.svg" width="32" height="32" />
                      Unlimited work capacity
                    </li>
                    <li>
                      <img loading="lazy" alt="" role="presentation" src="/media/img/icons/icon--checkmark--blue.svg" width="32" height="32" />
                      Fit into your existing processes
                    </li>
                    <li>
                      <img loading="lazy" alt="" role="presentation" src="/media/img/icons/icon--checkmark--blue.svg" width="32" height="32" />
                      Vetted, reputable experts
                    </li>
                    <li>
                      <img loading="lazy" alt="" role="presentation" src="/media/img/icons/icon--checkmark--blue.svg" width="32" height="32" />
                      Quality assurance
                    </li>
                  </ul>
                </div>
                <div className={styles.trust__column}>
                  <div className={styles.quote__wrapper}>
                    <p>
                      "MindTrust has been a great partner for Datto. Having access to the right talent at the right time without disrupting our internal
                      workflow has been a game-changer.”
                    </p>
                    <div className={styles.quote__author}>
                      <img className={styles.quote__image} src="/media/img/matthew-richards.jpg" alt="Sample avatar" />
                      <div className="d-flex flex-direction-column flex-column">
                        <p>Matt Richards</p>
                        <p className={"m-0"}>Chief Marketing Officer</p>
                        <p className={"m-0"}>Datto</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.benefits}>
            <div className="container cut--top-right">
              <div className={styles.benefits__title}>
                <h2 className="section-heading">Three concepts our customers find most valuable</h2>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <ul className="card">
                    <li>
                      <img loading="lazy" src="/media/img/icons/icon--calendar--round.svg" alt="" role="presentation" width="55" height="55" />
                      <div>
                        <h3 className="h4">Talent Flexibility</h3>
                        <p>Phase members in and out of your mindtrust of elite technologists, strategists, and creatives based on your needs and workflow.</p>
                      </div>
                    </li>
                    <li>
                      <img loading="lazy" src="/media/img/icons/icon--earth.svg" alt="" role="presentation" width="55" height="55" />
                      <div>
                        <h3 className="h4">Full Utilization</h3>
                        <p>No idle time, full utilization. You'll only be billed when pros are actively working on your project.</p>
                      </div>
                    </li>
                    <li>
                      <img loading="lazy" src="/media/img/icons/icon--badge.svg" alt="" role="presentation" width="55" height="55" />
                      <div>
                        <h3 className="h4">Transparent Pricing</h3>
                        <p>Set a budget, then allocate talent to fit your needs. You'll gain active insights into how your budget is consumed.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-md-8">
                  <div className={styles.benefits__image}>
                    <picture>
                      <source srcSet="https://assets.mindtrust.com/img/why-mindtrust/talented.jpg?w=681&auto=format" media="(min-width: 1200px)" />
                      <source srcSet="https://assets.mindtrust.com/img/why-mindtrust/talented.jpg?w=580&auto=format" media="(min-width: 992px)" />
                      <source srcSet="https://assets.mindtrust.com/img/why-mindtrust/talented.jpg?w=428&auto=format" media="(min-width: 768px)" />
                      <source srcSet="https://assets.mindtrust.com/img/why-mindtrust/talented.jpg?w=314&auto=format" media="(min-width: 576px)" />
                      <img
                        loading="lazy"
                        alt="Hero image"
                        className={styles.quote__image}
                        src="https://assets.mindtrust.com/img/why-mindtrust/talented.jpg?w=440&q=70&auto=format"
                      />
                    </picture>
                  </div>
                  <div className={styles.benefits__overlay}>
                    <picture>
                      <source srcSet="https://assets.mindtrust.com/img/why-mindtrust/talented-2.jpg?w=430&auto=format" media="(min-width: 1200px)" />
                      <source srcSet="https://assets.mindtrust.com/img/why-mindtrust/talented-2.jpg?w=430&auto=format" media="(min-width: 992px)" />
                      <source srcSet="https://assets.mindtrust.com/img/why-mindtrust/talented-2.jpg?w=339&auto=format" media="(min-width: 768px)" />
                      <source srcSet="https://assets.mindtrust.com/img/why-mindtrust/talented-2.jpg?w=314&auto=format" media="(min-width: 576px)" />
                      <img
                        loading="lazy"
                        alt="Hero image"
                        className={styles.quote__image}
                        src="https://assets.mindtrust.com/img/why-mindtrust/talented-2.jpg?w=440&q=70&auto=format"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.deliver}>
            <div className="container">
              <h2 className="section-heading">We deliver, consistently</h2>
              <div className="row">
                <div className="col-sm-6 col-lg-3">
                  <div className={`card ${styles.deliverCard}`}>
                    <img loading="lazy" src="/media/img/icons/icon--trophy.svg" role="presentation" alt="" width="80" height="80" />
                    <p>Success Rate</p>
                    <p className={styles.score}>99.3%</p>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className={`card ${styles.deliverCard}`}>
                    <img loading="lazy" src="/media/img/icons/icon--ribbon.svg" role="presentation" alt="" width="80" height="80" />
                    <p>Projects complete</p>
                    <p className={styles.score}>3000+</p>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className={`card ${styles.deliverCard}`}>
                    <img loading="lazy" src="/media/img/icons/icon--speech-bubble.svg" role="presentation" alt="" width="80" height="80" />
                    <p>NetPromoter Score</p>
                    <p className={styles.score}>98%</p>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className={`card ${styles.deliverCard}`}>
                    <img loading="lazy" src="/media/img/icons/icon--happy.svg" role="presentation" alt="" width="80" height="80" />
                    <p>Happy Customers</p>
                    <p className={styles.score}>500+</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className={styles.testimonials}>
          <div className="container">
            <div className="row">
              <div className="col-10 offset-1">
                <div className={styles["star--icons"]}>
                  <img loading="lazy" src="/media/img/icons/icon--star.svg" width="30" height="30" alt="Star icon" />
                  <img loading="lazy" src="/media/img/icons/icon--star.svg" width="30" height="30" alt="Star icon" />
                  <img loading="lazy" src="/media/img/icons/icon--star.svg" width="30" height="30" alt="Star icon" />
                  <img loading="lazy" src="/media/img/icons/icon--star.svg" width="30" height="30" alt="Star icon" />
                  <img loading="lazy" src="/media/img/icons/icon--star.svg" width="30" height="30" alt="Star icon" />
                </div>
                <h2 className="section-heading">What partners say about working with experts on our team</h2>
              </div>
            </div>
          </div>

          <div className={styles["testimonials__carousel-holder"]}>
            <TestimonialCarousel slides={testimonialCarouselSlides} />
          </div>
        </section> */}
        </main>
        <aside aria-labelledby="footer-cta" className={styles["footer-cta"]}>
          <div className={`container ${styles["footer-cta__container"]}`}>
            <div className={`row ${styles["container__inner"]}`}>
              <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
                <img
                  loading="lazy"
                  width="38"
                  height="56"
                  className={styles["footer-cta__image"]}
                  src="/media/img/icons/icon--mindtrust-white.svg"
                  alt="MindTrust Logo"
                />
                <h2 id="footer-cta" className={`section-heading ${styles["footer-cta__title"]}`}>
                  Great teams are hard to build. <br />
                  Let us help.
                </h2>
                <a href="/request-project/1" className={`btn ${styles["footer-cta__button"]}`}>
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </aside>
        <Footer />
      </Layout>
    </>
  )
}

export default WhyMindTrust
