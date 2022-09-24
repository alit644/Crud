const id = document.getElementById("id");
const title = document.getElementById("title");
const price = document.getElementById("price");
let submit = document.getElementById("submit");

let darkmod = document.querySelector(".dark")
let body = document.querySelector("body")

let mood = 'create'

let empty;
// 1=> كريات منتج

let dataprod //= []

if (localStorage.getItem("product2") != null) {
  dataprod = JSON.parse(localStorage.getItem("product2"));
} else {
  dataprod = [];
}

submit.onclick = function () {
  let newpro = {
    id: id.value,
    title: title.value,
    price: price.value,
  };

  if (id.value != '' && title.value != '' && price.value != '' && id.value < 1000) {
    if (mood === 'create') {
        dataprod.push(newpro)
      }else{
          dataprod[empty] = newpro
          mood = 'create'
          submit.innerHTML = "Add"
      }
  }

 

  // 2=> local storge حفظ المنتج في
  localStorage.setItem("product2", JSON.stringify(dataprod));

  claerData();
  showData()
};

// 3=> input حذف محتوى
function claerData() {
  id.value = "";
  title.value = "";
  price.value = "";
}

// 4=> read => عرض المنتجات في المربع

function showData() {

    let table = ''

    for (let i = 0; i < dataprod.length; i++) {
        table += `
        <tr>
        <td>${dataprod[i].id}</td>
        <td>${dataprod[i].title}</td>
        <td>${dataprod[i].price} $</td>
        <td><ul>
            <li><button  onclick="delett(${i})" id="del">Delete</button></li>
            <li><button onclick="update(${i})" id="update">Update</button></li>
        </ul></td>
        </tr>
        `

    }
        document.getElementById("tbody").innerHTML = table
}
showData()

// 4=> حذف المنتجات

function delett(i) {
    dataprod.splice(i,1)
    localStorage.product2 = JSON.stringify(dataprod)
    showData()
}

// 5=> تعديل المنتج

function update(i) {
    id.value = dataprod[i].id
    title.value = dataprod[i].title
    price.value = dataprod[i].price
    submit.innerHTML = "UpDate"
    mood = "UpDate"

    empty = i;
}
//====================

darkmod.onclick = function () {
    body.classList.toggle("dark")
}
