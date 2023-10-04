// pass by value => KLD number, boolean, string, 
// pass by reference => array, object, function

// let number_1 = 10;
// let number_2 = number_1;
// number_2 = 100;
// console.log(number_1);
// console.log(number_2);

// let jobs_1 = ["Java", "React", "Vuejs"];
// let jobs_2 = [...jobs_1];
// jobs_2[2] = 'Angular'

// console.log(jobs_1);
// console.log(jobs_2);



let std_1 = {
    "name": "khoa",
    "age": 18,
    "gender": 'male',
    "language": {
        "name": "English",
        "level": "B1"
    }
}

let std_2 = JSON.parse(JSON.stringify(std_1))
// let std_2 = {
//     ...std_1,
//     language: {
//         ...std_1.language,
//         level: "B2"
//     },
//     name: 'pháp'
// };
// std_2.language.level = "B2"
// std_2.name = 'pháp'
// console.log(std_1);
// console.log(std_2);

// object => json => object

let numbers = [4, 2, 35, 45]

function total(n1, n2, n3) {
    console.log(n1 + n2 + n3)
}
total(...numbers)
// let max = Math.max(...numbers)
// console.log(max);
// cái này nói về init? của useReducer
let result = numbers.reduce(function (total, n) {
    console.log(total);
    return total + n;
}, '')
console.log(result);