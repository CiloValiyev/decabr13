AOS.init();
const list = document.querySelector(".list ul");
const count_part = document.querySelector(".count-part");
const inpt = document.querySelector("#inpt");
const up = document.querySelector("#up");
const down = document.querySelector("#down");
const description = document.querySelector("#description");
const rewiews = document.querySelector("#rewiews");
const btn_click = document.querySelector(".btn-click-description");
const commit_input = document.querySelector("#commit_input");
const commit = document.querySelector("#commit");
const error = document.querySelector("#error");
const sendNow = document.querySelector("#send-now");
const email = document.querySelector("#email");
const first_name = document.querySelector("#first-name");
var modal = document.getElementById("myModal");
const wrapper6 = document.querySelector(".wrapper6");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
const top_button = document.querySelector("#top-button");


// ! commit
sendNow.addEventListener("click",()=>{
  if(first_name.value!=" " || first_name.value.trim()){
  commit.innerHTML = commit_input.value;
  }
  else{
    error.style.display ="block"
  }
})
//! date
const d = moment().format('ll');
document.getElementById("data").innerText = d;
document.getElementById("data2").innerText = d;

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};
fetch("https://fakestoreapi.com/products/categories")
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
    json.forEach((element) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.setAttribute("href", "#");
      a.innerHTML = `${element}`;
      list.append(li);
      li.append(a);
    });
  });
let count = 0;
up.addEventListener("click", () => {
  let count = inpt.value;
  count++;
  inpt.value = count;
});

down.addEventListener("click", () => {
  let count = inpt.value;
  if (count > 0) {
    count--;
    inpt.value = count;
  }
});
rewiews.addEventListener("click", () => {
  wrapper6.style.display ="block";
  btn_click.style.display = "none";
  rewiews.style.background="rgb(228, 70, 70)";
  description.style.background="grey";
});
description.addEventListener("click", () => {
  btn_click.style.display = "block";
wrapper6.style.display ="none";
description.style.background="rgb(228, 70, 70)";
rewiews.style.background="grey";

});
