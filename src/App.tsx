import React from 'react'
import { Global } from '@emotion/core'
import { Router } from '@reach/router'

import { AppStyles, globalStyles } from './styles'
import { Home } from './Home'

import { UseStateRoute } from './UseState/route'
import { UseEffectRoute } from './UseEffect/route'

export const App = () => (
  <AppStyles>
    <Global styles={globalStyles} />
    <Router>
      <Home path="/" />
      <UseStateRoute path="/use-state" />
      <UseEffectRoute path="/use-effect" />
    </Router>
  </AppStyles>
)
