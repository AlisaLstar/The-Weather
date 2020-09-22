
var cityListEl = $("#cityLists");
var  cityList = localStorage.getItem("cityList");
    if(!cityList){
      cityList = {};
    } else{
      cityList = JSON.parse(cityList);

    }
// var searchBox= 

// var apiKey = "514ab56c2f48ab29cd4bd385635e22dc";
// var queryURL = `https://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${lat}&lon=${lon}`;

$("#searchBtn").on("click", function(e) {
  e.preventDefault();
  cityListEl.prepend($("<li>").text($("#searchId").val()));
    // alert("It's a beautiful day");
    console.log("I love today");
    // Storing our giphy API URL for a random cat image
    // var queryURL = "http://api.openweathermap.org/data/2.5//uvi/history?lat=37.75&lon=-122.37&start=1498049953&end=1498481991&appid=514ab56c2f48ab29cd4bd385635e22dc";
    var queryURL ="http://api.openweathermap.org/data/2.5/weather?q="+$("#searchId").val()+"&appid=514ab56c2f48ab29cd4bd385635e22dc";
    
    // api.openweathermap.org/data/2.5/forecast/daily?q=+""+&cnt=1&appid={API key}
    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      // $("#current-temp").text(response.main.temp); 
      
      $("#city").text(response.name);
      cityList[response.name]= response.name;
      localStorage.setItem("cityList", JSON.stringify(cityList));
      var tempF = (response.main.temp - 273.15) * 1.80 + 32;
      $("#current-temp").text("temperature in (F) " + tempF.toFixed(2));

      
      $(".humidity").text("huminity: " + response.main.humidity);

      $(".wind").text("wind: " + response.wind.speed);

      var queryURLUvindex = "http://api.openweathermap.org/data/2.5/uvi?lat=" + response.coord.lat +"&lon="+ response.coord.lon+ "&appid=514ab56c2f48ab29cd4bd385635e22dc";
     $.ajax({
       url: queryURLUvindex,
       method: "GET"
     }).then(function(response){
      var uvI = response.value;
      $(".UV-index").text("UV Index: " + uvI);
      $("#date").text("date:" + response.date_iso.split("T")[0]);

      console.log(response);
     });
      

        console.log(response);

    });
});

// lop
$("#cityLists").empty();
    var keys =Object.keys(cityList);
    for (var i = 0; i < keys.length; i++) {
      var addCityList = $("<button>");
      addCityList.addClass("list-group-item list-group-item-action flex-column align-items-start");
     
      // var getCity = keys[i].toLowerCase().split(" ");
      // for (var i = 0; i < getCity.length; i++) {
      //   getCity[i] =
      //     getCity[i].charAt(0).toUpperCase() + getCity[i].substring(1);
      // }
      // var cityListItem = getCity.join(" ");
      addCityList.text(keys[i]);
  
      $("#cityLists").append(addCityList);
    }


