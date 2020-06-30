import { renderHook, act } from '@testing-library/react-hooks'

import { useToggleState } from '.'

describe('useToggleState', () => {
  it('should return the initial state', () => {
    const initial = 1

    const {
      result: { current },
    } = renderHook(() => useToggleState(initial))
    const [expected] = current

    expect(expected).toBe(initial)
  })

  it('should return pure value', () => {
    const initial = 1
    const expectedValue = 45

    const {
      result: { current },
    } = renderHook(() => useToggleState(initial))
    const [expected, setValue] = current

    act(() => {
      setValue(expectedValue)
    })

    console.log(current)

    expect(expected).toBe(expectedValue)
  })
})
