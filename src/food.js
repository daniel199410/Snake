function food(){
    this.x
    this.y
    this.generate = function(){
        this.x = floor(Math.random() * WIDTH)
        this.x -= this.x % PIECE_WIDTH
        this.y = floor(Math.random() * HEIGHT)
        this.y -= this.y % PIECE_WIDTH
    }
    this.draw = function(){
        fill("#F44336")
        noStroke()
        rect(this.x, this.y, PIECE_WIDTH, PIECE_WIDTH)
    }
}

if(typeof(module) != 'undefined'){
    module.export = food
}
