import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';

it('Check if Home renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
