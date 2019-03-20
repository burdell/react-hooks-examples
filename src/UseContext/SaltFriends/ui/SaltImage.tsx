import React from 'react'

import { SaltStyles } from '../styles'
import { Salt } from '../types'

export const SaltImage = ({ salt }: { salt: Salt }) => (
  <SaltStyles
    src={
      salt === 'Diamond Crystal'
        ? 'https://www.diamondcrystalsalt.com/image/1432075105195/kosher-salt-box.png'
        : 'https://cdn.mortonsalt.com/wp-content/uploads/morton-coarse-kosher-salt-3.png'
    }
  />
)
