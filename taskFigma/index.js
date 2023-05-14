const icon = document.querySelector(".icon");
// const boxs = document.querySelector(".box-container");

const respList = document.querySelector(".resp-list");
icon.addEventListener("click", () => {
   respList.classList.toggle("open")
})

// fetch("https://northwind.vercel.app/api/products")
// .then((res)=>res.json())
// .then((data)=>{
// data.forEach(element => {
// console.log(element)

// let namejs=document.querySelector(".namejs")
// namejs.innerText=element.name

//       const newDiv=document.createElement("div");
//       const newP1=document.createElement("p");
//       const newP2=document.createElement("p");
//       const newP3=document.createElement("p");
//       newP1.innerText=element.name;
//       newP1.className="1234";
//       newP2.innerText=element.unitPrice;
//       newDiv.appendChild(newP1);
//       newDiv.appendChild(newP2);
// boxs.appendChild(newDiv)

//    });


// })

const boxsjs=document.querySelector(".boxsjs")
console.log(boxsjs)

fetch("https://northwind.vercel.app/api/products").then(res=>res.json()).then((data)=>{
   

data.forEach((element)=>{
   console.log(element)


const boxjs=document.createElement("div")
   boxjs.className=("boxjs")
   const boxContainerjs=document.createElement("div")
   boxContainerjs.className=("boxContainerjs")
   const h1h4js=document.createElement("div")
   h1h4js.className=("h1h4js")
   const h1bas=document.createElement("h1")
   const h4bas=document.createElement("h4")
   const xett=document.createElement("hr")
   const namejs=document.createElement("h4")
   const paraqraf=document.createElement("p")
   const nowlink=document.createElement("a")

   h1bas.innerText=element.id
   h4bas.innerText=element.name
   namejs.innerText=element.quantityPerUnit
   paraqraf.innerText="Digital agency is a business you hire to outsource your digital."
   nowlink.innerText="Explore Now"

   boxjs.appendChild(boxContainerjs)
   boxContainerjs.appendChild(h1h4js)
   h1h4js.appendChild(h1bas)
   h1h4js.appendChild(h4bas)
   boxContainerjs.appendChild(xett)
   boxContainerjs.appendChild(namejs)
   boxContainerjs.appendChild(paraqraf)
   boxContainerjs.appendChild(nowlink)

   boxsjs.appendChild(boxjs)

})

   


})