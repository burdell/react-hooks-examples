import React, { Component, Fragment } from 'react'

import { Container, PersonList, SaltStyles, PersonStyles } from './styles'
import { Person as PersonType, Salt, getAllUsers, getFriends } from './api'

interface State {
  userList: PersonType[]
  friendList: PersonType[]
}

export class UseEffect extends Component<Readonly<{}>, Readonly<State>> {
  readonly state: State = {
    userList: [],
    friendList: []
  }

  async componentDidMount() {
    const [userList, friendList] = await Promise.all([
      getAllUsers(),
      getFriends()
    ])

    this.setState({ userList, friendList })
  }

  render() {
    return (
      <Container>
        <div>
          <h3>Friends</h3>
          <PersonList>
            {this.state.friendList.length
              ? this.state.friendList.map(person => (
                  <Person key={person.id} person={person} />
                ))
              : 'No friends 😢'}
          </PersonList>
        </div>
        <div>
          <h3>All Users</h3>
          <PersonList>
            {this.state.userList.length
              ? this.state.userList.map(person => (
                  <Person key={person.id} person={person} />
                ))
              : 'No other users 😢'}
          </PersonList>
        </div>
      </Container>
    )
  }
}

const SaltImage = ({ salt }: { salt: Salt }) => (
  <SaltStyles
    src={
      salt === 'Diamond Crystal'
        ? 'https://www.diamondcrystalsalt.com/image/1432075105195/kosher-salt-box.png'
        : 'https://cdn.mortonsalt.com/wp-content/uploads/morton-coarse-kosher-salt-3.png'
    }
  />
)

const Person = ({ person }: { person: PersonType }) => (
  <PersonStyles>
    <h2>{person.name}</h2>
    <SaltImage salt={person.saltPreference} />
  </PersonStyles>
)
