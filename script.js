const table = document.getElementsByTagName("tbody")[0];
const form = document.getElementsByClassName("form")[0];
form.addEventListener("submit", adddatatotable);

function adddatatotable(e) {
  e.preventDefault();
  getdata();
  form.reset();
}

function getdata() {
  const title1 = document.getElementById("input1").value;
  const description = document.getElementById("Description").value;

  const data = {
    title1,
    description,
  };
  adddata(data);
}

function adddata(add) {
  table.innerHTML += `
      <tr>
        <th><input id="checkbox" type="checkbox" name="checked"></th>
        <th>${add.title1}</th>
        <th><div><p>${add.description}</p></div></th>
        <th><button style="color: white; height: 1.5rem; padding: 0px 5px; border-width: 0px; background-color: red; border-radius: 5px; font-weight: 500; margin: 5px" onclick="deleterow(this)">Delete</button></th>
      </tr>
      `;
}

function deleterow(d) {
  var i = d.parentNode.parentNode.rowIndex;
  table.deleteRow(i - 1);
}
