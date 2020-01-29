import React from 'react';
import cx from 'classnames';

import BigKey from './assets/Big Key.svg';
import BlueCrystal from './assets/Blue Crystal.svg';
import GreenPendant from './assets/Green Pendant.svg';
import GreenPendantPlus from './assets/Green Pendant-Plus.svg';
import RedBluePendant from './assets/Red-Blue Pendant.svg';
import RedCrystal from './assets/Red Crystal.svg';
import RedCrystalPlus from './assets/Red Crystal-Plus.svg';

import Item from '@/components/ItemTracker/Item';

import alttpClasses from './ALTTP.scss';

function generateDungeon(name, keyTracker = false) {
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
    keyTracker ? <RedCrystal key='red-crystal' /> : <RedCrystalPlus key='red-crystal' />,
    <RedBluePendant key='red-blue-pendant' />,
    keyTracker ? <GreenPendant key='green-pendant' /> : <GreenPendantPlus key='green-pendant' />
  ];

  const requestedDungeon = dungeons.find(e => e.name === name);
  if (!requestedDungeon) {
    return;
  }

  if (keyTracker) {
    const rewardLevels = requestedDungeon.crystal || requestedDungeon.pendant ?
      levels.map((e, i) => ({
        component: (
          <div className={alttpClasses.dungeonKeysanityReward} key={i}>
            <p>{requestedDungeon.name}</p>
            <div className={alttpClasses.svgContainer}>{e}</div>
          </div>
        )
      }))
      :
      [{ component: <div className={alttpClasses.dungeonKeysanityReward}><p>{requestedDungeon.name}</p></div> }];

    const smallKeys = requestedDungeon.smallKeys ?
      new Array(requestedDungeon.smallKeys + 1).fill().map((e, i) => ({
        component: (
          <div
            className={cx({
              [alttpClasses.noKeys]: i === 0,
              [alttpClasses.maxKeys]: i === requestedDungeon.smallKeys
            })}
            key={i}
          >
            <p>{i}</p>
          </div>
        )
      }))
      :
      [{ component: <div/> }];

    return (
      <div className={alttpClasses.dungeons}>
        <Item
          changeLevelWithRightClick={(requestedDungeon.crystal || requestedDungeon.pendant)}
          className={alttpClasses.dungeonReward}
          levels={rewardLevels}
        />
        <Item
          alwaysActive
          className={alttpClasses.dungeonSmallKeys}
          levels={smallKeys}
          loopLevels={false}
        />
        {requestedDungeon.bigKey && <Item className={alttpClasses.bigKey} levels={[{ component: <BigKey/> }]} /> }
      </div>
    );
  }

  return (
    <Item
      changeLevelWithRightClick
      className={alttpClasses.dungeonReward}
      levels={
        levels.map((e, i) => ({
          component: (
            <div key={i}>
              <p>{requestedDungeon.name}</p>
              {e}
            </div>
          )
        }))
      }
    />
  );
};

export default generateDungeon;
