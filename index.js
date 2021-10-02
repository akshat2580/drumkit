var nodb=document.querySelectorAll(".drum").length;

for(var i=0;i<nodb;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function(){

var buttonInnerhtml=this.innerHTML;

makesound(buttonInnerhtml);
buttonAnime(buttonInnerhtml);
});

}
document.addEventListener("keypress",function(eve){
 makesound(eve.key);
 buttonAnime(eve.key);
});

function makesound(key){
    switch(key){

        case "w":
            var t1=new Audio("sounds/tom-1.mp3");
            t1.play();break;
        
            case "a":
            var t2=new Audio("sounds/tom-2.mp3");
            t2.play();break;
            
            case "s":
            var t3=new Audio("sounds/tom-3.mp3");
            t3.play();break;
        
            case "d":
            var t4=new Audio("sounds/tom-4.mp3");
            t4.play();break;
        
            case "j":
            var t15=new Audio("sounds/snare.mp3");
            t15.play();break;
        
            case "k":
            var t16=new Audio("sounds/crash.mp3");
            t16.play();break;
        
            case "l":
            var t17=new Audio("sounds/kick-bass.mp3");
            t17.play();break;
         
            default:console.log(eve);
        
        
        }
    
}
function buttonAnime(currentKey){
var acbutton=document.querySelector("."+currentKey);
acbutton.classList.add("pressed");
setTimeout(function(){
    acbutton.classList.remove("pressed");

}, 100); 

}