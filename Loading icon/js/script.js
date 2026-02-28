const fetchBtn = document.getElementById("fetchBtn");
const loaderOverlay = document.getElementById("loaderOverlay");
const result = document.getElementById("result");

fetchBtn.addEventListener("click", fetchData);

async function fetchData() {

    fetchBtn.disabled = true;
    loaderOverlay.classList.remove("hidden");
    result.classList.remove("show");
    result.innerHTML = "";

    try {

        const randomId = Math.floor(Math.random() * 10) + 1;
        
        await new Promise(resolve => setTimeout(resolve, 1500));

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${randomId}`
        );

        if (!response.ok) {
            throw new Error("Network error");
        }

        const data = await response.json();

        loaderOverlay.classList.add("hidden");
        fetchBtn.disabled = false;

        result.innerHTML = `
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>City:</strong> ${data.address.city}</p>
            <p><strong>Company:</strong> ${data.company.name}</p>
        `;

        result.classList.add("show");

    } catch (error) {

        loaderOverlay.classList.add("hidden");
        fetchBtn.disabled = false;

        result.innerHTML = `<p class="error">Failed to fetch data</p>`;
        result.classList.add("show");

        console.error(error);
    }
}