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
import { scene1, scene2, scene3, teamCards, footerTalents } from "../data/technologyPage"
// import "../styles/partials/pages/_silo.scss"
import styles from "./SiloTechnology.module.scss"
import Script from "../node_modules/next/script"

const SiloTechnology = ({ data }) => {
  // const hasWallItems = data.taas.skills.filter(silo => silo.silo.toLowerCase() === "technology").length > 0
  // let wallItems = []

  // if (hasWallItems) {
  //   wallItems = data.taas.skills.filter(newSilo => newSilo.silo.toLowerCase() === "technology")
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
      <Layout title={"Technology Teams as a Service."} silopage="true" bodyClass="silo technology">
        <Script src="/js/siloTeamCards.js" strategy="lazyOnload" />

        <header>
          <Navigation />

          <div className={styles.hero}>
            {/* <img loading="lazy" src="/media/img/backgrounds/technology.svg" alt="Technology icon" className={styles["background--icon"]} /> */}
            <div className="container container--wide relative">
              <div className="row vertical-center">
                <div className="col-xl-5 col-lg-6 col-md-6">
                  <h1 className="section-heading display">
                    Technology
                    <br /> Teams as a Service (TaaS)
                  </h1>
                  <p className="section-description">Accelerate your digital transformation with top technology talent at your fingertips.</p>
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
              <sup>&reg;</sup>, you can affordably scale with fluid teams of top technologists.
              </p>

            <SiloToggleAnimation
              cards={[
                {
                  category: "technology",
                  title: "Cloud Architect",
                  hours: 10,
                  image: "https://assets.mindtrust.com/img/technology/cloud-architect.jpg?auto=format",
                },
                {
                  category: "technology",
                  title: "DevOps Engineer",
                  hours: 10,
                  image: "https://assets.mindtrust.com/img/technology/dev-ops-engineer.jpg?auto=format",
                },
                {
                  category: "development",
                  title: "Data Scientist",
                  hours: 10,
                  image: "https://assets.mindtrust.com/img/development/data-scientist.jpg?auto=format",
                },
                {
                  category: "development",
                  title: "Blockchain Developer",
                  hours: 7,
                  image: "https://assets.mindtrust.com/img/development/blockchain-developer.jpg?auto=format",
                },
                {
                  category: "technology",
                  title: "Systems Admin",
                  hours: 3,
                  image: "https://assets.mindtrust.com/img/technology/systems-architect.jpg?auto=format",
                },
              ]}
              swapCards={[
                {
                  category: "technology",
                  title: "QA Testing Engineer",
                  hours: 10,
                  image: "https://assets.mindtrust.com/img/technology/qa-testing-engineer.jpg?auto=format",
                },
                {
                  category: "strategy",
                  title: "Digital Strategist",
                  hours: 3,
                  image: "https://assets.mindtrust.com/img/strategy/digital-strategist.jpg?auto=format",
                },
              ]}
              slides={[
                {
                  title: "Access a fluid team of experts ",
                  description: "Get the design help you need from a team of experts you can trust.",
                  heading: "Project Kickoff: Your Technology team forms",
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
              <h2 className="mt-animate__fade mt-animate section-heading display">MindTrust Technology Services</h2>
              <p className="mt-animate__fade mt-animate section-description">
              Over the last decade we’ve tested and refined our processes over thousands of projects and deployments. MindTrust technologists are industry
              veterans and certified engineers who follow a collaborative delivery model — we marry our expertise with your vision to deliver technology
              solutions and propel your business.
              </p>
              <div className="row">
                <div className="col-10 offset-1">
                  <img loading="lazy" src="/media/img/section-arrow.svg" role="presentation" className="talent__arrow" alt="" />
                </div>
              </div>

              <div className={`row flex-column-reverse flex-lg-row ${styles.scene}`}>
                <div className="col-lg-5">
                  <h2 className="section-heading mt-animate__slide mt-animate text-left" id="scene-one">
                  Accelerate your digital transformation
                  </h2>
                  <p className="section-description mt-animate__slide mt-animate text-left">
                  The companies that survive, thrive, and lead in today's marketplace are the ones that have embraced, adopted, and leveraged technology. We'll
                  help you smoothly replace dated systems with tech-enabled solutions for better efficiency.
                  </p>
                  <div className={`mt-animate__slide mt-animate ${styles.sceneLinks}`}>
                  <a href="/technology-teams/cloud-architects" className={styles.sceneLink} aria-disabled="true">
                    Cloud Strategy
                  </a>
                  <a href="/technology-teams/enterprise-software-engineers" className={styles.sceneLink} aria-disabled="true">
                    Enterprise Software
                  </a>
                  <a href="/technology-teams/data-architects" className={styles.sceneLink} aria-disabled="true">
                    Big Data and Analytics
                  </a>
                  <a href="/technology-teams/robotic-process-automation-engineers" className={styles.sceneLink} aria-disabled="true">
                    Robotic Process Automation
                  </a>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1 mt-animate__fade mt-animate">
                  <SceneBrowser scene="technologySceneOne" className={styles["scene--one"]} captionID="scene-one" {...scene1} />
                </div>
              </div>

              <div className={`row ${styles.scene}`}>
                <div className="col-lg-6 mt-animate__fade mt-animate">
                  <SceneBrowser scene="technologySceneTwo" className={styles["scene--two"]} captionID="scene-two" {...scene2} />
                </div>
                <div className="col-lg-5 offset-lg-1">
                  <h2 id="scene-two" className="section-heading mt-animate__slide mt-animate text-left">
                  Securely scale your cloud infrastructure
                  </h2>
                  <p className="section-description mt-animate__slide mt-animate text-left">
                  Mitigate security risks and platform instability as your user base grows. Our technology specialists can put together a customized solution
                  for optimum performance and reliability based on your business needs.
                  </p>
                  <div className={`mt-animate__slide mt-animate ${styles.sceneLinks}`}>
                                      <a href="/technology-teams/cloud-engineers" className={styles.sceneLink} aria-disabled="true">
                    Cloud Operations
                  </a>
                  <a href="/technology-teams/server-infrastructure-engineers" className={styles.sceneLink} aria-disabled="true">
                    Infrastructure Management
                  </a>
                  <a href="/technology-teams/devops-engineers" className={styles.sceneLink} aria-disabled="true">
                    Continuous Integration
                  </a>
                  <a href="/technology-teams/virtualization-containerization-engineers" className={styles.sceneLink} aria-disabled="true">
                    Containerization and Visualization
                  </a>
                  </div>
                </div>
              </div>
              <div className={`row flex-column-reverse flex-lg-row ${styles.scene}`}>
                <div className="col-lg-5">
                  <h2 className="section-heading mt-animate__slide mt-animate text-left" id="scene-three">
                  Blast past the competition with next-gen technologies
                  </h2>
                  <p className="section-description mt-animate__slide mt-animate text-left">
                  Gain a dominant competitive advantage by being one of the first to implement emerging technologies. We help you stay ahead of the curve as a
                  pioneering brand in a rapidly changing digital landscape.
                  </p>
                  <div className={`mt-animate__slide mt-animate ${styles.sceneLinks}`}>
                  <a href="/technology-teams/blockchain-engineers" className={styles.sceneLink} aria-disabled="true">
                    Blockchain Solutions
                  </a>
                  <a href="/technology-teams/ai-engineers" className={styles.sceneLink} aria-disabled="true">
                    AI and Machine Learning
                  </a>
                  <a href="/technology-teams/augmented-reality-engineers" className={styles.sceneLink} aria-disabled="true">
                    AR and Spatial Computing
                  </a>
                  <a href="/technology-teams/iot-engineers" className={styles.sceneLink} aria-disabled="true">
                    Internet of Things (IoT)
                  </a>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1 mt-animate__fade mt-animate">
                  <SceneBrowser scene="technologySceneThree" className={styles["scene--three"]} captionID="scene-three" {...scene3} />
                </div>
              </div>
            </div>
          </section>

          <section className={`cut--bottom-left ${styles.experts}`}>
            <div className="container">
              <h2 className={`section-heading mt-animate mt-animate__fade display ${styles.expertsHeading}`}>
                Technology experts for today’s leading platforms{" "}
              </h2>
              <div className="row stack-animate">
                              <div className="col-6 col-md-4">
                <a href="/technology-teams/aws-experts" className={`card animate ${styles.expertsCard}`}>
                  <img loading="lazy" className={styles.expertsImage} src="/media/img/logos/logo-aws.svg" alt="AWS logo" />
                  <p className={styles.expertsText}>AWS Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/technology-teams/azure-engineers" className={`card animate ${styles.expertsCard}`}>
                  <img loading="lazy" className={styles.expertsImage} src="/media/img/logos/logo-azure.svg" alt="Azure logo" />
                  <p className={styles.expertsText}>Azure Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/technology-teams/google-cloud-engineers" className={`card animate ${styles.expertsCard}`}>
                  <img loading="lazy" className={styles.expertsImage} src="/media/img/logos/logo-google-cloud.svg" alt="Google Cloud Experts logo" />
                  <p className={styles.expertsText}>Google Cloud Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/technology-teams/ibm-bluemix-engineers" className={`card animate ${styles.expertsCard}`}>
                  <img loading="lazy" className={styles.expertsImage} src="/media/img/logos/logo-bluemix.svg" alt="IBM Bluemix Experts" />
                  <p className={styles.expertsText}>IBM Bluemix Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/technology-teams/digital-ocean-experts" className={`card animate ${styles.expertsCard}`}>
                  <img loading="lazy" className={styles.expertsImage} src="/media/img/logos/logo-digital-ocean.svg" alt="DigitalOcean logo" />
                  <p className={styles.expertsText}>DigitalOcean Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/technology-teams/terraform-engineers" className={`card animate ${styles.expertsCard}`}>
                  <img loading="lazy" className={styles.expertsImage} src="/media/img/logos/logo-terraform.svg" alt="Terraform Experts" />
                  <p className={styles.expertsText}>Terraform Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/technology-teams/heroku-experts" className={`card animate ${styles.expertsCard}`}>
                  <img loading="lazy" className={styles.expertsImage} src="/media/img/logos/logo-heroku.svg" alt="Heroku logo" />
                  <p className={styles.expertsText}>Heroku Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/technology-teams/ansible-engineers" className={`card animate ${styles.expertsCard}`}>
                  <img loading="lazy" className={styles.expertsImage} src="/media/img/logos/logo-ansible.svg" alt="Ansible logo" />
                  <p className={styles.expertsText}>Ansible Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/technology-teams/circle-ci-engineers" className={`card animate ${styles.expertsCard}`}>
                  <img loading="lazy" className={styles.expertsImage} src="/media/img/logos/logo-circleci.svg" alt="Circle CI logo" />
                  <p className={styles.expertsText}>Circle CI Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/technology-teams/oracle-cloud-engineers" className={`card animate ${styles.expertsCard}`}>
                  <img loading="lazy" className={styles.expertsImage} src="/media/img/logos/logo-oracle-cloud.svg" alt="Oracle Cloud Experts logo" />
                  <p className={styles.expertsText}>Oracle Cloud Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/technology-teams/kubernetes-engineers" className={`card animate ${styles.expertsCard}`}>
                  <img loading="lazy" className={styles.expertsImage} src="/media/img/logos/logo-kubernetes.svg" alt="Kubernetes logo" />
                  <p className={styles.expertsText}>Kubernetes Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/technology-teams/netlify-experts" className={`card animate ${styles.expertsCard}`}>
                  <img loading="lazy" className={styles.expertsImage} src="/media/img/logos/logo-netlify.svg" alt="Netlify logo" />
                  <p className={styles.expertsText}>Netlify Experts</p>
                </a>
              </div>
              </div>
            </div>
          </section>
          <section className={styles.team}>
            <div className="container">
              <h2 className="section-heading">Technology teams that mean business</h2>
              <p className="section-description">
              A digital-first future requires the best global teams. We choose our teams carefully so our people can be the secret to your success. With
              MindTrust, you’ll have access to a team of the world’s top technologists at your service.
              </p>
              <div className={styles.background}>
                <h3>Your Technology Team</h3>
                <div className="row">
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/technology-teams/cloud-solution-architects" className={`card ${styles.teamCard}`}>
                    <img loading="lazy" className={styles.teamCardImage} src="https://assets.mindtrust.com/img/technology/pic-1.jpg?auto=format" alt="Cloud solution architects" />
                    <h4 className={styles.teamCardTitle}>Cloud Solution Architects</h4>
                    <div className={styles.more}>
                      <div className={styles.hidden}>Learn more</div>
                      <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/technology-teams/devops-engineers" className={`card ${styles.teamCard}`}>
                    <img loading="lazy" className={styles.teamCardImage} src="https://assets.mindtrust.com/img/technology/pic-2.jpg?auto=format" alt="DevOps Engineers" />
                    <h4 className={styles.teamCardTitle}>DevOps Engineers</h4>
                    <div className={styles.more}>
                      <div className={styles.hidden}>Learn more</div>
                      <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/technology-teams/computer-network-architects" className={`card ${styles.teamCard}`}>
                    <img loading="lazy" className={styles.teamCardImage} src="https://assets.mindtrust.com/img/technology/pic-3.jpg?auto=format" alt="Computer Network Architects" />
                    <h4 className={styles.teamCardTitle}>Computer Network Architects</h4>
                    <div className={styles.more}>
                      <div className={styles.hidden}>Learn more</div>
                      <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/technology-teams/machine-learning-engineers" className={`card ${styles.teamCard}`}>
                    <img loading="lazy" className={styles.teamCardImage} src="https://assets.mindtrust.com/img/technology/pic-4.jpg?auto=format" alt="Machine Learning Engineers" />
                    <h4 className={styles.teamCardTitle}>Machine Learning Engineers</h4>
                    <div className={styles.more}>
                      <div className={styles.hidden}>Learn more</div>
                      <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/technology-teams/cyber-security-engineers" className={`card ${styles.teamCard}`}>
                    <img loading="lazy" className={styles.teamCardImage} src="https://assets.mindtrust.com/img/technology/pic-5.jpg?auto=format" alt="Cyber Security Experts" />
                    <h4 className={styles.teamCardTitle}>Cyber Security Experts</h4>
                    <div className={styles.more}>
                      <div className={styles.hidden}>Learn more</div>
                      <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/technology-teams/systems-administrators" className={`card ${styles.teamCard}`}>
                    <img loading="lazy" className={styles.teamCardImage} src="https://assets.mindtrust.com/img/technology/pic-6.jpg?auto=format" alt="Systems Administrators" />
                    <h4 className={styles.teamCardTitle}>Systems Administrators</h4>
                    <div className={styles.more}>
                      <div className={styles.hidden}>Learn more</div>
                      <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/technology-teams/data-architects" className={`card ${styles.teamCard}`}>
                    <img loading="lazy" className={styles.teamCardImage} src="https://assets.mindtrust.com/img/technology/pic-7.jpg?auto=format" alt="Data Architects" />
                    <h4 className={styles.teamCardTitle}>Data Architects</h4>
                    <div className={styles.more}>
                      <div className={styles.hidden}>Learn more</div>
                      <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/technology-teams/database-administrators" className={`card ${styles.teamCard}`}>
                    <img loading="lazy" className={styles.teamCardImage} src="https://assets.mindtrust.com/img/technology/pic-8.jpg?auto=format" alt="Database Administrators" />
                    <h4 className={styles.teamCardTitle}>Database Administrators</h4>
                    <div className={styles.more}>
                      <div className={styles.hidden}>Learn more</div>
                      <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/technology-teams/ai-engineers" className={`card ${styles.teamCard}`}>
                    <img loading="lazy" className={styles.teamCardImage} src="https://assets.mindtrust.com/img/technology/pic-9.jpg?auto=format" alt="Artificial Intelligence Engineers" />
                    <h4 className={styles.teamCardTitle}>Artificial Intelligence Engineers</h4>
                    <div className={styles.more}>
                      <div className={styles.hidden}>Learn more</div>
                      <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/technology-teams/iot-engineers" className={`card ${styles.teamCard}`}>
                    <img loading="lazy" className={styles.teamCardImage} src="https://assets.mindtrust.com/img/technology/pic-10.jpg?auto=format" alt="IoT Engineers" />
                    <h4 className={styles.teamCardTitle}>IoT Engineers</h4>
                    <div className={styles.more}>
                      <div className={styles.hidden}>Learn more</div>
                      <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/technology-teams/ci-cd-engineers" className={`card ${styles.teamCard}`}>
                    <img loading="lazy" className={styles.teamCardImage} src="https://assets.mindtrust.com/img/technology/pic-11.jpg?auto=format" alt="CI/CD Engineers" />
                    <h4 className={styles.teamCardTitle}>CI/CD Engineers</h4>
                    <div className={styles.more}>
                      <div className={styles.hidden}>Learn more</div>
                      <img className={styles.moreImage} src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/technology-teams/it-support-specialists" className={`card ${styles.teamCard}`}>
                    <img loading="lazy" className={styles.teamCardImage} src="https://assets.mindtrust.com/img/technology/pic-12.jpg?auto=format" alt="IT Support Specialists" />
                    <h4 className={styles.teamCardTitle}>IT Support Specialists</h4>
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
              With one flexible subscription for every technology need you can cross hiring marketers off your list for good. This is more than a few helping
              hands—it’s a mindtrust of elite marketers who can fill skill gaps as they emerge and adapt to fit your needs over time. Your MindTrust technology
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
        <SiloForm category="technology" />
        <SiloFooter silo="Technology" footerTalents={footerTalents} />
      </Layout>
    </>
  )
}

export default SiloTechnology

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
