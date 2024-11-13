function playBeep(frequency: number, duration: number, callback: () => void) {
  const audioContext: AudioContext = new ((window as any).AudioContext ||
    (window as any).webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  oscillator.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration / 1000);

  // Call the callback after the duration is over
  oscillator.onended = () => {
    callback();
  };
}

interface Note {
  frequency: number;
  duration: number;
}

function playTune(tune: Note[]) {
  let index = 0;

  function playNextNote() {
    if (index < tune.length) {
      const note = tune[index];
      playBeep(note.frequency, note.duration, playNextNote);
      index++;
    }
  }

  playNextNote(); // Start the sequence
}

export function playLosingTune() {
  const tune = [
    { frequency: 440, duration: 200 }, // A4
    { frequency: 392, duration: 200 }, // G4
    { frequency: 349, duration: 200 }, // F4
    { frequency: 330, duration: 200 }, // E4
    { frequency: 294, duration: 400 }, // D4
  ];

  playTune(tune);
}

export function playWinningTune() {
  const tune = [
    { frequency: 262, duration: 200 }, // C4
    { frequency: 294, duration: 200 }, // D4
    { frequency: 330, duration: 200 }, // E4
    { frequency: 392, duration: 200 }, // G4
    { frequency: 523, duration: 400 }, // C5
  ];

  playTune(tune);
}
