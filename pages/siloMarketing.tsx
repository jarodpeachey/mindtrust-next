import React from "react"
import Head from "../components/Head"
import Navigation from "../components/Navigation"
import TeamCard from "../components/cards/TeamCard"
import SceneBrowser from "../components/SceneBrowser"
import { scene1, scene2, scene3, teamCards, footerTalents } from "../../data/marketingPage"
import "../styles/partials/pages/_silo.scss"
import SiloFooter from "../components/SiloFooter"
import SiloCard from "../components/cards/SiloCard"
import SiloForm from "../components/SiloForm"
import { graphql } from "gatsby"
import SiloToggleAnimation from "../components/SiloToggleAnimation"
import SceneTablet from "../components/SceneTablet"
import { formatURL } from "../utils/formatURL"
import { BRIDGE_APP_URL } from "../config"

const SiloMarketing = ({ data }) => {
  const hasWallItems = data.taas.skills.filter(silo => silo.silo.toLowerCase() === "marketing").length > 0
  let wallItems = []

  if (hasWallItems) {
    wallItems = data.taas.skills.filter(newSilo => newSilo.silo.toLowerCase() === "marketing")
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
      <Head title={"Marketing Teams as a Service."} silopage="true" bodyClass="silo marketing" />
      <header>
        <Navigation />

        <div className="hero">
          {/* <img loading="lazy" src="/media/img/backgrounds/marketing.svg" alt="Marketing icon" className="background--icon" /> */}
          <div className="container relative">
            <div className="row vertical-center">
              <div className="col-xl-5 col-lg-6 col-md-6">
                <h1 className="section-heading display">
                  Marketing
                  <br /> Teams as a Service (TaaS)
                </h1>
                <p className="section-description">Deliver data-driven results with talented and experienced marketers at your fingertips.</p>
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
              <sup>&reg;</sup>, you can affordably grow your business with fluid teams of expert marketers.
            </p>

            <SiloToggleAnimation
              cards={[
                {
                  category: "strategy",
                  title: "Brand Strategist",
                  hours: 10,
                  image: "https://assets.mindtrust.com/img/strategy/brand-strategist.jpg?auto=format",
                },
                {
                  category: "marketing",
                  title: "Copywriter",
                  hours: 10,
                  image: "https://assets.mindtrust.com/img/marketing/copywriter.jpg?auto=format",
                },
                {
                  category: "design",
                  title: "Creative Director",
                  hours: 10,
                  image: "https://assets.mindtrust.com/img/design/creative-director.jpg?auto=format",
                },
                {
                  category: "development",
                  title: "Web Developer",
                  hours: 7,
                  image: "https://assets.mindtrust.com/img/development/web-developer.jpg?auto=format",
                },
                {
                  category: "marketing",
                  title: "SEO Expert",
                  hours: 3,
                  image: "https://assets.mindtrust.com/img/marketing/seo-expert.jpg?auto=format",
                },
              ]}
              swapCards={[
                {
                  category: "marketing",
                  title: "Social Media Manager",
                  hours: 10,
                  image: "https://assets.mindtrust.com/img/marketing/social-media-manager.jpg?auto=format",
                },
                {
                  category: "production",
                  title: "Video Producer",
                  hours: 3,
                  image: "https://assets.mindtrust.com/img/production/video-producer.jpg?auto=format",
                },
              ]}
              slides={[
                {
                  title: "Access a fluid team of experts ",
                  description: "Get the design help you need from a team of experts you can trust.",
                  heading: "Project Kickoff: Your Marketing team forms",
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
            <h2 className="mt-animate__fade mt-animate section-heading display">MindTrust Marketing Services</h2>
            <p className="mt-animate__fade mt-animate section-description">
              Over the last decade we’ve tested and refined our processes over thousands of projects and marketing campaigns. MindTrust marketers are industry
              veterans and data-driven professionals who tailor their strategies to your business goals. Whether you’re looking to get to the top of the search
              results, build a memorable brand, or drive demand, we can help you grow your business.
            </p>
            <div className="row">
              <div className="col-10 offset-1">
                <img loading="lazy" src="/media/img/section-arrow.svg" role="presentation" className="talent__arrow" alt="" />
              </div>
            </div>

            <div className="row scene flex-column-reverse flex-lg-row">
              <div className="col-lg-5">
                <h2 className="section-heading mt-animate__slide mt-animate" id="scene-one">
                  Attract the Right Prospects
                </h2>
                <p className="mt-animate__slide mt-animate section-description">
                  Drive more traffic for your business with a winning digital marketing strategy. MindTrust marketers know how to build a marketing strategy
                  that will bring the right people to you and keep them on your site.
                </p>
                <div className="flex mt-animate__slide mt-animate">
                  <a href="/marketing-teams/digital-marketing-strategists" className="no-hover" aria-disabled="true">
                    Digital Marketing Strategy
                  </a>
                  <a href="/marketing-teams/branding-experts" className="no-hover" aria-disabled="true">
                    Brand Identity and Messaging
                  </a>
                  <a href="/marketing-teams/search-engine-optimization-experts" className="no-hover" aria-disabled="true">
                    Web Design and SEO
                  </a>
                  <a href="/marketing-teams/search-engine-marketing-experts" className="no-hover" aria-disabled="true">
                    Advertising and SEM
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
                  Convert High-Quality Leads
                </h2>
                <p className="mt-animate__slide mt-animate section-description">
                  Build your leads with innovative conversion optimization techniques. Whether you’re looking for more leads or to better understand who’s in
                  your current funnel, MindTrust marketing specialists will help you attract, convert, and qualify your leads.
                </p>
                <div className="flex mt-animate__slide mt-animate">
                  <a href="/marketing-teams/conversion-rate-optimization-experts" className="no-hover" aria-disabled="true">
                    Conversion Rate Optimization (CRO)
                  </a>
                  <a href="/marketing-teams/marketing-analysts" className="no-hover" aria-disabled="true">
                    Lead Scoring and Nurturing
                  </a>
                  <a href="/marketing-teams/social-media-marketers" className="no-hover" aria-disabled="true">
                    Social Media Marketing
                  </a>
                  <a href="/marketing-teams/marketing-automation-experts" className="no-hover" aria-disabled="true">
                    Marketing Automation
                  </a>
                </div>
              </div>
            </div>
            <div className="row scene flex-column-reverse flex-lg-row">
              <div className="col-lg-5">
                <h2 className="section-heading mt-animate__slide mt-animate" id="scene-three">
                  Get More Customers
                </h2>
                <p className="mt-animate__slide mt-animate section-description">
                  Close sales effortlessly with prospects who already know, like, and trust you. Our methodology is built on trust. MindTrust professionals will
                  build credibility with your prospects long before they get to the sales team, making for an easy conversation and delightful customer
                  experience.
                </p>
                <div className="flex mt-animate__slide mt-animate">
                  <a href="/marketing-teams/crm-experts" className="no-hover" aria-disabled="true">
                    CRM Software
                  </a>
                  <a href="/marketing-teams/sales-enablement-experts" className="no-hover" aria-disabled="true">
                    Sales Enablement
                  </a>
                  <a href="/marketing-teams/marketing-experts" className="no-hover" aria-disabled="true">
                    Personalized Marketing
                  </a>
                  <a href="/marketing-teams/marketing-analytics-experts" className="no-hover" aria-disabled="true">
                    Analytics and Optimization
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
            <h2 className="mt-animate__fade mt-animate section-heading display">Marketing experts for today’s leading platforms</h2>
            <div className="row stack-animate">
              <div className="col-6 col-md-4">
                <a href="/marketing-teams/hubspot-experts" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-hubspot.svg" alt="HubSpot logo" />
                  <p>HubSpot Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/marketing-teams/sharpspring-experts" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-sharpspring.svg" alt="SharpSpring Experts logo" />
                  <p>SharpSpring Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/marketing-teams/salesforce-experts" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-salesforce.svg" alt="Salesforce CRM logo" />
                  <p>Salesforce Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/marketing-teams/marketo-experts" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-marketo.svg" alt="Marketo logo" />
                  <p>Marketo Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/marketing-teams/linkedin-marketing-experts" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-linkedin.svg" alt="Linkedin Experts logo" />
                  <p>Linkedin Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/marketing-teams/mailchimp-experts" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-mailchimp.svg" alt="Mailchimp logo" />
                  <p>Mailchimp Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/marketing-teams/wistia-experts" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-wista.svg" alt="Wista logo" />
                  <p>Wistia Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/marketing-teams/optimizely-experts" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-optimizely.svg" alt="Optimizely logo" />
                  <p>Optimizely Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/marketing-teams/unbounce-experts" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-unbounce.svg" alt="Unbounce logo" />
                  <p>Unbounce Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/marketing-teams/google-ads-experts" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-google-ads.svg" alt="Google Adwords logo" />
                  <p>Google Ads Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/marketing-teams/facebook-ads-experts" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-facebook.svg" alt="Facebook Ads Experts logo" />
                  <p>Facebook Ads Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/marketing-teams/twitter-experts" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-twitter.svg" alt="Twitter logo" />
                  <p>Twitter Experts</p>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="team">
          <div className="container">
            <h2 className="section-heading">Marketing teams that mean business</h2>
            <p className="mt-animate__fade mt-animate section-description">
              Delivering the best campaigns requires the best global teams. We choose our teams carefully so our people can be the secret to your success. With
              MindTrust, you’ll have access to a team of the world’s top marketers at your service.
            </p>
            <div className="background">
              <h3>Your Marketing Team</h3>
              <div className="row">
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/marketing-teams/communication-specialists" className="card">
                    <img
                      loading="lazy"
                      src="https://assets.mindtrust.com/img/marketing/communication-specialists.jpg?format=auto"
                      alt="Communication specislists"
                    />
                    <h4>Communication Specialists</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/marketing-teams/content-managers" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/marketing/content-managers.jpg?format=auto" alt="Content managers" />
                    <h4>Content Managers</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/marketing-teams/copywriters" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/marketing/copywriters.jpg?format=auto" alt="Copywriters" />
                    <h4>Copywriters</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/marketing-teams/digital-strategists" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/marketing/digital-strategists.jpg?format=auto" alt="Digital strategists" />
                    <h4>Digital Strategists</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/marketing-teams/ppc-ads-experts" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/marketing/editing-services.jpg?format=auto" alt="Editors" />
                    <h4>PPC Ads Experts</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/marketing-teams/email-marketing-experts" className="card">
                    <img
                      loading="lazy"
                      src="https://assets.mindtrust.com/img/marketing/email-marketing-specialists.jpg?format=auto"
                      alt="Email marketing specialists"
                    />
                    <h4>Email Marketing Experts</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/marketing-teams/marketing-analysts" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/marketing/google-analytics-experts.jpg?format=auto" alt="Marketing Analysts" />
                    <h4>Marketing Analysts</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/marketing-teams/video-marketers" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/marketing/marcomm-specialists.jpg?format=auto" alt="Video Marketers" />
                    <h4>Video Marketers</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/marketing-teams/seo-experts" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/marketing/marketing-directors.jpg?format=auto" alt="Marketing directors" />
                    <h4>SEO Experts</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/marketing-teams/market-research-analysts" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/marketing/market-researchers.jpg?format=auto" alt="Market Research Analysts" />
                    <h4>Market Research Analysts</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/marketing-teams/media-buyers" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/marketing/media-directors.jpg?format=auto" alt="Media Buyers" />
                    <h4>Media Buyers</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/marketing-teams/public-relations-experts" className="card">
                    <img
                      loading="lazy"
                      src="https://assets.mindtrust.com/img/marketing/public-relations-directors.jpg?format=auto"
                      alt="Public Relations Experts"
                    />
                    <h4>Public Relations Experts</h4>
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
              With one flexible subscription for every marketing need you can cross hiring marketers off your list for good. This is more than a few helping
              hands—it’s a mindtrust of elite marketers who can fill skill gaps as they emerge and adapt to fit your needs over time. Your MindTrust marketing
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
      <SiloForm category="marketing" />
      <SiloFooter silo="Marketing" footerTalents={footerTalents} />
    </>
  )
}

export default SiloMarketing

export const query = graphql`
  query SiloMarketingQuery {
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
