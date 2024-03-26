let numbers = [];
let input;
do {
    input = prompt("Enter a number (or 'done' to finish): ");
    if (input !== 'done') {
        numbers.push(parseInt(input));
    }
} while (input !== 'done');

let evenNumbers = [];
for (let number of numbers) {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
}
if (evenNumbers.length > 0){
    document.write("Even numbers: " + evenNumbers.join(", "));
} else {
    document.write("No even numbers");
}