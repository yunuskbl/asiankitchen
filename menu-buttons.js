const categories = ["All", "Korean", "Japan", "Chinese"];

// HTML içinde filter buttonsları oluşturma
const btnContainer = document.getElementById("btn-container");

categories.forEach((category) => {
  const btn = document.createElement("button");
  btn.classList.add("btn", "btn-outline-dark", "btn-item");
  btn.setAttribute("data-id", category);
  btn.textContent = category;
  btnContainer.appendChild(btn);
});
