/* Global imports */
import { combineReducers } from 'redux'

/* App imports */
import { Scales, Notes, Chords } from 'const'

let initialState = {
  scale: Scales.Major,
  scale_rootnote: Notes['C'],
  chord_position: 1,
  chord_rootnote: Notes['D'],
  chord_type: Chords.min
}

export default function reduce(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
