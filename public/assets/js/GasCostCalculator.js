class GasCostCalculator {

    constructor() {
        this.data = {};
    }

    calculate(data) {
        let cost = (data.miles / data.mpg) * data.fuelCost;

        let result = {
            fuelCost: cost,
            vehicle: this.data.vehicle
        }

        return result;
    }

    getData() {
        return this.data;
    }

    getForm() {
        let formEl = document.createElement('form');
        formEl.id = 'gas-cost-form';
        formEl.innerHTML = 
            `
                <fieldset id="general-info">
                    <h3>Gas Cost Calculator</h3>
                    <div class="field">
                        <label for="vehicle">Vehicle</label>
                        <input id="vehicle" name="vehicle" placeholder="Civic" type="text" />
                    </div>

                    <div class="field">
                        <label for="miles">Annual Mileage</label>
                        <input id="miles" min="1" name="miles" placeholder="10000" type="number" required />
                    </div>

                    <div class="field">
                        <label for="fuel-cost">Cost per gallon of gas</label>
                        <input id="fuel-cost" min="1" name="fuel-cost" step="any" type="number" placeholder="5" required />
                    </div>

                    <div class="field">
                        <label for="mpg">Fuel Efficiency (miles per gallon)</label>
                        <input id="mpg" min="1" name="mpg" placeholder="20" type="number" required />
                    </div>
                </fieldset>

                <input id="gas-savings-submit" type="submit" value="Submit" />
        `;

        formEl.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(formEl);

            this.data.fuelCost = Number(formData.get('fuel-cost'));
            this.data.miles = Number(formData.get('miles'));
            this.data.mpg = Number(formData.get('mpg'));
            this.data.vehicle = formData.get('vehicle');

            const result = this.calculate(this.data);

            alert(`Estimated fuel cost: ${result.cost.toLocaleString("en-US", {style:"currency", currency:"USD"})}`);
        });

        return formEl;
    }
}

export default GasSavingsCalculator;

// module.exports = GasCostCalculator;