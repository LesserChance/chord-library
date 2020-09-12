/* Global imports */
import React from 'react';
import { connect } from 'react-redux'

/* Component imports */
import ScaleComponent from 'component/Scale'
import KeyComponent from 'component/Key'
import KeyboardComponent from 'component/Keyboard'
import ChordComponent from 'component/Chord'

const AppComponent = (props) => {
  return (
    <div className="App" style={{minWidth: '480px'}}>
      <div className="has-text-centered is-clearfix">
        <KeyComponent />
      </div>
      <div className="has-text-centered is-clearfix">
        <KeyboardComponent />
      </div>
      <div className="has-text-centered is-clearfix">
        <ScaleComponent />
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