import { createAdder } from './function.js';

describe('Тесты для функции createAdder', () => {
  test('должна возвращать функцию, которая складывает два числа', () => {
    const add5 = createAdder(5);
    expect(add5(5)).toBe(10);
    expect(add5(12)).toBe(17);
  });

  test('должна корректно работать с отрицательными числами', () => {
    const addNeg = createAdder(-3);
    expect(addNeg(5)).toBe(2);
    expect(addNeg(-5)).toBe(-8);
  });

  test('должна возвращать 0 при сложении с 0', () => {
    const addZero = createAdder(0);
    expect(addZero(10)).toBe(10);
    expect(addZero(0)).toBe(0);
  });

  test('должна выбрасывать ошибку, если аргумент не число', () => {
    expect(() => createAdder('5')).toThrow('Аргумент должен быть числом');
    expect(() => createAdder(5)('10')).toThrow('Аргумент должен быть числом');
  });

  test('должна корректно работать с дробными числами', () => {
    const addFloat = createAdder(0.1);
    expect(addFloat(0.2)).toBeCloseTo(0.3);
  });

  test('должна обрабатывать Infinity', () => {
    const addInf = createAdder(Infinity);
    expect(addInf(10)).toBe(Infinity);
  });
});