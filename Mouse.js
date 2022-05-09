import { Entity } from "./Entity.js";

export class Mouse extends Entity {
    constructor(ctx) {
        super(ctx);
        this.display = false;
    }
    update() {
        if(!this.display) return;
        super.update();
    }
    switchStatus() {
        this.display = !this.display;
    }
}