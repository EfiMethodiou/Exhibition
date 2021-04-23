/*Go back to level_2 page*/
function backToLevel2() {
  window.location.href = "../level_2.html";
}

function openMS_pop() {
  document.getElementById("infoBackg").style.display = "block";
  document.getElementById("info_popup").style.display = "block";
}
function closeMS_pop() {
  document.getElementById("infoBackg").style.display = "none";
  document.getElementById("info_popup").style.display = "none";
}

//Node glowing

//Navigation functions
function gotoRegnumAnimale() {
  setTimeout(function () {
    window.location.href = "larys_lub.html";
  }, 2200);
  document.getElementsByClassName("ripple-open");
  $(".ripple-open").toggleClass("ripple-open-active");
}
setTimeout(function () {
  document.getElementsByClassName("ripple-close");
  $(".ripple-close").toggleClass("ripple-close-active");
  console.log("it");
}, 2400);

function gotoBrokenLinks() {
  window.location.href = "maria_subc.html";
}
