/* Global imports */
import React from 'react';
import { connect } from 'react-redux'

/* App imports */
import { Notes, ScaleNames } from 'const'
import { selectKeyRootnote, selectKeyScale } from 'state/actions'

/* Component imports */
import 'css/key.css';

const Key = (props) => {
  return (
    <div className="Key is-inline-block">
      <div className="select is-small">
        <select value={props.note} onChange={(e) => props.selectScaleRootnote(e.target.value)}>
          {
            Object.keys(Notes).map((noteName, noteIndex) => {
              return (
                <option key={noteIndex} value={noteIndex}>{noteName}</option>
              );
            })
          }
        </select>
      </div>

      <div className="select is-small">
        <select value={props.scale} onChange={(e) => props.selectScale(e.target.value)}>
          {
            Object.keys(ScaleNames).map((scaleKey) => {
              let scale = ScaleNames[scaleKey]
              return (
                <option key={scaleKey} value={scaleKey}>{scale}</option>
              );
            })
          }
        </select>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    note: state.keyRootnote,
    scale: state.keyScale
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectScaleRootnote: (scaleRootnote) => {
      dispatch(selectKeyRootnote(parseInt(scaleRootnote, 10)));
    },
    selectScale: (scale) => {
      dispatch(selectKeyScale(scale));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Key)