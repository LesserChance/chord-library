export const Notes = {
    'C' : 0,
    'C#': 1,
    'D' : 2,
    'D#': 3,
    'E' : 4,
    'F' : 5,
    'F#': 6,
    'G' : 7,
    'G#': 8,
    'A' : 9,
    'A#': 10,
    'B' : 11
};

export const Chords = {
    'maj': 'MAJ',
    'sus4': 'SUS4',
    'sus2': 'SUS2',
    '(add(9))': 'ADD9',
    '6': 'MAJ6',
    '6/9':'MAJ69',
    'maj7': 'MAJ7',
    'maj9': 'MAJ9',
    'maj7#11': 'MAJ7#11',
    'maj13': 'MAJ13',

    'min': 'MIN'
};

export const Scales = {
    Major          : 'MAJOR',
    Minor          : 'MINOR',
    Harmonic_Minor : 'HARMONIC_MINOR',
    Melodic_Minor  : 'MELODIC_MINOR'
    //major: Lydian, and Mixolydian
    //minor: Dorian, Phrygian, and Locrian
};

export const ScaleNames = {
  [Scales.Major]         : "Major",
  [Scales.Minor]         : "Minor",
  [Scales.Harmonic_Minor]: "Harmonic Minor",
  [Scales.Melodic_Minor] : "Melodic Minor"
};

/**
 * ScaleChordMap[scale] = [chord, chord, ...] representing which chords are used in a scale
 * @type {Object}
 */
export const ScaleChordMap = {
  [Scales.Major]         : [Chords['maj'],Chords['min'],Chords['min'],Chords['maj'],Chords['maj'],Chords['min'],Chords['min']]
}

/**
 * Maps a scale in steps from root note
 * @type {Object}
 */
export const ScaleNoteMap = {
  [Scales.Major]         : [2,2,1,2,2,2],
  [Scales.Minor]         : [2,1,2,2,1,2],
  [Scales.Harmonic_Minor]: [2,1,2,2,1,3],
  [Scales.Melodic_Minor] : [2,1,2,2,2,2]
}

/**
 * ChordMap[type] = [1,2,5] representing the notes in the chord from the scale
 * @type {Object}
 */
export const ChordNoteMap = {
    [Chords['maj']]     : [0,2,4],
    [Chords['sus4']]    : [],
    [Chords['sus2']]    : [],
    [Chords['(add(9))']]: [],
    [Chords['6']]       : [],
    [Chords['6/9']]     : [],
    [Chords['maj7']]    : [],
    [Chords['maj9']]    : [],
    [Chords['maj7#11']] : [],
    [Chords['maj13']]   : [],

    [Chords['min']]     : [1,3,5],

}

/**
 * Use ChordType[scale] to get all chord types in scale
 * @type {Object}
 */
export const ChordType = {
    [Scales.Major]: [
        Chords['maj'],Chords['sus4'],Chords['sus2'],Chords['(add(9))'],Chords['6'],Chords['6/9'],Chords['maj7'],Chords['maj9'],Chords['maj7#11'],Chords['maj13']
    ]
}