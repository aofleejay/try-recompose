import React from 'react'
import { withStateHandlers, compose } from 'recompose'
import { GREEN_200 } from '../constants/color'

const withHelloHandler = withStateHandlers({ name: '' }, { sayHello: () => (name) => ({ name }) })

const Hello = ({ name, sayHello }) => (
  <div style={{ backgroundColor: GREEN_200 }}>
    <h2>Hello</h2>
    <input type="text" onChange={e => sayHello(e.target.value)} />
    <p>Hello, {name}</p>
  </div>
)

const SuperHello = withHelloHandler(Hello)

export default SuperHello
