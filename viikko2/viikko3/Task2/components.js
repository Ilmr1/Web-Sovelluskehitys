export const restaurantRow = (restaurant) => {
    const rowElement = document.createElement('tr');
    rowElement.innerHTML = `
    <td>${restaurant.name}</td>
    <td>${restaurant.address}</td>
  `;
    return rowElement;
};

export const restaurantModal = (restaurant, menu) => {
    const { name, address, postalCode, city, phone, company } = restaurant;
    const { courses } = menu;
    let menuHtml = '';
    courses.forEach(course => {
        menuHtml += `<li>${course.name}</li>`;
    });
    const htmlContent = `
    <h2>${name}</h2>
    <p>${address}</p>
    <p>${postalCode}</p>
    <p>${city}</p>
    <p>${phone}</p>
    <p>${company}</p>
    <h3>Menu</h3>
    <ul>
      ${menuHtml}
    </ul>
  `;
    return htmlContent;
};