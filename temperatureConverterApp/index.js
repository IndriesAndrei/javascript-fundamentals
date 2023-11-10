let temp = 32;

function toCelsius(temp) {
    return (temp - 32) * (5/9);
}

function toFahrenheit(temp) {
    return temp * 9 / 5 + 32;
}

document.getElementById("submitButton").onclick = function() {
    let temp;

    if (document.getElementById("celsiusButton").checked) {
        temp = document.getElementById("textBox").value; // string
        // convert string to number
        temp = Number(temp); 
        temp = toCelsius(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°C";
    } else if (document.getElementById("fahrenheitButton").checked) {
        temp = document.getElementById("textBox").value; // string
        // convert string to number
        temp = Number(temp); 
        temp = toFahrenheit(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°F";
    } else {
        document.getElementById("tempLabel").innerHTML = "Please select a unit";
    }
}