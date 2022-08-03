import React from 'react';
import './style.css';
import './logic/Calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this);
  }

  render() {
    return (
      <div>
        <div className="container">
          <table className="calculator coll">
            <tr>
              <td colSpan="4">
                {' '}
                <input className="answer" type="text" id="result" disabled />
                {' '}
              </td>

            </tr>
            <tr>

              <td>
                {' '}
                <input type="button" name="AC " value="AC" onClick="display('1')" />
                {' '}
              </td>
              <td>
                {' '}
                <input type="button" value="+/-" onClick="display('2')" />
                {' '}
              </td>
              <td>
                {' '}
                <input type="button" value="%" onClick="display('3')" />
                {' '}
              </td>
              <td>
                {' '}
                <input type="button" value="÷" id="orange" onClick="display('÷')" />
                {' '}
              </td>
            </tr>
            <tr>

              <td>
                {' '}
                <input type="button" value="7" onClick="display('1')" />
                {' '}
              </td>
              <td>
                {' '}
                <input type="button" value="8" onClick="display('2')" />
                {' '}
              </td>
              <td>
                {' '}
                <input type="button" value="9" onClick="display('3')" />
                {' '}
              </td>
              <td>
                {' '}
                <input type="button" value="*" id="orange" onClick="display('/')" />
                {' '}
              </td>
            </tr>
            <tr>
              <td>
                {' '}
                <input type="button" value="4" onClick="display('4')" />
                {' '}
              </td>
              <td>
                {' '}
                <input type="button" value="5" onClick="display('5')" />
                {' '}
              </td>
              <td>
                {' '}
                <input type="button" value="6" onClick="display('6')" />
                {' '}
              </td>
              <td>
                {' '}
                <input type="button" value="-" id="orange" onClick="display('-')" />
                {' '}
              </td>
            </tr>
            <tr>
              <td>
                {' '}
                <input type="button" value="1" onClick="display('1')" />
                {' '}
              </td>
              <td>
                {' '}
                <input type="button" value="2" onClick="display('2')" />
                {' '}
              </td>
              <td>
                {' '}
                <input type="button" value="3" onClick="display('3')" />
                {' '}
              </td>
              <td>
                {' '}
                <input type="button" value="+" id="orange" onClick="display('+')" />
                {' '}
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                {' '}
                <input type="button" value="0" onClick="display('0')" />
                {' '}
              </td>
              <td>
                {' '}
                <input type="button" value="*" onClick="display('*')" />
                {' '}
              </td>

              <td>
                {' '}
                <input type="button" value="=" id="orange" onClick="calculate()" />
                {' '}
              </td>

            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Calculator;
