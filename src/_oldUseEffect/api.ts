export type Salt = 'Mortons' | 'Diamond Crystal'

export interface Person {
  name: string
  email: string
  saltPreference: Salt
  id: number
}

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
const friendList: number[] = [5]

const nonFriends = () =>
  userList.filter(user => friendList.indexOf(user.id) < 0)
const friends = () => userList.filter(user => friendList.indexOf(user.id) >= 0)

export const getAllUsers = async () => Promise.resolve(userList)

export const getFriends = async () => Promise.resolve(friends())

export const getNonFriends = async () => Promise.resolve(nonFriends())

export const getBySaltPreference = async (salt: Salt, isFriend: boolean) => {
  const userList = isFriend ? friends() : nonFriends()
  return Promise.resolve(userList.filter(user => user.saltPreference === salt))
}
