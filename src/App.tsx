import React from 'react'
import { Global } from '@emotion/core'
import { Router } from '@reach/router'

import { AppStyles, globalStyles } from './styles'
import { Home } from './Home'

import { UseStateRoute } from './UseState/route'
import { UseEffectRoute } from './UseEffect/route'
import { UseRefRoute } from './UseRef/route'
import { CustomHookRoute } from './CustomHook/route'
import { UseContextRoute } from './UseContext/route'

export const App = () => (
  <AppStyles>
    <Global styles={globalStyles} />
    <Router>
      <Home path="/" />
      <UseStateRoute path="/use-state" />
      <UseEffectRoute path="/use-effect" />
      <UseRefRoute path="/use-ref" />
      <CustomHookRoute path="/custom-hook" />
      <UseContextRoute path="/use-context" />
    </Router>
  </AppStyles>
)
