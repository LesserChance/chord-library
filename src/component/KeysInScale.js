import React from 'react';
import { connect } from 'react-redux'

const KeysInScale = (props) => {
  let showName = props.showName;

  return (
    <div className="KeysInScale">
      <div>
        <div className="w in-key in-chord">{ showName && <span>C</span> }</div>
      </div>
      <div>
        <div className="b">{ showName && <span>C#</span> }</div>
        <div className="w in-key">{ showName && <span>D</span> }</div>
      </div>
      <div>
        <div className="b">{ showName && <span>D#</span> }</div>
        <div className="w in-key in-chord">{ showName && <span>E</span> }</div>
      </div>
      <div>
        <div className="w in-key">{ showName && <span>F</span> }</div>
      </div>
      <div>
        <div className="b">{ showName && <span>F#</span> }</div>
        <div className="w in-key in-chord">{ showName && <span>G</span> }</div>
      </div>
      <div>
        <div className="b">{ showName && <span>G#</span> }</div>
        <div className="w in-key">{ showName && <span>A</span> }</div>
      </div>
      <div>
        <div className="b">{ showName && <span>A#</span> }</div>
        <div className="w in-key">{ showName && <span>B</span> }</div>
      </div>

      <div>
        <div className="w in-key">{ showName && <span>C</span> }</div>
      </div>
      <div>
        <div className="b">{ showName && <span>C#</span> }</div>
        <div className="w in-key">{ showName && <span>D</span> }</div>
      </div>
      <div>
        <div className="b">{ showName && <span>D#</span> }</div>
        <div className="w in-key">{ showName && <span>E</span> }</div>
      </div>
      <div>
        <div className="w in-key">{ showName && <span>F</span> }</div>
      </div>
      <div>
        <div className="b">{ showName && <span>F#</span> }</div>
        <div className="w in-key">{ showName && <span>G</span> }</div>
      </div>
      <div>
        <div className="b">{ showName && <span>G#</span> }</div>
        <div className="w in-key">{ showName && <span>A</span> }</div>
      </div>
      <div>
        <div className="b">{ showName && <span>A#</span> }</div>
        <div className="w in-key">{ showName && <span>B</span> }</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(KeysInScale)