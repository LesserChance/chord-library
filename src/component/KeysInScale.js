/* Global imports */
import React from 'react';
import { connect } from 'react-redux'

/* App imports */
import { Notes } from 'const'
import { isNoteInKey, isNoteInChord } from 'state/util'
import { selectKeyRootnote } from 'state/actions'

const KeysInScale = (props) => {
  let showName = props.showName;

  return (
    <div className="KeysInScale">
      {
        [0,1].map((octave) => {
          return <div>
            <div>
              <div
                onClick={(e) => props.selectScaleRootnote(Notes.C)}
                className={props.getKeyClass("w", Notes.C, octave)}>{ showName && <span>C</span> }</div>
            </div>
            <div>
              <div
                onClick={(e) => props.selectScaleRootnote(Notes['C#'])}
                className={props.getKeyClass("b", Notes['C#'], octave)}>{ showName && <span>C#</span> }</div>
              <div
                onClick={(e) => props.selectScaleRootnote(Notes.D)}
                className={props.getKeyClass("w", Notes.D, octave)}>{ showName && <span>D</span> }</div>
            </div>
            <div>
              <div
                onClick={(e) => props.selectScaleRootnote(Notes['D#'])}
                className={props.getKeyClass("b", Notes['D#'], octave)}>{ showName && <span>D#</span> }</div>
              <div
                onClick={(e) => props.selectScaleRootnote(Notes.E)}
                className={props.getKeyClass("w", Notes.E, octave)}>{ showName && <span>E</span> }</div>
            </div>
            <div>
              <div
                onClick={(e) => props.selectScaleRootnote(Notes.F)}
                className={props.getKeyClass("w", Notes.F, octave)}>{ showName && <span>F</span> }</div>
            </div>
            <div>
              <div
                onClick={(e) => props.selectScaleRootnote(Notes['F#'])}
                className={props.getKeyClass("b", Notes['F#'], octave)}>{ showName && <span>F#</span> }</div>
              <div
                onClick={(e) => props.selectScaleRootnote(Notes.G)}
                className={props.getKeyClass("w", Notes.G, octave)}>{ showName && <span>G</span> }</div>
            </div>
            <div>
              <div
                onClick={(e) => props.selectScaleRootnote(Notes['G#'])}
                className={props.getKeyClass("b", Notes['G#'], octave)}>{ showName && <span>G#</span> }</div>
              <div
                onClick={(e) => props.selectScaleRootnote(Notes.A)}
                className={props.getKeyClass("w", Notes.A, octave)}>{ showName && <span>A</span> }</div>
            </div>
            <div>
              <div
                onClick={(e) => props.selectScaleRootnote(Notes['A#'])}
                className={props.getKeyClass("b", Notes['A#'], octave)}>{ showName && <span>A#</span> }</div>
              <div
                onClick={(e) => props.selectScaleRootnote(Notes.B)}
                className={props.getKeyClass("w", Notes.B, octave)}>{ showName && <span>B</span> }</div>
            </div>
          </div>
        })
      }
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
      if (note === state.chordRootnote) {
        classes.push("is-root")
      }
      return classes.join(" ");
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectScaleRootnote: (scaleRootnote) => {
      dispatch(selectKeyRootnote(parseInt(scaleRootnote, 10)));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KeysInScale)