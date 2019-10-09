import React from 'react'
import { Global } from '@emotion/core'
import { Router } from '@reach/router'

import { AppStyles, globalStyles } from './styles'
import { Home } from './Home'

import { UseStateRoute } from './UseState/route'
import { UseEffectRoute } from './UseEffect/route'
import { UseContextRoute } from './UseContext/route'
import { PaginationRoute } from './Pagination/route'
import { CustomHookRoute } from './CustomHook/route'
import { UseRefRoute } from './UseRef/route'

export const App = () => (
  <AppStyles>
    <Global styles={globalStyles} />
    <Router>
      <Home path="/" />
      <UseStateRoute path="/use-state" />
      <UseEffectRoute path="/use-effect" />
      <UseContextRoute path="/use-context" />
      <UseRefRoute path="/use-ref" />
      <PaginationRoute path="/pagination" />
      <CustomHookRoute path="/chordboi" />
    </Router>
  </AppStyles>
)
