function capitalize(str) {
    let splitStr = str.split(" ");

    let wordArr = [];

    for(let i = 0; i< splitStr.length; i++) {
        let excludeFirstLetter = splitStr[i].slice(1);
        let word = splitStr[i][0].toUpperCase().concat(excludeFirstLetter);

        wordArr.push(word);
    }

    return wordArr.join(" ");
}

console.log(capitalize("a short sentence"))
