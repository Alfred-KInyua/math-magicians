import React, { useState } from 'react';
import './style.css';
import calculate from './logic/Calculate';

const Calculator = () => {
  const [data, setData] = useState(0);
  const onClick = (e) => {
    setData((data) => calculate(data, e.target.value));
  };
  return (
    <div>
      <p className="strong">
        <strong>Lets do some math!</strong>
      </p>
      <div className="container">
        <table className="calculator">
          <tr>
            <td colSpan="4">
              <div className="answer">
                {' '}
                {data.next || data.total || 0}
                {' '}
              </div>
              {' '}
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" name="AC " value="AC" onClick={onClick} />
            </td>
            <td>
              {' '}
              <input type="button" value="+/-" onClick={onClick} />
              {' '}
            </td>
            <td>
              {' '}
              <input type="button" value="%" onClick={onClick} />
              {' '}
            </td>
            <td>
              {' '}
              <input
                type="button"
                value="÷"
                id="orange"
                onClick={onClick}
              />
              {' '}
            </td>
          </tr>
          <tr>
            <td>
              {' '}
              <input type="button" value="7" onClick={onClick} />
              {' '}
            </td>
            <td>
              {' '}
              <input type="button" value="8" onClick={onClick} />
              {' '}
            </td>
            <td>
              {' '}
              <input type="button" value="9" onClick={onClick} />
              {' '}
            </td>
            <td>
              {' '}
              <input
                type="button"
                value="x"
                id="orange"
                onClick={onClick}
              />
              {' '}
            </td>
          </tr>
          <tr>
            <td>
              {' '}
              <input type="button" value="4" onClick={onClick} />
              {' '}
            </td>
            <td>
              {' '}
              <input type="button" value="5" onClick={onClick} />
              {' '}
            </td>
            <td>
              {' '}
              <input type="button" value="6" onClick={onClick} />
              {' '}
            </td>
            <td>
              {' '}
              <input
                type="button"
                value="-"
                id="orange"
                onClick={onClick}
              />
              {' '}
            </td>
          </tr>
          <tr>
            <td>
              {' '}
              <input type="button" value="1" onClick={onClick} />
              {' '}
            </td>
            <td>
              {' '}
              <input type="button" value="2" onClick={onClick} />
              {' '}
            </td>
            <td>
              {' '}
              <input type="button" value="3" onClick={onClick} />
              {' '}
            </td>
            <td>
              {' '}
              <input
                type="button"
                value="+"
                id="orange"
                onClick={onClick}
              />
              {' '}
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              {' '}
              <input type="button" value="0" onClick={onClick} />
              {' '}
            </td>
            <td>
              {' '}
              <input type="button" value="." onClick={onClick} />
              {' '}
            </td>

            <td>
              {' '}
              <input
                type="button"
                value="="
                id="orange"
                onClick={onClick}
              />
              {' '}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Calculator;
