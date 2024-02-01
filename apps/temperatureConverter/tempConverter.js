document.addEventListener('DOMContentLoaded', function () {
    const inputTemperature = document.getElementById('inputTemperature');
    const fromUnit = document.getElementById('fromUnit');
    const convertToCelsius = document.getElementById('convertToCelsius');
    const convertToFahrenheit = document.getElementById('convertToFahrenheit');
    const convertToKelvin = document.getElementById('convertToKelvin');
    const resultText = document.getElementById('resultText');

    convertToCelsius.addEventListener('click', function () {
        convertTemperature('celsius');
    });

    convertToFahrenheit.addEventListener('click', function () {
        convertTemperature('fahrenheit');
    });

    convertToKelvin.addEventListener('click', function () {
        convertTemperature('kelvin');
    });

    function convertTemperature(targetUnit) {
        const temperature = parseFloat(inputTemperature.value);
        if (isNaN(temperature)) {
            alert('Please enter a valid temperature.');
            return;
        }

        if (fromUnit.value === targetUnit) {
            alert('Please select a different target unit.');
            return;
        }

        let convertedTemperature;
        if (fromUnit.value === 'celsius') {
            if (targetUnit === 'fahrenheit') {
                convertedTemperature = (temperature * 9/5) + 32;
            } else if (targetUnit === 'kelvin') {
                convertedTemperature = temperature + 273.15;
            } else {
                convertedTemperature = temperature;
            }
        } else if (fromUnit.value === 'fahrenheit') {
            if (targetUnit === 'celsius') {
                convertedTemperature = (temperature - 32) * 5/9;
            } else if (targetUnit === 'kelvin') {
                convertedTemperature = ((temperature - 32) * 5/9) + 273.15;
            } else {
                convertedTemperature = temperature;
            }
        } else {
            if (targetUnit === 'celsius') {
                convertedTemperature = temperature - 273.15;
            } else if (targetUnit === 'fahrenheit') {
                convertedTemperature = ((temperature - 273.15) * 9/5) + 32;
            } else {
                convertedTemperature = temperature;
            }
        }

        resultText.textContent = `Converted temperature: ${convertedTemperature.toFixed(2)} ${targetUnit}`;
    }
});
