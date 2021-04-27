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

//OPEN AND CLOSE ARTWORK PAGES
function openBrokenLinks(){
  window.location.href = "../artworks/broken_links.html"
}
function closeBrokenLinks(){
  window.location.href = "../artist/maria_subc.html";
}
function openRegnumAnimale(){
  window.location.href ="../artworks/regnum_animale.html"
}
function closeRegnumAnimale(){
  window.location.href = "../artist/larys_lub.html";
}
function openVirophilia(){
  window.location.href = "../artworks/virophilia.html"
}
function closeVirophilia(){
  window.location.href = "../artist/pei_ying_lin.html";
}
function openLawofRel(){
  window.location.href = "../artworks/law_of_relati&interd.html"
}
function closeLawofRel(){
  window.location.href = "../artist/małgo_kaczm.html";
}
function openMorphism(){
  window.location.href = "../artworks/morphism.html"
}
function closeMorphism(){
  window.location.href = "../artist/marta_baczyk.html";
}
function openAlgoPhot(){
  window.location.href = "../artworks/algo_photogr.html"
}
function closeAlgoPhot(){
  window.locatopenAlgoPhotion.href = "../artist/alex_may.html";

}


//Navigation functions
function gotoMaria_Subc() {
  setTimeout(function () {
    window.location.href = "maria_subc.html";
  }, 2200);
  document.getElementsByClassName("ripple-open");
  $(".ripple-open").toggleClass("ripple-open-active");
}
function gotoLarys_lub() {
  setTimeout(function () {
    window.location.href = "larys_lub.html";
  }, 2200);
  document.getElementsByClassName("ripple-open");
  $(".ripple-open").toggleClass("ripple-open-active");
}
function gotoPei_YL() {
  setTimeout(function () {
    window.location.href = "pei_ying_lin.html";
  }, 2200);
  document.getElementsByClassName("ripple-open");
  $(".ripple-open").toggleClass("ripple-open-active");
}
function gotoMalgo_Kaczm() {
  setTimeout(function () {
    window.location.href = "małgo_kaczm.html";
  }, 2200);
  document.getElementsByClassName("ripple-open");
  $(".ripple-open").toggleClass("ripple-open-active");
}
function gotoMarta_Baczyk() {
  setTimeout(function () {
    window.location.href = "marta_baczyk.html";
  }, 2200);
  document.getElementsByClassName("ripple-open");
  $(".ripple-open").toggleClass("ripple-open-active");
}

function gotoAlex_May() {
  setTimeout(function () {
    window.location.href = "alex_may.html";
  }, 2200);
  document.getElementsByClassName("ripple-open");
  $(".ripple-open").toggleClass("ripple-open-active");
}


setTimeout(function () {
  document.getElementsByClassName("ripple-close");
  $(".ripple-close").toggleClass("ripple-close-active");
  console.log("it");
}, 2400);



