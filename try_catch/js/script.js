let firstSubmit = true;
let generatedCaptcha = "";

document.addEventListener("DOMContentLoaded", function () {

    try {

        const form = document.getElementById("loginForm");
        const captchaSection = document.getElementById("captchaSection");
        const captchaInput = document.getElementById("captchaInput");
        const refreshCaptcha = document.getElementById("refreshCaptcha");
        const canvas = document.getElementById("captchaCanvas");

        if (!form || !captchaSection || !captchaInput || !refreshCaptcha || !canvas) {
            throw new Error("Required elements not found in DOM");
        }

        const ctx = canvas.getContext("2d");

        /* ----------------- CAPTCHA GENERATION ----------------- */

        function generateCaptcha() {
            try {
                const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                generatedCaptcha = "";

                for (let i = 0; i < 6; i++) {
                    generatedCaptcha += characters.charAt(
                        Math.floor(Math.random() * characters.length)
                    );
                }

                drawCaptcha();

            } catch (error) {
                alert("Error generating captcha: " + error.message);
            }
        }

        /* ----------------- DRAW CAPTCHA ----------------- */

        function drawCaptcha() {
            try {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                ctx.fillStyle = "#f8f9fc";
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                for (let i = 0; i < generatedCaptcha.length; i++) {

                    const x = 25 + i * 28;
                    const y = 40;

                    ctx.font = "bold 28px Arial";
                    ctx.fillStyle = getRandomColor();

                    ctx.save();
                    ctx.translate(x, y);
                    ctx.rotate((Math.random() - 0.5) * 0.6);
                    ctx.fillText(generatedCaptcha[i], 0, 0);
                    ctx.restore();
                }

                // noise lines
                for (let i = 0; i < 6; i++) {
                    ctx.strokeStyle = getRandomColor();
                    ctx.beginPath();
                    ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
                    ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
                    ctx.stroke();
                }

            } catch (error) {
                alert("Error drawing captcha: " + error.message);
            }
        }

        function getRandomColor() {
            const letters = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        /* ----------------- REFRESH BUTTON ----------------- */

        refreshCaptcha.addEventListener("click", function () {
            try {
                generateCaptcha();
                captchaInput.value = "";
            } catch (error) {
                alert("Error refreshing captcha: " + error.message);
            }
        });

        /* ----------------- FORM SUBMIT ----------------- */

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            try {

                const username = document.getElementById("username").value.trim();
                const password = document.getElementById("password").value.trim();

                if (firstSubmit) {

                    if (username === "" || password === "") {
                        alert("Please enter username and password");
                        return;
                    }

                    captchaSection.style.display = "block";
                    setTimeout(() => {
                        captchaSection.style.opacity = "1";
                    }, 10);

                    generateCaptcha();
                    firstSubmit = false;

                } else {

                    if (captchaInput.value.trim() === "") {
                        alert("Please enter captcha");
                        return;
                    }

                    if (captchaInput.value.trim() === generatedCaptcha) {

                        alert("Submitted successfully");

                        // Reset everything after success
                        form.reset();
                        captchaSection.style.display = "none";
                        captchaSection.style.opacity = "0";
                        firstSubmit = true;

                    } else {

                        alert("Invalid captcha");
                        generateCaptcha();
                        captchaInput.value = "";
                    }
                }

            } catch (error) {
                alert("Something went wrong: " + error.message);
            }
        });

    } catch (error) {
        alert("Initialization error: " + error.message);
    }

});