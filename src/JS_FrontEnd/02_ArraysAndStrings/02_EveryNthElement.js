function solve(array, n) {
    let printArray = [];
    for (let i = 1; i <= array.length; i+=n) {
        if (i / n !== 0) {
            printArray.push(array[i-1]);
        }
    }
    //printArray.forEach((el, i) => {console.log(el)});
    return printArray;
}
solve([51, 47, 32, 61, 21], 2);