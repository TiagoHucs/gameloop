class Canvas {

    constructor() {
        this.canvas = document.getElementById("canvas");
        if (!this.canvas) {
            this.canvas = document.createElement("canvas");
            document.body.appendChild(this.canvas);
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }
        this.ctx = this.canvas.getContext("2d");
    }

    clear() {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    }

    draw(game) {
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(game.hero.x, game.hero.y, game.hero.w, game.hero.h);
    }

    getResolution(){
        return {width: this.canvas.width, height: this.canvas.height}
    }

}