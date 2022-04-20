// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False



// Solution:
// complexity o(n)
function ValidAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    let lookup = {}
    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i]
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i]
        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter] -= 1
        }
    }
    return true
}


// Another Anagram Solution
function ValidAnagram(stringA, stringB) {
    let strA = cleanString(stringA);
    let strB = cleanString(stringB);

    let keysOfstrA = Object.keys(strA);
    let keysOfstrB = Object.keys(strB);

    if(keysOfstrA.length !== keysOfstrB.length) {
        return false;
    }

    for(let char in strA) {
        if(strA[char] !== strB[char] ) {
            return false;
        }
    }

    return true;

    // console.log(keysOfstrA, keysOfstrB);
}

// Helper function to clean up string
function cleanString(str) {
    // Remove all the Alpha numaric character.(only contain actual character with lowercase)
    let string = str.replace(/[^\w]/g, "").toLowerCase();
    let words = {};
    for(let char of string) {
        words[char] ? words[char] += 1 : words[char] = 1;
    }


    return words
}

console.log(ValidAnagram("heLlo!!!!", "ohell"))

