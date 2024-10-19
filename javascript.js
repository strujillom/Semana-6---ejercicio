// Seleccionando elementos HTML
const numberInput = document.getElementById('numberInput');
const checkButton = document.getElementById('checkButton');
const resultSection = document.getElementById('resultSection');

// Función que maneja el evento del botón
checkButton.addEventListener('click', function() {
    const number = parseInt(numberInput.value);

    // Verificamos si el número ingresado es mayor que 10
    if (isNaN(number)) {
        resultSection.textContent = 'Por favor, ingresa un número válido.';
    } else if (number > 10) {
        resultSection.textContent = `El número ${number} es mayor que 10.`;
    } else {
        resultSection.textContent = `El número ${number} es menor o igual a 10.`;
    }

    // Ejemplo de bucle: Mostrar los números del 1 al número ingresado
    let list = 'Números del 1 al ' + number + ': ';
    for (let i = 1; i <= number; i++) {
        list += i + ' ';
    }

    // Mostramos el resultado del bucle
    resultSection.textContent += `\n${list}`;
});
