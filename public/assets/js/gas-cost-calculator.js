import GasCostCalculator from './GasCostCalculator.js';

const calculator = new GasCostCalculator();

const contentContainer = document.getElementById('gas-cost-container');

contentContainer.appendChild(calculator.getForm());

