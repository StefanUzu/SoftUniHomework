function solve(text) {
    let array = text.split(/(?=[A-Z])/);
    console.log(array.join(", "));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');