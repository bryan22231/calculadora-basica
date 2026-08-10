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

function sumar() {
    const numeros = obtenerNumeros();
    if (!numeros) return;

    const [a, b] = numeros;
    document.getElementById("resultado").innerText =
        "Resultado: " + (a + b);
}

function restar() {
    const numeros = obtenerNumeros();
    if (!numeros) return;

    const [a, b] = numeros;
    document.getElementById("resultado").innerText =
        "Resultado: " + (a - b);
}

function multiplicar() {
    const numeros = obtenerNumeros();
    if (!numeros) return;

    const [a, b] = numeros;
    document.getElementById("resultado").innerText =
        "Resultado: " + (a * b);
}

function dividir() {
    const numeros = obtenerNumeros();
    if (!numeros) return;

    const [a, b] = numeros;

    if (b === 0) {
        document.getElementById("resultado").innerText =
            "No se puede dividir para cero";
    } else {
        document.getElementById("resultado").innerText =
            "Resultado: " + (a / b);
    }
}