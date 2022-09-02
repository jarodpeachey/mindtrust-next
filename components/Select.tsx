import React from "react"
import Option from "./Option"

interface Props {
  // children: object
  className: string
  id: string
  white: boolean
  placeholderText: string
}

const Select: React.FC<Props> = props => {
  const newChildren = []

  return (
    <div className="select">
      <div className={`select__wrapper input ${props.className && props.className}`} id={props.id}>
        <span className="select__value">{props.placeholderText || "Select a value"}</span>
        <div
          style={{
            marginLeft: 12,
            transition: "all .1s ease-in-out",
            fontSize: 14,
          }}
        >
          <img src="/media/img/icons/icon--arrow-down.svg" alt="" />
        </div>
      </div>
      <div className={`select__menu`}>
        {props.children.forEach(child => {
          newChildren.push(<Option {...child.props}>{child.props.children}</Option>)
        })}

        {newChildren}
      </div>
    </div>
  )
}

export default Select
