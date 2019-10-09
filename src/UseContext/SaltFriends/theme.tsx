import React, { createContext, useState } from 'react'

import { Theme, ThemeContextType, ProviderProps } from './types'

export const darkTheme: Theme = {
  background: '#300030',
  secondary: '#F07241',
  accent: '#C04848'
}

export const lightTheme: Theme = {
  background: '#F8F4E4',
  secondary: '#C99E93',
  accent: '#FFC6A5'
}

export const ThemeContext = createContext<ThemeContextType>({
  currentTheme: lightTheme,
  toggleTheme: () => null
})

const { Provider, Consumer } = ThemeContext

const ThemeProvider = ({ children }: ProviderProps) => {
  const [currentThemeName, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    if (currentThemeName === 'light') setTheme('dark')
    else setTheme('light')
  }
  const currentTheme = currentThemeName === 'light' ? lightTheme : darkTheme

  return <Provider value={{ currentTheme, toggleTheme }}>{children}</Provider>
}

export { ThemeProvider, Consumer as ThemeConsumer }
