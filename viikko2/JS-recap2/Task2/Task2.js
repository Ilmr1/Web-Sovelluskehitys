let numbers = [];
for (let i = 0; i < 5; i++) {
    let number = parseInt(prompt(`Enter number ${i + 1}:`));
    numbers.push(number);
}
console.log("Numbers: [" + numbers.join(', ') + "])");
let searchNumber = parseInt(prompt("Enter the number to search:"));
let isFound = numbers.includes(searchNumber);
if (isFound) {
    console.log(`Number ${searchNumber} is found in the array`);
} else {
    console.log(`Number ${searchNumber} is not found in the array`);
}
numbers.pop();
console.log(`Updated Numbers: [${numbers.join(', ')}]`);
numbers.sort((a, b) => a - b);
console.log(`Sorted Numbers: [${numbers.join(', ')}]`);