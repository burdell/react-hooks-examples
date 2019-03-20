import React, { Component } from 'react'

import { Container, PersonList, ToggleButton } from './styles'
import {
  getAllUsers,
  getFriends,
  addFriend,
  removeFriend,
  resetApi
} from './api'
import { Person as PersonType, Salt, Filter as FilterType } from './types'
import { Person } from './ui/Person'
import { Filter } from './ui/Filter'
import { ThemeConsumer } from './theme'

interface State {
  allUsers: PersonType[]
  friends: PersonType[]
  filter: FilterType
}

export class UseEffect extends Component<{}, Readonly<State>> {
  readonly state: State = {
    allUsers: [],
    friends: [],
    filter: {
      salt: []
    }
  }

  async componentDidMount() {
    resetApi()
    this.getPeople()
  }

  render() {
    const { friends, allUsers } = this.state
    return (
      <ThemeConsumer>
        {({ currentTheme, toggleTheme }) => (
          <div>
            <ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton>
            <Container theme={currentTheme}>
              <Filter onFilter={this.filter} />
              <div>
                <h3>Friends</h3>
                <PersonList data-testid="friend-list">
                  {friends.length
                    ? friends.map(person => (
                        <Person
                          key={person.id}
                          person={person}
                          friendStatusText="x DE-FRIEND"
                          changeFriendshipStatus={this.removeFriend}
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
                            !friends.includes(person)
                              ? '+ Add as Friend'
                              : undefined
                          }
                          changeFriendshipStatus={this.addFriend}
                        />
                      ))
                    : 'No other users 😢'}
                </PersonList>
              </div>
            </Container>
          </div>
        )}
      </ThemeConsumer>
    )
  }

  getPeople = async () => {
    const [allUsers, friends] = await Promise.all([
      getAllUsers(this.state.filter),
      getFriends(this.state.filter)
    ])

    this.setState({ allUsers, friends })
  }

  filter = async ({ salt, include }: { salt: Salt; include: boolean }) => {
    const newSalt = [...this.state.filter.salt]

    let saltIndex = newSalt.indexOf(salt)
    if (include && saltIndex < 0) newSalt.push(salt)
    if (!include && saltIndex >= 0) newSalt.splice(saltIndex, 1)

    this.setState({ filter: { salt: newSalt } }, this.getPeople)
  }

  addFriend = async (person: PersonType) => {
    await addFriend(person)

    this.getPeople()
  }

  removeFriend = async (person: PersonType) => {
    await removeFriend(person)

    this.getPeople()
  }
}
