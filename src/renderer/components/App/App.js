import React, { useEffect, useRef, useState } from 'react';
import ErrorBoundary from 'react-error-boundary';
import { ipcRenderer, shell } from 'electron';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@mdi/react';
import { mdiBookOpenVariant, mdiEmoticonDeadOutline } from '@mdi/js';

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
  const [ selectedTracker, setSelectedTracker ] = useState('');
  const refAppBar = useRef();
  const itemTrackerRef = useRef();
  const errorContainerRef = useRef();

  useEffect(() => {
    const titlebarHeight = refAppBar.current && refAppBar.current.clientHeight;
    const trackerHeight = itemTrackerRef.current && itemTrackerRef.current.clientHeight || 0;
    const trackerWidth = itemTrackerRef.current && itemTrackerRef.current.clientWidth || 0;
    ipcRenderer.send('resize-window', { height: trackerHeight + titlebarHeight, width: trackerWidth });
  }, [selectedTracker]);

  const errorHandler = () => {
    ipcRenderer.send('resize-window', { height: 320, width: 340 });
    return (
      <div className={classes.appError} ref={errorContainerRef}>
        <div className={classes.title}>
          <h1><Icon path={mdiBookOpenVariant} size={1} />Codex</h1>
        </div>
        <div className={classes.errorInfo}>
          <Icon path={mdiEmoticonDeadOutline} size={4} />
          <h2>
            <span>Oh, snap</span>
            You broke it!
          </h2>
          <div className={classes.actions}>
            <Button
              color='secondary'
              onClick={() => shell.openExternal('https://github.com/goyney/codex/issues')}
              variant='contained'
            >
              Report
            </Button>
            <Button
              onClick={() => location.reload()}
              variant='contained'
            >
              Reload
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <ErrorBoundary FallbackComponent={errorHandler}>
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
    </ErrorBoundary>
  );
};

export default App;
