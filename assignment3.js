function convertTemperature() {
    let scale = prompt("Enter temperature scale (C or F):");
    let temp = prompt("Enter the temperature:");
    let convertedTemp;

    if (scale == "C" || scale == "c") {
        convertedTemp = (temp * 9 / 5) + 32;
        console.log("Temperature in Fahrenheit: " + convertedTemp);
        document.getElementById("results").innerHTML = "Temperature in Fahrenheit: " + convertedTemp.toFixed(2);
    } else if (scale == "F" || scale == "f") {
        convertedTemp = (temp - 32) * 5 / 9;
        console.log("Temperature in Celsius: " + convertedTemp);
        document.getElementById("results").innerHTML = "Temperature in Celsius: " + convertedTemp.toFixed(2);
    } else {
        console.log("Invalid scale entered. Use 'C' for Celsius or 'F' for Fahrenheit.");
        document.getElementById("results").innerHTML = "Invalid scale. Please enter C or F.";
    }
}

convertTemperature();
