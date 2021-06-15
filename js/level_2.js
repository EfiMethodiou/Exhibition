/*________________LEVEL2_______PAGE____________*/
/*Go back to main page*/
function backToMain() {
  window.location.href = "../index.html";
}

/*
  Open Curational Statement popup*/
function openCurStat() {
  document.getElementById("curat_stat").style.display = "block";
  document.getElementById("menuPopupBackg").style.display = "block";
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
  document.getElementById("curat_stat").style.display = "none";
  document.getElementById("about__exhibition").style.display = "none";
  document.getElementById("augmented_reality").style.display = "none";
  document.getElementById("research").style.display = "none";
  document.getElementById("menuPopupBackg").style.display = "none";
}

/*
  Go to level2 page*/
var vid = document.getElementById("animation");
function gotoArtist() {
  document.getElementById("animBack").style.display = "block";
  vid.play();

  setTimeout(function () {
    window.location.href = "artist/jill_sc_maril_hah.html";
  }, 5500);
}
function gotoMariaSubc() {
  window.location.href = "artist/maria_subc.html";
}

function gotoJill_Sc_Maril_Hah() {
  window.location.href = "artist/jill_sc_maril_hah.html";
}

/*animation loop for second description*/
if (document.title === "OUR BIO-TECH PLANET") {
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

  var opdesc2_1 = [
    "0.8s",
    "15s",
    "30s",
    "45s",
    "60s",
    "75s",
    "90s",
    "105s",
    "120s",
    "135s",
  ];
  var opdesc2_2 = [
    "5.8s",
    "20s",
    "35s",
    "50s",
    "65s",
    "80s",
    "95s",
    "110s",
    "125s",
    "140s",
  ];

  function animation2Loop() {
    document.getElementById("desc2_1").style.animationDelay = opdesc2_1[x];
    document.getElementById("desc2_2").style.animationDelay = opdesc2_2[x];
  }
  animation2Loop();
}
