function vaxTrail(object) {

    let result = {}
    for(let key in object) {
        for(let i = 0; i< object[key].length; i++) {
            if(object[key][i].age > 20 && 30 >= object[key][i].age)  {
                result[key] = `will have person with age 20-30 with temperature ${object[key][i].temperature < 100 ? "less than 100" : "greater than equal 100"}`
            }else if(object[key][i].age > 30 && 40 >= object[key][i].age) {
                result[key] = `will have person with age 31-40 with temperature ${object[key][i].temperature < 100 ? "less than 100" : "greater than equal 100"}`
            }else if(object[key][i].age > 40 && 50 >= object[key][i].age) {
                result[key] = `will have person with age 41-50 with temperature ${object[key][i].temperature < 100 ? "less than 100" : "greater than equal 100"}`
            }else if((object[key][i].age > 50)) {
                result[key] = `will have any range of age with temperature ${object[key][i].temperature < 100 ? "less than 100" : "greater than equal 100"}`
            }
        }
    }

    return result
}

console.log(vaxTrail({
    A: [
        { name: 'Biplap', age: 32, temperature: 98 },
        { name: 'sunil', age: 21, temperature: 98 }
    ]
    ,
    B:
        [{ name: 'Kabir', age: 36, temperature: 99 }, {
            name: 'Rahul', age: 37,
            temperature: 99
        }]
    ,
    C: [{ name: 'Paul', age: 42, temperature: 98 }, {
        name: 'Kat', age: 41,
        temperature: 98
    }]
    ,
    D: [{ name: 'Nayem', age: 50, temperature: 100 }, {
        name: 'Sabnaj', age: 51,
        temperature: 101
    }]
}))