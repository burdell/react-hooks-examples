import React from 'React'
import { RouteComponentProps } from '@reach/router'

import { Switcher } from '../utils/Switcher'

import { UseState as ClassComp } from './class'
import { UseState as HookComp } from './hook'

export const UseStateRoute = (_: RouteComponentProps) => (
  <Switcher
    switches={[
      { name: 'Basic Hook', component: <HookComp /> },
      { name: 'Basic Class', component: <ClassComp /> }
    ]}
  />
)
