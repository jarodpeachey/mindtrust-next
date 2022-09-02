import React from "react"

interface Props {
  children: object
  className: string
  id?: string
  value: string
  defaultChecked?: boolean
  name: string
}

const RadioButton: React.FC<Props> = props => {
  return (
    <label className={`radio ${props.className || ""}`}>
      <input type="radio" value={props.value} name={props.name} id={props.id} defaultChecked={props.defaultChecked} />
      <span className="checkmark">
        <div className="icon"></div>
      </span>
      <span>{props.children}</span>
    </label>
  )
}

export default RadioButton
