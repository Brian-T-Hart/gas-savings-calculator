import GasSavingsCalculator from './GasSavingsCalculator.js';

const gasSavingsForm = document.getElementById('gas-savings-form');

gasSavingsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(gasSavingsForm);

    const data = {
      miles: formData.get('miles'),
      fuelCost: formData.get('fuel-cost'),
      mpg1: parseInt(formData.get('mpg-1')),
      mpg2: parseInt(formData.get('mpg-2')),
    }

    const calculator = new GasSavingsCalculator(data);
    const result = calculator.calculate();
    const savingVehicle = result.cost1 > result.cost2 ? 'Vehicle 2' : 'Vehicle 1';

    alert(`
      Vehicle 1: ${result.cost1.toLocaleString("en-US", {style:"currency", currency:"USD"})} \n
      Vehicle 2: ${result.cost2.toLocaleString("en-US", {style:"currency", currency:"USD"})} \n
      ${savingVehicle} could save you ${Math.abs(result.savings).toLocaleString("en-US", {style:"currency", currency:"USD"})} per year
    `);
});


