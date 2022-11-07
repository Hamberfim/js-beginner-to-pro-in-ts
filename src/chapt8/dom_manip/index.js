const h2outPut = document.querySelectorAll("h2.output");
h2outPut.forEach((element) => {
  element.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
  element.style.fontStyle = "italic";
  element.style.padding = "3px 0px 5px 0px";
});

const h3OutputItems = document.querySelectorAll("h3.output");
h3OutputItems.forEach((element) => {
  element.style.backgroundColor = "lightblue";
  element.style.padding = "20px 5px";
});

const h3NoMargin = document.querySelectorAll("h3.noMargin");
h3NoMargin.forEach((element) => {
  element.style.margin = "-5px 0px -15px 40px";
});

const h4OutPut = document.querySelectorAll("h4.output");
h4OutPut.forEach((element) => {
  element.style.margin = "0px 0px 3px 50px";
});

let myArr = ["Bob", "Linda", "Tina", "Gene"];
myArr.forEach((element) => {
  document.querySelector(".beltchers").innerHTML += `<li>${element}</li>`;
});
