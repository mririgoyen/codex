import React from 'react';

import Item from '../../ItemTracker/Item';

import Boomerang from './assets/Boomerang.svg';
import BowSvg from './assets/Bow.svg';
import HalfMagic from './assets/Half Magic.svg';
import Hookshot from './assets/Hookshot.svg';
import MagicalBoomerang from './assets/Magical Boomerang.svg';
import MagicPowder from './assets/Magic Powder.svg';
import Mushroom from './assets/Mushroom.svg';
import SilverArrowsSvg from './assets/Silver Arrows.svg';

import classes from '~/components/ItemTracker/ItemTracker.module.scss';
import alttpClasses from './ALTTPItemTracker.module.scss';

function ALTTPItemTracker() {
  return (
    <div className={classes.grid}>
      <Item
        levels={[{ component: BowSvg }, { component: SilverArrowsSvg }]}
      />
      <Item
        className={alttpClasses.boomerang}
        levels={[{ component: Boomerang }]}
      />
      <Item
        className={alttpClasses.boomerang}
        levels={[{ component: MagicalBoomerang }]}
      />
      <Item
        levels={[{ component: Hookshot }]}
      />
      <Item
        checkable={true}
        levels={[{ component: Mushroom }]}
      />
      <Item
        checkable={true}
        levels={[{ component: MagicPowder }]}
      />
      <Item
        levels={[{ component: HalfMagic }]}
      />
    </div>
  );
};

export default ALTTPItemTracker;
