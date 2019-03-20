import { useEffect, useState } from 'react'

import { ChordBoi, AvailableChords, ChordType } from './ChordBoi'

const keyboardEvents = {
  Space: 32,
  Up: 38,
  Down: 40,
  m: 77,
  chords: [65, 66, 67, 68, 69, 70, 71]
}

function useToggle<T>(toggledOptions: T[]): [T, (override?: T) => void] {
  const [currentValue, setCurrent] = useState<T>(toggledOptions[0])

  const toggleValue = (override?: T) =>
    setCurrent(prev => {
      if (override) return override

      if (prev === toggledOptions[0]) return toggledOptions[1]
      return toggledOptions[0]
    })

  return [currentValue, toggleValue]
}

function useChord(
  initialChord: string
): [string, (c: string) => void, (s: number) => void] {
  const [currentChord, setChord] = useState(initialChord)

  const moveChord = function(steps: number) {
    setChord(prev => {
      const currentChordIndex = AvailableChords.indexOf(prev)
      let newIndex = (currentChordIndex + steps) % AvailableChords.length
      if (newIndex < 0) newIndex = AvailableChords.length - 1

      return AvailableChords[newIndex]
    })
  }

  return [currentChord, setChord, moveChord]
}

export function useChordBoi() {
  const [currentChord, setCurrentChord, moveChord] = useChord('C')
  const [isPlaying, togglePlaying] = useToggle<boolean>([false, true])
  const [chordType, toggleType] = useToggle<ChordType>(['major', 'minor'])
  const [chordBoi, setChordBoi] = useState<ChordBoi | null>(null)

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    setChordBoi(new ChordBoi(currentChord, chordType))

    return () => {
      window.removeEventListener('keydown', downHandler)
      if (chordBoi) chordBoi.stop()
    }
  }, [])

  useEffect(() => {
    if (!chordBoi) return

    if (isPlaying) chordBoi.play()
    else chordBoi.stop()
  }, [isPlaying])

  useEffect(() => {
    if (!chordBoi) return
    chordBoi.changeChord(currentChord, chordType)
  }, [currentChord, chordType])

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

  return {
    chordType,
    isPlaying,
    currentChord,
    setType: (chordType: ChordType) => toggleType(chordType),
    togglePlaying,
    setCurrentChord
  }
}
