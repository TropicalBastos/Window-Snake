function GameOver(){
    
    this.printGameOver = function(scl){
        fill(255);
        textFont(pressFont);
        textStyle(BOLD);
        if(width>600){
            textSize(20);
            text("Game Over, press enter to retry",width/2-300,height/2);
            text("Your score: "+scoreTemp,width/2-100,height/2+100);
            text("Max score for this window size: "+maxScore,width/2-300,height/2+200);
        }else if(width>378){
            textSize(10);
            text("Game Over, press enter to retry",width/2-130,height/2);
            text("Your score: "+scoreTemp,width/2-50,height/2+100);
            text("Max score for this window size: "+maxScore,width/2-150,height/2+200);
            }else{
            textSize(8);
            text("Game Over, press enter to retry",width/2-130,height/2);
            text("Your score: "+scoreTemp,width/2-50,height/2+100);
            textSize(7.2);
            text("Max score for this window size: "+maxScore,width/2-130,height/2+200);
            }
    };
      
}

function StartGame(){
    
    this.printStart = function(scl){
        fill(255);
        textFont(pressFont);
        textStyle(BOLD);
        if(width>600){
            textSize(20);
            text("Press enter to begin!",width/2-190,height/2);
    }else{
        textSize(8);
        text("Press enter to begin!",width/2-70,height/2);
    }
    };
      
}