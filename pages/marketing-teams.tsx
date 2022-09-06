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
import { scene1, scene2, scene3, teamCards, footerTalents } from "../data/marketingPage"
// import "../styles/partials/pages/_silo.scss"
import styles from "./SiloMarketing.module.scss"
import Script from "../node_modules/next/script"

const SiloMarketing = ({ data }) => {
  // const hasWallItems = data.taas.skills.filter(silo => silo.silo.toLowerCase() === "marketing").length > 0
  // let wallItems = []

  // if (hasWallItems) {
  //   wallItems = data.taas.skills.filter(newSilo => newSilo.silo.toLowerCase() === "marketing")
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
      <Layout title={"Marketing Teams as a Service."} silopage="true" bodyClass="silo marketing">
        <Script src="/js/siloTeamCards.js" strategy="lazyOnload" />

        <header>
          <Navigation />

          <div className={styles.hero}>
            {/* <img loading="lazy" src="/media/img/backgrounds/marketing.svg" alt="Marketing icon" className={styles["background--icon"]} /> */}
            <div className="container container--wide relative">
              <div className="row vertical-center">
                <div className="col-xl-5 col-lg-6 col-md-6">
                  <h1 className="section-heading display">
                    Marketing
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
          {/* FIX THIS DOT BURST */}
          <section className={styles["dot-burst overflow"]}>
            <div className="container">
              <h2 className="mt-animate__fade mt-animate section-heading display">MindTrust Marketing Services</h2>
              <p className="mt-animate__fade mt-animate section-description">
                Over the last decade we’ve tested and refined our processes over thousands of projects and marketing campaigns. MindTrust marketers are industry
                veterans and data-driven professionals who tailor their strategies to your business goals. Whether you’re looking to get to the top of the
                search results, build a memorable brand, or drive demand, we can help you grow your business.
              </p>
              <div className="row">
                <div className="col-10 offset-1">
                  <img loading="lazy" src="/media/img/section-arrow.svg" role="presentation" className="talent__arrow" alt="" />
                </div>
              </div>

              <div className={`row flex-column-reverse flex-lg-row ${styles.scene}`}>
                <div className="col-lg-5">
                  <h2 className="section-heading mt-animate__slide mt-animate text-left" id="scene-one">
                    Attract the Right Prospects
                  </h2>
                  <p className="section-description mt-animate__slide mt-animate text-left">
                    Drive more traffic for your business with a winning digital marketing strategy. MindTrust marketers know how to build a marketing strategy
                    that will bring the right people to you and keep them on your site.
                  </p>
                  <div className={`mt-animate__slide mt-animate ${styles.sceneLinks}`}>
                    <a className={styles.sceneLink} href="/marketing-teams/digital-marketing-strategists" aria-disabled="true">
                      Digital Marketing Strategy
                    </a>
                    <a className={styles.sceneLink} href="/marketing-teams/branding-experts" aria-disabled="true">
                      Brand Identity and Messaging
                    </a>
                    <a className={styles.sceneLink} href="/marketing-teams/search-engine-optimization-experts" aria-disabled="true">
                      Web Design and SEO
                    </a>
                    <a className={styles.sceneLink} href="/marketing-teams/search-engine-marketing-experts" aria-disabled="true">
                      Advertising and SEM
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1 mt-animate__fade mt-animate">
                  <SceneBrowser scene="marketingSceneOne" className={styles["scene--one"]} captionID="scene-one" {...scene1} />
                </div>
              </div>

              <div className={`row ${styles.scene}`}>
                <div className="col-lg-6 mt-animate__fade mt-animate">
                  <SceneBrowser scene="marketingSceneTwo" className={styles["scene--two"]} captionID="scene-two" {...scene2} />
                </div>
                <div className="col-lg-5 offset-lg-1">
                  <h2 id="scene-two" className="section-heading mt-animate__slide mt-animate text-left">
                    Convert High-Quality Leads
                  </h2>
                  <p className="section-description mt-animate__slide mt-animate text-left">
                    Build your leads with innovative conversion optimization techniques. Whether you’re looking for more leads or to better understand who’s in
                    your current funnel, MindTrust marketing specialists will help you attract, convert, and qualify your leads.
                  </p>
                  <div className={`mt-animate__slide mt-animate ${styles.sceneLinks}`}>
                    <a href="/marketing-teams/conversion-rate-optimization-experts" className={styles.sceneLink} aria-disabled="true">
                      Conversion Rate Optimization (CRO)
                    </a>
                    <a href="/marketing-teams/marketing-analysts" className={styles.sceneLink} aria-disabled="true">
                      Lead Scoring and Nurturing
                    </a>
                    <a href="/marketing-teams/social-media-marketers" className={styles.sceneLink} aria-disabled="true">
                      Social Media Marketing
                    </a>
                    <a href="/marketing-teams/marketing-automation-experts" className={styles.sceneLink} aria-disabled="true">
                      Marketing Automation
                    </a>
                  </div>
                </div>
              </div>
              <div className={`row flex-column-reverse flex-lg-row ${styles.scene}`}>
                <div className="col-lg-5">
                  <h2 className="section-heading mt-animate__slide mt-animate text-left" id="scene-three">
                    Get More Customers
                  </h2>
                  <p className="section-description mt-animate__slide mt-animate text-left">
                    Close sales effortlessly with prospects who already know, like, and trust you. Our methodology is built on trust. MindTrust professionals
                    will build credibility with your prospects long before they get to the sales team, making for an easy conversation and delightful customer
                    experience.
                  </p>
                  <div className={`mt-animate__slide mt-animate ${styles.sceneLinks}`}>
                    <a href="/marketing-teams/crm-experts" className={styles.sceneLink} aria-disabled="true">
                      CRM Software
                    </a>
                    <a href="/marketing-teams/sales-enablement-experts" className={styles.sceneLink} aria-disabled="true">
                      Sales Enablement
                    </a>
                    <a href="/marketing-teams/marketing-experts" className={styles.sceneLink} aria-disabled="true">
                      Personalized Marketing
                    </a>
                    <a href="/marketing-teams/marketing-analytics-experts" className={styles.sceneLink} aria-disabled="true">
                      Analytics and Optimization
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1 mt-animate__fade mt-animate">
                  <SceneTablet scene="marketingSceneThree" className={styles["scene--three"]} captionID="scene-three" {...scene3} />
                </div>
              </div>
            </div>
          </section>

          <section className={`cut--bottom-left ${styles.experts}`}>
            <div className="container">
              <h2 className={`section-heading mt-animate mt-animate__fade display ${styles.expertsHeading}`}>
                Marketing experts for today’s leading platforms{" "}
              </h2>
              <div className="row stack-animate">
                <div className="col-6 col-md-4">
                  <a href="/marketing-teams/hubspot-experts" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-hubspot.svg" alt="HubSpot logo" />
                    <p className={styles.expertsText}>HubSpot Experts</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/marketing-teams/sharpspring-experts" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-sharpspring.svg" alt="SharpSpring Experts logo" />
                    <p className={styles.expertsText}>SharpSpring Experts</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/marketing-teams/salesforce-experts" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-salesforce.svg" alt="Salesforce CRM logo" />
                    <p className={styles.expertsText}>Salesforce Experts</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/marketing-teams/marketo-experts" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-marketo.svg" alt="Marketo logo" />
                    <p className={styles.expertsText}>Marketo Experts</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/marketing-teams/linkedin-marketing-experts" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-linkedin.svg" alt="Linkedin Experts logo" />
                    <p className={styles.expertsText}>Linkedin Experts</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/marketing-teams/mailchimp-experts" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-mailchimp.svg" alt="Mailchimp logo" />
                    <p className={styles.expertsText}>Mailchimp Experts</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/marketing-teams/wistia-experts" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-wista.svg" alt="Wista logo" />
                    <p className={styles.expertsText}>Wistia Experts</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/marketing-teams/optimizely-experts" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-optimizely.svg" alt="Optimizely logo" />
                    <p className={styles.expertsText}>Optimizely Experts</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/marketing-teams/unbounce-experts" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-unbounce.svg" alt="Unbounce logo" />
                    <p className={styles.expertsText}>Unbounce Experts</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/marketing-teams/google-ads-experts" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-google-ads.svg" alt="Google Adwords logo" />
                    <p className={styles.expertsText}>Google Ads Experts</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/marketing-teams/facebook-ads-experts" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-facebook.svg" alt="Facebook Ads Experts logo" />
                    <p className={styles.expertsText}>Facebook Ads Experts</p>
                  </a>
                </div>
                <div className="col-6 col-md-4">
                  <a href="/marketing-teams/twitter-experts" className={`card animate ${styles.expertsCard}`}>
                    <img className={styles.expertsImage} loading="lazy" src="/media/img/logos/logo-twitter.svg" alt="Twitter logo" />
                    <p className={styles.expertsText}>Twitter Experts</p>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.team}>
            <div className="container">
              <h2 className="section-heading">Marketing teams that mean business</h2>
              <p className="section-description">
                Delivering the best campaigns requires the best global teams. We choose our teams carefully so our people can be the secret to your success.
                With MindTrust, you’ll have access to a team of the world’s top marketers at your service.
              </p>
              <div className={styles.background}>
                <h3>Your Marketing Team</h3>
                <div className="row">
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/marketing-teams/communication-specialists" className={`card ${styles.teamCard}`}>
                      <img
                        loading="lazy"
                        className={styles.teamCardImage}
                        src="https://assets.mindtrust.com/img/marketing/communication-specialists.jpg?format=auto"
                        alt="Communication specislists"
                      />
                      <h4 className={styles.teamCardTitle}>Communication Specialists</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/marketing-teams/content-managers" className={`card ${styles.teamCard}`}>
                      <img
                        loading="lazy"
                        className={styles.teamCardImage}
                        src="https://assets.mindtrust.com/img/marketing/content-managers.jpg?format=auto"
                        alt="Content managers"
                      />
                      <h4 className={styles.teamCardTitle}>Content Managers</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/marketing-teams/copywriters" className={`card ${styles.teamCard}`}>
                      <img
                        loading="lazy"
                        className={styles.teamCardImage}
                        src="https://assets.mindtrust.com/img/marketing/copywriters.jpg?format=auto"
                        alt="Copywriters"
                      />
                      <h4 className={styles.teamCardTitle}>Copywriters</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/marketing-teams/digital-strategists" className={`card ${styles.teamCard}`}>
                      <img
                        loading="lazy"
                        className={styles.teamCardImage}
                        src="https://assets.mindtrust.com/img/marketing/digital-strategists.jpg?format=auto"
                        alt="Digital strategists"
                      />
                      <h4 className={styles.teamCardTitle}>Digital Strategists</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/marketing-teams/ppc-ads-experts" className={`card ${styles.teamCard}`}>
                      <img
                        loading="lazy"
                        className={styles.teamCardImage}
                        src="https://assets.mindtrust.com/img/marketing/editing-services.jpg?format=auto"
                        alt="Editors"
                      />
                      <h4 className={styles.teamCardTitle}>PPC Ads Experts</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/marketing-teams/email-marketing-experts" className={`card ${styles.teamCard}`}>
                      <img
                        loading="lazy"
                        className={styles.teamCardImage}
                        src="https://assets.mindtrust.com/img/marketing/email-marketing-specialists.jpg?format=auto"
                        alt="Email marketing specialists"
                      />
                      <h4 className={styles.teamCardTitle}>Email Marketing Experts</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/marketing-teams/marketing-analysts" className={`card ${styles.teamCard}`}>
                      <img
                        loading="lazy"
                        className={styles.teamCardImage}
                        src="https://assets.mindtrust.com/img/marketing/google-analytics-experts.jpg?format=auto"
                        alt="Marketing Analysts"
                      />
                      <h4 className={styles.teamCardTitle}>Marketing Analysts</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/marketing-teams/video-marketers" className={`card ${styles.teamCard}`}>
                      <img
                        loading="lazy"
                        className={styles.teamCardImage}
                        src="https://assets.mindtrust.com/img/marketing/marcomm-specialists.jpg?format=auto"
                        alt="Video Marketers"
                      />
                      <h4 className={styles.teamCardTitle}>Video Marketers</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/marketing-teams/seo-experts" className={`card ${styles.teamCard}`}>
                      <img
                        loading="lazy"
                        className={styles.teamCardImage}
                        src="https://assets.mindtrust.com/img/marketing/marketing-directors.jpg?format=auto"
                        alt="Marketing directors"
                      />
                      <h4 className={styles.teamCardTitle}>SEO Experts</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/marketing-teams/market-research-analysts" className={`card ${styles.teamCard}`}>
                      <img
                        loading="lazy"
                        className={styles.teamCardImage}
                        src="https://assets.mindtrust.com/img/marketing/market-researchers.jpg?format=auto"
                        alt="Market Research Analysts"
                      />
                      <h4 className={styles.teamCardTitle}>Market Research Analysts</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/marketing-teams/media-buyers" className={`card ${styles.teamCard}`}>
                      <img
                        loading="lazy"
                        className={styles.teamCardImage}
                        src="https://assets.mindtrust.com/img/marketing/media-directors.jpg?format=auto"
                        alt="Media Buyers"
                      />
                      <h4 className={styles.teamCardTitle}>Media Buyers</h4>
                      <div className={styles.more}>
                        <div className={styles.hidden}>Learn more</div>
                        <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <a href="/marketing-teams/public-relations-experts" className={`card ${styles.teamCard}`}>
                      <img
                        loading="lazy"
                        className={styles.teamCardImage}
                        src="https://assets.mindtrust.com/img/marketing/public-relations-directors.jpg?format=auto"
                        alt="Public Relations Experts"
                      />
                      <h4 className={styles.teamCardTitle}>Public Relations Experts</h4>
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
              With one flexible subscription for every marketing need you can cross hiring marketers off your list for good. This is more than a few helping
              hands—it’s a mindtrust of elite marketers who can fill skill gaps as they emerge and adapt to fit your needs over time. Your MindTrust marketing
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
                <div id="expand">Show all</div>
              </div>
            </div>
          </aside>
        )} */}
        <SiloForm category="marketing" />
        <SiloFooter silo="Marketing" footerTalents={footerTalents} />
      </Layout>
    </>
  )
}

export default SiloMarketing

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
