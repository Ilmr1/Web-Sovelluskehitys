function sortArray(numbers, order) {
    let sortedNumbers;

    if (order === "asc") {
        sortedNumbers = numbers.slice().sort((a, b) => a - b);
    } else if (order === "desc") {
        sortedNumbers = numbers.slice().sort((a, b) => b - a);
    }

    return sortedNumbers;
}

const numbers = [5, 2, 8, 1, 9];
console.log(sortArray(numbers, "asc"));
console.log(sortArray(numbers, "desc"));