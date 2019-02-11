var animationMatrix = [false,false,false,false,false];
function startAnimation(index){

    var element = document.querySelector('.animate-income-and-bonus-'+index);
    var image = document.querySelector("#arrow-"+index);
    if(animationMatrix[index-1]==false) {
        element.style.color   = "red";
        element.style.height  = "365%";
        element.style.padding = "15px";
        image.style.transform = 'rotate('+'180deg)';
        animationMatrix[index-1] = true;
    } else {
        element.style.padding    = "0px";
        element.style.height     = "0px";
        element.style.overflow   = "hidden";
        image.style.transform    = 'rotate('+'0deg)';
        animationMatrix[index-1] = false;
    }
}

var user_Credit_Card_Toggle_Count = 0;

function useCreditCardToggle(){

    user_Credit_Card_Toggle_Count++;
    var grandParent = document.querySelector(".userInfo");
    var parentElement = document.querySelector(".userInfo .userInfoContent");
    var element = document.querySelectorAll(".hide-me");
    if(user_Credit_Card_Toggle_Count%2 != 0){ 
        parentElement.style.height = "450px"; 
        grandParent.style.height = "650px";
        element[0].style.display   = "none";
        element[1].style.display   ="none";
        element[2].style.display   ="none";

    }else{
        parentElement.style.height = "650px";
        grandParent.style.height  = "900px";
        element[0].style.display   = "block";
        element[1].style.display   ="block";
        element[2].style.display   ="block"; 
    }
}

function navigateToFirstPage(){
    location.href = "file:///C:/Users/Admin/Documents/assignment/idfc%20test.html";
}

var showFlexibilityBox = true;
function toggleFlexibilityHandler(){
   
   var toggleFlexibility = document.querySelector(".toggle-flexibility-box");
   var flexibiliySecondBox = document.querySelector(".flexibility-second-box")
    if(showFlexibilityBox){
        flexibiliySecondBox.style.display = "block";
        toggleFlexibility.style.display = "none";

    }else{
        flexibiliySecondBox.style.display = "none";
        toggleFlexibility.style.display = "block";
    }
    showFlexibilityBox = !showFlexibilityBox;

}

function closeIncomeAndBonusAnimator(){
    var animationMatrix = [true,true,true,true,true];
   
    for(let i=0;i<animationMatrix.length;i++){
        let index= i+1;
        var element = document.querySelector('.animate-income-and-bonus-'+index);
        var image = document.querySelector("#arrow-"+index);
        element.style.padding    = "0px";
        element.style.height     = "0px";
        element.style.overflow   = "hidden";
        image.style.transform    = 'rotate('+'0deg)';
    }
}