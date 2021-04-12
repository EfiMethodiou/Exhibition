/* 

 JavaScript functions for:
       level_0
       main
       level_2

*/


/*timer for level_0 to disappear*/
setTimeout(function () {
    $(".level_0").fadeToggle();
    window.location.href = "main.html";
}, 4500);

/*________________MAIN_______PAGE__________*/
/*Open popups from the menu*/
function openAbout(){
document.getElementById("about").style.display = "block";
document.getElementById("aboutBackg").style.display = "block";
}
function openRhizonet(){
    document.getElementById("rhizonet").style.display = "block";
    document.getElementById("rhizonetBackg").style.display = "block";
}
/*Close about asn*/
function closeAbout(){
    document.getElementById("about").style.display = "none";
    document.getElementById("aboutBackg").style.display = "none";
}
function closeRhizo(){
    document.getElementById("rhizonet").style.display ="none";
    document.getElementById("rhizonetBackg").style.display = "none";
}

/*Close menu when category is clicked*/
function closeMenu() {    
    document.getElementById("menuCheck").checked = false;  
    document.getElementById("menuBackg").style.display = "none";  
}
function openMenuBack(){
    document.getElementById("menuBackg").style.display = "block"; 
}

function openPopup(){
    document.getElementById("popup_capture").style.display ="block";
    document.getElementById("popup_captureBackg").style.display ="block";
}
function closePopCapt(){
    document.getElementById("popup_capture").style.display ="none";
    document.getElementById("popup_captureBackg").style.display ="none";
}
/*Go to level2 page*/
function gotoLevel2(){
    window.location.href = "level_2.html";
}




/*________________LEVEL2_______PAGE____________*/
/*Go back to main page*/
function backToMain(){
    window.location.href = "main.html";
}

/*
Open ABOUT THE EXHIBITION popup*/
function openAbExhib(){
    document.getElementById("about__exhibition").style.display = "block";
    document.getElementById("about__exhibitionBackg").style.display = "block";
}
/*Close ABOUT THE EXHIBITION popup*/
function closeAbExhib(){
    document.getElementById("about__exhibition").style.display = "none";
    document.getElementById("about__exhibitionBackg").style.display = "none";
} 
/*
Open AUGMENTED REALITY popup*/
function openArPop(){
    document.getElementById("augmented_reality").style.display = "block";
    document.getElementById("augmented_realityBackg").style.display = "block";
}
/*Close AUGMENTED REALITY popup*/
function closeArPop(){
    document.getElementById("augmented_reality").style.display = "none";
    document.getElementById("augmented_realityBackg").style.display = "none";
} 
/*
Open RESEARCH popup*/
function openResearPop(){
    document.getElementById("research").style.display = "block";
    document.getElementById("researchBackg").style.display = "block";
}
/*Close RESEARCH popup*/
function closeResearPop(){
    document.getElementById("research").style.display = "none";
    document.getElementById("researchBackg").style.display = "none";
} 

/*
Go to level2 page*/
function gotoMariaSubc(){
    window.location.href = "maria_subc.html";
}