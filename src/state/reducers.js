/* Global imports */
import { combineReducers } from 'redux'

/* App imports */
import { Scales, Notes, Chords } from 'const'
import { getNotesInScale, getNotesInChord} from 'state/util'

let initialState = {
  scale: Scales.Major,
  scale_rootnote: Notes['C'],
  chord_position: 5,
  chord_rootnote: Notes['G'],
  chord_type: Chords.min,

  // calculated properties
  notes_in_scale: getNotesInScale(Scales.Major, Notes['C']),
  notes_in_chord: getNotesInChord(Chords.min, Notes['G'])

}

export default function reduce(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
