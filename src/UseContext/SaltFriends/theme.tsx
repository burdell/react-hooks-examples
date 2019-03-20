import React, { createContext, useState, Fragment, ReactNode } from 'react'

export interface Theme {
  background: string
  secondary: string
  accent: string
}

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

export const ThemeContext = createContext<{
  currentTheme: Theme
}>({
  currentTheme: lightTheme
})

const { Provider, Consumer } = ThemeContext

interface ProviderProps {
  children({ toggleTheme }: { toggleTheme(): void }): ReactNode
}

const ThemeProvider = ({ children }: ProviderProps) => {
  const [currentThemeName, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    if (currentThemeName === 'light') setTheme('dark')
    else setTheme('light')
  }
  const currentTheme = currentThemeName === 'light' ? lightTheme : darkTheme

  return (
    <Provider value={{ currentTheme }}>{children({ toggleTheme })}</Provider>
  )
}

export { ThemeProvider, Consumer as ThemeConsumer }
