/* App imports */
import { ScaleChordMap } from 'const'
import { getNotesInScale } from 'state/util'

export const Actions = {
  SET_KEY: 'SET_KEY',
  SELECT_CHORD_POSITION: 'SELECT_CHORD_POSITION',
  SET_SELECTED_CHORD_TYPE: 'SET_SELECTED_CHORD_TYPE'
};

export function selectChordPosition(scaleChordPosition) {
  return (dispatch, getState) => {
    dispatch({ type: Actions.SELECT_CHORD_POSITION,
      scaleChordPosition: scaleChordPosition
    });
  }
}

export function selectChordType(selectedChordType) {
  return (dispatch, getState) => {
    dispatch({ type: Actions.SET_SELECTED_CHORD_TYPE,
      selectedChordType: selectedChordType
    });
  }
}

export function selectKeyRootnote(rootnote) {
  return (dispatch, getState) => {
    let state = getState();

    dispatch({ type: Actions.SET_KEY,
      scale: state.keyScale,
      rootnote: rootnote
    });
  }
}

export function selectKeyScale(scale) {
  return (dispatch, getState) => {
    let state = getState();

    dispatch({ type: Actions.SET_KEY,
      scale: scale,
      rootnote: state.keyRootnote
    });
  }
}