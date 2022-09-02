import React from "react"
import Head from "../components/Head"
import Navigation from "../components/Navigation"
import TeamCard from "../components/cards/TeamCard"
import SceneBrowser from "../components/SceneBrowser"
import ScenePhone from "../components/ScenePhone"
import SceneTablet from "../components/SceneTablet"
import { scene1, scene2, scene3, teamCards, footerTalents } from "../../data/developmentPage"
import "../styles/partials/pages/_silo.scss"
import SiloFooter from "../components/SiloFooter"
import SiloCard from "../components/cards/SiloCard"
import SiloForm from "../components/SiloForm"
import { graphql } from "gatsby"
import SiloToggleAnimation from "../components/SiloToggleAnimation"
import { formatURL } from "../utils/formatURL"
import { BRIDGE_APP_URL } from "../config"

const SiloDevelopment = ({ data }) => {
  const hasWallItems = data.taas.skills.filter(silo => silo.silo.toLowerCase() === "development").length > 0
  let wallItems = []

  if (hasWallItems) {
    wallItems = data.taas.skills.filter(newSilo => newSilo.silo.toLowerCase() === "development")
    wallItems.sort(function (a, b) {
      if (a.skill.toLowerCase() < b.skill.toLowerCase()) {
        return -1
      }
      if (a.skill.toLowerCase() > b.skill.toLowerCase()) {
        return 1
      }
      return 0
    })
  }

  return (
    <>
      <Head title={"Development Teams as a Service."} silopage="true" bodyClass="silo development" />
      <header>
        <Navigation />

        <div className="hero">
          {/* <img loading="lazy" src="/media/img/backgrounds/development.svg" alt="Development icon" className="background--icon" /> */}
          <div className="container relative">
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
                <ul className="team-cards">
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
        <div className="container" id="trusted-by">
          <div className="logos">
            <div className="logo">
              <div className="text">Trusted by:</div>
            </div>
            <div className="logo">
              <img src="/media/img/logos/logo-amex.svg" alt="American Express logo" />
            </div>
            <div className="logo">
              <img src="/media/img/logos/logo-cvs.svg" alt="CVS logo" />
            </div>
            <div className="logo">
              <img src="/media/img/logos/logo-honeywell.svg" alt="Honeywell logo" />
            </div>
            <div className="logo">
              <img src="/media/img/logos/logo-deloitte.svg" alt="Deloitte logo" />
            </div>
            <div className="logo">
              <img src="/media/img/logos/logo-visa.svg" alt="Visa logo" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="toggle-section overflow">
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
        <section className="dot-burst overflow">
          <div className="container">
            <h2 className="mt-animate__fade mt-animate section-heading display">MindTrust Development Services</h2>
            <p className="mt-animate__fade mt-animate section-description">
              Over the last decade we’ve tested and refined our processes delivering thousands of development sprints, products, and web experiences. Our expert
              developers can build whatever you can dream up, from websites to apps to emerging technologies — you name it, our team has built it.
            </p>
            <div className="row">
              <div className="col-10 offset-1">
                <img loading="lazy" src="/media/img/section-arrow.svg" role="presentation" className="talent__arrow" alt="" />
              </div>
            </div>

            <div className="row scene flex-column-reverse flex-lg-row">
              <div className="col-lg-5">
                <h2 className="section-heading mt-animate__slide mt-animate" id="scene-one">
                  Develop amazing user experiences
                </h2>
                <p className="section-description mt-animate__slide mt-animate">
                  From complex interactive websites to alluring apps, we'll use our expertise to bring to life a user experience that attracts your ideal
                  audience, elevates your brand, and increases profitability.
                </p>
                <div className="flex mt-animate__slide mt-animate">
                  <a href="/development-teams/agile-developers" className="no-hover" aria-disabled="true">
                    Agile Development
                  </a>
                  <a href="/development-teams/product-developers" className="no-hover" aria-disabled="true">
                    Product Development
                  </a>
                  <a href="/development-teams/web-developers" className="no-hover" aria-disabled="true">
                    Web Development
                  </a>
                  <a href="/development-teams/ios-developers" className="no-hover" aria-disabled="true">
                    iOS Developers
                  </a>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 mt-animate__fade mt-animate">
                <SceneBrowser className="scene--one" captionID="scene-one" {...scene1} />
              </div>
            </div>

            <div className="row scene">
              <div className="col-lg-6 mt-animate__fade mt-animate">
                <ScenePhone className="scene--two" captionID="scene-two" {...scene2} />
              </div>
              <div className="col-lg-5 offset-lg-1">
                <h2 id="scene-two" className="section-heading mt-animate__slide mt-animate">
                  Build game-changing apps
                </h2>
                <p className="section-description mt-animate__slide mt-animate">
                  Have a lofty idea for an app or a game? Our team of hardcore developers will transform your concept into an enticing and thrilling product,
                  fully compatible with any modern mobile or desktop operating system.
                </p>
                <div className="flex mt-animate__slide mt-animate">
                  <a href="/development-teams/desktop-app-developers" className="no-hover" aria-disabled="true">
                    Desktop Applications
                  </a>
                  <a href="/development-teams/web-application-developers" className="no-hover" aria-disabled="true">
                    Web Applications
                  </a>
                  <a href="/development-teams/wearables-developers" className="no-hover" aria-disabled="true">
                    Smart Watch and Wearables
                  </a>
                  <a href="/development-teams/game-developers" className="no-hover" aria-disabled="true">
                    Mobile Apps and Games
                  </a>
                </div>
              </div>
            </div>
            <div className="row scene flex-column-reverse flex-lg-row">
              <div className="col-lg-5">
                <h2 className="section-heading mt-animate__slide mt-animate" id="scene-three">
                  Ship better software products
                </h2>
                <p className="section-description mt-animate__slide mt-animate">
                  Many entrepreneurs think they're great at building digital products, but in reality, most fail. Through intensive research, planning, and
                  meticulous testing, teaming up with MindTrust's all-star developers will significantly increase your odds for success.
                </p>
                <div className="flex mt-animate__slide mt-animate">
                  <a href="/development-teams/saas-developers" className="no-hover" aria-disabled="true">
                    SaaS Platforms
                  </a>
                  <a href="/development-teams/blockchain-developers" className="no-hover" aria-disabled="true">
                    Blockchain Solutions
                  </a>
                  <a href="/development-teams/ecommerce-developers" className="no-hover" aria-disabled="true">
                    eCommerce
                  </a>
                  <a href="/development-teams/augmented-reality-developers" className="no-hover" aria-disabled="true">
                    Mixed Reality [AR, VR]
                  </a>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 mt-animate__fade mt-animate">
                <SceneTablet className="scene--three" captionID="scene-three" {...scene3} />
              </div>
            </div>
          </div>
        </section>

        <section className="experts cut--bottom-left">
          <div className="container">
            <h2 className="mt-animate__fade mt-animate section-heading display">Expert developers for the world's top technologies</h2>
            <div className="row stack-animate">
              <div className="col-6 col-md-4">
                <a href="/development-teams/android-developers" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-android.svg" alt="Android logo" />
                  <p>Android Developers</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/development-teams/angular-developers" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-angular.svg" alt="Angular logo" />
                  <p>Angular Developers</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/development-teams/c-plus-plus-developers" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-c-plus-plus.svg" alt="C++ logo" />
                  <p>C++ Developers</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/development-teams/react-developers" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-react-js.svg" alt="React logo" />
                  <p>React Developers</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/development-teams/flutter-developers" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-flutter.svg" alt="Flutter logo" />
                  <p>Flutter Developers</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/development-teams/python-developers" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-python-generic.svg" alt="HTML logo" />
                  <p>Python Developers</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/development-teams/hubspot-developers" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-hubspot.svg" alt="Hubspot logo" />
                  <p>HubSpot Developers</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/development-teams/apple-developers" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-apple-developer.svg" alt="Apple logo" />
                  <p>Apple Developers</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/development-teams/java-developers" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-java.svg" alt="Java logo" />
                  <p>Java Developers</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/development-teams/javascript-developers" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-javascript.svg" alt="Javascript logo" />
                  <p>JavaScript Developers</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/development-teams/node-js-developers" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-node-js.svg" alt="NodeJS logo" />
                  <p>Node.js Developers</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/development-teams/dot-net-developers" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-net.svg" alt=".Net logo" />
                  <p>.NET Developers</p>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="team">
          <div className="container">
            <h2 className="section-heading">Development teams that mean business</h2>
            <p className="mt-animate__fade mt-animate section-description">
              Building the best global products requires the best global teams. We choose our teams carefully so our people can be the secret to your success.
              With MindTrust, you’ll have access to a team of top developers at your service.
            </p>
            <div className="background">
              <h3>Your Development Team</h3>
              <div className="row">
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/development-teams/back-end-developers" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/development/backend-developers.jpg?auto=format" alt="Back end developers" />
                    <h4>Back-End Developers</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/development-teams/blockchain-developers" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/development/blockchain-developers.jpg?auto=format" alt="Blockchain developers" />
                    <h4>Blockchain Developers</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/development-teams/cms-developers" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/development/cms-developers.jpg?auto=format" alt="CMS developers" />
                    <h4>CMS Developers</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/development-teams/database-developers" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/development/database-developers.jpg?auto=format" alt="Database developers" />
                    <h4>Database Developers</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/development-teams/game-developers" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/technology/dev-ops-engineer.jpg?auto=format" alt="Game developers" />
                    <h4>Game Developers</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/development-teams/ecommerce-developers" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/development/ecommerce-developers.jpg?auto=format" alt="Ecommerce developers" />
                    <h4>Ecommerce Developers</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/development-teams/front-end-developers" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/development/frontend-developers.jpg?auto=format" alt="Front end developers" />
                    <h4>Front-End Developers</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/development-teams/full-stack-developers" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/development/fullstack-developers.jpg?auto=format" alt="Full stack developers" />
                    <h4>Full Stack Developers</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/development-teams/api-developers" className="card">
                    <img
                      loading="lazy"
                      src="https://assets.mindtrust.com/img/development/machine-learning-engineers.jpg?auto=format"
                      alt="API Developers"
                    />
                    <h4>API Developers</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/development-teams/mobile-app-developers" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/development/mobile-app-developers.jpg?auto=format" alt="Mobile app developers" />
                    <h4>Mobile App Developers</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/development-teams/software-developers" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/development/software-developers.jpg?auto=format" alt="Software developers" />
                    <h4>Software Developers</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/development-teams/web-developers" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/development/web-developers.jpg?auto=format" alt="Web developers" />
                    <h4>Web Developers</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {hasWallItems && (
        <aside className="skills" aria-labelledby="possibilities">
          <div className="container">
            <h2 id="possibilities" className="mt-animate__fade mt-animate section-heading display">
              One budget, unlimited possibilities
            </h2>
            <p className="mt-animate__fade mt-animate section-description">
              With one flexible subscription for every development need you can cross hiring developers off your list for good. This is more than a few helping
              hands—it’s a mindtrust of elite developers who can fill skill gaps as they emerge and adapt to fit your needs over time. Your MindTrust
              development team includes experts across a wide array of specialties including:
            </p>
            <div className="skill__categories">
              <div className="skill__categories-wrapper" id="expand__wrapper">
                <div className="skill-wrapper__inner">
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
      )}
      <SiloForm category="development" />
      <SiloFooter silo="Development" footerTalents={footerTalents} />
    </>
  )
}

export default SiloDevelopment

export const query = graphql`
  query SiloDevelopmentQuery {
    taas {
      skills: cmsSkills {
        adjective
        metaDescription
        metaTitle
        silo
        siloMember
        siloMembers
        skill
        skillPlural
        skillSingular
        skillTeam
        skillTeams
        urlSlug
      }
    }
  }
`
