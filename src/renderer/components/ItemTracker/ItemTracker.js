import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiGamepadVariantOutline } from '@mdi/js';

import supportedGames from '@/components/Games/games';

import classes from './ItemTracker.scss';

function ItemTracker({ forwardRef, selectedTracker }) {
  if (!selectedTracker) {
    return (
      <div className={classes.welcome}>
        <Icon path={mdiGamepadVariantOutline} size={4} />
        <p>Select a game tracker above and get playing!</p>
      </div>
    );
  }

  const [ gameId, trackerId ] = selectedTracker.split('-');
  const SelectedGame = supportedGames[gameId].trackers[trackerId].component;
  return <SelectedGame forwardRef={forwardRef} />;
};

ItemTracker.propTypes = {
  forwardRef: PropTypes.object.isRequired,
  selectedTracker: PropTypes.string
};

export default ItemTracker;
