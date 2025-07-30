function convertCtoF() {
  let celsius = prompt("Enter temperature in Celsius:");
  if (celsius !== null && !isNaN(celsius) && celsius.trim() !== "") {
    let f = (parseFloat(celsius) * 9 / 5) + 32;
    document.getElementById("result").innerHTML = `<p>${celsius}°C = ${f.toFixed(1)}°F</p>`;
  } else {
    document.getElementById("result").innerHTML = `<p>Please enter a valid number.</p>`;
  }
}

function convertFtoC() {
  let fahrenheit = prompt("Enter temperature in Fahrenheit:");
  if (fahrenheit !== null && !isNaN(fahrenheit) && fahrenheit.trim() !== "") {
    let c = (parseFloat(fahrenheit) - 32) * 5 / 9;
    document.getElementById("result").innerHTML = `<p>${fahrenheit}°F = ${c.toFixed(1)}°C</p>`;
  } else {
    document.getElementById("result").innerHTML = `<p>Please enter a valid number.</p>`;
  }
}

function generateTable() {
  let tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  for (let c = 0; c <= 100; c += 10) {
    let f = (c * 9 / 5) + 32;
    let row = `<tr><td>${c}°C</td><td>${f.toFixed(1)}°F</td></tr>`;
    tableBody.innerHTML += row;
  }
}
``
