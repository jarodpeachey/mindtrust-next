import React from "react"
import TeamCard from "./cards/TeamCard"

// import "../styles/partials/_scenes.scss"

import { TeamCardItem } from "../../types/card-types"

interface SceneTabletProps {
  className: string
  background: string
  id?: string
  members: TeamCardItem[]
  captionID: string
  overlay: string
}

const SceneTablet: React.FC<SceneTabletProps> = props => {
  return (
    <figure aria-labelledby={props.captionID} className={`scene--tablet ${props.className}`} id={props.id}>
      <svg viewBox="0 0 405 575" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="tablet-cutout" clipPathUnits="userSpaceOnUse">
            <path
              d="M385,575H20c-11,0-20-9.001-20-20.003V20.099C0,9.097,9,0,20,0l364.985,0.04
		c11,0,20,9.001,20,20.003L405,554.997C405,565.999,396,575,385,575z"
            />
          </clipPath>
        </defs>
        <image width="100%" height="100%" preserveAspectRatio="xMinYMin slice" xlinkHref={props.background} clipPath="url(#tablet-cutout)" />
        <rect opacity="0.4" width="47.9231" height="450.991" transform="matrix(4.37114e-08 1 1 -4.37114e-08 -11.3604 541.131)" fill="black" />
        <rect opacity="0.4" width="36.7643" height="451.167" transform="matrix(4.37114e-08 1 1 -4.37114e-08 -11.0547 -18.4739)" fill="black" />
        <ellipse opacity="0.2" rx="11.4816" ry="11.3987" transform="matrix(4.37114e-08 1 1 -4.37114e-08 195.303 557.604)" fill="white" />
        <ellipse opacity="0.2" rx="3.49439" ry="3.46916" transform="matrix(4.37114e-08 1 1 -4.37114e-08 201.25 11.4949)" fill="white" />
      </svg>

      <div className="scene__cards">
        {props.members.map((member, index) => {
          return <TeamCard member={member} key={index} />
        })}
      </div>

      <div className="scene__overlay">
        <img src={props.overlay} alt="" />
      </div>
    </figure>
  )
}

export default SceneTablet
