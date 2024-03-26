function sortArray(numbers) {
    console.log("Original Array: ", numbers);

    let sortedNumbers = numbers.slice().sort((a, b) => a - b);

    console.log("Sorted Array: ", sortedNumbers);

    return sortedNumbers;
}

sortArray([5, 3, 9, 1, 6]);