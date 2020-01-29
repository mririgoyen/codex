import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

import Item from '@/components/ItemTracker/Item';
import generateDungeon from './generateDungeon';

import Agahnim from './assets/Agahnim.svg';
import BlueMail from './assets/Blue Mail.svg';
import BombosMedallion from './assets/Bombos Medallion.svg';
import Boomerang from './assets/Boomerang.svg';
import BookOfMudora from './assets/Book of Mudora.svg';
import Bottle from './assets/Bottle.svg';
import BugCatchingNet from './assets/Bug Catching Net.svg';
import Bow from './assets/Bow.svg';
import CaneOfByma from './assets/Cane of Byma.svg';
import CaneOfSomaria from './assets/Cane of Somaria.svg';
import EtherMedallion from './assets/Ether Medallion.svg';
import FightersShield from './assets/Fighters Shield.svg';
import FightersSword from './assets/Fighters Sword.svg';
import Flute from './assets/Flute.svg';
import GanonSign from './assets/Ganon Sign.svg';
import GanonTowerSign from './assets/Ganon Tower Sign.svg';
import GreenClothes from './assets/Green Clothes.svg';
import HalfMagic from './assets/Half Magic.svg';
import Hammer from './assets/Hammer.svg';
import Hookshot from './assets/Hookshot.svg';
import IceRod from './assets/Ice Rod.svg';
import FireRod from './assets/Fire Rod.svg';
import Lantern from './assets/Lantern.svg';
import MagicalBoomerang from './assets/Magical Boomerang.svg';
import MagicCape from './assets/Magic Cape.svg';
import MagicMirror from './assets/Magic Mirror.svg';
import MagicPowder from './assets/Magic Powder.svg';
import MasterSwordLv1 from './assets/Master Sword Lv. 1.svg';
import MasterSwordLv2 from './assets/Master Sword Lv. 2.svg';
import MasterSwordLv3 from './assets/Master Sword Lv. 3.svg';
import MirrorShield from './assets/Mirror Shield.svg';
import MoonPearl from './assets/Moon Pearl.svg';
import Mushroom from './assets/Mushroom.svg';
import PegasusShoes from './assets/Pegasus Shoes.svg';
import PowerGlove from './assets/Power Glove.svg';
import QuakeMedallion from './assets/Quake Medallion.svg';
import RedMail from './assets/Red Mail.svg';
import RedShield from './assets/Red Shield.svg';
import Shovel from './assets/Shovel.svg';
import SilverArrows from './assets/Silver Arrows.svg';
import TitansMitt from './assets/Titans Mitt.svg';
import ZorasFlippers from './assets/Zoras Flippers.svg';

import classes from '@/components/ItemTracker/ItemTracker.scss';
import alttpClasses from './ALTTP.scss';

function ItemTracker({ forwardRef }) {
  return (
    <div
      className={cx(classes.grid, alttpClasses.tracker)}
      onContextMenu={e => e.preventDefault()}
      ref={forwardRef}
    >
      <Item levels={[{ component: <Bow/> }, { component: <SilverArrows/> }]} />
      <Item className={alttpClasses.boomerang} levels={[{ component: <Boomerang/> }]} />
      <Item className={alttpClasses.magicalBoomerang} levels={[{ component: <MagicalBoomerang/> }]} />
      <Item levels={[{ component: <Hookshot/> }]} />
      <Item checkable={true} levels={[{ component: <Mushroom/> }]} />
      <Item checkable={true} levels={[{ component: <MagicPowder/> }]} />
      <Item levels={[{ component: <HalfMagic/> }]} />
      {generateDungeon('EP')}
      <Item levels={[{ component: <FireRod/> }]} />
      <Item levels={[{ component: <IceRod/> }]} />
      <Item levels={[{ component: <BombosMedallion/> }]} steps={['MM', 'TR', 'BOTH']} />
      <Item levels={[{ component: <EtherMedallion/> }]} steps={['MM', 'TR', 'BOTH']} />
      <Item levels={[{ component: <QuakeMedallion/> }]} steps={['MM', 'TR', 'BOTH']} />
      <Item alwaysActive levels={[{ component: <GreenClothes/> }, { component: <BlueMail/> }, { component: <RedMail/> }]} />
      {generateDungeon('DP')}
      <Item levels={[{ component: <Lantern/> }]} />
      <Item levels={[{ component: <Hammer/> }]} />
      <Item checkable={true} levels={[{ component: <Flute/> }]} />
      <Item levels={[{ component: <BugCatchingNet/> }]} />
      <Item levels={[{ component: <BookOfMudora/> }]} />
      <Item checkable={true} levels={[{ component: <Shovel/> }]} />
      {generateDungeon('TH')}
      <Item checkable={true} displayLevel='enabled' levels={Array(4).fill({ component: <Bottle/> })} />
      <Item levels={[{ component: <CaneOfSomaria/> }]} />
      <Item levels={[{ component: <CaneOfByma/> }]} />
      <Item levels={[{ component: <MagicCape/> }]} />
      <Item levels={[{ component: <MagicMirror/> }]} />
      <Item levels={[{ component: <MoonPearl/> }]} />
      <Item className={alttpClasses.agahnimOne} levels={[{ component: <Agahnim/> }]} />
      <Item className={alttpClasses.agahnimTwo} levels={[{ component: <Agahnim/> }]} />
      <Item levels={[{ component: <PegasusShoes/> }]} />
      <Item levels={[{ component: <PowerGlove/> }, { component: <TitansMitt/> }]} />
      <Item levels={[{ component: <ZorasFlippers/> }]} />
      <Item levels={[{ component: <FightersSword/> }, { component: <MasterSwordLv1/> }, { component: <MasterSwordLv2/> }, { component: <MasterSwordLv3/> }]} />
      <Item levels={[{ component: <FightersShield/> }, { component: <RedShield/> }, { component: <MirrorShield/> }]} />
      <Item displayLevel='enabled' levels={Array(8).fill({ component: <GanonTowerSign/> })} levelsStartValue={0} />
      <Item
        displayLevel='enabled'
        levels={
          Array(8)
            .fill({ component: <GanonSign/> })
            .concat([
              { component: <GanonSign/>, levelValue: 'AD' },
              { component: <><Icon className={alttpClasses.pedSeed} path={mdiClose} size={2} /><GanonSign /></>, levelValue: 'PED' }
            ])
        }
        levelsStartValue={0}
      />
      {generateDungeon('PD')}
      {generateDungeon('SP')}
      {generateDungeon('SW')}
      {generateDungeon('TT')}
      {generateDungeon('IP')}
      {generateDungeon('MM')}
      {generateDungeon('TR')}
    </div>
  );
};

ItemTracker.propTypes = {
  forwardRef: PropTypes.object.isRequired
};

export default ItemTracker;
