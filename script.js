
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

        var queryURLFiveDay = "https://api.openweathermap.org/data/2.5/onecall?lat=" + response.coord.lat + "&lon="+ response.coord.lon + "&appid=514ab56c2f48ab29cd4bd385635e22dc";
        
        $.ajax({
          url: queryURLFiveDay,
          method: "GET"
        }).then(function(response){
    
        console.log(response);
          // forecast date
          // var day = moment().format('MMMM Do YYYY);

         
          // $("#date-1").text("Date: " + response.date_iso.split("T")[1]);
          // $("#date-2").text("Date: " + response.date_iso.split("T")[2]);
          // $("#date-3").text("Date: " + response.date_iso.split("T")[3]);
          // $("#date-4").text("Date: " + response.date_iso.split("T")[4]);
          // $("#date-5").text("Date: " + response.date_iso.split("T")[5]);
    
          // forecast icon images
//          var iconIm1 = ("<img src='http://openweathermap.org/img/w/" + response.daily[1].weather[0].icon + ".png'>");
          $("#icon1").attr('src', 'http://openweathermap.org/img/w/' + response.daily[1].weather[0].icon +'.png');
          $("#icon2").attr('src', 'http://openweathermap.org/img/w/' + response.daily[2].weather[0].icon +'.png');
          $("#icon3").attr('src', 'http://openweathermap.org/img/w/' + response.daily[3].weather[0].icon +'.png');
          $("#icon4").attr('src', 'http://openweathermap.org/img/w/' + response.daily[4].weather[0].icon +'.png');
          $("#icon5").attr('src', 'http://openweathermap.org/img/w/' + response.daily[5].weather[0].icon +'.png');
    
    
          // temperature (F)
          
          var tempF1 = (response.daily[1].temp.day - 273.15) * 1.80 + 32;
          var tempF2 = (response.daily[2].temp.day - 273.15) * 1.80 + 32;
          var tempF3 = (response.daily[3].temp.day - 273.15) * 1.80 + 32;
          var tempF4 = (response.daily[4].temp.day - 273.15) * 1.80 + 32;
          var tempF5 = (response.daily[5].temp.day - 273.15) * 1.80 + 32;

          $("#temp-1").text("Temperature in: " + tempF1.toFixed(2) + " °F");
          $("#temp-2").text("Temperature in: " + tempF2.toFixed(2) + " °F");
          $("#temp-3").text("Temperature in: " + tempF3.toFixed(2) + " °F");
          $("#temp-4").text("Temperature in: " + tempF4.toFixed(2) + " °F");
          $("#temp-5").text("Temperature in: " + tempF5.toFixed(2) + " °F");
    
          // humidity 
          $("#humid-1").text("Humidity: " + response.daily[1].humidity);
          $("#humid-2").text("Humidity: " + response.daily[2].humidity);
          $("#humid-3").text("Humidity: " + response.daily[3].humidity);
          $("#humid-4").text("Humidity: " + response.daily[4].humidity);
          $("#humid-5").text("Humidity: " + response.daily[5].humidity);
    
    
        });
        $("#city").text(response.name);
        cityList[response.name]= response.name;
        localStorage.setItem("cityList", JSON.stringify(cityList));

        var iconIm = ("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png'>");
        $("#weather-icon").append(iconIm);
        
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $("#current-temp").text("Temperature in ( °F ): " + tempF.toFixed(2));
        $("#humidity").text("Humidity: " + response.main.humidity);
        $("#wind").text("Wind: " + response.wind.speed + " MPH");

// get UV Index API
        var queryURLUvindex = "http://api.openweathermap.org/data/2.5/uvi?lat=" + response.coord.lat +"&lon="+ response.coord.lon+ "&appid=514ab56c2f48ab29cd4bd385635e22dc";
      $.ajax({
        url: queryURLUvindex,
        method: "GET"
      }).then(function(response){
        // UVIndex and color
        var uvI = response.value;
        $("#UV-index").text("UV Index: " + uvI);
        if (uvI < 3) {
          $("#UV-index").css("background-color", "Chartreuse");
        } else if (uvI < 6) {
          $("#UV-index").css("background-color", "Orange");
        }
        else if (uvI < 8) {
          $("#UV-index").css("background-color", "OrangeRed");
        }
        else if (uvI < 11 ) {
          $("#UV-index").css("background-color", "DarkRed");
        } else{
          $("#UV-index").css("background-color", "Plum");
        }
        // current-date

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

    function citySearchBtn(e){
     
        var search = $("#cityLists").on("click", function() {
        searchCity();
      });
    }

});