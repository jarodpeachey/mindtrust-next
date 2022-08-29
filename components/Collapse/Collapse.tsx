import React from "react"
// import "../styles/partials/_collapse.scss"
import styles from "./Collapse.module.scss"

interface CollapseProps {
  title: string
  content: string
  id: string
}

const Collapse: React.FC<CollapseProps> = props => {
  return (
    <div className={`${styles.collapse} ${props.id}`} id={props.id}>
      <h3 className={`${styles.collapse__title} ${props.id}--title`}>
        {props.title}
        <img loading="lazy" src="/media/img/icons/icon--chevron-right.svg" alt="Arrow" />
      </h3>
      <div className={`${styles.collapse__content} ${props.id}--content`}>
        {/* <p>{props.content}</p> */}
        <div>
          <div className={styles.inner} dangerouslySetInnerHTML={{ __html: props.content }}></div>
        </div>
      </div>
    </div>
  )
}

export default Collapse
