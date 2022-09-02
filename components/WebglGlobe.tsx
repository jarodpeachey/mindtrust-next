import React from "react"
import TeamCard from "../components/cards/TeamCard"
// import "../styles/partials/_webgl_globe.scss"

// locations have underscore characters, to make it easier to use as css selector
// such as element.querySelector(`[data-location=${location}]`)
export enum SiloLocation {
  NEW_YORK = "new_york",
  LONDON = "london",
  BERLIN = "berlin",
  KIEV = "kiev",
  BOSTON = "boston",
  TEL_AVIV = "tel_aviv",
  BANGALORE = "bangalore",
  BANGKOK = "bangkok",
  SYDNEY = "sydney",
  SEATTLE = "seattle",
  SAN_JOSE = "san_jose",
  MEDELLIN = "medellin",
  BUENOS_AIRES = "buenos_aires",
  CAPE_TOWN = "cape_town",
}

const MEMBERS_BY_LOCATION: Map<SiloLocation, TeamCardItem> = new Map()
MEMBERS_BY_LOCATION.set(SiloLocation.NEW_YORK, {
  avatar: "https://assets.mindtrust.com/img/strategy/digital-strategist.jpg?auto=format",
  alt: "Sample Avata",
  title: "Digital Strategist",
  silo: "Strategy",
})
MEMBERS_BY_LOCATION.set(SiloLocation.LONDON, {
  avatar: "https://assets.mindtrust.com/img/design/ui-ux-designer.jpg?auto=format",
  alt: "Sample Avata",
  title: "UI/UX Designer",
  silo: "Design",
})
MEMBERS_BY_LOCATION.set(SiloLocation.BERLIN, {
  avatar: "https://assets.mindtrust.com/img/technology/devops-engineer.jpg?auto=format",
  alt: "Sample Avata",
  title: "DevOps Engineer",
  silo: "Technology",
})
MEMBERS_BY_LOCATION.set(SiloLocation.KIEV, {
  avatar: "https://assets.mindtrust.com/img/development/front-end-developer.jpg?auto=format",
  alt: "Sample Avata",
  title: "Front-End Developer",
  silo: "Development",
})
MEMBERS_BY_LOCATION.set(SiloLocation.BOSTON, {
  avatar: "https://assets.mindtrust.com/img/marketing/digital-marketer.jpg?auto=format",
  alt: "Sample Avata",
  title: "Digital Marketer",
  silo: "Marketing",
})
MEMBERS_BY_LOCATION.set(SiloLocation.TEL_AVIV, {
  avatar: "https://assets.mindtrust.com/img/technology/blockchain-architect.jpg?auto=format",
  alt: "Sample Avata",
  title: "Blockchain Architect",
  silo: "Technology",
})
MEMBERS_BY_LOCATION.set(SiloLocation.BANGALORE, {
  avatar: "https://assets.mindtrust.com/img/development/ios-developer.jpg?auto=format",
  alt: "Sample Avata",
  title: "iOS Developer",
  silo: "Development",
})
MEMBERS_BY_LOCATION.set(SiloLocation.BANGKOK, {
  avatar: "https://assets.mindtrust.com/img/production/3d-animator.jpg?auto=format",
  alt: "Sample Avata",
  title: "3D Animator",
  silo: "Production",
})
MEMBERS_BY_LOCATION.set(SiloLocation.SYDNEY, {
  avatar: "https://assets.mindtrust.com/img/marketing/seo-expert.jpg?auto=format",
  alt: "Sample Avata",
  title: "SEO Expert",
  silo: "Marketing",
})
MEMBERS_BY_LOCATION.set(SiloLocation.SEATTLE, {
  avatar: "https://assets.mindtrust.com/img/strategy/product-manager.jpg?auto=format",
  alt: "Sample Avata",
  title: "Product Manager",
  silo: "Strategy",
})
MEMBERS_BY_LOCATION.set(SiloLocation.SAN_JOSE, {
  avatar: "https://assets.mindtrust.com/img/design/creative-director.jpg?auto=format",
  alt: "Sample Avata",
  title: "Creative Director",
  silo: "Design",
})
MEMBERS_BY_LOCATION.set(SiloLocation.MEDELLIN, {
  avatar: "https://assets.mindtrust.com/img/development/full-stack-developer.jpg?auto=format",
  alt: "Sample Avata",
  title: "Full-Stack Developer",
  silo: "Development",
})
MEMBERS_BY_LOCATION.set(SiloLocation.BUENOS_AIRES, {
  avatar: "https://assets.mindtrust.com/img/production/3d-character-artist.jpg?auto=format",
  alt: "Sample Avata",
  title: "3D Character Artist",
  silo: "Production",
})
MEMBERS_BY_LOCATION.set(SiloLocation.CAPE_TOWN, {
  avatar: "https://assets.mindtrust.com/img/marketing/copywriter.jpg?auto=format",
  alt: "Sample Avata",
  title: "Copywriter",
  silo: "Marketing",
})

const locations: SiloLocation[] = []
MEMBERS_BY_LOCATION.forEach((member, location) => {
  locations.push(location)
})

export const WebglGlobe = ({ showGlobe }) => {
  console.log(showGlobe);
  
  return (
    <div className="webgl-globe-loader">
      <div className={`webgl-globe-fallback ${showGlobe ? "webgl-element-hidden" : ""}`}>
        <img src="/media/webgl_globe/fallback/fallback.01.png?v=1" />
      </div>

      <div className={`webgl-globe ${showGlobe ? "" : "webgl-element-hidden"}`}>
        <div id="webgl-globe-profiles">
          <div className="team-container">
            <div className="teamCards">
              {locations.map((location, i) => {
                return (
                  <div className="teamCard-wrapper" key={i} data-location={location}>
                    <TeamCard member={MEMBERS_BY_LOCATION.get(location)} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div id="webgl-globe-app" />
      </div>
    </div>
  )
}

export default WebglGlobe
