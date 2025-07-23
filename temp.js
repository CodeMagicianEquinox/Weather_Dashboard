// Assignment: Convert Celsius to Fahrenheit
function convertTemp() {
  let temperature = prompt("Enter temperature in Celsius");

  if (temperature !== null && !isNaN(temperature) && temperature.trim() !== "") {
    let fahrenheit = (parseFloat(temperature) * 9 / 5) + 32;

    console.log(`${temperature}°C is ${fahrenheit.toFixed(1)}°F`);
    document.getElementById("result").innerHTML += 
      `<li class="item">${temperature}°C is ${fahrenheit.toFixed(1)}°F</li>`;
  } else {
    document.getElementById("result").innerHTML += 
      `<li class="item">Please enter a valid number.</li>`;
  }
}
