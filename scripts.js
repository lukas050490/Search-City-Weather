
let chave = "e131ae5136a969d4f197452bb3e15627"

function ButtonClick() {
    const City = document.querySelector(".InputCity").value

    SearchCity(City)
}

async function SearchCity(City){
 const Search = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q="
      + City
      + "&appid=" 
      + chave
      + "&lang=pt_br"
      + "&units=metric"
 ).then(response => response.json())

 PutOnScreen(Search)
}

function PutOnScreen(Search){
  
  document.querySelector(".CityWeather").innerHTML ="Tempo em " + Search.name
  document.querySelector(".temp").innerHTML = Math.floor(Search.main.temp) + "ºC"
  document.querySelector(".tempWeather").innerHTML = Search.weather[0].description
  document.querySelector(".tempDegrees").innerHTML = Search.main.humidity + "%"
  document.querySelector(".clound").src = "https://openweathermap.org/img/wn/" + Search.weather[0].icon + ".png"
}