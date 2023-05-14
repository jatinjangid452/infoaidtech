function convert() {
	// Get input values
	var inputTemp = document.getElementById("inputTemp").value;
	var inputScale = document.getElementById("inputScale").value;
	var outputScale = document.getElementById("outputScale").value;

	// Check if input temperature is valid
	if (isNaN(inputTemp)) {
		alert("Invalid input temperature");
		return;
	}

	// Perform temperature conversion
	var outputTemp;
	if (inputScale === "celsius") {
		if (outputScale === "celsius") {
			outputTemp = inputTemp;
		} else if (outputScale === "fahrenheit") {
			outputTemp = inputTemp * 9 / 5 + 32;
		} else if (outputScale === "kelvin") {
			outputTemp = Number(inputTemp) + 273.15;
		}
	} else if (inputScale === "fahrenheit") {
		if (outputScale === "celsius") {
			outputTemp = (inputTemp - 32) * 5 / 9;
		} else if (outputScale === "fahrenheit") {
			outputTemp = inputTemp;
		} else if (outputScale === "kelvin") {
			outputTemp = (inputTemp - 32) * 5 / 9 + 273.15;
		}
	} else if (inputScale === "kelvin") {
		if (outputScale === "celsius") {
			outputTemp = inputTemp - 273.15;
		} else if (outputScale === "fahrenheit") {
			outputTemp = (inputTemp - 273.15) * 9 / 5 + 32;
		} else if (outputScale === "kelvin") {
			outputTemp = inputTemp;
		}
	}

	// Display output temperature
	document.getElementById("outputTemp").value = outputTemp.toFixed(2);
}
