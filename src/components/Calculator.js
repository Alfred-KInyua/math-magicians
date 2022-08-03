import React from 'react';
import './style.css';
import calculate from './logic/Calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this);
  }

  onClick = (e) => {
    this.setState((data) => calculate(data, e.target.value));
  };

  render() {
    const { next, total } = this.state;
    return (
      <div>
        <div className="container">

          <table className="calculator coll">

            <tr>
              <td colSpan="4">
                {' '}
                <div className="answer">
                  {' '}
                  {' '}
                  {next || total || 0}
                  {' '}
                </div>

                {' '}
              </td>

            </tr>
            <tr>

              <td>

                <input type="button" name="AC " value="AC" onClick={this.onClick} />

              </td>
              <td>
                {' '}
                <input type="button" value="+/-" onClick={this.onClick} />
                {' '}
              </td>
              <td>
                {' '}
                <input type="button" value="%" onClick={this.onClick} />
                {' '}
              </td>
              <td>
                {' '}
                <input type="button" value="÷" id="orange" onClick={this.onClick} />
                {' '}
              </td>
            </tr>
            <tr>

              <td>
                {' '}
                <input type="button" value="7" onClick={this.onClick} />
                {' '}
              </td>
              <td>
                {' '}
                <input type="button" value="8" onClick={this.onClick} />
                {' '}
              </td>
              <td>
                {' '}
                <input type="button" value="9" onClick={this.onClick} />
                {' '}
              </td>
              <td>
                {' '}
                <input type="button" value="x" id="orange" onClick={this.onClick} />
                {' '}
              </td>
            </tr>
            <tr>
              <td>
                {' '}
                <input type="button" value="4" onClick={this.onClick} />
                {' '}
              </td>
              <td>
                {' '}
                <input type="button" value="5" onClick={this.onClick} />
                {' '}
              </td>
              <td>
                {' '}
                <input type="button" value="6" onClick={this.onClick} />
                {' '}
              </td>
              <td>
                {' '}
                <input type="button" value="-" id="orange" onClick={this.onClick} />
                {' '}
              </td>
            </tr>
            <tr>
              <td>
                {' '}
                <input type="button" value="1" onClick={this.onClick} />
                {' '}
              </td>
              <td>
                {' '}
                <input type="button" value="2" onClick={this.onClick} />
                {' '}
              </td>
              <td>
                {' '}
                <input type="button" value="3" onClick={this.onClick} />
                {' '}
              </td>
              <td>
                {' '}
                <input type="button" value="+" id="orange" onClick={this.onClick} />
                {' '}
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                {' '}
                <input type="button" value="0" onClick={this.onClick} />
                {' '}
              </td>
              <td>
                {' '}
                <input type="button" value="." onClick={this.onClick} />
                {' '}
              </td>

              <td>
                {' '}
                <input type="button" value="=" id="orange" onClick={this.onClick} />
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
