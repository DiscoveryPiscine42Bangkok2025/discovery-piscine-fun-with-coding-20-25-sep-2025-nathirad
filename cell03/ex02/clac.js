setInterval(function() {
    alert("Please, use me...");
}, 30000);

function calculate() {
    const num1 = parseInt(document.getElementById("left").value);
    const num2 = parseInt(document.getElementById("right").value);
    const operator = document.getElementById("operator").value;


    if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
        alert("Error :(");
        console.log("Error :(");
        return;
    }

    let result;
    if (operator === "+") result = num1 + num2;
    if (operator === "-") result = num1 - num2;
    if (operator === "*") result = num1 * num2;

    if (operator === "/") {
        if (num2 === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }
        result = num1 / num2;
    }

    if (operator === "%") {
        if (num2 === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }
        result = num1 % num2;
    }

    alert("Result: " + result);
    console.log("Result:", result);
}