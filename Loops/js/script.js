function showOutput(content) {
    const output = document.getElementById("output");
    output.innerHTML = content;
    output.classList.remove("show");
    setTimeout(() => {
        output.classList.add("show");
    }, 50);
}


/* FOR LOOP */
function forLoopDemo() {

    let result = "FOR LOOP:\nGenerating prime numbers up to 30\n\n";

    for (let num = 2; num <= 30; num++) {
        let isPrime = true;

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            result += num + " ";
        }
    }

    showOutput(result.replace(/\n/g, "<br>"));
}


/* WHILE LOOP */
function whileLoopDemo() {

    let number = 12345;
    let reversed = 0;

    let result = "WHILE LOOP:\nReversing number 12345\n\n";

    while (number > 0) {
        reversed = reversed * 10 + (number % 10);
        number = Math.floor(number / 10);
    }

    result += "Reversed Number: " + reversed;

    showOutput(result.replace(/\n/g, "<br>"));
}


/* DO WHILE LOOP */
function doWhileDemo() {

    let correctNumber = 7;
    let guesses = [3, 5, 7];
    let i = 0;

    let result = "DO WHILE LOOP:\nNumber Guessing Simulation\n\n";

    do {
        result += "Guess: " + guesses[i] + "\n";

        if (guesses[i] === correctNumber) {
            result += "Correct Guess!";
            break;
        }

        i++;

    } while (i < guesses.length);

    showOutput(result.replace(/\n/g, "<br>"));
}


/* FOR OF LOOP */
function forOfDemo() {

    let sentence = "JavaScript makes web development powerful";
    let words = sentence.split(" ");
    let count = 0;

    let result = "FOR OF LOOP:\nCounting words in sentence\n\n";
    result += "Sentence: " + sentence + "\n\n";

    for (let word of words) {
        count++;
    }

    result += "Total Words: " + count;

    showOutput(result.replace(/\n/g, "<br>"));
}


/* FOR IN LOOP */
function forInDemo() {

    let user = {
        name: "pallavi",
        branch: "ise",
        college: "smvit"
    };

    let result = "FOR IN LOOP:\nConverting object values to uppercase\n\n";

    for (let key in user) {
        result += key + ": " + user[key].toUpperCase() + "\n";
    }

    showOutput(result.replace(/\n/g, "<br>"));
}


/* BREAK DEMO */
function breakDemo() {

    let sum = 0;
    let result = "BREAK DEMO:\nAdding numbers until sum exceeds 50\n\n";

    for (let i = 1; i <= 20; i++) {
        sum += i;

        if (sum > 50) {
            result += "Stopped at i = " + i + "\n";
            break;
        }
    }

    result += "Final Sum: " + sum;

    showOutput(result.replace(/\n/g, "<br>"));
}


/* CONTINUE DEMO */
function continueDemo() {

    let result = "CONTINUE DEMO:\nSkipping multiples of 4\n\n";

    for (let i = 1; i <= 20; i++) {

        if (i % 4 === 0) continue;

        result += i + " ";
    }

    showOutput(result.replace(/\n/g, "<br>"));
}


/* NESTED FOR LOOP */
function nestedLoopDemo() {

    let result = "NESTED FOR LOOP:\nA loop inside another loop.\n\nNumber Pyramid:\n\n";

    for (let i = 1; i <= 5; i++) {

        for (let j = 1; j <= i; j++) {
            result += j + " ";
        }

        result += "\n";
    }

    showOutput(result.replace(/\n/g, "<br>"));
}