/* Global imports */
import React from 'react';
import { connect } from 'react-redux'

/* App imports */
import { Notes, ScaleNames } from 'const'

/* Component imports */
import 'css/key.css';

const Key = (props) => {
  return (
    <div className="Key is-inline-block">
      <div className="pt-3 px-4">
        <div className="is-inline-block mx-1 my-2">Key</div>
        <div className="select">
          <select defaultValue={props.note}>
            {
              Object.keys(Notes).map((noteName, noteIndex) => {
                return (
                  <option key={noteIndex} value={noteIndex}>{noteName}</option>
                );
              })
            }
          </select>
        </div>

        <div className="select">
          <select defaultValue={props.scale}>
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
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    note: state.scale_rootnote,
    scale: state.scale
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Key)