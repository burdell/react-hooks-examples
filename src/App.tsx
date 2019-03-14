import React from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import { Router } from '@reach/router'

import { UseStateRoute } from './UseState/route'
import { Home } from './Home'

const globalStyles = css`
  * {
    font-family: Raleway;
  }
`
const AppStyles = styled('div')`
  width: 70%;
  margin: 0 auto;
  text-align: center;
`

export const App = () => (
  <AppStyles>
    <Global styles={globalStyles} />
    <Router>
      <Home path="/" />
      <UseStateRoute path="/use-state" />
    </Router>
  </AppStyles>
)
