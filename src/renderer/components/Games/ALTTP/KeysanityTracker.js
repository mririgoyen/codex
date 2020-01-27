import React from 'react';
import PropTypes from 'prop-types';

import classes from '@/components/ItemTracker/ItemTracker.scss';

function KeysanityTracker({ forwardRef }) {
  return (
    <div className={classes.grid} onContextMenu={e => e.preventDefault()} ref={forwardRef}>
      <p>KEYSANITY TRACKER HERE</p>
    </div>
  );
};

KeysanityTracker.propTypes = {
  forwardRef: PropTypes.object.isRequired
};

export default KeysanityTracker;