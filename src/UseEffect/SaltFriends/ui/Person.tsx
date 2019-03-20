import React from 'react'

import { Person as PersonType } from '../types'
import { PersonStyles } from '../styles'
import { SaltImage } from './SaltImage'

interface Props {
  person: PersonType
  friendStatusText?: string
  changeFriendshipStatus?(p: PersonType): void
}

export const Person = ({
  person,
  friendStatusText,
  changeFriendshipStatus
}: Props) => (
  <PersonStyles>
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
