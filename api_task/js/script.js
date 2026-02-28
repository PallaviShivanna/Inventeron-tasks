const loadBtn = document.getElementById("loadBtn");
const tableBody = document.getElementById("userTable");
const loader = document.getElementById("loader");

loadBtn.addEventListener("click", fetchUsers);

async function fetchUsers() {
    loader.style.display = "flex";
    loadBtn.disabled = true;
    loadBtn.textContent = "Loading...";

    tableBody.innerHTML = "";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Unable to fetch user data.");
        }

        const users = await response.json();

        if (users.length === 0) {
            showMessage("No users found.");
        } else {
            displayUsers(users);
        }

    } catch (error) {
        showMessage("Failed to load data. Please try again.");
    } finally {
        loader.style.display = "none";
        loadBtn.disabled = false;
        loadBtn.textContent = "Load Users";
    }
}

function displayUsers(users) {
    tableBody.innerHTML = "";

    users.forEach(user => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.name}</td>
            <td>
                <a href="mailto:${user.email}" style="color:#2563eb; text-decoration:none;">
                    ${user.email}
                </a>
            </td>
            <td>${user.address.city}</td>
            <td>${user.address.street}</td>
        `;

        tableBody.appendChild(row);
    });
}

function showMessage(message) {
    tableBody.innerHTML = `
        <tr>
            <td colspan="4">
                <div class="empty-message">${message}</div>
            </td>
        </tr>
    `;
}