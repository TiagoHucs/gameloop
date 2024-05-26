class Game {
    constructor() {
        this.hero = new Hero();
    }

    keydown(e) {
        switch (e.code) {
            case 'ArrowUp':
                this.hero.speed.y = this.hero.speed.y - 10;
                break;
            case 'ArrowDown':
                this.hero.speed.y = this.hero.speed.y + 10;
                break;
            case 'ArrowLeft':
                this.hero.speed.x = this.hero.speed.x - 10;
                break;
            case 'ArrowRight':
                this.hero.speed.x = this.hero.speed.x + 10;
                break;
        }
    }

    keyup(e) {
        switch (e.code) {
            case 'ArrowUp':
                this.hero.speed.y = 0;
                break;
            case 'ArrowDown':
                this.hero.speed.y = 0
                break;
            case 'ArrowLeft':
                this.hero.speed.x = 0
                break;
            case 'ArrowRight':
                this.hero.speed.x = 0
                break;
        }
    }

    update(){
        this.hero.move();
    }
}
