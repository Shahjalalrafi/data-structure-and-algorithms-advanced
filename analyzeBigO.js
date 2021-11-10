const myObejct = {
    Channel: "CODE ABC",
    Instructor: "Shahjalal rafi",
    videos: [4, 6, 7, 9]
}

console.log(myObejct.hasOwnProperty("Instructor"))

let myArray = [ 'hello', "bello", 'cello', "dello"]      

console.log(myArray[3])





function uniqueName(arr) {
    let uniqueName = []
    for(let i = 0; i< arr.length; i++) { //n2
        let ele = arr[i]
        if(!uniqueName.includes(ele)) {
            uniqueName.push(ele)
        }
    }
    return uniqueName //n
}

// time complexity == n2
// space complexity == n


let nameArray = ["rafi", "tasib", "rakib", "rafi", "tasib", "tawrat"]

uniqueName(nameArray)

