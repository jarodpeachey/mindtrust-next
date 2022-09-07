import Layout from "../components/layout"
// import styles from '../styles/utils.module.css'
import { getSortedPostsData } from "../lib/posts"
import React, { useEffect, useState } from "react"
import Navigation from "../components/Navigation/Navigation"
import SiloCard from "../components/cards/SiloCard"
import styles from "./Home.module.scss"
// import "../../styles/partials/_carousels.scss"
// import "../../styles/partials/_scenes.scss"
import { talentCarouselSlides, testimonialCarouselSlides } from "../data/homePage"
import Footer from "../components/Footer/Footer"
import TalentCarousel from "../components/TalentCarousel/TalentCarousel"
import TestimonialCarousel from "../components/TestimonialCarousel/TestimonialCarousel"
import TeamCard from "../components/cards/TeamCard"
import ToggleAnimation from "../components/ToggleAnimation/ToggleAnimation"
import { BRIDGE_APP_URL } from "../config"
import { WebglGlobe } from "../components/WebglGlobe"
import Script from "next/script"

export default function Home({ data }) {
  const clientTestimonials = data?.taas?.clientTestimonials?.rows || []
  const featuredTMs = data?.taas?.featuredTMs?.rows || []

  const [showGlobe, setShowGlobe] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 769) {
      setShowGlobe(true)
    }
  }, [])

  return (
    <Layout title={"Teams as a Service Platform - Plug into the Internet of Talent"} bodyClass="home" homepage>
      {showGlobe && (
        <>
          <Script src="/js/webgl_globe/three.bundle.fda87c5a7877e101b399.js" />
          <Script src="/js/webgl_globe/globe-integration.fda87c5a7877e101b399.js" />
        </>
      )}
      <header>
        <Navigation />
        {/* <Checkbox id="consent-checkbox" className="consent-checkbox">
          I consent to my e-mail being used for marketing offers and updates.
        </Checkbox> */}
        <div className={styles["linear-gradient-box"]}></div>
        <div className={styles.hero}>
          <div className="container container--wide">
            <div className="row">
              <div className="col-lg-5 col-md-6 hero-heading-container">
                <h1 className={`section-heading display plug-into ${styles.heroTitle}`}>
                  Plug into the Internet of Talent<sup>&reg;</sup>
                </h1>
                <p className={`section-description ${styles.heroParagraph}`}>
                  We built the world’s first Teams as a Service (TaaS) platform to give you on-demand access to the top developers, designers, marketers,
                  technologists, and business strategists.
                </p>
                <p className={`section-description ${styles.heroParagraph}`}>Easily scale up or down, only pay for what you use.</p>
                <a href="/request-project/1" className={`btn ${styles.heroButton}`}>
                  Get started
                </a>
                <a
                  target="_blank"
                  href="https://meetings.mindtrust.com/meetings/sales-team-demo/web-demo-request"
                  className={`btn outlined light ${styles.heroButtonTwo}`}
                >
                  Request a demo
                </a>
              </div>
              <div className={`col-md-6 webgl-globe-container`}>
                <WebglGlobe showGlobe={showGlobe} />
                {/* This part is the static globe image section */}
                {/* <img className={styles.featured__image} src="/media/img/mobile-hero-globe.png" /> */}
              </div>
            </div>
          </div>
        </div>

        <div className={`container ${styles["trusted-by"]}`} id="trusted-by">
          <div className={styles.logos}>
            <div className={styles.logo}>
              <div className={styles.text}>Trusted by:</div>
            </div>
            <div className={styles.logo}>
              <img src="/media/img/logos/logo-amex.svg" alt="American Express logo" />
            </div>
            <div className={styles.logo}>
              <img src="/media/img/logos/logo-cvs.svg" alt="CVS logo" />
            </div>
            <div className={styles.logo}>
              <img src="/media/img/logos/logo-honeywell.svg" alt="Honeywell logo" />
            </div>
            <div className={styles.logo}>
              <img src="/media/img/logos/logo-deloitte.svg" alt="Deloitte logo" />
            </div>
            <div className={styles.logo}>
              <img src="/media/img/logos/logo-visa.svg" alt="Visa logo" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.services}>
          <div className="container down-arrow">
            <h2 className="mt-animate__fade mt-animate section-heading display">
              Team up with <span className={styles.underline}>elite talent</span> to innovate faster
            </h2>
            <p className="section-description mt-animate__fade mt-animate">
              Whether you want to add a member to your existing team or develop a complex project from scratch, we’ll build and manage a world-class team to
              bring your vision to life. Our areas of expertise include:
            </p>
            <div className="row cut--top-left card-grid">
              <div className={`col-lg-4 col-sm-6 col-12 ${styles.servicesCard}`}>
                <SiloCard
                  link={true}
                  href={"/strategy-teams/"}
                  icon={"/media/img/icons/silos/icon--strategy.svg"}
                  alt={"MindTrust Strategy"}
                  title={"Strategy"}
                  category="strategy"
                  description={"Top business experts for digital transformation, data science, fundraising, finance, product and project management."}
                />
              </div>

              <div className={`col-lg-4 col-sm-6 col-12 ${styles.servicesCard}`}>
                <SiloCard
                  link={true}
                  href={"/design-teams/"}
                  icon={"/media/img/icons/silos/icon--design.svg"}
                  alt={"MindTrust Design"}
                  title={"Design"}
                  category="design"
                  description={"Award winning designers deliver amazing brand, creative, UI, UX, prototypes, and interactive digital experiences."}
                />
              </div>

              <div className={`col-lg-4 col-sm-6 col-12 ${styles.servicesCard}`}>
                <SiloCard
                  link={true}
                  href={"/development-teams/"}
                  icon={"/media/img/icons/silos/icon--development.svg"}
                  alt={"MindTrust Development"}
                  title={"Development"}
                  category="development"
                  description={
                    "Expert software architects and engineers for  full-stack web, mobile apps, and emerging technologies like blockchain, AI, and XR."
                  }
                />
              </div>

              <div className={`col-lg-4 col-sm-6 col-12 ${styles.servicesCard}`}>
                <SiloCard
                  link={true}
                  href={"/marketing-teams/"}
                  icon={"/media/img/icons/silos/icon--marketing.svg"}
                  alt={"MindTrust Marketing"}
                  title={"Marketing"}
                  category="marketing"
                  description={
                    "Brilliant marketing insight professionals, digital strategists, and growth hackers deliver inbound, search, social, and paid advertising results."
                  }
                />
              </div>

              <div className={`col-lg-4 col-sm-6 col-12 ${styles.servicesCard}`}>
                <SiloCard
                  link={true}
                  href={"/production-teams/"}
                  icon={"/media/img/icons/silos/icon--production.svg"}
                  alt={"MindTrust Production"}
                  title={"Production"}
                  category="production"
                  description={
                    "Industry leading artists, illustrators, animators, 3D modelers, video, audio, game design, and AR/VR producers bring it to the next level."
                  }
                />
              </div>

              <div className={`col-lg-4 col-sm-6 col-12 ${styles.servicesCard}`}>
                <SiloCard
                  link={true}
                  href={"/technology-teams/"}
                  icon={"/media/img/icons/silos/icon--technology.svg"}
                  alt={"MindTrust Technology"}
                  title={"Technology"}
                  category="technology"
                  description={
                    "Top technologists and cloud architects for infrastructure, DevOps, and CI/CD across AWS, GCP, Azure, and distributed Web 3.0 platforms."
                  }
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mindtrust-toggle">
          <div className="container">
            <h2 className="mt-animate__fade mt-animate section-heading display">Be more successful with MindTrust</h2>
            <p className="mt-animate__fade mt-animate section-description">
              We’ll work with you to understand what kind of expertise you need and when. Whether you need custom software development or demand generation to
              grow your business we’ve got you covered.
            </p>

            <ToggleAnimation
              slides={[
                {
                  title: "Innovate at scale and speed",
                  description: "We'll work with you to understand what kind of expertise you need and when.",
                  heading: "Your Project",
                  class: "one",
                },
                {
                  title: "Access a fluid team of experts",
                  description: "We have the teams and tools to ship the best solutions, faster. ",
                  heading: "Your MindTrust comes together",
                  class: "two",
                },
                {
                  title: "Easily collaborate across disciplines",
                  description: "World-class creative, engineering, and marketing talent at your fingertips.",
                  heading: "You get results",
                  class: "three",
                },
              ]}
            />
          </div>
        </section>

        <section className="taas overflow">
          <div className="background">
            <div className="container">
              <h2 className="mt-animate__fade mt-animate section-heading display">The world's first Teams as a Service (TaaS) Platform</h2>
              <p className="mt-animate__fade mt-animate section-description">
                The future of work isn’t built on yesterday’s technology. MindTrust’s patent pending technology matches you with the right talent at the right
                time and the best price. You’ll gain full visibility and have the power to swap talent in and out based on your needs. Quickly scale up or down
                and eliminate idle time so you can deliver more while spending less.
              </p>
              <div className="row">
                <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                  <div id="taas__wrapper" className="taas__wrapper">
                    <h3>Your MindTrust Team</h3>
                    <div className="taas__body">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="pie">
                            <div className="pie__inner">
                              <div className="pie__percent">
                                <span className="taas-animation__number" data-animate="125">
                                  0
                                </span>
                              </div>
                              <div className="pie__text">
                                <strong>/ 200</strong> TaaS hours used
                              </div>
                              <img src="/media/img/icons/icon--mindtrust.svg" alt="MindTrust logo" />
                            </div>

                            <div className="taas__donut"></div>
                          </div>
                          <div className="flex">
                            <div className="block"></div>
                            <div className="taas__text">Teams as a Service</div>
                          </div>
                        </div>

                        <div className="col-md-7">
                          <ul className="teamCards">
                            <li>
                              <TeamCard
                                size="lg"
                                className="taas__teamCard"
                                member={{
                                  avatar: "https://assets.mindtrust.com/img/development/software-architect.jpg?auto=format",
                                  alt: "Sample Avatar",
                                  hours: 17,
                                  title: "Software Architect",
                                  silo: "Development",
                                }}
                              />
                            </li>

                            <li>
                              <TeamCard
                                size="lg"
                                className="taas__teamCard"
                                member={{
                                  avatar: "https://assets.mindtrust.com/img/development/mobile-developer.jpg?auto=format",
                                  alt: "Sample Avatar",
                                  hours: 33,
                                  title: "Mobile Developer",
                                  silo: "Development",
                                }}
                              />
                            </li>

                            <li>
                              <TeamCard
                                size="lg"
                                className="taas__teamCard"
                                member={{
                                  avatar: "https://assets.mindtrust.com/img/design/ui-ux-designer.jpg?auto=format",
                                  alt: "Sample Avatar",
                                  hours: 25,
                                  title: "UI/UX Designer",
                                  silo: "Design",
                                }}
                              />
                            </li>

                            <li>
                              <TeamCard
                                size="lg"
                                className="taas__teamCard"
                                member={{
                                  avatar: "https://assets.mindtrust.com/img/strategy/product-manager.jpg?auto=format",
                                  alt: "Sample Avatar",
                                  hours: 20,
                                  title: "Product Manager",
                                  silo: "Strategy",
                                }}
                              />
                            </li>

                            <li>
                              <TeamCard
                                size="lg"
                                className="taas__teamCard"
                                member={{
                                  avatar: "https://assets.mindtrust.com/img/development/full-stack-developer.jpg?auto=format",
                                  alt: "Sample Avatar",
                                  hours: 30,
                                  title: "Full Stack Developer",
                                  silo: "Development",
                                }}
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dot-burst talent overflow">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8 offset-md-2">
                <p className="callout text-center pb-4">People Powered</p>
                <p className={`${styles["callout-description"]} section-description`}>
                  The heartbeat of TaaS is our amazing people. Our global network of vetted industry experts can handle anything from ideation, to launch and
                  beyond.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-10 offset-1">
                <img loading="lazy" src="/media/img/section-arrow.svg" role="presentation" className={styles.talent__arrow} alt="" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <h2 className="mt-animate__slide mt-animate section-heading text-left display">Meet your digital dream team</h2>
              </div>
              <div className="col-md-7 offset-md-1">
                <p className="mt-animate__slide mt-animate mt-none section-description text-left">
                  MindTrust is an all-star team of top technologists, strategists, and creatives from leading companies and universities. We are a passionate
                  tribe committed to growing your business and building experiences people love! Headquartered in the USA, we’re a global company that spans 6
                  continents and 30+ countries and growing fast.
                </p>
              </div>
            </div>
          </div>

          <div className={styles["talent__carousel-holder"]}>
            <TalentCarousel slides={talentCarouselSlides} />
          </div>
        </section>
      </main>

      <aside aria-labelledby="footer-cta" className="footer-cta">
        <div className="container">
          <div className="row container__inner">
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
              <img loading="lazy" width="38" height="56" className="footer-cta__image" src="/media/img/icons/icon--mindtrust-white.svg" alt="MindTrust Logo" />
              <h2 id="footer-cta" className="footer-cta__title section-heading">
                Great teams are hard to build. <br />
                Let us help.
              </h2>
              <a href="/request-project/1" className="footer-cta__button btn">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </aside>

      <Footer showForm={false} />
    </Layout>
  )
}

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData,
//     },
//   }
// }
