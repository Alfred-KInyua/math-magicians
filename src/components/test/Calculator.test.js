import renderer from 'react-test-renderer'; // ES6
import Calculator from '../Calculator';

describe('Testing Calculator component', () => {
  test('Testing with snapshot', () => {
    const calc = renderer.create(<Calculator />);
    expect(calc).toMatchSnapshot();
  });
});
