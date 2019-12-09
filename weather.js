var highesttemp= -99999;
var diamond= false;
var box = false;
var parafoil = false;
var picked=false;
var destination;
var counter=0;
var pass=false;
function weatherBalloon(ID) {
var key = '9f195ba6c98a5d1c2e677e7d65fd9ef9';

fetch('https://api.openweathermap.org/data/2.5/weather?id=' +ID+ '&appid=' + key)  
.then(function(resp) { 
    return resp.json() 
}) // Convert data to json
.then(function(data) {
  console.log(data);
  highweather(data);
})
.catch(function() {
  // catch any errors
});
}
function highweather (d)
{
  counter=counter+1;
  if(counter>=20)
  {
    pass=true
  }
  var wind = d.wind.speed; 
  console.log('Wind speed is' + wind);
   if(diamond == true)
   {
    //console.log(picked);

     if(d.wind.speed >0 && d.wind.speed <3 && d.weather[0].main!="Rain")
     {
       picked=true;
       
       console.log('Passed Diamond Speed');
        drawWeather(d);
     }
     

     if(picked!= true)
     {
       picked=false;
        drawNothing();
     }
   }
   if(box ==true)
   {
    //console.log(picked);

     if(d.wind.speed>3 && d.wind.speed<6 && d.weather[0].main!="Rain")
     {
      picked=true;
       console.log('Passed Box speed)');
       drawWeather(d);
     }
     
     if(picked!= true)
     {
       picked=false;
        drawNothing();
     }
   }
   if(parafoil==true)
   //console.log(picked);
   {
     if(d.wind.speed>6 && d.weather[0].main!="Rain")
     {
      picked=true;
       console.log('Passed Parafoil speed)');
       drawWeather(d);
     }
     

     if(picked!= true)
     {
       picked=false;
        drawNothing();
     }
   }
   if(pass==true)
   {
      counter = 0;
      pass = false;
      console.log("THIS: " + document.getElementById('location').textContent);
      destination = document.getElementById('location').textContent;
      document.getElementById("rightpanel").style="display: inline-block;"
      yelpFunction(destination);
      flightFunc(destination);
   }
}
function drawWeather( d ) {
var celcius = Math.round(parseFloat(d.main.temp)-273.15);
var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 

//document.getElementById('description').innerHTML = d.weather[0].description;
document.getElementById('location').innerHTML = d.name;
document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
document.getElementById('windspeed').innerHTML=d.wind.speed +' mph';
document.getElementById('condition').innerHTML=d.weather[0].main;


}

function drawNothing()
{
  document.getElementById('location').innerHTML="No Location could be found for the kite picked. Refresh the page and try again.";
  //picked=false;

}
function sleep(milliseconds)
{
  const date = Date.now();
  let currentDate = null;
  do{
    currentDate= Date.now();

  }
  while(currentDate-date<milliseconds);
}

function myFunction() { 
diamond = document.getElementById("diamondkite").checked;
console.log('diamond kite is checked: '+diamond);
box = document.getElementById("boxkite").checked;
console.log('box kite is checked: ' + box);
parafoil = document.getElementById("parafoilkite").checked;
console.log ('parafoil kite is checked: ' +parafoil);
console.log('CURRENT LOCATION: ' + document.getElementById("currlocation").value);
var x =document.getElementById("currlocation").value;
document.getElementById( "locationoutput").innerHTML = x; 
weatherBalloon(5128638);
weatherBalloon(4699066);
weatherBalloon(4164138);
weatherBalloon(4682464);
//weatherBalloon(5744337);
weatherBalloon(5368361);
weatherBalloon(4887398);
weatherBalloon(5308655);
weatherBalloon(4560349);
weatherBalloon(4273837);
weatherBalloon(5391959);
weatherBalloon(4544349);
weatherBalloon(4930956);
weatherBalloon(5506956);
weatherBalloon(4256038);
weatherBalloon(4644585);
weatherBalloon(5263045);
weatherBalloon(4180439);
weatherBalloon(5780993);
weatherBalloon(4335045);
weatherBalloon(5419384);
//sleep(2000);
//console.log("Sleep done.");

//4682464 - College Station
// 5128638- New York , New York
//4699066- Houston
//4164138- Miami
//5744337- Oregon
//4887398- Chicago
//5368361- Los Angeles
//5308655- Phoenix
//4560349- Philadelphia
//4273837- Kansas City, Missouri
//5391959- San Francisco
//4544349- Oklahoma City
//4930956- Boston
//5506956- Las Vegas
//4256038- Columbus- Ohio
//4644585- Nashville
//5263045- Milwaukee
//4180439- Atlanta
//5780993- Salt Lake City
//4335045- New Orleans
//5419384- Denver
console.log('Final largest Temp is' + highesttemp);
  //flightFunc(destination);
} 