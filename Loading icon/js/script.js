const button = document.getElementById("loadBtn");
const overlay = document.getElementById("overlay");
const result = document.getElementById("result");

button.addEventListener("click", function () {

    result.style.display = "none";

    button.disabled = true;
    button.innerText = "Loading...";

    overlay.style.display = "flex";

    setTimeout(function () {

        overlay.style.display = "none";

        result.style.display = "block";

        button.disabled = false;
        button.innerText = "Load Data";

    }, 3000);

});