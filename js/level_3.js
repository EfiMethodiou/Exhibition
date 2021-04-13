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
    if(document.getElementById("greenGroup").style.display ==="inline" && 
    document.getElementById("redGroup").style.display ==="inline"){      
        document.getElementById("violetGroup2").style.display = "inline";
        document.getElementById("greenGroup").style.paddingLeft = "0px";
        document.getElementById("violetGroup2").style.paddingLeft = "10%";
        document.getElementById("redGroup").style.display = "none";
    }   
    else if(document.getElementById("greenGroup").style.display ==="inline" && 
    document.getElementById("violetGroup2").style.display ==="inline"){   
        document.getElementById("violetGroup2").style.display = "none"; 
        document.getElementById("greenGroup").style.paddingLeft = "10%";
        document.getElementById("violetGroup").style.display = "inline";    
        document.getElementById("orangeGroup").style.display = "inline";
        document.getElementById("greenGroup").style.display = "none";
    }
    else if(document.getElementById("violetGroup").style.display === "none"){
        document.getElementById("orangeGroup").style.display = "none";
        document.getElementById("redGroup").style.display = "inline";
        document.getElementById("greenGroup").style.float = "none";
        document.getElementById("greenGroup").style.paddingLeft = "10%";
        document.getElementById("greenGroup").style.display = "inline";      
    }   
    else{
        document.getElementById("violetGroup").style.display = "none";
        document.getElementById("redGroup").style.display = "inline";             
    }
   
}

function goRight(){
    if(document.getElementById("violetGroup2").style.display === "inline" &&
    document.getElementById("greenGroup").style.display === "inline"){
        document.getElementById("violetGroup2").style.display = "none";
        document.getElementById("greenGroup").style.float = "none";
        document.getElementById("greenGroup").style.paddingLeft = "10%";
        document.getElementById("redGroup").style.display = "inline";        
    }
    else if(document.getElementById("redGroup").style.display === "inline" &&
    document.getElementById("greenGroup").style.display === "inline"){       
        document.getElementById("greenGroup").style.display = "none";
        document.getElementById("orangeGroup").style.display = "inline";
    }
    //return to default
    else if(document.getElementById("orangeGroup").style.display === "inline" && 
    document.getElementById("redGroup").style.display === "inline"){        
        document.getElementById("violetGroup").style.display = "inline";
        document.getElementById("redGroup").style.display = "none";        
    }
    else {        
        document.getElementById("greenGroup").style.display = "inline";
        document.getElementById("violetGroup").style.display = "none";
        document.getElementById("violetGroup2").style.display = "inline";
        document.getElementById("orangeGroup").style.display = "none";
        document.getElementById("greenGroup").style.paddingLeft = "0px";
        document.getElementById("violetGroup2").style.paddingLeft = "10%";
        document.getElementById("redGroup").style.display = "none";
    }
}