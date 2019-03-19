import React from 'React'
import { RouteComponentProps } from '@reach/router'

import { Switcher } from '../utils/Switcher'

import { CustomHook as ClassComp } from './class'
import { CustomHook as HookComp } from './hook'

export const CustomHookRoute = (_: RouteComponentProps) => (
  <Switcher
    switches={[
      { name: 'Class', component: <ClassComp /> },
      { name: 'Hook', component: <HookComp /> }
    ]}
  />
)
