import React from 'react';
import { connect } from 'react-redux'

/* Component imports */
import 'css/key.css';

const Key = (props) => {
  return (
    <div className="Key is-inline-block">
      <div className="pt-3 px-4">
        <div className="is-inline-block mx-1 my-2">Key</div>
        <div className="select">
          <select>
            <option selected>C</option>
            <option>C#</option>
            <option>D</option>
            <option>D#</option>
            <option>E</option>
            <option>F</option>
            <option>F#</option>
            <option>G</option>
            <option>G#</option>
            <option>A</option>
            <option>A#</option>
            <option>B</option>
          </select>
        </div>

        <div className="select">
          <select>
            <option>Major</option>
          </select>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Key)