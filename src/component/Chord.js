/* Global imports */
import React from 'react';
import { connect } from 'react-redux'

/* App imports */
import { Chords } from 'const'
import { getNoteName, isChordInKey } from 'state/util'
import { selectChordType } from 'state/actions'

/* Component imports */
import 'css/chord.css';

const Chord = (props) => {
  return (
    <div className="Chord is-inline-block">
      <div className="pl-1">
        <div className="select is-large">
          <select value={props.selectedChordType} onChange={(e) => props.selectChordType(e.target.value)}>
            {
              props.chordOptions.map((chord) => {
                return (
                  <option key={chord} value={chord}>
                    {!isChordInKey(chord, props.chordRootnote, props.notesInScale) ? '~~ ' : ''}
                    {props.chordRootnoteName}{Chords[chord]}
                  </option>
                );
              })
            }
          </select>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    chordOptions: Object.values(Chords),
    chordRootnote: state.chordRootnote,
    chordRootnoteName: getNoteName(state.chordRootnote),
    scaleChordType: state.scaleChordType,
    selectedChordType: state.selectedChordType,

    notesInScale: state.notesInScale
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectChordType: (chordType) => {
      dispatch(selectChordType(chordType));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chord)