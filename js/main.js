
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

const inputform = document.querySelector(".form1");
const inputtable = document.querySelector(".table1");

const DATA = [];

inputform.addEventListener("submit", (event) => {
  event.preventDefault();
  let newproduct = {
    id: `id-${new Date().getTime()}`,
    text: inputform.querySelector(".typeproduct").value,
    price: inputform.querySelector(".price").value,
    email: inputform.querySelector(".email").value,
    age: inputform.querySelector(".age").value,
    group: inputform.querySelector(".group").value,
    date: inputform.querySelector(".date").value,
  };
  DATA.push(newproduct);
  createProduct(DATA);
  inputform.reset();
});

function createProduct(data) {
  const tableBody = document.querySelector(".table-body");
  tableBody.innerHTML = "";
  data.forEach((product, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${product.text}</td>
      <td>${product.price}</td>
      <td>${product.email}</td>
      <td>${product.age}</td>
      <td>${product.group}</td>
      <td>${product.date}</td>
      <td><button class="btn btn-danger" onclick="deleteUser(${index})">Delete</button></td>
    `;
    tableBody.appendChild(row);
  });
}

function deleteUser(index) {
  DATA.splice(index, 1);
  createProduct(DATA);
}

