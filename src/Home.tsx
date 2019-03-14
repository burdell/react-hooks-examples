import React from 'react'
import { Link, RouteComponentProps } from '@reach/router'

export const Home = (props: RouteComponentProps) => (
  <div>
    <Link to="/use-state">useState</Link>
  </div>
)
