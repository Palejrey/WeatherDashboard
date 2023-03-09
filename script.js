var portionGeoUrl = "http://api.openweathermap.org/geo/1.0/direct?";
var apiKey = "c25c18c1ee5f5c29d1f5189cab94e5ef";
var searchButton = document.getElementById("search");
var cityTodayDate = document.getElementById("city-date");
var cityTodayTemp = document.getElementById("temp");
var cityTodayWind = document.getElementById("wind");
var cityTodayHumidity = document.getElementById("humidity");
var dayCardOne = document.getElementById("1");
var dayCardTwo = document.getElementById("2");
var dayCardThree = document.getElementById("3");
var dayCardFour = document.getElementById("4");
var dayCardFive = document.getElementById("5");
var dayCardSix = document.getElementById("6");
var dayCardSeven = document.getElementById("7");
var dayCardEight = document.getElementById("8");
var dayCardNine = document.getElementById("9");
var dayCardTen = document.getElementById("10");
var dayCardEleven = document.getElementById("11");
var dayCardTwelve = document.getElementById("12");
var dayCardThirtenn = document.getElementById("13");
var dayCardFourteen = document.getElementById("14");
var dayCardFifteen = document.getElementById("15");
var dayCardSixteen = document.getElementById("16");
var dayCardSeventeen = document.getElementById("17");
var dayCardEighteen = document.getElementById("18");
var dayCardNineteen = document.getElementById("19");
var dayCardTwenty = document.getElementById("20");
var dayCardTwentyone = document.getElementById("21");
var dayCardTwentytwo= document.getElementById("22");
var dayCardTwentythree = document.getElementById("23");
var dayCardTwentyfour = document.getElementById("24");
var dayCardTwentyfive = document.getElementById("25");
var newButtonHolder = document.getElementById("search-results")
var newButton = document.createElement("button")
var counter = 0;
var temp = localStorage.getItem('cities')
var storedButtons = document.getElementsByClassName("buttonClass")
if (temp != null){
    temp = JSON.parse(temp)
    for( var i = 0; i < temp.length ; i++){
        newButton = document.createElement("button")
        newButtonHolder.appendChild(newButton)
        newButton.textContent = temp[i]
        newButton.classList.add("buttonClass")
        newButton.setAttribute("value", counter)
        counter++;
        
    }
}



searchButton.addEventListener("click",function(){
    var inputVal = document.querySelector("input").value
    var completeGeoUrl = "http://api.openweathermap.org/geo/1.0/direct?q="+inputVal+"&limit=5&appid="+apiKey;
    var lat;
    var lon;

   temp = localStorage.getItem('cities')

    temp = JSON.parse(temp)
    if (temp == null){
        temp = [inputVal]
        temp = JSON.stringify(temp)
        localStorage.setItem("cities",temp)
    }
    else{
        temp.push(inputVal)
        localStorage.setItem("cities", JSON.stringify(temp))
    }
    
    

    newButton = document.createElement("button")
    newButtonHolder.appendChild(newButton)
    newButton.textContent = inputVal
    newButton.classList.add("buttonClass")
    newButton.setAttribute("value",counter)
    counter++;
    storedButtons = document.getElementsByClassName("buttonClass")


    fetch(completeGeoUrl).then(function (response){
       return response.json();
    })
    .then(function(data){
        lat = data[0].lat;
        lon = data[0].lon;
        var completeCurrentWeatherDataUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat +"&lon=" + lon +"&appid="+apiKey;
        fetch(completeCurrentWeatherDataUrl).then(function(response){
            return response.json();
        })
        .then (function(data){
            var time  = new Date();
            var formattedtime = time.toString
            cityTodayDate.textContent = data.name + formattedtime
            cityTodayDate.setAttribute("style","font-weight: bolder")
            cityTodayTemp.textContent = "Temp: " + data.main.temp + "F"
            cityTodayWind.textContent = "Wind: " + data.wind.speed + "MPH"
            cityTodayHumidity.textContent = "Humidity: " + data.main.humidity + "%"
            
        })
        var completeFiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&cnt=32&units=imperial&appid="+apiKey
        fetch(completeFiveDayUrl).then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data)
            dayCardOne.textContent=data.list[0].dt
            if(data.list[0].weather[0].main == "Clouds"){
                dayCardTwo.textContent = "☁️"
            }
            else{
                dayCardTwo.textContent = "☀️"
            }
            dayCardThree.textContent="Temp: " + data.list[0].main.temp + "F"
            dayCardFour.textContent="Wind: " + data.list[0].wind.speed + " MPH"
            dayCardFive.textContent="Humidity: " + data.list[0].main.humidity + "%"
            dayCardSix.textContent=data.list[8].dt
            if(data.list[8].weather[0].main == "Clouds"){
                dayCardSeven.textContent = "☁️"
            }
            else{
                dayCardSeven.textContent = "☀️"
            }
            dayCardEight.textContent="Temp: " + data.list[8].main.temp + "F"
            dayCardNine.textContent="Wind: " + data.list[8].wind.speed + " MPH"
            dayCardTen.textContent="Humidity: " + data.list[8].main.humidity + "%"
            dayCardEleven.textContent=data.list[16].dt
            if(data.list[16].weather[0].main == "Clouds"){
                dayCardTwelve.textContent = "☁️"
            }
            else{
                dayCardTwelve.textContent = "☀️"
            }
            dayCardThirtenn.textContent="Temp: " + data.list[16].main.temp + "F"
            dayCardFourteen.textContent="Wind: " + data.list[16].wind.speed + " MPH"
            dayCardFifteen.textContent="Humidity: " + data.list[16].main.humidity + "%"
            dayCardSixteen.textContent=data.list[24].dt
            if(data.list[24].weather[0].main == "Clouds"){
                dayCardSeventeen.textContent = "☁️"
            }
            else{
                dayCardSeventeen.textContent = "☀️"
            }
            dayCardEighteen.textContent="Temp: " + data.list[24].main.temp + "F"
            dayCardNineteen.textContent="Wind: " + data.list[24].wind.speed + " MPH"
            dayCardTwenty.textContent="Humidity: " + data.list[24].main.humidity + "%"
            dayCardTwentyone.textContent=data.list[31].dt
            if(data.list[31].weather[0].main == "Clouds"){
                dayCardTwentytwo.textContent = "☁️"
            }
            else{
                dayCardTwentytwo.textContent = "☀️"
            }
            dayCardTwentythree.textContent="Temp: " + data.list[31].main.temp + "F"
            dayCardTwentyfour.textContent="Wind: " + data.list[31].wind.speed + " MPH"
            dayCardTwentyfive.textContent="Humidity: " + data.list[31].main.humidity + "%"
        })
    })
})

for(var i = 0; i < storedButtons.length; i++){
    storedButtons[i].addEventListener("click",function(){
        console.log(counter)
        /*for (var j = 0; j<storedButtons.length; j++){
            if(newButtonHolder.children[j].name === j){
                var tempy = localStorage.getItem("cities")
                tempy = JSON.parse(tempy)
                console.log(tempy)
            }
        }*/
    }, false);
}
