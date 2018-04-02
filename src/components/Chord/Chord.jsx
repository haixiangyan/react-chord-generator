import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Import data source
import chords from './chords';

import CustomChord from './CustomChord/CustomChord';

/**
 * Function to search chord
 */
const searchChord = (chordName) => {
  const chordsLen = chords.length;

  for (let i = 0 ; i < chordsLen ; i++) {
    // Return chord data if it's found
    if (chords[i].name === chordName) {
      return chords[i];
    }
  }

  // Return a default chord data
  return {
    crosses: [],
    name: '',
    pointers: [],
    lines: [],
    min: {
      text: '',
      x: -1,
      y: -1
    },
    max: {
      text: '',
      x: -1,
      y: -1
    }
  };
};

class Chord extends Component {

  state = {
    chord: {}
  };

  componentWillMount() {
    // Search chord data by given chord name
    this.setState({
      chord: searchChord(this.props.chordName)
    })
  };

  render() {
    return (
      <div>
        <CustomChord chord={this.state.chord} />
      </div>
    );
  }
}

Chord.propTypes = {
  chordName: PropTypes.string.isRequired,
};

Chord.defaultProps = {
  chordName: 'F'
};

export default Chord;
