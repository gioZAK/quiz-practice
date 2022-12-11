const result = document.getElementById("result");
const inputType = document.getElementById("inputType");
const resultType = document.getElementById("resultType");

// Event Listener
input.addEventListener("keyup", lengthCalc);
inputType.addEventListener("change", lengthCalc);
resultType.addEventListener("change", lengthCalc);

// Conversion factors
const conversionFactors = {
    centimeters: {
        centimeters: 1,
        meters: 1 / 100,
        kilometers: 1 / 100000,
        inches: 0.393701,
        miles: 1 / 160934.4,
    },
    meters: {
        centimeters: 100,
        meters: 1,
        kilometers: 1 / 1000,
        inches: 39.3701,
        miles: 1 / 1609.344,
    },
    kilometers: {
        centimeters: 100000,
        meters: 1000,
        kilometers: 1,
        inches: 39370.1,
        miles: 0.621371,
    },
    inches: {
        centimeters: 2.54,
        meters: 1 / 39.3701,
        kilometers: 1 / 39370.1,
        inches: 1,
        miles: 1 / 63360,
    },
    miles: {
        centimeters: 160934.4,
        meters: 1609.344,
        kilometers: 1.60934,
        inches: 63360,
        miles: 1,
    },
};

function lengthCalc() {
    // This function compares the user input and calculates

    let inputFrom = inputType.value;
    let resultTo = resultType.value;

    result.value = conversionFactors[inputFrom][resultTo] * Number(input.value);
}