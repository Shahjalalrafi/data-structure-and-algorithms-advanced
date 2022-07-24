// Quesiton: https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

var minRemoveToMakeValid = function (s) {
    let opening = "("
    let closing = ")"

    let stack = [];
    let arr = s.split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == opening) {
            stack.push(i);
        }else if (arr[i] == closing && stack.length) {
            stack.pop();
        }else if(arr[i] == closing) {
            arr[i] = "";
        }
    }

    while(stack.length) {
        let currentIndex = stack.pop();
        arr[currentIndex] = "";
    }
    return  arr.join("");
};



console.log(minRemoveToMakeValid("lee(t(c)o)de"));


"lee(t(c)o)de"
"ab(c)d"
"ab(c)d"