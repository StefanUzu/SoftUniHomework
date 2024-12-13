function sumDigits(number) {
    let sum = 0;
    let digitsCount = number.toString().length;
    for (let i = 0; i < digitsCount; i++) {
        sum += number/(10*(digitsCount - i - 1));
    }
    return sum;
}

console.log(sumDigits(123456));
