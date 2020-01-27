import React from 'react';
import PropTypes from 'prop-types';

import ALTTPItemTracker from '@/components/Games/ALTTP/ALTTPItemTracker';

const AVAILABLE_GAMES = {
  alttp: ALTTPItemTracker
};

function ItemTracker({ forwardRef, selectedGame }) {
  const SelectedGame = AVAILABLE_GAMES[selectedGame];
  return <SelectedGame forwardRef={forwardRef} />;
};

ItemTracker.propTypes = {
  forwardRef: PropTypes.object.isRequired,
  selectedGame: PropTypes.oneOf(Object.keys(AVAILABLE_GAMES)).isRequired
};

export default ItemTracker;
