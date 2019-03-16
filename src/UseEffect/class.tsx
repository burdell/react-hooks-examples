import React, { Component } from 'react'

import { Chord } from './Chord'

interface State {
  playing: boolean
  chord: Chord
  mood: 'major' | 'minor' | 'seventh'
}

export class UseEffect extends Component<{}, Readonly<State>> {
  public state: State = {
    playing: false,
    chord: new Chord(),
    mood: 'major'
  }

  componentDidUpdate(prevProps: {}, prevState: State) {
    const { playing, chord, mood } = this.state
    if (!prevState.playing && playing) {
      chord.play()
    }

    if (prevState.playing && !playing) {
      chord.stop()
    }

    if (prevState.mood !== mood) {
      chord.setMood(mood)
    }
  }

  render() {
    const { playing } = this.state
    return (
      <div>
        <div>
          <input
            type="range"
            min="-100"
            max="100"
            defaultValue="0"
            onChange={e => console.log(e.target.value)}
          />
        </div>
        <div>
          <div onClick={() => this.setState({ mood: 'major' })}>😄</div>
          <div onClick={() => this.setState({ mood: 'minor' })}>😢</div>
          <div onClick={() => this.setState({ mood: 'seventh' })}>🤗</div>
        </div>
        <button onClick={() => this.setState({ playing: !playing })}>
          {playing ? 'Stop' : 'Start'}
        </button>
      </div>
    )
  }
}
