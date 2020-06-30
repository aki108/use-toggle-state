import React, { FunctionComponent, forwardRef } from 'react'

import './styles.css'

interface Props {
  name: string
  type: string
  ref: any
  label: string
}

export const InputControl: FunctionComponent<Props> = forwardRef(
  ({ type, name, label }, ref: any) => (
    <label htmlFor={name}>
      {label && <span className="control label">{label}</span>}
      <input
        className="control input"
        id={name}
        name={name}
        type={type}
        ref={ref}
      />
    </label>
  )
)
