import React from 'react'

import { Person } from '../types'
import { usePagination } from '../usePagination'
import { TableStyles } from './styles'

interface Props {
  people: Person[]
}

export function Table({ people }: Props) {
  const { data, prev, next, meta } = usePagination(people)

  return (
    <TableStyles>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Job</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {data.map((person: any) => (
            <tr key={person.name}>
              <td>{person.name}</td>
              <td>{person.job}</td>
              <td>{person.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={prev}>prev</button>
        <span>
          {meta.page + 1} of {meta.totalPages}
        </span>
        <button onClick={next}>next</button>
      </div>
    </TableStyles>
  )
}
