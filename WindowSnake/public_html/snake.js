function Snake(){
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
    
    this.update = function(){
        
        var secondSegmentCollision = false;
        
        //if total is tail length no food has been eaten
        if(this.total === this.tail.length){
            for(var i = 0;i < this.tail.length-1;i++){
                //shifts the segments
                this.tail[i] = this.tail[i + 1];
            }
        }
        
        //create the second segment (the segment after the head)
        this.tail[this.total-1] = createVector(this.x,this.y);
        
        
        //speed on grid of scale 20
        //the head moves up while the previous head is stored in tail[total-1]
        this.x = this.x + this.xspeed*scl;
        this.y = this.y + this.yspeed*scl;
        
        this.x = constrain(this.x,0,width-scl);
        this.y = constrain(this.y,0,height-scl);
        
        return secondSegmentCollision;
    };
    
    this.show = function(){
        //fill: all subsequent shapes will be filled with white
        fill(255);
        
        //draw every segment apart from the head
        for(var i = 0;i < this.total;i++){
            rect(this.tail[i].x,this.tail[i].y,scl,scl);
        }
        //draw the head
        rect(this.x,this.y,scl,scl);
    };
    
    this.eat = function(pos){
        var d = dist(this.x,this.y,pos.x,pos.y);
        if(d < 1){
            this.total++;
            return true;
        }else{
            return false;
        }
    };
    
    this.tailCollided = function(){
        
        var hasCollided = false;
        
        for(var i = 0;i < this.tail.length-1;i++){
            if((this.tail[i].x===this.tail[i+1].x) && 
                    (this.tail[i].y === this.tail[i+1].y)){
                hasCollided = true;
            }
        }
        for(var i = 0;i < this.tail.length;i++){
            if((this.x===this.tail[i].x) && 
                    (this.y === this.tail[i].y)){
                hasCollided = true;
            }
        }
        return hasCollided;
    };
    
    
    }