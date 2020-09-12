/* App imports */
import { Notes, ScaleNames, ScaleNoteMap, ChordNoteMap } from 'const'

export const getScaleName = (scale, rootnote) => {
  return `${Object.keys(Notes)[rootnote]} ${ScaleNames[scale]}`;
};

export const getNoteName = (note) => {
  return `${Object.keys(Notes)[note]}`;
};

export const getNotesInScale = (scale, scale_rootnote) => {
  let notesInScale = [scale_rootnote];

  for (let i = 1; i < ScaleNoteMap[scale].length; i++) {
    let step = ScaleNoteMap[scale][i]
    notesInScale.push((notesInScale[i-1] + step) % 12)
  }

  return notesInScale;
};

export const getNotesInChord = (chord_type, chord_rootnote) => {
  let notesInChord = [[chord_rootnote, 0]];
  let octave = 0;

  for (let i = 1; i < ChordNoteMap[chord_type].length; i++) {
    let step = ChordNoteMap[chord_type][i]
    let steppedNote = (notesInChord[i-1][0] + step);
    let noteVal = (steppedNote) % 12;

    if(steppedNote >= 12) {
      octave++;
      if (octave == 2) {
        octave = 0;
      }
    }

    notesInChord.push([noteVal, octave ])
  }

  return notesInChord;
};

export const isNoteInKey = (note, state) => {
  let notesInScale = state.notes_in_scale;
  return notesInScale.includes(note);
};

export const isNoteInChord = (note, octave, state) => {
  let notesInChord = state.notes_in_chord;

  for (let i = 0; i < notesInChord.length; i++) {
    let chordData = notesInChord[i]
    if (note === chordData[0] && octave === chordData[1]) {
      return true;
    }
  }

  return false;
};
