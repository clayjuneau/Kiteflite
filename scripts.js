const app = document.getElementById('root');

function myFunction() { 
  var location = document.getElementById("currlocation").value; 
  var kitetype;

  var ele = document.getElementsByName("kite"); 
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) 
          kitetype = ele[i].value;
    }
  
  document.getElementById("demo").innerHTML = location + " " + kitetype;
}

var request = new XMLHttpRequest();
request.open('GET', '', true);
request.onload = function () {

  // Begin accessing JSON data here
 
}

request.send();