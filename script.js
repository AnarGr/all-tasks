const students = [
    {
        id:1,
        username: 'Anar',
        gender: 'Male',
        age:24
    },
    {
        id:2,
        username: 'Murad',
        gender: 'Male',
        age:27
    },
    {
        id:3,
        username: 'Ilkin',
        gender: 'Male',
        age:18
    },
    {
        id:4,
        username: 'Perviz',
        gender: 'Male',
        age:27
    },
    {
        id:5,
        username: 'Rufat',
        gender: 'Male',
        age:23
    },
    {
        id:6,
        username: 'Narmin',
        gender: 'Female',
        age:20
    },
    {
        id:7,
        username: 'Gulshan',
        gender: 'Female',
        age:30
    },
]

// console only female
const female = students.filter(student => student.gender === 'Female');
console.log(female);

// console only age greater than 22
const studentgreaters22 = students.filter(student => student.age >22);
console.log(studentgreaters22);
// console sum of all students
function calc(anystudents) {
            let sum = 0
            anystudents.map(student => sum += student.age)
            return sum
     
    }
console.log(calc(students));

        // console index of students whose id is equal 3
        const indexst = students.findIndex(student => student.id === 3);
console.log(indexst);
// console youngest student in group

const arr = [8, 2, 4, true, undefined, 'string', 9, false, 9, 9, 8]
// console sum of number values
// let sum = 0;

// for (const value of arr) {
//   if (typeof value === 'number') {
//     sum += value;
//   }
// }

// console.log(sum); 
function calc(arr) {
    let sum=0
    arr.map(value =>{
        if(typeof value === 'number') {
            return sum+=value
        }
    } )
    return sum
}
console.log(calc(arr));
// console length of falsy values
let falsyCount = 0;

for (const value of arr) {
  if (!value) {
    falsyCount++;
  }
}
console.log(falsyCount); 
