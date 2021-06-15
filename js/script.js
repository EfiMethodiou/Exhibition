/* 

 JavaScript functions for:
       level_0
       main  
*/

//the loader will appear only the first time that the user opens the page

function firstLoad() { 
  var loadedProgress = sessionStorage.getItem('loadedProgress') || false; 
  if(loadedProgress){
    document.getElementById("level_0").style.display = "none";    
  }else{
    document.getElementById("level_0").style.display = "block";       
    setTimeout(function () {
      $(".level_0").fadeToggle();  
      document.body.style.overflow = "visible";
    }, 7000);
    sessionStorage.setItem('loadedProgress', true);
  }  
}
window.onload = firstLoad();


/*________________MAIN_______PAGE__________*/
/*Open popups from the menu*/
function openAbout() {
  document.getElementById("about").style.display = "block";
  document.getElementById("aboutBackg").style.display = "block";
}
function openRhizonet() {
  document.getElementById("rhizonet").style.display = "block";
  document.getElementById("rhizBackg").style.display = "block";
}
/*Close about asn*/
function closeAbout() {
  document.getElementById("about").style.display = "none";
  document.getElementById("aboutBackg").style.display = "none";
}
function closeRhizo() {
  document.getElementById("rhizonet").style.display = "none";
  document.getElementById("rhizBackg").style.display = "none";
}

/*Close menu when category is clicked*/
function closeMenu() {
  document.getElementById("menuCheck").checked = false;
  document.getElementById("menuBackg").style.display = "none";
  document.getElementById("menu").style.zIndex = 0;
  
}
function openMenuBack() {
  document.getElementById("menuBackg").style.display = "block";
  document.getElementById("menu").style.zIndex = 1000;
}
function openPopup() {
  document.getElementById("popup_capture").style.display = "block";
  document.getElementById("popup_captureBackg").style.display = "block";
}
function closePopCapt() {
  document.getElementById("popup_capture").style.display = "none";
  document.getElementById("popup_captureBackg").style.display = "none";
}

/*Description animation loops*/

if(document.title === "ASN RHIZO-NETWORK"){
  var i = 0; 

  function myLoop1() {
    setTimeout(function () {
      i++; 
      if (i < 10) {
        myLoop1(); 
        animation1Loop();
      } 
    }, 20000);
  }
  myLoop1();
  
  var opdesc1 = ["0.8s", "20s","40s","60s", "80s", "100s", "120s", "140s","160s","180s"];
  var opdesc2 = ["5.8s", "25s", "45s","65s", "85s", "105s","125s", "145s","165s", "185s"];
  var opdesc3 = ["10.8s","30s","50s","70s", "90s", "110s", "130s", "150s", "170s", "195s"];
  function animation1Loop() {
    document.getElementById("desc1").style.animationDelay = opdesc1[i];
    document.getElementById("desc2").style.animationDelay = opdesc2[i];
    document.getElementById("desc3").style.animationDelay = opdesc3[i];
  }
  animation1Loop();
}



/*Go to level2 page*/
function gotoLevel2() {
  window.location.href = "exhibition/our_bio_tech_planet.html";
}


