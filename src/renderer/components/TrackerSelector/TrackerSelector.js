import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import uuid from 'uuid/v1';
import Select from '@material-ui/core/Select';
import ListSubheader from '@material-ui/core/ListSubheader';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@mdi/react';
import { mdiRefresh } from '@mdi/js';

import supportedGames from '@/components/Games/games';

import classes from './TrackerSelector.scss';

function TrackerSelector({ selectedTracker = '', setSelectedTracker, updateItemTrackerId }) {
  const generateOptions = () => {
    const allGames = supportedGames.filter(e => e.name && e.trackers && e.trackers.length);

    allGames.sort((a, b) => {
      const gameA = a.name.replace(/^(The|A|An)\s/i).toUpperCase();
      const gameB = b.name.replace(/^(The|A|An)\s/i).toUpperCase();

      if (gameA > gameB) {
        return 1;
      }
      if (gameA < gameB) {
        return -1;
      }
      return 0;
    });

    return allGames.reduce((allTrackers, game, gId) => {
      const GameSVG = game.image;
      allTrackers.push(
        <ListSubheader
          classes={{
            root: classes.subHeader
          }}
          key={gId}
        >
          <GameSVG className={classes.gameSvg} />
          {game.name}
        </ListSubheader>
      );

      const gameTrackers = game.trackers.map((tracker, tId) => (
        <MenuItem
          classes={{
            root: classes.menuItem
          }}
          key={`${gId}-${tId}`}
          value={`${gId}-${tId}`}
        >
          <p>{tracker.name}</p>
        </MenuItem>
      ));

      allTrackers = allTrackers.concat(gameTrackers);
      return allTrackers;
    }, []);
  };

  const renderValue = value => {
    if (!value) {
      return <p className={classes.selectTracker}>Select a Tracker</p>;
    }

    const [ gameId, trackerId ] = value.split('-');
    const selectedGame = supportedGames[gameId].name;
    const SelectedGameSVG = supportedGames[gameId].image;
    const selectedTracker = supportedGames[gameId].trackers[trackerId].name;

    return (
      <div className={classes.selectedTracker}>
        <SelectedGameSVG className={classes.gameSvg} />
        <div className={classes.gameInfo}>
          <p className={classes.gameName}>{selectedGame}</p>
          <p>{selectedTracker}</p>
        </div>
      </div>
    );
  };

  return (
    <div className={classes.gameSelector}>
      <Select
        classes={{
          icon: classes.selectIcon,
          root: classes.select
        }}
        disableUnderline
        displayEmpty
        fullWidth
        onChange={e => {
          if (e.target.value) {
            setSelectedTracker(e.target.value);
          }
        }}
        renderValue={renderValue}
        value={selectedTracker}
      >
        {generateOptions()}
      </Select>
      <IconButton
        className={cx(classes.refresh, {
          [classes.disabled]: !selectedTracker
        })}
        disabled={!selectedTracker}
        onClick={() => updateItemTrackerId(uuid)}
      >
        <Icon path={mdiRefresh} size={1} />
      </IconButton>
    </div>
  );
};

TrackerSelector.propTypes = {
  selectedTracker: PropTypes.string,
  setSelectedTracker: PropTypes.func.isRequired,
  updateItemTrackerId: PropTypes.func.isRequired
};

export default TrackerSelector;
