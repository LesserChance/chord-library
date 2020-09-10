import React from 'react';
import { connect } from 'react-redux'

/* Component imports */
import 'css/chord.css';

const Chord = (props) => {
  return (
    <div className="Chord is-inline-block">
      <div className="pt-3 px-4">
        <div className="is-inline-block mx-1 my-2">Chord Type</div>
        <div className="select">
          <select>
            <option selected>C</option>
            <option>Csus4</option>
            <option>Csus2</option>
            <option>C(add9)</option>
            <option>C6</option>
            <option>C6/9</option>
            <option>Cmaj7</option>
            <option>Cmaj9</option>
            <option>Cmaj7#11</option>
            <option>Cmaj13</option>
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

export default connect(mapStateToProps, mapDispatchToProps)(Chord)