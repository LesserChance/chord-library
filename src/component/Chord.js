/* Global imports */
import React from 'react';
import { connect } from 'react-redux'

/* App imports */
import { Chords, ChordOptions, ChordNames } from 'const'
import { getNoteName } from 'state/util'

/* Component imports */
import 'css/chord.css';

const Chord = (props) => {
  return (
    <div className="Chord is-inline-block">
      <div className="pt-3 px-4">
        <div className="select is-small">
          <select defaultValue={props.selected_chord_type}>
            {
              ChordOptions[props.scale_chord_type].map((chord) => {
                return (
                  <option key={chord} value={chord}>
                    {props.chord_rootnote_name}{ChordNames[chord]}
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
    scale_chord_type: state.scale_chord_type,
    selected_chord_type: state.selected_chord_type
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Chord)