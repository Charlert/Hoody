import { Entity } from "./Entity.js";

export class Player extends Entity {
    constructor(ctx) {
        super(ctx);
        this.x = innerWidth / 2;
        this.y = innerHeight / 2;
        this.velocity = { "x": 0, "y": 0 }
        this.acceleration = { "x": 0, "y": 0 }
    }
    update() {
        const new_v = {
            "x": this.velocity.x + this.acceleration.x,
            "y": this.velocity.y + this.acceleration.y
        }
        this.x += (this.velocity.x + new_v.x) / 2;
        this.y += (this.velocity.y + new_v.y) / 2;
        while (this.x < 0 || this.y < 0) {
            this.x += innerWidth;
            this.y += innerHeight;
        }
        this.x %= innerWidth;
        this.y %= innerHeight;
        this.velocity = new_v;
        super.update();
    }
}