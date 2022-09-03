import React from "react"
import Layout from "../components/layout"
import Navigation from "../components/Navigation/Navigation"
import TeamCard from "../components/cards/TeamCard"
import SceneWatch from "../components/Scenes/SceneWatch"
import ScenePhone from "../components/Scenes/ScenePhone"
import SiloFooter from "../components/SiloFooter/SiloFooter"
import SiloForm from "../components/SiloForm/SiloForm"
import SiloToggleAnimation from "../components/SiloToggleAnimation/SiloToggleAnimation"
import { scene1, scene2, scene3, teamCards, footerTalents } from "../data/designPage"
// import "../styles/partials/pages/_silo.scss"
import styles from "./SiloDesign.module.scss"
import Script from '../node_modules/next/script'

const SiloDesign = ({ data }, props) => {
  // const hasWallItems = data.skills.filter(silo => silo.silo.toLowerCase() === "design").length > 0
  // let wallItems = []

  // if (hasWallItems) {
  //   wallItems = data.skills.filter(newSilo => newSilo.silo.toLowerCase() === "design")
  //   wallItems.sort(function (a, b) {
  //     if (a.skill.toLowerCase() < b.skill.toLowerCase()) {
  //       return -1
  //     }
  //     if (a.skill.toLowerCase() > b.skill.toLowerCase()) {
  //       return 1
  //     }
  //     return 0
  //   })
  // }

  return (
    <>
      <Layout title={"Design Teams as a Service"} silopage="true" bodyClass="silo design">
        <Script src="/js/siloTeamCards.js" strategy="lazyOnload" />
        <header>
          <Navigation />

          <div className={styles.hero}>
            {/* <img loading="lazy" src="/media/img/backgrounds/design.svg" alt="Design icon" className={styles["background--icon"]} /> */}
            <div className="container container--wide relative">
              <div className="row vertical-center">
                <div className="col-xl-5 col-lg-6 col-md-6">
                  <h1 className="section-heading display">
                    Design
                    <br /> Teams as a Service (TaaS)
                  </h1>
                  <p className="section-description">Deliver amazing user experiences with award-winning designers at your fingertips. </p>
                  <a href="/request-project/1" className="btn">
                    Get started
                  </a>
                </div>

                <div className="col-xl-4 col-md-6 offset-xl-2">
                  <ul className="teamCards">
                    {teamCards.map((m, i) => {
                      return (
                        <li key={i}>
                          <TeamCard lazy={false} member={m} />
                        </li>
                      )
                    })}
                  </ul>
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
                <img className={styles.logoImage} src="/media/img/logos/logo-amex.svg" alt="American Express logo" />
              </div>
              <div className={styles.logo}>
                <img className={styles.logoImage} src="/media/img/logos/logo-cvs.svg" alt="CVS logo" />
              </div>
              <div className={styles.logo}>
                <img className={styles.logoImage} src="/media/img/logos/logo-honeywell.svg" alt="Honeywell logo" />
              </div>
              <div className={styles.logo}>
                <img className={styles.logoImage} src="/media/img/logos/logo-deloitte.svg" alt="Deloitte logo" />
              </div>
              <div className={styles.logo}>
                <img className={styles.logoImage} src="/media/img/logos/logo-visa.svg" alt="Visa logo" />
              </div>
            </div>
          </div>
        </header>
        <main>
          <section className={`overflow ${styles["toggle-section"]}`}>
            <div className="container">
              <h2 className="mt-animate__fade mt-animate section-heading display">The fluid team you need to succeed</h2>
              <p className="mt-animate__fade mt-animate section-description">
                MindTrust provides a powerful alternative to traditional hiring, agencies, and outsourcing. By plugging into the Internet of Talent
                <sup>&reg;</sup>, you can affordably grow your business with fluid teams of expert business strategists.
              </p>

              <SiloToggleAnimation
                cards={[
                  {
                    category: "design",
                    title: "Creative Director",
                    hours: 10,
                    image: "https://assets.mindtrust.com/img/design/creative-director-2.jpg?auto=format",
                  },
                  {
                    category: "design",
                    title: "UI/UX Designer",
                    hours: 10,
                    image: "https://assets.mindtrust.com/img/design/ui-ux-designer.jpg?auto=format",
                  },
                  {
                    category: "strategy",
                    title: "Brand Strategist",
                    hours: 10,
                    image: "https://assets.mindtrust.com/img/strategy/brand-strategist.jpg?auto=format",
                  },
                  {
                    category: "development",
                    title: "Front-End Developer",
                    hours: 7,
                    image: "https://assets.mindtrust.com/img/development/front-end-developer.jpg?auto=format",
                  },
                  {
                    category: "design",
                    title: "Prototype Designer",
                    hours: 3,
                    image: "https://assets.mindtrust.com/img/design/prototype-designer.jpg?auto=format",
                  },
                ]}
                swapCards={[
                  {
                    category: "design",
                    title: "Illustrator",
                    hours: 10,
                    image: "https://assets.mindtrust.com/img/design/illustrator.jpg?auto=format",
                  },
                  {
                    category: "production",
                    title: "3D Animator",
                    hours: 3,
                    image: "https://assets.mindtrust.com/img/production/3d-animator.jpg?auto=format",
                  },
                ]}
                slides={[
                  {
                    title: "Access a fluid team of experts ",
                    description: "Get the design help you need from a team of experts you can trust.",
                    heading: "Project Kickoff: Your Design team forms",
                  },
                  {
                    title: "Get the right help at the right time",
                    description: "Your fluid team adjusts to match your business or project requirements.",
                    heading: "Team members change. Project hours remain consistent.",
                  },
                  {
                    title: "Stop paying for idle time",
                    description: "Our platform load balances your growth - only pay for hours you use.",
                    heading: `Up to 500% savings vs. Traditional hiring`,
                  },
                ]}
              />
            </div>
          </section>
          {/* FIX THIS DOT BURST */}
          <section className={styles["dot-burst overflow"]}>
            <div className="container">
              <h2 className="mt-animate__fade mt-animate section-heading display">MindTrust Design Services</h2>
              <p className="mt-animate__fade mt-animate section-description">
                For over a decade, we’ve tested and refined our processes delivering thousands of design sprints, products, and creative campaigns. MindTrust
                designers follow a collaborative design model — we marry our expertise with your vision to create a brand, product or site to delight your users
                and propel your business.
              </p>
              <div className="row">
                <div className="col-10 offset-1">
                  <img loading="lazy" src="/media/img/section-arrow.svg" role="presentation" className="talent__arrow" alt="" />
                </div>
              </div>

              <div className="row scene flex-column-reverse flex-lg-row">
                <div className="col-lg-5">
                  <h2 className="section-heading mt-animate__slide mt-animate" id="scene-one">
                    Build unified brand experiences
                  </h2>
                  <p className="section-description mt-animate__slide mt-animate">
                    Our branding experts will work with you to create a powerful campaign that clearly communicates your core values and USPs in a cohesive and
                    memorable way.
                  </p>
                  <div className={`mt-animate__slide mt-animate ${styles.sceneLinks}`}>
                    <a href="/design-teams/brand-design-experts" className={styles.sceneLink} aria-disabled="true">
                      Brand Design
                    </a>
                    <a href="/design-teams/ux-designers" className={styles.sceneLink} aria-disabled="true">
                      User Experience (UX) Design
                    </a>
                    <a href="/design-teams/ad-designers" className={styles.sceneLink} aria-disabled="true">
                      Ads and Campaigns
                    </a>
                    <a href="/design-teams/ui-designers" className={styles.sceneLink} aria-disabled="true">
                      User Interface (UI) Design
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1 mt-animate__fade mt-animate">
                  <ScenePhone scene="designSceneOne" captionID="scene-one" {...scene1} />
                </div>
              </div>

              <div className="row scene">
                <div className="col-lg-6 mt-animate__fade mt-animate">
                  <ScenePhone scene="designSceneTwo" className={styles["scene--two"]} captionID="scene-two" {...scene2} />
                </div>
                <div className="col-lg-5 offset-lg-1">
                  <h2 id="scene-two" className="section-heading mt-animate__slide mt-animate">
                    Design amazing user interfaces
                  </h2>
                  <p className={styles["section-description mt-animate__slide mt-animate"]}>
                    First impressions are everything. Stand out amongst your competition with cutting-edge designs that wow your website and app users and keep
                    them engaged.
                  </p>
                  <div className={`mt-animate__slide mt-animate ${styles.sceneLinks}`}>
                    <a href="/design-teams/website-designers" className={styles.sceneLink} aria-disabled="true">
                      Websites
                    </a>
                    <a href="/design-teams/web-app-designers" className={styles.sceneLink} aria-disabled="true">
                      Web and Desktop Applications
                    </a>
                    <a href="/design-teams/mobile-app-designers" className={styles.sceneLink} aria-disabled="true">
                      Mobile Apps
                    </a>
                    <a href="/design-teams/smart-watch-designers" className={styles.sceneLink} aria-disabled="true">
                      Smart Watch and Wearables
                    </a>
                  </div>
                </div>
              </div>
              <div className="row scene flex-column-reverse flex-lg-row">
                <div className="col-lg-5">
                  <h2 className="section-heading mt-animate__slide mt-animate" id="scene-three">
                    Design products people love
                  </h2>
                  <p className={styles["section-description mt-animate__slide mt-animate"]}>
                    Work with our squad of talented app and game designers to create unforgettable user and gaming experiences that hook your users and keep
                    them coming back for more.
                  </p>
                  <div className={`mt-animate__slide mt-animate ${styles.sceneLinks}`}>
                    <a href="/design-teams/saas-paas-designers" className={styles.sceneLink} aria-disabled="true">
                      SaaS and PaaS
                    </a>
                    <a href="/design-teams/mobile-app-designers" className={styles.sceneLink} aria-disabled="true">
                      Mobile Apps
                    </a>
                    <a href="/design-teams/mobile-game-designers" className={styles.sceneLink} aria-disabled="true">
                      Mobile Games
                    </a>
                    <a href="/design-teams/wearable-tech-designers" className={styles.sceneLink} aria-disabled="true">
                      Wearable Technology
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1 mt-animate__fade mt-animate">
                  <SceneWatch scene="designSceneThree" className={styles["scene--three"]} captionID="scene-three" {...scene3} />
                </div>
              </div>
            </div>
          </section>

          <section className={`cut--bottom-left ${styles.experts}`}>
            <div className="container">
              <h2 className={`section-heading display ${styles.expertsHeading}`}>Design experts for the leading design software</h2>
              <div className="row stack-animate">
                <div className="col-6 col-md-4">
                  <a href="/design-teams/proto-io-designers" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-proto.svg" alt="Proto.io logo" />
                    <p className={styles.expertsText}>Proto.io Designers</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/design-teams/adobe-photoshop-designers" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-expert-photoshop.svg" alt="Adobe Photoshop Designers logo" />
                    <p className={styles.expertsText}>Adobe Photoshop Designers</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/design-teams/adobe-indesign-designers" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-expert-indesign.svg" alt="Adobe InDesign Designers logo" />
                    <p className={styles.expertsText}>Adobe InDesign Designers</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/design-teams/sketch-designers" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-expert-sketch.svg" alt="Sketch logo" />
                    <p className={styles.expertsText}>Sketch Designers</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/design-teams/invision-experts" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-expert-invision.svg" alt="Invision logo" />
                    <p className={styles.expertsText}>Invision Experts</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/design-teams/invision-studio-experts" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-expert-invisionstudio.svg" alt="Invision Studio logo" />
                    <p className={styles.expertsText}>Invision Studio Experts</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/design-teams/adobe-illustrator-designers" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-expert-illustrator.svg" alt="Adobe Illustrator Experts logo" />
                    <p className={styles.expertsText}>Adobe Illustrator Experts</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/design-teams/adobe-xd-experts" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-expert-adobexd.svg" alt="Adobe XD logo" />
                    <p className={styles.expertsText}>Adobe XD Experts</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/design-teams/figma-designers" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-expert-figma.svg" alt="Figma logo" />
                    <p className={styles.expertsText}>Figma Designers</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/design-teams/framer-designers" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-expert-framer.svg" alt="Framer logo" />
                    <p className={styles.expertsText}>Framer Experts</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/design-teams/axure-designers" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-expert-axure.svg" alt="Axure logo" />
                    <p className={styles.expertsText}>Axure Experts</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/design-teams/mockflow-designers" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-expert-marvel.png" alt="Mockflow Designers logo" />
                    <p className={styles.expertsText}>Mockflow Designers</p>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.team}>
            <div className="container">
              <h2 className="section-heading">Design teams that mean business</h2>
              <p className="section-description">
                Designing the best user experiences requires the best global teams. We choose our teams carefully so our people can be the secret to your
                success. With MindTrust, you’ll have access to a team of top designers at your service.
              </p>
              <div className={styles.background}>
                <h3>Your Design Team</h3>
                <div className="row">
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/design-teams/creative-directors" className={`card ${styles.teamCard}`}>
                      <img
                        className={styles.teamCardImage}
                        loading="lazy"
                        src="https://assets.mindtrust.com/img/design/creative-directors.jpg?auto=format"
                        alt="Creative directors"
                      />
                      <h4 className={styles.teamCardTitle}>Creative Directors</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/design-teams/graphic-designers" className={`card ${styles.teamCard}`}>
                      <img
                        className={styles.teamCardImage}
                        loading="lazy"
                        src="https://assets.mindtrust.com/img/design/graphic-designers.jpg?auto=format"
                        alt="Graphic designers"
                      />
                      <h4 className={styles.teamCardTitle}>Graphic Designers</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/design-teams/brand-design-experts" className={`card ${styles.teamCard}`}>
                      <img
                        className={styles.teamCardImage}
                        loading="lazy"
                        src="https://assets.mindtrust.com/img/design/illustrators.jpg?auto=format"
                        alt="Brand Designers"
                      />
                      <h4 className={styles.teamCardTitle}>Brand Designers</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/design-teams/logo-designers" className={`card ${styles.teamCard}`}>
                      <img
                        className={styles.teamCardImage}
                        loading="lazy"
                        src="https://assets.mindtrust.com/img/design/logo-designers.jpg?auto=format"
                        alt="Logo designers"
                      />
                      <h4 className={styles.teamCardTitle}>Logo Designers</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/design-teams/mobile-app-designers" className={`card ${styles.teamCard}`}>
                      <img
                        className={styles.teamCardImage}
                        loading="lazy"
                        src="https://assets.mindtrust.com/img/design/mobile-app-designers.jpg?auto=format"
                        alt="Mobile app designers"
                      />
                      <h4 className={styles.teamCardTitle}>Mobile App Designers</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/design-teams/product-designers" className={`card ${styles.teamCard}`}>
                      <img
                        className={styles.teamCardImage}
                        loading="lazy"
                        src="https://assets.mindtrust.com/img/design/product-designers.jpg?auto=format"
                        alt="Product designers"
                      />
                      <h4 className={styles.teamCardTitle}>Product Designers</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/design-teams/print-designers" className={`card ${styles.teamCard}`}>
                      <img
                        className={styles.teamCardImage}
                        loading="lazy"
                        src="https://assets.mindtrust.com/img/design/print-designers.jpg?auto=format"
                        alt="Print designers"
                      />
                      <h4 className={styles.teamCardTitle}>Print Designers</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/design-teams/packaging-designers" className={`card ${styles.teamCard}`}>
                      <img
                        className={styles.teamCardImage}
                        loading="lazy"
                        src="https://assets.mindtrust.com/img/design/package-designers.jpg?auto=format"
                        alt="Packaging Designers"
                      />
                      <h4 className={styles.teamCardTitle}>Packaging Designers</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/design-teams/user-interface-designers" className={`card ${styles.teamCard}`}>
                      <img
                        className={styles.teamCardImage}
                        loading="lazy"
                        src="https://assets.mindtrust.com/img/design/ui-designers.jpg?auto=format"
                        alt="UI Designers"
                      />
                      <h4 className={styles.teamCardTitle}>UI Designers</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/design-teams/user-experience-designers" className={`card ${styles.teamCard}`}>
                      <img
                        className={styles.teamCardImage}
                        loading="lazy"
                        src="https://assets.mindtrust.com/img/design/ux-designers.jpg?auto=format"
                        alt="UX Designers"
                      />
                      <h4 className={styles.teamCardTitle}>UX Designers</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/design-teams/3d-designers" className={`card ${styles.teamCard}`}>
                      <img
                        className={styles.teamCardImage}
                        loading="lazy"
                        src="https://assets.mindtrust.com/img/design/visual-designers.jpg?auto=format"
                        alt="3D Designers"
                      />
                      <h4 className={styles.teamCardTitle}>3D Designers</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/design-teams/website-designers" className={`card ${styles.teamCard}`}>
                      <img
                        className={styles.teamCardImage}
                        loading="lazy"
                        src="https://assets.mindtrust.com/img/design/web-designers.jpg?auto=format"
                        alt="Website Designers"
                      />
                      <h4 className={styles.teamCardTitle}>Website Designers</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* {hasWallItems && (
          <aside className={styles.skills} aria-labelledby="possibilities">
            <div className="container">
              <h2 id="possibilities" className={`mt-animate__fade mt-animate section-heading display ${styles.skillsHeading}`}>
                One budget, unlimited possibilities
              </h2>
              <p className={`mt-animate__fade mt-animate section-description ${styles.skillsText}`}>
                With one flexible subscription for every design need you can cross hiring designers off your list for good. This is more than a few helping
                hands—it’s a mindtrust of elite designers who can fill skill gaps as they emerge and adapt to fit your needs over time. Your MindTrust design
                team includes experts across a wide array of specialties including:
              </p>
              <div className={styles.skill__categories}>
                <div className={styles["skill__categories-wrapper"]} id="expand__wrapper">
                  <div className={styles["skill-wrapper__inner"]}>
                    {wallItems.sort().map((item, index) => (
                      <a key={index} href={`/${item.silo.toLowerCase()}-teams/${item.urlSlug}`}>
                        {item.skill}
                      </a>
                    ))}
                  </div>
                </div>
                <div className={styles.expand} id="expand">Show all</div>
              </div>
            </div>
          </aside>
        )} */}
        <SiloForm category="design" />
        <SiloFooter silo="Design" footerTalents={footerTalents} />
      </Layout>
    </>
  )
}

export default SiloDesign

// export async function getStaticProps() {
//   const res = await fetch(
//     "https://api.hendrix.start.mindtrust.com/graphql?query={skills: cmsSkills { adjective metaDescription metaTitle silo siloMember siloMembers skill skillPlural skillSingular skillTeam skillTeams urlSlug}}"
//   )
//   const data = await res.json()
//   console.log("|||||||| RESPONSE ||||||||", res)
//   console.log("|||||||| JSON DATA ||||||||", data)
//   console.log("|||||||| SKILLS DATA ||||||||", data.skills)

//   return {
//     props: {
//       data: data.data
//     },
//   }
// }

// export const query = graphql`
//   query SiloDesignQuery {
// taas {
//   skills: cmsSkills {
//     adjective
//     metaDescription
//     metaTitle
//     silo
//     siloMember
//     siloMembers
//     skill
//     skillPlural
//     skillSingular
//     skillTeam
//     skillTeams
//     urlSlug
//   }
// }
//   }
// `
