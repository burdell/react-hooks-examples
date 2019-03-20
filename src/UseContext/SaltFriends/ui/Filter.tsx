import React, { Fragment } from 'react'

import { Filter as FilterStyles } from '../styles'
import { Salt } from '../types'
import { SaltImage } from './SaltImage'

interface Props {
  onFilter: (p: { salt: Salt; include: boolean }) => void
}

export const Filter = ({ onFilter }: Props) => (
  <Fragment>
    <h3>Filter</h3>
    <FilterStyles>
      <div>
        <label htmlFor="good-salt">
          <SaltImage salt="Diamond Crystal" />
        </label>
        <input
          id="good-salt"
          data-testid="good-salt"
          type="checkbox"
          onChange={e =>
            onFilter({
              salt: 'Diamond Crystal',
              include: e.target.checked
            })
          }
        />
        <label htmlFor="bad-salt">
          <SaltImage salt="Mortons" />
        </label>
        <input
          id="bad-salt"
          data-testid="bad-salt"
          type="checkbox"
          onChange={e =>
            onFilter({
              salt: 'Mortons',
              include: e.target.checked
            })
          }
        />
      </div>
    </FilterStyles>
  </Fragment>
)
