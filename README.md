# Chord Library
Chord Library is small application intended to run on a Raspberry Pi. You can use Chord Library to get a quick reference for Music keys/scales and chords.

## UI
<img src="https://raw.githubusercontent.com/LesserChance/chord-library/master/assets/Screenshot.png" alt="screenshot" width="400">

### Key
Select the key and scale at the top (or by clicking on a piano key.) Notes not in the key will be dim.

### Chords
Select a chord on the chart at the bottom, notes in that chord will be highlighted in blue. You can also select any chord with the same root note on the right. Chords that do not exist in the key are labelled with `~~` and any notes they use not in the key are highlighted in red.

Here's what it looks like on a raspberry pi with a 3.5" touchscreen:  
<img src="https://raw.githubusercontent.com/LesserChance/chord-library/master/assets/raspberry_pi.jpg" alt="screenshot" width="400">

## Build
This is built using Electron and React.  

I used this as a way to try and understand a little bit more about music theory. One of the great things about software engineering is that any project you take on you are learning not only about the technology you use to build it, but about the field/topic of the application. I've found one of the best ways I learn is just to build some sort of application where I'm forced to understand the topic (in this case keys, scales, and chord structures) and it's always nice to have a tool that fits the way I think at the end!

You can hack on it if you want:
```
git clone https://github.com/LesserChance/chord-library.git
cd chord-library
yarn install
yarn run electron-dev
```
