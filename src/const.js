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
    '6': '6',
    '7': '7',
    '6/9':'69',
    '11': '11',
    'maj7': 'MAJ7',
    'maj9': 'MAJ9',
    'maj7#11': 'MAJ7#11',
    'maj13': 'MAJ13',

    'min': 'MIN'
};

export const ChordNames = {
    [Chords['maj']]: '',
    [Chords['sus4']]: 'sus4',
    [Chords['sus2']]: 'sus2',
    [Chords['(add(9))']]: '(add(9))',
    [Chords['6']]: '6',
    [Chords['7']]: '7',
    [Chords['11']]: '11',
    [Chords['6/9']]: '6/9',
    [Chords['maj7']]: 'maj7',
    [Chords['maj9']]: 'maj9',
    [Chords['maj7#11']]: 'maj7#11',
    [Chords['maj13']]: 'maj13'
};

/**
 * Use ChordOptions[min/maj] to get all chord types in minor or major
 * @type {Object}
 */
export const ChordOptions = {
    [Chords['maj']] : [
        Chords['maj'],
        Chords['sus4'],
        Chords['sus2'],
        Chords['(add(9))'],
        Chords['6'],
        Chords['6/9'],
        Chords['7'],
        Chords['11'],
        Chords['maj7'],
        Chords['maj9'],
        Chords['maj7#11'],
        Chords['maj13']
    ],

    [Chords['min']] : [
        Chords['min'],
    ]
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
  [Scales.Major]         : [0,2,2,1,2,2,2],
  [Scales.Minor]         : [0,2,1,2,2,1,2],
  [Scales.Harmonic_Minor]: [0,2,1,2,2,1,3],
  [Scales.Melodic_Minor] : [0,2,1,2,2,2,2]
}

/**
 * ChordMap[type] = [2,2,2] representing the steps from the previous note
 * @type {Object}
 */
export const ChordNoteMap = {
    [Chords['maj']]     : [0,4,3],
    [Chords['sus4']]    : [],
    [Chords['sus2']]    : [],
    [Chords['(add(9))']]: [],
    [Chords['6']]       : [],
    [Chords['6/9']]     : [],
    [Chords['7']]       : [0,4,3,3],
    [Chords['11']]      : [0,4,3,3,4,3],
    [Chords['maj7']]    : [0,4,3,4],
    [Chords['maj9']]    : [],
    [Chords['maj7#11']] : [],
    [Chords['maj13']]   : [],

    [Chords['min']]     : [0,3,4],
}