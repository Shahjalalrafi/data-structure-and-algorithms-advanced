function ValidAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    let lookup = {}
    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i]
        {if (lookup[letter]) {
            lookup[letter] += 1
        } else {
            lookup[letter] = 1
        }}
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
ValidAnagram("hello", "ohell")

