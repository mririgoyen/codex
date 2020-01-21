import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '@mdi/react';
import { mdiCheckBold } from '@mdi/js';

import classes from './ItemTracker.module.scss';

function Item({ checkable = false, className, levels = [], startActive = false }) {
  const [ itemLevel, setItemLevel ] = useState(0);
  const [ itemChecked, setItemChecked ] = useState(false);

  if (!startActive && levels.length && !levels[0].greyscale) {
    const inactiveState = Object.assign({}, levels[0]);
    inactiveState.greyscale = true;
    levels.unshift(inactiveState);
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

    if (checkable) {
      setItemChecked(!itemChecked);
      return;
    }
  };

  const Item = levels[itemLevel].component;
  return (
    <div className={cx(className, classes.item)}>
      <Item
        className={cx(classes.itemImage, {
          [classes.greyscale]: levels[itemLevel].greyscale
        })}
        onClick={handleLeftClick}
        onContextMenu={handleRightClick}
      />
      {itemChecked && <Icon className={classes.itemChecked} path={mdiCheckBold} />}
      {levels[itemLevel].displayLevel && <span className={classes.itemLevel}>{itemLevel}</span>}
    </div>
  );
};

Item.propTypes = {
  checkable: PropTypes.bool,
  className: PropTypes.string,
  levels: PropTypes.array.isRequired,
  startActive: PropTypes.bool
};

export default Item;
