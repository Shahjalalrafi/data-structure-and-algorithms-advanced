// question: https://leetcode.com/problems/valid-parentheses/

var isValid = function (s) {
    if (s.length === 0 ) return false;
    const expectedParentheses = {
        "(": ")",
        "{": "}",
        "[": "]",
    }

    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (expectedParentheses[s[i]]) {
            stack.push(s[i]);
        } else {
            let leftBracket = stack.pop();
            let currectBracket = expectedParentheses[leftBracket];
            if(currectBracket !== s[i]) return false;
        }
    }

    return stack.length === 0;
};

console.log(isValid("{[]{}()}"));