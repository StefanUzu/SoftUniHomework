function solve() {
    const inputOne = document.querySelector('#text').value.toLowerCase().split(' ');
    const inputTwo = document.querySelector('#naming-convention').value.toLowerCase();
    const resultElement = document.querySelector('#result');
    let result;
    if (inputTwo === 'camel case') {
        result = inputOne[0] + inputOne.slice(1).map(word => word[0].toUpperCase() + word.slice(1)).join('');
    } else if (inputTwo === 'pascal case') {
        result = inputOne.map(word => word[0].toUpperCase() + word.slice(1)).join('');
    } else {
       result = "Error!"
    }
    resultElement.textContent = result;
}