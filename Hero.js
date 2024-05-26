class Hero {
    constructor() {
        this.x = 30;
        this.y = 60;
        this.s = 30;

        this.speed = { y: 0, x: 0};
    }

    move(){
        this.x = this.x + this.speed.x;
        this.y = this.y + this.speed.y;
    }


}
