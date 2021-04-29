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

/* landspace mode
var orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
if(window.matchMedia("(max-width: 700px)")){
    console.log("it runs ");
    orientation = "landscape-primary";
   
} */

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
