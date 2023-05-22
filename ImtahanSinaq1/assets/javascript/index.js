const barIcon = document.querySelector(".barIcon");
const openIcon = document.querySelectorAll("#openIcon");

barIcon.addEventListener("click", () => {
  let navRespo = document.querySelector(".nav-respo");
  navRespo.classList.toggle("barOpenJs");
  console.log(navRespo);
});

openIcon.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    openIcon.forEach((btn) => {
      console.log("salama", btn.parentElement.parentElement);
      btn.parentElement.parentElement.style.height = "45px";
    });

    e.target.parentElement.parentElement.classList.toggle("openjsSteps");
  });
});

const childrenBox = document.querySelector(".childrenBox");
const childBox = document.createElement("div");
childBox.className="childBox"
const photo = document.createElement("div");
photo.className="photo"
const img = document.createElement("img");
img.tagName="img"
const nameyear = document.createElement("a");
nameyear.tagName="a"
const year=document.createElement("span")
year.tagName="span"

 nameyear.innerText="mursel,"
 year.innerText="15 year old"
 img.setAttribute("src", "https://preview.colorlib.com/theme/adopted/img/children_4.jpg")

childBox.appendChild(photo)
photo.appendChild(img)
childBox.appendChild(nameyear);
nameyear.appendChild(year)
childrenBox.appendChild(childBox)



// fetch("https://northwind.vercel.app/api/products")
//   .then((res) => res.json())
//   .then((data) => {
//     data.forEach((element) => {
//       console.log(element);
//     });
//   });
