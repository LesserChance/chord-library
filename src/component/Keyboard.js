import React from 'react';
import { connect } from 'react-redux'

/* Component imports */
import KeysInScale from 'component/KeysInScale'
import 'css/keyboard.css';

const Keyboard = (props) => {
  return (
    <div className="Keyboard my-3">
      <div className="notes">
        <KeysInScale showName={true} />
      </div>

      <div className="keys">
        <KeysInScale />
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

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard)