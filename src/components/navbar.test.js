import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './navbar';

describe('Testing Navbar component', () => {
  test('Testing with Snapshot', () => {
    const rendredcomponent = renderer.create(
      <Router><NavBar /></Router>,
    ).toJSON();
    expect(rendredcomponent).toMatchSnapshot();
  });
});
