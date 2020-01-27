import React, { useEffect, useRef, useState } from 'react';
import { ipcRenderer } from 'electron';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Icon from '@mdi/react';
import { mdiBookOpenVariant } from '@mdi/js';

import TrackerSelector from '@/components/TrackerSelector/TrackerSelector';
import ItemTracker from '@/components/ItemTracker/ItemTracker';

import classes from './App.scss';

function App() {
  const muiTheme = {
    typography: {
      fontFamily: [
        'ZCOOL QingKe HuangYou'
      ]
    }
  };
  const theme = createMuiTheme(muiTheme);

  const [ itemTrackerId, updateItemTrackerId ] = useState('initial');
  const [ selectedTracker, setSelectedTracker ] = useState('0-0');
  const refAppBar = useRef();
  const itemTrackerRef = useRef();

  useEffect(() => {
    const titlebarHeight = refAppBar.current && refAppBar.current.clientHeight;
    const trackerHeight = itemTrackerRef.current && itemTrackerRef.current.clientHeight;
    const trackerWidth = itemTrackerRef.current && itemTrackerRef.current.clientWidth;
    ipcRenderer.send('resize-window', { height: trackerHeight + titlebarHeight, width: trackerWidth });
  }, [selectedTracker]);

  return (
    <MuiThemeProvider theme={theme}>
      <div ref={refAppBar}>
        <div className={classes.title}>
          <h1><Icon path={mdiBookOpenVariant} size={1} />Codex</h1>
        </div>
        <TrackerSelector
          selectedTracker={selectedTracker}
          setSelectedTracker={setSelectedTracker}
          updateItemTrackerId={updateItemTrackerId}
        />
      </div>
      <ItemTracker
        forwardRef={itemTrackerRef}
        key={itemTrackerId}
        selectedTracker={selectedTracker}
      />
    </MuiThemeProvider>
  );
};

export default App;
