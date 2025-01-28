function revertirTexto() {
    // Obtener el valor del texto ingresado
    const inputText = document.getElementById("inputText").value;

    // Invertir el texto
    const reversedText = inputText.split("").reverse().join("");

    // Mostrar el texto invertido en el área correspondiente
    document.getElementById("outputText").value = reversedText;
}