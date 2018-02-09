import React from 'react'
import SuperCounter from './SuperCounter'
import SuperHello from './SuperHello'
import SuperList from './SuperList'
import { GREEN_500, GREEN_50 } from '../constants/color'

const App = props => (
  <div style={{ textAlign: 'center', backgroundColor: GREEN_500 }}>
    <h1>Recompose</h1>
    <SuperCounter color={GREEN_50} />
    <SuperHello />
    <SuperList />
  </div>
)

export default App
