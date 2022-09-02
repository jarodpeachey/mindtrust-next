import React from "react"

import "../../styles/partials/_pagination.scss"

interface Props {
  post: boolean
  children: string
}

const Pagination: React.FC<Props> = props => {
  // return <div className="pagination">{props.children}</div>
  return <div></div>
}

export default Pagination
