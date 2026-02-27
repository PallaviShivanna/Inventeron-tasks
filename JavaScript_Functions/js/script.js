// Smooth animated output
function displayOutput(message) {
    const output = document.getElementById("output");

    output.classList.add("fade-out");

    setTimeout(() => {
        output.innerText = message;
        output.classList.remove("fade-out");
        output.classList.add("fade-in");
    }, 200);
}


// 1️⃣ Function Declaration
function functionDeclarationDemo() {
    function greet() {
        return "This is a Function Declaration.";
    }
    displayOutput(greet());
}


// 2️⃣ Function Expression
function functionExpressionDemo() {
    const greet = function() {
        return "This is a Function Expression.";
    };
    displayOutput(greet());
}


// 3️⃣ Arrow Function
function arrowFunctionDemo() {
    const greet = () => {
        return "This is an Arrow Function.";
    };
    displayOutput(greet());
}


// 4️⃣ Parameters Demo
function parametersDemo() {
    function multiply(a, b) {
        return a * b;
    }
    const result = multiply(6, 4);
    displayOutput("6 × 4 = " + result);
}


// 5️⃣ Callback Demo
function callbackDemo() {

    function processUser(name, callback) {
        return callback(name);
    }

    function welcomeUser(name) {
        return "Welcome " + name + " (using Callback)";
    }

    const message = processUser("Pallavi", welcomeUser);
    displayOutput(message);
}