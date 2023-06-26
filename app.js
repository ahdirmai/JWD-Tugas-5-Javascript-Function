var data = [];

function show() {
  var dataTable = document.getElementById("data-table");
  dataTable.innerHTML = "";

  //   data.forEach((data) => {});

  for (let index = 0; index < data.length; index++) {
    var btnEdit =
      "<a href='#' onclick='edit(" +
      index +
      ")' class='btn btn-warning'>Edit </a>";
    var btnDelete =
      "<a href='#' onclick='deleteData(" +
      index +
      ")' class='btn btn-danger ms-2'>Delete </a>";

    dataTable.innerHTML +=
      "<tr> <th scope='row'>" +
      (index + 1) +
      "</th><td class='text-center'>" +
      data[index] +
      "</ td><td>" +
      btnEdit +
      btnDelete;
    ("</td></tr>");
  }
}

function create() {
  var input = document.querySelector("input[name=name]");
  data.push(input.value);
  input.value = "";
  show();
}

function edit(id) {
  var newData = prompt("Nama Barang", data[id]);
  data[id] = newData;
  show();
}

function deleteData(id) {
  data.splice(id, 1);
  show();
}

show();
