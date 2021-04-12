/*Go back to level_2 page*/
function backToLevel2(){
    window.location.href = "level_2.html";
}

function openMS_pop(){    
    document.getElementById("popupBackg").style.display = "block";
    document.getElementById("info_popup_M_S").style.display = "block";
}
function closeMS_pop(){    
    document.getElementById("popupBackg").style.display = "none";
    document.getElementById("info_popup_M_S").style.display = "none";
}

//SLIDER FUNCTIONS
function goLeft(){
    if(document.getElementById("violetGroup").style.display === "none"){
        document.getElementById("orangeGroup").style.display = "none";
        document.getElementById("left_arrow").style.opacity = "0.5";
    }
    else{
        document.getElementById("violetGroup").style.display = "none";
        document.getElementById("right_arrow").style.opacity = "1";
    }
}

function goRight(){
    //return to default
    if(document.getElementById("orangeGroup").style.display === "none" && 
    document.getElementById("violetGroup").style.display === "none"){        
        document.getElementById("orangeGroup").style.display = "inline";
        document.getElementById("left_arrow").style.opacity = "1";
    }
    else if(document.getElementById("violetGroup").style.display === "none" && 
    document.getElementById("orangeGroup").style.display === "inline"){        
        document.getElementById("violetGroup").style.display = "inline";
        document.getElementById("right_arrow").style.opacity = "0.5";
    }
}