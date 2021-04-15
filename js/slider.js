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
function goLeft() {
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

function goRight() {
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

/*
HOVER OVER THE PICTURES TO SHOW TITLES OF ARTWORKS
*/

const violet1 = document.querySelector("#node_v1");
violet1.addEventListener("mouseover", (event) => {
  document.getElementById("violet1").style.display = "block";
  document.getElementById("titles_container").style.left = "18%";
});
violet1.addEventListener("mouseout", (event) => {
  document.getElementById("violet1").style.display = "none";
});
//position 2
const violet1_1 = document.querySelector("#node_v1_1");
violet1_1.addEventListener("mouseover", (event) => {
  document.getElementById("violet1").style.display = "block";
  document.getElementById("titles_container").style.left = "51%";
});
violet1_1.addEventListener("mouseout", (event) => {
  document.getElementById("violet1").style.display = "none";
});
//VIOLET 2
const violet2 = document.querySelector("#node_v2");
violet2.addEventListener("mouseover", (event) => {
  document.getElementById("violet2").style.display = "block";
  document.getElementById("titles_container").style.left = "25%";
});
violet2.addEventListener("mouseout", (event) => {
  document.getElementById("violet2").style.display = "none";
});
//position 2
const violet2_1 = document.querySelector("#node_v2_1");
violet2_1.addEventListener("mouseover", (event) => {
  document.getElementById("violet2").style.display = "block";
  document.getElementById("titles_container").style.left = "58%";
});
violet2_1.addEventListener("mouseout", (event) => {
  document.getElementById("violet2").style.display = "none";
});
//VIOLET 3
const violet3 = document.querySelector("#node_v3");
violet3.addEventListener("mouseover", (event) => {
  document.getElementById("violet3").style.display = "block";
  document.getElementById("titles_container").style.left = "31.5%";
});
violet3.addEventListener("mouseout", (event) => {
  document.getElementById("violet3").style.display = "none";
});
//position 2
const violet3_1 = document.querySelector("#node_v3_1");
violet3_1.addEventListener("mouseover", (event) => {
  document.getElementById("violet3").style.display = "block";
  document.getElementById("titles_container").style.left = "64.5%";
});
violet3_1.addEventListener("mouseout", (event) => {
  document.getElementById("violet3").style.display = "none";
});
//VIOLET 4
const violet4 = document.querySelector("#node_v4");
violet4.addEventListener("mouseover", (event) => {
  document.getElementById("violet4").style.display = "block";
  document.getElementById("titles_container").style.left = "38%";
});
violet4.addEventListener("mouseout", (event) => {
  document.getElementById("violet4").style.display = "none";
});
//position 2
const violet4_1 = document.querySelector("#node_v4_1");
violet4_1.addEventListener("mouseover", (event) => {
  document.getElementById("violet4").style.display = "block";
  document.getElementById("titles_container").style.left = "71%";
});
violet4_1.addEventListener("mouseout", (event) => {
  document.getElementById("violet4").style.display = "none";
});

//___________________ORANGE____
//     ORANGE 1

const orange1 = document.querySelector("#node_or1");
orange1.addEventListener("mouseover", (event) => {
  document.getElementById("orange1").style.display = "block";
  if (document.getElementById("violetGroup").style.display === "none") {
    document.getElementById("titles_container").style.left = "18.5%";
  } else {
    document.getElementById("titles_container").style.left = "51%";
  }
});
orange1.addEventListener("mouseout", (event) => {
  document.getElementById("orange1").style.display = "none";
});
//ORANGE 2
const orange2 = document.querySelector("#node_or2");
orange2.addEventListener("mouseover", (event) => {
  document.getElementById("orange2").style.display = "block";
  if (document.getElementById("violetGroup").style.display === "none") {
    document.getElementById("titles_container").style.left = "25%";
  } else {
    document.getElementById("titles_container").style.left = "58%";
  }
});
orange2.addEventListener("mouseout", (event) => {
  document.getElementById("orange2").style.display = "none";
});
// ORANGE 3
const orange3 = document.querySelector("#node_or3");
orange3.addEventListener("mouseover", (event) => {
  document.getElementById("orange3").style.display = "block";
  if (document.getElementById("violetGroup").style.display === "none") {
    document.getElementById("titles_container").style.left = "31.5%";
  } else {
    document.getElementById("titles_container").style.left = "64.5%";
  }
});
orange3.addEventListener("mouseout", (event) => {
  document.getElementById("orange3").style.display = "none";
});
//ORANGE 4
const orange4 = document.querySelector("#node_or4");
orange4.addEventListener("mouseover", (event) => {
  document.getElementById("orange4").style.display = "block";
  if (document.getElementById("violetGroup").style.display === "none") {
    document.getElementById("titles_container").style.left = "38%";
  } else {
    document.getElementById("titles_container").style.left = "71%";
  }
});
orange4.addEventListener("mouseout", (event) => {
  document.getElementById("orange4").style.display = "none";
});

//__________________RED____
//      RED 1

const red1 = document.querySelector("#node_r1");
red1.addEventListener("mouseover", (event) => {
  document.getElementById("red1").style.display = "block";
  if (document.getElementById("orangeGroup").style.display === "none") {
    document.getElementById("titles_container").style.left = "18.5%";
  } else {
    document.getElementById("titles_container").style.left = "58%";
  }
});
red1.addEventListener("mouseout", (event) => {
  document.getElementById("red1").style.display = "none";
});
// RED 2
const red2 = document.querySelector("#node_r2");
red2.addEventListener("mouseover", (event) => {
  document.getElementById("red2").style.display = "block";
  if (document.getElementById("orangeGroup").style.display === "none") {
    document.getElementById("titles_container").style.left = "24.7%";
  } else {
    document.getElementById("titles_container").style.left = "64.2%";
  }
});
red2.addEventListener("mouseout", (event) => {
  document.getElementById("red2").style.display = "none";
});
// RED 3
const red3 = document.querySelector("#node_r3");
red3.addEventListener("mouseover", (event) => {
  document.getElementById("red3").style.display = "block";
  if (document.getElementById("orangeGroup").style.display === "none") {
    document.getElementById("titles_container").style.left = "31.5%";
  } else {
    document.getElementById("titles_container").style.left = "71%";
  }
});
red3.addEventListener("mouseout", (event) => {
  document.getElementById("red3").style.display = "none";
});

//___________________GREEN____
//      GREEN 1

const green1 = document.querySelector("#node_gr1");
green1.addEventListener("mouseover", (event) => {
  document.getElementById("green1").style.display = "block";
  if (document.getElementById("redGroup").style.display === "none") {
    document.getElementById("titles_container").style.left = "18.5%";
  } else {
    document.getElementById("titles_container").style.left = "57.5%";
  }
});
green1.addEventListener("mouseout", (event) => {
  document.getElementById("green1").style.display = "none";
});
// GREEN 2
const green2 = document.querySelector("#node_gr2");
green2.addEventListener("mouseover", (event) => {
  document.getElementById("green2").style.display = "block";
  if (document.getElementById("redGroup").style.display === "none") {
    document.getElementById("titles_container").style.left = "25%";
  } else {
    document.getElementById("titles_container").style.left = "64%";
  }
});
green2.addEventListener("mouseout", (event) => {
  document.getElementById("green2").style.display = "none";
});
//  GREEN 3
const green3 = document.querySelector("#node_gr3");
green3.addEventListener("mouseover", (event) => {
  document.getElementById("green3").style.display = "block";
  if (document.getElementById("redGroup").style.display === "none") {
    document.getElementById("titles_container").style.left = "31.5%";
  } else {
    document.getElementById("titles_container").style.left = "70%";
  }
});
green3.addEventListener("mouseout", (event) => {
  document.getElementById("green3").style.display = "none";
});
