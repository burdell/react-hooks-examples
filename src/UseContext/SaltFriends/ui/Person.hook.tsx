import React, { useContext } from 'react'

import { Person as PersonType } from '../types'
import { PersonStyles } from '../styles'
import { SaltImage } from './SaltImage'
import { ThemeContext } from '../theme'

interface Props {
  person: PersonType
  friendStatusText?: string
  changeFriendshipStatus?(p: PersonType): void
}

export const Person = ({
  person,
  friendStatusText,
  changeFriendshipStatus
}: Props) => {
  const { currentTheme } = useContext(ThemeContext)

  return (
    <PersonStyles theme={currentTheme}>
      <div>
        <h2>{person.name}</h2>
        {friendStatusText && changeFriendshipStatus && (
          <button
            data-testid={`change-friend-${person.name}`}
            onClick={() => changeFriendshipStatus(person)}
          >
            {friendStatusText}
          </button>
        )}
      </div>
      <SaltImage salt={person.saltPreference} />
    </PersonStyles>
  )
}
