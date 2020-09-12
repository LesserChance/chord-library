/* App imports */
import { Notes, ScaleNames, ScaleNoteMap, ChordNoteMap } from 'const'

export const getScaleName = (scale, rootnote) => {
  return `${Object.keys(Notes)[rootnote]} ${ScaleNames[scale]}`;
};

export const getNoteName = (note) => {
  return `${Object.keys(Notes)[note]}`;
};

export const getNotesInScale = (note, scale, scale_rootnote) => {
  let notesInScale = [scale_rootnote];
  ScaleNoteMap[scale].forEach((step, stepIndex) => {
    notesInScale.push((notesInScale[stepIndex] + step) % 12)
  })

  return notesInScale;
};

export const getNotesInChord = (note, chord_rootnote, chord_type, scale, scale_rootnote) => {
  let notesInScale = getNotesInScale(note, scale, scale_rootnote);
  let notesInChord = [];
  ChordNoteMap[chord_type].forEach((note) => {
    notesInChord.push(notesInScale[note])
  })

  return notesInChord;
};

export const isNoteInKey = (note, scale, scale_rootnote) => {
  let notesInScale = getNotesInScale(note, scale, scale_rootnote);
  return notesInScale.includes(note);
};

export const isNoteInChord = (note, chord_rootnote, chord_type, scale, scale_rootnote) => {
  let notesInChord = getNotesInChord(note, chord_rootnote, chord_type, scale, scale_rootnote);
  return notesInChord.includes(note);
};
