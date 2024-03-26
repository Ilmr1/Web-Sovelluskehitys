async function fetchData(url = '', options = {}) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

async function fetchAndDisplayRestaurants() {
    try {
        const url = 'https://your-schools-restaurant-api-endpoint';
        const restaurants = await fetchData(url);
        const tableElement = document.querySelector('table');
        for (let restaurant of restaurants) {
            const trElement = document.createElement('tr');
            const nameTdElement = document.createElement('td');
            nameTdElement.textContent = restaurant.name;
            const addressTdElement = document.createElement('td');
            addressTdElement.textContent = restaurant.address;
            trElement.appendChild(nameTdElement);
            trElement.appendChild(addressTdElement);
            trElement.addEventListener('click', async () => {
                const menuUrl = `https://your-schools-restaurant-api-endpoint/${restaurant.id}/menu`;
                const menu = await fetchData(menuUrl);
                const dialogElement = document.querySelector('dialog');
                dialogElement.innerHTML = `
          <h2>${restaurant.name}</h2>
          <p>Address: ${restaurant.address}</p>
          <h3>Menu</h3>
          <ul>${menu.map(item => `<li>${item.name}: ${item.price}</li>`).join('')}</ul>
        `;
                dialogElement.showModal();
            });
            tableElement.appendChild(trElement);
        }
    } catch (error) {
        console.error('There has been a problem with your fetch operation: ', error);
    }
}

fetchAndDisplayRestaurants();