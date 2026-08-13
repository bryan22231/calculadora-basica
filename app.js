function obtenerNumeros() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById("resultado").innerText =
            "Ingrese dos números válidos";
        return null;
    }

    return [numero1, numero2];
}

function mostrarResultado(valor) {
    document.getElementById("resultado").innerText =
        "Resultado: " + valor;
}

function sumar() {
    const numeros = obtenerNumeros();
    if (!numeros) return;

    const [a, b] = numeros;
    mostrarResultado(a + b);
}

function restar() {
    const numeros = obtenerNumeros();
    if (!numeros) return;

    const [a, b] = numeros;
    mostrarResultado(a - b);
}

function multiplicar() {
    const numeros = obtenerNumeros();
    if (!numeros) return;

    const [a, b] = numeros;
    mostrarResultado(a * b);
}

function dividir() {
    const numeros = obtenerNumeros();
    if (!numeros) return;

    const [a, b] = numeros;

    if (b === 0) {
        document.getElementById("resultado").innerText =
            "Error: no se puede dividir entre cero";
    } else {
        mostrarResultado(a / b);
    }
}
function potencia() {
    const numeros = obtenerNumeros();
    if (!numeros) return;

    const [a, b] = numeros;
    mostrarResultado(Math.pow(a, b));
}

function limpiar() {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("resultado").innerText = "Resultado:";
}