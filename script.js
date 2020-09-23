
// vairables and cityList
var cityListEl = $("#cityLists");
var iconImage = $("<icon>");

var  cityList = localStorage.getItem("cityList");
    if(!cityList){
      cityList = {};
    } else{
      cityList = JSON.parse(cityList);
    }

// search button, send request, get response 
$(document).ready(function(){ 
  searchCity();

  function searchCity(){   
    // var citySearch = $("#searchId").val();
  $("#searchBtn").on("click", function(e) {
    e.preventDefault();
    cityListEl.prepend($("<li>").text($("#searchId").val()));
      // alert("It's a beautiful day");
      console.log("I love today!");
      
      var queryURL ="http://api.openweathermap.org/data/2.5/weather?q="+$("#searchId").val()+"&appid=514ab56c2f48ab29cd4bd385635e22dc";
      
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        $("#city").text(response.name);
        cityList[response.name]= response.name;
        localStorage.setItem("cityList", JSON.stringify(cityList));
        
        $("#weather").append(iconImage);

        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $("#current-temp").text("Temperature in ( °F ): " + tempF.toFixed(2));
        $("#humidity").text("Humidity: " + response.main.humidity);
        $("#wind").text("Wind: " + response.wind.speed + " MPH");

        var queryURLUvindex = "http://api.openweathermap.org/data/2.5/uvi?lat=" + response.coord.lat +"&lon="+ response.coord.lon+ "&appid=514ab56c2f48ab29cd4bd385635e22dc";
      $.ajax({
        url: queryURLUvindex,
        method: "GET"
      }).then(function(response){
        var uvI = response.value;
        $("#UV-index").text("UV Index: " + uvI);
        // var currentDay = moment().format("MMMM Do YYYY");
        // $("#current-date").text(currentDay);

        $("#current-date").text(response.date_iso.split("T")[0]);
        console.log(response);
    
      });
        console.log(response);
      });
  });

// looping and adding the cities 
$("#cityLists").empty();
    var keys =Object.keys(cityList);
    for (var i = 0; i < keys.length; i++) {
      var addCityList = $("<button>");
      addCityList.addClass("list-group-item list-group-item-action flex-column align-items-start");
      addCityList.text(keys[i]);
      $("#cityLists").append(addCityList);
    }

  }
// end looping 

// forcast 5 days 

// var queryURLFiveDays = "http://api.openweathermap.org/data/2.5/forecast/daily?q=lat=" + response.coord.lat +"&lon="+ response.coord.lon+"&cnt=6&appid=514ab56c2f48ab29cd4bd385635e22dc";
// "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={your API KEY}&q=fairfax&cnt=6"

var queryURLFiveDays = "https://api.openweathermap.org/data/2.5/forecast?q="+$("#searchId").val()+"&appid=514ab56c2f48ab29cd4bd385635e22dc";
// "+ response.coord.lat +"&lon="+ response.coord.lon + "

$.ajax({
  url: queryURLFiveDays,
  method: "GET"
}).then(function(response){

console.log(response);
  //  $("#date").text("Date: " + response.date_iso.split("T")[0]);
  //  $("#icon").text();
  //  var tempF = (response.main.temp - 273.15) * 1.80 + 32;
  //  $("#temp").text("Temperature in: " + tempF.toFixed(2) + " °F");
  //  $("#humid").text("Humidity: " + response.main.humidity);
});

// limit city lists


// event listener for addCityList button 

$("button").on("click", function(e){

})


// Icon function
function getIcon(e){
 var iconImage= "http://openweathermap.org/img/wn/" + e.current.weather[0].icon;
// var iconImage = "http://openweathermap.org/img/wn/10d@2x.png" + e.current.weather[0].icon;
  $("#weather-icon").attr('src'+ iconImage);

}


// icon arrays
var weatherIcons = response.lists[0].weather[0].main
console.log(response.lists[0].weather[0].main);
if(weatherIcons === "Clear"){iconImage.addClass("fas fa-sun");
} 
/* <i class="fas fa-cloud"></i>
<i class="fas fa-cloud-rain"></i>
<i class="fas fa-sun"></i>
<i class="fas fa-snowflake"></i> */

});