import React, { Component } from 'react';

import Chord from './components/Chord/Chord';

import './App.css';

const sampleChordName = 'F';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Chord chordName={sampleChordName}/>
      </div>
    );
  }
}

export default App;
