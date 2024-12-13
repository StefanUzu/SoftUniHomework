function solve(array) {
    let arrayResolved = [];
    array.sort((a, b) => a - b);
    //console.log(array.join(" "));
    while (array.length > 1) {
        arrayResolved.push(array.shift());
        arrayResolved.push(array.pop());
        // console.log(array.join(" "));
        // console.log(arrayResolved);
    }
    if(array.length === 0){
        return arrayResolved;
    }
    arrayResolved.push(array.pop())
    return arrayResolved;
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
// -3,  1, 18,  3, 31, 48, 52, 56, 63, 65