score=0;
cross=true;
audio= new Audio('playy.mp3')
audiogameover=new Audio('stop.mp3')
setTimeout(()=>{
   audio.play()

},100)
document.onkeydown=function(e){
    console.log("the key code is ", e.keyCode)
    if(e.keyCode==38){
    dino=document.querySelector('.dino')
    dino.classList.add('animateDino')
    setTimeout(()=>{
        dino.classList.remove('animateDino')
    },900)
  
    }

    if(e.keyCode==39){
        dino=document.querySelector('.dino')
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinoX+ 112+"px";
       
}
    if(e.keyCode==37){
        dino=document.querySelector('.dino')
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinoX-112+"px";
       
}
}

setInterval(() => {
    dino=document.querySelector('.dino')
    gameover=document.querySelector('.gameover')
   obstacle=document.querySelector('.obstacle')

   dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
   dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

   ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
   oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
   
   offSetX=Math.abs(dx-ox);
   offSetY=Math.abs(dy-oy);

   if(offSetX<90 && offSetY<56){
    gameover.innerHTML="Game Over - Reload to Play Again";
    obstacle.classList.remove('obstacleAni')
    audiogameover.play()
    setTimeout(()=>{
    audiogameover.pause();
    audio.pause();
    },1000)
   }
   else if( offSetX<130 && cross){
    score+=1;
    updateScore(score);
    cross=false;
    setTimeout(()=>{
      cross=true;
    },1000)
    setTimeout(()=>{
        anidur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'))
        newdur=anidur-0.2;
        obstacle.style.animationDuration=newdur+"s";
    },500)
   
   }

}, 10);

function updateScore(score){
scorecount.innerHTML="Your score: " + score
}