import React, { Component } from 'react'

import { Option, NoteRow, ChordBoiStyles, Instructions } from './styles'
import { ChordBoi, AvailableChords, ChordType } from './ChordBoi'

const keyboardEvents = {
  Space: 32,
  Up: 38,
  Down: 40,
  m: 77,
  chords: [65, 66, 67, 68, 69, 70, 71]
}

interface State {
  playing: boolean
  chordBoi: ChordBoi
  currentChord: string
  chordType: ChordType
}

export class CustomHook extends Component<{}, Readonly<State>> {
  public state: State = {
    playing: false,
    chordBoi: new ChordBoi('C', 'major'),
    currentChord: 'C',
    chordType: 'major'
  }

  componentDidUpdate(_: {}, prevState: State) {
    const { playing, chordBoi, currentChord, chordType } = this.state

    if (!prevState.playing && playing) {
      chordBoi.play()
    }
    if (prevState.playing && !playing) {
      chordBoi.stop()
    }
    if (currentChord && prevState.currentChord !== currentChord) {
      chordBoi.changeChord(currentChord, this.state.chordType)
    }

    if (chordType && prevState.chordType !== chordType) {
      chordBoi.changeChord(currentChord, chordType)
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyEvent)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyEvent)
    this.state.chordBoi.stop()
  }

  render() {
    return (
      <ChordBoiStyles>
        <NoteRow>
          <Option
            onClick={() => this.setType('major')}
            selected={this.state.chordType === 'major'}
          >
            😊
          </Option>
          <Option
            onClick={() => this.setType('minor')}
            selected={this.state.chordType === 'minor'}
          >
            😢
          </Option>
        </NoteRow>
        <NoteRow>
          {AvailableChords.map(chord => (
            <Option
              selected={this.state.currentChord === chord}
              key={chord}
              onClick={() => this.setCurrentChord(chord)}
            >
              {chord}
            </Option>
          ))}
        </NoteRow>
        <button onClick={() => this.togglePlaying()}>
          {this.state.playing ? 'Stop' : 'Start'}
        </button>
        <Instructions>
          <div>SPACE - start / stop</div>
          <div>KEY UP / DOWN - change chord</div>
          <div>m - toggle major & minor</div>
        </Instructions>
      </ChordBoiStyles>
    )
  }

  handleKeyEvent = (event: KeyboardEvent) => {
    const { which, key } = event
    if (keyboardEvents.chords.includes(which)) {
      this.setCurrentChord(key.toUpperCase())
    } else {
      switch (which) {
        case keyboardEvents.Space:
          this.togglePlaying()
          return
        case keyboardEvents.m:
          this.toggleType()
          return
        case keyboardEvents.Down:
          this.moveChord(-1)
          return
        case keyboardEvents.Up:
          this.moveChord(1)
          return
        default:
          return
      }
    }
  }

  setType = (chordType: ChordType) => this.setState({ chordType })

  toggleType = () => {
    if (this.state.chordType === 'major') {
      this.setState({ chordType: 'minor' })
    } else {
      this.setState({ chordType: 'major' })
    }
  }

  setCurrentChord = (chord: string) => this.setState({ currentChord: chord })

  togglePlaying = () => this.setState({ playing: !this.state.playing })

  moveChord = (steps: number) => {
    const currentChordIndex = AvailableChords.indexOf(this.state.currentChord)
    let newIndex = (currentChordIndex + steps) % AvailableChords.length
    if (newIndex < 0) newIndex = AvailableChords.length - 1

    this.setCurrentChord(AvailableChords[newIndex])
  }
}
