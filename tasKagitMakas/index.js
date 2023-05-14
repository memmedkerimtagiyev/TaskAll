const oyuncuImg=document.getElementById("oyuncuImg")
const koputerImg=document.getElementById("koputerImg")
const oyuncuBali=document.getElementById("oyuncuBali")
const koputerBali=document.getElementById("koputerBali")


function randomSecim(){
    const arr=["das","kagiz","qayci"]
    return arr[Math.floor(Math.random()*3)]
}

function imgLink(move){
    const arr=["das","kagiz","qayci"]
    const links=["https://png.pngtree.com/element_pic/16/10/28/6eacc2db03f5ffc7ea42318104d84c45.jpg","https://res.cloudinary.com/env-imgs/f_auto/shopimages/products/1200/white-card.jpg", "https://t4.ftcdn.net/jpg/01/88/01/59/360_F_188015978_QdYGTOu9V2guW9E4zvJExS4boLnWCplT.webp"]
    return links[arr.indexOf(move)]
}

function oyun(oyuncu,koputer){
    koputerImg.src=imgLink(koputer)   
    oyuncuImg.src=imgLink(oyuncu)
   
if(oyuncu===koputer){
    return
}
if(oyuncu==="kagiz" && koputer=="das" || oyuncu==="das" && koputer==="qayci" || oyuncu==="qayci" && koputer=="kagiz" ){
    oyuncuBali.innerText++
}
else{
    koputerBali.innerText++
}
}

document.addEventListener("keydown",function(e){
    switch(e.key.toLocaleLowerCase()){
        case "d":
            oyun("das",randomSecim())
            break;

        case "k":
            oyun("kagiz",randomSecim())
            break;
        case "q":
            oyun("qayci",randomSecim())
            break;
    }
})