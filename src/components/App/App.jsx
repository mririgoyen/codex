import React, { useState } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import pkg from '../../../package.json';

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

  const [ selectedGame, setSelectedGame ] = useState('alttp');

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.title}>
        <h1>Untitled Item Tracker</h1>
        <p>v{pkg.version}</p>
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
          <MenuItem value='alttp'>
            <ALTTPImage className={classes.gameSvg} />
            <p>A Link to the Past</p>
          </MenuItem>
        </Select>
      </div>
      <ItemTracker selectedGame={selectedGame} />
    </MuiThemeProvider>
  );
};

export default App;
