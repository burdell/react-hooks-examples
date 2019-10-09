import React, { Component } from 'react'

interface State {
  level: number
  charging: boolean
}

import { Battery } from './Battery'
import { UseEffectStyles } from './styles'

export class UseEffect extends Component<{}, Readonly<State>> {
  state: State = {
    level: 0,
    charging: false
  }
  battery: any

  async componentDidMount() {
    const _window = window as any
    this.battery = await _window.navigator.getBattery()

    this.battery.addEventListener('levelchange', this.handleChange)
    this.battery.addEventListener('chargingchange', this.handleChange)
    this.handleChange({ target: this.battery })
    this.setTitle()
  }

  componentWillUnmount() {
    this.battery.removeEventListener('levelchange', this.handleChange)
    this.battery.removeEventListener('chargingchange', this.handleChange)
  }

  componentDidUpdate(currentState: State, prevState: State) {
    if (prevState.level !== currentState.level) {
      this.setTitle()
    }
  }

  render() {
    return (
      <UseEffectStyles>
        <Battery {...this.state} />
      </UseEffectStyles>
    )
  }

  handleChange = ({ target }: { target: State }) => {
    this.setState({ level: target.level, charging: target.charging })
  }

  setTitle = () => {
    document.title = `${this.state.level * 100}%`
  }
}
