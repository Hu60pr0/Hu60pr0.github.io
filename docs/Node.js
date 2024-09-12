// Seleccionar elementos importantes
const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.calc-btn');

// Variables para almacenar los valores y operaciones
let currentInput = '';
let previousInput = '';
let operator = null;

// Función para actualizar la pantalla
function updateScreen(value) {
  screen.textContent = value;
}

// Función que maneja el click de los botones
buttons.forEach(button => {
  button.addEventListener('click', function() {
    const value = this.textContent;

    if (!isNaN(value)) {  // Si es un número
      currentInput += value;
      updateScreen(currentInput);
    } else if (value === 'C') {  // Limpiar la pantalla
      currentInput = '';
      previousInput = '';
      operator = null;
      updateScreen('0');
    } else if (value === '=') {  // Realizar el cálculo
      if (operator && previousInput) {
        currentInput = calculate(previousInput, currentInput, operator);
        updateScreen(currentInput);
        previousInput = '';
        operator = null;
      }
    } else {  // Si es un operador
      if (currentInput) {
        previousInput = currentInput;
        currentInput = '';
        operator = value;
      }
    }
  });
});

// Función para realizar el cálculo
function calculate(a, b, operator) {
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  switch (operator) {
    case '+':
      return (numA + numB).toString();
    case '-':
      return (numA - numB).toString();
    case 'x':
      return (numA * numB).toString();
    case '/':
      return (numA / numB).toString();
    default:
      return b;
  }
}
