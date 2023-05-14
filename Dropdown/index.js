const bar = document.querySelector(".icon-bar")
const Xicon = document.querySelector("#X-icon")
const respList = document.querySelector("#responsive-list")
const iconArrow = document.querySelector(".icon-arrow")
const iconArrow2 = document.querySelector(".icon-arrow2")
//  const  dropOneRes = document.querySelector("#dropOne-res")
// console.log(dropOneRes)


bar.addEventListener(("click"), () => {
    respList.style.width = "300px"
    console.log("salam")
})
Xicon.addEventListener(("click"), () => {
    respList.style.width = "0px"
    console.log("salam")

})
iconArrow.addEventListener(("click"), () => {
    console.log("salam")
    let add = document.getElementById("dropOne-res")
    console.log(add)
    add.classList.toggle("open")
    let trans=document.getElementById("ox")
    trans.classList.toggle("transform")
})
iconArrow2.addEventListener(("click"), () => {
    console.log("salam")
    let add2 = document.getElementById("dropTwo-res")
    add2.classList.toggle("open")
    let trans2=document.getElementById("ox2")
    trans2.classList.toggle("transform")
})
