import React from 'react';
import PropTypes from 'prop-types';

import supportedGames from '@/components/Games/games';

function ItemTracker({ forwardRef, selectedTracker }) {
  const [ gameId, trackerId ] = selectedTracker.split('-');
  const SelectedGame = supportedGames[gameId].trackers[trackerId].component;
  return <SelectedGame forwardRef={forwardRef} />;
};

ItemTracker.propTypes = {
  forwardRef: PropTypes.object.isRequired,
  selectedTracker: PropTypes.string.isRequired
};

export default ItemTracker;
