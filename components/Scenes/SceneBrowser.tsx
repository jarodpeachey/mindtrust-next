import React from "react"
import TeamCard from "../cards/TeamCard"
import styles from "./Scene.module.scss"

// import "../styles/partials/_scenes.scss"

import { TeamCardItem } from "../../types/card-types"

interface SceneBrowserProps {
  className: string
  background: string
  id?: string
  members: TeamCardItem[]
  captionID: string
  overlay: string
  scene: string
}

const SceneBrowser: React.FC<SceneBrowserProps> = props => {
  return (
    <figure aria-labelledby={props.captionID} className={`scene--browser ${props.className} ${styles[`${props.scene}`]}`} id={props.id}>
      <svg viewBox="0 0 700 450" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="browser-cutout" clipPathUnits="userSpaceOnUse">
            <path d="M0 8.00001C0 3.58173 3.58172 0 8 0H692C696.418 0 700 3.58172 700 8V442C700 446.418 696.418 450 692 450H8.00002C3.58174 450 0 446.418 0 442V8.00001Z" />
          </clipPath>
        </defs>
        <image width="100%" height="100%" preserveAspectRatio="xMinYMin slice" xlinkHref={props.background} clipPath="url(#browser-cutout)" />
        <g className={styles["browser-top"]}>
          <path d="M0 8C0 3.58172 3.58172 0 8 0H692C696.418 0 700 3.58172 700 8V28H0V8Z" fill="black" fillOpacity="0.3" />
          <rect x="90" y="10" width="500" height="8" fill="white" fillOpacity="0.2" />
          <circle cx="15" cy="14" r="4" fill="white" fillOpacity="0.2" />
          <circle cx="31" cy="14" r="4" fill="white" fillOpacity="0.2" />
          <circle cx="47" cy="14" r="4" fill="white" fillOpacity="0.2" />
        </g>
      </svg>

      <div className={styles.scene__cards}>
        {props.members.map((member, index) => {
          return <TeamCard member={member} key={index} />
        })}
      </div>

      <div className={styles.scene__overlay}>
        <img src={props.overlay} alt="" />
      </div>
    </figure>
  )
}

export default SceneBrowser
