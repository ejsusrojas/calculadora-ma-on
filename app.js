function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return 'error: división por cero';
    } else {
        return a / b;
    }
}

function mostrarMenu() {
    return prompt(`elige una operación:
    1. sumar
    2. restar
    3. multiplicar
    4. dividir
    5. salir`);
}

function calculadora() {
    let salir = false;
    while (!salir) {
        const operacion = mostrarMenu();
        if (operacion === '5') {
            salir = true;
            alert('saliendo...');
        } else {
            const num1 = parseFloat(prompt('ingresa el primer número:'));
            const num2 = parseFloat(prompt('ingresa el segundo número:'));
            let resultado;
            switch (operacion) {
                case '1':
                    resultado = sumar(num1, num2);
                    break;
                case '2':
                    resultado = restar(num1, num2);
                    break;
                case '3':
                    resultado = multiplicar(num1, num2);
                    break;
                case '4':
                    resultado = dividir(num1, num2);
                    break;
                default:
                    alert('operación no válida');
                    continue;
            }
            alert(`el resultado es: ${resultado}`);
        }
    }
}

calculadora();
