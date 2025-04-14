// Variables to store input and operation
let display = document.getElementById('result');
let currentInput = '';
let operation = null;
let previousInput = '';

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (!isNaN(value)) {
            // Handle digit button
            currentInput += value;
            display.value = currentInput;
        } else if (value === 'C') {
            // Clear the calculator
            currentInput = '';
            previousInput = '';
            operation = null;
            display.value = '';
        } else if (value === '=') {
            // Calculate the result
            if (currentInput && previousInput && operation) {
                currentInput = eval(`${previousInput} ${operation} ${currentInput}`);
                display.value = currentInput;
                previousInput = '';
                operation = null;
            }
        } else {
            // Handle operation buttons
            if (currentInput) {
                previousInput = currentInput;
                currentInput = '';
                operation = value;
            }
        }
    });
});
