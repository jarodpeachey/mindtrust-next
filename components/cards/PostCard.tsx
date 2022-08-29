import React from "react"
import styles from "./PostCard.module.scss"
import { formatDate } from "../../../static/js/utils/formatDate"
import { formatURL } from "../../utils/formatURL"

interface PostCardProps {
  href: string
  className?: string
  title: string
  summary: string
  image: string
  horizontal: boolean
  silo: string
  tag: string
  date: string
}

const PostCard: React.FC<PostCardProps> = ({ title, className, href, summary, image, horizontal, silo, postTags, allTags, date, overrideTag }) => {
  let tags = []

  if (postTags && postTags.length > 0) {
    let number = Math.floor(Math.random() * (postTags.length - 1 - 0 + 1)) + 0

    postTags.forEach((tag, index) => {
      if (overrideTag) {
        allTags.forEach(globalTag => {
          if (globalTag.displayName == overrideTag.displayName) {
            tags.push(globalTag.displayName)
          }
        })
      } else if (index == number) {
        allTags.forEach(globalTag => {
          if (globalTag.id.toString() == tag) {
            tags.push(globalTag.displayName)
          }
        })
      }
    })
  }

  return (
    <div className={`${styles["post-card"]} card ${className} ${horizontal && "horizontal"}`}>
      <div className={styles["post-card__image"]}>
        <a href={href}>
          <img src={image || "/media/img/blog.jpg"} alt="" />
        </a>
      </div>
      <div className={`${styles["post-card__info"]} d-flex align-items-center justify-content-between`}>
        <a href={tags.length > 0 ? `/${silo.toLowerCase()}/blog/${formatURL(tags[0])}` : `/${silo.toLowerCase()}/blog`} className={styles.tag}>
          {tags[0] || silo}
        </a>
        <a className={styles.silo__image} href={`/${silo.toLowerCase()}/blog`}>
          <img src={`/media/img/icons/silos/icon--${silo.toLowerCase()}.svg`} alt="" />
        </a>
      </div>
      <div className={styles["post-card__content"]}>
        <a href={href}>
          <h3 className={styles["post-card__title"]}>{title}</h3>
        </a>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
        <div className={styles["post-card__footer"]}>
          <div className={styles["post-card__date"]}>{formatDate(new Date().getTime())}</div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
