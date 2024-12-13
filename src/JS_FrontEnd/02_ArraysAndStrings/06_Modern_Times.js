function solve(text) {
    let regex = /#[a-zA-z]+/g;
    let match = text.match(regex);
    let cleaned = match.map(str => str.slice(1));
    console.log(cleaned.join('\n'));
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');