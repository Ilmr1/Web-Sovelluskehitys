const side1 = parseFloat(prompt("Anna kolmion sivun 1 pituus"));
const side2 = parseFloat(prompt("Anna kolmion sivun 2 pituus"));
const side3 = parseFloat(prompt("Anna kolmion sivun 3 pituus"));

let triangleType;
if (side1 === side2 && side2 === side3) {
    triangleType = "Equilateral";
}
else if (side1 === side2 || side2 === side3 || side1 === side3) {
    triangleType = "Isosceles";
}
else {
    triangleType = "Scalene";
}

document.write("Triangle type is: " + triangleType + "<br>");

