$('form').submit(function(evt){
    evt.preventDefault();
    
    var $searchField = $('#search'),
        city = $searchField.val();
    var weatherApi = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=f30e33513c09357645ac6e0e100b99a8";
    var data = {
        units : 'metric'
    };

    function getWeather(report){
        $('#temp').html('<h2>Temperature is ' + report.main.temp + ' C</h2>' );
        $('#weather').html('<h3>' + report.weather[0].description + '</h3>')
    } ;

    $.getJSON(weatherApi, data, getWeather).fail(function(jqXHR){
        $('#error').html('<p>Error ' + jqXHR.statusText + '!!!</p>');
    });
});
