document.addEventListener("DOMContentLoaded", () => {
  const sidebarToggleBtn = document.querySelector(".sidebar-toggle");
  const sidebar = document.querySelector(".sidebar");

  const toggleSidebar = () => {
    sidebar.classList.toggle("active");
  };

  sidebarToggleBtn.addEventListener("click", toggleSidebar);

  document.addEventListener("click", (event) => {
    const isClickInside =
      sidebar.contains(event.target) || sidebarToggleBtn.contains(event.target);
    if (!isClickInside && sidebar.classList.contains("active")) {
      sidebar.classList.remove("active");
    }
  });
});

// const fetchUsers = async () => {
//   try {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const users = response.json();
//     return users;
//   } catch (error) {
//     console.log(error);
//   }
// };
// const createTable = (users) => {
//   const tableContainer = document.getElementById("table-container");
//   const table = document.createElement("table");
//   const headers = [
//     "id",
//     "title",
//     "price",
//     "description",
//     "category",
//     "image",
//     "rating",
//     "rating-rate",
//     "rating-count",
//   ];
//   const headerRow = table.insertRow();
//   headers.forEach((headerText) => {
//     const header = document.createElement("th");
//     header.textContent = headerText;
//     headerRow.appendChild(header);
//   });
//   users.forEach((item) => {
//     const row = table.insertRow();
//     row.insertCell().textContent = item.id;
//     row.insertCell().textContent = item.title;
//     row.insertCell().textContent = item.price;
//     row.insertCell().textContent = item.description;
//     row.insertCell().textContent = item.category;
//     row.insertCell().textContent = item.image;
//     row.insertCell().textContent = item.rating;
//     row.insertCell().textContent = item.rating.rate;
//     row.insertCell().textContent = item.rating.count;
//   });
//   tableContainer.appendChild(table);
//   table.classList.add("table");
// };
// const finish = async () => {
//   const users = await fetchUsers();
//   if (users) {
//     createTable(users);
//   }
// };
// finish();

const wrapper = document.querySelector("#table-container");

let API_URL = "https://fakestoreapi.com/products";

async function fetchData(api) {
  let getData = await fetch(api);
  getData
    .json()
    .then((res) => createCard(res))
    .catch((err) => console.log(err));
}
fetchData(API_URL);

function createCard(data) {
  let fragment = document.createDocumentFragment();
  data.forEach((el) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${el.image}"/>
      <h4>${el.id}</h4>
      <h3>${el.title}</h3>
      <h3>${el.price}</h3>
      <h3>${el.description}</h3>
      <h3>${el.category}</h3>
      <h3>${el.rating.rate}</h3>
      <h3>${el.rating.count}</h3>
    `;
    fragment.appendChild(card);
  });
  wrapper.appendChild(fragment);
}
