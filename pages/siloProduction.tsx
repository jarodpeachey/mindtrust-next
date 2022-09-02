import React from "react"
import Head from "../components/Head"
import Navigation from "../components/Navigation"
import TeamCard from "../components/cards/TeamCard"
import SceneBrowser from "../components/SceneBrowser"
import ScenePhone from "../components/ScenePhone"
import SceneTablet from "../components/SceneTablet"
import { scene1, scene2, scene3, teamCards, footerTalents } from "../../data/productionPage"
import "../styles/partials/pages/_silo.scss"
import SiloFooter from "../components/SiloFooter"
import SiloCard from "../components/cards/SiloCard"
import SiloForm from "../components/SiloForm"
import { graphql } from "gatsby"
import SiloToggleAnimation from "../components/SiloToggleAnimation"
import { formatURL } from "../utils/formatURL"
import { BRIDGE_APP_URL } from "../config"

const SiloProduction = ({ data }) => {
  const hasWallItems = data.taas.skills.filter(silo => silo.silo.toLowerCase() === "production").length > 0
  let wallItems = []

  if (hasWallItems) {
    wallItems = data.taas.skills.filter(newSilo => newSilo.silo.toLowerCase() === "production")
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
      <Head title={"Production Teams as a Service."} silopage="true" bodyClass="silo production" />
      <header>
        <Navigation />

        <div className="hero">
          {/* <img loading="lazy" src="/media/img/backgrounds/production.svg" alt="Production icon" className="background--icon" /> */}
          <div className="container relative">
            <div className="row vertical-center">
              <div className="col-xl-5 col-lg-6 col-md-6">
                <h1 className="section-heading display">
                  Production
                  <br /> Teams as a Service (TaaS)
                </h1>
                <p className="section-description">Take it to the next level with top creative and production studio talent at your fingertips.</p>
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
              <sup>&reg;</sup>, you can affordably grow your business with fluid teams of expert producers.
            </p>

            <SiloToggleAnimation
              cards={[
                {
                  category: "production",
                  title: "3D Animator",
                  hours: 10,
                  image: "https://assets.mindtrust.com/img/production/3d-animator.jpg?auto=format",
                },
                {
                  category: "production",
                  title: "Animation/Rigger",
                  hours: 10,
                  image: "https://assets.mindtrust.com/img/production/3d-animator.jpg?auto=format",
                },
                {
                  category: "design",
                  title: "Art Director",
                  hours: 10,
                  image: "https://assets.mindtrust.com/img/design/art-director.jpg?auto=format",
                },
                {
                  category: "development",
                  title: "Web Animator",
                  hours: 7,
                  image: "https://assets.mindtrust.com/img/production/web-animator.jpg?auto=format",
                },
                {
                  category: "production",
                  title: "Audio Engineer",
                  hours: 3,
                  image: "https://assets.mindtrust.com/img/production/audio-engineer.jpg?auto=format",
                },
              ]}
              swapCards={[
                {
                  category: "production",
                  title: "Visual Effects Artist",
                  hours: 10,
                  image: "https://assets.mindtrust.com/img/production/visual-effects-artist.jpg?auto=format",
                },
                {
                  category: "technology",
                  title: "AI Engineer",
                  hours: 3,
                  image: "https://assets.mindtrust.com/img/technology/ai-engineer.jpg?auto=format",
                },
              ]}
              slides={[
                {
                  title: "Access a fluid team of experts ",
                  description: "Get the design help you need from a team of experts you can trust.",
                  heading: "Project Kickoff: Your Production team forms",
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
            <h2 className="mt-animate__fade mt-animate section-heading display">MindTrust Creative Services</h2>
            <p className="mt-animate__fade mt-animate section-description">
              Over the last decade we’ve tested and refined our processes over thousands of projects and creative campaigns. MindTrust creatives follow a
              collaborative production model — we marry our expertise with your vision to delight your audience and propel your business.
            </p>
            <div className="row">
              <div className="col-10 offset-1">
                <img loading="lazy" src="/media/img/section-arrow.svg" role="presentation" className="talent__arrow" alt="" />
              </div>
            </div>

            <div className="row scene flex-column-reverse flex-lg-row">
              <div className="col-lg-5">
                <h2 className="section-heading mt-animate__slide mt-animate" id="scene-one">
                  Up your game with immersive interactive experiences
                </h2>
                <p className="section-description mt-animate__slide mt-animate">
                  Enchant users with breathtaking visuals and animations for your games and apps. Our teams of artists, illustrators, and producers are ready to
                  push the limits to create virtual masterpieces.
                </p>
                <div className="flex mt-animate__slide mt-animate">
                  <a href="/production-teams/virtual-reality-experts" className="no-hover" aria-disabled="true">
                    VR and AR Experiences
                  </a>
                  <a href="/production-teams/3d-animators" className="no-hover" aria-disabled="true">
                    Illustration and 3D Animation
                  </a>
                  <a href="/production-teams/mobile-game-experts" className="no-hover" aria-disabled="true">
                    Web and Mobile Games
                  </a>
                  <a href="/production-teams/visual-effects-experts" className="no-hover" aria-disabled="true">
                    Visual Effects
                  </a>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 mt-animate__fade mt-animate">
                <ScenePhone className="scene--one" captionID="scene-one" {...scene1} />
              </div>
            </div>

            <div className="row scene">
              <div className="col-lg-6 mt-animate__fade mt-animate">
                <SceneTablet className="scene--two" captionID="scene-two" {...scene2} />
              </div>
              <div className="col-lg-5 offset-lg-1">
                <h2 id="scene-two" className="section-heading mt-animate__slide mt-animate">
                  Produce captivating video and animated content
                </h2>
                <p className="section-description mt-animate__slide mt-animate">
                  Video and animations convey messages in a more engaging way than text alone. We'll help you attract new audiences and evoke stronger emotional
                  responses with mesmerizing visual productions.
                </p>
                <div className="flex mt-animate__slide mt-animate">
                  <a href="/production-teams/video-production-experts" className="no-hover" aria-disabled="true">
                    Video Production
                  </a>
                  <a href="/production-teams/tv-video-ad-producers" className="no-hover" aria-disabled="true">
                    TV and Video Advertising
                  </a>
                  <a href="/production-teams/animated-video-producers" className="no-hover" aria-disabled="true">
                    Animated Videos
                  </a>
                  <a href="/production-teams/motion-graphics-experts" className="no-hover" aria-disabled="true">
                    Display Ads and Motion Graphics
                  </a>
                </div>
              </div>
            </div>
            <div className="row scene flex-column-reverse flex-lg-row">
              <div className="col-lg-5">
                <h2 className="section-heading mt-animate__slide mt-animate" id="scene-three">
                  Engage your audience with audio and sound design
                </h2>
                <p className="section-description mt-animate__slide mt-animate">
                  Dramatically enhance the reception of your message and story with clear, crisp audio. MindTrust's audio engineers and producers know how to
                  create and process sound for maximum impact.
                </p>
                <div className="flex mt-animate__slide mt-animate">
                  <a href="/production-teams/audio-production-experts" className="no-hover" aria-disabled="true">
                    Audio Production
                  </a>
                  <a href="/production-teams/radio-production-experts" className="no-hover" aria-disabled="true">
                    Radio Production
                  </a>
                  <a href="/production-teams/sonic-branding-experts" className="no-hover" aria-disabled="true">
                    Sonic Branding
                  </a>
                  <a href="/production-teams/programmatic-audio-experts" className="no-hover" aria-disabled="true">
                    Programmatic Audio
                  </a>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 mt-animate__fade mt-animate">
                <SceneBrowser className="scene--three" captionID="scene-three" {...scene3} />
              </div>
            </div>
          </div>
        </section>

        <section className="experts cut--bottom-left">
          <div className="container">
            <h2 className="mt-animate__fade mt-animate section-heading display">Top creative talent for popular production tools</h2>
            <div className="row stack-animate">
              <div className="col-6 col-md-4">
                <a href="/production-teams/adobe-premiere-experts" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-premiere.svg" alt="Adobe Premiere logo" />
                  <p>Adobe Premiere Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/production-teams/adobe-after-effects-experts" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-after-effects.svg" alt="Adobe After Effects logo" />
                  <p>Adobe After Effects Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/production-teams/unreal-engine-experts" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-unreal.svg" alt="Unreal Engine logo" />
                  <p>Unreal Engine Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/production-teams/adobe-animate-experts" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-animate.svg" alt="Adobe Animate logo" />
                  <p>Adobe Animate Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/production-teams/unity-experts" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-unity.svg" alt="Unity logo" />
                  <p>Unity Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/production-teams/final-cut-pro-experts" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-final-cut.svg" alt="Final Cut Pro Experts logo" />
                  <p>Final Cut Pro Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/production-teams/apple-motion-experts" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-apple-motion.svg" alt="Apple Motion logo" />
                  <p>Apple Motion Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/production-teams/apple-compressor-experts" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-apple-compressor.svg" alt="Apple Compressor logo" />
                  <p>Apple Compressor Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/production-teams/autodesk-maya-experts" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-maya.svg" alt="Maya logo" />
                  <p>Autodesk Maya Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/production-teams/mocha-5-experts" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-mocha.svg" alt="Mocha 5 logo" />
                  <p>Mocha 5 Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/production-teams/davinci-resolve-experts" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-resolve.svg" alt="DaVinci Resolve logo" />
                  <p>DaVinci Resolve Experts</p>
                </a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/production-teams/avid-pro-tools-experts" className="card animate">
                  <img loading="lazy" src="/media/img/logos/logo-avid.svg" alt="Avid Pro Tools logo" />
                  <p>Avid Pro Tools Experts</p>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="team">
          <div className="container">
            <h2 className="mt-animate__fade mt-animate section-heading">Production teams that mean business</h2>
            <p className="mt-animate__fade mt-animate section-description">
              Delivering the best creative requires the best global teams. We choose our teams carefully so our people can be the secret to your success. With
              MindTrust, you’ll have access to a team of the top creative talent at your service.
            </p>
            <div className="background">
              <h3>Your Production Team</h3>
              <div className="row">
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/production-teams/character-animators" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/production/adobe-premiere-experts.jpg?auto=format" alt="Character Animators" />
                    <h4>Character Animators</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/production-teams/audio-engineers" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/production/photoshop-experts.jpg?auto=format" alt="Audio engineers" />
                    <h4>Audio Engineers</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/production-teams/video-producers" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/production/adobe-illustrator-experts.jpg?auto=format" alt="Video producers" />
                    <h4>Video Producers</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/production-teams/visual-effects-experts" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/production/adobe-animate-experts.jpg?auto=format" alt="Visual Effects Experts" />
                    <h4>Visual Effects Experts</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/production-teams/music-production-experts" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/production/adobe-media-encoder-experts.jpg?auto=format" alt="Music Producers" />
                    <h4>Music Producers</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/production-teams/3d-character-art-specialists" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/production/final-cut-editors.jpg?auto=format" alt="D3D Character Artists" />
                    <h4>3D Character Artists</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/production-teams/scriptwriters" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/production/apple-motion-specialists.jpg?auto=format" alt="Scriptwriters" />
                    <h4>Scriptwriters</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/production-teams/game-designers" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/production/mocha-experts.jpg?auto=format" alt="Game Designers" />
                    <h4>Game Designers</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/production-teams/illustrators" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/production/davinci-resolve-experts.jpg?auto=format" alt="Illustrators" />
                    <h4>Illustrators</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/production-teams/nft-artists" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/production/avid-pro-tools-experts.jpg?auto=format" alt="NFT Artists" />
                    <h4>NFT Artists</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/production-teams/art-directors" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/production/logic-pro-experts.jpg?auto=format" alt="Art Directors" />
                    <h4>Art Directors</h4>
                    <div className="more">
                      <div className="hidden">Learn more</div>
                      <img src="/media/img/icons/icon--arrow-right.svg" alt="Arrow right" />
                    </div>
                  </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <a href="/production-teams/voice-actors" className="card">
                    <img loading="lazy" src="https://assets.mindtrust.com/img/production/affinity-design-experts.jpg?auto=format" alt="Voice Actors" />
                    <h4>Voice Actors</h4>
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
              With one flexible subscription for every production need you can cross hiring producers off your list for good. This is more than a few helping
              hands—it’s a mindtrust of elite producers who can fill skill gaps as they emerge and adapt to fit your needs over time. Your MindTrust production
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
      <SiloForm category="production" />
      <SiloFooter silo="Production" footerTalents={footerTalents} />
    </>
  )
}

export default SiloProduction

export const query = graphql`
  query SiloProductionQuery {
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
