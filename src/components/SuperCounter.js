import React from 'react'
import {
  mapProps,
  withProps,
  withState,
  compose,
} from 'recompose'

const renameProps = mapProps(({ color }) => ({ backgroundColor: color }))
const withFontSize = withProps(({ fontSize }) => ({ fontSize: 20 }))
const withCounterState = withState('counter', 'setCounter', 0)

const Counter = ({ backgroundColor, fontSize, counter, setCounter }) => {
  return (
    <div style={{ backgroundColor: backgroundColor, fontSize: fontSize }}>
      <h2>Handling State</h2>
      <p>Count: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </div>
  )
}

const enhanceCounter = compose(
  renameProps,
  withFontSize,
  withCounterState,
)

const SuperCounter = enhanceCounter(Counter)

export default SuperCounter
