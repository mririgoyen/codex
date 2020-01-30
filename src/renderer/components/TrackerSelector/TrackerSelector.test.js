import React from 'react';
import { shallow } from 'enzyme';

import TrackerSelector from './TrackerSelector';

jest.mock('@/components/Games/games', () => ([
  {
    name: 'Zero Trackers',
    image: 'ZeroTrackersImage',
    trackers: []
  },
  {
    name: 'Game A',
    image: 'GameAImage',
    trackers: [
      {
        name: 'Item Tracker 1',
        component: <div>COMPONENT 1</div>
      },
      {
        name: 'Item Tracker 2',
        component: <div>COMPONENT 2</div>
      }
    ]
  },
  {
    name: 'Another Game',
    image: 'AnotherGameImage',
    trackers: [
      {
        name: 'Item Tracker 1',
        component: <div>COMPONENT 1</div>
      },
      {
        name: 'Item Tracker 2',
        component: <div>COMPONENT 2</div>
      }
    ]
  },
  {
    name: 'Game B',
    image: 'GameBImage',
    trackers: [
      {
        name: 'Item Tracker 1',
        component: <div>COMPONENT 1</div>
      }
    ]
  }
]));

describe('<TrackerSelector />', () => {
  const setSelectedTrackerMock = jest.fn();
  const updateItemTrackerIdMock = jest.fn();
  const component = shallow(<TrackerSelector selectedTracker='0-1' setSelectedTracker={setSelectedTrackerMock} updateItemTrackerId={updateItemTrackerIdMock} />);

  it('renders a selector with several games and various trackers', () => {
    expect(component.find('WithStyles(ForwardRef(ListSubheader))')).toHaveLength(3);
    expect(component.find('WithStyles(ForwardRef(MenuItem))')).toHaveLength(5);
  });

  it('calls the method to change the selected tracker when one is selected', () => {
    const select = component.find('WithStyles(ForwardRef(Select))');
    select.simulate('change', { target: { value: '1-0' }});
    expect(setSelectedTrackerMock).toBeCalledWith('1-0');
  });

  it('calls the method to reset the tracker when the Refresh button is clicked', () => {
    const refresh = component.find('.refresh');
    refresh.simulate('click');
    expect(updateItemTrackerIdMock).toBeCalled();
  });
});
