import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../Quote';

it('Check if Quote renders correctly', () => {
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});
