// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False



function ValidAnagram(str1, str2) {
    if(str1.length !== str2.length) {
        return false
    }

    let lookup = {}
    for(let i = 0; i< str1.length; i++) {
        let letter = str1[i]
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }

    for(let i = 0; i< str2.length; i++) {
        let letter = str2[i]
        if(!lookup[letter]) {
            return false
        }else {
            lookup[letter] -= 1
        }
    }
    return true
}

// complexity o(n)
console.log(ValidAnagram("hello", "ohell"))

