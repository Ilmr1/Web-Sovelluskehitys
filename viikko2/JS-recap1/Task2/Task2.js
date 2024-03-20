let point1 = prompt("Anna ensimmäisen pisteen x-koordinaatti").split(',').map(parseFloat);
let point2 = prompt("Anna ensimmäisen pisteen y-koordinaatti").split(',').map(parseFloat);

let distance = Math.sqrt((point2 - point1)^2 + (point2 - point1)^2)
document.write("Pisteiden välinen etäisyys on: " + distance + "<br>");