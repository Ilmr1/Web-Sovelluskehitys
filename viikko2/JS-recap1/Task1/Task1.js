const celsisu = prompt("Anna lämpötila celsiuksina");
const fahrenheit = celsisu * 1.8 + 32;
const kelvin = parseFloat(celsisu) + 273.15;

document.write("Lämpötila fahrenheitteina on: " + fahrenheit + "<br>");
document.write("Lämpötila kelvineinä on: " + kelvin + "<br>");
