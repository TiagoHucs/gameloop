//criando canvas
var canvas = new Canvas();
var game = new Game(canvas.getResolution());

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

//ANIMAÇÃO SEM LIMITAR FRAMES
//function execute(){
//    update();
//    render();
//    requestAnimationFrame(execute);
//}
//requestAnimationFrame(execute);


//ANIMAÇÃO LIMITANDO FRAMES
let lastFrameTime = 0;
const fps = 1;
const fpsInterval = 200 / fps;
function animate(currentTime) {
    //update();
    //render();
    requestAnimationFrame(animate);

    const elapsed = currentTime - lastFrameTime;

    if (elapsed > fpsInterval) {
        lastFrameTime = currentTime - (elapsed % fpsInterval);
        update();
        render();
    }
}
requestAnimationFrame(animate);



