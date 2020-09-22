
// vairables and cityList
var cityListEl = $("#cityLists");
var  cityList = localStorage.getItem("cityList");
    if(!cityList){
      cityList = {};
    } else{
      cityList = JSON.parse(cityList);
    }

// search button, send request, get response 
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
      $("#city").text("City: " + response.name);
      cityList[response.name]= response.name;
      localStorage.setItem("cityList", JSON.stringify(cityList));
      var tempF = (response.main.temp - 273.15) * 1.80 + 32;
      $("#current-temp").text("Temperature in ( °F ): " + tempF.toFixed(2));
      $("#humidity").text("Humidity: " + response.main.humidity);
      $("#wind").text("Wind: " + response.wind.speed);

      var queryURLUvindex = "http://api.openweathermap.org/data/2.5/uvi?lat=" + response.coord.lat +"&lon="+ response.coord.lon+ "&appid=514ab56c2f48ab29cd4bd385635e22dc";
     $.ajax({
       url: queryURLUvindex,
       method: "GET"
     }).then(function(response){
      var uvI = response.value;
      $("#UV-index").text("UV Index: " + uvI);

      // var currentDay = moment().format("MMMM Do YYYY");
      // $("#current-date").text(currentDay);

      $("#current-date").text("Date: " + response.date_iso.split("T")[0]);
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
// end looping 

// forcast 5 days 

var queryURLFiveDays = "http://api.openweathermap.org/data/2.5/forecast/daily?q=lat=" + response.coord.lat +"&lon="+ response.coord.lon+"&cnt=6&appid=514ab56c2f48ab29cd4bd385635e22dc";

$.ajax({
  url: queryURLFiveDays,
  method: "GET"
}).then(function(response){

   $("#date").text("Date: " + response.date_iso.split("T")[0]);
   $("#icon").text();
   var tempF = (response.main.temp - 273.15) * 1.80 + 32;
   $("#temp").text("Temperature in ( °F ): " + tempF.toFixed(2));
   $("#humid").text("Humidity: " + response.main.humidity);
});

// limit city lists


// event listener for addCityList button 

$("button").on("click", function(e){

})

