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
    createTable();
}

async function getDailyMenu(id) {
    const data = await fetchData(`${baseUrl}/daily/${id}/fi`);
    return data;
}

function createTable() {
    restaurants.forEach((restaurant) => {
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