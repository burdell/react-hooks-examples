import React from 'react'
import { Link, RouteComponentProps } from '@reach/router'

import styled from '@emotion/styled'

const HomeStyles = styled('div')`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  a {
    display: block;
    margin-bottom: 1rem;
    color: #5c6068;
  }
`

export const Home = (_: RouteComponentProps) => (
  <HomeStyles>
    <Link to="/use-state">useState</Link>
    <Link to="/use-effect">useEffect</Link>
    <Link to="/use-context">useContext</Link>
    <Link to="/use-ref">useRef</Link>
    <Link to="/custom-hook">Custom Hook</Link>
  </HomeStyles>
)
