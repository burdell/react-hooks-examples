import { useEffect, useState } from 'react'

import { ChordBoi, AvailableChords, ChordType } from './ChordBoi'

const keyboardEvents = {
  Space: 32,
  Up: 38,
  Down: 40,
  m: 77,
  chords: [65, 66, 67, 68, 69, 70, 71]
}

export function useChordBoi() {
  const [currentChord, setCurrentChord] = useState('C')
  const [chordType, setType] = useState<ChordType>('major')
  const [isPlaying, setPlaying] = useState(false)
  const [chordBoi, setChordBoi] = useState<ChordBoi | null>(null)

  const togglePlaying = () => setPlaying(prev => !prev)
  const toggleType = () =>
    setType(prev => (prev === 'major' ? 'minor' : 'major'))

  const moveChord = function(steps: number) {
    setCurrentChord(prev => {
      const currentChordIndex = AvailableChords.indexOf(prev)
      let newIndex = (currentChordIndex + steps) % AvailableChords.length
      if (newIndex < 0) newIndex = AvailableChords.length - 1

      return AvailableChords[newIndex]
    })
  }

  function downHandler({ which, key }: KeyboardEvent) {
    if (keyboardEvents.chords.includes(which)) {
      setCurrentChord(key.toUpperCase())
    } else {
      switch (which) {
        case keyboardEvents.Space:
          togglePlaying()
          return
        case keyboardEvents.m:
          toggleType()
          return
        case keyboardEvents.Down:
          moveChord(-1)
          return
        case keyboardEvents.Up:
          moveChord(1)
          return
        default:
          return
      }
    }
  }

  useEffect(() => {
    if (!chordBoi) return

    if (isPlaying) chordBoi.play()
    else chordBoi.stop()
  }, [isPlaying])

  useEffect(() => {
    if (!chordBoi) return
    chordBoi.changeChord(currentChord, chordType)
  }, [currentChord, chordType])

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    setChordBoi(new ChordBoi(currentChord, chordType))

    return () => {
      window.removeEventListener('keydown', downHandler)
      if (chordBoi) chordBoi.stop()
    }
  }, [])

  return {
    chordType,
    isPlaying,
    currentChord,
    setType,
    togglePlaying,
    setCurrentChord
  }
}
