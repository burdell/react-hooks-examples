import React, { useState, useEffect, useContext, Fragment } from 'react'

import { Container, PersonList } from './styles'
import {
  getAllUsers,
  getFriends,
  addFriend as apiAddFriend,
  removeFriend as apiRemoveFriend,
  resetApi
} from './api'
import { Person as PersonType, Salt, Filter as FilterType } from './types'
import { Person } from './ui/Person.hook'
import { Filter } from './ui/Filter'
import { ThemeContext } from './theme'

interface Props {
  toggleTheme(): void
}

export const UseEffect = ({ toggleTheme }: Props) => {
  const [people, setPeople] = useState<{
    friends: PersonType[]
    allUsers: PersonType[]
  }>({ friends: [], allUsers: [] })
  const [filter, setFilter] = useState<FilterType>({ salt: [] })

  useEffect(() => {
    resetApi()
  }, [])

  useEffect(() => {
    getPeople()
  }, [filter])

  const getPeople = async () => {
    const [allUsers, friends] = await Promise.all([
      getAllUsers(filter),
      getFriends(filter)
    ])
    setPeople({ friends, allUsers })
  }

  const filterUsers = ({ salt, include }: { salt: Salt; include: boolean }) => {
    const newSalt = [...filter.salt]

    let saltIndex = newSalt.indexOf(salt)
    if (include && saltIndex < 0) newSalt.push(salt)
    if (!include && saltIndex >= 0) newSalt.splice(saltIndex, 1)

    setFilter({ salt: newSalt })
  }

  const removeFriend = async (person: PersonType) => {
    await apiRemoveFriend(person)
    getPeople()
  }
  const addFriend = async (person: PersonType) => {
    await apiAddFriend(person)
    getPeople()
  }

  const { currentTheme } = useContext(ThemeContext)
  const { friends, allUsers } = people
  return (
    <Fragment>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Container theme={currentTheme}>
        <Filter onFilter={filterUsers} />
        <div>
          <h3>Friends</h3>
          <PersonList data-testid="friend-list">
            {friends.length
              ? friends.map(person => (
                  <Person
                    key={person.id}
                    person={person}
                    friendStatusText="x DE-FRIEND"
                    changeFriendshipStatus={removeFriend}
                  />
                ))
              : 'No friends 😢'}
          </PersonList>
        </div>
        <div>
          <h3>All Users</h3>
          <PersonList data-testid="all-user-list">
            {allUsers.length
              ? allUsers.map(person => (
                  <Person
                    key={person.id}
                    person={person}
                    friendStatusText={
                      !friends.includes(person) ? '+ Add as Friend' : undefined
                    }
                    changeFriendshipStatus={addFriend}
                  />
                ))
              : 'No other users 😢'}
          </PersonList>
        </div>
      </Container>
    </Fragment>
  )
}
