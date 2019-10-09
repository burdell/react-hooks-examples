import React from 'React'
import { RouteComponentProps } from '@reach/router'

import { Switcher } from '../utils/Switcher'
import { Pagination } from './Pagination'
export const PaginationRoute = (_: RouteComponentProps) => (
  <Switcher
    switches={[
      {
        name: 'Pagination',
        component: <Pagination />
      }
    ]}
  />
)
