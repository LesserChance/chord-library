/* Global imports */
import { combineReducers } from 'redux'

/* App imports */
import { Scales, Notes, Chords } from 'const'
import { getNotesInScale, getNotesInChord} from 'state/util'

let scale_rootnote = Notes['C'];
let chord_rootnote = Notes['G'];
let selected_chord_type = Chords['maj7'];

let initialState = {
  scale: Scales.Major,
  scale_rootnote: scale_rootnote,
  chord_rootnote: chord_rootnote,

  // the chord type within the scale (mjor or minor)
  scale_chord_type: Chords['maj'],
  scale_chord_position: 3,

  // the type of chord to display notes for
  selected_chord_type: selected_chord_type,

  // calculated properties
  notes_in_scale: getNotesInScale(Scales.Major, scale_rootnote),
  notes_in_chord: getNotesInChord(selected_chord_type, chord_rootnote)

}

export default function reduce(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
