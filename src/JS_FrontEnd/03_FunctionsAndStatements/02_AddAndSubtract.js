function addAndSubtract(one, two, three) {

    return subtract(sum(one, two), three);
    function sum(one, two) {
        return one + two;
    }
    function subtract(one, two) {
        return one - two;
    }
}

console.log(addAndSubtract(23, 6, 10));
console.log(addAndSubtract(1, 17, 30));
console.log(addAndSubtract(42, 58, 100));