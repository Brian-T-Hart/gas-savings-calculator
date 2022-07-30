import GasSavingsCalculator from './src/GasSavingsCalculator.js';

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
    alert(`Your savings: ${result.savings.toLocaleString("en-US", {style:"currency", currency:"USD"})} per year`);
});


