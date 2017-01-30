function GameOver(){
    
    this.printGameOver = function(scl){
        fill(255);
        textFont(pressFont);
        textStyle(BOLD);
        if(width>600){
            textSize(20);
            textAlign(CENTER);
            text("Game Over, press enter to retry",width/2,height/2);
            text("Your score: "+scoreTemp,width/2,height/2+100);
            text("Max score for this window size: "+maxScore,width/2,height/2+200);
        }else{
            textSize(8);
            textAlign(CENTER);
            text("Game Over, press enter to retry",width/2,height/2);
            text("Your score: "+scoreTemp,width/2,height/2+100);
            text("Max score for this window size: "+maxScore,width/2,height/2+200);
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
            textAlign(CENTER)
            text("Press enter to begin!",width/2,height/2);
    }else{
        textSize(8);
        textAlign(CENTER)
        text("Press enter to begin!",width/2,height/2);
    }
    };
      
}