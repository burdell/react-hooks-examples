import { ReactNode } from 'react'
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

export interface Theme {
  background: string
  secondary: string
  accent: string
}

export interface ThemeContextType {
  currentTheme: Theme
  toggleTheme: () => void
}

export interface ProviderProps {
  children: ReactNode
}
