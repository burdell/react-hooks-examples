import React from 'React'
import { RouteComponentProps } from '@reach/router'

import { Switcher } from '../utils/Switcher'

import { UseEffect as ClassComp } from './Battery/class'
import { UseEffect as HookComp } from './Battery/hook'
import { UseEffect as SaltFriendsClass } from './SaltFriends/class'
import { UseEffect as SaltFriendsHook } from './SaltFriends/hook'

export const UseEffectRoute = (_: RouteComponentProps) => (
  <Switcher
    switches={[
      { name: 'Battery - Hook', component: <HookComp /> },
      { name: 'Salt Friends - Hook', component: <SaltFriendsHook /> },
      { name: 'Salt Friends - Class', component: <SaltFriendsClass /> },
      { name: 'Battery - Class', component: <ClassComp /> }
    ]}
  />
)
