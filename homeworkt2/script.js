let fullName = 'Anar Gurbanli Ilgar'
// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
let nameArray = fullName.split(' ');

console.log(nameArray);
// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
if (nameArray.length >= 2) {
    let FullName2 = nameArray[1] + ' ' + nameArray[0];
    console.log(FullName2);
} else {
    console.log("NoName");
}
// 3) Alinan yeni arrayi stringe cevirin(join)
let ReversedNameArray = ['Gurbanli', 'Anar'];
let ReversedName = ReversedNameArray.join(' ');

console.log(ReversedNameArray);

let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
        count++;
    }
}

console.log("5 reqemi " + count + " defe tekrarlanir.");
//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(sum);
//6) arrayda tekrar olunan reqemleri artan sira ile duzun
let sortedArr = arr.slice().sort();
let repeateds = [];

for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i] === sortedArr[i + 1] && !repeateds.includes(sortedArr[i])) {
        repeateds.push(sortedArr[i]);
    }
}
console.log(repeateds.join(', '));
//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin()
let Maxarr = Math.max(...arr)
let b = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === Maxarr) {
        b++;
    }
}
console.log(b);
console.log(Maxarr);

//Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
let arrName='Anar';
let c=0
console.log(arrName.length);
for (i=0 ; i < arr.length;i++){
    if (arr[i] === arrName.length) {
        
    }
}
console.log("4 arrayda var");
//arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 2) {
        console.log( arr[i]);
        break;
    }
}
//10) arraydaki en boyuk reqemin ilk indexini tapin
let firstIndex = arr.indexOf(Maxarr);
console.log( firstIndex);
//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
let indexOf4 = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        indexOf4.push(i);
    }
}
console.log( indexOf4.join(', '));
//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin

let minIndex5 = arr.indexOf(5);
let maxIndex5 = arr.lastIndexOf(5);

console.log(minIndex5);
console.log(maxIndex5);

//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
let NewArr = arr.filter(num => num > 2);
let lengthDif = arr.length - NewArr.length;
console.log(lengthDif);
//14) 7 reqeminin indexleri cemini tapin.
let sumOfIndices = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 7) {
        sumOfIndices += i;
    }
}

console.log(sumOfIndices);
//
let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]
// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
let arr3=arr2.filter(item=> item.name[0]==='t');
console.log(arr3);
// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
let d = 0;

for (let item of arr2) {
    if (item.name.startsWith('t') && item.name.endsWith('t')) {
        d++;
    }
}

console.log(d);
// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
let sumOfKey = arr2
    .filter(item => item.name.startsWith('t') && item.name.endsWith('t'))
    .reduce((sum, item) => sum + item.key, 0);
    console.log(sumOfKey);
    //19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
    arr2.forEach(item => {
        if (item.name.endsWith('e')) {
            item.name = "SuperDev";
        }
    });
    
    console.log(arr2);
    // 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
    let maxLength = 0;
let maxKey = null;

arr2.forEach(item => {
    if (item.name.length > maxLength) {
        maxLength = item.name.length;
        maxKey = item.key;
    }
});

console.log( maxKey);
