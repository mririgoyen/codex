import React from 'react';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

import Item from '../../ItemTracker/Item';

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

import classes from '~/components/ItemTracker/ItemTracker.module.scss';
import alttpClasses from './ALTTPItemTracker.module.scss';

function ALTTPItemTracker() {
  return (
    <div className={classes.grid} onContextMenu={e => e.preventDefault()}>
      <Item levels={[{ component: <Bow/> }, { component: <SilverArrows/> }]} />
      <Item className={alttpClasses.boomerang} levels={[{ component: <Boomerang/> }]} />
      <Item className={alttpClasses.magicalBoomerang} levels={[{ component: <MagicalBoomerang/> }]} />
      <Item levels={[{ component: <Hookshot/> }]} />
      <Item checkable={true} levels={[{ component: <Mushroom/> }]} />
      <Item checkable={true} levels={[{ component: <MagicPowder/> }]} />
      <Item levels={[{ component: <HalfMagic/> }]} />
      <Item levels={[{ component: <FireRod/> }]} />
      <Item levels={[{ component: <IceRod/> }]} />
      <Item levels={[{ component: <BombosMedallion/> }]} steps={['MM', 'TR', 'BOTH']} />
      <Item levels={[{ component: <EtherMedallion/> }]} steps={['MM', 'TR', 'BOTH']} />
      <Item levels={[{ component: <QuakeMedallion/> }]} steps={['MM', 'TR', 'BOTH']} />
      <Item levels={[{ component: <GreenClothes/> }, { component: <BlueMail/> }, { component: <RedMail/> }]} startActive />
      <Item levels={[{ component: <Lantern/> }]} />
      <Item levels={[{ component: <Hammer/> }]} />
      <Item checkable={true} levels={[{ component: <Flute/> }]} />
      <Item levels={[{ component: <BugCatchingNet/> }]} />
      <Item levels={[{ component: <BookOfMudora/> }]} />
      <Item checkable={true} levels={[{ component: <Shovel/> }]} />
      <Item levels={Array(4).fill({ component: <Bottle/>, displayLevel: true })} />
      <Item levels={[{ component: <CaneOfSomaria/> }]} />
      <Item levels={[{ component: <CaneOfByma/> }]} />
      <Item levels={[{ component: <MagicCape/> }]} />
      <Item levels={[{ component: <MagicMirror/> }]} />
      <Item levels={[{ component: <MoonPearl/> }]} />
      <Item levels={[{ component: <PegasusShoes/> }]} />
      <Item levels={[{ component: <PowerGlove/> }, { component: <TitansMitt/> }]} />
      <Item levels={[{ component: <ZorasFlippers/> }]} />
      <Item levels={[{ component: <FightersSword/> }, { component: <MasterSwordLv1/> }, { component: <MasterSwordLv2/> }, { component: <MasterSwordLv3/> }]} />
      <Item levels={[{ component: <FightersShield/> }, { component: <RedShield/> }, { component: <MirrorShield/> }]} />
      <Item className={alttpClasses.agahnimOne} levels={[{ component: <Agahnim/> }]} />
      <Item className={alttpClasses.agahnimTwo} levels={[{ component: <Agahnim/> }]} />
      <Item levels={Array(8).fill({ component: <GanonTowerSign/>, displayLevel: true })} levelsStartValue={0} />
      <Item
        levels={
          Array(8)
            .fill({ component: <GanonSign/>, displayLevel: true })
            .concat([
              { component: <GanonSign/>, displayLevel: true, levelValue: 'AD' },
              { component: <><Icon className={alttpClasses.pedSeed} path={mdiClose} size={2} /><GanonSign /></>, displayLevel: true, levelValue: 'PED' }
            ])
        }
        levelsStartValue={0}
      />
    </div>
  );
};

export default ALTTPItemTracker;
