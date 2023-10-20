//Task7

const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"];

// 1. Console values from "Rufet" to "Fuad"
console.log(arr2.slice(2, 7));

// 2. Add "Rovshen" between "Gulshen" and "Nermin"
arr2.splice(5, 0, "Rovshen");

// 3. Reverse "arr2"
arr2.reverse();

// 4. Sort "arr2" ascending
arr2.sort();

// 5. Console each name with a for loop
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

// 6. Console only names which are "Anar"
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === "Anar") {
    console.log(arr2[i]);
  }
}

// 7. Console all names where the name is "Anar" and change it to "Perviz"
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === "Anar") {
    arr2[i] = "Perviz";
  }
}

// 8. Console the second to last value of arr2
console.log(arr2[arr2.length - 2]);

// 9. Console the length of arr2
console.log(arr2.length);