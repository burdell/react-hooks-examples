const noteFreqs = {
  A: 220.0,
  Bb: 233.08,
  B: 246.94,
  C: 261.63,
  'C#': 277.18,
  D: 293.66,
  Eb: 311.13,
  E: 329.63,
  F: 349.23,
  'F#': 369.99,
  G: 392.0,
  Ab: 415.3
}

const constant = Math.pow(2, 1 / 12)
export type ChordType = 'major' | 'minor'
const chordSteps = {
  major: [4, 7, 12, 16, 19],
  minor: [3, 7, 12, 15, 19]
}

export const AvailableChords = Object.keys(noteFreqs)

export class Chord {
  private freqs: number[]
  private AudioContext: any
  private oscillators: any[]

  constructor(note: string, type: ChordType) {
    const baseFreq: any = (noteFreqs as any)[note]
    this.freqs = this.createChord(baseFreq, type)
    this.oscillators = []

    const _window = window as any
    this.AudioContext = new (_window.AudioContext ||
      _window.webkitAudioContext)()
  }

  public play() {
    if (this.freqs.length === 0) return

    const AudioContext = this.AudioContext
    const oscillators: any[] = []

    this.freqs.forEach(freq => {
      const oscillator = AudioContext.createOscillator()
      oscillator.frequency.value = freq
      oscillator.connect(AudioContext.destination)
      oscillators.push(oscillator)
    })

    oscillators.forEach(o => o.start())
    this.oscillators = oscillators
  }

  public stop() {
    if (!this.oscillators.length) return

    while (this.oscillators.length) {
      const oscillator = this.oscillators.pop()
      oscillator.stop(0)
    }
  }

  public changeChord(chord: string, type: ChordType) {
    const baseFreq = (noteFreqs as any)[chord]
    this.freqs = this.createChord(baseFreq, type)

    if (this.isPlaying()) {
      this.stop()
      this.play()
    }
  }

  public createChord(baseFreq: number, type: ChordType) {
    const steps = chordSteps[type]
    return [baseFreq, ...steps.map(step => this.newFrequency(baseFreq, step))]
  }

  private newFrequency(baseFrequency: number, halfSteps: number) {
    return baseFrequency * Math.pow(constant, halfSteps)
  }

  private isPlaying() {
    return this.oscillators.length > 0
  }
}
