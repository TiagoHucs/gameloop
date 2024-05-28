class Game {
    constructor(resolution) {
        console.log(resolution)
        this.hero = new Hero(resolution);
    }

    keydown(e) {
        this.hero.stop();
        switch (e.code) {
            case 'ArrowUp':
                this.hero.speed.y = -this.hero.h;
                break;
            case 'ArrowDown':
                this.hero.speed.y = this.hero.h;
                break;
            case 'ArrowLeft':
                this.hero.speed.x = -this.hero.w;
                break;
            case 'ArrowRight':
                this.hero.speed.x = +this.hero.w;
                break;
        }
    }

    keyup(e) {
        switch (e.code) {
            case 'ArrowUp':
                //this.hero.speed.y = 0;
                break;
            case 'ArrowDown':
                //this.hero.speed.y = 0
                break;
            case 'ArrowLeft':
                //this.hero.speed.x = 0
                break;
            case 'ArrowRight':
                //this.hero.speed.x = 0
                break;
        }
    }

    update(){
        this.hero.move();
    }
}
