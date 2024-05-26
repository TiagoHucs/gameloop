//criando canvas
var canvas = new Canvas();
var game = new Game();

function update() {
    this.game.update();
}

function render(){
    canvas.clear("black");    
    canvas.draw(game);  
}

this.window.addEventListener('keydown', e => {
    this.game.keydown(e);
})

this.window.addEventListener('keyup', e => {
    this.game.keyup(e);
})

function execute(){
    update();
    render();
    requestAnimationFrame(execute);
}

requestAnimationFrame(execute);







