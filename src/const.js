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
    'maj'  : 'maj',
    'min'  : 'min',
    '7'    : '7',
    'min7' : 'min7',
    'maj7' : 'maj7',
    'mM7'  : 'mM7',
    '6'    : '6',
    'm6'   : 'm6',
    '6/9'  : '6/9',
    '5'    : '5',
    '9'    : '9',
    'm9'   : 'm9',
    'maj9' : 'maj9',
    '11'   : '11',
    'm11'  : 'm11',
    '13'   : '13',
    'm13'  : 'm13',
    'maj13': 'maj13',
    'add2' : 'add2',
    'add9' : 'add9',
    '7-5'  : '7-5',
    '7+5'  : '7+5',
    'sus4' : 'sus4',
    'sus2' : 'sus2',
    'dim'  : 'dim',
    'dim7' : 'dim7',
    'm7b5' : 'm7b5',
    'aug'  : 'aug',
    'aug7' : 'aug7'
};

export const CapitalChords = [
    Chords['maj'], Chords['aug']
];

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
  [Scales.Major]         : [Chords['maj'],Chords['min'],Chords['min'],Chords['maj'],Chords['maj'],Chords['min'],Chords['dim']],
  [Scales.Minor]         : [Chords['min'],Chords['dim'],Chords['maj'],Chords['min'],Chords['min'],Chords['maj'],Chords['maj']],
  [Scales.Harmonic_Minor]: [Chords['min'],Chords['dim'],Chords['aug'],Chords['min'],Chords['maj'],Chords['maj'],Chords['dim']],
  [Scales.Melodic_Minor] : [Chords['min'],Chords['min'],Chords['aug'],Chords['maj'],Chords['maj'],Chords['dim'],Chords['dim']]
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
    [Chords['min']]     : [0,3,4],
    [Chords['7']]       : [0,4,3,3],
    [Chords['min7']]    : [0,3,4,3],
    [Chords['maj7']]    : [0,4,3,4],
    [Chords['mM7']]     : [0,3,4,4],
    [Chords['6']]       : [0,4,3,2],
    [Chords['m6']]      : [0,3,4,2],
    [Chords['6/9']]     : [0,4,3,2,5],
    [Chords['5']]       : [0,7],
    [Chords['9']]       : [0,4,3,3,4],
    [Chords['m9']]      : [0,3,4,3,4],
    [Chords['maj9']]    : [0,4,3,4,3],
    [Chords['11']]      : [0,4,3,3,4,3],
    [Chords['m11']]     : [0,3,4,3,4,3],
    [Chords['13']]      : [0,4,3,3,4,3,4],
    [Chords['m13']]     : [0,3,4,3,4,3,4],
    [Chords['maj13']]   : [0,4,3,4,3,7],
    [Chords['add2']]    : [0,2,2,3],
    [Chords['add9']]    : [0,4,3,7],
    [Chords['7-5']]     : [0,4,2,4],
    [Chords['7+5']]     : [0,4,4,2],
    [Chords['sus4']]    : [0,5,2],
    [Chords['sus2']]    : [0,2,5],
    [Chords['dim']]     : [0,3,3],
    [Chords['dim7']]    : [0,3,3,3],
    [Chords['m7b5']]    : [0,3,3,4],
    [Chords['aug']]     : [0,4,4],
    [Chords['aug7']]    : [0,4,4,2],
}