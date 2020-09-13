/* Global imports */
import update from 'immutability-helper';

/* App imports */
import { Scales, Notes, Chords, ScaleChordMap } from 'const'
import { Actions } from 'state/actions'
import { getNotesInScale, getNotesInChord } from 'state/util'

let scaleRootnote = Notes['C'];
let chordRootnote = Notes['C'];
let selectedChordType = Chords['maj'];

let initialState = {
  keyScale: Scales.Major,
  keyRootnote: scaleRootnote,

  // the chord
  chordRootnote: chordRootnote,
  scaleChordType: Chords['maj'],
  scaleChordPosition: 0,

  // the type of chord to display notes for
  selectedChordType: selectedChordType,

  // calculated properties
  notesInScale: getNotesInScale(Scales.Major, scaleRootnote),
  notesInChord: getNotesInChord(selectedChordType, chordRootnote)
}

function deriveScaleChordType(scale, scaleChordPosition) {
  return ScaleChordMap[scale][scaleChordPosition];
}

function deriveSelectedChordType(scale, scaleChordPosition) {
  return ScaleChordMap[scale][scaleChordPosition]
}

function derviceChordRootnote(scale, scaleRootnote, scaleChordPosition) {
  return getNotesInScale(scale, scaleRootnote)[scaleChordPosition]
}

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_KEY:
      var scaleChordType = deriveScaleChordType(action.scale, state.scaleChordPosition)
      var selectedChordType = deriveSelectedChordType(action.scale, state.scaleChordPosition)
      var chordRootnote = derviceChordRootnote(action.scale, action.rootnote, state.scaleChordPosition)

      return update(state, {
        keyScale: {$set: action.scale},
        keyRootnote: {$set: action.rootnote},

        scaleChordType: {$set: scaleChordType},
        selectedChordType: {$set: selectedChordType},
        chordRootnote: {$set: chordRootnote},

        notesInScale: {$set: getNotesInScale(action.scale, action.rootnote)},
        notesInChord: {$set: getNotesInChord(selectedChordType, chordRootnote)}
      });

    case Actions.SELECT_CHORD_POSITION:
      var scaleChordType = deriveScaleChordType(state.keyScale, action.scaleChordPosition)
      var selectedChordType = deriveSelectedChordType(state.keyScale, action.scaleChordPosition)
      var chordRootnote = derviceChordRootnote(state.keyScale, state.keyRootnote, action.scaleChordPosition)

      return update(state, {
        scaleChordPosition: {$set: action.scaleChordPosition},

        scaleChordType: {$set: scaleChordType},
        selectedChordType: {$set: selectedChordType},
        chordRootnote: {$set: chordRootnote},

        notesInChord: {$set: getNotesInChord(selectedChordType, chordRootnote)}
      });

    case Actions.SET_SELECTED_CHORD_TYPE:
      return update(state, {
        selectedChordType: {$set: action.selectedChordType},

        notesInChord: {$set: getNotesInChord(action.selectedChordType, state.chordRootnote)}
      });

    default:
      return state;
  }
}
