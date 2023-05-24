const barIcon=document.querySelector(".barIcon")

barIcon.addEventListener(("click"),()=>{
  const navResponsive=document.querySelector(".navResponsive")
  navResponsive.classList.toggle("openNavjs")
})


const hostingCards = document.querySelector(".hostingCards");

fetch("https://northwind.vercel.app/api/orders")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      console.log(element);
      const cartContent=document.createElement("div")
      const img=document.createElement("img")
      const name=document.createElement("h3")
      const text=document.createElement("p")

      img.tagName="img"
      name.tagName="h3"
      text.tagName="p"
      cartContent.className="cartContent"

      img.setAttribute("src","https://preview.colorlib.com/theme/drimo/drimo/img/icon/ss-icon-1.png")
      name.innerText=element.customerId
      text.innerText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim."

      cartContent.appendChild(img)
      cartContent.appendChild(name)
      cartContent.appendChild(text)
      hostingCards.appendChild(cartContent)
    });
  });
