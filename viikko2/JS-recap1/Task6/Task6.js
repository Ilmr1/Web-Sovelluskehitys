let num = parseInt(prompt("Enter a positive integer:"));

let multiplicationTable = "";

for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
        let product = i * j;

        multiplicationTable += product + "\t";

}
    multiplicationTable += "\n";

}

document.write(`<pre>${multiplicationTable}</pre>`);