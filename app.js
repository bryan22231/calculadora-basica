function obtenerNumeros() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    return [numero1, numero2];
}

function sumar() {
    const [a, b] = obtenerNumeros();
    document.getElementById("resultado").innerText = "Resultado: " + (a + b);
}

function restar() {
    const [a, b] = obtenerNumeros();
    document.getElementById("resultado").innerText = "Resultado: " + (a - b);
}

function multiplicar() {
    const [a, b] = obtenerNumeros();
    document.getElementById("resultado").innerText = "Resultado: " + (a * b);
}

function dividir() {
    const [a, b] = obtenerNumeros();

    if (b === 0) {
        document.getElementById("resultado").innerText =
            "No se puede dividir para cero";
    } else {
        document.getElementById("resultado").innerText =
            "Resultado: " + (a / b);
    }
}