/* App imports */
import { Notes, ScaleNames, ScaleNoteMap, ChordNoteMap } from 'const'

export const getScaleName = (scale, rootnote) => {
  return `${Object.keys(Notes)[rootnote]} ${ScaleNames[scale]}`;
};

export const getNoteName = (note) => {
  return `${Object.keys(Notes)[note]}`;
};

export const getNotesInScale = (scale, scaleRootnote) => {
  let notesInScale = [scaleRootnote];

  for (let i = 1; i < ScaleNoteMap[scale].length; i++) {
    let step = ScaleNoteMap[scale][i]
    notesInScale.push((notesInScale[i-1] + step) % 12)
  }

  return notesInScale;
};

export const getNotesInChord = (chordType, chordRootnote) => {
  let notesInChord = [[chordRootnote, 0]];
  let octave = 0;

  for (let i = 1; i < ChordNoteMap[chordType].length; i++) {
    let step = ChordNoteMap[chordType][i]
    let steppedNote = (notesInChord[i-1][0] + step);
    let noteVal = (steppedNote) % 12;

    if(steppedNote >= 12) {
      octave++;
      if (octave === 2) {
        octave = 0;
      }
    }

    notesInChord.push([noteVal, octave ])
  }

  return notesInChord;
};

export const isNoteInKey = (note, state) => {
  let notesInScale = state.notesInScale;
  return notesInScale.includes(note);
};

export const isChordInKey = (chordType, chordRootnote, notesInScale) => {
  let notesInChord = getNotesInChord(chordType, chordRootnote);
  notesInChord = notesInChord.map((noteTuple) => {return noteTuple[0];})

  for (let i = 1; i < notesInChord.length; i++) {
    if (!notesInScale.includes(notesInChord[i])) {
      return false;
    }
  }

  return true;
};

export const isNoteInChord = (note, octave, state) => {
  let notesInChord = state.notesInChord;

  for (let i = 0; i < notesInChord.length; i++) {
    let chordData = notesInChord[i]
    if (note === chordData[0] && octave === chordData[1]) {
      return true;
    }
  }

  return false;
};
