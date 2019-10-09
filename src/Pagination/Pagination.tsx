import React from 'react'
import faker from 'faker'

import { Table } from './Table'
import { PersonCardList } from './Card'

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max))
}

export function getPeople(numPeople: number) {
  return Array(numPeople)
    .fill(undefined)
    .map(() => {
      return {
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        age: getRandomInt(100),
        job: faker.name.jobTitle(),
        pictureUrl: faker.internet.avatar()
      }
    })
}

export function Pagination() {
  const people = getPeople(50)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      <Table people={people} />
      <PersonCardList people={people} />
    </div>
  )
}
