const fromDropDown = document.getElementById("from-temp-select");
const toDropDown = document.getElementById("to-temp-select");

const temps = ["Celsius", "Fahrenheit", "Kelvin"];

temps.forEach((temp) => {
    const option = document.createElement("option");
    option.value = temp;
    option.text = temp;
    fromDropDown.add(option);
});

temps.forEach((temp) => {
    const option = document.createElement("option");
    option.value = temp;
    option.text = temp;
    toDropDown.add(option);
});

// Setting default values
fromDropDown.value = "Celsius";
toDropDown.value = "Fahrenheit";

let convertTemp = () => {
    const temp = document.querySelector("#temp").value;
    const fromTemp = fromDropDown.value;
    const toTemp = toDropDown.value;
    const result = document.querySelector("#result");
    let converetedValue = 0;

    if (fromTemp === "Celsius" && toTemp === "Fahrenheit"){
        converetedValue = (temp*1.8) + 32;
    }
    else if (fromTemp === "Celsius" && toTemp === "Kelvin"){
        converetedValue = (temp*1) + 273.15;
    }
    else if (fromTemp === "Fahrenheit" && toTemp === "Celsius"){
        converetedValue = (temp-32)/1.8;
    }
    else if (fromTemp === "Fahrenheit" && toTemp === "Kelvin"){
        converetedValue = (temp-32)/1.8 + 273.15;
    }
    else if (fromTemp === "Kelvin" && toTemp === "Celsius"){
        converetedValue = (temp*1) - 273.15;
    }
    else if (fromTemp === "Kelvin" && toTemp === "Fahrenheit"){
        converetedValue = (temp-273.15)*1.8 + 32;
    }
    else if (fromTemp === toTemp){
        converetedValue = temp*1;
    }
    result.innerHTML = `${temp}° ${fromTemp} = ${converetedValue.toFixed(2)}° ${toTemp}`;
};

document.querySelector("#convert").addEventListener("click", convertTemp);
window.addEventListener("load", convertTemp);