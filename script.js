
var cityList = $("#cityLists");
// var searchBox= 

// var apiKey = "514ab56c2f48ab29cd4bd385635e22dc";
// var queryURL = `https://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${lat}&lon=${lon}`;

$("#searchBtn").on("click", function(e) {
  e.preventDefault();
  cityList.prepend($("<li>").text($("#searchId").val()));
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
      $("#current-temp").text(response.main.temp);

  // grab info and then display 

        console.log(response);

    });
});


