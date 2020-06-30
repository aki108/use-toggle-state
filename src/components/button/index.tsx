import React, { FunctionComponent } from 'react'

import './styles.css'

interface Props {
  type: 'button' | 'submit' | 'reset' | undefined
  variant?: 'primary' | 'secondary'
  onClick: () => void
}

export const Button: FunctionComponent<Props> = ({
  children,
  type,
  variant = 'primary',
}) => {
  return (
    <button className={`button ${variant}`} type={type}>
      {children}
    </button>
  )
}
