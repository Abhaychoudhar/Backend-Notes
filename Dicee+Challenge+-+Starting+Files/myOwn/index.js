var num1 = Math.floor(Math.random()*6) + 1;
var num2 = Math.floor(Math.random()*6) + 1;
function dot(n1,n2){
    const node1=document.querySelectorAll(".left div");
    const node2=document.querySelectorAll(".right div");
    
    for(let i=0;i<n1;i++){
         node1[i].style.backgroundColor="white";
    }
    for(let i=0;i<n2;i++){
        node2[i].style.backgroundColor="white";
   }

}
var val=document.querySelector("h1");
dot(num1,num2);
if( num1 > num2 ){
     val.innerHTML="Player1 Wins";
}
else if( num1 < num2){
    val.innerHTML="Player2 Wins";
}
else{
      val.innerHTML="Match Draw";
}

