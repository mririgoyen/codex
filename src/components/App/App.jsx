import React, { useState } from 'react';
import uuid from 'uuid/v1';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@mdi/react';
import { mdiBookOpenVariant, mdiRefresh } from '@mdi/js';

import ItemTracker from '~/components/ItemTracker/ItemTracker';

import ALTTPImage from '~/components/Games/ALTTP/assets/Agahnim.svg';
import classes from './App.module.scss';

function App() {
  const muiTheme = {
    typography: {
      fontFamily: [
        'ZCOOL QingKe HuangYou'
      ]
    }
  };
  const theme = createMuiTheme(muiTheme);

  const [ itemTrackerId, updateItemTrackerId ] = useState(uuid);
  const [ selectedGame, setSelectedGame ] = useState('alttp');

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.title}>
        <h1><Icon path={mdiBookOpenVariant} size={1} />Codex</h1>
      </div>
      <div className={classes.gameSelector}>
        <Select
          classes={{
            icon: classes.selectIcon,
            root: classes.select
          }}
          disableUnderline={true}
          fullWidth={true}
          onChange={e => setSelectedGame(e.target.value)}
          value={selectedGame}
        >
          <MenuItem
            classes={{
              root: classes.menuItem
            }}
            value='alttp'
          >
            <ALTTPImage className={classes.gameSvg} />
            <p>A Link to the Past</p>
          </MenuItem>
        </Select>
        <IconButton
          className={classes.refresh}
          onClick={() => updateItemTrackerId(uuid)}
        >
          <Icon path={mdiRefresh} size={1} />
        </IconButton>
      </div>
      <ItemTracker key={itemTrackerId} selectedGame={selectedGame} />
    </MuiThemeProvider>
  );
};

export default App;
