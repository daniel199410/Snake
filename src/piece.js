function piece(x, y){
    this.x = x
    this.y = y
    this.width = PIECE_WIDTH
    this.isCollition = function(piece){
        return (this.x == piece.x && this.y == piece.y)
    }
}

if(typeof(module) != 'undefined'){
    module.export = piece
}