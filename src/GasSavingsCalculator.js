class GasSavingsCalculator {

    constructor(data) {
        this.data = data;
    }

    calculate() {
        let cost1 = (this.data.miles / this.data.mpg1) * this.data.fuelCost;
        let cost2 = (this.data.miles / this.data.mpg2) * this.data.fuelCost;
        let result = {
            cost1: cost1,
            cost2: cost2,
            savings: cost1 - cost2
        }

        return result;
    }

    getData() {
        return this.data;
    }
}

export default GasSavingsCalculator;

// module.exports = GasSavingsCalculator;