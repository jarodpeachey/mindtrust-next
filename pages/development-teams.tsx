import React from "react"
import Layout from "../components/layout"
import Navigation from "../components/Navigation/Navigation"
import TeamCard from "../components/cards/TeamCard"
import SceneBrowser from "../components/Scenes/SceneBrowser"
import SceneTablet from "../components/Scenes/SceneTablet"
import ScenePhone from "../components/Scenes/ScenePhone"
import SiloFooter from "../components/SiloFooter/SiloFooter"
import SiloForm from "../components/SiloForm/SiloForm"
import SiloToggleAnimation from "../components/SiloToggleAnimation/SiloToggleAnimation"
import { scene1, scene2, scene3, teamCards, footerTalents } from "../data/developmentPage"
// import "../styles/partials/pages/_silo.scss"
import styles from "./SiloDevelopment.module.scss"
import Script from "../node_modules/next/script"

const SiloDevelopment = ({ data }) => {
  // const hasWallItems = data.taas.skills.filter(silo => silo.silo.toLowerCase() === "development").length > 0
  // let wallItems = []

  // if (hasWallItems) {
  //   wallItems = data.taas.skills.filter(newSilo => newSilo.silo.toLowerCase() === "development")
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
      <Layout title={"Development Teams as a Service."} silopage="true" bodyClass="silo development">
        <Script src="/js/siloTeamCards.js" strategy="lazyOnload" />

        <header>
          <Navigation />

          <div className={styles.hero}>
            {/* <img loading="lazy" src="/media/img/backgrounds/development.svg" alt="Development icon" className={styles["background--icon"]} /> */}
            <div className="container container--wide relative">
              <div className="row vertical-center">
                <div className="col-xl-5 col-lg-6 col-md-6">
                  <h1 className="section-heading display">
                    Development
                    <br /> Teams as a Service (TaaS)
                  </h1>
                  <p className="section-description">Build and ship amazing products with world-class developers at your fingertips.</p>
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
                <sup>&reg;</sup>, you can affordably grow your business with fluid teams of expert developers.
              </p>

              <SiloToggleAnimation
                cards={[
                  {
                    category: "development",
                    title: "Software Architect",
                    hours: 10,
                    image: "https://assets.mindtrust.com/img/development/software-architect.jpg?auto=format",
                  },
                  {
                    category: "development",
                    title: "Mobile Developer",
                    hours: 10,
                    image: "https://assets.mindtrust.com/img/development/mobile-developer.jpg?auto=format",
                  },
                  {
                    category: "design",
                    title: "UI/UX Designer",
                    hours: 10,
                    image: "https://assets.mindtrust.com/img/design/ui-ux-designer.jpg?auto=format",
                  },
                  {
                    category: "strategy",
                    title: "Product Manager",
                    hours: 7,
                    image: "https://assets.mindtrust.com/img/strategy/product-manager.jpg?auto=format",
                  },
                  {
                    category: "development",
                    title: "Full Stack Developer",
                    hours: 3,
                    image: "https://assets.mindtrust.com/img/development/full-stack-developer.jpg?auto=format",
                  },
                ]}
                swapCards={[
                  {
                    category: "development",
                    title: "Front End Developer",
                    hours: 10,
                    image: "https://assets.mindtrust.com/img/development/front-end-developer.jpg?auto=format",
                  },
                  {
                    category: "technology",
                    title: "DevOps Engineer",
                    hours: 3,
                    image: "https://assets.mindtrust.com/img/technology/dev-ops-engineer.jpg?auto=format",
                  },
                ]}
                slides={[
                  {
                    title: "Access a fluid team of experts ",
                    description: "Get the design help you need from a team of experts you can trust.",
                    heading: "Project Kickoff: Your Development team forms",
                  },
                  {
                    title: "Get the right help at the right time",
                    description: "Your fluid team adjusts to match your business or project requirements.",
                    heading: "Team members change. Project hours remain consistent.",
                  },
                  {
                    title: "Stop paying for idle time",
                    description: "Our platform load balances your growth - only pay for hours you use.",
                    heading: `Up to 500% savings vs. traditional hiring`,
                  },
                ]}
              />
            </div>
          </section>
          {/* FIX THIS DOT BURST */}
          <section className={styles["dot-burst overflow"]}>
            <div className="container">
              <h2 className="mt-animate__fade mt-animate section-heading display">MindTrust Development Services</h2>
              <p className="mt-animate__fade mt-animate section-description">
                Over the last decade we’ve tested and refined our processes delivering thousands of development sprints, products, and web experiences. Our
                expert developers can build whatever you can dream up, from websites to apps to emerging technologies — you name it, our team has built it.
              </p>
              <div className="row">
                <div className="col-10 offset-1">
                  <img loading="lazy" src="/media/img/section-arrow.svg" role="presentation" className="talent__arrow" alt="" />
                </div>
              </div>

              <div className={`row flex-column-reverse flex-lg-row ${styles.scene}`}>
                <div className="col-lg-5">
                  <h2 className="section-heading mt-animate__slide mt-animate text-left" id="scene-one">
                    Develop amazing user experiences
                  </h2>
                  <p className="section-description mt-animate__slide mt-animate text-left">
                    From complex interactive websites to alluring apps, we'll use our expertise to bring to life a user experience that attracts your ideal
                    audience, elevates your brand, and increases profitability.
                  </p>
                   <div className={`mt-animate__slide mt-animate ${styles.sceneLinks}`}>
                    <a className={styles.sceneLink} href="/development-teams/agile-developers"  aria-disabled="true">
                      Agile Development
                    </a>
                    <a className={styles.sceneLink} href="/development-teams/product-developers"  aria-disabled="true">
                      Product Development
                    </a>
                    <a className={styles.sceneLink} href="/development-teams/web-developers"  aria-disabled="true">
                      Web Development
                    </a>
                    <a className={styles.sceneLink} href="/development-teams/ios-developers"  aria-disabled="true">
                      iOS Developers
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1 mt-animate__fade mt-animate">
                  <SceneBrowser scene="developmentSceneOne" className={styles["scene--one"]} captionID="scene-one" {...scene1} />
                </div>
              </div>

              <div className={`row ${styles.scene}`}>
                <div className="col-lg-6 mt-animate__fade mt-animate">
                  <ScenePhone scene="developmentSceneTwo" className={styles["scene--two"]} captionID="scene-two" {...scene2} />
                </div>
                <div className="col-lg-5 offset-lg-1">
                  <h2 id="scene-two" className="section-heading mt-animate__slide mt-animate text-left">
                    Build game-changing apps
                  </h2>
                  <p className="section-description mt-animate__slide mt-animate text-left">
                    Have a lofty idea for an app or a game? Our team of hardcore developers will transform your concept into an enticing and thrilling product,
                    fully compatible with any modern mobile or desktop operating system.
                  </p>
                  <div className={`mt-animate__slide mt-animate ${styles.sceneLinks}`}>
                    <a className={styles.sceneLink} href="/development-teams/desktop-app-developers"  aria-disabled="true">
                      Desktop Applications
                    </a>
                    <a className={styles.sceneLink} href="/development-teams/web-application-developers"  aria-disabled="true">
                      Web Applications
                    </a>
                    <a className={styles.sceneLink} href="/development-teams/wearables-developers"  aria-disabled="true">
                      Smart Watch and Wearables
                    </a>
                    <a className={styles.sceneLink} href="/development-teams/game-developers"  aria-disabled="true">
                      Mobile Apps and Games
                    </a>
                  </div>
                </div>
              </div>
              <div className={`row flex-column-reverse flex-lg-row ${styles.scene}`}>
                <div className="col-lg-5">
                  <h2 className="section-heading mt-animate__slide mt-animate text-left" id="scene-three">
                    Ship better software products
                  </h2>
                  <p className="section-description mt-animate__slide mt-animate text-left">
                    Many entrepreneurs think they're great at building digital products, but in reality, most fail. Through intensive research, planning, and
                    meticulous testing, teaming up with MindTrust's all-star developers will significantly increase your odds for success.
                  </p>
                  <div className={`mt-animate__slide mt-animate ${styles.sceneLinks}`}>
                    <a className={styles.sceneLink} href="/development-teams/saas-developers"  aria-disabled="true">
                      SaaS Platforms
                    </a>
                    <a className={styles.sceneLink} href="/development-teams/blockchain-developers"  aria-disabled="true">
                      Blockchain Solutions
                    </a>
                    <a className={styles.sceneLink} href="/development-teams/ecommerce-developers"  aria-disabled="true">
                      eCommerce
                    </a>
                    <a className={styles.sceneLink} href="/development-teams/augmented-reality-developers"  aria-disabled="true">
                      Mixed Reality [AR, VR]
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1 mt-animate__fade mt-animate">
                  <SceneTablet scene="developmentSceneThree" className={styles["scene--three"]} captionID="scene-three" {...scene3} />
                </div>
              </div>
            </div>
          </section>

          <section className={`cut--bottom-left ${styles.experts}`}>
            <div className="container">
              <h2 className={`section-heading mt-animate mt-animate__fade display ${styles.expertsHeading}`}>Expert developers for the world's top technologies</h2>
              <div className="row stack-animate">
                <div className="col-6 col-md-4">
                  <a href="/development-teams/android-developers" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-android.svg" alt="Android logo" />
                    <p className={styles.expertsText}>Android Developers</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/development-teams/angular-developers" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-angular.svg" alt="Angular logo" />
                    <p className={styles.expertsText}>Angular Developers</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/development-teams/c-plus-plus-developers" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-c-plus-plus.svg" alt="C++ logo" />
                    <p className={styles.expertsText}>C++ Developers</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/development-teams/react-developers" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-react-js.svg" alt="React logo" />
                    <p className={styles.expertsText}>React Developers</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/development-teams/flutter-developers" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-flutter.svg" alt="Flutter logo" />
                    <p className={styles.expertsText}>Flutter Developers</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/development-teams/python-developers" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-python-generic.svg" alt="HTML logo" />
                    <p className={styles.expertsText}>Python Developers</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/development-teams/hubspot-developers" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-hubspot.svg" alt="Hubspot logo" />
                    <p className={styles.expertsText}>HubSpot Developers</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/development-teams/apple-developers" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-apple-developer.svg" alt="Apple logo" />
                    <p className={styles.expertsText}>Apple Developers</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/development-teams/java-developers" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-java.svg" alt="Java logo" />
                    <p className={styles.expertsText}>Java Developers</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/development-teams/javascript-developers" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-javascript.svg" alt="Javascript logo" />
                    <p className={styles.expertsText}>JavaScript Developers</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/development-teams/node-js-developers" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-node-js.svg" alt="NodeJS logo" />
                    <p className={styles.expertsText}>Node.js Developers</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/development-teams/dot-net-developers" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-net.svg" alt=".Net logo" />
                    <p className={styles.expertsText}>.NET Developers</p>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.team}>
            <div className="container">
              <h2 className="section-heading">Development teams that mean business</h2>
              <p className="section-description">
                Building the best global products requires the best global teams. We choose our teams carefully so our people can be the secret to your success.
                With MindTrust, you’ll have access to a team of top developers at your service.
              </p>
              <div className={styles.background}>
                <h3>Your Development Team</h3>
                <div className="row">
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/development-teams/back-end-developers" className={`card ${styles.teamCard}`}>
                      <img className={styles.teamCardImage} loading="lazy" src="https://assets.mindtrust.com/img/development/backend-developers.jpg?auto=format" alt="Back end developers" />
                      <h4 className={styles.teamCardTitle}>Back-End Developers</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/development-teams/blockchain-developers" className={`card ${styles.teamCard}`}>
                      <img className={styles.teamCardImage}
                        loading="lazy"
                        src="https://assets.mindtrust.com/img/development/blockchain-developers.jpg?auto=format"
                        alt="Blockchain developers"
                      />
                      <h4 className={styles.teamCardTitle}>Blockchain Developers</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/development-teams/cms-developers" className={`card ${styles.teamCard}`}>
                      <img className={styles.teamCardImage} loading="lazy" src="https://assets.mindtrust.com/img/development/cms-developers.jpg?auto=format" alt="CMS developers" />
                      <h4 className={styles.teamCardTitle}>CMS Developers</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/development-teams/database-developers" className={`card ${styles.teamCard}`}>
                      <img className={styles.teamCardImage} loading="lazy" src="https://assets.mindtrust.com/img/development/database-developers.jpg?auto=format" alt="Database developers" />
                      <h4 className={styles.teamCardTitle}>Database Developers</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/development-teams/game-developers" className={`card ${styles.teamCard}`}>
                      <img className={styles.teamCardImage} loading="lazy" src="https://assets.mindtrust.com/img/technology/dev-ops-engineer.jpg?auto=format" alt="Game developers" />
                      <h4 className={styles.teamCardTitle}>Game Developers</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/development-teams/ecommerce-developers" className={`card ${styles.teamCard}`}>
                      <img className={styles.teamCardImage} loading="lazy" src="https://assets.mindtrust.com/img/development/ecommerce-developers.jpg?auto=format" alt="Ecommerce developers" />
                      <h4 className={styles.teamCardTitle}>Ecommerce Developers</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/development-teams/front-end-developers" className={`card ${styles.teamCard}`}>
                      <img className={styles.teamCardImage} loading="lazy" src="https://assets.mindtrust.com/img/development/frontend-developers.jpg?auto=format" alt="Front end developers" />
                      <h4 className={styles.teamCardTitle}>Front-End Developers</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/development-teams/full-stack-developers" className={`card ${styles.teamCard}`}>
                      <img className={styles.teamCardImage} loading="lazy" src="https://assets.mindtrust.com/img/development/fullstack-developers.jpg?auto=format" alt="Full stack developers" />
                      <h4 className={styles.teamCardTitle}>Full Stack Developers</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/development-teams/api-developers" className={`card ${styles.teamCard}`}>
                      <img className={styles.teamCardImage} loading="lazy" src="https://assets.mindtrust.com/img/development/machine-learning-engineers.jpg?auto=format" alt="API Developers" />
                      <h4 className={styles.teamCardTitle}>API Developers</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/development-teams/mobile-app-developers" className={`card ${styles.teamCard}`}>
                      <img className={styles.teamCardImage}
                        loading="lazy"
                        src="https://assets.mindtrust.com/img/development/mobile-app-developers.jpg?auto=format"
                        alt="Mobile app developers"
                      />
                      <h4 className={styles.teamCardTitle}>Mobile App Developers</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/development-teams/software-developers" className={`card ${styles.teamCard}`}>
                      <img className={styles.teamCardImage} loading="lazy" src="https://assets.mindtrust.com/img/development/software-developers.jpg?auto=format" alt="Software developers" />
                      <h4 className={styles.teamCardTitle}>Software Developers</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/development-teams/web-developers" className={`card ${styles.teamCard}`}>
                      <img className={styles.teamCardImage} loading="lazy" src="https://assets.mindtrust.com/img/development/web-developers.jpg?auto=format" alt="Web developers" />
                      <h4 className={styles.teamCardTitle}>Web Developers</h4>
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
              <h2 id="possibilities" className="mt-animate__fade mt-animate section-heading display">
                One budget, unlimited possibilities
              </h2>
              <p className="mt-animate__fade mt-animate section-description">
                With one flexible subscription for every development need you can cross hiring developers off your list for good. This is more than a few
                helping hands—it’s a mindtrust of elite developers who can fill skill gaps as they emerge and adapt to fit your needs over time. Your MindTrust
                development team includes experts across a wide array of specialties including:
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
                <div id="expand">Show all</div>
              </div>
            </div>
          </aside>
        )} */}
        <SiloForm category="development" />
        <SiloFooter silo="Development" footerTalents={footerTalents} />
      </Layout>
    </>
  )
}

export default SiloDevelopment

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
