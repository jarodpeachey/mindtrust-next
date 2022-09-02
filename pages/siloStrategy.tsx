import React from "react"
import Head from "../components/Head"
import Navigation from "../components/Navigation"
import TeamCard from "../components/cards/TeamCard"
import SceneBrowser from "../components/SceneBrowser"
import SceneTablet from "../components/SceneTablet"
import { scene1, scene2, scene3, teamCards, footerTalents } from "../../data/strategyPage"
import "../styles/partials/pages/_silo.scss"
import SiloFooter from "../components/SiloFooter"
import SiloForm from "../components/SiloForm"
import { graphql } from "gatsby"
import SiloToggleAnimation from "../components/SiloToggleAnimation"

const SiloStrategy = ({ data }) => {
  const hasWallItems = data.taas.skills.filter(silo => silo.silo.toLowerCase() === "strategy").length > 0
  let wallItems = []

  if (hasWallItems) {
    wallItems = data.taas.skills.filter(newSilo => newSilo.silo.toLowerCase() === "strategy")
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
      <Head
        title={"Strategy Teams as a Service (TaaS) - Hire top business & digital strategists "}
        silopage="true"
        description={
          "Top business experts for digital transformation, data science, fundraising, finance, and product and project management. Build your on-demand dream team today with our Teams as a Service platform."
        }
        bodyClass="silo strategy"
      />
      <header>
        <Navigation />

        <div className="hero">
          {/* <img loading="lazy" src="/media/img/backgrounds/strategy.svg" alt="Strategy icon" className="background--icon" /> */}
          <div className="container relative">
            <div className="row vertical-center">
              <div className="col-xl-5 col-lg-6 col-md-6">
                <h1 className="section-heading display">
                  Strategy
                  <br /> Teams as a Service (TaaS)
                </h1>
                <p className="section-description">Accelerate your innovation with industry-leading business strategists at your fingertips.</p>
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
              <sup>&reg;</sup>, you can affordably grow your business with fluid teams of expert strategists.
            </p>

            <SiloToggleAnimation
              cards={[
                {
                  category: "strategy",
                  title: "Digital Strategist",
                  hours: 10,
                  image: "https://assets.mindtrust.com/img/strategy/digital-strategist.jpg?auto=format",
                },
                {
                  category: "strategy",
                  title: "Fundraising Consultant",
                  hours: 10,
                  image: "https://assets.mindtrust.com/img/strategy/fundraising-consultant.jpg?auto=format",
                },
                {
                  category: "design",
                  title: "UX Researcher",
                  hours: 10,
                  image: "https://assets.mindtrust.com/img/strategy/ux-researcher.jpg?auto=format",
                },
                {
                  category: "development",
                  title: "Automation Expert",
                  hours: 7,
                  image: "https://assets.mindtrust.com/img/development/automation-expert.jpg?auto=format",
                },
                {
                  category: "strategy",
                  title: "Virtual CFO",
                  hours: 3,
                  image: "https://assets.mindtrust.com/img/strategy/virtual-cfo.jpg?auto=format",
                },
              ]}
              swapCards={[
                {
                  category: "strategy",
                  title: "Qual Researcher",
                  hours: 10,
                  image: "https://assets.mindtrust.com/img/strategy/qual-researcher.jpg?auto=format",
                },
                {
                  category: "strategy",
                  title: "Brand Strategist",
                  hours: 3,
                  image: "https://assets.mindtrust.com/img/strategy/brand-strategist.jpg?auto=format",
                },
              ]}
              slides={[
                {
                  title: "Access a fluid team of experts ",
                  description: "Get the design help you need from a team of experts you can trust.",
                  heading: "Project Kickoff: Your Strategy team forms",
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
            <h2 className="mt-animate__fade mt-animate section-heading display">MindTrust Strategy Services</h2>
            <p className="mt-animate__fade mt-animate section-description">
              For over a decade, we’ve tested and refined our processes delivering winning digital strategies, products, and teams for early stage, growth and
              Fortune 100 companies. MindTrust strategists follow a collaborative model — we marry our expertise with your vision to digitally transform and
              propel your business.
            </p>
            <div className="row">
              <div className="col-10 offset-1">
                <img loading="lazy" src="/media/img/section-arrow.svg" role="presentation" className="talent__arrow" alt="" />
              </div>
            </div>

            <div className="row scene flex-column-reverse flex-lg-row">
              <div className="col-lg-5">
                <h2 className="section-heading mt-animate__slide mt-animate" id="scene-one">
                  Accelerate your innovation
                </h2>
                <p className="mt-animate__slide mt-animate section-description">
                  You either keep up with the rapid pace of technological evolution or you get left behind. Our fluid innovation teams are the most efficient
                  way to get expert help future-proofing and digitally transforming your business for the modern economy.
                </p>
                <div className="flex mt-animate__slide mt-animate">
                  <a href="/strategy-teams/innovation-experts" className="no-hover" aria-disabled>
                    Innovation Strategy
                  </a>
                  <a href="/strategy-teams/design-thinking-experts" className="no-hover" aria-disabled>
                    Design Thinking
                  </a>
                  <a href="/strategy-teams/market-research-experts" className="no-hover" aria-disabled>
                    Market Research
                  </a>
                  <a href="/strategy-teams/digital-transformation-consultants" className="no-hover" aria-disabled>
                    Digital Transformation
                  </a>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 mt-animate__fade mt-animate">
                <SceneBrowser className="scene--one" captionID="scene-one" {...scene1} />
              </div>
            </div>

            <div className="row scene">
              <div className="col-lg-6 mt-animate__fade mt-animate">
                <SceneBrowser className="scene--two" captionID="scene-two" {...scene2} />
              </div>
              <div className="col-lg-5 offset-lg-1">
                <h2 id="scene-two" className="section-heading mt-animate__slide mt-animate">
                  Drive revenue and growth
                </h2>
                <p className="mt-animate__slide mt-animate section-description">
                  The road to a winning business is difficult and fraught with peril. Hedge your bets with seasoned entrepreneurial and financial strategists
                  who help drive executive decisions that supercharge your growth and valuation.
                </p>
                <div className="flex mt-animate__slide mt-animate">
                  <a href="/strategy-teams/business-consultants" className="no-hover" aria-disabled>
                    Business Consulting
                  </a>
                  <a href="/strategy-teams/revenue-operations-experts" className="no-hover" aria-disabled>
                    Revenue Operations
                  </a>
                  <a href="/strategy-teams/fundraising-consultants" className="no-hover" aria-disabled>
                    Fundraising Consulting
                  </a>
                  <a href="/strategy-teams/virtual-cfos" className="no-hover" aria-disabled>
                    Virtual CFO Services
                  </a>
                </div>
              </div>
            </div>

            <div className="row scene flex-column-reverse flex-lg-row">
              <div className="col-lg-5">
                <h2 className="section-heading mt-animate__slide mt-animate" id="scene-three">
                  Improve product management and project efficiency
                </h2>
                <p className="mt-animate__slide mt-animate section-description">
                  Let us assist you in streamlining and optimizing your company's business and product development workflows with better data visualization and
                  by eliminating redundant processes and tasks.
                </p>
                <div className="flex mt-animate__slide mt-animate">
                  <a href="/strategy-teams/product-managers" className="no-hover" aria-disabled>
                    Product Management
                  </a>
                  <a href="/strategy-teams/digital-project-managers" className="no-hover" aria-disabled>
                    Digital Project Management
                  </a>
                  <a href="/strategy-teams/data-scientists" className="no-hover" aria-disabled>
                    Data Science
                  </a>
                  <a href="/strategy-teams/workflow-optimization-experts" className="no-hover" aria-disabled>
                    Workflow Optimization
                  </a>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 mt-animate__fade mt-animate">
                <SceneTablet className="scene--three" captionID="scene-three" {...scene3} />
              </div>
            </div>
          </div>
        </section>
        <section className="team">
          <div className="container">
            <h2 className="mt-animate__fade mt-animate section-heading">Strategy teams that mean business</h2>
            <p className="mt-animate__fade mt-animate section-description">
              Building the best global business requires the best global teams. We choose our teams carefully so our people can be the secret to your success.
              With MindTrust, you’ll have access to a team of top business strategists at your service.
            </p>
            <div className="background">
              <h3>Your Strategy Team</h3>
              <div className="row">
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/strategy-teams/business-analysts" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/strategy/pic-1.jpg?auto=format" alt="" />
                    <h4>Business Analysts</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/strategy-teams/virtual-cfos" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/strategy/pic-2.jpg?auto=format" alt="" />
                    <h4>Virtual CFOs</h4>
                    
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                   
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/strategy-teams/financial-analysts" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/strategy/pic-3.jpg?auto=format" alt="" />
                    <h4>Financial Analysts</h4>
                    
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                   
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/strategy-teams/fundraising-consultants" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/strategy/pic-4.jpg?auto=format" alt="" />
                    <h4>Fundraising Consultants</h4>
                    
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>

                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/strategy-teams/business-intelligence-consultants" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/strategy/pic-5.jpg?auto=format" alt="" />
                    <h4>Business Intelligence Consultants</h4>
                    
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>

                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/strategy-teams/data-scientists" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/strategy/pic-6.jpg?auto=format" alt="" />
                    <h4>Data Scientists</h4>
                    
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>

                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/strategy-teams/product-managers" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/strategy/pic-7.jpg?auto=format" alt="" />
                    <h4>Product Managers</h4>
                    
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>

                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/strategy-teams/digital-project-managers" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/strategy/pic-8.jpg?auto=format" alt="" />
                    <h4>Digital Project Managers</h4>
                    
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>

                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/strategy-teams/agile-project-managers" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/strategy/pic-9.jpg?auto=format" alt="" />
                    <h4>Agile Project Managers</h4>
                    
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>

                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/strategy-teams/scrum-masters" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/strategy/pic-10.jpg?auto=format" alt="" />
                    <h4>Scrum Masters</h4>
                    
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>

                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/strategy-teams/digital-transformation-consultants" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/strategy/pic-11.jpg?auto=format" alt="" />
                    <h4>Digital Transformation Consultants</h4>
                    
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>

                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/strategy-teams/business-operations-analysts" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/strategy/pic-12.jpg?auto=format" alt="" />
                    <h4>Business Operations Analysts</h4>
                    
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
              With one flexible subscription for every strategy need you can cross hiring strategists off your list for good. This is more than a few helping
              hands—it’s a mindtrust of elite strategists who can fill skill gaps as they emerge and adapt to fit your needs over time. Your MindTrust strategy
              team includes experts across a wide array of specialties including:
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
      <SiloForm category="strategy" />
      <SiloFooter silo="Strategy" footerTalents={footerTalents} />
    </>
  )
}

export default SiloStrategy

export const query = graphql`
  query SiloStrategyQuery {
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
