import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '@mdi/react';
import { mdiCheckBold } from '@mdi/js';

import classes from './ItemTracker.scss';

function Item({
  alwaysActive = false,
  changeLevelWithRightClick = false,
  checkable = false,
  className,
  displayLevel,
  levels = [],
  levelsStartValue = 1,
  steps = []
}) {
  const [ itemActive, setItemActive ] = useState(alwaysActive);
  const [ itemLevel, setItemLevel ] = useState(0);
  const [ itemChecked, setItemChecked ] = useState(false);
  const [ itemStep, setItemStep ] = useState(0);

  // Inject an initial unset step, if any steps are provided
  if (steps.length && steps[0] !== ' ') {
    steps.unshift(' ');
  }

  const progressItemLevel = (allowEnabling = true) => {
    if (!itemActive && allowEnabling) {
      setItemActive(true);
      return;
    }

    if (itemLevel === levels.length - 1) {
      setItemLevel(0);

      if (allowEnabling && !alwaysActive) {
        setItemActive(false);
      }
      return;
    }

    setItemLevel(itemLevel + 1);
  };

  const regressItemLevel = () => {
    if (!itemActive) {
      setItemLevel(levels.length - 1);
      setItemActive(true);
      return;
    }

    if (itemLevel === 0) {
      if (!alwaysActive) {
        setItemActive(false);
        return;
      }

      setItemLevel(levels.length - 1);
      return;
    }

    setItemLevel(itemLevel - 1);
  };

  const handleLeftClick = e => {
    e.preventDefault();

    // When right-clicking handles level changes, the
    // left-click behavior simply toggles active state
    if (changeLevelWithRightClick) {
      setItemActive(!itemActive);
      return;
    }

    progressItemLevel();
  };

  const handleRightClick = e => {
    e.preventDefault();

    // Right-click logic priority order: `level` (when `changeLevelWithRightClick` is true), `steps`, `checkable`, reverse `level`
    if (changeLevelWithRightClick) {
      progressItemLevel(false);
      return;
    }

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

    regressItemLevel();
  };

  const renderSteps = () => {
    if (!steps.length) {
      return;
    }
    return <span className={classes.itemStep}>{steps[itemStep]}</span>;
  };

  return (
    <div
      className={cx(className, classes.item, {
        [classes.greyscale]: !itemActive,
        [classes.hideLevel]: displayLevel === 'enabled' && !itemActive
      })}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
    >
      {levels[itemLevel].component}
      <div className={classes.modifiers}>
        {renderSteps()}
        {itemChecked && <Icon className={classes.itemChecked} path={mdiCheckBold} />}
        {!!displayLevel && <span className={classes.itemLevel}>{levels[itemLevel].levelValue ? levels[itemLevel].levelValue : levelsStartValue + itemLevel}</span>}
      </div>
    </div>
  );
};

Item.propTypes = {
  alwaysActive: PropTypes.bool,
  changeLevelWithRightClick: PropTypes.bool,
  checkable: PropTypes.bool,
  className: PropTypes.string,
  displayLevel: PropTypes.oneOf(['always', 'enabled']),
  levels: PropTypes.array.isRequired,
  levelsStartValue: PropTypes.number,
  steps: PropTypes.array
};

export default Item;
