function solve(words, sentence) {
    let wordsArray = words.split(', ');
    let hiddenWord = "";
    for (let i = 0 ; i < wordsArray.length; i++) {
        for (let j = 0; j < wordsArray[i].length; j++) {
            hiddenWord += '*';
        }
        sentence = sentence.replace(hiddenWord, wordsArray[i]);
        hiddenWord = "";
    }
    return sentence;
}

console.log(solve('great','softuni is ***** place for learning new programming languages' ))
console.log(solve('great, learning','softuni is ***** place for ******** new programming languages'
))