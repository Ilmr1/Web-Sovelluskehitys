let num =parseInt(prompt("Enter a positive integer:"));

let sum = 0;

for (let i= 1; i <= num; i++) {
    sum += i;
}
document.write("Sum of the first " + num + " numbers is: " + sum + "<br>")