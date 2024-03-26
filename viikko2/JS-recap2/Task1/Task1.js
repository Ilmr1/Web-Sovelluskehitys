let fruits = ["Apple", "Banana", "Orange", "Grape", "Kiwi"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[2]);

console.log(fruits[fruits.length - 1]);
let vegetables = [];
for (let i = 0; i < 3; i++) {
    let vegetable = prompt("Enter a vegetable:");
    vegetables.push(vegetable);
}
console.log(vegetables);
console.log(vegetables.length);