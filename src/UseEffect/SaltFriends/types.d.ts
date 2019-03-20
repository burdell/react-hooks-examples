export type Salt = 'Mortons' | 'Diamond Crystal'

export interface Person {
  name: string
  email: string
  saltPreference: Salt
  id: number
}

export interface Filter {
  salt: Salt[]
}
