/* Global imports */
import React from 'react';
import { connect } from 'react-redux'

/* Component imports */
import ScaleComponent from 'component/Scale'
import KeyboardComponent from 'component/Keyboard'
import KeyComponent from 'component/Key'
import ChordComponent from 'component/Chord'

const AppComponent = (props) => {
  return (
    <div className="App">
      <ScaleComponent />
      <KeyboardComponent />
      <div>
        <KeyComponent />
        <ChordComponent />
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

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)