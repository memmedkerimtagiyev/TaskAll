const btn = document.querySelectorAll(".btn");
const show = document.querySelector(".show");
// console.log(btn);
btn[0].addEventListener("click", function () {
  show.innerHTML = "0.00";
});
btn[1].addEventListener("click", function () {
  show.innerHTML = "30.0";
});
btn[2].addEventListener("click", function () {
  show.innerHTML = "60.0";
});
btn[3].addEventListener("click", function () {
  show.innerHTML = "90.0";
});
btn[4].addEventListener("click", function () {
  show.innerHTML = "120.0";
});
btn[5].addEventListener("click", function () {
  show.innerHTML = (+show.innerHTML + 0.5).toFixed(1);
});
btn[6].addEventListener("click", function () {
  show.innerHTML =( +show.innerHTML - 0.5).toFixed(1);
  if (show.innerHTML <= 0) {
    show.innerHTML = "0.00";
  }
});

document.addEventListener("keydown", function (e) {
  switch (e.key.toLocaleLowerCase()) {
    case "m":
      show.innerHTML = "0.00";
      break;
    case "1":
      show.innerHTML = "30.0";
      break;
    case "2":
      show.innerHTML = "60.0";
      break;
    case "3":
      show.innerHTML = "90.0";
      break;
      case "4":
      show.innerHTML = "120.0";
      break;
      case "+":
      show.innerHTML = (+show.innerHTML+0.5).toFixed(1);
      break;
      case "-":
      show.innerHTML =(+show.innerHTML-0.5).toFixed(1);
      if (show.innerHTML <= 0) {
        show.innerHTML = "0.00";
      }
      break;
  }
});