import React from 'react'

import { Person } from '../types'
import { PersonCardStyles, PersonList } from './styles'
import { usePagination } from '../usePagination'

interface Props {
  people: Person[]
}

export function PersonCardList({ people }: Props) {
  const { data, meta, set } = usePagination(people)

  return (
    <div>
      <PersonList>
        {data.map((person: any) => (
          <PersonCardStyles key={person.name}>
            <div>
              <img src={person.pictureUrl} />
            </div>
            <div>
              <h1>{person.name}</h1>
              <h4>{person.job}</h4>
              <h4>{person.age} years old</h4>
            </div>
          </PersonCardStyles>
        ))}
      </PersonList>
      <div>
        <div>Page {meta.page + 1}</div>
        {Array(meta.totalPages)
          .fill(undefined)
          .map((_, index) => (
            <button
              key={index}
              style={{ margin: '2px' }}
              onClick={() => set({ page: index })}
            >
              {index + 1}
            </button>
          ))}
      </div>
    </div>
  )
}
