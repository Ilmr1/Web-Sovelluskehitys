import { restaurantRow, restaurantModal } from './components.js';
import { baseUrl } from './variables.js';
import { fetchData } from './utils.js';

const restaurants = [];

const table = document.querySelector("table");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

async function getRestaurants() {
    const data = await fetchData(baseUrl);
    data.forEach((restaurant) => {
        restaurants.push(restaurant);
    });
    restaurants.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
    const type = document.getElementById('restaurantType').value;
    createTable(type);
}

document.getElementById('restaurantType').addEventListener('change', (event) => {
    const type = event.target.value;
    createTable(type);
});

async function getDailyMenu(id) {
    const data = await fetchData(`${baseUrl}/daily/${id}/fi`);
    return data;
}

function createTable(type = 'all') {
    // clear the table first
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    let filteredRestaurants = restaurants;

    if (type !== 'all') {
        filteredRestaurants = restaurants.filter(restaurant => restaurant.company === type);
    }

    if (filteredRestaurants.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="2">No restaurants found for ${type}</td>`;
        table.appendChild(row);
    } else {
        filteredRestaurants.forEach((restaurant) => {
            const row = restaurantRow(restaurant);
            row.addEventListener("click", async () => {
                document.querySelectorAll("tr").forEach((row) => {
                    row.classList.remove("highlight");
                });
                row.classList.add("highlight");
                modal.style.display = "block";

                const modalContent = document.querySelector(".modal-content");

                while (modalContent.firstChild) {
                    modalContent.removeChild(modalContent.firstChild);
                }

                const courses = await getDailyMenu(restaurant._id);
                const htmlContent = restaurantModal(restaurant, courses);
                modalContent.innerHTML = htmlContent;
            });

            table.appendChild(row);
        });
    }

    span.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

getRestaurants();