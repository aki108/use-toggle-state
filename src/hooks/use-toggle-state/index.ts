import { useState, useCallback } from 'react'


export const useToggleState = (initialValue = 1): any => {
  if (!parseFloat(initialValue.toString())) {
    throw new TypeError('initialValue should be a int or float type')
  }

  const [value, setValue] = useState(initialValue)
  const toggler = useCallback(
    (nextState) => {
      if (nextState && nextState >= 1) {
        setValue(nextState)
      }
    },
    [setValue]
  )
  return [value, toggler]
}
