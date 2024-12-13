function oddAndEvenSum(str) {
    let oddSum = 0, evenSum = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i)/2 === 0) {
            evenSum += str.charAt(i);
        } else {oddSum += str.charAt(i);}
    }
    let result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    return result;
}
console.log(oddAndEvenSum(123456));
console.log(oddAndEvenSum(3495892137259234));