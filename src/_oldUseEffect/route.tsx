import React from 'React'
import { RouteComponentProps } from '@reach/router'

import { Switcher } from '../utils/Switcher'

import { UseEffect as ClassComp } from './class'
import { UseEffect as HookComp } from './hook'

export const UseEffectRoute = (_: RouteComponentProps) => (
  <Switcher
    switches={[
      { name: 'Class', component: <ClassComp /> },
      { name: 'Hook', component: <HookComp /> }
    ]}
  />
)
