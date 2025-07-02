var prodictnameinput = document.getElementById("prodict-name");
var prodictpriceinput = document.getElementById("prodict-price");
var prodictcatigroyinput = document.getElementById("prodict-catigroy");
var prodictdetalsinput = document.getElementById("prodict-detals");
var prodictimginput = document.getElementById("prodict-img");
var searchinput = document.getElementById("serchinput");
var phonenumber = document.getElementById("phone-number");
var prodactlist = [];
var phonregx = /^01[0125][0-9]{8}$/;

if (localStorage.getItem("prodactcontainer") !== null) {
  prodactlist = JSON.parse(localStorage.getItem("prodactcontainer"));
  displydata();
}

function addprodact() {
  // console.log(`images/${prodictimginput.files[0]?.name}`)
  var phonviled;
 // try something
    if (phonregx.test(phonenumber.value)) {
       phonviled=phonenumber.value;
    }  
    else if(phonenumber.value===""){
          phonviled=""
    }
    else {
        phonviled="wrong phone number";
    }
    // end
  var prodact = {
    name: prodictnameinput.value,
    price: prodictpriceinput.value,
    catigroy: prodictcatigroyinput.value,
    detals: prodictdetalsinput.value,
    // img:`/images/${prodictimginput.files[0].name}`,
    img: prodictimginput.files[0]
      ? `images/${prodictimginput.files[0].name}`
      : "./crud/images/p-1.jpg",
      phone:phonviled,
  };
  prodactlist.push(prodact);
  localStorage.setItem("prodactcontainer", JSON.stringify(prodactlist));
  displydata();
  console.log(prodactlist);
  cleerform();
}
function cleerform() {
  prodictnameinput.value = null;
  prodictpriceinput.value = null;
  prodictcatigroyinput.value = null;
  prodictdetalsinput.value = null;
  prodictimginput.value = null;
  phone.value=null;
  
}
function displydata() {
  var cartona = "";
  for (var i = 0; i < prodactlist.length; i++) {
    cartona += `  <div class="col-md-3">
                        <div class="card">
                        <img class="card-img-top" src="${prodactlist[i].img}" alt="${prodactlist[i].name}" />
                     <div class="card-body text-center">
                        <span>index${i} </span>
                  <h3 class="card-title">${prodactlist[i].name} </h3>
                <p class="card-text">${prodactlist[i].price}</p>
                <p class="card-text">${prodactlist[i].catigroy}</p>
                <p class="card-text">${prodactlist[i].detals}</p>
                <p class="card-text">${prodactlist[i].phone}</p>
               </div>
               <div class="card-footer text-center">
                <button onclick=deletitem(${i}) class="btn btn-danger btn-sm">delete</button>
                <button class="btn btn-warning btn-sm">update</button>
               </div>

            </div>
                    </div>`;

    document.getElementById("rowdata").innerHTML = cartona;
  }
}
function deletitem(index) {
  prodactlist.splice(index, 1);
  localStorage.setItem("prodactcontainer", JSON.stringify(prodactlist));

  displydata();
}
function searchData() {
  var term = searchinput.value;
  var cartona = "";
  for (var i = 0; i < prodactlist.length; i++)
    if (prodactlist[i].name.toLowerCase().includes(term.toLowerCase()))
      cartona += `  <div class="col-md-3">
                        <div class="card">
                        <img class="card-img-top" src="${prodactlist[i].img}" alt="${prodactlist[i].name}" />
                     <div class="card-body text-center">
                        <span>index${i} </span>
                  <h3 class="card-title">${prodactlist[i].name} </h3>
                <p class="card-text">${prodactlist[i].price}</p>
                <p class="card-text">${prodactlist[i].catigroy}</p>
                <p class="card-text">${prodactlist[i].detals}</p>
                <p class="card-text">${prodactlist[i].phone}</p>
               </div>
               <div class="card-footer text-center">
                <button onclick=deletitem(${i}) class="btn btn-danger btn-sm">delete</button>
                <button class="btn btn-warning btn-sm">update</button>
               </div>

            </div>
                    </div>`;
  document.getElementById("rowdata").innerHTML = cartona;
}
