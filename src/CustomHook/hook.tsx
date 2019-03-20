import React from 'react'

import { Option, NoteRow, ChordBoiStyles, Instructions } from './styles'
import { AvailableChords } from './ChordBoi'
import { useChordBoi } from './useChordBoi'

export const CustomHook = () => {
  const {
    chordType,
    isPlaying,
    currentChord,
    setType,
    setCurrentChord,
    togglePlaying
  } = useChordBoi()

  return (
    <ChordBoiStyles>
      <NoteRow>
        <Option
          onClick={() => setType('major')}
          selected={chordType === 'major'}
        >
          😊
        </Option>
        <Option
          onClick={() => setType('minor')}
          selected={chordType === 'minor'}
        >
          😢
        </Option>
      </NoteRow>
      <NoteRow>
        {AvailableChords.map(chord => (
          <Option
            selected={currentChord === chord}
            key={chord}
            onClick={() => setCurrentChord(chord)}
          >
            {chord}
          </Option>
        ))}
      </NoteRow>
      <button onClick={() => togglePlaying()}>
        {isPlaying ? 'Stop' : 'Start'}
      </button>
      <Instructions>
        <div>SPACE - start / stop</div>
        <div>KEY UP / DOWN - change chord</div>
        <div>m - toggle major & minor</div>
      </Instructions>
    </ChordBoiStyles>
  )
}
