const menuContainer = document.getElementById("menu-container");
for (let i = 0; i < menu.length; i++) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  menuItem.innerHTML = `
                <img src="${menu[i].img}" alt="${menu[i].title}" />
                <h3>${menu[i].title}</h3>
                <p>${menu[i].desc}</p>
                <p>${menu[i].category}</p>
                <p>$${menu[i].price}</p>
            `;

  menuContainer.appendChild(menuItem);
}
