import ALTTPImage from '@/components/Games/ALTTP/assets/Agahnim.svg';
import ALTTPItemTracker from '@/components/Games/ALTTP/ItemTracker';
import ALTTPKeysanityTracker from '@/components/Games/ALTTP/KeysanityTracker';

export default [
  {
    name: 'A Link to the Past',
    image: ALTTPImage,
    trackers: [
      {
        name: 'Item Tracker',
        author: 'Michael Irigoyen <goyney@gmail.com>',
        component: ALTTPItemTracker
      },
      {
        name: 'Keysanity Tracker',
        author: 'Michael Irigoyen <goyney@gmail.com>',
        component: ALTTPKeysanityTracker
      }
    ]
  }
];
