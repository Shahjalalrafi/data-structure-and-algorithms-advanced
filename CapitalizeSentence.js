// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


function capitalize(str) {
    let results = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        let char = str[i];
        let beforeChar = str[i-1];
        if(beforeChar === " ") {
            results += char.toUpperCase();
        }else {
            results += char
        }
    }

    return results;
}


// Another solution
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