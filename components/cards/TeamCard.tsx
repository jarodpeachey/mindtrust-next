import React from "react"
import styles from "./TeamCard.module.scss"
import { TeamCardItem } from "../../../types/card-types"

interface TeamCardProps {
  member: TeamCardItem
  size: string
  lazy: boolean
  className: string
}

export const TeamCard: React.FC<TeamCardProps> = props => {
  const { avatar, alt, title, silo = "", hours } = props.member

  return (
    <ul {...props} className={`${props.className} ${props.size} ${styles["team-card"]} card ${silo}`.toLowerCase()}>
      <li className={styles["team-card__image"]}>
        <img alt={title} loading={props.lazy ? "lazy" : "eager"} width="48" height="48" src={avatar} style={{ background: "#00000050" }} />
      </li>
      <li className={styles["team-card__title"]}>
        <span>{title}</span>
      </li>
      <li className={styles["team-card__icon"]}>
        {props.size === "lg" && (
          <span>
            <strong>{hours}</strong> hours
          </span>
        )}

        {silo !== "" && (
          <>
            <div className={styles.tooltip}>{silo}</div>
            <img
              loading={props.lazy ? "lazy" : "eager"}
              width="34"
              height="34"
              src={silo === "Completed" ? "/media/img/icons/icon--checkmark--blue.svg" : `/media/img/icons/silos/navicon--${silo.toLowerCase()}.svg`}
              alt={silo}
            />
          </>
        )}
      </li>
    </ul>
  )
}

export default TeamCard
