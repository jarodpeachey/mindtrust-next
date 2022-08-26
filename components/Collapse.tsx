import React from "react"
import "../styles/partials/_collapse.scss"

interface CollapseProps {
  title: string
  content: string
  id: string
}

const Collapse: React.FC<CollapseProps> = props => {
  return (
    <div className={`collapse ${props.id}`} id={props.id}>
      <h3 className={`collapse__title ${props.id}--title`}>
        {props.title}
        <img loading="lazy" src="/media/img/icons/icon--chevron-right.svg" alt="Arrow" />
      </h3>
      <div className={`collapse__content ${props.id}--content`}>
        {/* <p>{props.content}</p> */}
        <div>
          <div className="inner" dangerouslySetInnerHTML={{ __html: props.content }}></div>
        </div>
      </div>
    </div>
  )
}

export default Collapse
