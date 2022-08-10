import calculate from './Calculate';

describe('Calculate unit Test', () => {
  test('Test Calculate addition ', () => {
    const obj1 = { total: null, next: null, operation: null };
    let answer = calculate(obj1, '5');
    answer = calculate(answer, '+');
    answer = calculate(answer, '4');
    answer = calculate(answer, '=');
    expect(answer.total).toBe('9');
  });

  test('Test Calculate Substraction ', () => {
    const obj1 = { total: null, next: null, operation: null };
    let answer = calculate(obj1, '5');
    answer = calculate(answer, '-');
    answer = calculate(answer, '4');
    answer = calculate(answer, '=');
    expect(answer.total).toBe('1');
  });

  test('Test Calculate division ', () => {
    const obj1 = { total: null, next: null, operation: null };
    let answer = calculate(obj1, '5');
    answer = calculate(answer, '÷');
    answer = calculate(answer, '2');
    answer = calculate(answer, '=');
    expect(answer.total).toBe('2.5');
  });

  test('Test Calculate division by Zero (0)', () => {
    const obj1 = { total: null, next: null, operation: null };
    let answer = calculate(obj1, '5');
    answer = calculate(answer, '÷');
    answer = calculate(answer, '0');
    answer = calculate(answer, '=');
    expect(answer.total).toBe('Can\'t divide by 0.');
  });

  test('Test Calculate multiplication by Zero ', () => {
    const obj1 = { total: null, next: null, operation: null };
    let answer = calculate(obj1, '5');
    answer = calculate(answer, 'x');
    answer = calculate(answer, '4');
    answer = calculate(answer, '=');
    expect(answer.total).toBe('20');
  });

  test('Test Calculate multiplication by Zero ', () => {
    const obj1 = { total: null, next: null, operation: null };
    let answer = calculate(obj1, '5');
    answer = calculate(answer, 'x');
    answer = calculate(answer, '0');
    answer = calculate(answer, '=');
    expect(answer.total).toBe('0');
  });

  test('Test Calculate multiplication by One ', () => {
    const obj1 = { total: null, next: null, operation: null };
    let answer = calculate(obj1, '2022');
    answer = calculate(answer, 'x');
    answer = calculate(answer, '1');
    answer = calculate(answer, '=');
    expect(answer.total).toBe('2022');
  });
});
