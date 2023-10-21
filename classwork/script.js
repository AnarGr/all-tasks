// const arr1 =['Ulfat', 'Rovshan', 'Ulfat', '9', undefined, 'ulfat', ]
// const arr2=['some', '7','91', false, 'Murad']
// console.log(arr1.concat (true, false, 'null'));


// console.log(arr2.concat(arr1));

// console.log(arr1.slice(1 , 6));
// console.log(arr2.filter((item)=>  item=== false));

// console.log(arr1.filter((item)=> item==='Ulfat'));
// console.log(arr1.find((item)=>item==='Ulfat'));
// console.log(arr1.findIndex(item=>item==='9'));
// console.log(arr1.findLastIndex(item=>item==='9'));
// console.log(arr2.indexOf('Murad'));
// console.log(arr2.lastIndexOf('Murad'));
// let username ='kEnaN'
// console.log(username.slice(0, 1).toUpperCase() + username.slice(1).toLowerCase());
// console.log(username.slice(0, 1).toLowerCase() + 'A' + username.slice(2).toLowerCase());
// const fullName='Fuad Fuadli'
// console.log(fullName.split(' '));
// const list = ['Leman' , 'Oruc']
// console.log(list.join(' '));

// console.log(arr1.includes('Rovshan'));

// if(arr2.includes('92')){
//     console.log('it is already exits');

// } else {
//  arr2.push('92')
// }
// console.log(arr2)

const qrup1 = [
    {
        name: 'perviz',
        age: 27
    },
    {
        name:"Murad",
        age: 27
    },
    {
        name:'rufet',
        age:23
    },
    {
        name:'narmin',
        age:20
    },
    {
        name:"gulshan",
        age:30
    },
    {
        name:'Anar',
        age:24
    },
    {
        name:'Ilkin',
        age:18
    },
    {
        name:'Fuad',
        age:18
    },
]
    function calcAvg (anygroup) {
    let sum=0
    anygroup.map(item => sum +=item.age)
    return sum
    }
    console.log(calcAvg(qrup1));

    function calcm (anygroup) {
    let mult=1
    anygroup.map(item => mult *= item.age)
    return mult

    }
    console.log(calcm(qrup1));