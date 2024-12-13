function solve(array, rotationCount) {
    for (let i = 0; i < rotationCount; i++) {
        array.push(array.shift());
    }
    console.log(array.join(' '));
}
solve([2, 4, 15, 31], 5);