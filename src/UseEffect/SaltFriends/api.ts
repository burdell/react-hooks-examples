import { Salt, Person, Filter } from './types'

const userList: Person[] = [
  {
    id: 1,
    name: 'Tom Joad',
    email: 'tjoad@gmail.com',
    saltPreference: 'Mortons'
  },
  {
    id: 2,
    name: 'Ivan Karamazov',
    email: 'ik@gmail.com',
    saltPreference: 'Diamond Crystal'
  },
  {
    id: 3,
    name: 'George P. Burdell',
    email: 'gpburdell@gmail.com',
    saltPreference: 'Diamond Crystal'
  },
  {
    id: 4,
    name: 'Art Vandelay',
    email: 'latexiskewl@gmail.com',
    saltPreference: 'Mortons'
  },
  {
    id: 5,
    name: 'Rusty Shackelford',
    email: 'rshackelford@gmail.com',
    saltPreference: 'Diamond Crystal'
  }
]
let friendList: number[] = [5]

const friends = () => userList.filter(user => friendList.indexOf(user.id) >= 0)

export const resetApi = () => {
  friendList = [5]
}

export const getAllUsers = async (filter: Filter) =>
  getBySaltPreference(filter.salt, false)

export const getFriends = async (filter: Filter) =>
  getBySaltPreference(filter.salt, true)

export const getBySaltPreference = async (salt: Salt[], isFriend: boolean) => {
  const users = isFriend ? friends() : userList

  if (salt.length === 0) return Promise.resolve(users)

  return Promise.resolve(
    users.filter(user => salt.indexOf(user.saltPreference) >= 0)
  )
}

export const addFriend = async (person: Person) => {
  if (friendList.includes(person.id)) return

  friendList.push(person.id)

  return Promise.resolve(true)
}

export const removeFriend = async (person: Person) => {
  if (!friendList.includes(person.id)) return

  friendList = friendList.filter(id => id !== person.id)

  return Promise.resolve(true)
}
