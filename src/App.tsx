import React from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import { Router } from '@reach/router'

import { AppStyles, globalStyles } from './styles'
import { UseStateRoute } from './UseState/route'
import { Home } from './Home'

export const App = () => (
  <AppStyles>
    <Global styles={globalStyles} />
    <Router>
      <Home path="/" />
      <UseStateRoute path="/use-state" />
    </Router>
  </AppStyles>
)
