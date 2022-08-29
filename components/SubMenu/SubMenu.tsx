import React from "react"
// import "../styles/partials/_submenu.scss"

interface SubMenuProps {
  children: object
  id: string
}

const SubMenu: React.FC<SubMenuProps> = props => {
  return (
    <>
      <div className={`submenu__wrapper ${props.id}--submenu`}>
        <div className="submenu">{props.children}</div>
      </div>
    </>
  )
}

export default SubMenu
