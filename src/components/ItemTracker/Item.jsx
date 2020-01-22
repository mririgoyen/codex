import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '@mdi/react';
import { mdiCheckBold } from '@mdi/js';

import classes from './ItemTracker.module.scss';

function Item({ checkable = false, className, levels = [], levelsStartValue = 1, startActive = false, steps = [] }) {
  const [ itemLevel, setItemLevel ] = useState(0);
  const [ itemChecked, setItemChecked ] = useState(false);
  const [ itemStep, setItemStep ] = useState(0);

  // Set initial greyscale level, unless `startActive` is set
  if (!startActive && levels.length && !levels[0].greyscale) {
    const inactiveState = Object.assign({}, levels[0]);
    inactiveState.greyscale = true;
    inactiveState.displayLevel = false;
    levels.unshift(inactiveState);
  }

  // Inject an initial unset step, if any steps are provided
  if (steps.length && steps[0] !== ' ') {
    steps.unshift(' ');
  }

  const handleLeftClick = e => {
    e.preventDefault();

    if (itemLevel === levels.length - 1) {
      setItemLevel(0);
      return;
    }

    setItemLevel(itemLevel + 1);
  };

  const handleRightClick = e => {
    e.preventDefault();

    // Right-click logic priority order: `steps`, `checkable`, reverse `level`
    if (steps.length) {
      if (itemStep === steps.length - 1) {
        setItemStep(0);
        return;
      }

      setItemStep(itemStep + 1);
      return;
    }

    if (checkable) {
      setItemChecked(!itemChecked);
      return;
    }

    if (itemLevel === 0) {
      setItemLevel(levels.length - 1);
    }
    if (itemLevel > 0) {
      setItemLevel(itemLevel - 1);
    }
  };

  const renderSteps = () => {
    if (!steps.length) {
      return;
    }

    return (
      <span className={classes.itemStep}>{steps[itemStep]}</span>
    );
  };

  return (
    <div
      className={cx(className, classes.item, {
        [classes.greyscale]: levels[itemLevel].greyscale
      })}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
    >
      {levels[itemLevel].component}
      <div className={classes.modifiers}>
        {renderSteps()}
        {itemChecked && <Icon className={classes.itemChecked} path={mdiCheckBold} />}
        {levels[itemLevel].displayLevel && <span className={classes.itemLevel}>{levels[itemLevel].levelValue ? levels[itemLevel].levelValue : levelsStartValue + (itemLevel - 1)}</span>}
      </div>
    </div>
  );
};

Item.propTypes = {
  checkable: PropTypes.bool,
  className: PropTypes.string,
  levels: PropTypes.array.isRequired,
  levelsStartValue: PropTypes.number,
  startActive: PropTypes.bool,
  steps: PropTypes.array
};

export default Item;
