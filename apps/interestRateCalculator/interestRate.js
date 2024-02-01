document.addEventListener("DOMContentLoaded", function () {
    const principalInput = document.getElementById("principal");
    const rateInput = document.getElementById("rate");
    const timeInput = document.getElementById("time");
    const resultDiv = document.getElementById("result");
    const calculateSimpleButton = document.getElementById("calculateSimple");
    const calculateCompoundButton = document.getElementById("calculateCompound");

    function showError(message) {
        resultDiv.innerHTML = `<span class="error">${message}</span>`;
    }

    calculateSimpleButton.addEventListener("click", () => {
        const principal = parseFloat(principalInput.value);
        const rate = parseFloat(rateInput.value) / 100;
        const time = parseFloat(timeInput.value);

        if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
            showError("Please enter valid numeric values for all fields.");
        } else if (principal <= 0 || rate <= 0 || time <= 0) {
            showError("All values must be greater than zero.");
        } else {
            const simpleInterest = (principal * rate * time).toFixed(2);
            resultDiv.innerHTML = `Simple Interest: $${simpleInterest}`;
        }
    });

    calculateCompoundButton.addEventListener("click", () => {
        const principal = parseFloat(principalInput.value);
        const rate = parseFloat(rateInput.value) / 100;
        const time = parseFloat(timeInput.value);

        if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
            showError("Please enter valid numeric values for all fields.");
        } else if (principal <= 0 || rate <= 0 || time <= 0) {
            showError("All values must be greater than zero.");
        } else {
            const compoundInterest = (principal * Math.pow(1 + rate, time) - principal).toFixed(2);
            resultDiv.innerHTML = `Compound Interest: $${compoundInterest}`;
        }
    });
});
