/* Global imports */
import React from 'react';
import { connect } from 'react-redux'

/* App imports */
import { selectChordPosition } from 'state/actions'
import { getScaleName } from 'state/util'
import { ScaleChordMap, Chords, CapitalChords } from 'const'

/* Component imports */
import 'css/scale.css';

const Scale = (props) => {
  let chordPositions = [0,1,2,3,4,5,6];
  let capital = ['I','II','III','IV','V','VI','VII'];
  let lowercase = ['i','ii','iii','iv','v','vi','vii'];

  return (
    <div className="Scale my-1 is-inline-block">
      <div className="scaleOptions is-inline-block">
        {
          chordPositions.map((chordPosition) => {
            return (
              <button
                key={chordPosition}
                onClick={(e) => props.selectChordPosition(chordPosition)}
                className={"button is-small " + ((props.chordPosition === chordPosition) ? 'is-primary' : '')}>
                {(CapitalChords.includes(props.scaleChordTypes[chordPosition])) ? capital[chordPosition] : lowercase[chordPosition]}
              </button>
            );
          })
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    scaleName: getScaleName(state.keyScale, state.keyRootnote),
    chordPosition: state.scaleChordPosition,
    scaleChordTypes: ScaleChordMap[state.keyScale]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectChordPosition: (chordPosition) => {
      dispatch(selectChordPosition(parseInt(chordPosition, 10)));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scale)