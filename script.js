
// var lat = "response.city.coord"("lat");
// var lon = "response.city.coord"("lon");

var apiKey = "514ab56c2f48ab29cd4bd385635e22dc";
// var queryURL = `https://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${lat}&lon=${lon}`;

$("#searchBtn").on("click", function() {
    alert("I love click");
    // alert("happy to help!")
    // Storing our giphy API URL for a random cat image
    var queryURL = "http://api.openweathermap.org/data/2.5//uvi/history?lat=37.75&lon=-122.37&start=1498049953&end=1498481991&appid=514ab56c2f48ab29cd4bd385635e22dc";

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
  
        console.log(response);

    });
});
// function searchCity(cityLists) {
//     var 
//     $("#cityLists").empty();

//     var keys =Object.keys(cityLists);
//     for (var i = 0; i < keys.length; i++) {
//       var addCityList = $("<button>");
//       addCityList.addClass("list-group-item list-group-item-action flex-column align-items-start");
     
//       var getCity = keys[i].toLowerCase().split(" ");
//       for (var i = 0; i < getCity.length; i++) {
//         getCity[i] =
//           getCity[i].charAt(0).toUpperCase() + getCity[i].substring(1);
//       }
//       var cityListItem = getCity.join(" ");
//       addCityList.text(cityListItem);
  
//       $("#cityLists").append(addCityList);
//     }
// }

// function createCity(city, cityLists) {
//     searchCity(cityLists);
  
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//       }).then(function(response) {
  
//         // Create CODE HERE to Log the queryURL
//         console.log(response);
//         $(".city").html("<h1>" + response.name + "</h1>");
       
//         $(".temp").text(response.main.temp);

//         var tempF = (response.main.temp - 273.15) * 1.80 + 32;
//         $(".tempF").text("temperature in (F) " + tempF.toFixed(2));

//         $(".humidity").text(response.main.humidity);
//         $(".wind").text(response.wind.speed);
//         var uvI.text(response.value);

//         var uvI = res.value;
//         $(".UV-index").text("UV Index: " + uvI);

//         // Create CODE HERE to log the resulting object
//         // Create CODE HERE to calculate the temperature (converted from Kelvin)
//         // Create CODE HERE to transfer content to HTML
//         // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
//         // Create CODE HERE to dump the temperature content into HTML
  

