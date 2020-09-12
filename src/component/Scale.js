/* Global imports */
import React from 'react';
import { connect } from 'react-redux'

/* App imports */
import { getScaleName } from 'state/util'
import { ScaleChordMap, Chords } from 'const'

/* Component imports */
import KeyComponent from 'component/Key'
import 'css/scale.css';

const Scale = (props) => {
  return (
    <div className="Scale my-1 has-text-centered">
      <div className="scaleOptions is-inline-block">
        <button className={"button is-small " + ((props.chordPosition === 0) ? 'is-primary' : '')}>
          {(props.scaleChordTypes[0] === Chords['maj']) ? 'I' : 'i'}
        </button>
        <button className={"button is-small " + ((props.chordPosition === 1) ? 'is-primary' : '')}>
          {(props.scaleChordTypes[1] === Chords['maj']) ? 'II' : 'ii'}
        </button>
        <button className={"button is-small " + ((props.chordPosition === 2) ? 'is-primary' : '')}>
          {(props.scaleChordTypes[2] === Chords['maj']) ? 'III' : 'iii'}
        </button>
        <button className={"button is-small " + ((props.chordPosition === 3) ? 'is-primary' : '')}>
          {(props.scaleChordTypes[3] === Chords['maj']) ? 'IV' : 'iv'}
        </button>
        <button className={"button is-small " + ((props.chordPosition === 4) ? 'is-primary' : '')}>
          {(props.scaleChordTypes[4] === Chords['maj']) ? 'V' : 'v'}
        </button>
        <button className={"button is-small " + ((props.chordPosition === 5) ? 'is-primary' : '')}>
          {(props.scaleChordTypes[5] === Chords['maj']) ? 'VI' : 'vi'}
        </button>
        <button className={"button is-small " + ((props.chordPosition === 6) ? 'is-primary' : '')}>
          {(props.scaleChordTypes[6] === Chords['maj']) ? 'VII' : 'vii'}
        </button>
      </div>

      <div className="scaleName is-inline-block">
        <KeyComponent />
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    scaleName: getScaleName(state.scale, state.scale_rootnote),
    chordPosition: state.scale_chord_position,
    scaleChordTypes: ScaleChordMap[state.scale]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Scale)