/* Global imports */
import React from 'react';
import { connect } from 'react-redux'

/* App imports */
import { Chords } from 'const'
import { getNoteName } from 'state/util'

/* Component imports */
import 'css/chord.css';

const Chord = (props) => {
  return (
    <div className="Chord is-inline-block">
      <div className="pt-3 px-4">
        <div className="is-inline-block mx-1 my-2">Chord Type</div>
        <div className="select">
          <select defaultValue={props.chord_type}>
            {
              Object.keys(Chords).map((chordName) => {
                return (
                  <option key={Chords[chordName]} value={Chords[chordName]}>
                    {props.chord_rootnote_name}{chordName}
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
    chord_rootnote: state.chord_rootnote,
    chord_rootnote_name: getNoteName(state.chord_rootnote),
    chord_type: state.chord_type
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Chord)