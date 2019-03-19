import React, { Component } from 'react'

import { Container, PersonList } from './styles'
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

interface State {
  userList: PersonType[]
  friendList: PersonType[]
  filter: FilterType
}

export class UseEffect extends Component<Readonly<{}>, Readonly<State>> {
  readonly state: State = {
    userList: [],
    friendList: [],
    filter: {
      salt: []
    }
  }

  async componentDidMount() {
    resetApi()
    this.getPeople()
  }

  render() {
    return (
      <Container>
        <Filter onFilter={this.filter} />
        <div>
          <h3>Friends</h3>
          <PersonList data-testid="friend-list">
            {this.state.friendList.length
              ? this.state.friendList.map(person => (
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
            {this.state.userList.length
              ? this.state.userList.map(person => (
                  <Person
                    key={person.id}
                    person={person}
                    friendStatusText={
                      this.isNotFriend(person) ? '+ Add as Friend' : undefined
                    }
                    changeFriendshipStatus={this.addFriend}
                  />
                ))
              : 'No other users 😢'}
          </PersonList>
        </div>
      </Container>
    )
  }

  getPeople = async () => {
    const [userList, friendList] = await Promise.all([
      getAllUsers(this.state.filter),
      getFriends(this.state.filter)
    ])

    this.setState({ userList, friendList })
  }

  isNotFriend = (person: PersonType) => !this.state.friendList.includes(person)

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
