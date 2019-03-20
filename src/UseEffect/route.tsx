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
      { name: 'Salt Friends - Class', component: <SaltFriendsClass /> },
      { name: 'Salt Friends - Hook', component: <SaltFriendsHook /> },
      { name: 'Battery - Class', component: <ClassComp /> },
      { name: 'Battery - Hook', component: <HookComp /> }
    ]}
  />
)
