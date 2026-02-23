// Set max date for DOB to today's date 
const dobInput = document.getElementById("dob");
dobInput.max = new Date().toISOString().split("T")[0];

// Get form and success message container
const form = document.getElementById("registrationForm");
const successMessage = document.getElementById("successMessage");

// Restrict First Name & Last Name to letters only
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");

[firstName, lastName].forEach(field => {
    field.addEventListener("input", function () {
        this.value = this.value.replace(/[^a-zA-Z\s]/g, "");
        validateField(this); // Live validation
    });
});

// Restrict Contact to numbers only
const contact = document.getElementById("contact");

contact.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "");
    validateField(this); // Live validation
});

// Live validation for other fields
const email = document.getElementById("email");
const gender = document.getElementById("gender");
const dob = document.getElementById("dob");

email.addEventListener("input", () => validateField(email));
gender.addEventListener("change", () => validateField(gender));
dob.addEventListener("change", () => validateField(dob));

// Form submit event
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Clear previous errors
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    document.querySelectorAll("input, select").forEach(el => {
        el.classList.remove("input-error");
        el.classList.remove("input-success");
    });

    // Validate all fields
    [firstName, lastName, email, contact, gender, dob].forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });

    // If valid, show success message
    if (isValid) {
        successMessage.style.display = "block";
        successMessage.textContent = "Registration Successful!";
        //form.reset();

        document.querySelectorAll("input, select").forEach(el => {
            el.classList.remove("input-success");
        });
    } else {
        successMessage.style.display = "none";
    }
});

// Validation function
function validateField(field) {

    const errorElement = document.getElementById(field.id + "Error");
    field.classList.remove("input-error", "input-success");

    // Required field check
    if (field.value.trim() === "") {
        errorElement.textContent = "This field is required";
        field.classList.add("input-error");
        return false;
    }

    // Email validation
    if (field.id === "email") {
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(field.value.trim())) {
            errorElement.textContent = "Enter a valid email address";
            field.classList.add("input-error");
            return false;
        }
    }

    // Contact validation
    if (field.id === "contact") {
        const contactPattern = /^[0-9]{10}$/;
        if (!contactPattern.test(field.value.trim())) {
            errorElement.textContent = "Contact must be exactly 10 digits";
            field.classList.add("input-error");
            return false;
        }
    }

    // If valid
    errorElement.textContent = "";
    field.classList.add("input-success");
    return true;
}
