
document.addEventListener("keypress",key)
function key(event) {
    
   if(event.key=='s'){
    var s=new Audio("sounds/tom-3.mp3")
    s.play()
   }
   else  if(event.key=='w'){
    var s=new Audio("sounds/tom-1.mp3")
    s.play()
    
   }
   else  if(event.key=='a'){
    var s=new Audio("sounds/tom-2.mp3")
    s.play()
    
   }
   else  if(event.key=='d'){
    var s=new Audio("sounds/tom-4.mp3")
    s.play()
    
   }
   else  if(event.key=='j'){
    var s=new Audio("sounds/snare.mp3")
    s.play()
    
   }
   else  if(event.key=='k'){
    var s=new Audio("sounds/kick-bass.mp3")
    s.play()
    
   }
   else  if(event.key=='l'){
    var s=new Audio("sounds/crash.mp3")
    s.play()
    
   }
}