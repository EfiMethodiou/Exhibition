//POPUP FUNCTIONS FOR THE GROUPS
function openViolet() {
  document.getElementById("violetPopup").style.display = "block";
  document.getElementById("groupBackg").style.display = "block";
  document.getElementById("infoBackg").style.display = "none";
  document.getElementById("info_popup_M_S").style.display = "none";
}

function openOrange() {
  document.getElementById("orangePopup").style.display = "block";
  document.getElementById("groupBackg").style.display = "block";
  document.getElementById("infoBackg").style.display = "none";
  document.getElementById("info_popup_M_S").style.display = "none";
}

function openRed() {
  document.getElementById("redPopup").style.display = "block";
  document.getElementById("groupBackg").style.display = "block";
  document.getElementById("infoBackg").style.display = "none";
  document.getElementById("info_popup_M_S").style.display = "none";
}

function openGreen() {
  document.getElementById("greenPopup").style.display = "block";
  document.getElementById("groupBackg").style.display = "block";
  document.getElementById("infoBackg").style.display = "none";
  document.getElementById("info_popup_M_S").style.display = "none";
}
function closePopup() {
  document.getElementById("violetPopup").style.display = "none";
  document.getElementById("orangePopup").style.display = "none";
  document.getElementById("redPopup").style.display = "none";
  document.getElementById("greenPopup").style.display = "none";
  document.getElementById("groupBackg").style.display = "none";
}

/*
    SLIDER LEFT AND RIGHT FUNCTIONS
*/
function goRight() {
  if (
    document.getElementById("greenGroup").style.display === "inline" &&
    document.getElementById("redGroup").style.display === "inline"
  ) {
    document.getElementById("violetGroup2").style.display = "inline";
    document.getElementById("greenGroup").style.paddingLeft = "0px";
    document.getElementById("violetGroup2").style.paddingLeft = "10%";
    document.getElementById("redGroup").style.display = "none";
  } else if (
    document.getElementById("greenGroup").style.display === "inline" &&
    document.getElementById("violetGroup2").style.display === "inline"
  ) {
    document.getElementById("violetGroup2").style.display = "none";
    document.getElementById("greenGroup").style.paddingLeft = "10%";
    document.getElementById("violetGroup").style.display = "inline";
    document.getElementById("orangeGroup").style.display = "inline";
    document.getElementById("greenGroup").style.display = "none";
  } else if (document.getElementById("violetGroup").style.display === "none") {
    document.getElementById("orangeGroup").style.display = "none";
    document.getElementById("redGroup").style.display = "inline";
    document.getElementById("greenGroup").style.float = "none";
    document.getElementById("greenGroup").style.paddingLeft = "10%";
    document.getElementById("greenGroup").style.display = "inline";
  } else {
    document.getElementById("violetGroup").style.display = "none";
    document.getElementById("redGroup").style.display = "inline";
  }
}

function goLeft() {
  if (
    document.getElementById("violetGroup2").style.display === "inline" &&
    document.getElementById("greenGroup").style.display === "inline"
  ) {
    document.getElementById("violetGroup2").style.display = "none";
    document.getElementById("greenGroup").style.float = "none";
    document.getElementById("greenGroup").style.paddingLeft = "10%";
    document.getElementById("redGroup").style.display = "inline";
  } else if (
    document.getElementById("redGroup").style.display === "inline" &&
    document.getElementById("greenGroup").style.display === "inline"
  ) {
    document.getElementById("greenGroup").style.display = "none";
    document.getElementById("orangeGroup").style.display = "inline";
  }
  //return to default
  else if (
    document.getElementById("orangeGroup").style.display === "inline" &&
    document.getElementById("redGroup").style.display === "inline"
  ) {
    document.getElementById("violetGroup").style.display = "inline";
    document.getElementById("redGroup").style.display = "none";
  } else {
    document.getElementById("greenGroup").style.display = "inline";
    document.getElementById("violetGroup").style.display = "none";
    document.getElementById("violetGroup2").style.display = "inline";
    document.getElementById("orangeGroup").style.display = "none";
    document.getElementById("greenGroup").style.paddingLeft = "0px";
    document.getElementById("violetGroup2").style.paddingLeft = "10%";
    document.getElementById("redGroup").style.display = "none";
  }
}


/*Open slider to right part according to artist*/
console.log(document.title);
//red group artists
if(document.title === "Jadwiga Subczyńska" || document.title === "Paulina Misiak" 
|| document.title === "Joanna Hoffmann"){   
    document.getElementById("violetGroup").style.display = "none";
    document.getElementById("redGroup").style.display = "inline";    
}
//green group artists
if(document.title === "Jill Scott   Marille Hahne" || document.title === "Anna Dumitriu   Alex May" 
|| document.title === "Joanna Hoffmann   Andre Bartetzki"){   
    document.getElementById("violetGroup").style.display = "none";
    document.getElementById("orangeGroup").style.display = "none";
    document.getElementById("redGroup").style.display = "none";
    document.getElementById("greenGroup").style.display = "inline";
    document.getElementById("greenGroup").style.paddingLeft = "0px";
    document.getElementById("violetGroup2").style.display = "inline";
    document.getElementById("violetGroup2").style.paddingLeft = "10%";    
}