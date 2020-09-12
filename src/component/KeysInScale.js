/* Global imports */
import React from 'react';
import { connect } from 'react-redux'

/* App imports */
import { Notes } from 'const'
import { isNoteInKey, isNoteInChord } from 'state/util'

const KeysInScale = (props) => {
  let showName = props.showName;

  return (
    <div className="KeysInScale">
      <div>
        <div className={props.getKeyClass("w", Notes.C, 0)}>{ showName && <span>C</span> }</div>
      </div>
      <div>
        <div className={props.getKeyClass("b", Notes['C#'], 0)}>{ showName && <span>C#</span> }</div>
        <div className={props.getKeyClass("w", Notes.D, 0)}>{ showName && <span>D</span> }</div>
      </div>
      <div>
        <div className={props.getKeyClass("b", Notes['D#'], 0)}>{ showName && <span>D#</span> }</div>
        <div className={props.getKeyClass("w", Notes.E, 0)}>{ showName && <span>E</span> }</div>
      </div>
      <div>
        <div className={props.getKeyClass("w", Notes.F, 0)}>{ showName && <span>F</span> }</div>
      </div>
      <div>
        <div className={props.getKeyClass("b", Notes['F#'], 0)}>{ showName && <span>F#</span> }</div>
        <div className={props.getKeyClass("w", Notes.G, 0)}>{ showName && <span>G</span> }</div>
      </div>
      <div>
        <div className={props.getKeyClass("b", Notes['G#'], 0)}>{ showName && <span>G#</span> }</div>
        <div className={props.getKeyClass("w", Notes.A, 0)}>{ showName && <span>A</span> }</div>
      </div>
      <div>
        <div className={props.getKeyClass("b", Notes['A#'], 0)}>{ showName && <span>A#</span> }</div>
        <div className={props.getKeyClass("w", Notes.B, 0)}>{ showName && <span>B</span> }</div>
      </div>

      <div>
        <div className={props.getKeyClass("w", Notes.C, 1)}>{ showName && <span>C</span> }</div>
      </div>
      <div>
        <div className={props.getKeyClass("b", Notes['C#'], 1)}>{ showName && <span>C#</span> }</div>
        <div className={props.getKeyClass("w", Notes.D, 1)}>{ showName && <span>D</span> }</div>
      </div>
      <div>
        <div className={props.getKeyClass("b", Notes['D#'], 1)}>{ showName && <span>D#</span> }</div>
        <div className={props.getKeyClass("w", Notes.E, 1)}>{ showName && <span>E</span> }</div>
      </div>
      <div>
        <div className={props.getKeyClass("w", Notes.F, 1)}>{ showName && <span>F</span> }</div>
      </div>
      <div>
        <div className={props.getKeyClass("b", Notes['F#'], 1)}>{ showName && <span>F#</span> }</div>
        <div className={props.getKeyClass("w", Notes.G, 1)}>{ showName && <span>G</span> }</div>
      </div>
      <div>
        <div className={props.getKeyClass("b", Notes['G#'], 1)}>{ showName && <span>G#</span> }</div>
        <div className={props.getKeyClass("w", Notes.A, 1)}>{ showName && <span>A</span> }</div>
      </div>
      <div>
        <div className={props.getKeyClass("b", Notes['A#'], 1)}>{ showName && <span>A#</span> }</div>
        <div className={props.getKeyClass("w", Notes.B, 1)}>{ showName && <span>B</span> }</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    getKeyClass: (keyType, note, octave) => {
      let classes = [keyType]
      if (isNoteInKey(note, state)) {
        classes.push("in-key")
      }
      if (isNoteInChord(note, octave, state)) {
        classes.push("in-chord")
      }
      if (note == state.chord_rootnote) {
        classes.push("is-root")
      }
      return classes.join(" ");
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(KeysInScale)