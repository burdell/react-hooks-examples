const defaultFreqs = {
  major: [261.63, 329.63, 392.0],
  minor: [261.63, 311.13, 392.0],
  seventh: [261.63, 329.63, 233.08]
}

export class Chord {
  private freqs: number[]
  private AudioContext: any
  private oscilators: any[]

  constructor(freqs = defaultFreqs.major) {
    this.freqs = freqs
    this.oscilators = []

    const _window = window as any
    this.AudioContext = new (_window.AudioContext ||
      _window.webkitAudioContext)()
  }

  public play() {
    this.freqs.forEach(freq => {
      const AudioContext = this.AudioContext

      const oscillator = this.AudioContext.createOscillator()
      this.oscilators.push(oscillator)
      oscillator.frequency.value = freq
      oscillator.connect(AudioContext.destination)
      oscillator.start(0)
    })
  }

  public stop() {
    if (!this.oscilators.length) return

    while (this.oscilators.length) {
      const oscillator = this.oscilators.pop()
      oscillator.stop(0)
    }
  }

  public setMood(mood: 'major' | 'minor' | 'seventh') {
    this.freqs = defaultFreqs[mood]

    if (this.isPlaying()) {
      this.stop()
      this.play()
    }
  }

  public slide(amount: )

  private isPlaying() {
    return this.oscilators.length > 0
  }
}
