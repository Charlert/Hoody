export class Entity {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 0;
        this.y = 0;
        this.radiu = 16;
    }
    update() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radiu,
            0, 2 * Math.PI);
        this.ctx.fill();
    }
}
