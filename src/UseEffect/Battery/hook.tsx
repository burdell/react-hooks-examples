import React, { useEffect, useState } from 'react'

interface State {
  level: number
  charging: boolean
}

import { Battery } from './Battery'
import { UseEffectStyles } from './styles'

export const UseEffect = () => {
  const [battery, setBattery] = useState<State>({ level: 0, charging: false })

  const handleChange = ({ target }: { target: State }) => {
    setBattery({ level: target.level, charging: target.charging })
  }

  const setTitle = () => {
    document.title = `${battery.level * 100}%`
  }

  useEffect(() => {
    const _window = window as any
    _window.navigator.getBattery().then((bat: any) => {
      setBattery(bat)

      bat.addEventListener('levelchange', handleChange)
      bat.addEventListener('chargingchange', handleChange)
      handleChange({ target: bat })

      return () => {
        bat.removeEventListener('levelchange', handleChange)
        bat.removeEventListener('chargingchange', handleChange)
      }
    })
  }, [])

  useEffect(() => {
    setTitle()
  }, [battery.level])

  return (
    <UseEffectStyles>
      <Battery {...battery} />
    </UseEffectStyles>
  )
}
