import React, { useState, useEffect } from "react"

interface Props {
  className: string
  id?: string
  value: string
  disabled: boolean
  checked: boolean
}

const Checkbox: React.FC<Props> = props => {
  return (
    <label className={`checkbox ${props.className || ""} ${props.id || ""}`}>
      <input type="checkbox" id={props.id} />
      <span className="checkmark">
        <div className="icon">
          <img src="/media/img/icons/icon--checkmark--white.svg" alt="Checkmark" />
        </div>
      </span>
      <span>{props.children}</span>
    </label>
  )
}

export default Checkbox
