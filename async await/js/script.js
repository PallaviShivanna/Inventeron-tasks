const loadBtn = document.getElementById("loadUsers");
const userContainer = document.getElementById("userContainer");
const statusText = document.getElementById("status");

async function fetchUsers() {
    try {
        statusText.textContent = "Loading users...";

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const users = await response.json();

        displayUsers(users);

        statusText.textContent = "Users loaded successfully!";
    } catch (error) {
        statusText.textContent = "Error: " + error.message;
    }
}

function displayUsers(users) {
    userContainer.innerHTML = "";

    users.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("user-card");

        card.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>City:</strong> ${user.address.city}</p>
        `;

        userContainer.appendChild(card);
    });
}

loadBtn.addEventListener("click", fetchUsers);