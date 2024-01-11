function showTable() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => createTable(data));
}

function createTable(data) {
  var table = "<table border=1>";
  table += `<tr>
                <th>ID</th>
                <th colspan="5">Данные</th>
              </tr>`;
  table += `<tr>
                <th></th>
                <th>Название</th>
                <th>Изображение</th>
                <th>Цена</th>
                <th>Категория</th>
                <th>Описание</th>
              </tr>`;
  var tr = "";
  for (let i = 0; i < data.length; i++) {
    tr += "<tr>";
    tr += `<td>${data[i].id}</td>`;
    tr += `<td>${data[i].title}</td>`;
    tr += `<td><image src="${data[i].image}" width="100" height="100"></td>`;
    tr += `<td>${data[i].price}</td>`;
    tr += `<td>${data[i].category}</td>`;
    tr += `<td>${data[i].description}</td>`;
    tr += `<td>${data[i].rating.rate}</td>`;
    tr += "</tr>";
  }
  table += tr + "</table>";
  document.getElementById("goods").innerHTML = table;
  // document.body.innerHTML += table;
}

function loadGoods() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => createTableF(data));
}
function createTableF(data) {
  var out = "";
  var table = "<table border=1>";
  table += `<tr>
                <th>ID</th>
                <th colspan="5">Данные</th>
              </tr>`;
  table += `<tr>
                <th></th>
                <th>Название</th>
                <th>Изображение</th>
                <th>Цена</th>
                <th>Категория</th>
                <th>Описание</th>
              </tr>`;
  var tr = "";
  var cat = document.getElementById("categoryid");
  var min = document.getElementById("minprice");
  var max = document.getElementById("maxprice");
  var minprice = Number(min.value);
  var maxprice = Number(max.value);

  console.log(cat.value);
  categoryF = "";
  console.log(data.length);
  console.log(minprice);
  console.log(maxprice);

  for (let i = 0; i < data.length; i++) {
    if (
      (data[i].category === cat.value || cat.value === "hide") &&
      (Number(data[i].price) >= minprice || minprice === 0) &&
      (Number(data[i].price) <= maxprice || maxprice === 0)
    ) {
      tr += "<tr>";
      tr += `<td>${data[i].id}</td>`;
      tr += `<td>${data[i].title}</td>`;
      tr += `<td><image src="${data[i].image}" width="100" height="100"></td>`;
      tr += `<td>${data[i].price}</td>`;
      tr += `<td>${data[i].category}</td>`;
      tr += `<td>${data[i].description}</td>`;
      tr += `<td>${data[i].rating.rate}</td>`;
    }
  }

  table += tr + "</table>";
  document.getElementById("goods").innerHTML = table;
  // document.body.innerHTML += table;
}
