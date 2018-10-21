import React from 'react';
import { shallow } from 'enzyme';

import { LastMessage } from './LastMessage';
import { TestConnect, TestNameSpace } from '../react-signal/test';

const NameSpace = new TestNameSpace();
const ConnectedLastMessage = TestConnect(LastMessage, NameSpace);

describe('LastMessage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ConnectedLastMessage lastMessage="hello" />);
  });

  it('renders', () => {
    console.log(wrapper.debug());
  });
});
