const GasSavingsCalculator = require('../src/GasSavingsCalculator');

test('calculates the gas savings', () => {
  let testData = {
    fuelCost: 6,
    miles: 12000,
    mpg1: 30,
    mpg2: 50
  }

  let Calculator = new GasSavingsCalculator(testData);
  let passedInData = Calculator.getData();

  expect(passedInData).toEqual(testData);
  expect(passedInData.fuelCost).not.toBeNull();
  expect(passedInData.fuelCost).not.toBeUndefined();

  let result = Calculator.calculate();
  expect(result.savings).not.toBeNull();
  expect(result.savings).not.toBeUndefined();
  expect(typeof(result.savings)).toEqual('number');
});