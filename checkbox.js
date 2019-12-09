function checkbox() {
    var checkBox = document.getElementById("myCheck");

    if (checkBox.checked == true){
        document.documentElement.style.setProperty('--background', 'rgb(83, 81, 81)');
        document.documentElement.style.setProperty('--color', 'white');
        document.documentElement.style.setProperty('--leftbackground','linear-gradient(90deg, #0963f5 0%,#28b7fa 100%) ')
        document.documentElement.style.setProperty('--rightbackground', 'linear-gradient(90deg, #fa181f 0%,#fc22b7 100%)')
        



        
    } else {
        document.documentElement.style.setProperty('--background', 'F6F6F6');
        document.documentElement.style.setProperty('--color', '#666');
        document.documentElement.style.setProperty('--leftbackground', 'linear-gradient(90deg, #a1c4fd 0%,#c2e9fb 100%)')
        document.documentElement.style.setProperty('--rightbackground', 'linear-gradient(90deg, #ff9a9e 0%,#fecfef 100%' )

    }
  }