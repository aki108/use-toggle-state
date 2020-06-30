import React, { FunctionComponent } from 'react'

import './styles.css'

export const Card: FunctionComponent = ({ children }) => {
  return <div className="card">{children}</div>
}
