import React from "react"

interface Props {
  children: string
  className: string
  id: string
  value: string
  selected: boolean
}

const Option: React.FC<Props> = props => {
  return (
    <option className={`option ${props.className}`} id={props.id} value={props.value}>
      {props.children}
    </option>
  )
}

export default Option
