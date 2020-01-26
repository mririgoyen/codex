import React from 'react';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

import Item from '../../ItemTracker/Item';

import Agahnim from './assets/Agahnim.svg';
import BlueCrystal from './assets/Blue Crystal.svg';
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
import GreenPendant from './assets/Green Pendant.svg';
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
import RedBluePendant from './assets/Red-Blue Pendant.svg';
import RedCrystal from './assets/Red Crystal.svg';
import RedMail from './assets/Red Mail.svg';
import RedShield from './assets/Red Shield.svg';
import Shovel from './assets/Shovel.svg';
import SilverArrows from './assets/Silver Arrows.svg';
import TitansMitt from './assets/Titans Mitt.svg';
import ZorasFlippers from './assets/Zoras Flippers.svg';

import classes from '@/components/ItemTracker/ItemTracker.scss';
import alttpClasses from './ALTTPItemTracker.scss';

function ALTTPItemTracker() {
  // const APPLICATION_WIDTH = 389;

  const generateDungeon = (dungeon, type = 'reward') => {
    const dungeons = [
      { name: 'EP', smallKeys: 0, bigKey: true, pendant: true },
      { name: 'DP', smallKeys: 1, bigKey: true, pendant: true },
      { name: 'TH', smallKeys: 1, bigKey: true, pendant: true },
      { name: 'HC', smallKeys: 1 },
      { name: 'AT', smallKeys: 2 },
      { name: 'PD', smallKeys: 6, bigKey: true, crystal: true },
      { name: 'SP', smallKeys: 1, bigKey: true, crystal: true },
      { name: 'SW', smallKeys: 3, bigKey: true, crystal: true },
      { name: 'TT', smallKeys: 1, bigKey: true, crystal: true },
      { name: 'IP', smallKeys: 2, bigKey: true, crystal: true },
      { name: 'MM', smallKeys: 3, bigKey: true, crystal: true },
      { name: 'TR', smallKeys: 4, bigKey: true, crystal: true },
      { name: 'GT', smallKeys: 4, bigKey: true }
    ];

    const levels = [
      <p className={alttpClasses.unknownReward} key='?'>?</p>,
      <BlueCrystal key='blue-crystal' />,
      <RedCrystal key='red-crystal' />,
      <RedBluePendant key='red-blue-pendant' />,
      <GreenPendant key='green-pendant' />
    ];

    const requestedDungeon = dungeons.find(e => e.name === dungeon);
    if (!requestedDungeon) {
      return;
    }

    if (type === 'keysanity') {
      return;
    }

    return levels.map((e, i) => {
      return ({
        component: (
          <div key={i}>
            <p>{requestedDungeon.name}</p>
            {e}
          </div>
        )
      });
    });
  };

  return (
    <div className={classes.grid} onContextMenu={e => e.preventDefault()}>
      <Item levels={[{ component: <Bow/> }, { component: <SilverArrows/> }]} />
      <Item className={alttpClasses.boomerang} levels={[{ component: <Boomerang/> }]} />
      <Item className={alttpClasses.magicalBoomerang} levels={[{ component: <MagicalBoomerang/> }]} />
      <Item levels={[{ component: <Hookshot/> }]} />
      <Item checkable={true} levels={[{ component: <Mushroom/> }]} />
      <Item checkable={true} levels={[{ component: <MagicPowder/> }]} />
      <Item levels={[{ component: <HalfMagic/> }]} />
      <Item changeLevelWithRightClick className={alttpClasses.dungeonReward} levels={generateDungeon('EP')} />
      <Item levels={[{ component: <FireRod/> }]} />
      <Item levels={[{ component: <IceRod/> }]} />
      <Item levels={[{ component: <BombosMedallion/> }]} steps={['MM', 'TR', 'BOTH']} />
      <Item levels={[{ component: <EtherMedallion/> }]} steps={['MM', 'TR', 'BOTH']} />
      <Item levels={[{ component: <QuakeMedallion/> }]} steps={['MM', 'TR', 'BOTH']} />
      <Item alwaysActive levels={[{ component: <GreenClothes/> }, { component: <BlueMail/> }, { component: <RedMail/> }]} />
      <Item changeLevelWithRightClick className={alttpClasses.dungeonReward} levels={generateDungeon('DP')} />
      <Item levels={[{ component: <Lantern/> }]} />
      <Item levels={[{ component: <Hammer/> }]} />
      <Item checkable={true} levels={[{ component: <Flute/> }]} />
      <Item levels={[{ component: <BugCatchingNet/> }]} />
      <Item levels={[{ component: <BookOfMudora/> }]} />
      <Item checkable={true} levels={[{ component: <Shovel/> }]} />
      <Item changeLevelWithRightClick className={alttpClasses.dungeonReward} levels={generateDungeon('TH')} />
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
      <Item changeLevelWithRightClick className={alttpClasses.dungeonReward} levels={generateDungeon('PD')} />
      <Item changeLevelWithRightClick className={alttpClasses.dungeonReward} levels={generateDungeon('SP')} />
      <Item changeLevelWithRightClick className={alttpClasses.dungeonReward} levels={generateDungeon('SW')} />
      <Item changeLevelWithRightClick className={alttpClasses.dungeonReward} levels={generateDungeon('TT')} />
      <Item changeLevelWithRightClick className={alttpClasses.dungeonReward} levels={generateDungeon('IP')} />
      <Item changeLevelWithRightClick className={alttpClasses.dungeonReward} levels={generateDungeon('MM')} />
      <Item changeLevelWithRightClick className={alttpClasses.dungeonReward} levels={generateDungeon('TR')} />
    </div>
  );
};

export default ALTTPItemTracker;
