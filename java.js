function calculo() {
    const num1 = Number(document.querySelector("#num1").value)
    const num2 = Number(document.querySelector("#num2").value)

    const paragrafo = document.querySelector(".resultado")

    paragrafo.innerHTML = `Resultado: ${num1 * num2}`
}

const button = document.querySelector("button")
button.addEventListener('click', calculo)