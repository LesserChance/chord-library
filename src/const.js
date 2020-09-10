export const Keys = {
    Major          : 'MAJOR',
    Minor          : 'MINOR',
    Harmonic_Minor : 'HARMONIC_MINOR',
    Melodic_Minor  : 'MELODIC_MINOR'
    //major: Lydian, and Mixolydian
    //minor: Dorian, Phrygian, and Locrian
};

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

export const KeyMap = {
  [Keys.Major]         : [2,2,1,2,2,2],
  [Keys.Minor]         : [2,1,2,2,1,2],
  [Keys.Harmonic_Minor]: [2,1,2,2,1,3],
  [Keys.Melodic_Minor] : [2,1,2,2,2,2]
}