const GasCostCalculator = require('../public/assets/js/GasCostCalculator');

test('calculates the fuel cost', () => {
  let testData = {
    fuelCost: 6,
    miles: 12000,
    mpg: 30
  }

  let Calculator = new GasCostCalculator();

  let result = Calculator.calculate(testData);
  expect(result.fuelCost).not.toBeNull();
  expect(result.fuelCost).not.toBeUndefined();
  expect(typeof(result.fuelCost)).toEqual('number');
});