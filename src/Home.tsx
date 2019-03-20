import React from 'react'
import { Link, RouteComponentProps } from '@reach/router'

export const Home = (_: RouteComponentProps) => (
  <div>
    <div>
      <Link to="/use-effect">useEffect</Link>
    </div>
    <div>
      <Link to="/use-state">useState</Link>
    </div>
    <div>
      <Link to="/use-ref">useRef</Link>
    </div>
    <div>
      <Link to="/use-context">useContext</Link>
    </div>
  </div>
)
