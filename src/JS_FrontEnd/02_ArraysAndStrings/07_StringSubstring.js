function solve(string, text) {
    if (text.toLowerCase().split(' ').includes(string.toLowerCase())) {
        console.log(`${string}`);
    } else {
        console.log(`${string} not found!`);
    }
}
solve('javascript','JavaScript is the best programming language');
solve('python','JavaScript is the best programming language');