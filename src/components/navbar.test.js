import { Renderer } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './navbar';

describe('Testing Navbar component', () => {
  test('Testing with Snapshot', () => {
    const rendredcomponent = Renderer.create(
      <Router><NavBar /></Router>,
    );
    expect(rendredcomponent).toMatchSnapshot();
  });
});
