import React from 'react';
import { connect } from 'react-redux'

/* Component imports */
import 'css/scale.css';

const Scale = (props) => {
  return (
    <div className="Scale my-1 has-text-centered">
      <div className="scaleOptions is-inline-block">
        <button className="button is-primary">I</button>
        <button className="button">ii</button>
        <button className="button">iii</button>
        <button className="button">IV</button>
        <button className="button">V</button>
        <button className="button">vi</button>
        <button className="button">vii</button>
      </div>

      <div className="button scaleName ml-3 has-text-weight-bold">C Major</div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Scale)