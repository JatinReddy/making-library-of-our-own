function isTouching(object1, object2){
    if(Math.abs(object1.x - object2.x) < (object1.width/2 + object2.width/2) &&
    Math.abs(object1.y - object2.y) < (object1.height/2 + object2.height/2)){
      // YES
      return true;
    }
    else {
      // NO
      return false;
    }
  }
  
  function bounceOff(object,target){
    
    if(Math.abs(fixedRect.y - object.y) < (fixedRect.height/2 + object.height/2)){
      if (Math.abs(target.x - object.x)<(target.width/2 + object.width/2)){
        object.velocityX = - object.velocityX
      }
    }
    else if (Math.abs(fixedRect.x - object.x)<(fixedRect.width/2 + object.width/2)) {
      if(Math.abs(target.y - object.y) < (target.height/2 + object.height/2)){
        object.velocityY = -object.velocityY;
      }   
    }
    
  }
  
  function addition(a,b){
    return a+b;
  }
  