import React, { Component, PropTypes } from 'react'
import Clue from './Clue'

const ClueList = ({ clues }) => (
    <div>
      {clues.map((clue) =>
          <Clue key={clue.id}
                clue={clue} />
      )}
    </div>
);

ClueList.propTypes = {
  clues: PropTypes.array.isRequired
};

export default ClueList;
