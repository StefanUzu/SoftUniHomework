function subtract() {
    const inputOne = document.querySelector('#firstNumber');
    const inputTwo = document.querySelector('#secondNumber');
    const resultElement = document.querySelector('#result');


    const result = Number(inputOne.value) - Number(inputTwo.value);
    resultElement.textContent = result;
}