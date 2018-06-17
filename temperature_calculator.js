/*
A program to take a temperature in kelvin, manipulate it, and produce an output.
*/

// Forecast for today in Kelvin
const kelvin = 293;

// Forecast for today in Celsius
const celsius = kelvin - 273;

// Forecast for today in Fahrenheit
const fahrenheit = Math.floor(celsius * (9/5) + 32);

// Forecast for today in Newton
const newton = Math.floor(celsius * (33/100));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log(`The temperature is ${newton} degrees Newton.`);