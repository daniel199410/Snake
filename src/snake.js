function snake(){
    this.pieces = []
    this.direction = "RIGHT"

    for(var i = 0; i < INITIAL_PIECES; i++){
        this.pieces.push(new piece(i * PIECE_WIDTH, INITIAL_Y))
    }

    this.head = this.pieces[this.pieces.length - 1]

    this.drawSnake = function(){
        for(var i = 0; i < this.pieces.length; i++){
            var piece = this.pieces[i]
            fill(255)
            noStroke()
            rect(piece.x, piece.y, piece.width, piece.width)
        }
    }

    this.move = function(){
        for(var i = 0; i < this.pieces.length - 1; i++){
            this.pieces[i].x = this.pieces[i + 1].x
            this.pieces[i].y = this.pieces[i + 1].y
        }
        switch(this.direction){
            case "RIGHT":
                if(this.head.x == WIDTH)
                    this.head.x = 0
                else
                    this.head.x += PIECE_WIDTH
            break
            case "LEFT":
                if(this.head.x == 0)
                    this.head.x = WIDTH
                else
                    this.pieces[this.pieces.length - 1].x -= PIECE_WIDTH
            break
            case "UP":
                if(this.head.y == 0)
                    this.head.y = HEIGHT
                else
                    this.head.y -= PIECE_WIDTH
            break
            case "DOWN":
                if(this.head.y == HEIGHT)
                    this.head.y = 0
                else
                    this.head.y += PIECE_WIDTH
            break
        }      
        this.eat()
        if(this.colliton())
            noLoop()
    }

    this.eat = function(){
        if(this.head.x == food.x && this.head.y == food.y){
            var lastPiece = this.pieces[this.pieces.length - 1]
            switch(this.direction){
                case "RIGHT":
                    this.pieces.push(new piece(lastPiece.x + PIECE_WIDTH, lastPiece.y))
                    this.head = this.pieces[this.pieces.length - 1]
                break  
            }
            food.generate()
        }
    }

    this.colliton = function(){
        for(var i = 0; i < this.pieces.length - 1; i++){
            if(this.head.isCollition(this.pieces[i]))
                return true
        }        
        return false
    }
}
if(typeof(module) != 'undefined'){
    module.exports = snake
}