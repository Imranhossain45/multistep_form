let form1 = document.getElementById('form1');
let form2 = document.getElementById('form2');
let form3 = document.getElementById('form3');

let next1 = document.getElementById('next1');
let next2 = document.getElementById('next2');
let back1 = document.getElementById('back1');
let back2 = document.getElementById('back2');

let progress = document.getElementById('progress');

next1.onclick = function () {
  form1.style.left = "-450px";
  form2.style.left = "40px";
  progress.style.width = "240px"
}
back1.onclick = function () {
  form1.style.left = "40px";
  form2.style.left = "450px";
  progress.style.width = "120px"
}
next2.onclick = function () {
  form2.style.left = "-450px";
  form3.style.left = "40px";
  progress.style.width = "360px"
}
back2.onclick = function () {
  form2.style.left = "40px";
  form3.style.left = "450px";
  progress.style.width = "240px"
}