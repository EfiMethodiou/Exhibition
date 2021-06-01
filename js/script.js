/* 

 JavaScript functions for:
       level_0
       main
       level_2

*/

//the loader will appear only the first time that the user opens the page
function firstLoad() {
  if (localStorage.getItem("hasCodeRunBefore") === null) {
    document.getElementById("level_0").style.display = "block";
    setTimeout(function () {
      $(".level_0").fadeToggle();
    }, 7000);
    localStorage.setItem("hasCodeRunBefore", true);
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
}
function openMenuBack() {
  document.getElementById("menuBackg").style.display = "block";
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

/*animation loop for second description*/
if(document.title === "OUR BIO-TECH PLANET"){
  var x = 0; //  set your counter to 1

  function myLoop2() {
    setTimeout(function () {
      x++; 
      if (x < 10) {
        myLoop2(); 
        animation2Loop();
      } 
    }, 15000);
  }
  myLoop2();
  
  var opdesc2_1 = ["0.8s", "15s","30s","45s", "60s", "75s", "90s", "105s","120s","135s"];
  var opdesc2_2 = ["5.8s", "20s", "35s","50s", "65s", "80s","95s", "110s","125s", "140s"];
  
  function animation2Loop() {
    document.getElementById("desc2_1").style.animationDelay = opdesc2_1[x];
    document.getElementById("desc2_2").style.animationDelay = opdesc2_2[x];
  }
  animation2Loop();
}



/*Go to level2 page*/
function gotoLevel2() {
  window.location.href = "exhibition/our_bio_tech_planet.html";
}

/*________________LEVEL2_______PAGE____________*/
/*Go back to main page*/
function backToMain() {
  window.location.href = "../index.html";
}

/*
Open ABOUT THE EXHIBITION popup*/
function openAbExhib() {
  document.getElementById("about__exhibition").style.display = "block";
  document.getElementById("menuPopupBackg").style.display = "block";
}
/*
Open AUGMENTED REALITY popup*/
function openArPop() {
  document.getElementById("augmented_reality").style.display = "block";
  document.getElementById("menuPopupBackg").style.display = "block";
}
/*
Open RESEARCH popup*/
function openResearPop() {
  document.getElementById("research").style.display = "block";
  document.getElementById("menuPopupBackg").style.display = "block";
}

/*Close popup Menus*/
function closePopupMenu() {
  document.getElementById("about__exhibition").style.display = "none";
  document.getElementById("augmented_reality").style.display = "none";
  document.getElementById("research").style.display = "none";
  document.getElementById("menuPopupBackg").style.display = "none";
}

/*
Go to level2 page*/
function gotoMariaSubc() {
  window.location.href = "artist/maria_subc.html";
}

function gotoJill_Sc_Maril_Hah() {
  window.location.href = "artist/jill_sc_maril_hah.html";
}



/*function that blocks safari from reacting with the 3d model

var ua = navigator.userAgent.toLowerCase(); 
if (ua.indexOf('safari') != -1) { 
  if (ua.indexOf('chrome') > -1) {
  console.log("You are using Chrome");    
  } else {
  console.log("You are using Safari");
  document.getElementById("renderCanvas").style.pointerEvents = "none";
    
  }
}*/