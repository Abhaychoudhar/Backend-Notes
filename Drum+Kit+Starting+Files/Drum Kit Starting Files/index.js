const node=document.querySelectorAll("button");
for(let i=0;i<node.length;i++){
    node[i].addEventListener("click",function(){
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
    })
};