function charactersInRange(charOne, charTwo) {
    let asciiCodeOne = charOne.charCodeAt(0);
    let asciiCodeTwo = charTwo.charCodeAt(0);
    if (asciiCodeOne > asciiCodeTwo) {
        let temp = asciiCodeOne;
        asciiCodeOne = asciiCodeTwo;
        asciiCodeTwo = temp;
    }

    let result = [];
    let j = 0;
    for (let i = asciiCodeOne + 1; i < asciiCodeTwo; i++, j++) {
        result[j] = String.fromCharCode(i);
    }
    console.log(result.join(" "));
   }

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');