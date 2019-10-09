import React from 'React'
import { RouteComponentProps } from '@reach/router'

import { Switcher } from '../utils/Switcher'

import { UseEffect as SaltFriendsClass } from './SaltFriends/class'
import { UseEffect as SaltFriendsHook } from './SaltFriends/hook'
import { ThemeProvider } from './SaltFriends/theme'

export const UseContextRoute = (_: RouteComponentProps) => (
  <Switcher
    switches={[
      {
        name: 'Salt Friends - Hook',
        component: (
          <ThemeProvider>
            <SaltFriendsHook />
          </ThemeProvider>
        )
      },
      {
        name: 'Salt Friends - Class',
        component: (
          <ThemeProvider>
            <SaltFriendsClass />
          </ThemeProvider>
        )
      }
    ]}
  />
)
