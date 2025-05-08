// BURGER BUTTON
const burger = document.querySelector(".burger");
const close = document.querySelector(".close");
const list = document.querySelector("#burger-click-list");

burger.addEventListener("click", function(e){
  burger.classList.toggle("hidden");
  close.classList.toggle("hidden");
  list.classList.toggle("hidden");
});

close.addEventListener("click", function(e){
  burger.classList.toggle("hidden");
  close.classList.toggle("hidden");
  list.classList.toggle("hidden");
});

// // COOKIE BOX
// document.querySelector(".cookie-box").addEventListener("click", function(e){
//   document.querySelector(".cookie-box").classList.toggle("hidden");
// });