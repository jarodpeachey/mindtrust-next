import React, { useState, useEffect } from "react"

import "../../styles/partials/_pagination.scss"

interface Props {
  post: boolean
}

const Pagination: React.FC<Props> = props => {
  return <div className="pagination">{props.children}</div>
}

export default Pagination
