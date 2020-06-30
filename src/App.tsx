import React, { useMemo } from 'react'
import { useForm } from 'react-hook-form'

import { useToggleState } from './hooks'
import { Card, Button, InputControl } from './components'

import './App.css'

type Inputs = {
  count: number
  required: string
}

function App() {
  const data = useToggleState(1)
  const { register, handleSubmit, watch, errors } = useForm<Inputs>()

  const onSubmit = (values: Inputs) => {
    data.setValue(values.count)
  }

  console.log(data)

  const countValue = useMemo(() => {
    return watch('count')
  }, [watch])

  return (
    <div className="container">
      <div className="form-container">
        <Card>
          <h1 className="caption center">Use Toggle State</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputControl
              name="count"
              type="number"
              label="Next State"
              ref={register({ required: true, min: 1, max: 1000 })}
            />
            {errors.required && <span>This field is required</span>}

            <div className="action">
              <Button onClick={handleSubmit(onSubmit)} type="submit">
                Change state
              </Button>
            </div>
          </form>

          <div>
            <p className="form-value">Current value: {data.value}</p>
            <p className="form-value">Next value: {countValue}</p>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default App
