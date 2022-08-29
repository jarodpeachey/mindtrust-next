import React from "react"
import styles from "./PostCard.module.scss"
import { formatDate } from "../../../static/js/utils/formatDate"

interface NewsCardProps {
  href: string
  className?: string
  children: object
  category: string
  post: object
}

const NewsCard: React.FC<NewsCardProps> = props => {
  return (
    <a className={`${styles["post-card"]} card ${props.className} ${props.category}`} href={props.href}>
      <div className={styles["post-card__image"]}>
        {/* <picture>
          <source
            srcSet={`${
              props.post.featuredImage !== "" ? `https://assets.mindtrust.com/blog-hero/${props.post.featuredImage}?w=344&fm=webp` : "/media/img/blog.jpg"
            }`}
            media="(min-width: 1200px)"
          />
          <source
            srcSet={`${
              props.post.featuredImage !== "" ? `https://assets.mindtrust.com/blog-hero/${props.post.featuredImage}?w=290&fm=webp` : "/media/img/blog.jpg"
            }`}
            media="(min-width: 992px)"
          />
          <source
            srcSet={`${
              props.post.featuredImage !== "" ? `https://assets.mindtrust.com/blog-hero/${props.post.featuredImage}?w=210&fm=webp` : "/media/img/blog.jpg"
            }`}
            media="(min-width: 768px)"
          />
          <source
            srcSet={`${
              props.post.featuredImage !== "" ? `https://assets.mindtrust.com/blog-hero/${props.post.featuredImage}?w=240&fm=webp` : "/media/img/blog.jpg"
            }`}
            media="(min-width: 576px)"
          />
          <img
            loading="lazy"
            alt={props.post.title}
            src={`${
              props.post.featuredImage !== "" ? `https://assets.mindtrust.com/blog-hero/${props.post.featuredImage}?w=500&fm=webp` : "/media/img/blog.jpg"
            }`}
          />
        </picture> */}
        <picture>
          <source srcSet={`${props.post.widgets?.featured_image?.body.value || "/media/img/blog.jpg"}`} media="(min-width: 1200px)" />
          <source srcSet={`${props.post.widgets?.featured_image?.body.value || "/media/img/blog.jpg"}`} media="(min-width: 992px)" />
          <source srcSet={`${props.post.widgets?.featured_image?.body.value || "/media/img/blog.jpg"}`} media="(min-width: 576px)" />
          <img loading="lazy" alt="Hero image" className={styles.hero__image} src={`${props.post.widgets?.featured_image?.body?.value || "/media/img/blog.jpg"}`} />
        </picture>
      </div>
      <div className={styles["post-card__content"]}>
        {/* <div className={styles["post-card__category"]}>{props.post.siloCategory[1] ? props.post.siloCategory[1].title : props.post.siloCategory[0].title}</div> */}
        <h3 className={styles["post-card__title"]}>{props.post.htmlTitle}</h3>
        <div className={styles["post-card__footer"]}>
          {/* <img loading="lazy" src={node.author.image} /> */}
          <div className={styles["post-card__date"]}>{formatDate(new Date(props.post.publishDate).getTime())}</div>
          <img loading="lazy" width="35" height="35" src={`/media/img/icons/icon--mindtrust.svg`} alt="" />
        </div>
      </div>
    </a>
  )
}

export default NewsCard
