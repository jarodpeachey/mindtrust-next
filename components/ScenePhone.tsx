import React from "react"
import TeamCard from "./cards/TeamCard"

import "../styles/partials/_scenes.scss"

import { TeamCardItem } from "../../types/card-types"

interface ScenePhoneProps {
  className: string
  background: string
  id?: string
  members: TeamCardItem[]
  captionID: string
  overlay: string
}

const ScenePhone: React.FC<ScenePhoneProps> = props => {
  return (
    <figure aria-labelledby={props.captionID} className={`scene--phone ${props.className}`} id={props.id}>
      <svg
        // version="1.1"
        // id="Layer_1"
        // xmlns="http://www.w3.org/2000/svg"
        // xmlnsXlink="http://www.w3.org/1999/xlink"
        // x="0px"
        // y="0px"
        viewBox="0 0 275 575"
        /*         enableBackground="new 0 0 275 575"
        xmlSpace="preserve" */
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="phone-cutout" clipPathUnits="userSpaceOnUse">
            <path
              d="M254.225,575H20.019c-11,0-20-9-20-20V20.008c0-11,9-20,20-20h234.205
		c11,0,20,9,20,20V555C274.225,566,265.225,575,254.225,575z"
            />
          </clipPath>
        </defs>
        <image width="100%" height="100%" preserveAspectRatio="xMinYMin slice" xlinkHref={props.background} clipPath="url(#phone-cutout)" />
        {/* <g id="phone_x5F_body">
          <path
            opacity="0.1"
            enableBackground="new    "
            d="M254.225,575H20.019c-11,0-20-9-20-20V20.008c0-11,9-20,20-20h234.205
		c11,0,20,9,20,20V555C274.225,566,265.225,575,254.225,575z"
          />
        </g> */}
        <g id="phone-black-overlay">
          <g opacity="0.8">
            <path
              fill="#000000aa"
              d="M68.133,2.156v1.938c0,2.487,2.264,8.578,9.279,8.578c3.539,0,111.102,0,117.35,0c6.249,0,8.962-5.771,8.962-8.759V2.156
			c0-1.186,0.962-2.148,2.148-2.148H65.986C67.172,0.008,68.133,0.97,68.133,2.156z"
            />
          </g>
          <path
            opacity="0.8"
            // enableBackground="new    "
            d="M0.019,542.827v12.172c0,11,9,20,20,20h234.205c11,0,20-9,20-20v-12.172H0.019z
		"
          />
        </g>
        <g id="phone-white-overlay">
          <path
            opacity="0.5"
            fill="#FFFFFF"
            enableBackground="new    "
            d="M149.41,7.406h-37.35c-0.788,0-1.433-0.645-1.433-1.433V5.889
		c0-0.788,0.645-1.433,1.433-1.433h37.35c0.788,0,1.433,0.645,1.433,1.433v0.084C150.844,6.761,150.199,7.406,149.41,7.406z"
          />
          <circle opacity="0.5" fill="#FFFFFF" enableBackground="new    " cx="156.942" cy="5.929" r="1.479" />

          <ellipse
            transform="matrix(0.0709 -0.9975 0.9975 0.0709 -429.7802 654.5163)"
            opacity="0.2"
            fill="#FFFFFF"
            enableBackground="new    "
            cx="136.451"
            cy="557.962"
            rx="12.023"
            ry="12.023"
          />
        </g>
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

export default ScenePhone
