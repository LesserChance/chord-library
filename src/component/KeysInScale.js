/* Global imports */
import React from 'react';
import { connect } from 'react-redux'

/* App imports */
import { Notes } from 'const'
import { isNoteInKey, isNoteInChord } from 'state/util'

const KeysInScale = (props) => {
  let showName = props.showName;

  console.log();

  return (
    <div className="KeysInScale">
      <div>
        <div className={props.getKeyClass("w", Notes.C)}>{ showName && <span>C</span> }</div>
      </div>
      <div>
        <div className={props.getKeyClass("b", Notes['C#'])}>{ showName && <span>C#</span> }</div>
        <div className={props.getKeyClass("w", Notes.D)}>{ showName && <span>D</span> }</div>
      </div>
      <div>
        <div className={props.getKeyClass("b", Notes['D#'])}>{ showName && <span>D#</span> }</div>
        <div className={props.getKeyClass("w", Notes.E)}>{ showName && <span>E</span> }</div>
      </div>
      <div>
        <div className={props.getKeyClass("w", Notes.F)}>{ showName && <span>F</span> }</div>
      </div>
      <div>
        <div className={props.getKeyClass("b", Notes['F#'])}>{ showName && <span>F#</span> }</div>
        <div className={props.getKeyClass("w", Notes.G)}>{ showName && <span>G</span> }</div>
      </div>
      <div>
        <div className={props.getKeyClass("b", Notes['G#'])}>{ showName && <span>G#</span> }</div>
        <div className={props.getKeyClass("w", Notes.A)}>{ showName && <span>A</span> }</div>
      </div>
      <div>
        <div className={props.getKeyClass("b", Notes['A#'])}>{ showName && <span>A#</span> }</div>
        <div className={props.getKeyClass("w", Notes.B)}>{ showName && <span>B</span> }</div>
      </div>

      <div>
        <div className={props.getKeyClass("w", Notes.C)}>{ showName && <span>C</span> }</div>
      </div>
      <div>
        <div className={props.getKeyClass("b", Notes['C#'])}>{ showName && <span>C#</span> }</div>
        <div className={props.getKeyClass("w", Notes.D)}>{ showName && <span>D</span> }</div>
      </div>
      <div>
        <div className={props.getKeyClass("b", Notes['D#'])}>{ showName && <span>D#</span> }</div>
        <div className={props.getKeyClass("w", Notes.E)}>{ showName && <span>E</span> }</div>
      </div>
      <div>
        <div className={props.getKeyClass("w", Notes.F)}>{ showName && <span>F</span> }</div>
      </div>
      <div>
        <div className={props.getKeyClass("b", Notes['F#'])}>{ showName && <span>F#</span> }</div>
        <div className={props.getKeyClass("w", Notes.G)}>{ showName && <span>G</span> }</div>
      </div>
      <div>
        <div className={props.getKeyClass("b", Notes['G#'])}>{ showName && <span>G#</span> }</div>
        <div className={props.getKeyClass("w", Notes.A)}>{ showName && <span>A</span> }</div>
      </div>
      <div>
        <div className={props.getKeyClass("b", Notes['A#'])}>{ showName && <span>A#</span> }</div>
        <div className={props.getKeyClass("w", Notes.B)}>{ showName && <span>B</span> }</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    scale: state.scale,
    scale_rootnote: state.scale_rootnote,
    chord_rootnote: state.chord_rootnote,
    chord_type: state.chord_type,

    getKeyClass: (keyType, note) => {
      let classes = [keyType]
      if (isNoteInKey(note, state.scale, state.scale_rootnote)) {
        classes.push("in-key")
      }
      if (isNoteInChord(note, state.chord_rootnote, state.chord_type, state.scale, state.scale_rootnote)) {
        classes.push("in-chord")
      }
      return classes.join(" ");
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(KeysInScale)