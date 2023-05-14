const url="https://api.openweathermap.org/data/2.5/"
const key="16ac7bd72457078936c5d153e5e98ea5"

// const setQuery = (e)=>{
//     if(e.keyCode='Enter')
//       getResult(searchBar.value)
//         e.preventDefault();
// }
const searchBar=document.getElementById("searchBar")
searchBar.addEventListener('input',(e)=>{
if(e.keyCode="13"){
  getResult(searchBar.value)
    e.preventDefault();
}
})
const getResult= (cityName)=>{
    let query=`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=az`
    fetch(query)
    .then(weather =>{
      return weather.json()
    })
    .then(displayResult)
}

const displayResult=(result) =>{
  console.log(result);
  let city=document.querySelector(".city")
  city.innerText=`${result.name}, ${result.sys.country}`
  let temp=document.querySelector(".temp")
  temp.innerText=`${Math.round(result.main.temp)}°C`
  let desc=document.querySelector(".desc")
  desc.innerText=result.weather[0].description
  let minMax=document.querySelector(".minMax")
  minMax.innerText=`${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`
}


